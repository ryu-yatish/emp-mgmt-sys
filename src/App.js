import Header from "./components/Header";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import React from "react";
import { useState, useEffect } from 'react'

function App() {
  const [showAddEmployee, setShowEmployee] = useState(false)
  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    const getEmployees =async () => {
      const employeesFromServer =await fetchEmployees()
      setEmployees(employeesFromServer)
    }
    
    getEmployees()
  }, [])

  const fetchEmployees = async() => {
    const res = await fetch('http://localhost:5000/employees')
    const data = await res.json()

    return data
  }

  const addEmployee =async (employee) =>{
    const res = await fetch(`http://localhost:5000/employees`,{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
      },
      body: JSON.stringify(employee),
    })

    const data = await res.json()
    setEmployees([...employees,data])

    
  }
  const deleteEmployee = async (id) =>{

    await fetch(`http://localhost:5000/employees/${id}`,{
      method:'DELETE',
    })

    setEmployees(employees.filter((employee)=> employee.id!==id))
  }

  return (
    <div className="container">
      <Header title='Employee Management System' onAdd={() => setShowEmployee(!showAddEmployee)} showAdd={showAddEmployee}/>
      {showAddEmployee && <AddEmployee onAdd={addEmployee}/>}
      <Employees employees={employees} onDelete={deleteEmployee}/>
    </div>
  );
}

export default App;
