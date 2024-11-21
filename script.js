const lampadinaOff = document.querySelector('.spenta')
const lampadinaOn = document.querySelector('.accesa')

const stanza = document.querySelector('.container')
const bottone = document.getElementById('interruttore')



bottone.addEventListener ('click', () =>{
  lampadinaOff.classList.toggle('d-hide');
  lampadinaOn.classList.toggle('d-hide');
  stanza.classList.toggle('bg-color')
  bottone.innerHTML = (lampadinaOff.classList.contains('d-hide')) ? 'Spegni' : 'Accendi'
})