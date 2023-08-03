
// Declare
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.js-mdl')
const modal1 = $('.js-mdl-1')
const modal2 = $('.js-mdl-2')
const modal3 = $('.js-mdl-3')

const modalCon = $('.js-mdlC')
const modalCon1 = $('.js-mdlC-1')
const modalCon2 = $('.js-mdlC-2')
const modalCon3 = $('.js-mdlC-3')

const modalP = $$('.js-mdlP')
const items = $$('.js-item')
const sub = $('.js-sub')
const soccer = $('.js-soccer')

const iptz = $('.js-ipt-z')
const ipt = $('.js-ipt')
const ipt0 = $('.js-ipt-0')
const ipt1 = $('.js-ipt-1')
const ipt2 = $('.js-ipt-2')
const ipt3 = $('.js-ipt-3')
const ipt4 = $('.js-ipt-4')
const ipt5 = $('.js-ipt-5')
const ipt6 = $('.js-ipt-6')
const ipt7 = $('.js-ipt-7')

// Modal
function showModal() {modal.classList.add('open')}
function showModal1() {modal1.classList.add('open')}
function showModal2() {modal2.classList.add('open')}
function showModal3() {modal3.classList.add('open')}
function hideModal() {modal.classList.remove('open')}
function hideModal1() {modal1.classList.remove('open')}
function hideModal2() {modal2.classList.remove('open')}
function hideModal3() {modal3.classList.remove('open')}

modalCon.onclick = function(event) {event.stopPropagation()}
modalCon1.onclick = function(event) {event.stopPropagation()}
modalCon2.onclick = function(event) {event.stopPropagation()}
modalCon3.onclick = function(event) {event.stopPropagation()}

// Function
function showBoxs() {
    sub.classList.add('open')
}

function hideBoxs() {
    sub.classList.remove('open')
}

for (const item of items) {
    item.addEventListener('click', showBoxs)
}

// Function
function hide() {
document.getElementById("para1").remove();
}

function fun1() {
document.getElementById("para").innerHTML =  "This is a function ";
}

function fun2() {
  const element = document.getElementById("para");
  element.innerHTML = "W3Schools ";
  element.href = "https://www.w3schools.com";
}

function fun3() {
document.getElementById("para1").remove();
}

let p1 = 2;
let p2 = 5;

function fun5(a, b) {
    document.getElementById("para1").innerHTML +='Multiply 2 and 5 :' + a * b + '<br>';
}

// sub this
sub.addEventListener('mouseover', function(){
    this.style.boxShadow = "2px 2px 2px #555";
})

sub.addEventListener('mouseout', function(){
    this.style.boxShadow = "none";
})



// Operation
ipt.addEventListener('click', hideBoxs)
ipt0.addEventListener('click', hideBoxs)
ipt1.addEventListener('click', fun1)
ipt2.addEventListener('dblclick', fun2)
ipt3.addEventListener('click', fun3)
ipt4.addEventListener('mouseover', showBoxs)
ipt4.addEventListener('mouseout', hideBoxs)
ipt5.addEventListener('click', function(){
    fun5(p1,p2);
});
ipt6.addEventListener('click', showBoxs)
ipt6.addEventListener('mouseover', function(){
    sub.style.border = "none";
});
ipt6.addEventListener('mouseout', function(){
    sub.style.border = "2px solid #000";
});
ipt7.addEventListener('mouseup', hideBoxs)
ipt7.addEventListener('mousedown', showBoxs)



// soccer
field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

// pane
const panes = $$('.pane');
for(const pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-btn" style="color:blue">[x]</button>');
  //afterbegin, afterend, beforebegin, beforeend
  pane.firstChild.onclick = () => pane.remove();
}

// carousel
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* configuration */
let width = 130; // image width
let count = 3; // visible images count

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // ribbon scroll position

carousel.querySelector('.prev').onclick = function() {
  // shift left
  position += width * count;
  // can't move to the left too much, end of images
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};


// add car
const app = (() => {
  const cars = ['BMW']

  const root = $('#root')
  const input = $('#input')
  const submit = $('#submit')

  return {
    add(car) {
      cars.push(car)
    },
    delete(index) {
      cars.splice(index, 1)
    },
    render(){
      const html = cars.map((car, index) => `
          <li>
            ${car}
            <span class="delete" data-index="${index}">x</span>
          </li>
        `)
        .join('');
      root.innerHTML = html;
    },
    handleDelete(e) {
      const deleteBtn = e.target.closest('.delete')
      if(deleteBtn) {
        const index = deleteBtn.dataset.index
        this.delete(index)
        this.render()
      }
    },
    init() {
      submit.onclick = () => {
        const car = input.value
        this.add(car)
        this.render()
        input.value = null
        input.focus()
      }
      
      root.onclick = this.handleDelete.bind(this)

      this.render()
    }
  }
})();

app.init();

// redux library

function arrToObj(arr) {
  return arr.reduce((obj, item) => {
    console.log("---" + item[1])
    obj[item[0]] = item[1]
    console.log("--" + obj[item[0]])
     return obj;
    }
    ,{})
}

const obj1 = arrToObj([
  ['name', 'Son Dang'], 
  ['age', 21], 
  ['address', 'Ha Noi']
])
console.log(obj1)