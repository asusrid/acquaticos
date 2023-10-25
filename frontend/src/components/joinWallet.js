import React, { Component } from 'react'
import Web3Modal from 'web3modal';
import { getXdcModal } from 'xdcpay-web3modal'
import WalletConnect from "@walletconnect/web3-provider";

const JoinWallet = () => {

    //const web3Modal = new Web3Modal({
      //  cacheProvider: true,
    //    disableInjectedProvider: false,
    //    providerOptions: {
    //      walletconnect: {
    //        package: WalletConnect, // required
    //        options: {
    //          infuraId: "223f20f418c34a758240a7f416435110", // Required
    //          network: "mainnet",
    //          qrcodeModalOptions: {
    //            mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"]
    //          }
    //        }
    //      },
    //      'custom-xdc': getXdcModal, // Add One line for  xdc pay web3modal provider
    //    }
    //  });
  return (
    <div>
        <h1> Join Wallet</h1>

    </div>
    
  );
};

export default JoinWallet;
