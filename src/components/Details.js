import React from 'react'
import { useLocation } from "react-router-dom";

const Details = () => {
    const location = useLocation();
    const { state } = location;

  return (
    <div>
        <h2>Details</h2>
        <p>{state ? state.detail : 'No detail provided'}</p>
    </div>
  )
}

export default Details