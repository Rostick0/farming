import { CounterInput } from '../../UI/CounterInput';
import { SvgXDelete } from '../../UI/SvgXDelete';
import { LinkTo } from '../../UI/LinkTo';
import styles from './product.module.scss';

const CartProductItem = ({
    id,
    image,
    title,
    price,
    count
}) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__image}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.product__content}>
                <div className={styles.d}>
                    <LinkTo
                        className={styles.product__title}
                        to={`/product/${id}`}
                    >{title}</LinkTo>
                    <div className={styles.product__price}>{price}</div>
                </div>
                <div className={styles.d}>
                    <CounterInput
                        count={count}
                        onCountChange={e => console.log(e)}
                    ></CounterInput>
                    <div className={styles.product__count}>{count}</div>
                    <div className={styles.product__price}>{price * count}</div>
                </div>
                <SvgXDelete></SvgXDelete>
            </div>
        </div>
    );
};

export {
    CartProductItem
};