let isScrolling = false;

function throttleScroll() {
  if (!isScrolling) {
    isScrolling = true;

    requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
  }
}

function blurToOverlappingElements(targetElement, className) {
  // ターゲット要素の座標とサイズを取得
  const targetRect = targetElement.getBoundingClientRect();

  // 重なっている要素を取得
  const overlappingElements = document.querySelectorAll('.js-blur-element');

  // 重なっている要素に対してクラス名を追加
  overlappingElements.forEach(element => {
    const elementRect = element.getBoundingClientRect();
    const isOverlapping = !(targetRect.right < elementRect.left ||
      targetRect.left > elementRect.right ||
      targetRect.bottom < elementRect.top ||
      targetRect.top > elementRect.bottom);
    if (isOverlapping) {
      element.classList.add(className);
    }
    else {
      element.classList.remove(className);
    }
  });
}

function handleScroll() {
  const targetElement = document.querySelector('.js-target-element');
  blurToOverlappingElements(targetElement, 'is-blur');
}

// スクロールイベントをスロットルする
window.addEventListener('scroll', throttleScroll);
