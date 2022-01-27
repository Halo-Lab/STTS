import styles from './Loader.module.scss';

import { Stars } from '../assets/IconSpiner/IconSpiner';

export const Loader = () => {
  return (
    <div className={styles.box}>
      <div className={styles.loaderBox}>
        <svg>
          <circle cx="40" cy="40" r="40"></circle>
          <circle cx="40" cy="40" r="40"></circle>
        </svg>
      </div>
      <Stars className={styles.star} />
    </div>
  );
};
