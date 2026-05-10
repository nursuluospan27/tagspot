const initialCards = [
    {
        name: "Бали",
        link: "https://img.pac.ru/resorts/213172/248694/big/B39BBF51C0A880143F69A79019B488BD.jpg",
    },
    {
        name: "Фарерские острова",
        link: "https://blog.ostrovok.ru/wp-content/uploads/2016/11/%D1%84%D0%B0%D1%80%D0%B5%D1%80%D1%8B-%D0%B8-%D0%B8%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4.jpg",
    },
    {
        name: "Монте Роза",
        link: "https://alpina.guide/sites/default/files/images/tours/Monte_Rosa_title_img.jpg",
    },
    {
        name: "Мауи",
        link: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    },
    {
        name: "Тоскана",
        link: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Патагонские Анды",
        link: "https://images.unsplash.com/photo-1657440925570-94ca8047b6fe?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
];

const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}

function likeCard(likeButton) {
    likeButton.classList.toggle('card__like-button_is-active');
}

function createCard(cardData, handleImageClick) {
    const card = cardTemplate.querySelector('.places__item').cloneNode(true);

    const cardImage = card.querySelector('.card__image');
    const cardName = card.querySelector('.card__title');
    const deleteButton = card.querySelector('.card__delete-button');
    const likeButton = card.querySelector('.card__like-button');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardName.textContent = cardData.name;

    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_is-active');
    });

    deleteButton.addEventListener('click', () => {
        card.remove();
    });

    cardImage.addEventListener('click', () => {
        handleImageClick(cardData);
    });
    return card;
}

export {
    initialCards,
    createCard
}