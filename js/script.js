  
let status = 1 //status 1 menunjukkan default awal, celcius ke fahrenheit


let calculation;

// this function is used to calculate the temperature conversion
  function calculateTemperature (inputValue) {
    let inputElement = document.querySelector('.js-input-value');
    inputValue = inputElement.value;
    let outputElement = document.querySelector('.js-output-button');
    let calculationArea = document.querySelector('.js-calculation-area');
    let shortcutElement = document.querySelector('.js-shortcut-button');
    
    if (inputValue === '') {
      inputValue = 0;
    }

    if (status === 1) {
    calculation = inputValue * (9/5) + 32;
    outputElement.value = calculation.toFixed(1); // .toFixed untuk mengatur jumlah desimal
    calculationArea.value = `(${inputValue}°C x 9/5) + 32 = ${outputElement.value}°F`;
    shortcutElement.innerHTML = 'Fahrenheit to Celcius';
    return status = 1;

    } else if (status === 2) {
    calculation = (inputValue - 32) * (5/9);
    outputElement.value = calculation.toFixed(1);
    calculationArea.value = `(${inputValue}°F - 32) x 5/9 = ${outputElement.value}°C`;
    shortcutElement.innerHTML = 'Celcius to Fahrenheit';
    return status = 2;
    }
  }

  //this function is used to reverse between celcius and fahrenheit, vice versa.
  function Reverse () { 
    let celciusElement = document.querySelector('.js-celcius')
    let fahrenheitElement = document.querySelector('.js-fahrenheit')
    let unitCelciusElement = document.querySelector('.js-unit-celcius')
    let unitFahrenheitElement = document.querySelector('.js-unit-fahrenheit')
    if (status === 1) {
    celciusElement.innerHTML = 'Fahrenheit';
    fahrenheitElement.innerHTML = 'Celcius';
    unitCelciusElement.innerHTML = '&deg;F'
    unitFahrenheitElement.innerHTML = '&deg;C'
    status = 2;
    } else if (status === 2) {
      celciusElement.innerHTML = 'Celcius';
    fahrenheitElement.innerHTML = 'Fahrenheit';
    unitCelciusElement.innerHTML = '&deg;C'
    unitFahrenheitElement.innerHTML = '&deg;F'
    status = 1;
    }
    calculateTemperature();
  }

  // this function is used to reset all value.
  function Reset() {
    let showCalculationElement = document.querySelector('.js-show-calculation');
    let calculationArea = document.querySelector('.js-calculation-area');
    let inputElement = document.querySelector('.js-input-value');
    let outputElement = document.querySelector('.js-output-button');
    inputValue = inputElement.value;
    let explanationElement = document.querySelector('.js-explanation-area');

    if (status === 1) {
    calculationArea.value = '';
    outputElement.value = '';
    inputElement.value = '';
    explanationElement.innerHTML = ``;

    } else if (status === 2) {
    calculationArea.value = '';
    outputElement.value = '';
    inputElement.value = '';
    explanationElement.innerHTML = ``;
    }
    showCalculationElement.innerHTML ='';
  }

  // this function is used to call explanation box and shortcut link for reverse.
  function showExplanationBox() {
  let explanationElement = document.querySelector('.js-explanation-area');
  explanationElement.innerHTML = `
<section class="section3">
  <u class="calculation-text" style="
  color:#4F7942;
  margin-bottom: 15px;
  ">
  Calculation
  </u>

  <input type="textarea" class="calculation-area js-calculation-area">

  <p class="shortcut-button js-shortcut-button" onclick="
  Reverse();
  showCalculation();
  "
  >
  </p>

</section>
`
}

//this function is used to call the full explanation about how to convert the temperature from one unit to other unit.
function showCalculation() {
  let showCalculationElement = document.querySelector('.js-show-calculation');
  if (status === 1) {
    showCalculationElement.innerHTML = `
<section class="section4"> 
  <u style="color: #4F7942;">
    How to convert from Celcius &deg;C to Fahrenheit &deg;F
  </u>

  <p>
    Suhu <i class="size-big">S</i> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <i class="size-big">S</i> dalam derajat Celcius (&deg;C) kali 9/5 tambah 32.
  </p>

  <p>
    <i class="size-big">S</i><sub>(&deg;F)</sub> =(<i class="size-big">S</i><sub>(&deg;C)</sub> x 9/5) + 32
  </p>

  <p>
    atau
  </p>

  <p>
    <i class="size-big">S</i><sub>(&deg;F)</sub> =(<i class="size-big">S</i><sub>(&deg;C)</sub> x 1.8) + 32
  </p>

</section>
    `
  } else if (status === 2) {
    showCalculationElement.innerHTML = `
<section class="section4"> 
  <u style="color: #4F7942;">
    How to convert from Fahrenheit &deg;F to Celcius &deg;C
  </u>

  <p>
    Suhu <i class="size-big">S</i> dalam derajat Celcius (&deg;C) sama dengan suhu <i class="size-big">S</i> dalam derajat Fahrenheit (&deg;F) kurang 32 kali 5/9.
  </p>

  <p>
    <i class="size-big">S</i><sub>(&deg;C)</sub> =(<i class="size-big">S</i><sub>(&deg;F)</sub> - 32 ) x 5/9
  </p>

  <p>
    atau
  </p>

  <p>
    <i class="size-big">S</i><sub>(&deg;C)</sub> =(<i class="size-big">S</i><sub>(&deg;F)</sub> - 32 ) x 0.55
  </p>

</section>
    `
  }
}

// this method is used to command keyboard key.
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
      showExplanationBox();
      calculateTemperature();
      showCalculation();
  }

  if (event.key === 'Delete') {
        Reset();
  }
});
