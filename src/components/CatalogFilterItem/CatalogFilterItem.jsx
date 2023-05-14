import { memo, useRef, useState } from 'react';
import styles from './item.module.scss';

const CatalogFilterItem = memo(({ title, children }) => {
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    const checkClassActive = active ? ' ' + styles._active : '';

    return (
        <div className={styles.filter + checkClassActive}>
            <div className={styles.filter__show} onClick={() => setActive(prev => !prev)}>{title}</div>
            <div
                className={styles.filter__hide}
                ref={ref}
                style={{ '--Heigth': ref?.current?.scrollHeight + 'px' }}
            >{children}</div>
        </div>
    );
});

export {
    CatalogFilterItem
};