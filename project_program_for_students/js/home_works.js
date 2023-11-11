// GMAIL
const gmailinput = document.querySelector('#gmail_input')
const gmailbutton = document.querySelector('#gmail_button')
const gmailresult = document.querySelector('#gmail_result')

const regExp1 = /\w\@(gmail)\.(com)/

gmailbutton.addEventListener('click',()=>{
    if (regExp1.test(gmailinput.value)){
        gmailresult.innerHTML= 'прошло успешно'
        gmailresult.style.color = 'yellow'
    } else {
        gmailresult.innerHTML= 'Не получилось'
        gmailresult.style.color = 'blue'
    }
})


var step = 30;
var frequency = 0.2;
var intervalId = null;
 
function startMoving(block) {
  block.classList.toggle('inmove');
  intervalId = setInterval(move, frequency * 100);
}
 
function move() {
    var block = document.querySelector('.moving');
  if(!block.classList.contains('inmove')) {
    clearInterval(intervalId);
    return;
}
var container = block.parentElement;
var currentX = block.offsetLeft;
var currentY = +block.offsetTop;;
  
if(!(direction = +block.dataset.direction)){
    var direction = +(block.dataset.direction = 1);
}
newX = direction % 2 ? currentX : currentX + (3 - direction) * step;
newY = direction % 2 ? currentY + (direction - 2) * step : currentY;
  
if(newX < 0 || newX > +container.clientWidth - block.clientWidth
    || newY < 0 || newY > +container.clientHeight - block.clientHeight) {
        direction ++;
        if(direction === 5) direction = 1;
        block.dataset.direction = direction;
        move();
    } else {
        block.style.left = '' + newX + 'px';
        block.style.top = '' + newY + 'px';;
    } 
}