import styles from './error.module.scss';

const ErrorText = ({ children }) => {
    return (
        <span className={styles.error}>{children}</span>
    );
}

export {
    ErrorText
};