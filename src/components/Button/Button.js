import { memo } from 'react';
import cs from 'classnames';

import classes from './Button.module.scss';

const Button = memo(({ children, type, onClick, disabled, className }) => (
    <button 
        type={type}
        className={cs(classes.button, className)}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
));

export { Button };