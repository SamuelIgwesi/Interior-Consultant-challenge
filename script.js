'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector(".close-btn")

const openModal = function () {
  modal.classList.remove('hidden');
  document.querySelector(".modal").style.display = "block";
  closeBtn.classList.remove("hidden")
};
const closeModal = function () {
  modal.classList.add('hidden');
  document.querySelector(".modal").style.display = "";
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);