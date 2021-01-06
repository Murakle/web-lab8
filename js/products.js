products = document.querySelectorAll(".product");
productsSizes = [];
selected = [];
function clearAll(indx) {
    productsSizes[indx].forEach(function(item, index, array) {
        if (index != selected[indx]) {
            item.classList.remove("product-size-selected");
        } else {
            item.classList.add("product-size-selected");
        }
    });
}
var addClickListener = function (product_index, size_index) {
        productsSizes[product_index][size_index].addEventListener('click', function(evt) {
            if (productsSizes[product_index][size_index].classList.contains("product-size-in-stock")) {
                selected[product_index] = size_index;
                clearAll(product_index);
            }
        });
}
products.forEach(function(item, product_index, array) {
    productsSizes.push(item.querySelectorAll(".product-size-button"));
    selected.push(-1);
    productsSizes[product_index].forEach(function(item, index, array) {
        addClickListener(product_index, index);
    });
});
