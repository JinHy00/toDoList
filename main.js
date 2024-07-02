/**
 * 유저가 값을 입력하고 "+"버튼을 클릭 -> 할일 추가
 * 유자가 체크하면 completed -> 밑줄 생성
 * 유저가 삭제하면 delete -> 휴지통 만들까?
 * 메뉴 탭 누르면 언더바 이동
 *  메뉴별로 잘 분류들어가도록
 */

let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input_btn");
let taskList = [];

inputButton.addEventListener("click", addTask);

function addTask() {
  let userInputTask = userInput.value;
  taskList.push(userInputTask);
  console.log(taskList);
  render();
}

function render() {
  let taskDashBoard = "";
  for (i = 0; i < taskList.length; i++) {
    taskDashBoard += `<div class="task-taps">
            <div>
              <button>check</button>
              ${taskList[i]}
            </div>
            <div>
              <button>delete</button>
            </div>
          </div>`;
  }

  document.getElementById("task-board").innerHTML = taskDashBoard;
}
