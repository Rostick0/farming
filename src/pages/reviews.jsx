import { Container } from "../UI/Container";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LayoutDefault } from "../components/LayoutDefault";
import { ReviewsWidgets } from "../widgets/ReviewsWidgets";

const ReviewsPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Отзывы',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
                <ReviewsWidgets></ReviewsWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default ReviewsPage;