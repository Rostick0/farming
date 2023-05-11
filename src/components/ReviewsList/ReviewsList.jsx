import { Button } from '../../UI/Button';
import { Title } from '../../UI/Title';
import { ReviewsItem } from '../ReviewsItem';
import styles from './list.module.scss';

const ReviewsList = ({ reviews }) => {
    if (!reviews?.length) return;

    return (
        <>
            <Title>Отзывы</Title>
            <div className={styles.reviews__list}>
                {reviews?.map(review => (
                    <ReviewsItem
                        key={review?.id}
                        id={review?.id}
                        image={review?.image}
                        name={review?.name}
                        raiting={review?.raiting}
                        text={review?.text}
                    ></ReviewsItem>
                ))}
            </div>
            <Button
                className={styles.reviews__more}
                styleColor="green-outline"
            >Загрузить ещё</Button>
        </>
    );
};

export {
    ReviewsList
};