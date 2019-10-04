import React from 'react';

const usersListItems = (user) => (
  <li>{user.id} - {user.username} - {user.email}</li>
)

const userList = (users) => (
  <ul>
    {users.map(usersListItems)}
  </ul>
)

const userRecipes = (recipe) => (
  <li>{recipe.recipeName}</li>
)
const userRecipeListing = (recipes) => (
  <div>
  <h2>Available Recipes</h2>
  <ul>{recipes.map(userRecipes)}</ul>
  </div>
)

const recipeItems = (ingItems) => (
  // if (ingItems.unit != false){
  //   unitType = ingItems.unit}
  // else {
  //   unitType = ingItems.other
  // }
  <li>{ingItems.qty} {ingItems.unit} {ingItems.other} {ingItems.name}, {ingItems.comment}</li>
)

const instructionSteps = (instructionSteps) => (
  <li>{instructionSteps}</li>
)

const recipeDetails = (recipe) => (
  <div> 
    <h3>{recipe.recipeName}</h3>
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients.map(recipeItems)}
    </ul> 
    <h3>Instructions</h3>
    <ol>
      {recipe.instructions.map(instructionSteps)}
    </ol>
    <img src={recipe.recipeImg} alt={recipe.name} width="500" height="400"/>
    <h3>Recipe Summary</h3>
    <p>{recipe.summary}</p>
    <h3>Cuisine Type: {recipe.cuisineType}</h3> 
    <h3>Link to recipe:</h3>
    <a href='https://damndelicious.net/2014/03/01/potstickers/'> {recipe.name}</a>
  </div>
)

//instructions
//for each line push an item into to state:instructions[]

const newRecipeForm = () => (
  
  <div>
  <h2> Add a recipe </h2>
  <form id="newRecipe"> 
    <label for="recipeName">Recipe Name: </label>
    <input type="text" name="recipeName" value="" placeholder="Name of Recipe" />
    <br />
    <label for="summary">Recipe Summary: </label>
    <textarea name="summary" form="newRecipe" rows="4" cols="40" 
    placeholder="Enter a brief summary of the recipe" value=""></textarea>
    <br />
    <label for="ingredients">Ingredients:  </label>
    <textarea name="ingredients" form="newRecipe" rows="10" cols="40" 
    placeholder="Example of the preffered recipe format: &#10;'1 cup cheddar cheese, shredded'" value=""></textarea>
    <br />
    <label for="instructions">Instructions: </label>
    <textarea name="instructions" form="newRecipe" rows="10" cols="40" 
    placeholder="Enter steps to making your recipe here. Preffered format is one step per line. Example: 
    &#10;Bring 4 quarts water to boil&#10;Add pasta and boil for 10 minutes" value=""></textarea>
    <br />
    <label for="notes">Recipe Notes: </label>
    <textarea name="notes" form="newRecipe" rows="4" cols="40" 
    placeholder="Enter side notes about the recipe" value=""></textarea>
    <br />
    <label for="cuisineType">Type of Cuisine: </label>
    <input type="text" name="cuisineType" value="" placeholder="ie: 'Japanese', 'Amercian' " />
    <br />
    <label for="recipeImg">Submit a link to the an image of the recipe: </label>
    <input type="url" name="recipeImg" value="" placeholder="" />
    <br />
    <label for="recipeLink">Link to Recipe: </label>
    <input type="url" name="recipeLink" value="" placeholder="" />
    <br />
    <input type="submit" value="Submit Recipe" />
  </form>
  </div>
)


const editRecipeItems = (ingItems) => (
  // if (ingItems.unit != false){
  //   unitType = ingItems.unit}
  // else {
  //   unitType = ingItems.other
  // }
  <li><button>-</button>{ingItems.qty}<button>+</button>  
  <input value={ingItems.unit}/> <input value={ingItems.other}/> 
  <input value={ingItems.name}/> <input value={ingItems.comment}/> 
  <button>Delete Ingredient</button></li>
)

const editInstructionSteps = (instructionSteps) => (
  <li><input  value={instructionSteps} /></li>
)

const reviewRecipe = (recipe) => (
  
  <div>
  <h2> Review and Edit Recipe </h2>
  <form id="newRecipe"> 
    <label for="recipeName">Recipe Name: </label>
    <input type="text" name="recipeName" value={recipe.recipeName} placeholder="Name of Recipe" />
    <br />
    <label for="summary">Recipe Summary: </label>
    <textarea name="summary" form="newRecipe" rows="4" cols="40" 
    placeholder="Enter a brief summary of the recipe" value={recipe.summary}></textarea>
    <br />
    <div>
      <h3>Ingredients</h3>
      {recipe.ingredients.map(editRecipeItems)}
      <button>Add additonal ingredient</button>
    </div>
    <br />
    <div>
      <ol>
        {recipe.instructions.map(editInstructionSteps)}
      </ol>
    </div>
    <br />
    <label for="notes">Recipe Notes: </label>
    <textarea name="notes" form="newRecipe" rows="4" cols="40" 
    placeholder="Enter side notes about the recipe" value={recipe.notes}></textarea>
    <br />
    <label for="cuisineType">Type of Cuisine: </label>
    <input type="text" name="cuisineType" value={recipe.notes} placeholder="ie: 'Japanese', 'Amercian' " />
    <br />
    <label for="recipeImg">Submit a link to the an image of the recipe: </label>
    <input type="url" name="recipeImg" value={recipe.recipeImg} placeholder="" />
    <img src={recipe.recipeImg} alt={recipe.name} width="500" height="400"/>
    <br />
    <label for="recipeLink">Link to Recipe: </label>
    <input type="url" name="recipeLink" value={recipe.recipeLink} placeholder="" />
    <br />
    {/* deletes recipe from database */}
    <button>Delete Recipe</button>
    {/* reset's recipe data to match what is in the database from intial add/last saved edit*/}
    <button>Start Over</button>
    {/* saves entered data above to database */}
    <input type="submit" value="Save Recipe" />
  </form>
  </div>
)

//factor multiple ingredient listings/instrucions
//ie Component Name, ingredient list, Component Name, ingredient list, etc

const testRecipe = {
    recipeName: 'Pot Stickers',
    ingredients: [
  {
    "unit": "pound",
    "input": "1 pound ground pork",
    "name": "pork",
    "qty": "1",
    "comment": "ground"
  },
  {
    "unit": "cup",
    "input": "1 cup shredded green cabbage",
    "name": "green cabbage",
    "qty": "1",
    "comment": "shredded"
  },
  {
    "unit": "ounce",
    "other": ",",
    "input": "3 ounces shiitake mushrooms, diced",
    "name": "shiitake mushrooms",
    "qty": "3",
    "comment": "diced"
  },
  {
    "unit": "clove",
    "input": "2 cloves garlic, pressed",
    "name": "garlic, pressed",
    "qty": "2"
  },
  {
    "other": ",",
    "input": "2 green onions, thinly sliced",
    "name": "green onions",
    "qty": "2",
    "comment": "thinly sliced"
  },
  {
    "unit": "tablespoon",
    "input": "1 tablespoon hoisin",
    "name": "hoisin",
    "qty": "1"
  },
  {
    "unit": "tablespoon",
    "input": "1 tablespoon freshly grated ginger",
    "name": "ginger",
    "qty": "1",
    "comment": "freshly grated"
  },
  {
    "unit": "teaspoon",
    "input": "2 teaspoons sesame oil",
    "name": "sesame oil",
    "qty": "2"
  },
  {
    "unit": "teaspoon",
    "other": ", or",
    "input": "1 teaspoon Sriracha*, or more, to taste",
    "name": "Sriracha*",
    "qty": "1",
    "comment": "more, to taste"
  },
  {
    "unit": "teaspoon",
    "input": "1/4 teaspoon white pepper",
    "name": "white pepper",
    "qty": "1/4"
  },
  {
    "input": "36 won ton wrappers",
    "name": "won ton wrappers",
    "qty": "36"
  },
  {
    "unit": "tablespoon",
    "input": "2 tablespoons vegetable oil Soy sauce, for serving",
    "name": "vegetable oil Soy sauce",
    "qty": "2",
    "comment": "for serving"
  }
],
    instructions: [
      ( 'In a large bowl, combine pork, cabbage, mushrooms, garlic, green onions, hoisin, ginger, sesame oil, Sriracha and white pepper.'),
      ('To assemble the dumplings, place wrappers on a work surface. Spoon 1 tablespoon of the pork mixture into the center of each wrapper. Using your finger, rub the edges of the wrappers with water. Fold the dough over the filling to create a half-moon shape, pinching the edges to seal.'),
      ('Heat vegetable oil in a large skillet over medium heat. Add potstickers in a single layer and cook until golden and crisp, about 2-3 minutes per side.'), 
      ('Serve immediately with soy sauce, if desired.')
    ], 
    summary: 'this is a summary of the recipe',
    notes: 'To freeze, place uncooked potstickers in a single layer on a baking sheet overnight. Transfer to freezer bags.',
    recipeImg: 'https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_7626edit-1.jpg',
    cuisineType: 'Korean',
    recipeLink: 'https://damndelicious.net/2014/03/01/potstickers/'
  }

const userRecipeList = (user) => (
  <div>
    <h2>User and recipes details</h2>
    <h2>{user.username}</h2>
    {recipeDetails(testRecipe)}
  </div>
)


const testUsers = [
  { username: "SageGuy", email: "ryansage09@gmail.com", recipes: ''},
  { username: "Muffin", email: "afreeman_2010@yahoo.com", recipes: [testRecipe]}
]
const App = () => (
  <div>
    <h1>Pintecipe</h1>
    {/* {userList(testUsers)} */}
    {/* {recipeDetails(testRecipe)} */}
    {userRecipeList(testUsers[1])}
    <br />
    <br />
    <br />
    <br />

    {userRecipeListing(testUsers[1].recipes)}

    <br />
    <br />
    <br />
    <br />

    {newRecipeForm()}
    {reviewRecipe(testRecipe)}
  </div>
)

export default App;