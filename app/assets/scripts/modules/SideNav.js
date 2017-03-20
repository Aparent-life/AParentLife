import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class SideNavMenu {
  constructor() {
    this.closeSideNav = $('#menuToggler');
    this.SideNavTrigger = $('.page-section');
    this.createSideNavWaypoint();
  }

  createSideNavWaypoint() {
    var currentElement = this;
    new Waypoint({
      element: this.SideNavTrigger[0],
      handler: function(direction) {
        if(direction == 'down') {
          currentElement.closeSideNav.prop('checked', false);
        } else {
          currentElement.closeSideNav.prop('checked', true);
        }
      }
    });
  }

}

export default SideNavMenu;
