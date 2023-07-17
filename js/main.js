// Calcolo la data e l'ora di domani alle 9:30
const domani = new Date();
domani.setDate(domani.getDate() + 1);
domani.setHours(9);
domani.setMinutes(30);
domani.setSeconds(0);

// Funzione per aggiornare il countdown ogni secondo
function bigCd() {
  const now = new Date();
  const sottrazione = domani - now;

  // Calcolo il tempo rimanente
  const hours = Math.floor(sottrazione / (1000 * 60 * 60));
  const minutes = Math.floor((sottrazione % (1000 * 60 * 60)) / (1000 * 60)); //perchè il sedcondo diviso ?
  const seconds = Math.floor((sottrazione % (1000 * 60)) / 1000); //perchè il sedcondo diviso ?

  // CONSOLE LOG CD
  console.log(
    hours + " ore " + minutes + " minuti " + seconds + " secondi rimanenti"
  );

  const countdownElement = document.getElementById("bigcd");
  countdownElement.innerHTML =
    hours + " hours " + minutes + " minutes " + seconds + " seconds remaining";

  // Verifico se il countdown è terminato
  if (sottrazione <= 0) {
    console.log("Countdown terminato!");
    reset(countdownInterval);
    //STOP CD
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Countdown terminato!";
  }
}

// Aggiorno il countdown ogni secondo
let countdownInterval = setInterval(bigCd, 1000);

const element = document.getElementById("bigcd");
