import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { id } = useParams();
  return (
    <div>
        <h2>User ID: {id}</h2>
        <p>Displaying details for user with ID: {id}</p>
    </div>
  )
}

export default User