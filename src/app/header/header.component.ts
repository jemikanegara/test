import { Component, OnInit } from '@angular/core';
import {default as navigation} from './header.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navigation = navigation
  keys = Object.keys(navigation)

  constructor() { }

  ngOnInit(): void {
  }

}
