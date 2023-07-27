import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card } from 'react-bootstrap'
import { GoogleButton } from 'react-google-button';
import { UserAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseAuth";



const SigninGoogle = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()

    
    const emailRef = useRef()
    const passwordRef = useRef()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //sign up
   

    
  const handleNew = () => {
    navigate('/SignUp')
  };

    // normal sign in
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            navigate('/Account')
        }).catch((error) => {
            console.log(error)
        })
        
    }

    const handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        if (user != null )
          navigate('/Account')
        console.log(user)
    }, [user])

return(
<>
<Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                <Form onSubmit={signIn}>
                    <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref = {emailRef} onChange={(e)=> setEmail(e.target.value)} required />
                    </Form.Group>

                    <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref = {passwordRef} onChange={(e)=> setPassword(e.target.value)} required />
                    </Form.Group>

                    <Button className="w-100" type="submit">Sign In</Button>

                    
                </Form>
            </Card.Body>
        </Card>
<Card>
    <Card.Body>
        <h2 className="text-center mb-4">Welcome to Recycle Rewards</h2>
        <GoogleButton onClick={handleGoogleSignIn}/>
    </Card.Body>
    
    <Card>
      <h2 className="text-center mb-4" onClick={handleNew}>Don't have an account?</h2>
    </Card>
</Card>

</>
)
}

export default SigninGoogle;