import styled from 'styled-components'

export const ContainerCounter = styled.div`
  width: 72px;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const ButtonCounter = styled.button`
  color: ${(props) => props.theme.purple};
  align-self: center;
  border: none;
  background: transparent;
`

export const ValueCounter = styled.span`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme['base-title']};
  width: 20px;
  height: 21px;
  margin-top: 0.53125rem 0.25rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  text-align: center;
`
