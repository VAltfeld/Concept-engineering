window.addEventListener('load', () => {

  dlForm2 = document.querySelector('#dlForm2');

  const area = dlForm2.querySelector('#question-1');
  const hgt = dlForm2.querySelector('#question-2');
  const numberComputers = dlForm2.querySelector('#question-3');
  const numberMinds = dlForm2.querySelector('#question-4');
  const numberStrength = dlForm2.querySelector('#question-5');
  const choiceLight = dlForm2.querySelector('.choice-light .dropdown-menu');
  const choiceItem = dlForm2.querySelector('#choice-item');
  const result = dlForm2.querySelector('#result');

  let areaValue, hgtValue, numberComputersValue, numberMindsValue, numberStrengthValue, choiceLightValue, powerConditioner;

  const input = dlForm2.querySelectorAll('input');
  const inputEx = /[^0-9]/;

  input.forEach(item => {
    item.addEventListener('input', () => {
      if (inputEx.test(item.value)) {
        item.value = item.value.slice(0, -1);
      }
    });
  })

  area.addEventListener('input', () => {
    areaValue = area.value;
    powerConsider();  
  })

  hgt.addEventListener('input', () => {
    hgtValue = hgt.value;
    powerConsider();
  })

  numberComputers.addEventListener('input', () => {
    numberComputersValue = numberComputers.value;
    powerConsider();
  })

  numberMinds.addEventListener('input', () => {
    numberMindsValue = numberMinds.value;
    powerConsider();
  })

  numberStrength.addEventListener('input', () => {
    numberStrengthValue = numberStrength.value;
    powerConsider();
  })

  choiceLight.addEventListener('click', (event) => {
    event.preventDefault();
    
    choiceItem.placeholder = `${event.target.textContent} свет`;

    choiceItem.classList.add('item-completed');
    
    choiceLightValue = parseFloat(event.target.dataset.item);
    powerConsider();
  })

  function powerConsider() {

    powerConditioner = areaValue * hgtValue * choiceLightValue + numberComputersValue * 300 + numberMindsValue * 100 + numberStrengthValue * 150;
      if((areaValue === '') || (hgtValue === '') || (numberComputers === '') || (numberMindsValue === '') || (numberStrengthValue === '')) {
      result.value = `Заполните для расчета мощности все поля`;
    }
    else if(isNaN(powerConditioner)) {
      result.value = `Заполните для расчета мощности все поля`;
    }
    else {
      result.value = `Мощность кондиционера ${powerConditioner} Вт`;
    }  
  }

});