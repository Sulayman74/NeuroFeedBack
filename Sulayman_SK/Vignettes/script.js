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
