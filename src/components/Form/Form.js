import React, {useState} from "react";
import operations from "../../redux/gitHub/operations";

import s from './Form.module.scss';
import {useDispatch} from "react-redux";
import actions from "../../redux/gitHub/actions";
import IconSearch from "../assets/IconSearch/IconSearch";


const Form = ({placeholder = '', name, type = 'add'}) => {

  const [repo, setRepo] = useState('');
  const updateRepo = ({target}) => setRepo(target.value);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // (type === 'findRepo') ? dispatch(operations.fetchPackages(repo)) : dispatch(actions.addItemPackage(repo));
      (type === 'findRepo') ? dispatch(operations.fetchPackages(repo)) : dispatch(operations.fetchSinglePackage(repo));

      setRepo('')
  }

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
      </label>


      <button type="submit" className={s.form__btn}>
        {name}
      </button>
      <div className={s.iconSearch}>
        <IconSearch/>
      </div>
    </form>
  )
}


export default Form;