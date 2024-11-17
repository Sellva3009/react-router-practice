import React from 'react'
import { Navigate } from 'react-router-dom'

const OldPage = () => {
  return (
    <div>
        <h2>Old page</h2>
        <Navigate to='/new-page'/>
    </div>
  )
}

export default OldPage