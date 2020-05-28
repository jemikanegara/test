import { Component, OnInit } from '@angular/core';
import { default as slides } from './banner.json';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = slides
  slideConfig = {
    slidesToShow: 1,
    dots: true
  };
}
