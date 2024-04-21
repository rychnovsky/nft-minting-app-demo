import type { NextPage } from 'next'
import Image from 'next/image'
import { useAccount, useBalance } from 'wagmi'
import { formatEther } from 'viem'

import Layout from 'src/components/Layout'
import { H1, P } from 'src/components/Typography'
import { publicImages } from 'src/static'
import Button from 'src/components/Button'
import { useMintNft } from 'src/hooks/useMintNft'
import { useNFTBalance } from 'src/hooks/useNFTBalance'

import * as S from './styled'

const HomePage: NextPage = () => {
  const { address } = useAccount()
  const { data: balance } = useBalance({ address })
  const { mintNft, status, hash, isPending } = useMintNft()
  const { data: nftBalance } = useNFTBalance(address!)

  return (
    <Layout>
      <S.Wrap>
        <H1>NFT Minting App</H1>
        <P>
          Your balance: {balance?.value ? formatEther(balance?.value) : ''}{' '}
          {balance?.symbol}
        </P>

        <Image
          src={publicImages.nft}
          alt='NFT to mint'
          width={640}
          height={366}
        />

        <Button onClick={mintNft} disabled={!address || isPending}>
          {isPending ? 'Loading...' : 'Mint NFT for FREE'}
        </Button>

        {hash && <P>Transaction hash: {hash}</P>}
        {status && <P>Status: {status}</P>}

        <P>You have {nftBalance?.toString() ?? '--'} NFTs in your wallet</P>
      </S.Wrap>
    </Layout>
  )
}

export default HomePage
