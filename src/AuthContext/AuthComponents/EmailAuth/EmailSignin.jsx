import {  signInWithEmailAndPassword,setPersistence,browserLocalPersistence, browserSessionPersistence } from "firebase/auth";
import {auth} from "../../FirebaseAuth"
import { useState } from "react";
import { FormControl,FormLabel,Input,Box,Button, Text } from "@chakra-ui/react";



const EmailSignin = ()=>{
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [isEmailFocused,setisEmailFocused] = useState(false)
    const [isPasswordFocused,setisPasswordFocused] = useState(false)
    const [err, setErr] = useState(false)


    async function SignInEmail(e){
        e.preventDefault();
        await setPersistence(auth, browserSessionPersistence);
        try {
            const userCredent = await signInWithEmailAndPassword(auth,email,password)
            const user = userCredent.user
            setErr(false)
            console.log(user,"Signed in");
        } catch (error) {
            console.log("Sign-In error",error);
            setErr(true)
        }
        }

        return(
            <>
            <FormControl >
                <Box mb={10} mt={5}>
                <FormLabel
          htmlFor="email"
          position="absolute"
          transform={isEmailFocused || email ? "translateY(-20px) scale(0.95)" : "none"}
          color={isEmailFocused || email ? "gray.600" : "gray.400"}
          transition="0.2s"
          left="0"
          zIndex="1"
        >
         Enter Your Email Id
        </FormLabel>
                <Input
                variant='flushed'
                id="email"
                type="email" value={email}
                onFocus={() => setisEmailFocused(true)}
                onBlur={() => setisEmailFocused(false)}
                onChange={(e)=> setEmail(e.target.value)}
                />
                </Box>

                <Box mt={15} >

                <FormLabel
          htmlFor="password"
          position="absolute"
          transform={isPasswordFocused || password ? "translateY(-20px) scale(0.95)" : "none"}
          color={isPasswordFocused || password ? "gray.600" : "gray.400"}
          transition="0.2s"
          left="0"
          zIndex="1"
        >
         Enter Your Password
        </FormLabel>
                <Input
                variant='flushed' id="password" type="password" value={password}
                onFocus={() => setisPasswordFocused(true)}
                onBlur={() => setisPasswordFocused(false)}
                 onChange={(e)=>setPassword(e.target.value)}/>
                 {err && <Text color='red.400'>Invalid credentials</Text>}
                 <Input mt={10} type="submit" value="SignIn" bg='red.500' color='white' onClick={SignInEmail}/>
                 </Box>
            </FormControl>

            
        </>
        )
}

export default EmailSignin