// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;;
// @todo: DOM узлы
const placesListContainer = document.querySelector('.places__list');
// @todo: Функция создания карточки

// @todo: Функция удаления карточки
function deleteCard(event) {
    const item = event.target.closest('li');
    if (item) {
        item.remove();
    }
}

// @todo: Вывести карточки на страницу
function displayCards() {
    initialCards.forEach((item) => {
        const card = cardTemplate.querySelector('.places__item ').cloneNode(true);
        const cardImage = card.querySelector('.card__image');
        console.log("cardImage", card);
        cardImage.src = item.link;
        cardImage.alt = item.name;
        const cardName = card.querySelector('.card__title');
        cardName.textContent = item.name;
        placesListContainer.append(card);
        }
    )
}

function likeCard(event) {
    const likeButton = event.target.closest('.card__like-button');
    if (likeButton) {
        likeButton.classList.toggle('card__like-button_is-active');
    }
}

displayCards();
placesListContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__delete-button')) {
        deleteCard(event);
    } else if (event.target.classList.contains('card__like-button')) {
        likeCard(event);
    }
});
