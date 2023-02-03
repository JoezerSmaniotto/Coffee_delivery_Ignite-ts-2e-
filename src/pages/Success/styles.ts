import styled from 'styled-components'

export const ContainerSuccess = styled.div`
  display: flex;
`
export const ContainerOrder = styled.div`
  @media (max-width: 1100px) {
    width: 100%;
  }
`
export const HeaderOrder = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`
export const ContainerInfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 2.5rem;

  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.purple};
`

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 441px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const TextBold = styled.span`
  font-weight: 700;
`
interface IconWrapperProps {
  iconBg: 'purple' | 'yellow' | 'yellow-dark'
}

export const IconWrapper = styled.span<IconWrapperProps>`
  color: ${(props) => props.theme.white};

  padding: 0.5rem;
  border-radius: 50%;
  display: inline-flex;
  width: auto;
  background-color: ${(props) => {
    const colorString = props.iconBg
    let colorHex = ''

    switch (colorString) {
      case 'purple':
        colorHex = props.theme.purple
        break
      case 'yellow-dark':
        colorHex = props.theme['yellow-dark']
        break
      case 'yellow':
        colorHex = props.theme.yellow
        break
    }

    return colorHex
  }};
`

export const ContainerImg = styled.div`
  display: flex;
  align-items: flex-end;
  margin-left: 6.37rem;
  img {
    width: 100%;
    max-width: 492px;
    display: block;
  }
  @media (max-width: 1100px) {
    img {
      display: none;
    }
  }
`
