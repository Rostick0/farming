import { useSearchParams } from 'react-router-dom';
import { Button } from '../../../UI/Button';
import { Checkbox } from '../../../UI/Checkbox';
import { Input } from '../../../UI/Input';
import { Title } from '../../../UI/Title';
import { CatalogFilterItem } from '../../../components/CatalogFilterItem';
import { Product } from './../../../UI/Product';
import styles from './catalog.module.scss';
import { Select } from '../../../UI/Select';
import { Paginate } from '../../../UI/Paginate';
import { Container } from '../../../UI/Container';
import { SvgXDelete } from '../../../UI/SvgXDelete';
import { ProductCatalogApplication } from '../../../components/ProductCatalogApplication';
import { SvgBurger } from '../../../UI/SvgBurger';
import { useState } from 'react';
import { Label } from '../../../UI/Label';
import { Formik, Form, Field } from 'formik';
import LazyLoad from 'react-lazy-load';
import { removeEmpty } from '../../../utils/object';

const CatalogItemWidgets = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParamPage = 'page';
    const pageCount = 100;
    const queryPage = searchParams.get(queryParamPage);
    const setQuery = (page) => {
        setSearchParams(prev => prev = new URLSearchParams({ page: page }));
    };

    const initialValues = {
        text: null,
        price_min: null,
        price_max: null,
        in_shop: null,
        in_delivery: null,
        raiting: null
    };
    const onSubmitForm = (values, { setSubmitting, resetForm }) => {
        console.log(searchParams)
        const clearEmptyKeys = removeEmpty({ ...values, page: searchParams.get(queryParamPage) });
        setSearchParams(new URLSearchParams(clearEmptyKeys));
        setSubmitting(false);
        resetForm(initialValues)
    };


    const [activeCatalog, setActiveCatalog] = useState(false);
    const classActiveCatalog = activeCatalog ? ' ' + styles.catalog__aside_active : '';

    const sortOptions = [
        { value: 'price_max', label: 'Сначала дорогие' },
        { value: 'price_min', label: 'Сначала дешевые' },
        { value: 'a_z', label: 'По алфавиту' },
        { value: 'z_a', label: 'По алфавиту в обратном порядке' },
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
        <div className={styles.catalog}>
            <Container>
                <Title>Кролики</Title>
                <div className={styles.catalog__inner}>
                    <aside className={styles.catalog__aside + classActiveCatalog}>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmitForm}
                        >
                            {({ isSubmitting, resetForm }) => (
                                <Form className={styles.authorization__form}>
                                    <Container className={styles.catalog__aside_container}>
                                        <div className={styles.catalog__aside_top}>
                                            <span>Фильтр</span>
                                            <SvgXDelete
                                                onClick={() => setActiveCatalog(false)}
                                            ></SvgXDelete>
                                        </div>
                                        <div className={styles.catalog__search}>
                                            <Field
                                                className={styles.catalog__search_input}
                                                type="text"
                                                name="text"
                                                placeholder="Поиск товара"
                                                as={Input}
                                            />
                                            <svg className={styles.catalog__search_icon} width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.3764 12.4769C16.0464 10.1337 15.8302 6.85958 13.728 4.75736C11.3848 2.41421 7.58586 2.41421 5.24271 4.75736C2.89957 7.10051 2.89957 10.8995 5.24271 13.2426C7.34494 15.3449 10.619 15.561 12.9622 13.8911L18.6777 19.6066L20.092 18.1924L14.3764 12.4769ZM12.3138 6.17157C13.8759 7.73367 13.8759 10.2663 12.3138 11.8284C10.7517 13.3905 8.21902 13.3905 6.65692 11.8284C5.09483 10.2663 5.09483 7.73367 6.65692 6.17157C8.21902 4.60948 10.7517 4.60948 12.3138 6.17157Z" />
                                            </svg>
                                        </div>
                                        <div className={styles.catalog__filter}>
                                            <CatalogFilterItem className={styles.catalog__filter_item} title="Цена">
                                                <Label>
                                                    <span>Минимальная</span>
                                                    <Field
                                                        className={styles.catalog__filter_item}
                                                        type="number"
                                                        pattern='[0-9]+(\\.[0-9][0-9]?)?'
                                                        name="price_min"
                                                        as={Input}
                                                    />
                                                </Label>
                                                <Label>
                                                    <span>Максимальная</span>
                                                    <Field
                                                        className={styles.catalog__filter_item}
                                                        type="number"
                                                        pattern='[0-9]+(\\.[0-9][0-9]?)?'
                                                        name="price_max"
                                                        as={Input}
                                                    />
                                                </Label>
                                            </CatalogFilterItem>
                                            <CatalogFilterItem className={styles.catalog__filter_item} title="В наличии">
                                                <Field name="in_shop">
                                                    {({ field }) => (
                                                        <Label>
                                                            <Checkbox
                                                                {...field}
                                                            >В магазине</Checkbox>
                                                        </Label>
                                                    )}
                                                </Field>
                                                <Field name="in_delivery">
                                                    {({ field }) => (
                                                        <Label>
                                                            <Checkbox
                                                                {...field}
                                                            >Доставка</Checkbox>
                                                        </Label>
                                                    )}
                                                </Field>
                                            </CatalogFilterItem>
                                            <CatalogFilterItem className={styles.catalog__filter_item} title="Рейтинг">
                                                <Field name="raiting">
                                                    {({ field }) => (
                                                        <Label>
                                                            <Checkbox
                                                                {...field}
                                                            >Выше 4</Checkbox>
                                                        </Label>
                                                    )}
                                                </Field>
                                            </CatalogFilterItem>
                                            <Button className={styles.catalog__filter_button} disabled={isSubmitting}>Применить</Button>
                                            <Button className={styles.catalog__filter_button} onClick={resetForm} styleColor="green-outline">Сброс</Button>
                                        </div>
                                    </Container>
                                </Form>
                            )}
                        </Formik>
                    </aside>
                    <div className={styles.catalog__content}>
                        <div className={styles.catalog__content_top}>
                            <SvgBurger
                                className={styles.catalog__burger}
                                onClick={() => setActiveCatalog(true)}
                            ></SvgBurger>
                            <div className={styles.catalog__sort}>
                                <div className={styles.catalog__sort_title}>Сортировать по:</div>
                                <Select
                                    className={styles.catalog__sort_select}
                                    options={sortOptions}
                                ></Select>
                            </div>
                        </div>
                        <div className={styles.catalog__product_list}>
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
                        <LazyLoad>
                            <div className={styles.catalog__paginate}>
                                <Paginate
                                    className={styles.catalog__paginate_inner}
                                    forcePage={queryPage}
                                    pageCount={pageCount}
                                    onPageChange={page => setQuery(page?.selected + 1)}
                                ></Paginate>
                            </div>
                        </LazyLoad>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export {
    CatalogItemWidgets
};