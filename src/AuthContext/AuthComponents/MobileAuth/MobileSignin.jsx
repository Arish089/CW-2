import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react'
import { auth } from '../../FirebaseAuth';
import { FormControl, FormLabel, Input, Button, Box,Text } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';



const MobileSignin = () => {
  const [mobNumber, setMobNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [isMobNumberFocused, setIsMobNumberFocused] = useState(false);
  const [isVerificationCodeFocused, setIsVerificationCodeFocused] = useState(false);
  const [show,setShow] = useState(false)
  const [validno,setValidno] = useState('')

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      }
    });
  };

  const handleSignIn = async () => {
    const regex = /[6-9]\d{9}/
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    if(regex.test(mobNumber)){
    setShow(true)
    try {
    const confirmationResult =  await signInWithPhoneNumber(auth,`+91${mobNumber}`,appVerifier);
    setConfirmation(confirmationResult)
    } catch (error) {
      console.log("Sign up error", error);
    }

  }else{
    setValidno('Enter valid mobile no')
  }
  }

  const handleVerifyCode = async () => {
    
    try {
     const result = await confirmation.confirm(verificationCode);
     const user = result.user;
     console.log(user);
      alert(`Signed in successfully`);
      setShow(false)
      return <Navigate to='/'/>
    } catch (error) {
      console.log("Verification error", error);
      alert(`Sign in error`);
      setShow(false)
    }
    
  }

  return (
    <FormControl>
      <Box mb={4} mt={5}>
        <FormLabel
          htmlFor="mobNumber"
          position="absolute"
          transform={isMobNumberFocused || mobNumber ? "translateY(-20px) scale(0.95)" : "none"}
          color={isMobNumberFocused || mobNumber ? "gray.600" : "gray.400"}
          transition="0.2s"
          left="0"
          zIndex="1"
        >
         Enter Your Mobile Number
        </FormLabel>
        <Input
        variant='flushed'
          id="mobNumber"
          type="text"
          value={mobNumber}
          onFocus={() => setIsMobNumberFocused(true)}
          onBlur={() => setIsMobNumberFocused(false)}
          onChange={(e) => setMobNumber(e.target.value)}
          maxLength={10}
        />
      </Box>
      {validno.length > 0 ?
      <Box id='regex-check'>
        <Text color='red.700' my={6}>{validno}</Text>
        </Box>
      : null
      }
      <Box id='recaptcha'></Box>
      <Button onClick={handleSignIn} mt={2} mb={10}>Continue</Button>
      
      {show ? 
      <>
      <Box mb={4} mt={25}>
        <FormLabel
          htmlFor="verificationCode"
          position="absolute"
          transform={isVerificationCodeFocused || verificationCode ? "translateY(-20px) scale(0.95)" : "none"}
          color={isVerificationCodeFocused || verificationCode ? "gray.600" : "gray.400"}
          transition="0.2s"
          left="0"
          zIndex="1"
        >
          OTP
        </FormLabel>
        <Input
        variant='flushed'
          id="verificationCode"
          type="number"
          value={verificationCode}
          onFocus={() => setIsVerificationCodeFocused(true)}
          onBlur={() => setIsVerificationCodeFocused(false)}
          onChange={(e) => setVerificationCode(e.target.value)}
          maxLength={6}
        />
      </Box>
      <Button mt={2} onClick={handleVerifyCode}>Verify OTP</Button>
      </>
: null}
      
      
    </FormControl>
  );
}

export default MobileSignin;
