import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDetailService } from './post-detail.service';

@Component({
  selector: 'app-post-detail-panel',
  templateUrl: './post-detail-panel.component.html',
  styleUrls: ['./post-detail-panel.component.css'],
})
export class PostDetailPanelComponent implements OnInit {
  detailText = '';

  constructor(
    private router: Router,
    private postDetailService: PostDetailService,
  ) {}

  onClose() {
    this.router.navigate(['/']);
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.postDetailService.callProtected().subscribe((data) => {
      this.detailText = data.response;
    });
  }
}
