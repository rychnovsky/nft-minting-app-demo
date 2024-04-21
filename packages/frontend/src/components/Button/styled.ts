import styled, { css } from 'styled-components'

export const Button = styled.button<{ disabled?: boolean }>`
  background: ${({ theme }) => theme.colors.alpha};
  color: ${({ theme }) => theme.colors.primary};
  padding: 16px 32px;
  border-radius: 4px;
  font-weight: 600;

  ${(props) =>
    props.disabled
      ? css`
          opacity: 0.5;
          cursor: not-allowed;
        `
      : css`
          &:hover {
            opacity: 0.8;
            cursor: pointer;
          }
        `}
`
