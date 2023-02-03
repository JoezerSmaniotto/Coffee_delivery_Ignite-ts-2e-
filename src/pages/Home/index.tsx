import {
  ContainerHome,
  ContentBanner,
  ContainerFeatures,
  InfoContainerFeaturesShoppingCart,
  InfoContainerFeaturesPackage,
  InfoContainerFeaturesTimer,
  InfoContainerFeaturesCoffee,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import bannerCoffee from '../../assets/coffe_banner_home.png'
import { MainCoffee } from './Components/MainCoffee'

export function Home() {
  return (
    <>
      <ContainerHome>
        <ContentBanner>
          <p>
            Encontre o café perfeito
            <br /> para qualquer hora do dia
          </p>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a<br />
            qualquer hora
          </p>
          <ContainerFeatures>
            <div className={'shoppingCart'}>
              <InfoContainerFeaturesShoppingCart>
                <ShoppingCart size={16} weight="fill" />
              </InfoContainerFeaturesShoppingCart>
              <p>Compra simples e segura</p>
            </div>
            <div className={'package'}>
              <InfoContainerFeaturesPackage>
                <Package size={16} weight="fill" />
              </InfoContainerFeaturesPackage>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className={'timmer'}>
              <InfoContainerFeaturesTimer>
                <Timer size={16} weight="fill" />
              </InfoContainerFeaturesTimer>
              <p>Entrega rápida e rastreadas</p>
            </div>
            <div className={'coffee'}>
              <InfoContainerFeaturesCoffee>
                <Coffee size={16} weight="fill" />
              </InfoContainerFeaturesCoffee>
              <p>O café chega fresquinho até você</p>
            </div>
          </ContainerFeatures>
        </ContentBanner>
        <img src={bannerCoffee} alt="" />
      </ContainerHome>
      <MainCoffee></MainCoffee>
    </>
  )
}
