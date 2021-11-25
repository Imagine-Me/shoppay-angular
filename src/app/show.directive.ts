import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs'
type AppSize = "sm" | "lg" | "md" | "xlg";

@Directive({
  selector: '[appShow]'
})

export class ShowDirective implements OnDestroy {
  @Input() appShow: AppSize = 'sm';
  resizeSub: Subscription | null = null;
  constructor(private el: ElementRef) {
    this.resizeSub = fromEvent(window, 'resize').pipe(debounceTime(500)).subscribe(() => this.toggleElement());
    this.toggleElement()
  }
  ngOnDestroy(): void {
    if (this.resizeSub) {
      this.resizeSub.unsubscribe();
    }
  }

  private toggleElement() {
    const windowWidth = window.innerWidth;
    this.el.nativeElement.style.display = "none";
    if (this.appShow === "sm" && windowWidth <= 480) {
      this.el.nativeElement.style.display = "block";
    }

    if (this.appShow === "md" && windowWidth <= 768) {
      this.el.nativeElement.style.display = "block";
    }

    if (this.appShow === "lg" && windowWidth <= 1024) {
      this.el.nativeElement.style.display = "block";
    }

    if (this.appShow === "xlg" && windowWidth <= 1200) {
      this.el.nativeElement.style.display = "block";
    }
  }

}
