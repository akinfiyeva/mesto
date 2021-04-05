let popup = document.querySelector('.popup');
let title = document.querySelector('.popup__input_type_title');
let subtitle = document.querySelector('.popup__input_type_subtitle');
let profileEdit = document.querySelector('.profile__edit');
let popupClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupInputs = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
  title.value =  profileTitle.textContent;
  subtitle.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = title.value;
  profileSubtitle.textContent = subtitle.value;
  closePopup()
};

profileEdit.addEventListener('click', openPopup);

popupClose.addEventListener('click', closePopup);

popupInputs.addEventListener('submit', formSubmitHandler);