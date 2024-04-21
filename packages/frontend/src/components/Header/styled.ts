import styled, { css } from 'styled-components'
import Container from '../Container'

export const Header = styled.header`
  padding: 16px;
  background: #f5f5f5;
`

export const Ul = styled.ul`
  display: flex;
  gap: 24px;
`

export const Li = styled.li<{ $active: boolean }>`
  font-weight: 600;

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.alpha};
    `}
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
