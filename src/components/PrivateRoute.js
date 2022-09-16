
import React, { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
  import { UserContext } from '../Context/UserContext';
export default function PrivateRoute({children}) {



  const { user } = useContext(UserContext);
 
  
  return (
    user ?
    <>{children}</>
    :
    <Navigate to={"/"} />
  )
 

}