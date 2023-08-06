export default function(el, threshold) {
  let btn = document.querySelector(el);

  if ( btn === null ) {
    return;
  }

  btn.style.transition = 'opacity .2s cubic-bezier(0, 0.55, 0.45, 1)';

  function checkEdge() {
    if(window.pageYOffset > threshold) {
      btn.style.opacity = '1';
    }
    else {
      btn.style.opacity = '0';
    }
  }

  checkEdge();
  let timeoutId ;

  window.addEventListener( "scroll", function () {
    // setTimeout()がセットされていたら無視
    if ( timeoutId ) return ;

    timeoutId = setTimeout( function () {
      timeoutId = 0 ;
      checkEdge();

      // 処理内容
    }, 1000 / 30 ) ;
  } ) ;
}
