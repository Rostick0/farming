import styles from './button.module.scss';

const Button = ({
    className,
    children,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <button
            className={styles.button + styleClassName}
            {...other}
        >{children}</button>
    );
};

export {
    Button
};