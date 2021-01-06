moveUpButton = document.querySelector('.move-up-button');
moveUpButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
window.onscroll = function() {
    let baseMargin = 550;
    if(document.body.scrollTop > baseMargin || document.documentElement.scrollTop > baseMargin) {
        moveUpButton.style.display = "block";
    } else {
        moveUpButton.style.display = "none";
    }
}
