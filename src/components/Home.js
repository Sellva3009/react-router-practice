import React from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate('/details', 
      {
        state: {
          detail: 'Some detailed data from Home page'
        }
      }
    )
  }
  return (
    <div>
      <h2>Home</h2>
      <button onClick={goToDetail}>Go to Details</button>
    </div>
  );
}

export default Home