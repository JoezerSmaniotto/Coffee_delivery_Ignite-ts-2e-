import styled from 'styled-components'
import { CartButton } from '../CardButton/index'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 4px;
      background-color: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme.purple};
      margin-right: 0.75rem;
    }

    span > span {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const LinkCardButton = styled(CartButton)`
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
