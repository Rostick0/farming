import { LinkTo } from "../../UI/LinkTo";
import styles from './list.module.scss';

const HeaderCatalog = () => {
    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__title}>Товары по категориям</div>
            <div className={styles.catalog__hidden}>
                <ul className={styles.catalog__list}>
                    <li className={styles.catalog__item}>
                        <LinkTo to="/catalog">Каталог</LinkTo>
                    </li>
                    <li className={styles.catalog__item}>
                        <LinkTo to="/catalog">Каталог</LinkTo>
                    </li>
                    <li className={styles.catalog__item}>
                        <LinkTo to="/catalog">Каталог</LinkTo>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export {
    HeaderCatalog
};