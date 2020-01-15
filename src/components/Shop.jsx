import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../action';

const Shop = () => {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
  <div>
    <h1> Shop page </h1>
    <h2>Counter {counter}</h2>
    <button onClick={ () => dispatch(increment()) }>+</button>
    <button  onClick={ () => dispatch(decrement()) }>-</button>
    {isLogged ? <h3> Uniquememt co jpeux voire</h3> : ''}
  </div>
  );
}

export default Shop;
