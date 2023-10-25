import { ABI, ACQUA_CONTRACT_ADDRESS } from './constants';

const ethers = require('ethers');

export const acquaTestContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    // process.env.APOTHEM_NETWORK_URL
    'https://erpc.apothem.networks'
  );
  console.log(provider.getSigner());
  return new ethers.Contract(ACQUA_CONTRACT_ADDRESS, ABI, provider);
  // return new provider.eth.Contract(ABI, ACQUA_CONTRACT_ADDRESS);
  // const wallet = new ethers.Wallet(
  //   process.env.APOTHEM_PRIVATE_KEY,
  //   testnetProvider
  // );
  // const walletSigner = wallet.connect(testnetProvider);
};
