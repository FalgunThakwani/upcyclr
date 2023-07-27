import React, { useRef, useState } from "react";

import { Form, Button, Card } from 'react-bootstrap'
import { UserAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';


const SignoutGoogle = () => {
    const { loggingOut, user} = UserAuth();
    const navigate = useNavigate()

    // Use user.displayname to get the user name adn store it into data base

    const handleLogout = async () =>{
        try{
            await loggingOut()
            navigate('/')
        }catch (error){
         console.log(error)
        }
    }
    const username = user.uid;
    console.log(username)
   
return(
<>
<Card>
    <Card.Body>
        <h2 className="text-center mb-4">Welcome {user?.displayName || user?.email}</h2>
        
    </Card.Body>
</Card>
<Button className="w-100" onClick={handleLogout}>Log Out</Button>


</>
)
}

export default SignoutGoogle;