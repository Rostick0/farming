import { Button } from "../../UI/Button";
import { Title } from "../../UI/Title";
import { CounterInput } from "../../UI/CounterInput";
import styles from './product.module.scss';
import { ReviewsList } from "../../components/ReviewsList";
import { Container } from "../../UI/Container";
import { ProductSliderImage } from "../../components/ProductSliderImage/ProductSliderImage";

const ProductWidgets = ({ id }) => {
    const images = [];

    for (let i = 1; i <= 10; i++) {
        images.push({
            id: i,
            src: `https://swiperjs.com/demos/images/nature-${i}.jpg`
        })
    }

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
            id: 2,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Проверяю заказ перед покупкой'
        },
        ,
        {
            id: 2,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam accusantium aliquid sequi nisi minus ipsum nemo commodi temporibus odio vitae mollitia perferendis repellendus, optio ducimus. Vitae, officiis tempore. Id!'
        }
    ]

    return (
        <div className={styles.product}>
            <Container>
                <Title>Кролики</Title>
                <div className={styles.product__content}>
                    <div className={styles.product__images}>
                        <ProductSliderImage images={images}></ProductSliderImage>
                    </div>
                    <div className={styles.product__info}>
                        <div className={styles.product__amount}>
                            <div className={styles.product__price}>300 ₽</div>
                            <div className={styles.product__amount_application}>
                                <CounterInput

                                ></CounterInput>
                                <Button className={styles.product__buy}>В корзину</Button>
                            </div>
                        </div>
                        <ul className={styles.product__info_list}>
                            <li className={styles.product__info_item}>
                                <strong>Рейтинг:</strong>
                                <span>5/5</span>
                            </li>
                            <li className={styles.product__info_item}>
                                <strong>Производитель:</strong>
                                <span>Неизвестно</span>
                            </li>
                            <li className={styles.product__info_item}>
                                <strong>Статус:</strong>
                                <span>В наличии</span>
                            </li>
                        </ul>
                        <strong>Описание:</strong>
                        <div className={styles.product__description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, id voluptates obcaecati totam repudiandae fuga assumenda natus quam mollitia ipsum doloremque reprehenderit facilis. Sed accusamus nam asperiores ex non! Expedita.</div>
                    </div>
                </div>
                <ReviewsList reviews={reviews}></ReviewsList>
            </Container>
        </div>
    );
};

export {
    ProductWidgets
};