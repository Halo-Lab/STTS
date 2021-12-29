import React, { useEffect, useState } from 'react';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';

import s from './DND.module.scss';
import IconStar from '../assets/IconStar/IconStar';
import IconFork from '../assets/IconFork/IconFork';
import IconDownload from '../assets/IconDownload/IconDownload';
import IconIssue from '../assets/IconIssue/IconIssue';
import Chart from '../SelectedRepo/Chart';
import IconDelete from '../assets/IconDelete/IconDelete';
import useBreakpoints from 'use-breakpoints-width';
import { useDispatch } from 'react-redux';
import actions from '../../redux/gitHub/actions';

const Example = ({ data = [], onHandleDelete, weeklyDownload }) => {
  const dispatch = useDispatch();

  const { breakpoint } = useBreakpoints({
    breakpoints: {
      xxxl: 1440,
      desktop: 1024,
      tablet: 768,
      mobile: 0,
    },
    debounceDelay: 250,
  });

  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data);
  }, [data]);

  function onChange(sourceId, sourceIndex, targetIndex) {
    const result = swap(items, sourceIndex, targetIndex);

    const foo = result.map((el) => el?.full_name);
    dispatch(actions.addItemPackage(foo));

    return setItems(result);
  }
  console.log(data);
  function statsPrefix(data) {
    switch (data.length) {
      case 4: {
        return data.slice(0, 1) + 'K';
      }
      case 5: {
        return data.slice(0, 2) + 'K';
      }
      case 6: {
        return data.slice(0, 3) + 'KK';
      }
      case 7: {
        return data.slice(0, 1) + 'M';
      }
      case 8: {
        return data.slice(0, 2) + 'M';
      }
      default:
        return 0;
    }
  }

  function statsRound(stat = 0) {
    return String(stat).length > 3 ? statsPrefix(String(stat)) : stat;
  }

  const size =
    breakpoint === 'mobile'
      ? 1
      : breakpoint === 'tablet'
      ? 2
      : breakpoint === 'desktop'
      ? 3
      : 4;
  const lengthCards = items.length;
  const heightConteinerDND = Math.ceil(lengthCards / size) * 350;
  return (
    <GridContextProvider onChange={onChange}>
      <ul style={{ height: `${heightConteinerDND}px` }} className={s.list}>
        <GridDropZone
          className={s.dropzone}
          id="left"
          boxesPerRow={size}
          rowHeight={380}
        >
          {items?.map((el) => (
            <GridItem className={s.item} key={el?.name}>
              <li className={s.gridItem}>
                <a href={el?.html_url ?? '/'} className={s.name}>
                  {el?.name}
                </a>
                <p className={s.owner}>{el?.owner?.login}</p>
                <div className={s.stats}>
                  <div className={s.star}>
                    <div className={s.icon}>
                      <IconStar />
                    </div>
                    <p>{statsRound(el?.stargazers_count)}</p>
                  </div>

                  <div className={s.fork}>
                    <div className={s.icon}>
                      <IconFork color={'#0e43ff'} />
                    </div>
                    <p>{statsRound(el?.forks)}</p>
                  </div>

                  <div className={s.downloads}>
                    <div className={s.icon}>
                      <IconDownload />
                    </div>
                    <p>{statsRound(weeklyDownload(el?.dataWeekly))}</p>
                  </div>

                  <div className={s.issue}>
                    <div className={s.icon}>
                      <IconIssue />
                    </div>
                    <p>{statsRound(el?.open_issues)}</p>
                  </div>
                </div>

                {el?.dataWeekly && (
                  <div className={s.chart}>
                    <Chart arr={el?.dataWeekly} />
                  </div>
                )}

                <div
                  onClick={() => onHandleDelete(el?.full_name)}
                  className={s.delete}
                >
                  <IconDelete />
                </div>
              </li>
            </GridItem>
          ))}
        </GridDropZone>
      </ul>
    </GridContextProvider>
  );
};

export default Example;
