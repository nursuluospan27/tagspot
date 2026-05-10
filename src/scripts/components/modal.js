function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    popup.addEventListener('click', closeByOverlay);
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    popup.removeEventListener('click', closeByOverlay);
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

function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
        closePopup(event.currentTarget);
    }
}

export {
    openPopup,
    closePopup
}
