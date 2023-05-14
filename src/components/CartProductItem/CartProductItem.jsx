import { CounterInput } from '../../UI/CounterInput';
import { SvgXDelete } from '../../UI/SvgXDelete';
import { LinkTo } from '../../UI/LinkTo';
import styles from './product.module.scss';
import { useDispatch } from 'react-redux';
import { editProductCount, productDelete } from '../../store/slices/cart';

const CartProductItem = ({
    id,
    image,
    title,
    price,
    count,
    description
}) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.product}>
            <div className={styles.product__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.product__content}>
                <div className={styles.product__content_top}>
                    <div className={styles.product__info}>
                        <div className={styles.d}>
                            <LinkTo
                                className={styles.product__title}
                                to={`/product/${id}`}
                            >{title}</LinkTo>
                            <div className={styles.product__price}>{price} ₽ за 1</div>
                        </div>
                        <div className={styles.d}>
                            <CounterInput
                                count={count}
                                onCountChange={count => dispatch(editProductCount({ id, count }))}
                            ></CounterInput>
                            <div className={styles.product__price}><strong>Сумма:</strong> {price * count} ₽</div>
                        </div>
                    </div>
                    <SvgXDelete
                        className={styles.product__delete}
                        onClick={() => dispatch(productDelete({ id }))}
                    ></SvgXDelete>
                </div>
                {description && <div className={styles.product__description}>{description}</div>}
            </div>
        </div>
    );
};

export {
    CartProductItem
};