let dateTime = $("#currentDay").text(
  moment().format("MMMM Do YYYY, h:mm:ss a")
);

// Array of time between 9am-5pm
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

// Code below created with the assistance from tutor Sangeetha Kaliaperumal
// Generate timeBlock for each business hour
function timeBlock() {
  let j = 9;
  for (i = 0; i < timeArray.length; i++) {
    let tableRow = document.createElement("tr");

    let tableCell1 = document.createElement("td");
    let hourCell = document.createElement("p");

    let tableCell2 = document.createElement("td");
    let textArea = document.createElement("textarea");

    let tableCell3 = document.createElement("td");
    let btn = document.createElement("div");

    tableCell1.setAttribute("class", "col-1 p-0");
    hourCell.setAttribute("class", "hour d-flex align-items-center");

    tableCell2.setAttribute("class", "col-10 box p-0 border-0");
    textArea.setAttribute("class", "description ");
    textArea.setAttribute("id", j);
    j++;
    tableCell2.appendChild(textArea);

    tableCell3.setAttribute("class", "p-0 border-0");
    btn.setAttribute("class", "saveBtn");
    btn.innerHTML = '<i class="fas fa-save"></i>';
    btn.addEventListener("click", saveBtn);
    tableCell3.appendChild(btn);

    tableRow.setAttribute("class", "time-block");

    hourCell.textContent = timeArray[i];
    tableCell1.append(hourCell);

    tableRow.append(tableCell1, tableCell2, tableCell3);
    table.append(tableRow);
  }

  // for loop to grab saved data from local storage set it as the value for the textarea element
  for (let i = 9; i < 17; i++) {
    let locstorage = localStorage.getItem(i);
    let element = document.getElementById(i);
    element.value = locstorage;
  }
}

timeBlock();

function saveBtn() {
  let input = $(this).parent().siblings(".box").children(".description").val(); //event.target.closest("textarea").value;
  let hour = $(this)
    .parent()
    .siblings(".box")
    .children(".description")
    .attr("id"); //event.target.parentNode..getAttribute("id")
  localStorage.setItem(hour, input);
}

// Apply color code to textarea when compared to current time
function tbColor(element) {
  let hourValue = parseInt(element.attr("id"));
  const currentTime = parseInt(moment().format("H"));
  if (hourValue < currentTime) {
    element.addClass("past");
  } else if (hourValue > currentTime) {
    element.addClass("future");
  } else {
    element.addClass("present");
  }
}

// Run a check for each time block, particularly the textarea element in each block
function checkTime() {
  $("textarea").each(function () {
    tbColor($(this));
  });
}

checkTime();
