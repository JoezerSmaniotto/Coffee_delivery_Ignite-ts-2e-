import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer, LinkCardButton } from './styles'

import logoCoffee from '../../assets/logo_coffee.svg'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import { localStorageManager } from '../../utils/localStorageManager'

interface IAddress {
  city: string
  state: string
}

export function Header() {
  const { coffeesInCart } = useContext(CoffeeContext)
  const [totalCoffeesInCart, setTotalCoffeesInCart] = useState<
    number | undefined
  >(undefined)
  const [address, setAddress] = useState<IAddress | undefined>(undefined)

  useEffect(() => {
    let countCoffeess = 0
    coffeesInCart.forEach((coffee) => {
      if (coffee.amount > 0) {
        countCoffeess += coffee.amount
      }
    })
    setTotalCoffeesInCart(countCoffeess)
  }, [coffeesInCart])

  const cepFromStorage = localStorageManager.getItem(
    '@coffee-delivery:cep-1.0.0',
  )
  useEffect(() => {
    axios
      .get(`https://cep.awesomeapi.com.br/json/${cepFromStorage}`)
      .then((response) => {
        const { city, state } = response.data

        setAddress({
          city,
          state,
        })
      })
      .catch(() => {})
  }, [cepFromStorage])

  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="Logo " />

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          {address && (
            <span>
              {address.city}, {address.state}
            </span>
          )}
        </span>

        {totalCoffeesInCart ? (
          <NavLink to="/checkout" title="Carrinho">
            <LinkCardButton counterNumber={totalCoffeesInCart} />
          </NavLink>
        ) : (
          <LinkCardButton disabled>
            <ShoppingCart size={22} weight="fill" />
          </LinkCardButton>
        )}
      </div>
    </HeaderContainer>
  )
}
