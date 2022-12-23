import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPanelComponent } from './community-panel.component';

describe('CommunityPanelComponent', () => {
  let component: CommunityPanelComponent;
  let fixture: ComponentFixture<CommunityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
