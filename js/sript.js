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

const clock = setTimeout(userNumber, 3000);

  function userNumber () {

    let user;

    const userInse = []
    console.log("🚀 userInse", userInse)


    do {

      user = parseInt(prompt('Bene ora inserisci quei 5 numeri visto'));
      // console.log("user", user)

      if (isNaN(user)) {
        alert('Quello che ai inserito non è un numero')
      } else {
        userInse.push(user)
      }

    } while(userInse.length < arrayRandom.length);

    return userInse;
  }


