var $l = document.querySelector('#large');
var $m = document.querySelector('#medium');
var $s = document.querySelector('#small');

window.addEventListener('click', onCapture, true);
window.addEventListener('click', onBubble, false);

document.addEventListener('click', onCapture, true);
document.addEventListener('click', onBubble, false);

document.documentElement.addEventListener('click', onCapture, true);
document.documentElement.addEventListener('click', onBubble, false);

document.body.addEventListener('click', onCapture, true);
document.body.addEventListener('click', onBubble, false);

$l.addEventListener('click', onCapture, true);
$l.addEventListener('click', onBubble, false);

$m.addEventListener('click', onCapture, true);
$m.addEventListener('click', onBubble, false);

$s.addEventListener('click', onCapture, true);
$s.addEventListener('click', onBubble, false);

function onCapture() {
  console.log('潜水', this);
  this.classList && this.classList.add('capture');
}

function onBubble() {
  console.log('冒泡', this);
  this.classList && this.classList.add('bubble');
}

document.querySelector('#reset').addEventListener('click', function(event) {
  event.stopPropagation();
  document.querySelectorAll('.capture, .bubble').forEach(function(element) {
    element.classList.remove('capture', 'bubble');
  });
});


