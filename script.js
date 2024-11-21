const lampadinaOff = document.querySelector('.spenta')
const lampadinaOn = document.querySelector('.accesa')

const stanza = document.querySelector('.lampadario')
const bottone = document.getElementById('interruttore')



bottone.addEventListener ('click', () =>{
  lampadinaOff.classList.toggle('d-hide');
  lampadinaOn.classList.toggle('d-hide'); 
  bottone.innerHTML = 'Spegni'
})