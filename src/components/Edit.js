import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const {id} = useParams();
    console.log(id);

    const navigate = useNavigate();
 
    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:5000/users/${id}`).then(response=>{
            console.log(response.data);
            setUsers(response.data);
        }).catch(error =>{
            console.log("Error is:", error)
        })
    },[]);

    const [name, setName] = useState(users.name)
    const [phone, setPhone] = useState(users.phone)
    const [about, setAbout] = useState(users.about)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.patch(`http://localhost:5000/users/${id}`, {
                name,
                phone,
                about
            });
            alert("Data Update Successfully!")
            navigate('/');
        }catch(error) {
            alert ("Data not submited")
            console.log(error);
        }
    }
    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>

                <label>Phone No</label>
                <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>

                <label>About</label>
                <textarea  value={about} onChange={(e)=>setAbout(e.target.value)}/><br/>
                <input  className="button" type="submit" value="Update" />
            </form>
        </div>
    );

}

export default Edit;
