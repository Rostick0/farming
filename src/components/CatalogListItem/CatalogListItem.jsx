import { Link } from "react-router-dom";
import styles from './item.module.scss';

const CatalogListItem = ({ category, title, image }) => {
    return (
        <li className={styles.item}>
            <Link className={styles.item__link} to={`/catalog/${category}`}>
                <div className={styles.item__image}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.item__title}>{title}</div>
            </Link>
        </li>
    );
};

export {
    CatalogListItem
};