import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Market } from './market'

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  createAndStoreMarket() {
    return this.http
      .get<Market[]>('/assets/data/market.json')
  }
   
  constructor(private http: HttpClient) { }
}
