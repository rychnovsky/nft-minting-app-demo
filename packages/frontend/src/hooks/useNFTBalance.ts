import { useReadContract } from 'wagmi'

import { NFTContract__factory } from '@nftapp/hardhat/typechain-types/factories/contracts/NFTContract__factory'

import { CONTRACT_ADDRESS } from 'src/constants/contract'

const useNFTBalance = (address: `0x${string}`) => {
  const data = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: NFTContract__factory.abi,
    functionName: 'balanceOf',
    args: [address],
  })

  return data
}

export { useNFTBalance }
