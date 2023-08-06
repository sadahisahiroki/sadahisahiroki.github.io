import detectUA from "./detectUA.js";

/**
* viewport
*
* スマートフォン/PC・タブレットでviewport切り替え
*
*/
export default function() {
  const config = document.querySelector("#viewport");

  if (detectUA() === "tablet") {
    return config.setAttribute("content", "width=1200");
  }
}
