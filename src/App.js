import React from 'react';
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from './components/Home';
import PickUpRequests from './Admin/PickUpRequests';
import PickupForm from './components/pickup-request/pickup';
import PickupRequests from './components/pickup-request/pickup-history';
import { Rewards } from './components/reward-system/rewards';
import { RewardDetail } from './components/reward-system/reward-detail-page';
import { rewardsData } from './components/reward-system/rewards-data';
import { useState, createContext } from 'react';
import Account from './componenets/Account';
import SignIn from './componenets/ignIn';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './componenets/NavBar';
import Footer from './componenets/Footer';

//State management: Global context
export const AppContext = createContext();

const App = () => {
  const [rewards, setRewards] = useState(rewardsData);

  return (
    <div>
      
    <AuthContextProvider>
      <BrowserRouter>
      <Navbar></Navbar>
      <Link to={"/rewards"}> Rewards </Link>
      <AppContext.Provider value={
        {rewards, setRewards}
        }>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path = '/SignIn' element ={<SignIn/>}/>
        <Route path = '/Account' element = {<Account/>}/>
        <Route exact path="/admin" element={<PickUpRequests/>} />
        <Route exact path="/pickUp" element={<PickupForm/>} />
        <Route exact path="/pickup-history" element={<PickupRequests/>} />
        <Route exact path="/rewards" element={<Rewards/>} />
        <Route
          path="/rewards/:rewardId"
          element={<RewardDetail rewards={rewards} />}
        />
        {/* Add more routes here if needed */}
      </Routes>
      <Footer></Footer>
        </AppContext.Provider>
    </BrowserRouter>
      </AuthContextProvider>
      </div>
  );
};

export default App;