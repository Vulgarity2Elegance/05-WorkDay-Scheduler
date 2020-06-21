// Using Moment.js dynamically update time in seconds
setInterval(() => {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);

// Creating corresponding variables which means 9 = 9am - schedule
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const SCHEDULES = [
    //
    "9am-schedule",
    "10am-schedule",
    "11am-schedule",
    "12pm-schedule",
    "1pm-schedule",
    "2pm-schedule",
    "3pm-schedule",
    "4pm-schedule",
    "5pm-schedule",
];

const now = moment(); // Get the current time according to moment.js Docs.

// Coloring the textarea block
function renderDisplay() {
    for (let i = 0; i < 9; i++) {
        $("#" + SCHEDULES[i]).val(localStorage.getItem(SCHEDULES[i]));

        if (HOURS[i] < now.hour()) {
            $("#" + SCHEDULES[i]).addClass("past");
        } else if (HOURS[i] === now.hour()) {
            $("#" + SCHEDULES[i]).addClass("present");
        } else {
            $("#" + SCHEDULES[i]).addClass("future");
        }
    }
}

renderDisplay();

// Saving plans to local storage by clicking button
$(".saveBtn").on("click", function () {
    const getID = $(this).data("id");
    const plan = $("#" + getID + "-schedule").val();
    localStorage.setItem(getID + "-schedule", plan);
});
