import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import s from './SelectedRepo.module.scss';
import Form from "../Form/Form";
import actions from "../../redux/gitHub/actions";
import {listpackagesWithDownloadStats, loading} from "../../redux/gitHub/selectors";
import {Spinner} from "../Spinner/Spinner";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DND from "../Dnd/DND";

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

            {/*{loadings && <Spinner/>}*/}
            <ToastContainer/>

            <DND data={selectedlist} weeklyDownload={weeklyDownload} onHandleDelete={onHandleDelete}/>
        </div>
    )
}

export default SelectedRepo;

