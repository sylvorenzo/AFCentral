import React from "react";
import logo from '../assets/logo.svg';
import {auth} from '../fire';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function DashboardPage() {

    const navigate = useNavigate();
    function HandleSignOut(){
        signOut(auth).then(()=>{
            navigate('/');
        }).catch(err=> console.log(err.message));
    }

    return (
        <section className="dashboardContainer">
            <section className="sideBar">
                <section className='logoContainer'>
                    <img className='logo' src={logo} alt="this is a logo used for the app factory" />
                    <hr />
                    <a>
                        <p>Interns</p>
                    </a>
                    <hr />
                    <a>
                        <p>Programmes</p>
                    </a>
                    <hr />
                    <a>
                        <p>Repositories</p>
                    </a>
                    <hr />
                    <a>
                        <p>Add Curriculum</p>
                    </a>
                    <hr />
                    <button onClick={()=>HandleSignOut()} className="yellow">
                        Log Out
                    </button>
                </section>

            </section>
            <section className="dash-information">
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Contact</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Renzo</td>
                        <td>Jacques</td>
                        <td>0812464354</td>
                        <td>Intern</td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <button className='oxford'>
                                                View
                                            </button>
                                        </td>
                                        <td>
                                            <button className='oxford'>
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button className='oxford'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                    

                </table>
            </section>
        </section>
    )
}