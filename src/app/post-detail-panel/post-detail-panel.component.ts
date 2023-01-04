import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-detail-panel',
  templateUrl: './post-detail-panel.component.html',
  styleUrls: ['./post-detail-panel.component.css'],
})
export class PostDetailPanelComponent {
  constructor(private router: Router) {}

  onClose() {
    this.router.navigate(['/']);
  }
}
