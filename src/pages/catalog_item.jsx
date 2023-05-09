import { useParams } from 'react-router-dom';
import { CatalogItemWidgets } from '../widgets/CatalogWidgets';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';
import { Container } from '../UI/Container';

const CatalogItemPage = () => {
    const { category } = useParams();
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
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
                <CatalogItemWidgets></CatalogItemWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default CatalogItemPage;