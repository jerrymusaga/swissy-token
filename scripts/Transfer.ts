import * as dotenv from "dotenv";
import * as hre from "hardhat";
dotenv.config();

import { encryptDataField } from "@swisstronik/swisstronik.js";
import { ethers } from "ethers";

const sendShieldedTransaction = async (
  signer: ethers.Signer,
  destination: string,
  recipient: string,
  tokenAmount: number
) => {
  // Encode the transfer function data
  const tokenContract = new ethers.Contract(
    destination,
    ["function transfer(address,uint256)"],
    signer
  );
  const transferData = tokenContract.interface.encodeFunctionData("transfer", [
    recipient,
    tokenAmount,
  ]);

  // Get the RPC link from the network configuration
  const rpclink = hre.network.config.url;

  // Encrypt transaction data
  const [encryptedData] = await encryptDataField(rpclink, transferData);
  console.log("gotten here");

  // Construct and sign transaction with encrypted data
  return await signer.sendTransaction({
    from: signer,
    to: destination,
    data: encryptedData,
  });
};

async function main() {
  // Address of the deployed contract
  const contractAddress = "0x6816F8294cb34A30531d85E8A777A7b126706D19";
  const toAddress = "0xe9794AEd70Bbf4B068f1EDBfefF8fBe820D20021";
  const tokenAmount = 5000; // The amount of tokens to transfer
  console.log("Transferring Swiss Token to ", toAddress);

  // Get the signer (your account)
  const privateKey = process.env.PRIVATE_KEY;

  // Create a wallet instance using the private key
  const wallet = new hre.ethers.Wallet(privateKey || "", hre.ethers.provider);

  const signer = wallet.connect(hre.ethers.provider);

  // Construct a contract instance
  const contractFactory = await hre.ethers.getContractFactory("Swissy");
  const contract = contractFactory.attach(contractAddress);

  // Send a shielded transaction to set a message in the contract

  const txHash = await sendShieldedTransaction(
    signer,
    contractAddress,
    toAddress,
    tokenAmount
  );

  // Log the transaction hash
  console.log("Transaction Hash:", txHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
