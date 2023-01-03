import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-left-panel',
  templateUrl: './main-left-panel.component.html',
  styleUrls: ['./main-left-panel.component.css'],
})
export class MainLeftPanelComponent {
  topicList = [
    {
      name: 'Gaming',
      icon: 'controller',
      subItems: ['Minecraft', 'Path of Exile'],
    },
    { name: 'Sports', icon: 'dribbble', subItems: ['NFL', 'NBA'] },
    { name: 'Business', icon: 'graph-up', subItems: ['GameStop', 'Moderna'] },
    {
      name: 'Crypto',
      icon: 'currency-bitcoin',
      subItems: ['Cardano', 'Dogecoin'],
    },
    { name: 'Television', icon: 'tv', subItems: ['The Bachelor', 'Wife Swap'] },
    {
      name: 'Celebrity',
      icon: 'star',
      subItems: ['Henry Cavill', 'Natalie Portman'],
    },
    { name: 'More Topics', icon: 'three-dots', subItems: ['Art', 'History'] },
  ];

  constructor(private mainService: MainService) {}

  openModal() {
    this.mainService.openModalAction('register');
  }
}
