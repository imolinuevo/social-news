import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCentralPanelComponent } from './main-central-panel.component';

describe('MainCentralPanelComponent', () => {
  let component: MainCentralPanelComponent;
  let fixture: ComponentFixture<MainCentralPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCentralPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCentralPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
