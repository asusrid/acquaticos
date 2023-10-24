require('dotenv').config()
const ABI = require('./ABI.json')
const { ethers, JsonRpcProvider } = require('ethers');

const testnetProvider = new JsonRpcProvider(process.env.APOTHEM_NETWORK_URL);
const wallet = new ethers.Wallet(process.env.APOTHEM_PRIVATE_KEY, testnetProvider)
const walletSigner = wallet.connect(testnetProvider)

// we are using our address as a recipient, but you can use any address you want
const recipient_address = wallet.address
const your_xrc20_token_address = process.env.XRC20_TOKEN_ADDRESS
// const number_of_tokens = utils.parseUnits('10', 18)

async function main() {
  const contract = new ethers.Contract(
    your_xrc20_token_address,
      ABI,
    walletSigner
  )

  // console.log(await wallet.getAddress())

  // console.log(contract)
  // const receipt = await contract.eatSlice()
  const receipt = await contract.slices()
  // const receipt = await contract.bakeNewPizza()

  console.log(receipt)
}

main()
