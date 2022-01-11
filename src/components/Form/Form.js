import React, { useState } from 'react';
import operations from '../../redux/gitHub/operations';

import s from './Form.module.scss';
import IconSearch from '../assets/IconSearch/IconSearch';
import { listPackages } from '../../redux/gitHub/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ placeholder = '', name, type = 'add' }) => {
  const [repo, setRepo] = useState('');
  const updateRepo = ({ target }) => setRepo(target.value);
  const packegesFromLocalStor = useSelector(listPackages);
  const dispatch = useDispatch();

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

      <button type="submit" className={s.form__btn}>
        {name}
      </button>

      <ToastContainer />
    </form>
  );
};

export default Form;
