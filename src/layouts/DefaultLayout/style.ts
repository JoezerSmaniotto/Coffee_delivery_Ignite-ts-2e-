import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  max-width: 90rem;

  /* height: calc(100vh - 10rem); */
  padding-left: 10rem;
  padding-right: 10rem;
  margin: 0 auto;

  background: ${(props) => props.theme.background};
  border-radius: 8px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`
