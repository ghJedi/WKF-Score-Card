
/* 
Reference naming: aka = red; ao = blue.
Used for 2 contestants in a match.
*/

let akaScore = 0;
let aoScore = 0;
const container = document.querySelector('.container');
const akaDisplay = document.querySelector('.aka-display');
const aoDisplay = document.querySelector('.ao-display');
const reset = document.querySelector('.btn-reset');
const btnMatchtimer2 = document.querySelector('.btn-mt-2');
const btnMatchtimer3 = document.querySelector('.btn-mt-3');
let startingMinutes = 2 ;
let time = startingMinutes * 60;
const countDown = document.querySelector('.timer-display');

// listens for anything clicked within the container

container.addEventListener('click', function(e) {
  const target = e.target;
  const akaPts = target.dataset.akaPts;
  const aoPts = target.dataset.aoPts;

  if (akaPts) {
    akaScore += +akaPts;
    akaDisplay.textContent = akaScore;  
  }

  if (aoPts) {
    aoScore += +aoPts;
    aoDisplay.textContent = aoScore;  
  }
})

// Reset Button

reset.addEventListener('click', function(){
  window.location.reload();
})

// 2-minute Match Button
btnMatchtimer2.addEventListener('click', function(){
  setInterval(updateCountDown2, 1000);
  updateCountDown2();
  btnMatchtimer2.style.backgroundColor = "#000";
  btnMatchtimer2.style.color = "#fff";
})

// 3-minute Match Button
btnMatchtimer3.addEventListener('click', function(){
  const btn3min = document.querySelector('.btn-mt-3');
  setInterval(updateCountDown3, 1000);
  updateCountDown3();
  btnMatchtimer3.style.color = "#fff";
  btnMatchtimer3.style.backgroundColor = "#000";
})

function updateCountDown2() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countDown.innerHTML = `${minutes}: ${seconds}`;
  time--;
  
  // stops timer at 0 and visually resets match buttons
  if (time < 0){
    time = `0`;
    btnMatchtimer2.style.backgroundColor = "transparent";
    btnMatchtimer2.style.color = "#000";
    return;
  }
}

// duplicate function of updateCountDown2() for 3-minute match button
function updateCountDown3() {
  let startingMinutes = 3;
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countDown.innerHTML = `${minutes}: ${seconds}`;
  time--;
  if (time < 0){
    time = `0`;
    btnMatchtimer3.style.backgroundColor = "transparent";
    btnMatchtimer3.style.color = "#000";
    return;
  }
}


