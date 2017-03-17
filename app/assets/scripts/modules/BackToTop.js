import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class BackToTop {
  constructor() {
    this.backToTopIcon = $('.back-to-top a');
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.backToTopIcon.smoothScroll();
  }
}

export default BackToTop;
