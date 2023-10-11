import { useEffect, useState } from "react"


const UseEffect = () => {

    var [count,setCount] = useState(0)

    function increaseCount(){
        setCount(count=count+1);
    }
//when first time page loads
    // useEffect(()=>{
    //     console.log("Welcome to the site")
    // },[])

    //when count value changes
    // useEffect(()=>{
    //     console.log('Count value  changed')
    // },[count])

    useEffect(()=>{
        console.log("Changed")
    })

  return (
    <div>
      {count}
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default UseEffect
