import { signOut } from "firebase/auth";
import { auth } from "../AuthContext/FirebaseAuth";
import { Button } from "@chakra-ui/react";
import LogOutAlert from "../AuthContext/AuthComponents/LogoutAlert";

const Logout = ()=>{
    
   async function logout (){

    try {
        await signOut(auth);
        console.log('User signed out');
    } catch (error) {
        console.log('Sign out error',error);
    }
   }
    
    return <LogOutAlert logout = {logout}/>
}

export default Logout