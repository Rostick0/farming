import { useParams } from 'react-router-dom';
import { CatalogItemWidgets } from '../widgets/CatalogWidgets';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';
import { Container } from '../UI/Container';
import { useSelector } from 'react-redux';

const CatalogItemPage = () => {
    const { category } = useParams();
    const categoryTitle = useSelector(state => state.categories.categories[state.categories.categories.findIndex(item => item.category == category)])?.title;

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
            text: categoryTitle ?? 'Все',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
            </Container>
            <CatalogItemWidgets category={category} categoryTitle={categoryTitle}></CatalogItemWidgets>
        </LayoutDefault>
    );
};

export default CatalogItemPage;