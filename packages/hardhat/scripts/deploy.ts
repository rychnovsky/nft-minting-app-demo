// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { config as hardhatConfig, ethers } from 'hardhat'

async function main() {
  console.log('Deploying contracts...')

  // get chain id and config
  const [signer] = await ethers.getSigners()

  // prepare the factory
  const Contract_factory = await ethers.getContractFactory(
    'NFTContract',
    signer
  )

  // deploy the contract
  const contract = await Contract_factory.deploy()

  const address = await contract.getAddress()

  console.log(`Contract deployed to: ${address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
