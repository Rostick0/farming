import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const LogoSite = () => {
    return (
        <Link className={styles.logo} to="/"><span>FAR</span>Mer</Link>
    );
};

export {
    LogoSite
};