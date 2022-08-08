import Button from './button'
import PropTypes from 'prop-types'

const Header = ({title,onAdd,showAddTask}) => {
 
  return (
    <header className="header">
        <h1 >{title}</h1>
        <Button color={showAddTask? 'red':'green'} text={showAddTask?'Close':'Add'} onAdd={onAdd}/>
    </header>
  )
}
Header.defaultProps={ //setting default props for title
    title:'Todo List'
}

Header.prototype={//setting type for title
  title: PropTypes.string, 
}
  
export default Header


