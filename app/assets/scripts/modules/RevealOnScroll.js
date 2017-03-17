import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elem, offset) {
    this.itemsToReveal = elem;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var currentObject = this; // This will select the currently selected Object ( in this case offsetPercentage)
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
