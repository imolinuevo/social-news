import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTopPanelComponent } from './detail-top-panel.component';

describe('DetailTopPanelComponent', () => {
  let component: DetailTopPanelComponent;
  let fixture: ComponentFixture<DetailTopPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTopPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
