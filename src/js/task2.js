const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsList = (elements) => {
    return elements.map(name => {
        const ingredientsItem = document.createElement('li');
        ingredientsItem.textContent = name;
        ingredientsItem.classList.add('item');
        return ingredientsItem;
    })
}
const doneList = makeIngredientsList(ingredients);
ingredientsList.append(...doneList);