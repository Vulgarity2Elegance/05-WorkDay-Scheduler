// Using Moment.js dynamically update time in seconds
setInterval(() => {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);
