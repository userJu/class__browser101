
const tag = document.querySelector('.tag')
const horozontal = document.querySelector('.horozontal')
const vertical = document.querySelector('.vertical')
const target = document.querySelector('.target')
const targetRect =target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2
const targetFalfHeight = targetRect.height/ 2
window.addEventListener('mousemove', (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    tag.innerHTML = `position is ${x} , ${y}`
    horozontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform= `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y- targetFalfHeight}px)`
    tag.style.transform = `translate(${x}px, ${y}px)`


})