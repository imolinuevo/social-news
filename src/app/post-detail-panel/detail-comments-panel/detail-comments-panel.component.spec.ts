import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommentsPanelComponent } from './detail-comments-panel.component';

describe('DetailCommentsPanelComponent', () => {
  let component: DetailCommentsPanelComponent;
  let fixture: ComponentFixture<DetailCommentsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommentsPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
