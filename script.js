const lampadina = document.querySelector('spenta')

const bottone = document.getElementById('interruttore')



bottone.addEventListener ('click', () =>{
  lampadina.classList.add('d-hide');
})