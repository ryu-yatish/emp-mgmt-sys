import React from 'react'
import { FaTimes} from 'react-icons/fa'
 
const Employee = ({employee, onDelete}) => {
  return (
    <div className='employee'>
        <h3>{employee.name} <FaTimes style={{color: 'red'}} 
        onClick={() =>onDelete(employee.id)}/></h3>
        <p>{employee.position}</p>
    </div>
  )
}

export default Employee
