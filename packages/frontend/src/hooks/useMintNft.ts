import { useAccount, useWriteContract } from 'wagmi'

import { NFTContract__factory } from '@nftapp/hardhat/typechain-types/factories/contracts/NFTContract__factory'
import { CONTRACT_ADDRESS } from 'src/constants/contract'

const useMintNft = () => {
  const { address } = useAccount()
  const {
    data: hash,
    writeContract,
    status,
    isPending,
    error,
  } = useWriteContract()

  const mintNft = async () => {
    if (!address) {
      throw new Error('No address found')
    }

    await writeContract({
      address: CONTRACT_ADDRESS,
      abi: NFTContract__factory.abi,
      functionName: 'mint',
      args: [address],
    })
  }

  console.error(error)

  return {
    mintNft,
    hash,
    status,
    isPending,
  }
}

export { useMintNft }
