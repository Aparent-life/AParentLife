import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elem, offset) {
    this.lazyImages = $('.lazyload');
    this.itemsToReveal = elem;
    this.offsetPercentage =  $('.page-section');
    this.hideInitially();
    this.createWaypoints();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var currentObject = this; // This will select the currently selected Object ( in this case we will use to select offsetPercentage)
    this.itemsToReveal.each(function() {
      var currentItem = this; // This will select all elements with a .reveal-item class
      new Waypoint({
        element: currentItem,
        handler: function(direction) {
          if(direction == 'down') {
            $(currentItem).addClass('reveal-item--is-visible');
          } else {
            $(currentItem).removeClass('reveal-item--is-visible');
          }
        },
        offset: currentObject.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
