import { Component, OnInit } from '@angular/core';
import { MarketService } from './market.service';
import { Market } from './market';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  market: Market[] = []
  filteredMarket: Market[] = []
  filteredMarketWithSearch: Market[] = []
  marketToShow: Market[] = []

  constructor(private marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService.createAndStoreMarket()
      .subscribe(res => {
        this.market = res
        this.filterMarketByCurrency('STARX')
      })
  }

  filterMarketByCurrency(currency: string): void {
    this.filteredMarket = this.market
      .filter(currencyPair => currencyPair.currency === currency)
    this.marketToShow = this.filteredMarket
  }

  filterMarketByFavorite(): void {
    this.filteredMarket = this.market
      .filter(({ favorite }) => favorite)
    this.marketToShow = this.filteredMarket
  }

  compare(phrase1, phrase2): boolean {
    return phrase1.toLowerCase().includes(phrase2.toLowerCase())
  }

  searchMarket(phrase): void {
    this.filteredMarketWithSearch = this.filteredMarket
      .filter(({ currency, pairCurrency }) => {
        const isCurrencyMatch = this.compare(currency, phrase)
        const isPairCurrencyMatch = this.compare(pairCurrency, phrase)
        return isCurrencyMatch || isPairCurrencyMatch
      })
    this.marketToShow = this.filteredMarketWithSearch
  }

  revertSearch(): void {
    this.marketToShow = this.filteredMarket
  }

  findIndex(array: Market[], toggleId: number): number {
    return array.findIndex(({id}) => id === toggleId)
  }

  toggleFavorite(toggleId: number): void {
    const marketIndex = this.findIndex(this.market, toggleId)
    const filteredMarketIndex = this.findIndex(this.filteredMarket, toggleId)
    const filteredSearchIndex = this.findIndex(this.filteredMarketWithSearch, toggleId)
    const marketShowIndex = this.findIndex(this.marketToShow, toggleId)

    this.market[marketIndex].favorite = !this.market[marketIndex].favorite
    this.filteredMarket[filteredMarketIndex].favorite = !this.filteredMarket[filteredMarketIndex].favorite
    
    if (filteredSearchIndex !== -1) {
      this.filteredMarketWithSearch[filteredSearchIndex].favorite = !this.filteredMarketWithSearch[filteredSearchIndex].favorite
    }

    if(marketShowIndex !== -1) {
      this.marketToShow[marketShowIndex].favorite = !this.marketToShow[marketShowIndex].favorite
    }
  }

}
