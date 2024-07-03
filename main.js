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
userInput.addEventListener("focus", inputClear);

// input창 clear
function inputClear() {
  userInput.value = "";
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    userInputTask: userInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let taskDashBoard = "";
  for (i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      taskDashBoard += `<div class="task-taps" >
            <div class= "task-box">
              <div><button onclick="taskComplete('${taskList[i].id}')"  class="check_btn"><i class="fa-solid fa-rotate-left" style="color: #bababa;"></i></button></div>
              <div class ="task-done" style="font-size:18px">${taskList[i].userInputTask}</div>
            </div>
            <div>
              <button onclick ="task_delete('${taskList[i].id}')" class="delete_btn"><i class="fa-solid fa-trash-can" style="color: #416fbe;"></i></button>
            </div>
          </div>`;
    } else {
      taskDashBoard += `<div class="task-taps">
            <div class="task-box">
              <div><button onclick="taskComplete('${taskList[i].id}')" class="check_btn"><i class="fa-solid fa-check fa-xl" style="color: #FFD43B;"></i></button></div>
              <div style="font-size:18px"> ${taskList[i].userInputTask}</div>
            </div>
            <div>
              <button onclick="task_delete('${taskList[i].id}')"  class="delete_btn"><i class="fa-solid fa-trash-can" style="color: #416fbe;"></i></button>
            </div>
          </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = taskDashBoard;
}

function taskComplete(id) {
  console.log("id", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function task_delete(id) {
  console.log("삭제", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
  console.log(taskList);
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
