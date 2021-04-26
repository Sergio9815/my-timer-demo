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


btn1.addEventListener('click',(e) => {
  init.start()
})

btn2.addEventListener('click',(e) => {
  init.pause()
})

btn3.addEventListener('click',(e) => {
  init.stop()
  init.start()
})

btn4.addEventListener('click',(e) => {
  init.stop()
})
