import logo from '../assets/logo.svg'
import { auth } from '../fire';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import {useNavigate,  Link } from "react-router-dom";

export default function RegisterPage() {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [userName, setUsername] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [role, setRole] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();
    // validation
    const validatePassword = () => {
        let isValid = true;
        if (password !== "" && confirmPassword !== "") {
            if (password !== confirmPassword) {
                isValid = false;
                setError("Passwords does not match");
            }
        }
        return isValid;
    }

    async function Register(userName, userSurname, role, contact) {

        setError('');
        if (validatePassword()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(res => {
                    console.log(res.user.uid);
                    const formbody = {
                        "stakeholdersId": 0,
                        "stakeholdersName": userName,
                        "stakeholderSurname": userSurname,
                        "stakeholderRole": role,
                        "contact": contact,
                        "uid": res.user.uid
                    }
                    const request = fetch("https://afcentral.azurewebsites.net/api/StakeholderItems", {
                        method: "POST",
                        body: JSON.stringify(formbody),
                        headers: {
                            Accept: 'application.json',
                            "Content-Type": "application/json"
                        },

                    }).then(respnse => {
                        console.log(respnse.json());
                        navigate('/');
                    })
                }).catch(err => setError(err.message))
        }



        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <section className='loginContainer'>
            <section className='logoContainer'>
                <img className='logo' src={logo} alt="this is a logo used for the app factory" />
            </section>
            <section className='inputContainer'>
                <input type="text" className='input' onChange={(e) => setUsername(e.target.value)} value={userName} placeholder='Your Name' /><br />
                <input type="text" className='input' onChange={(e) => setUserSurname(e.target.value)} value={userSurname} placeholder='Your Surname' /><br />
               
                <select onChange={(e) => setRole(e.target.value)} value={role} className='input-select'>
                    <option value=''>Select</option>
                    <option value={"Facilitator"}> Facilitator</option>
                    <option value={"Intern"}>Intern</option>
                </select>
                <br />
                <input type="text" className='input' onChange={(e) => setContact(e.target.value)} value={contact} placeholder='Contact Number' /><br />
                <input type="text" className='input' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email' /><br />
                <input type="password" className='input' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' /><br />
                <input type="password" className='input' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder='Confirm Password' /><br />
            </section>

            <section className='buttonContainer'>
                <button className='yellow'>
                <Link to="/" className='link'>
                  <p>
                  Back
                </p> 
                </Link>
                </button>
                

                <button onClick={() => Register(userName, userSurname, role, contact)} className='oxford'>
                    Register
                </button>
            </section>
        </section>
    )
}