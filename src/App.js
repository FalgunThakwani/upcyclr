import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './componenets/Home';
import PickUpRequests from './Admin/PickUpRequests';
import PickupForm from './componenets/pickup-request/pickup';
import PickupRequests from './componenets/pickup-request/pickup-history';
import Account from './componenets/Account';
import SignIn from './componenets/ignIn';
import { AuthContextProvider } from './context/AuthContext';


const App = () => {
  return (
    <div>

    <AuthContextProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path = '/SignIn' element ={<SignIn/>}/>
        <Route path = '/Account' element = {<Account/>}/>
        <Route exact path="/admin" element={<PickUpRequests/>} />
        <Route exact path="/pickUp" element={<PickupForm/>} />
        <Route exact path="/pickup-history" element={<PickupRequests/>} />
        {/* Add more routes here if needed */}
      </Routes>
      </BrowserRouter>
      </AuthContextProvider>
      </div>
  );
};

export default App;