(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open_form-mobile]'),
    closeModalBtn1: document.querySelector('[data-modal-close_form-mobile]'),
    modal1: document.querySelector('[data-modal_form-mobile]'),
    body: document.querySelector("body"),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal1.classList.toggle('is-hidden_form');
    refs.body.classList.toggle("no-scroll");
  }
})();
