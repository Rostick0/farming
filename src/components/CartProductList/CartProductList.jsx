import { CartProductItem } from '../../components/CartProductItem';
import { Button } from '../../UI/Button';
import styles from './list.module.scss';

const CartProductList = ({ products }) => {
    return (
        <>
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
            {products?.length > 10 && <Button className={styles.product__more}>Загрузить ещё</Button>}
        </>
    );
};

export {
    CartProductList
};