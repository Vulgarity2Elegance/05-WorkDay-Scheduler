// Using Moment.js dynamically update time in seconds
setInterval(() => {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);

// Coloring the textarea block
function render() {
    const SCHEDULE = [
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

    const HOUR = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    const now = moment();

    for (let i = 0; i < 9; i++) {
        if (HOUR[i] < now.hour()) {
            $("#" + SCHEDULE[i]).addClass("past");
        } else if (HOUR[i] === now.hour()) {
            $("#" + SCHEDULE[i]).addClass("present");
        } else {
            $("#" + SCHEDULE[i]).addClass("future");
        }
    }
}

render();
