// ボタンはサービスです。
// 自由に使ってください。

var button = document.querySelector('.button-action');
var starElme = document.querySelector('.star');
var oneStar = starElme.textContent;

button.addEventListener('click', function() {
  starElme.textContent += oneStar;
});
