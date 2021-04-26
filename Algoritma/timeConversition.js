function timeConversion(s) {
    let arr = s.split(":");
    let arr2 = arr[2].split('');
    let hour = parseInt(arr[0]);
    if(arr2[2] === 'P' && hour !== 12) {
        hour += 12;
        return `${hour}:${arr[1]}:${arr2[0]}${arr2[1]}`
    } else if(arr2[2] === 'A' && hour === 12) {
        hour = '00';
        return `${hour}:${arr[1]}:${arr2[0]}${arr2[1]}`
    } else {
        return `${arr[0]}:${arr[1]}:${arr2[0]}${arr2[1]}`
    }
}

let s = '12:05:45PM'

console.log(timeConversion(s));