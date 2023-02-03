export function formatCoffeePrice(price: number) {
  const formattedUsingLib = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  // eslint-disable-next-line no-unused-vars
  const [symbol, amount] = formattedUsingLib.split(' ')
  return amount
}
