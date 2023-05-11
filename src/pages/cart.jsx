import { CartWidgets } from "../widgets/CartWidgets";
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';
import { Container } from "../UI/Container";

const CartPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Корзина',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
            </Container>
            <CartWidgets></CartWidgets>
        </LayoutDefault>
    );
};

export default CartPage;