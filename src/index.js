import './pages/index.css';
import { openPopup, closePopup } from "./scripts/components/modal";
import { initialCards, createCard } from './scripts/cards.js';

// @todo: DOM узлы
const placesListContainer = document.querySelector('.places__list');

const openNewCardPopup = document.querySelector('.profile__add-button');
const openEditPopup = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');

const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const editForm = document.forms['edit-profile'];
const newCardForm = document.forms['new-place'];

const profileCardName = document.querySelector('.profile__title');
const profileCardDescription = document.querySelector('.profile__description');

const profileFormName = editForm.querySelector('.popup__input_type_name');
const profileFormDescription = editForm.querySelector('.popup__input_type_description');

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
function handleImageClick(cardData) {
    const img = imagePopup.querySelector('.popup__image');
    const description = imagePopup.querySelector('.popup__caption');
    img.src = cardData.link;
    img.alt = cardData.name;
    description.textContent = cardData.name;

    openPopup(imagePopup);
}

function addCard(cardData) {
    const card = createCard(cardData, handleImageClick);
    placesListContainer.prepend(card);
}

newCardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const card = {
        name: newCardForm.querySelector('.popup__input_type_card-name').value,
        link: newCardForm.querySelector('.popup__input_type_url').value
    }
    addCard(card);
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

// @todo: Вывести карточки на страницу
function displayCards() {
    initialCards.forEach((item) => {
            addCard(item);
        }
    )
}
displayCards();

