import React from "react";
import {
    GridContextProvider,
    GridDropZone,
    GridItem,
    swap,
    move
} from "react-grid-dnd";

import s from "./DND.module.scss";
import IconStar from "../assets/IconStar/IconStar";
import IconFork from "../assets/IconFork/IconFork";
import IconDownload from "../assets/IconDownload/IconDownload";
import IconIssue from "../assets/IconIssue/IconIssue";
import Chart from "../SelectedRepo/Chart";
import IconDelete from "../assets/IconDelete/IconDelete";

const Example=({data,onHandleDelete,weeklyDownload})=> {
    const [items, setItems] = React.useState({
        left:data
    });
    console.log(data);
    function onChange(sourceId, sourceIndex, targetIndex, targetId) {
        if (targetId) {
            const result = move(
                items[sourceId],
                items[targetId],
                sourceIndex,
                targetIndex
            );
            return setItems({
                ...items,
                [sourceId]: result[0],
                [targetId]: result[1]
            });
        }

        const result = swap(items[sourceId], sourceIndex, targetIndex);
        return setItems({
            ...items,
            [sourceId]: result
        });
    }

    return (
        <GridContextProvider onChange={onChange}>
            <ul  className={s.list} >
                <GridDropZone
                    className={s.dropzone}
                    id="left"
                    boxesPerRow={2}
                    rowHeight={280}
                >
                    {items.left.map(el => (
                        <GridItem className={s.item} key={el.name}>
                            <li className={s.gridItem}>
                                <a href={el?.html_url??'/'} className={s.name}>{el.name}</a>
                                <p className={s.owner}>{el.owner.login}</p>
                                <div className={s.stats}>

                                    <div className={s.star}>
                                        <div className={s.icon}>
                                            <IconStar/>
                                        </div>
                                        <p>{el.stargazers_count}</p>
                                    </div>

                                    <div className={s.fork}>
                                        <div className={s.icon}>
                                            <IconFork color={'#0e43ff'}/>
                                        </div>
                                        <p>{el.forks}</p>
                                    </div>



                                    <div className={s.downloads}>
                                        <div className={s.icon}>
                                            <IconDownload/>
                                        </div>
                                        <p>{weeklyDownload(el.dataWeekly)}</p>
                                    </div>

                                    <div className={s.issue}>
                                        <div className={s.icon}>
                                            <IconIssue/>
                                        </div>
                                        <p>{el.open_issues}</p>
                                    </div>

                                </div>

                                {el?.dataWeekly && <div className={s.chart}>
                                    <Chart arr={el.dataWeekly}/>
                                </div>}

                                <div onClick={() => onHandleDelete(el.full_name)} className={s.delete}>
                                    <IconDelete/>
                                </div>
                            </li>
                        </GridItem>
                    ))}
                </GridDropZone>

            </ul>
        </GridContextProvider>
    );
}



export default Example;