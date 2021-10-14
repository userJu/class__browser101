
const tag = document.querySelector('.tag')
const horozontal = document.querySelector('.horozontal')
const vertical = document.querySelector('.vertical')
const target = document.querySelector('.target')
window.addEventListener('mousemove', (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    tag.innerHTML = `position is ${x} , ${y}`
    horozontal.style.top = `${y}px`;
    vertical.style.left = `${x}px`;
    target.style.left = `${x}px`
    target.style.top = `${y}px`
    tag.style.left = `${x}px`
    tag.style.top = `${y}px`



})