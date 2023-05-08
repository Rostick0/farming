import { Link } from "react-router-dom";
import styles from './link.module.scss'

const LinkTo = ({ className, to, children }) => {
    return (
        <Link
            className={styles.link + (className ? ' ' + className : '')}
            to={to}
        >{children}</Link>
    );
}

export {
    LinkTo
};