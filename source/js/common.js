document.addEventListener('DOMContentLoaded', function () {
  const squareContainer = document.querySelector('.square-container'); // 複数の.square要素を取得
  const targets = {
    info: document.getElementById('info'),
    lang: document.getElementById('lang'),
    sites: document.getElementById('sites'),
    void1: document.getElementById('void1'),
    void2: document.getElementById('void2')
  };

  const options = {
    root: null, // ビューポートを基準
    rootMargin: '0px',
    threshold: 0 // 交差する割合
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      let stateClass; // デフォルト状態

      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'info':
            stateClass = '--state-1';
            break;
          case 'lang':
            stateClass = '--state-2';
            break;
          case 'sites':
            stateClass = '--state-3';
            break;
          case 'void1':
            stateClass = '--state-0';
            break;
          case 'void2':
            stateClass = '--state-0';
            break;
          default:
            stateClass = '--state-0';
        }
        squareContainer.className = `square-container ${stateClass}`;
      }
    });
  }, options);

  // 各ターゲット要素を監視
  Object.values(targets).forEach(target => {
    observer.observe(target);
  });
});
