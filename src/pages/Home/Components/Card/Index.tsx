import {
  ContainerCard,
  ContainerTypes,
  TypeCoffee,
  BuyCardCoffee,
  AddBuy,
  LineActions,
} from './styles'
import { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Counter } from '../../../../components/Counter'
import { ShoppingCart } from 'phosphor-react'
import {
  IAvailableCoffee,
  CoffeeContext,
} from '../../../../contexts/CoffeeContext'
import { formatCoffeePrice } from '../../../../helpers/formatCoffeePrice'

interface CardProps {
  availableCoffee: IAvailableCoffee
}

export function Card({ availableCoffee }: CardProps) {
  const [count, setCount] = useState(0)
  const { addCoffeeInCart, coffeesInCart } = useContext(CoffeeContext)

  function handleLess() {
    setCount((state) => {
      if (state === 0) {
        return state
      } else {
        return state - 1
      }
    })
  }
  function handleMore() {
    setCount((state) => state + 1)
  }

  function handleAddCartCoffe() {
    if (count >= 1) {
      addCoffeeInCart(availableCoffee, count)
      toast.success(`
      ${count} café${count > 1 ? 's' : ''} adicionado${count > 1 ? 's' : ''}
      ao carrinho`)
    }
  }

  const price = formatCoffeePrice(availableCoffee.price)

  return (
    <ContainerCard>
      <img src={availableCoffee.img} alt="" />
      <ContainerTypes>
        {availableCoffee.tagList.map((type) => {
          return <TypeCoffee key={type}>{type}</TypeCoffee>
        })}
      </ContainerTypes>
      <p>{availableCoffee.title}</p>
      <p>{availableCoffee.description}</p>
      <BuyCardCoffee>
        <p>
          <span>R$</span> <span>{price}</span>
        </p>

        <LineActions>
          <Counter
            handleLess={handleLess}
            handleMore={handleMore}
            count={count}
          />
          <AddBuy onClick={handleAddCartCoffe}>
            <ShoppingCart size={20} weight="fill" />
          </AddBuy>
        </LineActions>
      </BuyCardCoffee>
    </ContainerCard>
  )
}
