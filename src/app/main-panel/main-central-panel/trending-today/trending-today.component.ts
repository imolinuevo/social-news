import { Component } from '@angular/core';

@Component({
  selector: 'app-trending-today',
  templateUrl: './trending-today.component.html',
  styleUrls: ['./trending-today.component.css'],
})
export class TrendingTodayComponent {
  cardList = [
    {
      id: 1,
      title: 'Southwest Flight Cancellations',
      description: 'ABC7 Los Angeles: Southwest Airlines cancels at...',
      community: 'news',
    },
    {
      id: 2,
      title: 'Cody Gakpo',
      description: 'OFFICIAL: PSV sells Cody Gakpo to Liverpool FC',
      community: 'soccer',
    },
    {
      id: 3,
      title: 'George Santos',
      description:
        'George Santos Admits to Lying About College and Work History',
      community: 'politics',
    },
    {
      id: 4,
      title: 'Nathaniel Hackett',
      description:
        '[Pelissero] The Broncos fired Nathaniel Hackett, per source.',
      community: 'nfl',
    },
  ];
}
