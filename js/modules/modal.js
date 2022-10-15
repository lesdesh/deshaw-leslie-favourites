const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
  
    })
 })
  
 overlay.addEventListener('click', () => {
    const modals  = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
     closeModal(modal)
 
    })
 })
 closeArtistButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
  
    })
 })
  
 function openModal(Modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
 }
  
 function closeModal(modal) {
    if (artistButton == null) return
    artistButton.classList.remove('active')
    overlay.classList.remove('active')
 }