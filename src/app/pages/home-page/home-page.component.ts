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

  categorySlides = [
    {
      title: 'Cap',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-hat.jpeg?alt=media&token=c982e27a-76af-4b89-a8c0-861e0fcd45ea'
    },
    {
      title: 'Laptop',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-laptop.jpg?alt=media&token=74769807-10dc-44fb-9f1e-e236562addd3'
    },
    {
      title: 'Shoe',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-shoe.jpeg?alt=media&token=94041c95-35d0-47e5-bb9c-9420e5b24f00'
    },
    {
      title: 'Cap',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-hat.jpeg?alt=media&token=c982e27a-76af-4b89-a8c0-861e0fcd45ea'
    },
    {
      title: 'Laptop',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-laptop.jpg?alt=media&token=74769807-10dc-44fb-9f1e-e236562addd3'
    },
    {
      title: 'Shoe',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-shoe.jpeg?alt=media&token=94041c95-35d0-47e5-bb9c-9420e5b24f00'
    },
    {
      title: 'Cap',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-hat.jpeg?alt=media&token=c982e27a-76af-4b89-a8c0-861e0fcd45ea'
    },
    {
      title: 'Laptop',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-laptop.jpg?alt=media&token=74769807-10dc-44fb-9f1e-e236562addd3'
    },
    {
      title: 'Shoe',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-shoe.jpeg?alt=media&token=94041c95-35d0-47e5-bb9c-9420e5b24f00'
    },
    {
      title: 'Cap',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-hat.jpeg?alt=media&token=c982e27a-76af-4b89-a8c0-861e0fcd45ea'
    },
    {
      title: 'Laptop',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-laptop.jpg?alt=media&token=74769807-10dc-44fb-9f1e-e236562addd3'
    },
    {
      title: 'Shoe',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-shoe.jpeg?alt=media&token=94041c95-35d0-47e5-bb9c-9420e5b24f00'
    },
    {
      title: 'Cap',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-hat.jpeg?alt=media&token=c982e27a-76af-4b89-a8c0-861e0fcd45ea'
    },
    {
      title: 'Laptop',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-laptop.jpg?alt=media&token=74769807-10dc-44fb-9f1e-e236562addd3'
    },
    {
      title: 'Shoe',
      image: 'https://firebasestorage.googleapis.com/v0/b/shopay-dev.appspot.com/o/category-shoe.jpeg?alt=media&token=94041c95-35d0-47e5-bb9c-9420e5b24f00'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
