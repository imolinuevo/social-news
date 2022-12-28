import { Component } from '@angular/core';

@Component({
  selector: 'app-main-right-panel',
  templateUrl: './main-right-panel.component.html',
  styleUrls: ['./main-right-panel.component.css'],
})
export class MainRightPanelComponent {
  defaultPopularCommunities = [
    'AskReddit',
    'NoStupidQuestions',
    'DestinyTheGame',
    'explainlikeimfive',
    'AskMen',
    'leagueoflegends',
    'Minecraft',
  ];
}
