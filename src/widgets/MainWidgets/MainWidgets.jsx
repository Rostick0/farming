import styles from './main.module.scss';
import { Container } from "../../UI/Container";
import { Title } from "../../UI/Title";
import { CatalogList } from '../../components/CatalogList';
import { Product } from '../../UI/Product';
import { ProductCatalogApplication } from '../../components/ProductCatalogApplication';
import { Button } from '../../UI/Button';
import { Link } from 'react-router-dom';
import { Banner } from '../../components/Banner';

const MainWidgets = () => {
    const catalogList = [
        {
            category: 'rabbits',
            title: 'Кролики',
            image: 'https://phonoteka.org/uploads/posts/2021-06/1624436400_47-phonoteka_org-p-krolik-oboi-krasivo-49.jpg'
        },
        {
            category: 'rabbit_food',
            title: 'Корм для кроликов',
            image: 'https://kotsdog.ru/wa-data/public/shop/products/64/02/20264/images/15293/15293.750.jpg'
        },
        {
            category: 'rabbit_meat',
            title: 'Крольчятина',
            image: 'https://dikoved.ru/upload/iblock/cdc/cdc9881174e12da32173536c105a6e3a.jpg'
        },
        {
            category: 'seedlings',
            title: 'Саженцы',
            image: 'https://s.leroymerlin.ru/upload/catalog/img/6/5/17885520/362x362/17885520.jpg'
        },
        {
            category: 'milk',
            title: 'Молоко',
            image: 'https://gloria-club.com/wp-content/uploads/2019/07/panna_fresca_today_2-768x768.jpg'
        },
    ];

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
        <>
            <Banner
                // backgroundImage="url(https://avatars.dzeninfra.ru/get-zen_doc/8080662/pub_640f4a0ae1d4ed604574499d_640f4a0c97036f7610c2ff68/scale_1200)"
                backgroundImage="url(https://www.alphanews.live/sites/default/files/styles/facebook/public/2017-09/biologika_proionta.jpg?h=945e056b&itok=FcgK5ReD)"
                title="Фермерский маркетплейс"
                description={
                    <>
                        <p>
                            Мы приглашаем всех наших клиентов к покупке на нашем фермерском маркетплейсе, где вы найдете только свежие и качественные продукты от лучших производителей. Мы гарантируем быструю и надежную доставку, а также отличный сервис и поддержку нашей команды.
                        </p>
                        <p>
                            Поддерживайте местных фермеров и производителей, покупая у них свежие и экологически чистые продукты. Мы уверены, что вы останетесь довольны покупками на нашем маркетплейсе и вернетесь к нам снова и снова.
                        </p>
                    </>
                }
                application={
                    <Link to="/register">
                        <Button className={styles.banner__button}>Присоединиться</Button>
                    </Link>
                }
            ></Banner>
            <Container>
                <div className={styles.main__catalog}>
                    <Title>Каталог товаров</Title>
                    <CatalogList catalogList={catalogList}></CatalogList>
                </div>
                <div className={styles.main__product}>
                    <Title>Новинки</Title>
                    <div className={styles.main__product_list}>
                        {products?.map(product => (
                            <Product
                                className={styles.catalog__product_item}
                                key={product?.id}
                                id={product?.id}
                                image={product?.image}
                                title={product?.title}
                                price={product?.price}
                                application={
                                    <ProductCatalogApplication productId={product?.id}></ProductCatalogApplication>
                                }
                            ></Product>
                        ))}
                    </div>
                </div>

                <div className={styles.main__product}>
                    <Title>Популярные товары</Title>
                    <div className={styles.main__product_list}>
                        {products?.map(product => (
                            <Product
                                className={styles.catalog__product_item}
                                key={product?.id}
                                id={product?.id}
                                image={product?.image}
                                title={product?.title}
                                price={product?.price}
                                application={
                                    <ProductCatalogApplication productId={product?.id}></ProductCatalogApplication>
                                }
                            ></Product>
                        ))}
                    </div>
                    <Link to="/catalog" className={styles.main__product_more}>
                        <Button>Больше товаров</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
};

export {
    MainWidgets
};