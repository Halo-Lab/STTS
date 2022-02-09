import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import operations from '../redux/gitHub/operations';
import { fulllistPackages, getList, listPackages } from '../redux/gitHub/selectors';
import { getActiveHint } from '../redux/hints/selectors';
import actionsHints from '../redux/hints/actions';

import Navigation from './Navigation/Navigation';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Loader } from './Spinner/Loader';
import { Overlay } from './Overlay';
import s from './App.module.scss';

const ListRepo = lazy(() => import('./ListRepo/ListRepo'));
const SelectedRepo = lazy(() => import('./SelectedRepo/SelectedRepo'));

const App = () => {
  const dispatch = useDispatch();
  const list = useSelector(listPackages);
  const selectedPackages = useSelector(fulllistPackages);

  const arrayPackages = useSelector(getList);
  const listforReques = selectedPackages.length > 0 ? arrayPackages : list;

  const activeHint = useSelector(getActiveHint);

  useEffect(() => {
    listforReques.forEach((el) => {
      dispatch(operations.fetchSinglePackage(el));
      // eslint-disable-next-line no-unused-expressions
      el ? dispatch(operations.getWeeklyDownload(el.split('/')[1])) : null;
    });
  }, [list, dispatch, listforReques]);

  return (
    // Basename is needed for github pages, as this app is working on https://halo-lab.github.io/STTS
    <HashRouter hashType="noslash" basename="/">
      <div className={s.container}>
        <Header />
        <Navigation />
        <div className={s.main_content}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path={'/'} exact component={SelectedRepo} />
              <Route path={'/all'} exact component={ListRepo} />
            </Switch>
          </Suspense>
        </div>
        <Footer />
        <Overlay 
          shown={activeHint}
          onClick={() => dispatch(actionsHints.setHiddenHints())}
          onKeyDown={() => dispatch(actionsHints.setHiddenHints())}
        />
      </div>
    </HashRouter>
  );
};

export default App;
