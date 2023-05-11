import { Button } from '../../UI/Button';
import { LinkTo } from '../../UI/LinkTo';
import { Title } from '../../UI/Title';
import { Container } from '../../UI/Container';
import styles from './cart.module.scss';
import { CartResult } from '../../components/CartResult';
import { CartProductList } from '../../components/CartProductList';

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
                <Title>Корзина</Title>
                <div className={styles.cart__content}>
                    <div className={styles.cart__product}>
                        <CartProductList products={products}></CartProductList>
                        <Button className={styles.cart__product_more}>Загрузить ещё</Button>
                        <div className={styles.cart__links}>
                            <LinkTo to="/catalog">
                                <Button styleColor="green-outline">В каталог</Button>
                            </LinkTo>
                            <Button to="#" styleColor="red">Очистка корзины</Button>
                        </div>
                    </div>
                    <CartResult></CartResult>
                </div>
            </Container>
        </div>
    );
};

export {
    CartWidgets
};