import React from 'react'
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
  return (
    <div>
        <h2>Profile page</h2>
        <p>Here is the profile page content...</p>
        <button onClick={goToHome}>Go to Home</button>
    </div>
  )
}

export default Profile