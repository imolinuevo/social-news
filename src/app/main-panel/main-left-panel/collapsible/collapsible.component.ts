import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css'],
})
export class CollapsibleComponent {
  @Input() topic: any;
}
