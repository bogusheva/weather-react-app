export function formatDate(arg) {
  let now = arg;
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0".concat(hours);
  }
  if (minutes < 10) {
    minutes = "0".concat(minutes);
  }
  return "".concat(days[day], ", ").concat(hours, ":").concat(minutes);
}
