import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import s from './SelectedRepo.module.scss';
import Form from "../Form/Form";
import actions from "../../redux/gitHub/actions";
import {dndListLocal, listpackagesWithDownloadStats, loading, smth} from "../../redux/gitHub/selectors";
import {Spinner} from "../Spinner/Spinner";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CardStts from "../DND/DND";
import twoDimensionalArray from "../../helpers/createArray";
import useBreakpoints from "use-breakpoints-width";
import {reactLocalStorage} from "reactjs-localstorage";

const SelectedRepo = () => {

    const [dataList, setDataList] = useState([]);

    const {breakpoint} = useBreakpoints({
        breakpoints: {
            xxxl:1440,
            desktop: 1024,
            tablet: 768,
            mobile: 0
        },
        debounceDelay: 250
    });



    const dispatch = useDispatch();

    // const dnd=useSelector(smth);
    // console.log(dnd);


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
useEffect(()=>{

},[])


    const size = breakpoint==='mobile'?1:breakpoint==='tablet'?2:breakpoint==='desktop'?3:4;
    const compressedList = twoDimensionalArray(selectedlist, size);

    // if (dnd.length===0) setDataList(compressedList);
    // console.log(dnd.length===0)

    return (
        <div className={s.container}>

            <Form placeholder='Package, e.g. name/repo' type='addPackage' name='Add'/>

            {loadings && <Spinner/>}

            <ToastContainer/>

            <CardStts  data={compressedList} onHandleDelete={onHandleDelete} weeklyDownload={weeklyDownload}/>
        </div>
    )
}

export default SelectedRepo;

