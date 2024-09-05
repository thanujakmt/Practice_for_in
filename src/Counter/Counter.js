
// Create a React component that displays a counter and two buttons.
// One button should increment the counter, and the other should reset it to zero 

import { useState } from 'react';

function Counter () {

    const [count,setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDrement = () => {
        setCount(0)
    }

    return(
        <>
            <div>
                <h1>Count : {count}</h1>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDrement}>Decrement</button>
            </div>
        </>
    )
}

export default Counter
