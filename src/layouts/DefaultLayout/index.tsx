import { Outlet } from 'react-router-dom'
import { Footer } from '../../components/Footer/Index'
import { Header } from '../../components/Header/Index'
import { LayoutContainer } from './style'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
