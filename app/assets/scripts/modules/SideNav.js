import $ from 'jquery';

class SideNavMenu {
  constructor() {
    this.SideNavOpen = $('#SideNavMenuOpen');
    this.events();
  }

  events() {
    this.SideNavOpen.ready(this.SideNavOpen);
  }

  SideNavOpen() {
    console.log('it works');
  }
}

export default SideNavMenu;
