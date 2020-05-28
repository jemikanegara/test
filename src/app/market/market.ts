export interface Market {
  id: number
  currency: string
  price: number
  pairCurrency: string
  pairCurrencyPrice: number
  high: number
  low: number
  change: number
  volume: number
  favorite: boolean
}
