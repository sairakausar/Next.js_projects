'use client'

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/slices/counterSlice';




export default function CounterApp() {
    const count = useSelector((store) => store.counterSlice.counter)
    const forDispatch = useDispatch();
    const Plus = () => forDispatch(increment());
    const Minus = () => forDispatch(decrement());
    return (
      <div>
        <div>
          <button onClick={Plus}> Add </button>
        </div>
        {count}
        <br />
        <div>
          <button onClick={Minus}> Minus </button>
        </div>
      </div>
    );
}