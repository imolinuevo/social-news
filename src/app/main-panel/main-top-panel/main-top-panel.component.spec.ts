import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopPanelComponent } from './main-top-panel.component';

describe('MainTopPanelComponent', () => {
  let component: MainTopPanelComponent;
  let fixture: ComponentFixture<MainTopPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTopPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
