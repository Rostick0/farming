import styles from './main.module.scss';
import { Container } from "../../UI/Container";
import { Title } from "../../UI/Title";
import { CatalogList } from '../../components/CatalogList';
import { Product } from '../../UI/Product';
import { ProductCatalogApplication } from '../../components/ProductCatalogApplication';
import { Button } from '../../UI/Button';
import { Link } from 'react-router-dom';
import { Banner } from '../../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getNewProducts, getPopularProducts } from '../../store/slices/products';

const MainWidgets = () => {
    const dispatch = useDispatch();
    const [newProducts, setNewProducts] = useState(null);
    const [popularProducts, setPopularProducts] = useState(null);

    useEffect(() => {
        setNewProducts(dispatch(getNewProducts));
        setPopularProducts(dispatch(getPopularProducts));
    }, [])

    const catalogList = useSelector(state => state.categories.categories);

    return (
        <>
            <Banner
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
                        {newProducts?.map(product => (
                            <Product
                                className={styles.catalog__product_item}
                                key={product?.id}
                                id={product?.id}
                                image={product?.image}
                                title={product?.title}
                                price={product?.price}
                                application={
                                    <ProductCatalogApplication product={product}></ProductCatalogApplication>
                                }
                            ></Product>
                        ))}
                    </div>
                </div>

                <div className={styles.main__product}>
                    <Title>Популярные товары</Title>
                    <div className={styles.main__product_list}>
                        {popularProducts?.map(product => (
                            <Product
                                className={styles.catalog__product_item}
                                key={product?.id}
                                id={product?.id}
                                image={product?.image}
                                title={product?.title}
                                price={product?.price}
                                application={
                                    <ProductCatalogApplication product={product}></ProductCatalogApplication>
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