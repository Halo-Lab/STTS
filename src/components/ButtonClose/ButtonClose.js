import { memo } from 'react';
import cs from 'classnames';

import { IconClose } from '../assets/IconClose';

import classes from './ButtonClose.module.scss';

const ButtonClose = memo(({ onClick, className }) => (
    <button 
        type='button'
        className={cs(classes.buttonClose, className)}
        onClick={onClick}
    >
        <IconClose />
    </button>
));

export { ButtonClose };