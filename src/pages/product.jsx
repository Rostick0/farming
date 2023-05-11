import { useParams } from 'react-router-dom';
import { LayoutDefault } from "../components/LayoutDefault";
import { ProductWidgets } from '../widgets/ProductWidgets';
import { Container } from '../UI/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';

const ProductPage = () => {
    const { id } = useParams();
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Каталог',
            link: '/catalog'
        },
        {
            text: 'Кролики',
            link: '/catalog/rabbit'
        },
        {
            text: 'Кролик белый',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
            </Container>
            <ProductWidgets
                id={id}
            ></ProductWidgets>
        </LayoutDefault>
    );
};

export default ProductPage;