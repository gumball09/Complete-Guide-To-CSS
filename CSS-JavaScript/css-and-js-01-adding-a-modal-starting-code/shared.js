var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal button')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

var selectPlanButtons = document.querySelectorAll('.plan button')
for(var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block'
        // backdrop.style.display = 'block'
        // modal.className = 'open' // This will actually overwrite the complete classes of the el
        modal.classList.add('open')
        backdrop.classList.add('open')
    })
}

// Close modal
if(modalNoButton) {
    modalNoButton.addEventListener('click', closeModal)
}
backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none'
    mobileNav.classList.remove('open')
    closeModal()
})

function closeModal() {
    // backdrop.style.display = 'none'
    // modal.style.display = 'none'
    if(modal) {
        modal.classList.remove('open')
    }

    backdrop.classList.remove('open')
}

// Open hamburger menu
toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block'
    // backdrop.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})