import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTodayComponent } from './trending-today.component';

describe('TrendingTodayComponent', () => {
  let component: TrendingTodayComponent;
  let fixture: ComponentFixture<TrendingTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
