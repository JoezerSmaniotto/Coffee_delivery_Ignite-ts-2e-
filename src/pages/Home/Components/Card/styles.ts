import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  img {
    display: block;
    margin: 0 auto;
    margin-top: -1.25rem;
  }
  p {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p + p {
    margin-top: 0.5rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ContainerTypes = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
`

export const TypeCoffee = styled.span`
  display: block;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
`

export const BuyCardCoffee = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;

  p {
    margin-top: 0;
  }

  span {
    display: inline-block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  span + span {
    display: inline-block;
    margin-left: 4px;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }
`
export const AddBuy = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['purple-dark']};
  border: none;
`
export const LineActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`
