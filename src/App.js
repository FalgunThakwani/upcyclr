import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './componenets/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        {/* Add more routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;