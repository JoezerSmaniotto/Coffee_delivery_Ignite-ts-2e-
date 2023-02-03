import styled from 'styled-components'

export const HeaderContainer = styled.footer`
  width: 100%;
  padding: 1rem;

  border-top: 1px solid ${(props) => props.theme['base-hover']};

  p {
    text-align: center;
    vertical-align: middle;
  }
`
