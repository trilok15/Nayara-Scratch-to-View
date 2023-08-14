const scContainer = document.getElementById('js--sc--container');

const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.CIRCLE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 75,
  imageForwardSrc: './imgs/front-image1.png',
  imageBackgroundSrc: './imgs/scratch-image1.jpeg',
  // htmlBackground: '<div class="inner_html"><p>Subscribe for more Videos</p></div>',
  clearZoneRadius: 15,
  nPoints:30,
  pointSize: 2,
})

sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)
  })
}).catch((error) => {
  alert(error.message);
});