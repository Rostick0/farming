import styles from './button.module.scss';

const Button = (props) => {
    const { className, children, other } = props;

    return (
        <button
            className={styles.button + (className ? ' ' + className : '')}
            {...other}
        >{children}</button>
    );
};

export {
    Button
};