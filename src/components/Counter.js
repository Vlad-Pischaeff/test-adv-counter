import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment, remove } from '../store/counterSlice';
import styles from './Counter.module.css';

export const Counter = ({ counter }) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.row}>
            <span className={styles.value}>{counter.value}</span>
            <button className={styles.button}
                    onClick={() => dispatch(decrement(counter.id))} >
                -
            </button>

            <button className={styles.button}
                    onClick={() => dispatch(increment(counter.id))} >
                +
            </button>
            <button className={styles.button}
                    onClick={() => dispatch(remove(counter.id))} >
                x
            </button>
        </div>
    );
}