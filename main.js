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
let tabs = document.querySelectorAll(".tabs-menu div");
let menuTabs = "all";
let filterList = [];
let slideBar = document.getElementById("menu_line");
let menuLine = document.querySelectorAll("nav div");

inputButton.addEventListener("click", addTask);
userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let task = {
      id: randomIDGenerate(),
      userInputTask: userInput.value,
      isComplete: false,
    };

    taskList.push(task);
    console.log(taskList);
    render();
  }
});
userInput.addEventListener("focus", inputClear);
menuLine.forEach((menu) =>
  menu.addEventListener("click", (e) => slideMenuLine(e))
);

// input창 clear
function inputClear() {
  userInput.value = "";
}

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  if (userInput.value.trim() === "") {
    return alert("할 일을 입력해주세요");
  }

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
  let list = [];

  if (menuTabs === "all") {
    list = taskList;
  } else if (menuTabs === "ing") {
    list = taskList.filter((task) => !task.isComplete);
  } else if (menuTabs === "done") {
    list = taskList.filter((task) => task.isComplete);
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete) {
      taskDashBoard += `<div class="task-taps">
            <div class="task-box">
              <div><button onclick="taskComplete('${list[i].id}')" class="check_btn"><i class="fa-solid fa-rotate-left" style="color: #bababa;"></i></button></div>
              <div class="task-done" style="font-size:18px">${list[i].userInputTask}</div>
            </div>
            <div>
              <button onclick="task_delete('${list[i].id}')" class="delete_btn"><i class="fa-solid fa-trash-can" style="color: #416fbe;"></i></button>
            </div>
          </div>`;
    } else {
      taskDashBoard += `<div class="task-taps">
            <div class="task-box">
              <div><button onclick="taskComplete('${list[i].id}')" class="check_btn"><i class="fa-solid fa-check fa-xl" style="color: #FFD43B;"></i></button></div>
              <div class="task-ing" style="font-size:18px">${list[i].userInputTask}</div>
            </div>
            <div>
              <button onclick="task_delete('${list[i].id}')" class="delete_btn"><i class="fa-solid fa-trash-can" style="color: #416fbe;"></i></button>
            </div>
          </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = taskDashBoard;
}

function taskComplete(id) {
  console.log("id", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
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
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
  console.log(taskList);
}

function filter(event) {
  menuTabs = event.target.id;
  render();
}

// 메뉴바 슬라이드
function slideMenuLine(e) {
  slideBar.style.left = e.currentTarget.offsetLeft + "px";
  slideBar.style.width = e.currentTarget.offsetWidth + "px";
  slideBar.style.top =
    e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
