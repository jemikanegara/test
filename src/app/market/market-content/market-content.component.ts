import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Market } from '../market';

@Component({
  selector: 'app-market-content',
  templateUrl: './market-content.component.html',
  styleUrls: ['./market-content.component.css']
})
export class MarketContentComponent implements OnInit {
  @Input() market: Market[];
  @Output() toggleFavorite = new EventEmitter();

  thead: string[] = ['', 'PAIR', 'LAST PRICE', '24H HIGH', '24H LOW', '24H CHANGE', '24H VOLUME']

  constructor() { }

  ngOnInit(): void {
  }

  isNegative(num): boolean {
    return num < 0
  }

  onFavoriteToggle(id) {
    this.toggleFavorite.emit(id)
  }

}
