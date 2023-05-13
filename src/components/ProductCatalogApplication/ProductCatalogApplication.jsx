import { Link } from 'react-router-dom';
import { Button } from '../../UI/Button';
import styles from './application.module.scss';

const ProductCatalogApplication = ({ productId }) => {
    return (
        <div className={styles.application}>
            <Link to={`/product/${productId}`}>
                <Button>Подробнее</Button>
            </Link>
            <Button styleColor="green-outline">В корзину</Button>
        </div>
    );
};

export {
    ProductCatalogApplication
};