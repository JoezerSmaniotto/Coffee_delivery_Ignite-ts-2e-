import { useState, ChangeEvent, useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { Card } from '../Card/Index'
import { ContainerMain, InputFilter, ContainerListCoffees } from './styles'

export function MainCoffee() {
  const [filterCoffee, setFilterCoffee] = useState('')
  const { listOfAvailableCoffees } = useContext(CoffeeContext)

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    setFilterCoffee(event.target.value)
  }
  return (
    <ContainerMain>
      <div>
        <p className={'titleOurCoffees'}>Nossos cafés</p>
        <InputFilter
          type="text"
          value={filterCoffee}
          onChange={handleNewCommentChange}
        />
      </div>
      <ContainerListCoffees>
        {listOfAvailableCoffees.map((coffee) => {
          return <Card availableCoffee={coffee} key={coffee.id} />
        })}
      </ContainerListCoffees>
    </ContainerMain>
  )
}
