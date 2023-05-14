import { useSelector } from "react-redux";
import { LinkTo } from "../../UI/LinkTo";
import styles from './list.module.scss';

const HeaderCatalog = () => {
    const catalogList = useSelector(state => state.categories.categories);

    return (
        <div className={styles.catalog}>
            <div className={styles.catalog__title}>Товары по категориям</div>
            <div className={styles.catalog__hidden}>
                <ul className={styles.catalog__list}>
                    {catalogList.map(category => (
                        <li className={styles.catalog__item}>
                            <LinkTo to={"/catalog/" + category.category}>{category.title}</LinkTo>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export {
    HeaderCatalog
};