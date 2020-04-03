import './theme';
import dishes from './menu.json';
import recipeTemplates from './recipe.hbs';
import './styles.css';

const recipeList = document.querySelector('.js-menu');

buildRecipeMarkup(dishes);

function buildRecipeMarkup(dishes) {
  const recipeMarkup = dishes.map(dish => recipeTemplates(dish)).join('');
  recipeList.insertAdjacentHTML('beforeend', recipeMarkup);
}
