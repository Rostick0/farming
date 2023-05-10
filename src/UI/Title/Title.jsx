import styles from './title.module.scss';

const Title = ({ className, children }) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <div className={styles.title + styleClassName}>{children}</div>
    );
};

export {
    Title
};