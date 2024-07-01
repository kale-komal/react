import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [about, setAbout] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/users', {
                name,
                phone,
                about
            });
            alert("Data Submite Successfully!")
            navigate('/');
        }catch(error) {
            alert ("Data not submited")
            console.log(error);
        }
    }
    return(
        <div className="form">
             <h1>Add your details to register</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>

                <label>Phone No</label>
                <input type="text"  value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/>

                <label>About</label>
                <textarea  value={about} onChange={(e)=>setAbout(e.target.value)}/><br/>
                <input  className="button" type="submit" value="Register" />
            </form>
        </div>
    );

}

export default Add;
