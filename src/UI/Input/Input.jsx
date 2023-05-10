import styles from './input.module.scss';

const Input = ({
    className,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <input
            className={styles.input + styleClassName}
            {...other}
        />
    );
};

export {
    Input
};