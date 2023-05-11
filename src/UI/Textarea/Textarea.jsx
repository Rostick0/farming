import styles from './textarea.module.scss';

const Textarea = ({
    className,
    ...other
}) => {
    const styleClassName = className ? ' ' + className : '';

    return (
        <textarea
            className={styles.textarea + styleClassName}
            {...other}
        ></textarea>
    );
};

export {
    Textarea
};