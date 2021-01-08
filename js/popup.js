popupBlock = document.querySelector(".popup-block");
closePopupButton = popupBlock.querySelector(".button-close-popup");
// init popup
setTimeout(function() {
    document.body.classList.add('stop-scrolling');
    popupBlock.classList.add('popup-block-show');
}, 3000);
// close popup
closePopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.body.classList.remove('stop-scrolling')
    popupBlock.classList.remove('popup-block-show');
});
