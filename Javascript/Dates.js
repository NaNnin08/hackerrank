function getDayName(dateString) {
    let dayName;
    let day = new Date(dateString);
    let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayName = weekDays[day.getUTCDay()];  
    return dayName;
}

console.log(getDayName(10/11/2009));