import { Container } from "../UI/Container";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LayoutDefault } from "../components/LayoutDefault";
import { RecoveryWidgets } from "../widgets/AuthorizationWidgets";

const RecoveryPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Восстановление',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
                <RecoveryWidgets></RecoveryWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default RecoveryPage;