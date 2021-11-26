import { Component, OnInit, TemplateRef, ViewChild, ElementRef, ViewChildren, QueryList, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-multiple',
  templateUrl: './carousel-multiple.component.html',
  styleUrls: ['./carousel-multiple.component.scss']
})
export class CarouselMultipleComponent implements OnInit {
  @ViewChild('carouselRef') carouselRef!: ElementRef;

  @ViewChildren('carouselItemRef')
  carouselItemRef!: QueryList<ElementRef<any>>;

  @Input()
  slideTemplateRef!: TemplateRef<any>;

  @Input() slides: any[] = [];
  @Input() slide = 1;
  carouselIndex = 0;
  @Input() duration = .5;

  constructor() { }

  ngOnInit(): void {
  }

  onNext() {
    if ((this.carouselIndex + this.slide) >= this.carouselItemRef.length) {
      this.carouselIndex = this.carouselItemRef.length - 1
    } else {
      this.carouselIndex += this.slide;
    }
    this.animateCarousel(this.calculateTransformWidth(this.carouselIndex))
  }

  onPrev() {
    if ((this.carouselIndex - this.slide) < 0) {
      this.carouselIndex = 0;
    } else {
      this.carouselIndex -= this.slide;
    }
    this.animateCarousel(this.calculateTransformWidth(this.carouselIndex))
  }

  animateCarousel(length: number) {
    this.carouselRef.nativeElement.style.transform = `translateX(-${length}px)`;
  }

  calculateTransformWidth(index: number) {
    if (this.carouselItemRef.length == 0)
      return 0;
    let totalWidth = 0;
    this.carouselItemRef.forEach((element, i) => {
      if (i < index)
        totalWidth += element.nativeElement.offsetWidth;
    })
    return totalWidth;
  }

}
