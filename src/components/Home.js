import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()

  const handleSignInClick = () => {
    navigate('/SignIn')
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <div>
      <h1>Sign In </h1>
      <button onClick={handleSignInClick}>Sign In</button>
    </div>
    </div>
  );
};

export default Home;