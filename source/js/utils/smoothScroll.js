/**
* smoothScroll
*
*/
export default function(pos, speed) {
  $("html, body").animate({
    scrollTop: pos
  }, speed, "swing");
}
