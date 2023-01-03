import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-top-panel',
  templateUrl: './main-top-panel.component.html',
  styleUrls: ['./main-top-panel.component.css'],
})
export class MainTopPanelComponent {
  constructor(private mainService: MainService) {}

  openModal() {
    this.mainService.openModalAction('login');
  }
}
