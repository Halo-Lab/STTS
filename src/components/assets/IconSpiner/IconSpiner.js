import React from 'react';
import cn from 'classnames';

import s from './IconSpiner.module.scss';

export const Stars = ({ className }) => {
  return (
    <svg
      className={cn(s.size, className)}
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.959899 12.1839C6.5018 10.451 10.7177 6.23642 12.4493 0.694519C12.7197 -0.168681 13.9053 -0.168681 14.1757 0.694519C15.9073 6.23642 20.1232 10.451 25.6651 12.1839C26.5283 12.4543 26.5283 13.6399 25.6651 13.9103C20.1232 15.6419 15.9073 19.8565 14.1757 25.3997C13.9053 26.2629 12.7197 26.2629 12.4493 25.3997C10.7177 19.8565 6.5018 15.6419 0.959899 13.9103C0.0966992 13.6399 0.0966992 12.4543 0.959899 12.1839"
        fill="#FFE30D"
      />
    </svg>
  );
};

export const Around = ({ className }) => {
  return (
    <svg
      className={cn(s.size, className)}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={s.second}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58459 19.902C4.34984 19.902 0.0913086 15.6855 0.0913086 10.5034C0.0913086 6.10681 3.11176 2.34189 7.43634 1.3476C8.28837 1.15375 9.13801 1.67655 9.33579 2.51929C9.53317 3.36203 9.00353 4.20359 8.1523 4.3994C5.31499 5.05182 3.25574 7.61881 3.25574 10.5034C3.25574 13.9582 6.09502 16.7691 9.58459 16.7691C12.6217 16.7691 15.2371 14.6266 15.8027 11.6747C15.9653 10.8249 16.7928 10.2661 17.6523 10.4282C18.5107 10.5892 19.0747 11.4092 18.9117 12.259C18.0625 16.6877 14.1402 19.902 9.58459 19.902Z"
        fill="#081540"
      />
    </svg>
  );
};
