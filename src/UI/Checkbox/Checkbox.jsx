import styles from './checkbox.module.scss';

const Checkbox = (props) => {
    const { className, children, ...other } = props;

    return (
        <label className={styles.checkbox + (className ? ' ' + className : '')}>
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