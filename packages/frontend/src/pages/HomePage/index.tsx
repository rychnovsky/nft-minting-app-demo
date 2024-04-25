import type { NextPage } from 'next'

import Layout from 'src/components/Layout'
import { H1 } from 'src/components/Typography'

import * as S from './styled'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <S.Wrap>
        <H1>NFT Minting App</H1>
      </S.Wrap>
    </Layout>
  )
}

export default HomePage
