import styles from './review.module.scss';
import { LinkTo } from '../../UI/LinkTo';

const ReviewsItem = ({
    id,
    image,
    name,
    raiting,
    text
}) => {
    return (
        <div className={styles.review}>
            <div className={styles.review__top}>
                <div className={styles.review__image}>
                    <img src={image} alt={name} />
                </div>
                <LinkTo
                    className={styles.review__name}
                    to={`/profile/${id}`}
                >{name}</LinkTo>
                {<div className={styles.review__raiting}>{raiting}/5</div> ?? <span>Рейтинг не указан</span>}
            </div>
            <div className={styles.review__text}>{text}</div>
        </div>
    );
};

export {
    ReviewsItem
};