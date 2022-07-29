(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open_form]'),
    closeModalBtn: document.querySelector('.modal__button--close--form'),
    modal: document.querySelector('[data-modal_form]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openMobileModalButton.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden_form');
    refs.body.classList.toggle('no-scroll');
  }
})();
