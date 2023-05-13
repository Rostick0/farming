import { LayoutDefault } from "../components/LayoutDefault";
import { ContactsWidgets } from "../widgets/ContactsWidgets";

const ContactsPage = () => {
    return (
        <LayoutDefault mainPaddingTop="0">
            <ContactsWidgets></ContactsWidgets>
        </LayoutDefault>
    );
};

export default ContactsPage;