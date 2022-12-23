import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftPanelComponent } from './main-left-panel.component';

describe('MainLeftPanelComponent', () => {
  let component: MainLeftPanelComponent;
  let fixture: ComponentFixture<MainLeftPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLeftPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
