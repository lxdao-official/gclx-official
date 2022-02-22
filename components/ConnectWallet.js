import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Chip from "@mui/material/Chip";

import showMessage from "./showMessage";
import { set, get, subscribe } from "../store";
import { formatAddress, padWidth } from "../utils";
import RinkebyContractABI from "../abi/rinkeby.json";
import MainnetContractABI from "../abi/mainnet.json";

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID;
const NETWORK = CHAIN_ID === "1" ? "mainnet" : "rinkeby";
const contractABI = CHAIN_ID === "1" ? MainnetContractABI : RinkebyContractABI;
const contract = new ethers.Contract(
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
  // 大哥，注意 ABI 的大小写 👻
  contractABI.abi
);

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_PROJECT_ID,
    },
  },
};

let web3ModelInstance;
if (typeof window !== "undefined") {
  web3ModelInstance = new Web3Modal({
    network: process.env.NEXT_PUBLIC_CHAIN_ID === "1" ? "mainnet" : "rinkeby",
    cacheProvider: true,
    providerOptions,
  });
}

let provider;
let signer;
let instance;

export async function connectWallet() {
  if (!instance) {
    instance = await web3ModelInstance.connect();
    // https://docs.ethers.io/v5/api/providers/
    provider = new ethers.providers.Web3Provider(instance);
    // https://docs.ethers.io/v5/api/signer/
    signer = provider.getSigner();
  }

  return { provider, signer, web3Instance: instance };
}

async function disconnectWallet() {
  provider = undefined;
  signer = undefined;
  instance = undefined;
  await web3ModelInstance.clearCachedProvider();
}

const NoCollectWallet = styled.div`
  position: absolute;
  font-size: 12px;
  margin-top: 1px;
  color: #666;
  text-align: right;
  @media only screen and (max-width: ${padWidth}) {
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }
`;

function ConnectWallet(props) {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const addressInStore = get("address") || null;
    if (addressInStore) {
      setAddress(addressInStore);
    }
    subscribe("address", () => {
      const addressInStore = get("address") || null;
      setAddress(addressInStore);
    });
  }, []);

  if (address && !loading) {
    return (
      <Chip
        label={address}
        color="primary"
        onDelete={async () => {
          await disconnectWallet();
          setAddress(null);
          set("address", "");
          set("fullAddress", "");
        }}
      />
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <Chip
        style={{ fontSize: 16 }}
        label={loading ? "连接中..." : "连接钱包"}
        color="primary"
        onClick={async () => {
          setLoading(true);
          try {
            const { provider, signer, web3Instance } = await connectWallet();
            const address = await signer.getAddress();
            const ens = await provider.lookupAddress(address);
            setAddress(ens || formatAddress(address));
            set("address", ens || formatAddress(address));
            set("fullAddress", address);
            web3Instance.on("accountsChanged", async (accounts) => {
              if (accounts.length === 0) {
                await disconnectWallet();
                set("address", "");
                set("fullAddress", "");
                setAddress(null);
              } else {
                const address = accounts[0];
                const ens = await provider.lookupAddress(address);
                setAddress(ens || formatAddress(address));
                set("address", ens || formatAddress(address));
                set("fullAddress", address);
              }
            });
          } catch (err) {
            await disconnectWallet();
            set("address", "");
            set("fullAddress", "");
            setAddress(null);
            showMessage({
              type: "error",
              title: "链接钱包失败，请重试",
              body: err.message,
            });
          }
          setLoading(false);
        }}
      />
      {props.showCollect && (
        <NoCollectWallet>
          我们不用
          <br />
          <span style={{ textDecoration: "line-through" }}>Collect Wallet</span>
        </NoCollectWallet>
      )}
    </div>
  );
}

export { contract };

export default ConnectWallet;
