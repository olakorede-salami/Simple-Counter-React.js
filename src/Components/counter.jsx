import React from 'react';

const Counter = ({count, setCount}) => {

    const handleIncrease = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrease = () => {
        setCount((prevCount)=> prevCount - 1)
    }

    return(
    <div className="main-div">
    <h1>{count}</h1>
    <div className="button-div">
    <button onClick={handleIncrease}><i class="fas fa-plus-square"></i></button>
    <button onClick={handleDecrease}><i class="fas fa-minus-square"></i></button>
    </div>
    </div>
    )
}

export default Counter