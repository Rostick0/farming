import { useSelector } from 'react-redux';
import { Button } from '../../UI/Button';
import styles from './result.module.scss';

const CartResult = () => {
    const products = useSelector(state => state.cart.products);

    const amountProducts = products.reduce(
        (prev, current) => prev = current?.count * current?.price, 0
    );

    if (!products?.length) return;

    return (
        <div className={styles.result}>
            <div className={styles.result__title}>Заказ</div>
            <div className={styles.result__item}>
                <strong>Товаров:</strong>
                <strong>{products?.length ?? 0}</strong>
            </div>
            <div className={styles.result__item}>
                <strong>Итого:</strong>
                <strong>{amountProducts} ₽</strong>
            </div>
            <Button className={styles.result__button}>Заказать</Button>
        </div>
    );
};

export {
    CartResult
};