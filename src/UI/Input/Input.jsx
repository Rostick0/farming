import styles from './input.module.scss';

const Input = (props) => {
    const { className, ...other } = props;

    return (
        <input
            className={styles.input + (className ? ' ' + className : '')}
            {...other}
        />
    );
};

export {
    Input
};