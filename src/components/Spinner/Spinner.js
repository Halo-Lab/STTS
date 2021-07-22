import {Around, Stars} from "../assets/IconSpiner/IconSpiner";


import s from './Spinner.module.scss'
import {useEffect, useState} from "react";

export const Spinner = () => {

    const [deg, setDeg] = useState(0);
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            if (deg===360) setDeg(0)
            setDeg(prevState => prevState+3);
        }, 10);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        let f=0;
        let s=2*Math.PI/180;
        const id = setInterval(() => {
            f+=s;
            setTop(46*Math.sin(f));
            setLeft(46*Math.cos(f));

        }, 8);
        return () => clearInterval(id);
    }, []);

    return (
        <div className={s.wrap}>

            <div className={s.spinner}>

            <div className={s.around}>
                <Around/>
            </div>

            <div style={{transform:`translate(${top}px,${left}px) rotate(${deg}deg)`}} className={s.star}>
                <Stars/>
            </div>
            </div>

        </div>
    )
}