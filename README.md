# Swissy ERC20 Token on SwissTronik EVM Testnet
This is a SwissTronik challenge from LearnWeb3 on Deploying an ERC20 token, Minting tokens, and transferring at least one of your ERC20 tokens

# Contract Address: 0x6816F8294cb34A30531d85E8A777A7b126706D19

# Link to Contract Address: [Swissy Token Address](https://explorer-evm.testnet.swisstronik.com/address/0x6816F8294cb34A30531d85E8A777A7b126706D19)

# Txn Hash to Contract Deployment & Minting of Token: [Deploy & Mint Token](https://explorer-evm.testnet.swisstronik.com/tx/0x8ff86ba4f8d7622f1e6a95bdb2307551d786241659e021a4f18af4b7de83eb8f)

# Txn Hash to Transferring of Token to Requested Address: [Transfer](https://explorer-evm.testnet.swisstronik.com/tx/0xcf7c36477a02f2fb7a15f9170bbc50922e14f311293d6831d06f4d36af97dfdd)

## Run project locally

```
git clone git@github.com:jerrymusaga/swissy-token.git
cd swissy-token
yarn
yarn hardhat compile
yarn hardhat run scripts/deploy.ts --network swisstronik
yarn hardhat run scripts/Transfer.ts --network swisstronik

```
