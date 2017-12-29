/**
* toggle
*
*/
const toggle = () => {
  /**
  * jQueryDOM
  *
  */
  const $trigger = $(".js-toggle_trigger");

  $trigger.on({
    click: function() {
      $(this).toggleClass("is-active");
    }
  });
};

module.exports = toggle;
