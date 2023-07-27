import React, { useEffect, useRef, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap'
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebaseAuth";

const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const displayNameRef = useRef()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

  const navigate = useNavigate()
   
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword( auth,email, password)
    .then((userCredential) => {
        console.log(userCredential)
        navigate('/SignIn')
        
        return ("Sign Up Success!!")
       
    }).catch((error) => {
        console.log(error)
    })
    
}

  return (
    <div>
    <div>
    <Card>
    <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={signUp}>
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
    </div>
    
    </div>
    
  );
};

export default SignUp;
