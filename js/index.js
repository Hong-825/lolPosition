/* ajax */
function cgPage(filename) {
  fetch("page/" + filename).then(function (response) {
    response.text().then(function (text) {
      document.querySelector(".container").innerHTML = text;
    });
  });
}

/* 문항 선택 시 포지션 점수 획득 */
let topPlayer = 0;
let junglePlayer = 0;
let midPlayer = 0;
let adcPlayer = 0;
let supPlayer = 0;

function score(a, b, c, d, e) {
  topPlayer = topPlayer + a;
  junglePlayer = junglePlayer + b;
  midPlayer = midPlayer + c;
  adcPlayer = adcPlayer + d;
  supPlayer = supPlayer + e;
}

/* 다시하기 때 포지션 점수 초기화 */
function reset() {
  topPlayer = 0;
  junglePlayer = 0;
  midPlayer = 0;
  adcPlayer = 0;
  supPlayer = 0;
  location.reload();
}

/* 결과 계산 */
function result() {
  scArr = [topPlayer, junglePlayer, midPlayer, adcPlayer, supPlayer];
  maxScore = Math.max.apply(null, scArr);

  if ((maxScore == topPlayer)) {
    cgPage("top");
  } else if ((maxScore == junglePlayer)) {
    cgPage("jun");
  } else if ((maxScore == midPlayer)) {
    cgPage("mid");
  } else if ((maxScore == adcPlayer)) {
    cgPage("adc");
  } else {
    cgPage("sup");
  }
}
