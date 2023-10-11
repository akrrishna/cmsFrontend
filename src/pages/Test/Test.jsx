 import { useState } from "react"


const Test = () => {
    var [count,setCount] = useState(0)

    function increaseCount(){
        setCount(count=count+1)
        
      
    }

    function decreaseCount(){
        setCount(count=count-1)
        
    }

    // const [chauchau,setChauchau] = useState(0)
  return (
    <div>
     <h2>{count}</h2>
     <button onClick={increaseCount}>+</button>
     <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Test
