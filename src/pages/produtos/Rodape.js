import { observer } from 'mobx-react-lite';
import React from 'react'
const Rodape = observer((props) => {

    return (
        <div >
            
            <h1> Counter: {props.store.count}</h1>
            
        
            <button type="button" onClick={() => props.store.increment()}> Increment </button>
            <button type="button" onClick={() => props.store.decrement()}> Decrement </button>
            <button type="button" onClick={() => props.store.reset()}> Reset </button>
        </div>
    );
});

export default Rodape;