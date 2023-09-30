import * as dotenv from "dotenv";
import * as hre from "hardhat";
dotenv.config();

const initialSupply = 1000;

async function main() {
  // here we deploy the contract
  const SwissyTokenContract = await hre.ethers.deployContract("Swissy", [
    initialSupply,
  ]);

  await SwissyTokenContract.waitForDeployment();
  console.log(`Swissy Contract Address is ${SwissyTokenContract.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
