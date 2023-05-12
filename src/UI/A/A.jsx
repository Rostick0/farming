import styles from '../LinkTo/link.module.scss';

const A = ({ className, href, children, target, styleColor }) => {
    const styleClass = styles['link_style_' + styleColor];
    const styleLink = styleClass ? ' ' + styleClass : '';
    const styleClassName = className ? ' ' + className : '';

    return (
        <a
            className={styles.link + styleLink + styleClassName}
            target={target}
            href={href}
        >{children}</a>
    );
};

export {
    A
};