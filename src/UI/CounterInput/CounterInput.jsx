import useInit from '../../hooks/useInit';
import styles from './counter.module.scss';
import { useLayoutEffect, useState } from "react";

const CounterInput = ({
    className,
    count = 0,
    onCountChange,
    min = 0,
    max = null,
}) => {
    const styleClassName = className ? ' ' + className : '';
    const [counter, setCounter] = useState(count);
    const init = useInit();

    const incrementCount = () => {
        if (max && counter >= max) return;

        setCounter(prev => prev += 1);
    };

    const decrementCount = () => {
        if (counter <= min) return;

        setCounter(prev => prev -= 1);
    };

    const onChange = (e) => {
        setCounter(e.target.value)
    }

    useLayoutEffect(() => {
        if (!init) return;

        if (typeof onCountChange === 'function') onCountChange(counter);
    }, [counter])

    return (
        <div className={styles.counter + styleClassName}>
            <div
                className={styles.counter__button + ' ' + styles.counter__decrement}
                onClick={decrementCount}
            >-</div>
            <input
                className={styles.counter__input}
                type="number"
                value={counter}
                onChange={onChange}
            />
            <div
                className={styles.counter__button + ' ' + styles.counter__increment}
                onClick={incrementCount}
            >+</div>
        </div>
    );
};

export {
    CounterInput
};