import React from 'react';
import cs from 'classnames'

import styles from './Overlay.module.scss';

const Overlay = ({ children, shown, onClick, onKeyDown }) => (
  <div
    className={cs(styles.overlay, {
      [styles.hidden]: !shown
    })}
    onClick={onClick}
    onKeyDown={onKeyDown}
    role='button'
    tabIndex={0}
  >
    {children}
  </div>
);

export { Overlay };
