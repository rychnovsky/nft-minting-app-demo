import { PropsWithChildren } from 'react'

import * as S from './styled'

type Props = PropsWithChildren<{}>

const Container: React.FC<Props> = ({ children, ...rest }) => {
  return <S.Container {...rest}>{children} </S.Container>
}

export default Container
