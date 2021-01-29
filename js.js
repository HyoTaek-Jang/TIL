const schedule = require("node-schedule");

let a = schedule.scheduleJob("/5 * * * * *", () => {
  console.log("5");
});
