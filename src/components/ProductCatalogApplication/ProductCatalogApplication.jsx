import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button';
import styles from './application.module.scss';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { productAdd } from '../../store/slices/cart';

const ProductCatalogApplication = memo(({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.application}>
            <Link to={`/product/${product?.id}`}>
                <Button>Подробнее</Button>
            </Link>
            <Button
                onClick={() => dispatch(productAdd({ ...product, count: 1 }))}
                styleColor="green-outline"
            >В корзину</Button>
        </div>
    );
});

export {
    ProductCatalogApplication
};