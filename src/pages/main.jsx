import { MainWidgets } from "../widgets/MainWidgets";
import { LayoutDefault } from "./../components/LayoutDefault";

const MainPage = () => {
    return (
        <LayoutDefault mainPaddingTop="0" headerStyle={{boxShadow: 'none', zIndex: 15}}>
            <MainWidgets></MainWidgets>
        </LayoutDefault>
    );
};

export default MainPage;