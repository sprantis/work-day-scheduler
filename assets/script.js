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
let timeArray = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
let table = document.querySelector("#table");
let tableRow = document.createElement("<tr>");
let tableCell = document.createElement("<td>");

let hour = tableCell.setAttribute("class", "hour"); 

let textArea = document.createElement("<textarea>");
let description = textArea.setAttribute("class", "description");
let descriptionCell = tableCell.appendChild(description);

let btn = document.createElement("<button>");
let saveBtn = btn.setAttribute("class", "saveBtn");
let saveBtnCell = tabelCell.appendChild(saveBtn);

// // define a function then execute the function after its definition 
function timeBlock(){
    for( i = 0 ; i < timeArray.length; i++){
        tableRow.setAttribute("class", "time-block");
        hourCell.textContent = timeArray[i]
        tableRow.append(hourCell, descriptionCell, saveBtnCell);
        table.append(tableRow);
    }
}
timeBlock();
// For every hour, display a row that contains time, input field, and save button from hours 9am-5pm



