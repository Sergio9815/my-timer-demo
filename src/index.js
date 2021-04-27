import Timer from './libs/mytimer.min.js'

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')

const init = new Timer({
  // USE HTML ELEMENT ID
  idContainer: 'timerJS',  
  // THE TYPE OF TIMER TO USE IS INDICATED
  // HOURS:MINUTES:SECONDS | 00:00:00
  // MINUTES:SECONDS | 00:00
  timerFormat: '00:00:00' 
});

const iniciar = () => {
  init.start()
  btn1.removeEventListener('click', iniciar, true)
  btn1.classList.add('active')
}

const addListenerBtn = () => {
  btn1.classList.remove('active')
  btn1.addEventListener('click', iniciar, true)
}

btn1.addEventListener('click', iniciar, true)

btn2.addEventListener('click',(e) => {
  init.pause()
  addListenerBtn()
})

btn3.addEventListener('click',(e) => {
  init.stop()
  init.start()
})

btn4.addEventListener('click',(e) => {
  init.stop()
  addListenerBtn()
})
