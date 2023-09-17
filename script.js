const userInput = document.querySelector('.input-box');
const button = document.querySelector('.go-button');
const resultContainer = document.querySelector('.result');
const progressBar = document.querySelector('.progressbar');
const progressFill = document.querySelector('.progressfill');
const texts = ['Analyzing data...', 'Getting information...', 'Using complex algorithm...', 'Hacking your phone...', 'Getting the result...', 'Reading your mind...', 'Calculating result...', 'Finalizing...']

let i = 0;
let percent = 12.5;
let v;
function readIt () {
  
  v = userInput.value;
  userInput.value = '';
  console.log(v);

  if (!isNaN(v) && v != ''){
    resultContainer.style.display = 'flex';

    intervalId = setInterval(()=> {
      if (i<=7){
        const html = `<p>${texts[i]}</p>
          `
        resultContainer.innerHTML=html;
        progressBar.style.opacity = 1;
        progressFill.style.width = `${percent}px`;
        percent = percent + 12.5;
        ++i;
      } else {
        finalResult();
        progressBar.style.opacity = 0;
        clearInterval(intervalId);
      }

    }, 1000);
  } else {
    alert('Enter a valid number');
  }

  function finalResult() {
    console.log('activated');
    const html = `<p>Sucess!</p>
    <p>You are thinking of number ${v}!</p>
    <button class = 'againbtn' onclick="redo()">Again</button>`;
    resultContainer.innerHTML=html;
  }
}

function redo () {
  i = 0;
  percent = 12.5;
  resultContainer.style.display = 'none';
  resultContainer.innerHTML='';
}