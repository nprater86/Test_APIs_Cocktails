var cocktailName = '';

function getCocktail(element) {
    cocktailName = element.value;
    console.log(element.value);
}

async function getCocktailData(event){
    event.preventDefault();
    var response = await fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
    var cocktailData = await response.json();
    console.log(cocktailData);
}
