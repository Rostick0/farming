import { Title } from '../../UI/Title';
import { ReviewsList } from '../../components/ReviewsList';
import styles from './reviews.module.scss';
import { ReviewsForm } from '../../components/ReviewsForm';

const ReviewsWidgets = () => {
    const onSubmitForm = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    const reviews = [
        {
            id: 1,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Даниил',
            raiting: 5,
            text: 'Очень понравилось'
        },
        {
            id: 2,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum in necessitatibus mollitia accusamus autem nobis vel saepe pariatur. Velit totam non nemo quam. Voluptas nihil explicabo iste facere cupiditate!'
        },
        {
            id: 3,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Проверяю заказ перед покупкой'
        },
        ,
        {
            id: 4,
            image: 'https://webtopsolutions.org/img/team.png',
            name: 'Админ',
            raiting: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aperiam accusantium aliquid sequi nisi minus ipsum nemo commodi temporibus odio vitae mollitia perferendis repellendus, optio ducimus. Vitae, officiis tempore. Id!'
        }
    ]

    return (
        <div>
            <ReviewsList reviews={reviews}></ReviewsList>
            <ReviewsForm
                onSubmitForm={onSubmitForm}
            ></ReviewsForm>
        </div>
    );
};

export {
    ReviewsWidgets
};