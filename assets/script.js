// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Defined Variables
// // array of time between 9am-5pm
let timeArray = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
let table = document.querySelector("#table");

// // define a function then execute the function after its definition
function timeBlock() {
  let j = 9;
  for (i = 0; i < timeArray.length; i++) {
    let tableRow = document.createElement("tr");
    let tableCell1 = document.createElement("td");

    let hourCell = document.createElement("p");
    hourCell.setAttribute("class", "hour");

    let tableCell2 = document.createElement("td");
    tableCell2.setAttribute("class", "box");
    let textArea = document.createElement("textarea");
    textArea.setAttribute("class", "description");
    textArea.setAttribute("id", j);
    j++;
    tableCell2.appendChild(textArea);

    let tableCell3 = document.createElement("td");
    let btn = document.createElement("button");
    btn.setAttribute("class", "saveBtn");
    btn.textContent = "save";
    btn.addEventListener("click", saveBtn);
    tableCell3.appendChild(btn);

    tableRow.setAttribute("class", "time-block");

    hourCell.textContent = timeArray[i];
    tableCell1.append(hourCell);

    tableRow.append(tableCell1, tableCell2, tableCell3);
    table.append(tableRow);
    // console.log(tableRow);
  };
//   console.log(timeArray);
}
timeBlock();
// For every hour, display a row that contains time, input field, and save button from hours 9am-5pm
function saveBtn(event){
  console.log(event.target);
//   let input = event.target.closest("textarea").value;
//   let hour =  event.target.closest("textarea").getAttribute("id")
  console.log(input, hour);
}