import styles from './catalog.module.scss';
import { CatalogListItem } from '../CatalogListItem';

const CatalogList = ({ catalogList }) => {
    return (
        <ul className={styles.catalog}>
            {catalogList?.map(item => (
                <CatalogListItem
                    key={item?.id}
                    id={item?.category}
                    title={item?.title}
                    image={item?.image}
                    category={item?.category}
                ></CatalogListItem>
            ))}
        </ul>
    );
};

export {
    CatalogList
};