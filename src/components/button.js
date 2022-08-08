
const Button = ({color,text,onAdd}) => {
  return (
<button onClick={onAdd} style={{backgroundColor:color}} className='btn'>{text}</button> //assigning color and text to display in button
  )
}

export default Button