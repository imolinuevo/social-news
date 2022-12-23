import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailPanelComponent } from './post-detail-panel.component';

describe('PostDetailPanelComponent', () => {
  let component: PostDetailPanelComponent;
  let fixture: ComponentFixture<PostDetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDetailPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
