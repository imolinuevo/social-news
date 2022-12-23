import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDescriptionPanelComponent } from './detail-description-panel.component';

describe('DetailDescriptionPanelComponent', () => {
  let component: DetailDescriptionPanelComponent;
  let fixture: ComponentFixture<DetailDescriptionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDescriptionPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDescriptionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
