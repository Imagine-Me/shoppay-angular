import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  slides = [
    {
      title: 'Trending',
      description: 'Wear trending collections',
      url: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/main-carousel-1.jpg?alt=media&token=957ccfd9-2db7-4651-9961-0fe57f682482'
    },
    {
      title: 'New',
      description: 'Wear trending collections',
      url: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/main-carousel-1.jpg?alt=media&token=957ccfd9-2db7-4651-9961-0fe57f682482'
    }, {
      title: 'Another',
      description: 'Wear trending collections',
      url: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/main-carousel-1.jpg?alt=media&token=957ccfd9-2db7-4651-9961-0fe57f682482'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
