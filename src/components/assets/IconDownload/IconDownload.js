import React from 'react';
import s from './style.module.scss';
const IconDownload = () => {
  return (
    <svg
      width="16"
      height="16"
      className={s.size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 5.5H11.75C12.0815 5.5 12.3995 5.6317 12.6339 5.86612C12.8683 6.10054 13 6.41848 13 6.75V13.25C13 13.5815 12.8683 13.8995 12.6339 14.1339C12.3995 14.3683 12.0815 14.5 11.75 14.5H4.25C3.91848 14.5 3.60054 14.3683 3.36612 14.1339C3.1317 13.8995 3 13.5815 3 13.25V6.75C3 6.41848 3.1317 6.10054 3.36612 5.86612C3.60054 5.6317 3.91848 5.5 4.25 5.5H5.5"
        stroke="#2CD351"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.5L8 11L10.5 8.5"
        stroke="#2CD351"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.5V10.5"
        stroke="#2CD351"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconDownload;
