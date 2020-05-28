import { Component, OnInit, Input } from '@angular/core';
import { BenefitItem } from './benefit-item'

@Component({
  selector: 'app-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrls: ['./benefit-item.component.css']
})
export class BenefitItemComponent implements OnInit {
  @Input() benefit: BenefitItem

  constructor() { }

  ngOnInit(): void {
  }

}
