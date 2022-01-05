import React from 'react';
import s from './style.module.scss';

const IconIssue = () => {
  return (
    <svg
      className={s.size}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="5.5" stroke="#CC00FF" />
      <circle cx="8" cy="8" r="1" fill="#CC00FF" />
    </svg>
  );
};

export default IconIssue;
