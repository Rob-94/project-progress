/*let box = document.querySelector('.box')
let boxLeft = box.offsetLeft
let boxTop = box.offsetTop
let step = 10
document.addEventListener("keydown",myfunction);
function myfunction(event){
     switch(event.keyCode){
        case 38:
            boxTop -= step
            box.style.top = boxTop + 'px'
            break
        case 40:
            boxTop += step
            box.style.top = boxTop + 'px'
            break
        case 37:
            boxLeft -= step
            box.style.left = boxLeft + 'px'
            break
        case 39:
            boxLeft += step
            box.style.left = boxLeft + 'px'
            break
    }
});


