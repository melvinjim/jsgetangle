var data = function(){
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    if (hours <= 23 && hours >= 00 && minutes <= 59 && minutes >= 0 ) {
        console.log("At " + hours, " Hours", "with " + minutes, " Minutes", "there's an angle of:")
    } else {
            data = function(){
            document.getElementById('incorrect').style.display = 'flex';
        }
    }
}

