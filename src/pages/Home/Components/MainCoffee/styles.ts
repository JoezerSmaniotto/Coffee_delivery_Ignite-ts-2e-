import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  padding-bottom: 2rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p.titleOurCoffees {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
    }
  }
`

export const InputFilter = styled.input`
  /* visibility: hidden; */
  width: 407px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: none;
`

export const ContainerListCoffees = styled.div`
  /* width: 100%; */
  margin-top: 3.25rem;
  display: grid !important;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
