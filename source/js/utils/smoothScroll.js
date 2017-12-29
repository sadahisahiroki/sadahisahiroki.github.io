/**
* smoothScroll
*
*/
const smoothScroll = (pos, speed) => {
  $("html, body").animate({
    scrollTop: pos
  }, speed, "swing");
};

module.exports = smoothScroll;
