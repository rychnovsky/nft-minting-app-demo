# 🏗 NFT Minting App - Monorepo

> Powering all projects at Artiffine corp 🚀

Originally basad on [Scaffold ETH](https://github.com/scaffold-eth/scaffold-eth)

# 📚 Packages of the monorepo

- `@nftapp/frontend` - NFT minting process, Next.js app

- `@nftapp/hardhat` - All smart contracts + generated typescript types using @typechain/hardhat from @artiffine/hardhat project

# 🏄‍♂️ Quick Start

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> All the scripts can be run from the monorepo root or directly in folders of the particular project

```bash
# Install dependencies
yarn install

# Start up the Hardhat Network
yarn chain
```

In a different terminal in the same directory, run:

```bash
# Deploy new instances of smart contract to local network
# Save the contract address for later use in the frontend project
yarn deploy:localhost
```

This will deploy the contract to Hardhat Network. After the contract is deployed run:

```bash
# Start up the Next.js app
yarn dev
```

This will start up the frontend Next.js development server and your site will be available at http://localhost:3001/

To interact with the local contract, be sure to switch your MetaMask Network to `Localhost 8545`

📱 Open http://localhost:3001 to see the app
