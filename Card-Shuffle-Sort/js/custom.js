let cardsListArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

let mainSection = document.getElementById('cardsSection');

cardsListArray.forEach((listItem, i) => {
  mainSection.innerHTML += '<li card-values=' + listItem + '>' + listItem + '</li>';
})

// shuffle Cards funtion
shuffleCards = () => {
  let i = 0;
  cardsListArray = cardsListArray.sort(() => { return .4 - Math.random() });
  mainSection.innerHTML = '';
  while (i < cardsListArray.length) {
    let mainItem = document.createElement("li");
    mainItem.innerHTML = cardsListArray[i];
    mainItem.setAttribute('card-values', cardsListArray[i]);
    mainSection.appendChild(mainItem);
    i++;
  }
}

// sorting shuffled card function
sortCards = () => {
  let j = 0;
  cardsListArray = cardsListArray.sort((a, b) => { return a - b });
  mainSection.innerHTML = '';
  while (j < cardsListArray.length) {
    let mainItem = document.createElement("li");
    mainItem.innerHTML = cardsListArray[j];
    mainItem.setAttribute('card-values', cardsListArray[j]);
    mainSection.appendChild(mainItem);
    j++;
  }
}

