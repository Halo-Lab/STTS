import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import s from './SelectedRepo.module.scss';
import Form from "../Form/Form";
import IconFork from "../assets/IconFork/IconFork";
import IconStar from "../assets/IconStar/IconStar";
import IconDelete from "../assets/IconDelete/IconDelete";
import actions from "../../redux/gitHub/actions";

const SelectedRepo = () => {

const dispatch=useDispatch();

  const selectedlist = useSelector((state) => state.packages.selectedPackages);
  const onHandleDelete =(name)=>dispatch(actions.deletePackage(name));
  // console.log(selectedlist)
  return (
    <div className={s.container}>

      <Form placeholder='Package, e.g. name/repo' type='addPackage' name='Add'/>

      <ul className={s.list}>
        {selectedlist.map(el => (

          <li  className={s.item}>
            <p className={s.name}>{el.name}</p>
            <p className={s.owner}>{el.owner.login}</p>

            <div className={s.stats}>
              <div className={s.star}>
                <IconStar/>
                <p >{el.stargazers_count}</p>
              </div>
              <div className={s.fork}>
                <IconFork color={'#0e43ff'}/>
                <p >{el.forks}</p>
              </div>
            </div>

            <p className={s.download}>Weekly Downloads</p>

            <div onClick={()=>onHandleDelete(el.full_name)} className={s.delete}>
              <IconDelete/>
            </div>

            {/*<a clasName={s.link} href={el.html_url}>Link</a>*/}
          </li>
        ))}
      </ul>


    </div>
  )
}

export default SelectedRepo

