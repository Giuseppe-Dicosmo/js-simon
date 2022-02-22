// Genera 5 numeri random eliminando i doppioni
function random (generatore, min, max) {
  let arrayRandom = [];

  do {
    const num = getRandomIntInclusive(min, max)

    if (!arrayRandom.includes(num)) {

      arrayRandom.push(num)

    }
  } while (arrayRandom.length < generatore)

  return arrayRandom
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

arrayRandom = random(5, 1, 100)
console.log("arrayRandom", arrayRandom)

// Chiediamo all'utente
const utente = alert(`Ciao ricorda questi 5 numeri "${arrayRandom.join(' - ')}"`)