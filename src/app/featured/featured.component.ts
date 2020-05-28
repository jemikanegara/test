import { Component, OnInit } from '@angular/core';
import { default as currencies } from './featured.json'

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  currencies = currencies
  
  constructor() { }

  ngOnInit(): void {
  }

}
