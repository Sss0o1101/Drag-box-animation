const box = document.querySelector('.box')
var offset = [0,0]
var isDown = false

box.addEventListener('mousedown', function(e) {
    isDown = true
    box.classList.add('active')
    offset = [
        box.offsetLeft - e.clientX,
        box.offsetTop - e.clientY
    ]
}, true)

document.addEventListener('mouseup', function() {
    isDown = false
    box.classList.remove('active')
}, true)

document.addEventListener('mouseup', function(e) {

}, true)