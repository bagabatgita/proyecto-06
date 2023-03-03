import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'



const ProtectedUserInfo = () => {

  const userInfo = useSelector (store => store.userInfo)
  if(userInfo){
    return (
       
            <Outlet/>    
                 
            
      
    ) 
} else {
    return <Navigate to = "/login" />
}


}

export default ProtectedUserInfo