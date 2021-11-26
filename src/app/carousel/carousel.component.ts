import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, KeyValueDiffer, KeyValueDiffers, OnDestroy, OnInit, TemplateRef } from '@angular/core';

export enum Animation {
  Fade = 'fade',
  Slide = 'slide'
}

export interface ActiveSlides {
  previous: number;
  current: number;
  next: number;
}

export enum Direction {
  Next,
  Prev
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideState', [
      state('current', style({
        transform: 'translateX(0%)',
        zIndex: 1,
      })),
      state('next', style({
        transform: 'translateX(100%)',
        zIndex: 1,
      })),
      transition('current => previous', animate('400ms ease-out')),
      transition('next => current', animate('400ms ease-out')),
    ])
  ]
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() slides: any;
  @Input() isNavigationVisible = false;
  @Input() isThumbnailsVisible = false;
  @Input() animation: Animation = Animation.Slide;
  @Input() autoPlayDuration = 0;
  @Input()
  slideTemplateRef!: TemplateRef<any>;
  @Input() thumbnailTemplateRef!: TemplateRef<any>;
  currentInterval: any;
  differ!: KeyValueDiffer<ActiveSlides, any>;

  private _direction = Direction.Next;

  constructor(private cd: ChangeDetectorRef, private differs: KeyValueDiffers) { }

  get direction() {
    return this._direction;
  }

  set direction(direction: Direction) {
    this._direction = direction;
  }

  private _activeSlides!: ActiveSlides;

  get activeSlides() {
    return this._activeSlides;
  }

  set activeSlides(activeSlide: ActiveSlides) {
    this._activeSlides = activeSlide;
  }

  ngOnInit(): void {
    if (this.slides) {
      this.activeSlides = this.getPreviousCurrentNextIndexes(0);
      this.differ = this.differs.find(this.activeSlides).create();

      if (this.slides.length > 1 && this.autoPlayDuration > 0) {
        this.startTimer();
      }
    }
  }


  ngOnDestroy(): void {
    this.resetTimer();
    this.cd.detach();
  }


  select(index: number): void {
    this.resetTimer();
    this.activeSlides = this.getPreviousCurrentNextIndexes(index);
    this.direction = this.getDirection(this.activeSlides.current, index);
    this.startTimer();
    if (this.differ.diff(this.activeSlides)) {
      this.cd.detectChanges();
    }
  }


  startTimer(): void {
    this.resetTimer();
    if (this.autoPlayDuration > 0) {
      this.currentInterval = setInterval(() => this.select(this.activeSlides.next), this.autoPlayDuration);
    }
  }

  resetTimer(): void {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
    }
  }


  getPreviousCurrentNextIndexes(index: number): ActiveSlides {
    const images = this.slides;

    return {
      previous: (index === 0 ? images.length - 1 : index - 1) % images.length,
      current: index % images.length,
      next: (index === images.length - 1 ? 0 : index + 1) % images.length
    }
  }

  getAnimationSlideState(index: number) {
    return index === this.activeSlides.current ? 'current' : index === this.activeSlides.next ? 'next' : index === this.activeSlides.previous ? 'previous' : ''
  }

  getDirection(oldIndex: number, newIndex: number): Direction {
    const images = this.slides;
    if (oldIndex === images.length - 1 && newIndex === 0) {
      return Direction.Next;
    } else if (oldIndex === 0 && newIndex === images.length - 1) {
      return Direction.Prev;
    }

    return oldIndex < newIndex ? Direction.Next : Direction.Prev;
  }

  animationDone(e:any){

  }

}
