import { useContext, useEffect, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { CoffeeContext, ICoffee } from '../../../../contexts/CoffeeContext'
import { formatCoffeePrice } from '../../../../helpers/formatCoffeePrice'
import { RemoveButton } from '../../../../components/RemoveButton/index'

import {
  ButtonsWrapper,
  SelectedCoffeeItemContainer,
  SelectedCoffeeItemWrapper,
} from './styles'

interface SelectedCoffeeItemProps {
  coffee: ICoffee
}

export function SelectedCoffeeItem({ coffee }: SelectedCoffeeItemProps) {
  const { updateCoffeeInCartById, deleteCoffeeInCartById } =
    useContext(CoffeeContext)

  const [amountOfCoffee, setAmountOfCoffee] = useState<number>(coffee.amount)

  const formattedCoffeePrice = formatCoffeePrice(coffee.price)

  function handleDeleteCoffee() {
    deleteCoffeeInCartById(coffee.id)
  }

  function onDecrementAmountCoffees() {
    setAmountOfCoffee((state) => {
      if (state > 0) {
        return state - 1
      }

      return state
    })
  }

  function onIncrementAmountCoffees() {
    setAmountOfCoffee((state) => state + 1)
  }

  useEffect(() => {
    updateCoffeeInCartById(coffee.id, amountOfCoffee)
  }, [amountOfCoffee])

  return (
    <SelectedCoffeeItemContainer>
      <SelectedCoffeeItemWrapper>
        <img src={coffee.img} />
        <span>
          <span>{coffee.title}</span>
          <ButtonsWrapper>
            <Counter
              count={amountOfCoffee}
              handleMore={onIncrementAmountCoffees}
              handleLess={onDecrementAmountCoffees}
            />
            <RemoveButton
              text="REMOVER"
              type="button"
              onClick={handleDeleteCoffee}
            />
          </ButtonsWrapper>
        </span>
        <h3>R$ {formattedCoffeePrice}</h3>
      </SelectedCoffeeItemWrapper>

      <hr />
    </SelectedCoffeeItemContainer>
  )
}
