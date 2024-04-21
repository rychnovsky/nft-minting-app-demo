import React from 'react'

import * as S from './styled'

type Props = React.PropsWithChildren<{
  disabled?: boolean
  onClick?: () => void
}>

const Button: React.FC<Props> = ({ disabled, onClick, children }) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
