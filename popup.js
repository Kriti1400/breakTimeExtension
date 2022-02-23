document.addEventListener('DOMContentLoaded', function() {
  var checkButtonWordle = document.getElementById('wordle');
  checkButtonWordle.addEventListener('click', function() {
   window.open("https://www.nytimes.com/games/wordle/index.html");
  }, false);

  var checkButtonNerdle = document.getElementById('nerdle');
  checkButtonNerdle.addEventListener('click', function() {
   window.open("https://nerdlegame.com/");
  }, false);

  var kizi = document.getElementById('kizi');
  kizi.addEventListener('click', function() {
   window.open("https://kizi.com/");
  }, false);
}, false);

  // icon: 
  // <a target="_blank" href="https://icons8.com/icon/1UY3VXBdJybT/coffee-break">Coffee Break</a> 
  // icon by <a target="_blank" href="https://icons8.com">Icons8</a>