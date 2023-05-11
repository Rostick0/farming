import { CounterInput } from '../../UI/CounterInput';
import { SvgXDelete } from '../../UI/SvgXDelete';
import { LinkTo } from '../../UI/LinkTo';
import styles from './product.module.scss';

const CartProductItem = ({
    id,
    image,
    title,
    price,
    count,
    description
}) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.product__content}>
                <div className={styles.product__content_top}>
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
                            onCountChange={e => console.log(e)}
                        ></CounterInput>
                        <div className={styles.product__price}><strong>Сумма:</strong> {price * count} ₽</div>
                    </div>
                    <SvgXDelete className={styles.product__delete}></SvgXDelete>
                </div>
                {description && <div className={styles.product__description}>{description}</div>}
            </div>
        </div>
    );
};

export {
    CartProductItem
};