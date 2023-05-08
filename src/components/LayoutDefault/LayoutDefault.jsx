import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from './layout_default.module.scss';

const LayoutDefault = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}

export {
    LayoutDefault
};