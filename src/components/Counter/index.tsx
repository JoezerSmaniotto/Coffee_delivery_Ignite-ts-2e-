import { Minus, Plus } from 'phosphor-react'
import { ContainerCounter, ValueCounter, ButtonCounter } from './styles'

interface CounterProps {
  count: number
  handleLess: () => void
  handleMore: () => void
}

export function Counter({ count, handleLess, handleMore }: CounterProps) {
  return (
    <ContainerCounter>
      <ButtonCounter onClick={handleLess}>
        <Minus size={16} weight="fill" />
      </ButtonCounter>
      <ValueCounter>{count}</ValueCounter>
      <ButtonCounter onClick={handleMore}>
        <Plus size={16} weight="fill" />
      </ButtonCounter>
    </ContainerCounter>
  )
}
