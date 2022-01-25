import React from 'react';
import { Routes, Route } from "react-router-dom"
import DashBoard from './components/pages/DashBoard';
import EditClient from './components/pages/EditClient';
import GetOperations from './components/pages/GetOperations';
import GetPackages from './components/pages/GetPackages';
import Home from './components/pages/Home';
import Operations from './components/pages/Operations';
import Login from './components/pages/Login';
import SignIn from './components/pages/SignIn';

const mainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="editclient" element={<EditClient />} />
        <Route path="/in/" element={<Operations />}>
          <Route path="getoperations/" element={<GetOperations />}>
            <Route path="getpackages" element={<GetPackages />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
};

export default mainRoutes;
