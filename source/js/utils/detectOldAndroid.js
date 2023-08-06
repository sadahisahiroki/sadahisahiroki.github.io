/**
* detectOldAndroid
*
*/
export default function() {
  if (parseInt(cssua.ua.android, 10) < 4.4) {
    $("html").addClass("oldAndroid");
  }
}
