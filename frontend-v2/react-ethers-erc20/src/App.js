import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  ACQUATOKEN_CONTRACT_ADDRESS,
  ACQUADASHBOARD_CONTRACT_ADDRESS,
  ACQUATOKEN_ABI,
  ACQUADASHBOARD_ABI,
} from './constants/constants';
import SensorTable from './SensorTable';

function App() {
  const [provider, setProvider] = useState(null);
  const [acquaToken, setAcquaToken] = useState(null);
  const [acquaDashboard, setAcquaDashboard] = useState(null);
  const [balance, setBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  // const [recipient, setRecipient] = useState('');
  // const [amount, setAmount] = useState('');

  useEffect(() => {
    async function initialize() {
      if (window.ethereum != null) {
        const ethersProvider = new ethers.BrowserProvider(window.ethereum);
        const signer = await ethersProvider.getSigner();

        window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x33',
              rpcUrls: ['https://erpc.apothem.network'],
              chainName: 'Apothem Testnet',
              nativeCurrency: {
                name: 'TXDC',
                symbol: 'TXDC',
                decimals: 18,
              },
              blockExplorerUrls: ['https://apothem.xinfinscan.com/'],
            },
          ],
        });

        const acquaTokenContract = new ethers.Contract(
          ACQUATOKEN_CONTRACT_ADDRESS,
          ACQUATOKEN_ABI,
          signer
        );
        const acquaDashboardContract = new ethers.Contract(
          ACQUADASHBOARD_CONTRACT_ADDRESS,
          ACQUADASHBOARD_ABI,
          signer
        );
        setProvider(ethersProvider);
        setAcquaToken(acquaTokenContract);
        setAcquaDashboard(acquaDashboardContract);
      } else {
        console.error('Please install MetaMask!');
      }
    }
    initialize();
  }, []);

  useEffect(() => {
    async function fetchBalance() {
      if (acquaToken) {
        console.log('fetching balance...');
        const ethersProvider = new ethers.BrowserProvider(window.ethereum);
        const currentAddress = (await ethersProvider.getSigner()).getAddress();
        const userBalance = await acquaToken.balanceOf(currentAddress);
        const test = await acquaDashboard.pullDataByCompany(currentAddress);
        console.log('Balance: ' + userBalance);
        setBalance(userBalance);
        const supply = await acquaToken.totalSupply();
        console.log('Supply: ' + supply);
        setTotalSupply(supply);
      }
    }
    fetchBalance();
  }, [acquaToken, provider]);

  // const handleTransfer = async () => {
  //   if (acquaToken) {
  //     const weiAmount = amount;
  //     await acquaToken.transfer(recipient, weiAmount);
  //   }
  // };

  return (
    <div className="App">
      <h1>AcquaCoin</h1>
      <div>
        <h2>Your Balance: {balance}</h2>
        <h2>Total Supply: {totalSupply}</h2>
      </div>
      <SensorTable contract={acquaDashboard} />
    </div>
  );
}

export default App;
