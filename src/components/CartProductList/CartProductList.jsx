import { CartProductItem } from '../../components/CartProductItem';
import styles from './list.module.scss';

const CartProductList = ({ products }) => {
    return (
        <div className={styles.product__list}>
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
    );
};

export {
    CartProductList
};