import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';
import { Routes, Route, Link } from "react-router-dom";
import SignIn from './Pages/Login';
import RegisterPage from './Pages/Register';
import DashboardPage from './Pages/Dashboard';
import ProgrammePage from './Pages/Programme';
import RepositoriesPage from './Pages/Repositories';
import CurriculumPage from './Pages/Curriculum';
import AddProgrammePage from './Pages/AddProgramme';
import AddCurriculumPage from './Pages/AddCurriculum';


function App() {
  const [user, setUser] = useState('');
  //create an authication listener function
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.uid);
      }
    })
  }
  //listens for changes happening within web app
  useEffect(() => {
    authListener();
  }, [])
  return (
    <div className="App">

      {user ? (
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/programme" element={<ProgrammePage />} />
          <Route path="/repositories" element={<RepositoriesPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/addprogramme" element={<AddProgrammePage />} />
          <Route path="/addcurriculum" element={<AddCurriculumPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      )}



    </div>
  );
}

export default App;
