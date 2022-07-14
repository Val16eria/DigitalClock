window.addEventListener('load', calculateTime)

function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var sec = date.getSeconds();
    var ampm = hour >= 12 ? 'ВЕЧЕР' : 'УТРО';
    var dayNames = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    hour = hour % 12;
    hour = hour ? 12 : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("ampm").innerHTML = ampm;

    setTimeout(calculateTime, 200);
}
