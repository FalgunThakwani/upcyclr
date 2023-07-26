import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Card } from 'react-bootstrap'

import { GoogleButton } from 'react-google-button';
import { UserAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';



const SigninGoogle = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate()

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
        <h2 className="text-center mb-4">Welcome to Recycle Rewards</h2>
        <GoogleButton onClick={handleGoogleSignIn}/>
    </Card.Body>
</Card>

</>
)
}

export default SigninGoogle;