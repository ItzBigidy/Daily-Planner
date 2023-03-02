

// makes it so that all the code that interacts with the DOM is called to jquery 
// first, to insure code isn't run until the browser finishes rendering the HTML
// elements
$(document).ready(function () {

  // event listener for the save buttons
  $(".saveBtn").on("click", function () {

    // takes the values/text of the text area and the corresponding id the text
    // was written in
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // sets the time and text variables as key value pairs in local storage
    localStorage.setItem(time, text);
  });

  // function to find the current hour and set the background color depending on
  // past, present, or future
  function hourTracker() {

    // gets value of current hour using dayjs
    var currentHour = dayjs().$H;

    // creates a loop that goes through each div containing the class .time-block
    // and adds or removes a class depending on the current time. The class is
    // linked to the bootstrap API and applies a color respectively.
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockHour, currentHour);

      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  
  // calls the hourtracker function
  hourTracker();
  
  // Getting values from local storage through they respective key and setting
  // them in the text area
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  //
});

// function for setting the current date on the page and updating it every 40
// seconds to stay relatively up to the current time
function getTime() {
  var now = dayjs().format("ddd  MMMM D, YYYY h:mmA");
  let currentDay = document.getElementById("currentDay");

  currentDay.textContent = now;
  setInterval(getTime, 40000);
}
console.log(dayjs());
getTime();
