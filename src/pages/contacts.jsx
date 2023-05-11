import { LayoutDefault } from "../components/LayoutDefault";
import { ContactsWidgets } from "../widgets/ContactsWidgets";

const ContactsPage = () => {
    return (
        <LayoutDefault mainPaddingTop="0">
            {/* <Title>Контакты</Title> */}
            <ContactsWidgets></ContactsWidgets>
        </LayoutDefault>
    );
};

export default ContactsPage;