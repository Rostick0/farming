import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import styles from './search.module.scss';

const HeaderSearch = () => {
    return (
        <form className={styles.search} action="">
            <Input className={styles.search__input}></Input>
            <Button className={styles.search__button}>Поиск</Button>
        </form>
    );
};

export {
    HeaderSearch
};