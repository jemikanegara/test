import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketContentComponent } from './market-content.component';

describe('MarketContentComponent', () => {
  let component: MarketContentComponent;
  let fixture: ComponentFixture<MarketContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
