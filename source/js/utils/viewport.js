const detectUA = require("./detectUA");

/**
* viewport
*
* スマートフォン/PC・タブレットでviewport切り替え
*
*/
const viewport = () => {
  /**
  *  jQuery DOM
  *
  */
  const $head = $("head");

  $head.prepend("<meta>");

  const config = $head.children(":first");

  if (detectUA() === "sp") {
    config.attr({
      name: "viewport",
      content: "width=device-width, initial-scale=1, minimum-scale=1 , maximum-scale=1.6"
    });
  }
  else if (detectUA() === "tablet") {
    return config.attr({
      name: "viewport",
      content: "width=1000"
    });
  }
};

module.exports = viewport;
