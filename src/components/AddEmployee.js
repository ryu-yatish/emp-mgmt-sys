import React from 'react'
import { useState } from 'react'

const AddEmployee = ({onAdd}) => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!name){
            alert('please put in text')
            return
        }

        onAdd({name, position})

        setName('')
        setPosition('')

    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <h3>New Employee details</h3>
      <div className='form-control'>
        <label>Name</label>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        
      </div>
      <div className='form-control'>
        <label>Position</label>
        <input  type='text' placeholder='position' value={position} onChange={(e) => setPosition(e.target.value)}/>
        
      </div>

      <input type='submit' value='Save Employee' className='btn btn-block'/>
    </form>
  )
}

export default AddEmployee
