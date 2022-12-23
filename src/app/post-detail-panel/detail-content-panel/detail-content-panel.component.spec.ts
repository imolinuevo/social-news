import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailContentPanelComponent } from './detail-content-panel.component';

describe('DetailContentPanelComponent', () => {
  let component: DetailContentPanelComponent;
  let fixture: ComponentFixture<DetailContentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailContentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
