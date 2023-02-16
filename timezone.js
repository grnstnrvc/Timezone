const d = new Date();
const timezoneOffset = d.getTimezoneOffset();

// Convert the timezone offset to hours and minutes
const hours = Math.floor(Math.abs(timezoneOffset) / 60);
const minutes = Math.abs(timezoneOffset) % 60;

// Construct the timezone string
const timezone = timezoneOffset < 0 ? "+" : "-";
const timezoneString = `UTC${timezone}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

// Log the timezone
console.log(`Your timezone is ${timezoneString}`);
