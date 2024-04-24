// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'

async function main() {
  console.log('Connection to contracts...')

  // get chain id and config
  const [signer] = await ethers.getSigners()

  // connect to the contract
  const contract = await ethers.getContractAt('NFTContract', '0x', signer)

  const address = await contract.getAddress()

  console.log(`Connected to contract: ${address}`)

  // implement the read functions
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
