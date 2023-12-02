// CARDS DINÂMICOS - ARRAY DE OBJETOS COM OD DADOS DOS CARDS SIMULANDO UM BD
const card = [
  {
    id: 1,
    img: 'comeco2.jpeg',
    descricao: 'Neste dia eu não sai do ombro da minha mãe...'
  },
  {
    id: 2,
    img: 'estudioso.jpeg',
    descricao: 'Aqui eu estava começando a aprendrer a ler...'
  },
    {
    id: 3,
    img: 'raiva.jpeg',
    descricao: 'Este dia foi mais recente, só passei raiva com o povo dessa casa!'
  },
  {
    id: 4,
    img: 'hilario.jpeg',
    descricao: 'Esse dia a Joice me pegou vindo do telhado kkk...'
  },
  {
    id: 5,
    img: 'comeco4.jpeg',
    descricao: 'Este é meu irmão, que acolheu quando eu cheguei...(contém irônia)...'
  },
  {
    id: 6,
    img: 'suzy.jpeg',
    descricao: 'Essa é minha irmã (não pq eu quero), o nome dela é Suzy e eu acolhi ela quando ela foi resgatada das drogas...(não contém irônia)...'
  },
  {
    id: 7,
    img: 'joy.jpeg',
    descricao: 'Essa é a Joice minha prima, dela eu gosto pq não me enche o saco, só por isso também...'
  },
  {
    id: 8,
    img: 'bia.jpeg',
    descricao: 'Essa dia peguei a Bia (minha prima, não pq eu quero) babando kkk...achei vergonhoso kkk...'
  },
  {
    id: 9,
    img: 'isa.jpeg',
    descricao: 'Essa é a Isa mundicenta (minha prima, não pq eu quero) meu tormento diário... mas eu goto dela + ou - ...'
  },
  {
    id: 10,
    img: 'maria2.jpeg',
    descricao: 'Essa é a Inhonha Maria (minha prima, não pq eu quero) e eu amo e aqui contém muuuita irônia :)...'
  },
  {
    id: 11,
    img: 'mae.jpeg',
    descricao: 'E aqui o amor e razão da minha existência... Miãe...'
  }
]

for (const allCards of card) {
  const cardContent = `
  <div class="card">
    <div class="img">
      <img 
      src="images/${allCards.img}" 
      alt="">
    </div>
    
    <div class="descricao">
      <p>${allCards.descricao}</p>
    </div>
  </div>
  `;

document.getElementById('eu').innerHTML += cardContent;
}

// ====================================================================================
let tela = document.querySelector('main')
let btnLight = document.querySelector('#btnlight')
let btnDark = document.querySelector('#btndark')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
  console.log('modo dark...')
  tela.classList.add("dark")
  tela.classList.remove("light")
}

function modoLight() {
  console.log('modo light')
  tela.classList.add("light")
  tela.classList.remove("dark")
}
