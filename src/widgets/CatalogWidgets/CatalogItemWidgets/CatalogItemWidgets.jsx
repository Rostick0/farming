import { Button } from '../../../UI/Button';
import { Checkbox } from '../../../UI/Checkbox';
import { Input } from '../../../UI/Input';
import { Title } from '../../../UI/Title';
import { CatalogFilterItem } from '../../../components/CatalogFilterItem';
import { Product } from './../../../UI/Product';
import styles from './catalog.module.scss';
import { Select } from '../../../UI/Select';
// import { Paginate } from '../../../UI/Paginate';
import { Container } from '../../../UI/Container';
import { SvgXDelete } from '../../../UI/SvgXDelete';
import { ProductCatalogApplication } from '../../../components/ProductCatalogApplication';
import { SvgBurger } from '../../../UI/SvgBurger';
import { useEffect, useState } from 'react';
import { Label } from '../../../UI/Label';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, sortProduct } from '../../../store/slices/products';

const CatalogItemWidgets = ({ category, categoryTitle }) => {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();
    const checkCategory = categoryTitle ? { category } : {}

    useEffect(() => {
        dispatch(setCategory({ ...checkCategory }))
    }, []);

    const initialValues = {
        text: null,
        price_min: null,
        price_max: null,
        in_shop: null,
        in_delivery: null,
        raiting: null
    };
    const onSubmitForm = (values, { setSubmitting, resetForm }) => {
        dispatch(setCategory({ ...checkCategory, ...values }))
        setSubmitting(false);
    };

    const [activeCatalog, setActiveCatalog] = useState(false);
    const classActiveCatalog = activeCatalog ? ' ' + styles.catalog__aside_active : '';

    const sortOptions = [
        { value: 'price_max', label: 'Сначала дорогие' },
        { value: 'price_min', label: 'Сначала дешевые' },
        { value: 'a_z', label: 'По алфавиту' },
        { value: 'z_a', label: 'По алфавиту в обратном порядке' },
        { value: 'reset', label: 'Сброс' }
    ];


    return (
        <div className={styles.catalog}>
            <Container>
                <Title>{categoryTitle ?? 'Все'}</Title>
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
                                                <Field name="is_have">
                                                    {({ field }) => (
                                                        <Label>
                                                            <Checkbox
                                                                {...field}
                                                            >Да</Checkbox>
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
                                    onChange={option => dispatch(sortProduct({ typeSort: option.value }))}
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
                                        <ProductCatalogApplication product={product}></ProductCatalogApplication>
                                    }
                                ></Product>
                            ))}
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
}

export {
    CatalogItemWidgets
};