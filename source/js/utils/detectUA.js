/**
* detectUA
*
* UAを返す、cssuaだとandroid tabletが判別できないため
*
*/

const detectUA = () => {
  const ua = window.navigator.userAgent.toLowerCase();

  if (cssua.ua.mobile === "iphone" || (cssua.ua.mobile === "android" && ua.indexOf("mobile") > 0)) {
    return "sp";
  }
  else if (cssua.ua.mobile === "ipad" || (cssua.ua.mobile === "android" && ua.indexOf("mobile") < 0)) {
    return "tablet";
  }
};

module.exports = detectUA;
