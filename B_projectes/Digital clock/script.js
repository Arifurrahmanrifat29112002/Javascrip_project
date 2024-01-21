// Selectors
const hoursSet = document.querySelector(".hours");
const minSet = document.querySelector(".min");
const secSet = document.querySelector(".sec");
const amPmSet = document.querySelector(".ampm");
const dateBox = document.querySelector(".dateBox");

const displayTime = () => {

    // Get the current time
    const now = new Date();

    const timezone = 'Asia/Dhaka';
    // Set the timezone
    const options = { timeZone: timezone };

    // Format the time in the specified timezone
    const formattedTime = now.toLocaleTimeString('en-US', options);

    // Convert the formatted string back to a Date object
    const time = new Date("2000-01-01 " + formattedTime);

    let  hour = (time.getHours() === 0) ? 12 : (time.getHours() > 12) ? time.getHours() - 12 : time.getHours();

    // if (time.getHours() == 0) {
    //     hour = 12;
    // }else if(time.getHours() > 12 ){
    //     hour = hour - 12;
    // }else{
    //     hour = time.getHours()
    // }
   
    let min = zero(time.getMinutes());
    let sec = zero(time.getSeconds());
    let ampm = hour >= 12 ? 'pm' : 'am';
    // let monthbox = now.getDate;

    // Now  update the content of HTML elements
    hoursSet.textContent = zero(hour);
    minSet.textContent = min;
    secSet.textContent = sec;
    amPmSet.textContent = ampm;


    dateBox.innerHTML = `<span>${now.getDate()}-${now.getMonth()}-${now.getFullYear()}</span>`;

}

const zero = (i) => {
    if (i < 10) {
        i = "0"+i;
    }
    return i;
}

setInterval(displayTime, 1000);
