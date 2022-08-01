import react,{useState} from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../fire';
export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function HandleLogin() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            }).then(alert('success'));
    }
    return (
        <section className='loginContainer'>
            <section className='logoContainer'>
                <img className='logo' src={logo} alt="this is a logo used for the app factory" />
            </section>
            <section className='inputContainer'>
                <input type="text" className='input' value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' /><br />
                <input type="password" className='input' value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' /><br />
            </section>
            <a href='#'>
                <p>Forgot Password? Click here</p>
            </a>
            <section className='buttonContainer'>
                <button className='yellow'>
                    <Link to="/register" className='link'>
                        <p>
                            Register
                        </p>
                    </Link>

                </button>
                <button onClick={()=>HandleLogin()} className='oxford'>
                    Login
                </button>
            </section>
        </section>
    )
}