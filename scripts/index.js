

const editPopup = document.querySelector('.popup_profile');
const photoModal = document.querySelector('.popup_photo');
const photoImage = photoModal.querySelector('.popup__image');
const btnClosePhotoModal = photoModal.querySelector('.popup__button');
const altModal = photoModal.querySelector('.popup__sign');
const btnClosePopupEdit = editPopup.querySelector('.popup__close');
const popupAdd = document.querySelector('.popup_card');
const nameInput = editPopup.querySelector('input[name="name"]');
const jobInput = editPopup.querySelector('input[name="job"]');
const nameInfo = document.querySelector('.profile__name');
const addBtn = document.querySelector('.profile__add');
const jobInfo = document.querySelector('.profile__caption');
const formEdit = editPopup.querySelector('.popup__form_profile');
const editBtn = document.querySelector('.profile__edit');
const formAdd = popupAdd.querySelector('.popup__form_card');
const inputUrl = popupAdd.querySelector('.popup__input_type_url');
const inputPlace = popupAdd.querySelector('.popup__input_type_name');
const closePopupAdd = document.querySelector('#popup__close_card');
const elementsSection = document.querySelector('.elements');
const templateElement = document.querySelector('#template-element').content.querySelector('.element');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popup) {
  popup.classList.add('popup_visible');
}

function closePopup(popup) {
  popup.classList.remove('popup_visible');
}

function handlePopupEdit() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
  openPopup(editPopup);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup(editPopup);
}

function createCard(item) {
  const newElement = templateElement.cloneNode(true);
  const elementImage = newElement.querySelector('.element__image');
  const elementTitle = newElement.querySelector('.element__title');
  const elementLike = newElement.querySelector('.element__like');
  const elementDelete = newElement.querySelector('.element__delete');

  elementTitle.textContent = item.name;
  elementImage.alt = item.name;
  elementImage.src = item.link;

  elementDelete.addEventListener('click', handleDeleteCard);
  elementLike.addEventListener('click', handleLikeCard);
  elementImage.addEventListener('click', () => handlePreviewImage(item.link, item.name));

  return newElement;
}

function handleDeleteCard(evt) {
  evt.target.closest('.element').remove();
}

function handleLikeCard(evt) {
  evt.target.classList.toggle('element__like_active');
}

function renderList() {
  const result = initialCards.map(item => {
    const newElement = createCard(item);
    return newElement;
  });
  elementsSection.append(...result);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  const element = createCard({name: inputPlace.value, link: inputUrl.value});
  elementsSection.prepend(element);
  closePopup(popupAdd);
  formAdd.reset();
}

function handlePreviewImage(link, alt) {
  photoImage.src = link;
  photoImage.alt = alt;
  altModal.textContent = alt;
  openPopup(photoModal);
}

renderList();

editBtn.addEventListener('click', handlePopupEdit);
addBtn.addEventListener('click', () => openPopup(popupAdd));
closePopupAdd.addEventListener('click', () => closePopup(popupAdd));
btnClosePopupEdit.addEventListener('click', () => closePopup(editPopup));
formEdit.addEventListener('submit', handleProfileSubmit);
btnClosePhotoModal.addEventListener('click', () => closePopup(photoModal));
formAdd.addEventListener('submit', handleAddCardFormSubmit);
