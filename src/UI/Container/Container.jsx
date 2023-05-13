import styles from './container.module.scss'

const Container = ({
    className,
    children
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <div className={styles.container + styleClassName}>{children}</div>
    );
};

export {
    Container
}