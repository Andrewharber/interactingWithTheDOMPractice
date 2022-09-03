// https://github.com/Andrewharber/interactingWithTheDOMPractice


let count = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const like = document.getElementById('heart')
const pause = document.getElementById('pause')
const sub = document.getElementById('comment-form')
let likes = 0


let timer = setInterval(()=> {
    prevVal = parseInt(count.innerText);
    count.innerText = prevVal + 1
}, 1000);

function startTimer() {
    timer = setInterval(()=> {
        prevVal = parseInt(count.innerText);
        count.innerText = prevVal + 1
    }, 1000);

}


minus.addEventListener('click',(e)=> {
    preVal = parseInt(count.innerText);
    count.innerText = --preVal
}
)

plus.addEventListener('click',(e)=> {
    prevVal = parseInt(count.innerText);
    count.innerText++
})

const counter = parseInt(count.innerText);

console.log(counter)
const listLikes = {}


function likeNumber() { 
    const counter = parseInt(count.innerText);
    const ul = document.querySelector('.likes');
    if (!(counter in listLikes )) {
        const li = document.createElement('li');
        listLikes[counter] = 1   
        li.innerText = `${counter} has been liked 1 time `
        li.setAttribute('id',counter)
        ul.appendChild(li);
    }
    else if (counter in listLikes) {
        listLikes[counter] ++
        document.getElementById(`${counter}`).innerText = `${counter}  has been liked ${listLikes[counter]} times`
    }
    

    console.log(listLikes)
};

like.addEventListener('click', () => likeNumber())




// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "restart" button to restart the counter and re-enable the buttons.

function pauseTimer(e){
if  (pause.innerText === 'pause') { 
        minus.disabled = true;
        plus.disabled = true;
        like.disabled = true;
        sub.disabled = true;
        pause.innerText = 'resume';
        clearInterval(timer)
    }
        else if (pause.innerText === 'resume') {
        minus.disabled = false;
        plus.disabled = false;
        like.disabled = false;
        sub.disabled = false;
        pause.innerText = 'pause';
        startTimer();
    }
}

pause.addEventListener('click',pauseTimer)

document.addEventListener('DOMContentLoaded', () => {
    const sub = document.getElementById('comment-form')
    sub.addEventListener('submit',(e) => {
        addComment(e)
    })
})

function addComment(e) {
    e.preventDefault()
    let form = document.getElementById('comment-form')
    let input = document.getElementById('comment-input').value
    let comment = document.getElementById('list')
    let p = document.createElement('p');
    p.textContent = input;
    comment.appendChild(p);
    form.reset();

}


document.addEventListener('submit',addComment)
