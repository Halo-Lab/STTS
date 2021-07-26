import React, {Suspense,lazy, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import operations from '../redux/gitHub/operations';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import {fulllistPackages, getList, listPackages} from '../redux/gitHub/selectors';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import s from './App.module.scss';
import {Spinner} from "./Spinner/Spinner";

const ListRepo = lazy(() => import('./ListRepo/ListRepo'));
const SelectedRepo = lazy(() => import('./SelectedRepo/SelectedRepo'));
//
// import ListRepo from "./ListRepo/ListRepo";
// import SelectedRepo from "./SelectedRepo/SelectedRepo";

const App = () => {
    const dispatch = useDispatch();
    const list = useSelector(listPackages);
    const selectedPackages = useSelector(fulllistPackages);

    const arrayPackages = useSelector(getList);
    const listforReques = selectedPackages.length > 0 ? arrayPackages : list;
    useEffect(() => {
        listforReques.forEach((el) => {
            dispatch(operations.fetchSinglePackage(el));
            dispatch(operations.getWeeklyDownload(el.split('/')[1]));
        });
    }, [list]);



    return (
        // Basename is needed for github pages, as this app is working on https://halo-lab.github.io/STTS
        <HashRouter hashType='noslash' basename="/">
            <div className={s.container}>
                <Header/>
                <Navigation/>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route path={'/'} exact component={SelectedRepo}/>
                        <Route path={'/all'} exact component={ListRepo}/>
                    </Switch>
                </Suspense>
                <Footer/>
            </div>
        </HashRouter>
    );
};

export default App;
