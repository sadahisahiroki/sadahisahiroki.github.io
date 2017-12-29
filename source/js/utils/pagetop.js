const browserStateChange = require("./browserStateChange");

const pagetop = (el, threshold) => {
  /**
  *
  * jQueryDOM
  *
  */
  const $btn = $(el);

  function checkEdge() {
    if(window.pageYOffset > threshold) {
      $btn.animate({
        opacity: 1
      }, {
        duration: 125
      });
    }
    else {
      $btn.animate({
        opacity: 0
      }, {
        duration: 125
      });
    }
  }

  browserStateChange.scroll(checkEdge);
};

module.exports = pagetop;
