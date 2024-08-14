import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/provaiders/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <h1> value ={counterValue}</h1>
            <button type="button" onClick={increment}>
                {' '}
                increment
            </button>
            <button type="button" onClick={decrement}>
                {' '}
                decrement
            </button>
        </div>
    );
};
