
const get_element = (my_class) => {
    return document.querySelector(my_class);
};


setInterval(() => {
    
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    const hh = document.getElementById('hour_circle');
    const mm = document.getElementById('minute_circle');
    const ss = document.getElementById('second_circle');

    h = (h < 10) ? `0${h}` : h;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;

    hours.innerHTML = `${h}<br><span>Hours</span>`;
    minutes.innerHTML = `${m}<br><span>Minutes</span>`;
    seconds.innerHTML = `${s}<br><span>Seconds</span>`;
    
    hh.style.strokeDashoffset = 440 - (440 * h) / 25;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    
    get_element('.hr_dot').style.transform = `rotate(${(h * 30)}deg)`;
    get_element('.min_dot').style.transform = `rotate(${(m * 6)}deg)`;
    get_element('.sec_dot').style.transform = `rotate(${(s * 6)}deg)`;
    
}, 1000);
