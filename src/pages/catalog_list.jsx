import { Container } from '../UI/Container';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';
import { CatalogListWidgets } from '../widgets/CatalogWidgets';

const CatalogListPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Каталог',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
                <CatalogListWidgets></CatalogListWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default CatalogListPage;