import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Auth from '../Auth';

const Dashboard = () => {
  const navigate = useNavigate();

  const signOut = () => {
    Auth.signout();
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="stats">Stats</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Dashboard