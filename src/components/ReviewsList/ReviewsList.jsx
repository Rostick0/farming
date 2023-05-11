import { ReviewsItem } from '../ReviewsItem';
import styles from './list.module.scss';

const ReviewsList = ({ reviews }) => {
    if (!reviews?.length) return;

    return (
        <div className={styles.reviews__list}>
            {reviews?.map(review => (
                <ReviewsItem
                    id={review?.id}
                    image={review?.image}
                    name={review?.name}
                    raiting={review?.raiting}
                    text={review?.text}
                ></ReviewsItem>
            ))}
        </div>
    );
};

export {
    ReviewsList
};