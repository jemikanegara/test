import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-market-header',
  templateUrl: './market-header.component.html',
  styleUrls: ['./market-header.component.css']
})
export class MarketHeaderComponent implements OnInit {
  @Output() filterByFavorite = new EventEmitter();
  @Output() filterByCurrency = new EventEmitter<string>();
  @Output() revertSearch = new EventEmitter(); 
  @Output() searchMarket = new EventEmitter<string>();
  search: string = '';

  links = [
    {
      label: 'STARX Markets',
      method: () => this.filterByCurrency.emit('STARX')
    },
    {
      label: 'USDT Markets',
      method: () => this.filterByCurrency.emit('TETHER')
    },
    {
      label: 'Favorites',
      method: () => this.filterByFavorite.emit()
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    if (!this.search) this.revertSearch.emit()
    else this.searchMarket.emit(this.search)
  }
}
