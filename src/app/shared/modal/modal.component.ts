import { Component, HostListener } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { MainService } from 'src/app/main-panel/main.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  isOpen: boolean = false;

  constructor(
    private mainService: MainService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.mainService.modalClicked.subscribe((mode) => {
      this.isOpen = true;
    });
  }

  onClose() {
    this.isOpen = false;
  }

  logIn() {
    this.authService.logIn();
    this.isOpen = false;
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    this.isOpen = false;
  }
}
