let onButtons = document.querySelectorAll(".btnOn");
let btnsEnSavoirPlus = document.querySelectorAll(".btnChange");

// console.log(onButtons);
// console.log(btnsEnSavoirPlus);

onButtons.forEach((BtnOn) => {
  console.log();
  BtnOn.addEventListener("mouseenter", function (e) {
    BtnOn.closest(".Btns").querySelector(".btnChange").style.color = "#022b88";
    BtnOn.closest(".Btns").querySelector(".btnChange").style.backgroundColor =
      "#fff";
  });
  BtnOn.addEventListener("mouseleave", function (e) {
    BtnOn.closest(".Btns").querySelector(".btnChange").style.color = "#fff";
    BtnOn.closest(".Btns").querySelector(".btnChange").style.backgroundColor =
      "#022b88";
  });
});

let openModalBtns = document.querySelectorAll("[data-modal-target]");
let closeModalBtns = document.querySelectorAll("[data-close-button]");
let overlay = document.getElementById("overlay");

openModalBtns.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const modal = document.querySelector(bouton.dataset.modalTarget);
    openModals(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModals(modal);
  });
});

closeModalBtns.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const modal = bouton.closest(".modal");
    closeModals(modal);
  });
});
function openModals(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModals(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// ? mouseon mouse leave effet sur le texte dans les vignettes

let container = document.querySelectorAll(".contenu");
let textColor = document.querySelectorAll(".Apercu h3");

container.forEach((inside) => {
  inside.addEventListener("mouseover", function (e) {
    textColor.forEach((element) => {
      // console.log(element);
      element.style.color = "black";
    });
  });
  inside.addEventListener("mouseleave", function (e) {
    textColor.forEach((element) => {
      // console.log(element);
      element.style.color = "beige";
    });
  });
});