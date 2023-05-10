import styles from './checkbox.module.scss';

const Checkbox = ({
    className,
    children,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <label className={styles.checkbox + styleClassName}>
            <input
                {...other}
                hidden
            />
            <span className={styles.checkbox__text}>{children}</span>
        </label>
    );
};

export {
    Checkbox
};