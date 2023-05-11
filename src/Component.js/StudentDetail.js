import React from 'react';
import Nav from './Nav';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import AddForm from './AddForm';
const StudentDetail = (props) => {

    const navigate=useNavigate()

    const handlenavigate=()=>{
        navigate("/add-form")
    }
    return (
        <>
       
           
<div className='navbarheadbutton'>
    <span>
        Student Details
    </span>
    <button onClick={handlenavigate}>
        Add New Student
    </button>
    {data}
</div>




            <table border={"2px"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                       <th><Link>Edit</Link></th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Saleem</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Sangram</td>
                        <td>22</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>KISHAN</td>
                        <td>23</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>

                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>

                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>

                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                    <tr>
                        <td>Saleem</td>
                        <td>Saleem</td>
                        <td>MERN</td>
                        <td>EA21</td>
                        <td><Link>Edit</Link></td>
                    </tr>
                </tbody>
            </table>



        </>
    );
}

export default StudentDetail;
