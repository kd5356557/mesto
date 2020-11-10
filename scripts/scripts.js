let popup = document.querySelector(".popup");
let profileInfo = document.querySelector(".profile__info");
let buttonOpenPopup = profileInfo.querySelector(".profile__button-edit");
let buttonClosePopup = popup.querySelector(".popup__close");
let buttonSavePopup = popup.querySelector(".popup__button-submit");
let popupContainer = document.querySelector(".popup__container");

let popupToggle = () => {
    popup.classList.toggle("popup_opened")
}

buttonOpenPopup.addEventListener("click", popupToggle)
buttonClosePopup.addEventListener("click", popupToggle)
buttonSavePopup.addEventListener("click", popupToggle)

let profileInfoName = profileInfo.querySelector(".profile__name");
let profileInfoProfession = profileInfo.querySelector(".profile__profession")
let formElementOne = popup.querySelector(".popup__text_name");
let formElementTwo = popup.querySelector(".popup__text_bio");

function formSubmitName (evt) {
  evt.preventDefault(); 
  let popupContainer = document.querySelector(".popup__container");
  let name = popupContainer.querySelector(".popup__text_name");
  let profession = popupContainer.querySelector(".popup__text_bio"); 
  let nameHolder = profileInfo.querySelector('.profile__name');
  nameHolder.textContent = name.value;
  let professionProfile = profileInfo.querySelector('.profile__profession');
  professionProfile.textContent = profession.value;
  popupToggle();
}

buttonSavePopup.addEventListener('click', formSubmitName);