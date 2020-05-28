import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCurrencyComponent } from './featured-currency.component';

describe('FeaturedCurrencyComponent', () => {
  let component: FeaturedCurrencyComponent;
  let fixture: ComponentFixture<FeaturedCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
