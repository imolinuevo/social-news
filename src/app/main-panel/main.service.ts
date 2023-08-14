import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  modalClicked = new Subject<string>();

  openModalAction(mode: string) {
    this.modalClicked.next(mode);
  }
}
