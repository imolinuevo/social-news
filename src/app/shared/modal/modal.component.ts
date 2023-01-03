import { Component, HostListener } from '@angular/core';
import { MainService } from 'src/app/main-panel/main.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  isOpen: boolean = false;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.modalClicked.subscribe((mode) => {
      this.isOpen = true;
    });
  }

  onClose() {
    this.isOpen = false;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.isOpen = false;
  }
}
