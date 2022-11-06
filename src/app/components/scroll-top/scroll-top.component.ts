import {Component, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent{

  @Output()
  scrollToTop = new EventEmitter<void>();

  @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
    const verticalOffset =  document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.elem.nativeElement.style.visibility = verticalOffset > window.screen.height ? 'visible' : 'hidden';
  }

  constructor(private elem: ElementRef) { }

  onScrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    this.scrollToTop.emit();
  }
}
