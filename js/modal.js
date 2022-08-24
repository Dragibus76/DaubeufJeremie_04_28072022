

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// ==================
// =========== MODALS
// ==================

// PARAMS Modal sub
const modalInscription = ".bground";
const btnInscriptionClose = ".close";
// PARAMS Modal valid
const messageValidation = ".wrapper-modal-confirmation";
const btnMessageValidation = ".closeMsgValidation";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


