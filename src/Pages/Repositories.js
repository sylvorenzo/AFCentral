import React from "react";
import logo from '../assets/logo.svg';
export default function RepositoriesPage() {

    return (
        <section className="RepositoryContainer">
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
            <section className="repositories">
                <section className="repoContainer">
                    <h1>AFCentral</h1>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="oxford">
                        View Github
                    </button>
                </section>
                <section className="repoContainer">
                    <h1>AFCentral</h1>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="oxford">
                        View Github
                    </button>
                </section>
                <section className="repoContainer">
                    <h1>AFCentral</h1>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button className="oxford">
                        View Github
                    </button>
                </section>
                
            </section>
            
        </section>
    )
}