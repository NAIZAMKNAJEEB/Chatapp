// Register.js
import React, { useState } from 'react';
import '../src/Style.css';
import Login from './Login';
import { Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [lookingFor, setLookingFor] = useState('');
    const [place, setPlace] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add registration logic here
        console.log('Registration submitted:', name, gender, lookingFor, place,password);
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Gender:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </label>
                <br />
                <label>
                    Looking for:
                    <select value={lookingFor} onChange={(e) => setLookingFor(e.target.value)}>
                        <option value="">Select</option>
                        <option value="lover">Lover</option>
                        <option value="friend">Friend</option>
                        <option value="both">Both</option>
                    </select>
                </label>
                <br />
                <label>
                    Place:
                    <input
                        type="text"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <input type="submit" value="Register" />
                <Link to="/"><label>Already have an account</label></Link>

            </form>
        </div>
    );
}

export default Register;