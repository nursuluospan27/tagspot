/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/components/modal */ \"./src/scripts/components/modal.js\");\n/* harmony import */ var _scripts_cards_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/cards.js */ \"./src/scripts/cards.js\");\n\n\n\n\n// @todo: DOM узлы\nvar placesListContainer = document.querySelector('.places__list');\nvar openNewCardPopup = document.querySelector('.profile__add-button');\nvar openEditPopup = document.querySelector('.profile__edit-button');\nvar closeButtons = document.querySelectorAll('.popup__close');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar newCardPopup = document.querySelector('.popup_type_new-card');\nvar imagePopup = document.querySelector('.popup_type_image');\nvar editForm = document.forms['edit-profile'];\nvar newCardForm = document.forms['new-place'];\nvar profileCardName = document.querySelector('.profile__title');\nvar profileCardDescription = document.querySelector('.profile__description');\nvar profileFormName = editForm.querySelector('.popup__input_type_name');\nvar profileFormDescription = editForm.querySelector('.popup__input_type_description');\nopenEditPopup.addEventListener('click', function () {\n  profileFormName.value = profileCardName.textContent;\n  profileFormDescription.value = profileCardDescription.textContent;\n  (0,_scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__.openPopup)(editPopup);\n});\nopenNewCardPopup.addEventListener('click', function () {\n  (0,_scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__.openPopup)(newCardPopup);\n});\ncloseButtons.forEach(function (button) {\n  button.addEventListener('click', function (event) {\n    var popup = event.target.closest('.popup');\n    (0,_scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popup);\n  });\n});\n\n// @todo: Функция создания карточки\nfunction handleImageClick(cardData) {\n  var img = imagePopup.querySelector('.popup__image');\n  var description = imagePopup.querySelector('.popup__caption');\n  img.src = cardData.link;\n  img.alt = cardData.name;\n  description.textContent = cardData.name;\n  (0,_scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__.openPopup)(imagePopup);\n}\nfunction addCard(cardData) {\n  var card = (0,_scripts_cards_js__WEBPACK_IMPORTED_MODULE_2__.createCard)(cardData, handleImageClick);\n  placesListContainer.prepend(card);\n}\nnewCardForm.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var card = {\n    name: newCardForm.querySelector('.popup__input_type_card-name').value,\n    link: newCardForm.querySelector('.popup__input_type_url').value\n  };\n  addCard(card);\n  (0,_scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__.closePopup)(newCardPopup);\n  newCardForm.reset();\n});\n\n// @todo: Функция редактирования профиля\neditForm.addEventListener('submit', function (event) {\n  event.preventDefault();\n  profileCardName.textContent = profileFormName.value;\n  profileCardDescription.textContent = profileFormDescription.value;\n  (0,_scripts_components_modal__WEBPACK_IMPORTED_MODULE_1__.closePopup)(editPopup);\n  editForm.reset();\n});\n\n// @todo: Вывести карточки на страницу\nfunction displayCards() {\n  _scripts_cards_js__WEBPACK_IMPORTED_MODULE_2__.initialCards.forEach(function (item) {\n    addCard(item);\n  });\n}\ndisplayCards();\n\n//# sourceURL=webpack://tagspot/./src/index.js?\n}");

/***/ },

/***/ "./src/scripts/cards.js"
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Бали\",\n  link: \"https://img.pac.ru/resorts/213172/248694/big/B39BBF51C0A880143F69A79019B488BD.jpg\"\n}, {\n  name: \"Фарерские острова\",\n  link: \"https://blog.ostrovok.ru/wp-content/uploads/2016/11/%D1%84%D0%B0%D1%80%D0%B5%D1%80%D1%8B-%D0%B8-%D0%B8%D1%81%D0%BB%D0%B0%D0%BD%D0%B4%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%B7%D0%B0%D1%85%D0%BE%D0%B4.jpg\"\n}, {\n  name: \"Монте Роза\",\n  link: \"https://alpina.guide/sites/default/files/images/tours/Monte_Rosa_title_img.jpg\"\n}, {\n  name: \"Мауи\",\n  link: \"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80\"\n}, {\n  name: \"Тоскана\",\n  link: \"https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}, {\n  name: \"Патагонские Анды\",\n  link: \"https://images.unsplash.com/photo-1657440925570-94ca8047b6fe?q=80&w=3008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\"\n}];\nvar cardTemplate = document.querySelector('#card-template').content;\n\n// @todo: Функция удаления карточки\nfunction deleteCard(card) {\n  card.remove();\n}\nfunction likeCard(likeButton) {\n  likeButton.classList.toggle('card__like-button_is-active');\n}\nfunction createCard(cardData, handleImageClick) {\n  var card = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var cardImage = card.querySelector('.card__image');\n  var cardName = card.querySelector('.card__title');\n  var deleteButton = card.querySelector('.card__delete-button');\n  var likeButton = card.querySelector('.card__like-button');\n  cardImage.src = cardData.link;\n  cardImage.alt = cardData.name;\n  cardName.textContent = cardData.name;\n  likeButton.addEventListener('click', function () {\n    likeButton.classList.toggle('card__like-button_is-active');\n  });\n  deleteButton.addEventListener('click', function () {\n    card.remove();\n  });\n  cardImage.addEventListener('click', function () {\n    handleImageClick(cardData);\n  });\n  return card;\n}\n\n\n//# sourceURL=webpack://tagspot/./src/scripts/cards.js?\n}");

/***/ },

/***/ "./src/scripts/components/modal.js"
/*!*****************************************!*\
  !*** ./src/scripts/components/modal.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeByEscape);\n}\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeByEscape);\n}\nfunction closeByEscape(event) {\n  if (event.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closePopup(openedPopup);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://tagspot/./src/scripts/components/modal.js?\n}");

/***/ },

/***/ "./src/pages/index.css"
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tagspot/./src/pages/index.css?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;