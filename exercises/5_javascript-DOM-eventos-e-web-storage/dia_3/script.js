function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//exercicio 1

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let daysList = document.getElementById('days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let daysItem = document.createElement('li');
    daysItem.className = 'day';  
    daysItem.innerText = dezDaysList[i];

    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      daysItem.classList.add('holiday');
    }
    
    if (i === 5 || i === 12 || i === 19 || i === 26) {
      daysItem.classList.add('friday');
    }

    daysList.appendChild(daysItem);
  }
}

createDaysOfMonth();

//exercicio 2

function createButton(string) {
  let button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-holiday';
  let buttonsContainer = document.querySelector('.buttons-container');

  buttonsContainer.appendChild(button);
}

createButton('Feriados');

//exercicio 3
function holidays() {
  let button = document.getElementById('btn-holiday');
  let days = document.querySelectorAll('.holiday');
  button.addEventListener('click', holidayClick);

  function holidayClick() {

    for (let index of days){
      if(index.style.background === '#eee') {
        index.style.background = 'grey';
      } 
      if(index.style.background === 'bisque') {
        index.style.background = '#eee';
      }
    }
  }
}

holidays();