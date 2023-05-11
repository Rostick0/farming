import { Button } from '../../UI/Button';
import styles from './result.module.scss';

const CartResult = () => {
    return (
        <div className={styles.result}>
            <div className={styles.result__title}>Заказ</div>
            <div className={styles.result__item}>
                <strong>Товаров:</strong>
                <strong>3</strong>
            </div>
            <div className={styles.result__item}>
                <strong>Итого:</strong>
                <strong>12 333 ₽</strong>
            </div>
            <Button className={styles.result__button}>Заказать</Button>
        </div>
    );
};

export {
    CartResult
};