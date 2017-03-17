import BackToTop from './modules/BackToTop';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var backToTop = new BackToTop();
new RevealOnScroll($('.back-to-top'), '150%' );
new RevealOnScroll($('.social-media'), '5%');
