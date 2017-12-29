/**
* preload
*
* プリロード。
*
*/
const preload = (manifest, progress, complete) => {
  /**
  * preload
  *
  */
  const loadQueue = new createjs.LoadQueue();

  loadQueue.setMaxConnections(6);
  loadQueue.addEventListener("progress", handleProgress);
  loadQueue.addEventListener("complete", complete);

  loadQueue.loadManifest(manifest);

  function handleProgress(event) {
    const progressPercent = event.progress;
    progress(progressPercent);
  }
  // function handleComplete() {
  //   // complete
  // }
};

module.exports = preload;
