import type { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalStyle from 'src/styles/globalStyles'
import { theme } from 'src/styles/styledTheme'
import SeoHeadTags from 'src/components/Head/SeoHeadTags'
import Web3Provider from 'src/context/Web3Provider'

import '@rainbow-me/rainbowkit/styles.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <SeoHeadTags
        pageTitle='Next.js starter'
        description='Starting Next.js template with Typescript, styled-components and code-quality toooling'
      />
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
      <GlobalStyle />
    </StyledThemeProvider>
  )
}

export default MyApp
