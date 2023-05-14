import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { CounterInput } from "../../UI/CounterInput";
import styles from './product.module.scss';
import { ReviewsList } from "../../components/ReviewsList";
import { Container } from "../../UI/Container";
import { ProductSliderImage } from "../../components/ProductSliderImage/ProductSliderImage";
import { ReviewsForm } from "../../components/ReviewsForm";
import { useDispatch, useSelector } from "react-redux";
import { productAdd } from "../../store/slices/cart";
import { useState } from "react";

const ProductWidgets = ({ id }) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.productsAll[state.products.productsAll.findIndex(product => product.id == id)])

    const reviews = [
        {
            id: 1,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Даниил',
            raiting: 5,
            text: 'Очень понравилось'
        },
        {
            id: 2,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum in necessitatibus mollitia accusamus autem nobis vel saepe pariatur. Velit totam non nemo quam. Voluptas nihil explicabo iste facere cupiditate!'
        },
        {
            id: 3,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Проверяю заказ перед покупкой'
        },
        ,
        {
            id: 4,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam accusantium aliquid sequi nisi minus ipsum nemo commodi temporibus odio vitae mollitia perferendis repellendus, optio ducimus. Vitae, officiis tempore. Id!'
        }
    ];

    const onSubmitForm = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert('Ваш отзыв отправлен в поддержку, спасибо!');
            setSubmitting(false);
        }, 400);
    };

    return (
        <div className={styles.product}>
            <Container>
                <Title>Кролики</Title>
                <div className={styles.product__content}>
                    <div className={styles.product__images}>
                        <ProductSliderImage images={product?.images}></ProductSliderImage>
                    </div>
                    <div className={styles.product__info}>
                        <div className={styles.product__amount}>
                            <div className={styles.product__price}>{product?.price} ₽</div>
                            <div className={styles.product__amount_application}>
                                <CounterInput
                                    count={count}
                                    onCountChange={setCount}
                                ></CounterInput>
                                <Button
                                    className={styles.product__buy}
                                    onClick={() => dispatch(productAdd({
                                        id,
                                        image: product?.image,
                                        title: product?.title,
                                        price: product?.price,
                                        count
                                    }))}
                                >В корзину</Button>
                            </div>
                        </div>
                        <ul className={styles.product__info_list}>
                            <li className={styles.product__info_item}>
                                <strong>Рейтинг:</strong>
                                <span>{product.raiting}/5</span>
                            </li>
                            <li className={styles.product__info_item}>
                                <strong>Производитель:</strong>
                                <span>{product.vendor}</span>
                            </li>
                            <li className={styles.product__info_item}>
                                <strong>Статус:</strong>
                                <span>{product.is_have ? 'В наличии' : 'Нет в наличии'}</span>
                            </li>
                        </ul>
                        {
                            product?.description
                            &&
                            <>
                                <strong>Описание:</strong>
                                <div className={styles.product__description}>{product?.description}</div>
                            </>
                        }
                    </div>
                </div>
                <ReviewsList reviews={product?.reviews}></ReviewsList>
                <ReviewsForm
                    onSubmitForm={onSubmitForm}
                ></ReviewsForm>
            </Container>
        </div>
    );
};

export {
    ProductWidgets
};