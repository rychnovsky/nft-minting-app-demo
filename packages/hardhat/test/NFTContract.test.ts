import { expect } from 'chai'
import hre from 'hardhat'

import { NFTContract } from '../typechain-types'

describe('NFTContract', function () {
  let contract: NFTContract

  beforeEach(async function () {
    contract = await hre.ethers.deployContract(
      'NFTContract',
      [], // constructor arguments
      {} // overrides
    )
  })

  describe('Deployment', function () {
    it('Should deploy the contract', async function () {
      expect(await contract.getAddress()).to.not.be.undefined
    })
    it('Should have no initial supply', async function () {
      expect(await contract.totalSupply()).to.eq(0)
    })
  })

  describe('safeMint()', function () {
    it('Should mint the right token to the right owner', async function () {
      // arrange
      const [owner] = await hre.ethers.getSigners()
      const totalSupply = await contract.totalSupply()
      expect(totalSupply).to.equal(0)

      // act
      const action = await contract.mint(owner.address)
      expect(action).not.to.be.reverted

      // assert
      const newTotalSupply = await contract.totalSupply()
      expect(newTotalSupply).to.equal(1)
      console.log('token URI', await contract.tokenURI(1))
    })
  })
})
