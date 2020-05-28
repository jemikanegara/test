import { Component, OnInit } from '@angular/core';
import { default as navs } from './nav.json'
import { default as socials } from './social.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  navs = navs
  navKeys = Object.keys(navs)
  socials = socials

  constructor() { }

  ngOnInit(): void {
  }

}
