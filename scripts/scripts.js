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
    formElementOne.value = profileInfoName.textContent;
    formElementTwo.value = profileInfoProfession.textContent;
  }

  let hidePopup = () => {  
    popup.classList.remove('popup_opened');
  }

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileInfoName.textContent = formElementOne.value;
  profileInfoProfession.textContent = formElementTwo.value;
  hidePopup();
}

  buttonOpenPopup.addEventListener("click", showPopup);
  buttonClosePopup.addEventListener("click", hidePopup);
  popupContainer.addEventListener('submit', formSubmitHandler);