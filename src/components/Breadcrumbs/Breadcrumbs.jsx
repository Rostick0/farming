import { LinkTo } from './../../UI/LinkTo';
import styles from './breadcrumbs.module.scss';

// items = [{text, ?link, ?active}]
const Breadcrumbs = ({ items }) => {
    return (
        <ul className={styles.breadcrumbs}>
            {items?.map((elem, index) => {
                if (elem?.active) {
                    return (
                        <li key={index} className={styles.breadcrumbs__item + ' ' + styles.breadcrumbs__item_active}>
                            <span>{elem?.text}</span>
                        </li>
                    );
                }

                return (
                    <li key={index} className={styles.breadcrumbs__item}>
                        <LinkTo to={elem?.link}>{elem?.text}</LinkTo>
                    </li>
                );
            })}
        </ul>
    );
};

export {
    Breadcrumbs
};