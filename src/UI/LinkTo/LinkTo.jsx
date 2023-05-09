import { Link } from "react-router-dom";
import styles from './link.module.scss'

const LinkTo = ({ className, to, children, styleColor }) => {
    const styleClass = styles['link_style_' + styleColor];
    const styleLink = styleClass ? ' ' + styleClass : '';
    const styleClassName = className ? ' ' + className : '';

    return (
        <Link
            className={styles.link + styleLink + styleClassName}
            to={to}
        >{children}</Link>
    );
}

export {
    LinkTo
};