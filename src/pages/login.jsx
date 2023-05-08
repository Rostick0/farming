import { Container } from "../UI/Container";
import { LayoutDefault } from "../components/LayoutDefault";
import { LoginWidgets } from "../widgets/LoginWidgets";

const LoginPage = () => {
    return (
        <LayoutDefault>
            <Container>
                <LoginWidgets></LoginWidgets>
            </Container>
        </LayoutDefault>
    );
};

export default LoginPage;