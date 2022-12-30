import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  postList = [
    {
      voteCount: '4.0k',
      community: 'AskSocialNews',
      owner: 'someuser',
      postingTime: '2 hours',
      title:
        'What celebrity can you simply not stand, even if everyone else likes them?',
      commentsCount: '7.6k',
    },
    {
      voteCount: '3.1k',
      community: 'AskSocialNews',
      owner: 'bob',
      postingTime: '2 hours',
      title: 'What fact are you Just TIRED of explaining to people?',
      commentsCount: '2.4k',
    },
    {
      voteCount: '7.8k',
      community: 'AskSocialNews',
      owner: 'alice',
      postingTime: '4 hours',
      title:
        'What YouTube channel that puts out 20+ minute videos is actually worth watching?',
      commentsCount: '3.3k',
    },
    {
      voteCount: '56k',
      community: 'AskSocialNews',
      owner: 'foo',
      postingTime: '4 hours',
      title: "What's The Worst Pizza Topping?",
      commentsCount: '23k',
    },
    {
      voteCount: '2k',
      community: 'AskSocialNews',
      owner: 'bar',
      postingTime: '8 hours',
      title:
        "Siri's voice is switched to a celebrity, who would be the best candidate?",
      commentsCount: '11k',
    },
    {
      voteCount: '8.9k',
      community: 'AskSocialNews',
      owner: 'john',
      postingTime: '11 hours',
      title: 'What is one thing that you wished didn’t exist, why?',
      commentsCount: '1k',
    },
  ];
}
