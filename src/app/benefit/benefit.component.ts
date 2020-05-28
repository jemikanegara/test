import { Component, OnInit } from '@angular/core';
import { default as benefits } from './benefit.json'

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent implements OnInit {
  benefits: any = benefits

  constructor() { }

  ngOnInit(): void {
  }

}
