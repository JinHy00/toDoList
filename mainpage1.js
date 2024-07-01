/**
 * 페이지 1 ( 닉네임 설정 )
 * 1) 유저가 닉네임을 설정한다
 * 1-1) 닉네임을 설정하면 "설정"버튼이 비활성화됨
 * 1-2) 닉네임은 한번만 가능하다고 문구 날림 ( 있어도 되고 없어도 됨)
 * 2) 규칙을 모르면 게임규칙 버튼을 누른다 -> 페이지 2로 연결 ( 또는 규칙 알람창)
 * 2-1) 다 읽었으면 나갈 수 있는 "X" 버튼을 만듦
 * 3) 닉네임을 설정하고 게임시작 버튼을 누른다 -> 페이지 3로 연결
 */

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  console.log("정답", computerNum);
}

function play() {
  let = userValue = userInput.value;
  if (userValue < computerNum) {
    resultArea.textContent = "up!";
    console.log("up");
  } else if (userValue > computerNum) {
    resultArea.textContent = "down!";
    console.log("down");
  } else {
    resultArea.textContent = "정답!";
    console.log("정답");
  }
}
pickRandomNum();
