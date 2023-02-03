import styled from 'styled-components'

export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */

  margin-bottom: 6.75rem;

  img {
    display: block;
    width: 476px;
    max-width: 100%;
    height: 360px;
  }

  @media (max-width: 1100px) {
    img {
      display: none;
    }
  }
`

export const ContentBanner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;

  & > p {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p + p {
    margin-top: 1rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    font-stretch: 100;
  }
`

export const ContainerFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  padding-top: 4.125rem;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  & .shoppingCart {
    /* grid-area: 1 / 1 / 2 / 2; */
    padding-right: 0.7rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      /* font-family: 'Roboto'; */
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
  & .package {
    /* grid-area: 1 / 2 / 2 / 3; */
    display: flex;
    align-items: center;
    gap: 0.75rem;
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
  & .timmer {
    /* grid-area: 2 / 1 / 3 / 2; */
    display: flex;
    align-items: center;
    gap: 0.75rem;
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }
  & .coffee {
    /* grid-area: 2 / 2 / 3 / 3; */
    display: flex;
    align-items: center;
    gap: 0.75rem;
    p {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-text']};
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const BaseInfoContainerFeatures = styled.span`
  padding: 8px;
  display: inline-block;
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoContainerFeaturesShoppingCart = styled(
  BaseInfoContainerFeatures,
)`
  background: ${(props) => props.theme['yellow-dark']};
`
export const InfoContainerFeaturesPackage = styled(BaseInfoContainerFeatures)`
  background: ${(props) => props.theme['base-text']};
`
export const InfoContainerFeaturesTimer = styled(BaseInfoContainerFeatures)`
  background: ${(props) => props.theme.yellow};
`
export const InfoContainerFeaturesCoffee = styled(BaseInfoContainerFeatures)`
  background: ${(props) => props.theme.purple};
`
