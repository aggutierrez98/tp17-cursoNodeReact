import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementar, incrementar, resetear } from '../reducers/actions';

export default function Contador() {

  const contador = useSelector((state) => state.numero);
  const dispatch = useDispatch();

  return (
    <div className="contador">
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <div>
        <button onClick={() => dispatch(incrementar())}>+</button>
        <button onClick={() => dispatch(decrementar())}>-</button>
        <button onClick={() => dispatch(resetear())}>Volver a 0</button>
      </div>
    </div>
  );
}

