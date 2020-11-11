  let popup = document.querySelector(".popup"); 
  let profileInfo = document.querySelector(".profile__info"); 
  let buttonOpenPopup = profileInfo.querySelector(".profile__button-edit"); 
  let buttonClosePopup = popup.querySelector(".popup__close"); 
  let buttonSavePopup = popup.querySelector(".popup__button-submit"); 
  let popupContainer = document.querySelector(".popup__container"); 
  let profileInfoName = profileInfo.querySelector(".profile__name"); 
  let profileInfoProfession = profileInfo.querySelector(".profile__profession") 
  let formElementOne = popup.querySelector(".popup__text_name"); 
  let formElementTwo = popup.querySelector(".popup__text_bio");
  
  let showPopup = () => {  
    popup.classList.add('popup_opened');
  }
  let hidePopup = () => {  
    popup.classList.remove('popup_opened');
  }

  let formElement = document.querySelector(".popup__container");
  let name = popupContainer.querySelector(".popup__text_name"); 
  let profession = popupContainer.querySelector(".popup__text_bio"); 
  let nameHolder = profileInfo.querySelector('.profile__name');
  let professionProfile = profileInfo.querySelector('.profile__profession');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameHolder.textContent = name.value;
  professionProfile.textContent = profession.value;
  showPopup();
  hidePopup();
}

  buttonOpenPopup.addEventListener("click", showPopup);
  buttonClosePopup.addEventListener("click", hidePopup);
  formElement.addEventListener('submit', formSubmitHandler);