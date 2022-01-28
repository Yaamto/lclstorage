import React, { useEffect, useState } from 'react';


function Count() {
    const storedValueAsNumber = Number(localStorage.getItem("count"))
    const [count, setCount] = useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0)
    
    
    const addCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(0)
    }

    useEffect(() =>{
        localStorage.setItem('count', count)
    }, [count])
  return <div>
       <h1>{count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={resetCount}>Reset</button>
      
  </div>;
}

export default Count;
