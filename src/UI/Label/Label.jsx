import styles from './label.module.scss';

const Label = ({
    className,
    children,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <label
            className={styles.label + styleClassName}
            {...other}
        >{children}</label>
    );
}

export {
    Label
};