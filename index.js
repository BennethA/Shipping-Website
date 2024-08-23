let hamburger = document.getElementById('hamburger')
let hiddenNav = document.getElementById('hiddenNav')
let pointer = document.getElementById('pointer')

hamburger.addEventListener('click', ()=> {
  hiddenNav.classList.toggle('show');
  pointer.classList.toggle('hiddingPointer');
})

