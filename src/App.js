import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './componenets/Home';
import PickupForm from './componenets/pickup-request/pickup';
import PickupRequests from './componenets/pickup-request/pickup-history';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/pickUp" element={<PickupForm/>} />
        <Route exact path="/pickup-history" element={<PickupRequests/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;