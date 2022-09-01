// https://github.com/learn-co-curriculum/phase-1-practice-interacting-with-the-dom

let count = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const like = document.getElementById('heart')
const pause = document.getElementById('pause')
const sub = document.getElementById('submit')
let likesClicks = 0


 const timer = setInterval(() => {
        prevVal = parseInt(count.innerText);
        count.innerText = prevVal + 1
    }, 1000);



minus.addEventListener('click',(e)=> {
    preVal = parseInt(count.innerText);
    count.innerText = --preVal
}
)

plus.addEventListener('click',(e)=> {
    prevVal = parseInt(count.innerText);
    count.innerText++
})


function likeNumber() { 
    const ul = document.querySelector('.likes');
    const li = document.createElement('li');
    likesClicks++
    if ( likesClicks === 1 ){
    li.innerText = `${count.innerText} has been liked 1 time`;
    }
    else if (likesClicks > 1) {
    li.innerText = `${count.innerText} has been liked ${likesClicks} times`
    }
    ul.appendChild(li);
};

like.addEventListener('click', () => likeNumber())


// likesClicks > 1 ? li.innerText = `${count.innerText} has been liked ${likesClicks} times`: li.innerText = `${count.innerText} has been liked 1 time`;



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
        clearInterval(timer)}
        else if (pause.innerText === 'resume') {
        minus.disabled = false;
        plus.disabled = false;
        like.disabled = false;
        sub.disabled = false;
        pause.innerText = 'pause';
        setInterval(timer);
    }
}

pause.addEventListener('click',pauseTimer)


function addComment(e) {
    e.preventDefault();
    let input = document.getElementById('comment-input').value
    let comment = document.getElementById('lists')
    let p = document.createElement('p');
    p.textContent = inputValue;
    comment.appendChild(p);
    input.reset();

}


sub.addEventListener('submit',addComment)
// console.log(addComment)
// console.log(sub)
// sub.addEventListener('submit',() => {
//     preventDefault();
//     let input = document.getElementById('comment-input').value
//     let comment = document.getElementById('lists')
//     let p = document.createElement('p');
//     p.textContent = inputValue;
//     comment.appendChild(p);
//     input.reset();
// })
