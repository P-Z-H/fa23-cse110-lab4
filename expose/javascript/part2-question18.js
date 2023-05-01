function funcTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();

    console.log(time);
}

setInterval(funcTime, 1000)