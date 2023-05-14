import { Button } from '../../UI/Button';
import { LinkTo } from '../../UI/LinkTo';
import { Title } from '../../UI/Title';
import { Container } from '../../UI/Container';
import styles from './cart.module.scss';
import { CartResult } from '../../components/CartResult';
import { CartProductList } from '../../components/CartProductList';
import { useDispatch, useSelector } from 'react-redux';
import { productDeleteAll } from '../../store/slices/cart';

const CartWidgets = () => {
    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products);

    return (
        <div>
            <Container>
                <Title>Корзина</Title>
                <div className={styles.cart__content}>
                    <div className={styles.cart__product}>
                        {products?.length ?
                            <CartProductList products={products}></CartProductList>
                            : 'Товаров нет'}
                        <div className={styles.cart__links}>
                            <LinkTo to="/catalog">
                                <Button styleColor="green-outline">В каталог</Button>
                            </LinkTo>
                            {products?.length > 0 &&
                                <Button
                                    onClick={() => dispatch(productDeleteAll())}
                                    styleColor="red"
                                >Очистка корзины</Button>}
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