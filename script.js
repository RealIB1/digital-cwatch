const showTime = () => {
    const clockTime = new Date();
    
    let hrs = clockTime.getHours();
    let mins = clockTime.getMinutes();
    let secs = clockTime.getSeconds();
    let ss = 'AM'

    if (hrs > 12) {
        hrs = hrs - 12
        ss = 'PM'
    }
    
    // if(hrs == 0) {
    //     hrs = 12
    // }
    
    hrs = updateTime(hrs);
    mins = updateTime(mins);
    secs = updateTime(secs);

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let months = ['Jan', 'Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec']
    let day = days[clockTime.getDay()];
    let m_day = clockTime.getDate();
    let month = months[clockTime.getMonth()];
    let year = clockTime.getFullYear();

    
    document.getElementById('clock').innerHTML = ` ${hrs}:${mins}:${secs} ${ss}`;
    setTimeout(showTime, 1000);

    document.getElementById('date').innerHTML = `${day},  ${month} ${m_day}, ${year}`;
}

const updateTime = (i) => {
    if (i < 10) {
        i = '0' + i;
    }
    return i
}


