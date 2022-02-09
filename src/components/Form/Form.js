import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { listPackages } from '../../redux/gitHub/selectors';
import { getActiveHint, getStepHints, getHint, getTotalStepHints } from '../../redux/hints/selectors';
import actionsHints from '../../redux/hints/actions'; 
import operations from '../../redux/gitHub/operations';

import IconSearch from '../assets/IconSearch/IconSearch';
import { Hint } from '../Hint';
import { Button } from '../Button/';

import s from './Form.module.scss';

const Form = ({ placeholder = '', name, type = 'add' }) => {
  const [repo, setRepo] = useState('');
  const updateRepo = ({ target }) => setRepo(target.value);
  const packegesFromLocalStor = useSelector(listPackages);
  const dispatch = useDispatch();

  const activeHint = useSelector(getActiveHint);
  const currentStepHint = useSelector(getStepHints);
  const currenHint = useSelector(getHint);
  const totalStepHint = useSelector(getTotalStepHints);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (packegesFromLocalStor.includes(repo)) {
      toast('This repository has been added earlier');
      setRepo('');
      return;
    }
    type === 'findRepo'
      ? dispatch(operations.fetchPackages(repo))
      : dispatch(operations.fetchSinglePackage(repo));

    setRepo('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.form__label}>
        <input
          className={s.form__input}
          type="text"
          value={repo}
          onChange={updateRepo}
          name="email"
          placeholder={placeholder}
        />
        <div className={s.iconSearch}>
          <IconSearch />
        </div>
      </label>
      <Button 
        type="submit" 
        className={s.form__btn}
      >
        {name}
      </Button>
      <ToastContainer />
      <Hint
        active={activeHint}
        onHidden={() => dispatch(actionsHints.setHiddenHints())}
        title={currenHint?.title}
        description={currenHint?.description}
        totalStep={totalStepHint}
        step={currentStepHint}
        nextStep={() => dispatch(actionsHints.setNextStepHints())}
        prevStep={() => dispatch(actionsHints.setPrevStepHints())}
      />
    </form>
  );
};

export default Form;
