var data = function(){
    var hours = document.getElementById("hours").value;
    var minutes = document.getElementById("minutes").value;
    if (hours <= 23 && hours >= 00 && minutes <= 59 && minutes >= 0 ) {
        document.getElementById("text-h-m").textContent= "At " + hours + " Hours " + "with " + minutes + " Minutes" + " there's an angle of:"
        hours = parseInt(hours)
        minutes = parseInt(minutes)
        var calculoM = (minutes / 60)
        var total = calculoM + hours
        var horas_totales = (total * 30)
        var min_grados = (minutes * 6)
        var total= (min_grados - horas_totales)
        if(total < 0){
         var conversion = (total * -1)
         document.getElementById("grados").textContent= conversion+"º";
        }else{
            document.getElementById("grados").textContent= total+"º";
        }
    } 
    else if (hours <= 23 && hours >= 00 && minutes <= 59 && minutes >= 0){
            data = function(){
            document.getElementById('incorrect').style.display = 'none';
        }
    }else{
        data = function(){
            document.getElementById('incorrect').style.display = 'flex';
        }
    }
}

var change = function(){

}