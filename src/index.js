import './pages/index.css';
import { initialCards } from './scripts/cards.js';
// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesListContainer = document.querySelector('.places__list');

const openNewCardPopup = document.querySelector('.profile__add-button');
const openEditPopup = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');

const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');

const editForm = document.forms['edit-profile'];
const newCardForm = document.forms['new-place'];

const profileCardName = document.querySelector('.profile__title');
const profileCardDescription = document.querySelector('.profile__description');

const profileFormName = editForm.querySelector('.popup__input_type_name');
const profileFormDescription = editForm.querySelector('.popup__input_type_description');

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            closePopup(openedPopup);
        }
    }
}
openEditPopup.addEventListener('click', () => {
    profileFormName.value = profileCardName.textContent;
    profileFormDescription.value = profileCardDescription.textContent;

    openPopup(editPopup);
});

openNewCardPopup.addEventListener('click', () => {
    openPopup(newCardPopup);
});

closeButtons.forEach((button)=>{
    button.addEventListener('click', (event) => {
        const popup = event.target.closest('.popup');
        closePopup(popup);
    });
})

// @todo: Функция создания карточки
function addCard(name, url){
    const card = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = card.querySelector('.card__image');
    console.log("cardImage", card);
    cardImage.src = url;
    cardImage.alt = name;
    const cardName = card.querySelector('.card__title');
    cardName.textContent = name;
    placesListContainer.prepend(card);
}

newCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = newCardForm.querySelector('.popup__input_type_card-name');
    const url = newCardForm.querySelector('.popup__input_type_url');
    addCard(name.value, url.value);
    closePopup(newCardPopup);
    newCardForm.reset();
});

// @todo: Функция редактирования профиля
editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    profileCardName.textContent = profileFormName.value;
    profileCardDescription.textContent = profileFormDescription.value;
    closePopup(editPopup);
    editForm.reset();
});


// @todo: Функция удаления карточки
function deleteCard(event) {
    const item = event.target.closest('li');
    if (item) {
        item.remove();
    }
}

function likeCard(event) {
    const likeButton = event.target.closest('.card__like-button');
    if (likeButton) {
        likeButton.classList.toggle('card__like-button_is-active');
    }
}

placesListContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__delete-button')) {
        deleteCard(event);
    } else if (event.target.classList.contains('card__like-button')) {
        likeCard(event);
    }
});

// @todo: Вывести карточки на страницу
function displayCards() {
    initialCards.forEach((item) => {
            addCard(item.name, item.link);
        }
    )
}
displayCards();

