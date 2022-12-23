import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSuggestPanelComponent } from './detail-suggest-panel.component';

describe('DetailSuggestPanelComponent', () => {
  let component: DetailSuggestPanelComponent;
  let fixture: ComponentFixture<DetailSuggestPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSuggestPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailSuggestPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
