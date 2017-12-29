/**
* utils
*
*/
const viewport = require("./utils/viewport");
// const browserStateChange = require("./utils/browserStateChange");
const smoothScroll = require("./utils/smoothScroll");
// const toggle = require("./utils/toggle");

viewport();

// scroll
$("a[href^='#']").click(function() {
  const href = $(this).attr("href");
  const target = $(((href === "#" || href === "" ? "html" : href)));
  const pos = target.offset().top;

  smoothScroll(pos, 400);

  return false;
});

// pagetop("#pagetopBtn", 100);
