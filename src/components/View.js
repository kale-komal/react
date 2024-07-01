import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const View = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/users').then(response=>{
            console.log(response.data);
            setUsers(response.data)
        }).catch(error=>{
            console.log("Error is :", error)
        })
    },[])


    const handleDelete =async(id,name) =>{
        const confirmDelete = window.confirm(`Are you sure you want to delete ${name} ?`);
        if(confirmDelete){
            try{
                axios.delete(`http://localhost:5000/users/${id}`);
                alert("Record Deleted Successfully");
                window.location.reload();
            }catch(error){
                console.log(error);
            }
        }
    }
       return(
        <div className="container">
            <h1>Friendship Zone</h1>
            <h3>A place to find like minded people...</h3>
            <p>One of the most beautiful qualities of true friendship is to understand and to be understood.</p><br/>
            <h2>Details of people...</h2>
            <Link to="/add-data" className="link"> Register to get added in the list</Link>
            <br/><br/>
            <table> 
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>About</th>
                        <th>Phone No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=>(
                         <tr key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.name}</td>
                           <td>{user.about}</td>
                           <td>{user.phone}</td>
                            <td>
                            <Link to={`/edit/${user.id}`}>Edit</Link><br/>
                                <button  onClick={()=>handleDelete(user.id, user.name)}>Delete</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
       );
}

export default View;