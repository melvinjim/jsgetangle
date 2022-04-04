var data = function(){
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    var operation = ( hours <= 12 && hours >= 1 && minutes <= 59 && minutes >= 0 );

    if (operation) {
        document.getElementById("text-h-m").innerHTML = "At " + hours + " Hours " + "with " + minutes + " Minutes" + " there's an angle of:";
        hours = parseInt(hours);
        minutes = parseInt(minutes);

        var calculoM = (minutes / 60);
        var total = calculoM + hours;
        var horas_totales = (total * 30);
        var min_grados = (minutes * 6);
        var total= (min_grados - horas_totales);
        var integer =  Math.trunc(total);

        if(total < 0){
            var conversion = (integer * -1);
            document.getElementById("grados").textContent= conversion+"º";
        } else {
            document.getElementById("grados").textContent= total+"º";
        }
    } if (operation){
        document.getElementById('incorrect').style.display = 'none';
        
    } else {
        document.getElementById('incorrect').style.display = 'flex';
    }
}

var changes = function(){
    var box = document.getElementById('h-m-block');
    var style = getComputedStyle(box);

    if(style.display == "flex"){
        box.style.cssText = 'display: block;';
    } else {
        box.style.cssText = 'display: flex;';
    }
}