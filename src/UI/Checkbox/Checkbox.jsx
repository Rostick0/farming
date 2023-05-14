import { memo } from 'react';
import styles from './checkbox.module.scss';

const Checkbox = memo(({
    className,
    children,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';
    const { type = 'checkbox' } = other

    return (
        <label className={styles.checkbox + styleClassName}>
            <input
                className={styles.checkbox__input}
                {...other}
                type={type}
                hidden
            />
            <span className={styles.checkbox__icon}></span>
            <span className={styles.checkbox__text}>{children}</span>
        </label>
    );
});

export {
    Checkbox
};