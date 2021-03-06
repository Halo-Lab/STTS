import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/gitHub/operations';
import actions from '../../redux/gitHub/actions';
import Form from '../Form/Form';
import s from './ListRepo.module.scss';
import User from '../User/User';
import { getUser, listPackages } from '../../redux/gitHub/selectors';
import IconAdd from '../assets/IconAdd/IconAdd';
import IconAdded from '../assets/IconAdded/IconAdded';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListRepo = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const packages = useSelector((state) => state.packages.packages);
  const userData = useSelector(getUser);
  const list = useSelector(listPackages);
  const err = useSelector((state) => state.packages.error);

  useEffect(() => {
    if (err !== false) {
      toast('There is no such repository or network error');
      dispatch(actions.getPackagesError(false));
    }
  }, [err, dispatch]);

  const listPackagesWithLabel = packages.map((el) => {
    if (list.includes(el.full_name)) return { ...el, added: true };
    return { ...el, added: false };
  });

  const handleClick = (e) => {
    const item = e.currentTarget.dataset.name;
    dispatch(actions.addItemPackage(item));
  };

  const handleRemoveClick = (e) => {
    const item = e.currentTarget.dataset.name;
    dispatch(actions.deletePackage(item));
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage((prevPage) => prevPage - 1);
  };
  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (page < 1) return;
    if (packages.length === 0) return;
    dispatch(operations.fetchPackages(userData.login, page));
  }, [page, dispatch, packages.length, userData.login]);

  return (
    <section className={s.container}>
      <Form placeholder="Organization Name" type="findRepo" name="Find" />
      {packages.length > 0 && <User data={userData} />}

      <ul className={s.list}>
        {listPackagesWithLabel.map((el) => (
          <li
            style={el.added ? { borderLeft: '8px solid #2CD351' } : null}
            className={s.item}
            key={el.id}
          >
            <p>{el.name}</p>
            <div
              className={s.btnAdd}
              onClick={el.added ? handleRemoveClick : handleClick}
              data-name={el.full_name}
            >
              {el.added ? <IconAdded /> : <IconAdd />}
            </div>
          </li>
        ))}
      </ul>

      {(listPackagesWithLabel.length === 30 || page > 1) && (
        <div className={s.wrapBtns}>
          <div className={page === 1 ? s.disabled : s.btn} onClick={prevPage}>
            <div className={page === 1 ? s.arrowDis : s.arrowPrev}></div>
            <span>Previous</span>
          </div>

          <div
            className={listPackagesWithLabel.length === 30 ? s.btn : s.disabled}
            onClick={listPackagesWithLabel.length >= 30 && nextPage}
          >
            <span>Next</span>
            <div
              className={
                listPackagesWithLabel.length === 30 ? s.arrowNext : s.arrowDisNext
              }
            ></div>
          </div>
        </div>
      )}
      <ToastContainer />
    </section>
  );
};

export default ListRepo;
