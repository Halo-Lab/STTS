import React from 'react';
import cs from 'classnames';

import { Button } from '../Button';
import { ButtonClose } from '../ButtonClose';

import pointer from './svg/pointer.svg';
import styles from './Hint.module.scss';

const Hint = ({ active, onHidden, title, description, step, totalStep, nextStep, prevStep }) => (
    <div 
      className={cs(styles.hint, {
        [styles.hidden]: !active,
        [styles.stepSecond]: step === 2,
        [styles.stepLast]: step === totalStep
      })}
      onClick={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      onKeyDown={e => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }}
      role='button'
      tabIndex={0}
    >
      <ButtonClose onClick={onHidden} />
      <div className={styles.hint__content}>
        <h3 className={styles.hint__title}>
          {title}
        </h3>
        <p className={styles.hint__desc}>
          {description}
        </p>
      </div>
      <div className={styles.hint__nav}>
        <Button 
          type='button'
          onClick={prevStep}
          disabled={step === 1}
        >
          Back
        </Button>
        <span className={styles.hint__steps}>
          {step}/{totalStep}
        </span>
        <Button 
          type='button'
          onClick={nextStep}
          disabled={step === totalStep}
        >
          Next
        </Button>
      </div>
      <img src={pointer} className={cs(styles.hint__pointer, {
        [styles.stepFirst]: step === 1,
        [styles.stepSecond]: step === 2,
      })} alt='Poiter' />
    </div>
);

export { Hint };
