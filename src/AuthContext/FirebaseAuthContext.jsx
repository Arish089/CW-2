import React, { useState,useEffect } from 'react'
import { auth } from './FirebaseAuth';
import { onAuthStateChanged } from 'firebase/auth';


export const AuthContext = React.createContext();

const AuthContextProvider = ({children}) => {
const [CurrentUser,setCurrentUser] = useState(null); 

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(user)=>{
  setCurrentUser(user)
})

return unsubscribe;

},[auth])

const contextValue = {CurrentUser,setCurrentUser}
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
      </AuthContext.Provider>
  )
}

export default AuthContextProvider