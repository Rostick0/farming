import { Breadcrumbs } from '../components/Breadcrumbs';
import { LayoutDefault } from '../components/LayoutDefault';
import { Container } from "../UI/Container";
import { AboutWidgets } from '../widgets/AboutWidgets';

const AboutPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'О нас',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
            </Container>
            <AboutWidgets></AboutWidgets>
        </LayoutDefault>
    );
};

export default AboutPage;