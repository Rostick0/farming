import LazyLoad from 'react-lazy-load';
import { Link } from "react-router-dom";
import { LinkTo } from "../LinkTo";
import styles from './product.module.scss';
import { memo } from 'react';

const Product = memo(
    ({ className, id, image, title, price, application }) => {
        const styleClassName = className ? ' ' + className : '';
        const productLink = `/product/${id}`;

        return (
            <div className={styles.product + styleClassName}>
                <Link className={styles.product__image} to={productLink}>
                    <LazyLoad width={"100%"}>
                        <img
                            src={image}
                            alt={title}
                            decoding="async"
                            loading="lazy"
                        />
                    </LazyLoad>
                </Link>
                <LinkTo className={styles.product__title} to={productLink}>{title}</LinkTo>
                <div className={styles.product_price}>{price} ₽</div>
                {application}
            </div>
        );
    }
);

export {
    Product
};