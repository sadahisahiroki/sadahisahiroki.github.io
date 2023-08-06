/**
* toggle
*
*/
export default function( isClosedAll ) {
  const el = document.querySelectorAll(".js-toggle-el");
  el.forEach(function(trigger) {
    trigger.addEventListener('click', function() {
      if( isClosedAll === true ) {
        let isThisActive = this.classList.contains('is-active') ? true : false;
        const el = document.querySelectorAll(".js-toggle-el");
        el.forEach(function(trigger) {
          trigger.classList.remove('is-active');
        });
        if( isThisActive !== true ) {
          trigger.classList.add('is-active');
        }
      }
      else {
        this.classList.toggle('is-active');
      }
    });
  });
}
