import React, { useState, useEffect } from 'react';

import erc20Abi from './erc20abi';
import { ethers } from "ethers";


function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const contractAddress = '0x9AeFc71ca54a7752CC3A00362b7F0CAa8E69b959';  // Replace with your contract address

  useEffect(() => {
    async function initialize() {
      if (window.ethereum != null) {
        const ethersProvider = new ethers.BrowserProvider(window.ethereum)
        const signer = await ethersProvider.getSigner();

        window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: "0x33",
            rpcUrls: ["https://erpc.apothem.network"],
            chainName: "Apothem Testnet",
            nativeCurrency: {
              name: "TXDC",
              symbol: "TXDC",
              decimals: 18
            },
            blockExplorerUrls: ["https://apothem.xinfinscan.com/"]
          }]
        });

        const erc20Contract = new ethers.Contract(contractAddress, erc20Abi, signer);
        setProvider(ethersProvider);
        setContract(erc20Contract);
      } else {
        console.error("Please install MetaMask!");
      }
    }
    initialize();
  }, []);

  useEffect(() => {
    async function fetchBalance() {
      if (contract) {
        console.log('fetching balance...')
        const ethersProvider = new ethers.BrowserProvider(window.ethereum)
        const currentAddress = (await ethersProvider.getSigner()).getAddress();
        const userBalance = await contract.balanceOf(currentAddress);
        console.log("Balance: " + userBalance);
        setBalance(userBalance);
        const supply = await contract.totalSupply();
        console.log("Supply: " + supply);
        setTotalSupply(supply);
      }
    }
    fetchBalance();
  }, [contract, provider]);

  const handleTransfer = async () => {
    if (contract) {
      const weiAmount = amount;
      await contract.transfer(recipient, weiAmount);
    }
  };

  return (
      <div className="App">
        <h1>AcquaCoin</h1>
        <div>
          <h2>Your Balance: {balance}</h2>
          <h2>Total Supply: {totalSupply}</h2>
        </div>
        {/*<div>*/}
        {/*  <input*/}
        {/*      value={recipient}*/}
        {/*      onChange={e => setRecipient(e.target.value)}*/}
        {/*      placeholder="Recipient Address"*/}
        {/*  />*/}
        {/*  <input*/}
        {/*      value={amount}*/}
        {/*      onChange={e => setAmount(e.target.value)}*/}
        {/*      placeholder="Amount"*/}
        {/*  />*/}
        {/*  <button onClick={handleTransfer}>Transfer</button>*/}
        {/*</div>*/}
      </div>
  );
}

export default App;
