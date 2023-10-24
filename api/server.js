const express = require('express');
const bodyParser = require('body-parser');
// const ethers = require('ethers')
const { ethers, JsonRpcProvider } = require('ethers');
const ABI = require('./ABI.json')
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
const typeorm = require("typeorm");
const Data = require('./entities/DataSchema');

typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "acquachain",
    synchronize: true,
    logging: false,
    entities: [
        require("./entities/DataSchema"),
    ]
}).then(function (connection) {

    app.post('/data', async (req, res) => {
        const { key, value } = req.body;

        if (!key || !value) {
            return res.status(400).json({ error: 'Please provide a key and a value.' });
        }

        try {
            // const nonce = await provider.getTransactionCount(wallet.address, 'latest');
            // const gasPrice = await provider.getGasPrice();

            // const tx = {
            //     to: contractAddress,
            //     data: contract.encodeFunctionData('eatSlice', [key, value]),
            //     gasLimit: 21000,  // This is the standard gas limit for a simple transfer. For more complex transactions, you may need to adjust this.
            //     gasPrice: gasPrice,
            //     nonce: nonce,
            //     chainId: 1  // 1 for Ethereum Mainnet, change if you are on a different network
            // };
            //
            // const signedTx = await wallet.signTransaction(tx);
            // const receipt = await provider.sendTransaction(signedTx);

            // res.json({ success: true, transactionHash: receipt.hash });

            const testnetProvider = new JsonRpcProvider(process.env.APOTHEM_NETWORK_URL);
            const wallet = new ethers.Wallet(process.env.APOTHEM_PRIVATE_KEY, testnetProvider)
            const walletSigner = wallet.connect(testnetProvider)

            const contract = new ethers.Contract(
                process.env.XRC20_TOKEN_ADDRESS,
                ABI,
                walletSigner
            )

            // console.log(await wallet.getAddress())

            // console.log(contract)
            // const receipt = await contract.eatSlice()
            const receipt = await contract.eatSlice()
            // const receipt = await contract.bakeNewPizza()

            console.log(receipt)

            res.json({ success: true });

        } catch (error) {
            res.status(500).json({ error: 'Failed to send transaction', details: error.message });
        }
    });

    app.get('/data', async (req, res) => {
        try {
            const dataRepository = connection.getRepository(Data);
            const company = await dataRepository.findOneBy({'companyName': 'ACME'});
            res.json(company);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data from database', details: error.message });
        }
    });
}).catch(error => console.error('TypeORM connection error: ', error));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});