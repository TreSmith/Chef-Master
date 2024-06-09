import axios from 'axios';

export async function getRandomRecipe() {
  try {
    const apiKey = process.env.SPOONACULAR_API_KEY;

    const numberOfRecipes = 11;

    let response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=${numberOfRecipes}`
    );
    console.log(response.data.recipes[0]);
  } catch (error) {
    console.error('Error Processing API!', error);
  }
}
