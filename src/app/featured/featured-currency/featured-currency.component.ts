import { Component, OnInit, Input } from '@angular/core';
import {FeaturedCurrency} from './featured-currency';

@Component({
  selector: 'app-featured-currency',
  templateUrl: './featured-currency.component.html',
  styleUrls: ['./featured-currency.component.css']
})
export class FeaturedCurrencyComponent implements OnInit {
  @Input() currency: FeaturedCurrency

  constructor() { }

  ngOnInit(): void {
  }

  change(): number {
    return (((this.currency.price - this.currency.lastPrice) / this.currency.lastPrice) * 100);
  }

  isNegativeChange(): boolean {
    return this.change() < 0
  }

  changeFormat(): string {
    const twoDecimal = this.change().toFixed(2);
    const symbol = this.isNegativeChange() ? '-' : '+';
    return `${symbol}${twoDecimal}%`
  }

  numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
