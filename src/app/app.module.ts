import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BenefitComponent } from './benefit/benefit.component';
import { BenefitItemComponent } from './benefit/benefit-item/benefit-item.component';
import { CtaComponent } from './cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedCurrencyComponent } from './featured/featured-currency/featured-currency.component';
import { MarketComponent } from './market/market.component';
import { MarketHeaderComponent } from './market/market-header/market-header.component';
import { MarketContentComponent } from './market/market-content/market-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    BenefitComponent,
    BenefitItemComponent,
    CtaComponent,
    FooterComponent,
    ButtonComponent,
    FeaturedComponent,
    FeaturedCurrencyComponent,
    MarketComponent,
    MarketHeaderComponent,
    MarketContentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
