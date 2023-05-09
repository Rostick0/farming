import { Container } from "../UI/Container";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { LayoutDefault } from "../components/LayoutDefault";
import { RegisterWidgets } from "../widgets/AuthorizationWidgets";

const RegisterPage = () => {
    const breadcrumbsItems = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Регистрация',
            active: true
        }
    ];

    return (
        <LayoutDefault>
            <Container>
                <Breadcrumbs items={breadcrumbsItems}></Breadcrumbs>
                <RegisterWidgets></RegisterWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default RegisterPage;