/**
* detectUA
*
* UAを返す、cssuaだとandroid tabletが判別できないため
*
*/
export default function() {
  const isIPad = /iPad|Macintosh/i.test(navigator.userAgent) && 'ontouchend' in document;

  if ( navigator.userAgent.match(/iPhone|Android.+Mobile/) ) {
    return "sp";
  }
  else if ( isIPad || navigator.userAgent.match(/Android/) ) {
    return "tablet";
  }
  else {
    return "pc";
  }
}
