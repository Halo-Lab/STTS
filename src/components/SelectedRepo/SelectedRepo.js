import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import s from './SelectedRepo.module.scss';
import Form from "../Form/Form";
import IconFork from "../assets/IconFork/IconFork";
import IconStar from "../assets/IconStar/IconStar";
import IconDelete from "../assets/IconDelete/IconDelete";
import actions from "../../redux/gitHub/actions";
import Chart from "./Chart";
import {listpackagesWithDownloadStats, loading} from "../../redux/gitHub/selectors";
import IconDownload from "../assets/IconDownload/IconDownload";
import IconIssue from "../assets/IconIssue/IconIssue";
import {Spinner} from "../Spinner/Spinner";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SelectedRepo = () => {

  const dispatch = useDispatch();


  const selectedlist = useSelector(listpackagesWithDownloadStats);
    const loadings = useSelector(loading);
    const err = useSelector(state => state.packages.error);
    useEffect(() => {
        if (err !== false) {
            toast('There is no such repository or network error');
            dispatch(actions.getPackagesError(false));
        }

    }, [err]);
  const onHandleDelete = (name) => dispatch(actions.deletePackage(name));

  const weeklyDownload = (data) => {
    return data?.downloads?.map(el => el?.downloads).reduce((acc, currentValue) => acc + currentValue);
  }

    return (
      <div className={s.container}>

        <Form placeholder='Package, e.g. name/repo' type='addPackage' name='Add'/>

        <ul className={s.list}>
          {selectedlist.map(el => (

            <li className={s.item}>
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
          ))}
        </ul>

          {loadings && <Spinner/>}
          <ToastContainer/>

      </div>
    )
  }

  export default SelectedRepo;

