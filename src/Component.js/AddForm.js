import React, { useState } from 'react';
import './style.css';

import { useLocation, useNavigate } from 'react-router-dom';
const AddForm = (props) => {
   
 
    const[newData,AllnewData]=useState([])
    const [formData, setFormData] = useState({name: "",age: "",course: "",batch:""});

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(formData)
      props.onSubmit(formData)
      const tempObj=[...newData]
      tempObj.push(formData)
      AllnewData(tempObj)

     
    
  };
  const handleCancel=useNavigate()
const handleCancelfun=()=>{
handleCancel("/student-details")
}

    return (
        <div >
            
            <div className='addform'>
            <form >
            <input type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
            <input type="number" placeholder='Age' name='age' value={formData.age} onChange={handleChange} />
            <input type="text" placeholder='Course' name='course' value={formData.course} onChange={handleChange} />
            <input type="number" placeholder='Batch' name='batch' value={formData.batch} onChange={handleChange} />
            
            
            </form>
            
            </div>
            <div className='formbuttons'>
                <button onClick={handleCancelfun}>Cancel</button>
            <button type='button' onClick={handleSubmit}>Submit</button>
            </div>
          {newData.map((value,index)=>{
            return(
                <table key={index}>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.course}</td>
                    <td>{value.batch}</td>

                </table>
            )
          })}
            
        </div>
    );
}

export default AddForm;
