import { memo } from 'react';
import styles from './burger.module.scss';

const SvgBurger = memo(({
    className,
    strokeWidth = 2,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <svg
            className={styles.burger + styleClassName}
            width="32"
            height="32"
            stroke="#000000"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...other}>
            <path d="M4 18L20 18" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M4 12L20 12" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M4 6L20 6" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
});

export {
    SvgBurger
};