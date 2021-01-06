bars = document.querySelectorAll(".bar");
percentages = [];
bars.forEach(function(item, index, array) {
    percentages.push(item.getAttribute("data-percentage"));
    item.style.animationPlayState = "paused";
});
let firstTime = true;
let minScroll = 400;
window.onscroll = function() {
    if (firstTime && (document.body.scrollTop > minScroll || document.documentElement.scrollTop > minScroll)) {
        bars.forEach(function(item, index, array) {
            item.style.animationPlayState = "running";
        });
        console.log("entered");
        firstTime = false;
    }
};

