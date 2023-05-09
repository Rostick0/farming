import { Product } from '../../UI/Product';
import styles from './catalog.module.scss';

const CatalogItemWidgets = () => {
    const products = [
        {
            id: 1,
            image: 'https://pet-q.com/wp-content/uploads/2018/06/2018_06_11-2_2-600x400.jpg',
            title: 'Кролик белый',
            price: '999'
        },
        {
            id: 2,
            image: 'http://wtalks.com/sites/default/files/imagecache/width_670_nowater/speak/105/imagepost/img_3974-1300x675.jpg',
            title: 'Кролик оранжевый',
            price: '899'
        },
        {
            id: 3,
            image: 'https://natalyland.ru/wp-content/uploads/1/c/b/1cbf6f8eebbe51e0f7a5f1d57c86a47c.jpeg',
            title: 'Два кролика',
            price: '1599'
        },
        {
            id: 4,
            image: 'https://sun9-48.userapi.com/impg/6ZNJubRfIGaq_sye3y8i6ZcK2RwfWh1iZLOwyQ/-beVEvaXbIo.jpg?size=604x604&quality=96&sign=b0c2044ab61bf300656de6e6a104c391&type=album',
            title: 'Кролик дикий',
            price: '1199'
        },
        {
            id: 5,
            image: 'https://i.pinimg.com/originals/e3/72/37/e37237b100ebd3e7a4a49e4aec33014c.jpg',
            title: 'Кролик в травке',
            price: '1999'
        }
    ];

    return (
        <div className={styles.catalog}>
            <aside className={styles.catalog__aside}></aside>
            <div className={styles.catalog__content}>
                <div className={styles.catalog__sort}></div>
                <div className={styles.catalog__product_list}>
                    {products?.map(product => (
                        <Product
                            className={styles.catalog__product_item}
                            id={product?.id}
                            image={product?.image}
                            title={product?.title}
                            price={product?.price}
                        ></Product>
                    ))}
                </div>
            </div>
        </div>
    );
}

export {
    CatalogItemWidgets
};