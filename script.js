const time = document.getElementById("time");
const date = document.getElementById("date");

const now = new Date();
const weekday = now.toLocaleDateString("fa-IR", {
  weekday: "long",
});
const month = now.toLocaleDateString("fa-IR", {
  month: "long",
});
const day = now.toLocaleDateString("fa-IR", {
  day: "numeric",
});
const year = now.toLocaleDateString("fa-IR", {
  year: "numeric",
});
setInterval(showTime, 1000);
function showTime() {
  const times = new Date();
  const second = times.getSeconds();
  const minute = times.getMinutes();
  const hour = times.getHours();
  time.textContent = persianNumber(`${formatNumber(hour)}:${formatNumber(minute)}:${formatNumber(second)}`);
}

date.innerHTML = `${weekday} ، ${day} ${month} ${year}`;

function persianNumber(string) {
  const number = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let newString = "";
  for (let char of string) {
    if (char >= 0 && char <= 9) {
      newString += number[char];
    } else {
      newString += char;
    }
  }
  return newString;
}

function formatNumber(number) {
  if (number > 10) {
    return number;
  } else {
    return "0" + number;
  }
}
