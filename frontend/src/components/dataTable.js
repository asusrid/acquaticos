import { JsonRpcProvider, ethers} from "ethers";
import React, { useState, useEffect } from 'react';
const { utils } = ethers;


const DataTable = (walletAddress) => {
  const contractAddress = "0xE8a811dDf71a1A80e62E3a64f41a510882eB5B4A"
  const [totalSupply, setTotalSupply] = useState(0);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [balance, setBalance] = useState(0);
  const ABI = require('./ABI.json')
  const testnetProvider = new JsonRpcProvider(process.env.APOTHEM_NETWORK_URL);


  useEffect(()=>{
    setProvider(testnetProvider);
    const erc20Contract = new ethers.Contract(contractAddress, ABI, walletAddress);
    setContract(erc20Contract);

  })
  useEffect(() => {
    async function fetchBalance() {
      if (contract) {
        const userBalance = walletAddress;
        setBalance(utils.formatEther(userBalance));
        const supply = await contract.totalSupply();
        setTotalSupply(utils.formatEther(supply));
      }
    }
    fetchBalance();
  }, [contract, provider]);
  return (
    <div>
        <h1>Company Name</h1>
      <div className="table-container">
        <table className="table table-striped">
|          <thead class="thead-dark">
            <tr>
              <th scope="col">Side</th>
              <th scope="col">Volume</th>
              <th scope="col">Bench Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
            <tr>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
            <tr>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;