import React, { useEffect } from 'react';
import { Counter } from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import { addCounter, autoIncrement } from '../store/counterSlice';
import styles from './App.module.css';

const App = () => {
    const dispatch = useDispatch();
    const counters = useSelector(state => state.counter.list);

    useEffect(() => {
        const timerId = setInterval(() => dispatch(autoIncrement()), 1000);
        return () => { clearInterval(timerId) }
        // eslint-disable-next-line
    }, [])

    const addNewCounter = () => {
        dispatch(addCounter());
    }

    return (
        <main className={styles.App}>
            <aside className={styles.left_aside}>

                { counters.map(n => <Counter key={n.id} counter={n} />) }
                
            </aside>
            <aside className={styles.right_aside}>
                <button onClick={addNewCounter}>add counter</button>
            </aside>
        </main>
    );
}

export default App;