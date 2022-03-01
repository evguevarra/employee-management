import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'


const ListEmployee = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmp();
    }, [])

    const getAllEmp = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmp();
        }).catch(error => {
            console.log(error);
        })

    }


    return (
        <div className='container'>
            <h2 className='text-center'> List of Employees </h2>
            <Link to='/add-employee' className='btn btn-secondary mb-2'> Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link className='btn btn-success' to={`/edit-employee/${employee.id}`} >Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}
                                            style={{ marginLeft: '5px' }}
                                        >Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee