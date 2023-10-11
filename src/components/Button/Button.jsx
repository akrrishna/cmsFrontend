

const Button = (props) => {
    // const title = props.title
    const {title} = props
    const {color} = props

  return (
    

      <button style={{height:"50px" , width: "80px", backgroundColor : color}}>{title}</button>
    
  )
}

export default Button
