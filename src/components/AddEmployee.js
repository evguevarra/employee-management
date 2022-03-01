
import React, { useState, useEffect } from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate, Link , useParams} from 'react-router-dom'

const AddEmployee = () => {

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, email}

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response) =>{

                console.log(response.log);
                navigate("/employees");
    
            }).catch(error =>{
                console.log(error);
            })
            
        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.log);
                navigate("/employees");
    
            }).catch(error =>{
                console.log(error);
            })
        }

        
    }

    useEffect(() => {
      
        EmployeeService.getEmployeeById(id).then((response) =>{

            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
            // console.log(response.log);
            // navigate("/employees");

        }).catch(error =>{
            console.log(error);
        })
    }, [])
    
    const title = () =>{
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add an Employee</h2>
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Firstname:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee Firstname'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange = {(e) => setFirstName(e.target.value)}
                                        >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Lastname:</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Employee Lastname'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange = {(e) => setLastName(e.target.value)}
                                        >
                                    </input>
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email:</label>
                                    <input
                                        type='email'
                                        placeholder='Email Address'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                        >
                                    </input>
                                </div>
                                <br/>
                                <button className='btn btn-secondary w-100' onClick={(e) => saveOrUpdateEmployee(e)}> Save </button>
                                <br/>
                                <Link to='/employees' className='btn btn-outline-secondary w-100 mt-3'>Cancel</Link>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee