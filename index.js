const getTimezoneOffset = require('date-fns-tz/getTimezoneOffset');

const testDate = new Date("2022-10-31T06:00:00.000Z");

const offsetInMs = getTimezoneOffset("Asia/Amman", testDate);
const offsetInMinutes = offsetInMs / 1000 / 60; 

console.log(`received: `, offsetInMinutes, "minutes, expected: ", 180, " minutes (UTC+3)");