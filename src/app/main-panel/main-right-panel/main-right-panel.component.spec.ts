import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightPanelComponent } from './main-right-panel.component';

describe('MainRightPanelComponent', () => {
  let component: MainRightPanelComponent;
  let fixture: ComponentFixture<MainRightPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
