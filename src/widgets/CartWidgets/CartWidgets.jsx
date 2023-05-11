import { Button } from '../../UI/Button';
import { LinkTo } from '../../UI/LinkTo';
import { Title } from '../../UI/Title';
import { Container } from '../../UI/Container';
import { CartProductItem } from '../../components/CartProductItem';
import styles from './cart.module.scss';

const CartWidgets = () => {
    const products = [
        {
            id: 1,
            image: 'https://pet-q.com/wp-content/uploads/2018/06/2018_06_11-2_2-600x400.jpg',
            title: 'Кролик белый',
            price: '999',
            count: 1
        }
    ];

    return (
        <div>
            <Container>
                <Title>Коризна</Title>
                <div className={styles.cart__content}>
                    <div className="cart__product">
                        <div className="cart__product_list">
                            {/* / */}
                            {products.map(product => (
                                <CartProductItem
                                    key={product?.id}
                                    id={product?.id}
                                    image={product?.image}
                                    title={product?.title}
                                    price={product?.price}
                                    count={product?.count}
                                ></CartProductItem>
                            ))}
                        </div>
                        <Button>Загрузить ещё</Button>
                    </div>
                    <div className="cart__result">
                        <div className="cart__result_title">Заказ</div>
                        <div className="cart__result_amount">
                            <strong>Итого:</strong>
                            <strong className="cart__result_price">12 333 ₽</strong>
                        </div>
                        <Button>Заказать</Button>
                    </div>
                </div>
                <div>
                    <LinkTo to="/catalog">В каталог</LinkTo>
                    <Button>Очистка корзины</Button>
                </div>
            </Container>
        </div>
    );
};

export {
    CartWidgets
};