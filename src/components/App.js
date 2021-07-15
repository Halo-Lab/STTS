import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../redux/gitHub/operations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectedRepo from './SelectedRepo/SelectedRepo';
import ListRepo from './ListRepo/ListRepo';
import Navigation from './Navigation/Navigation';
import { fulllistPackages, getList, listPackages } from '../redux/gitHub/selectors';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector(listPackages);
  const selectedPackages = useSelector(fulllistPackages);

  const arrayPackages = useSelector(getList);
  const listforReques = selectedPackages.length > 0 ? arrayPackages : list;

  useEffect(() => {
    listforReques.forEach((el) => {
      // console.log(el.split('/')[1]);
      dispatch(operations.fetchSinglePackage(el));
      dispatch(operations.getWeeklyDownload(el.split('/')[1]));
    });
  }, [list]);
  //
  // useEffect(() => {
  //
  //   data();
  //
  //
  // }, []);
  //
  // const data=async ()=>{
  //   try{
  //     const foo= await axios.get('https://api.npmjs.org/downloads/range/last-week/eleventy-plugin-styles')
  //     console.log(foo);
  //   }
  //   catch (err){
  //     console.log(err);
  //   }
  // }

  return (
    // Basename is needed for github pages, as this app is working on https://halo-lab.github.io/STTS
    <BrowserRouter basename="STTS/">
      <div>
        <Header />
        <Navigation />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={'/'} exact component={SelectedRepo} />
            <Route path={'/all'} exact component={ListRepo} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
