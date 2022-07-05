import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        list: [],
        tick: 0
    },
    reducers: {
        addCounter: (counter) => {
            counter.tick += 1;
            let sum = counter.list.reduce((acc, curValue) => acc + curValue.value, 0);
            if (counter.tick === 4) {
                counter.list.push({ "id": uuidv4(), "value": sum, "type": "autoincrement" });
                counter.tick = 0;
            } else {
                counter.list.push({ "id": uuidv4(), "value": sum, "type": "general" });
            }
        },
        increment: (counter, { payload }) => {
            const index = counter.list.findIndex(counter => counter.id === payload);
            counter.list[index].value += 1;
        },
        decrement: (counter, { payload }) => {
            const index = counter.list.findIndex(counter => counter.id === payload);
            counter.list[index].value -= 1;
        },
        remove: (counter, { payload }) => {
            const index = counter.list.findIndex(counter => counter.id === payload);
            counter.list.splice(index, 1);
        },
        autoIncrement: (counter) => {
            counter.list.forEach(counter => {
                if (counter.type === "autoincrement") counter.value += 1;
            });
        },
    },
});

export const { increment, decrement, remove, autoIncrement, addCounter } = counterSlice.actions;
export default counterSlice.reducer;