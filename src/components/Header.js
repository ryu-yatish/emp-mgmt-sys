import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd?'red': 'green'} text={showAdd?'close': 'Add Employee'} onClick={onAdd}/>
    </header>
  )
}


Header.defaultProps ={
    title: 'no title given',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
