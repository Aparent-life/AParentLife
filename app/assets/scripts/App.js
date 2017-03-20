import BackToTop from './modules/BackToTop';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import SideNavMenu from './modules/SideNav';

var backToTop = new BackToTop();
new RevealOnScroll($('.back-to-top'));
new RevealOnScroll($('.social-media'));
var sideNavMenu = new SideNavMenu();
