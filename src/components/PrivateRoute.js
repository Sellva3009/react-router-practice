import React from 'react'
import Auth from '../Auth'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ element }) => {
  return (
    Auth.isAutheticated ? element : <Navigate to='/login' />
  )
}

export default PrivateRoute