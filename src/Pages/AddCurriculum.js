import React from "react";
import logo from '../assets/logo.svg';
export default function AddCurriculumPage() {

    return (
        <section className="dashBoardContainer">
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

            <section className="AddContainer">
                    <section className="imageContainer">
                        <h1>+</h1>
                    </section>
                    <input type="text" className="input" placeholder="Curriculum Title"/><br/>
                    <input type="text" className="input" placeholder="Curriculum Description"/><br/>
                    <button className="oxford">
                        Add
                    </button>
            </section>
        </section>
    )
}