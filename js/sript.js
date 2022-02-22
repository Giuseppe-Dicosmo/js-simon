// Genera 5 numeri random eliminando i doppioni
let arrayRandom;

function random (generatore, min, max) {
  let arrayRandom = [];


  do {
    const num = getRandomIntInclusive(min, max);

    if (!arrayRandom.includes(num)) {

      arrayRandom.push(num);

    }
  } while (arrayRandom.length < generatore)

  return arrayRandom;
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

arrayRandom = random(5, 1, 100);
console.log("arrayRandom", arrayRandom)

// Chiediamo all'utente
const userNum = alert(`Ciao ricorda questi 5 numeri "${arrayRandom.join(' - ')}"`);

const clock = setTimeout(correction, 3000);

 // funzioni numeri utente
  function userNumber () {

  let user;

  // lista numeri utente
  const userInse = []

    do {

    //Chiediamo all'utente di inserire un numero
    user = parseInt(prompt('Bene ora inserisci quei 5 numeri che hai visto'));
      // console.log("user", user)

    // Se l'utente sbaglia viene visualizzato l'errore in caso contrario viene pushato nella lista
    if (isNaN(user)) {
      alert('Errore')
    } else {
      userInse.push(user)
    }

    } while(userInse.length < arrayRandom.length);

    return userInse;
  }

  // correzione
  function correction() {

    const userArray = userNumber()
    console.log("userArray", userArray)

    const verifica = []

    userArray.forEach(function (element) {

      // console.log("indice", index)

      if(arrayRandom.includes(element)){
        verifica.push (element)
      }

    });

    console.log("verifica", verifica)

    // risposte che diamo
    if (verifica.length === 0) {
      alert('Non hai indovinato nessun numero')
    } else if (verifica.length === 1) {
      alert(`Hai indovinato un solo numero ${verifica}`)
    } else {
      alert(`Hai indovinato questi numeri ${verifica.join(' - ')}`)
    }

  }
