import { Component } from '@angular/core';

@Component({
  selector: 'app-main-right-panel',
  templateUrl: './main-right-panel.component.html',
  styleUrls: ['./main-right-panel.component.css'],
})
export class MainRightPanelComponent {
  popularCommunities = [
    {
      title: 'Popular communities',
      items: [
        'AskReddit',
        'NoStupidQuestions',
        'DestinyTheGame',
        'explainlikeimfive',
        'AskMen',
        'leagueoflegends',
        'Minecraft',
      ],
    },
    {
      title: 'Gaming',
      items: [
        'StardewValley',
        'FortniteCompetitive',
        'Warframe',
        'totalwar',
        'Fallout',
        'RocketLeague',
        'fo76',
        'yugioh',
        'eu4',
      ],
    },
    {
      title: 'Spors',
      items: [
        'running',
        'soccer',
        'bjj',
        'MMA',
        'hockey',
        'formula1',
        'CFB',
        'barstoolsports',
        'airsoft',
        'rugbyunion',
        'golf',
        'MTB',
        'cycling',
      ],
    },
    {
      title: 'Tv',
      items: [
        'Naruto',
        'BokuNoHeroAcademia',
        'marvelstudios',
        'rupaulsdragrace',
        '90DayFiance',
        'dbz',
        'Boruto',
      ],
    },
    {
      title: 'Travel',
      items: [
        'vancouver',
        'brasil',
        'australia',
        'mexico',
        'argentina',
        'melbourne',
        'ottawa',
        'korea',
        'ireland',
        'travel',
        'Calgary',
        'portugal',
      ],
    },
    {
      title: 'Health & Fitness',
      items: [
        'orangetheory',
        'bodybuilding',
        'bodyweightfitness',
        'vegan',
        'crossfit',
        'nattyorjuice',
        'EatCheapAndHealthy',
        'loseit',
      ],
    },
    {
      title: 'Fashion',
      items: [
        'MakeupAddiction',
        'Watches',
        'BeautyGuruChatter',
        'femalefashionadvice',
        'frugalmalefashion',
        'curlyhair',
        'poshmark',
      ],
    },
  ];
}
