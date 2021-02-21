window.addEventListener('load', () => {
    setInterval(getTime, 1000);
    startTime()
    checkTime()
});



function startTime() {
    let hoy = new Date();
    let horas = hoy.getHours();
    let min = hoy.getMinutes();
    let sec = hoy.getSeconds();
    ap = (horas < 12);
    horas = (horas == 0) ? 12 : horas;
    horas = (horas > 12) ? horas - 12 : horas;


    horas = checkTime(horas);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("hora").innerHTML = horas + ":" + min + ":" + sec + " ";


    let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'];
    let dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado'];
    let fechaDiaSemana = dias[hoy.getDay()];
    let fechaDia = hoy.getDate();
    let fechaMes = months[hoy.getMonth()];
    let fechaAño = hoy.getFullYear();
    let date = fechaDiaSemana+", "+fechaDia+" "+fechaMes+" "+fechaAño;
    document.getElementById("fecha").innerHTML = date;
    
    let time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getTime(){
	const secondHand = document.querySelector('.manecillaSeg');
	const minuteHand = document.querySelector('.manecillaMin');
	const hourHand = document.querySelector('.manecillaHor');

	const now = new Date();
   
	/** SECONDS */
  	const seconds = now.getSeconds();
	/** Get seconds degrees from date */
  	const secondsDegrees = ((seconds / 60) * 360) + 90;
  
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
	if (secondsDegrees === 90) {
		secondHand.style.transition = 'none';
	} else if (secondsDegrees >= 91) {
		secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
	}

   	/** MINUTES */
  	const minutes = now.getMinutes();
  	/** Get minutes degrees from date */
	const minutesDegrees = ((minutes / 60) * 360) + 90;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
	/** HOURS */
  	const hours = now.getHours();
  	/** Get hours degrees from date */
  	const hoursDegrees = ((hours / 12) * 360) + 90;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
