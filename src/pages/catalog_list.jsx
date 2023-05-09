import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';

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
            <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>

        </LayoutDefault>
    );
};

export default CatalogListPage;