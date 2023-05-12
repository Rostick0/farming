import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';
import { Container } from "../UI/Container";
import { PartnersWidgets } from '../widgets/PartnersWidgets/PartnersWidgets';

const PartnersPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Партнерам',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
            </Container>
            <PartnersWidgets></PartnersWidgets>
        </LayoutDefault>
    );
};

export default PartnersPage;