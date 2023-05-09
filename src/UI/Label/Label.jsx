import styles from './label.module.scss';

const Label = (props) => {
    const { className, children, ...other } = props;
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