import $ from 'jquery';

class BackToTop {
  constructor() {
    this.backToTopIcon = $('.back-to-top');
    this.events();
  }

  events() {
    this.backToTopIcon.click(this.BackToTop);
  }

  BackToTop() {
    console.log('back-to-top');
  }
}

export default BackToTop;
