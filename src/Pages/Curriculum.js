import React from "react";
import logo from '../assets/logo.svg';
import csharp from '../assets/csharp.jpg';
export default function CurriculumPage(){

    return(
        <section className="CurriculumContainer">
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
                            <p>Add Programme</p>
                        </a>
                        <hr />
                        <a>
                            <p>Add Curriculum</p>
                        </a>
                        <hr />
                        <button className="yellow">
                            Log Out
                        </button>
                    </section>

                </section>
            <section className="programmes">
                <section className="programContainer">
                    <img className="program-thumb" src={csharp} alt="samsung logo"/>
                    <h1>C-Sharp fundamentals</h1>
                  
                </section>
                
            </section>
        </section>
    )
}