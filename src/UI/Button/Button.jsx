import styles from './button.module.scss';

const Button = ({
    className,
    children,
    styleColor,
    ...other
}) => {
    const styleClass = styles['button_style_' + styleColor];
    const styleLink = styleClass ? ' ' + styleClass : ' ' + styles['button_style_green'];
    const styleClassName = className ? ' ' + className : '';

    return (
        <button
            className={styles.button + styleLink + styleClassName}
            {...other}
        >{children}</button>
    );
};

export {
    Button
};