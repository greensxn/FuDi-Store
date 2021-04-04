var isAscending = true; // сортировка по возрастанию
var recipesList = [ // массив рецептов
    { photo: "img/italian.png", name: "italian", count: 327 },
    { photo: "img/indian.png", name: "indian", count: 856 },
    { photo: "img/french.png", name: "french", count: 27 },
    { photo: "img/steakhouse.png", name: "steakhouse", count: 174 },
    { photo: "img/seafood.png", name: "seafood", count: 731 },
    { photo: "img/sushi.png", name: "sushi", count: 237 },
    { photo: "img/mexican.png", name: "mexican", count: 529 },
    { photo: "img/chinese.png", name: "chinese", count: 145 },
    { photo: "img/pizza.png", name: "pizza", count: 317 },
    { photo: "img/american.png", name: "american", count: 1437 }
];
fillRecipesList();

setInterval(function () { // менять расположение рецептов по убыванию/возрастанию
    isAscending = !isAscending;
    fillRecipesList();
}, 3000);

function fillRecipesList() { // заполнить рецепты
    clearRecipesList();
    sortByCount(recipesList, isAscending);
    updateRecipesList(recipesList);
}

function clearRecipesList() {
    $('.cuisine-items ul').empty();
}

function updateRecipesList(items) { // обновить рецепты
    items.forEach((element, i) => {
        $('.cuisine-items ul').append(
            '<li>' +
            "<figure id='item" + i + "'>" +
            '<figcaption>' +
            '<p>' + element.count + ' Recipes</p>' +
            '<h1>' + element.name + '</h1>' +
            '</figcaption>' +
            '</figure>' +
            '</li>'
        );

        $('#item' + i).css('background', "url(" + element.photo + ")");
        $('#item' + i).css('background-size', 'cover');
        $('#item' + i).css('background-position', 'center');
        $('#item' + i).css('background-repeat', 'no-repeat');
    });
}

function sortByCount(arr, isAscending) { // сортировка
    arr.sort((a, b) => a.count > b.count ? isAscending ? 1 : -1 : isAscending ? -1 : 1);
}

// spin text
var isSpinning = false;

var h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
var percent;

window.addEventListener('scroll', () => {
    percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    if (percent >= 94 && !isSpinning) {
        isSpinning = true;
        $('.spintext').spincrement({
            thouSeparator: ",",
            duration: 1500
        });
    }
});
