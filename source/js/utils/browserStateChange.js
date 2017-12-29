/**
* BrowserStateChange
*
* ブラウザの状態変更に各種funcを紐づけ
*
*/
class BrowserStateChange {
  constructor() {
  }
  trigger(type, func, fps) {
    let timer = undefined;
    const frameTime = 1000 / fps;
    const $window = $(window);

    $window.on(type, () => {
      if (timer !== false) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        func();
      }, frameTime);
    });
  }
  resize(func) {
    return this.trigger("resize", func, 45);
  }
  scroll(func) {
    return this.trigger("scroll", func, 45);
  }
  touchmove(func) {
    return this.trigger("touchmove", func, 45);
  }
}

const browserStateChange = new BrowserStateChange();

module.exports = browserStateChange;
