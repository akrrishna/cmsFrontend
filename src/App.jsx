
import './App.css'

function App() {

  const name = "Krishna"

  const myCssObject = {
    color : "red"
  }
  

  return (
   <>
    <h1 style={{color : "blue"}}>Hello World</h1>
    <h2 style={myCssObject}>Hi</h2>
    <h2>My age is {20+3}</h2>
    <h3>{name}</h3>


    </>
  )
}

export default App
