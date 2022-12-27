import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularFiltersComponent } from './popular-filters.component';

describe('PopularFiltersComponent', () => {
  let component: PopularFiltersComponent;
  let fixture: ComponentFixture<PopularFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
