import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import DataTable from './components/dataTable';
import JoinWallet from "./components/joinWallet";
import OurMission from "./components/OurMission";
import { useState } from "react";
import './App.css';

const App = () => {
  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount(){
    console.log("Requesting for account...")

    if(window.ethereum) {
      console.log("detected")
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts);
      } catch (error){
        console.log('Error connecting ....')
      }
    }
    else{
      console.log("Meta mas not detected")
    }
  }
  if(walletAddress != ""){
    return (
      <div>
          <nav>
            <ul>
              <li>
                <p >Connect Wallet</p>
              </li>
            </ul>
          </nav>
          <h3>Wallet Address: {walletAddress}</h3>
          <button onClick={requestAccount}>Connect Wallet</button>
          <DataTable/>
      </div>
      
    );
  }
  else{
    return (
      <div>
          <nav>
            <ul>
              <li>
                <p >Connect Wallet</p>
              </li>
            </ul>
          </nav>
          <button onClick={requestAccount}>Connect Wallet</button>
        </div>
    );

  }
};

export default App;
