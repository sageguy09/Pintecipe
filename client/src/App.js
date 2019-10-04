import React from 'react';

const usersListItems = (user) => (
  <li>{user.id} - {user.username} - {user.email}</li>
)

const userList = (users) => (
  <ul>
    {users.map(usersListItems)}
  </ul>
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
    <h3>{recipe.name}</h3>
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients.map(recipeItems)}
    </ul> 
    <h3>Instructions</h3>
    <ol>
      {recipe.instructions.map(instructionSteps)}
    </ol>
    <img src={recipe.imgUrl} alt={recipe.name} width="500" height="400"/>
    <h3>Recipe Summary</h3>
    <p>{recipe.summary}</p>
    <h3>Cuisine Type: {recipe.cuisineType}</h3> 
    <h3>Link to recipe:</h3>
    <a href='https://damndelicious.net/2014/03/01/potstickers/'> {recipe.name}</a>
  </div>
)

//instructions
//for each line push an item into to state:instructions[]


//factor multiple ingredient listings/instrucions
//ie Component Name, ingredient list, Component Name, ingredient list, etc

const testRecipe = {
    name: 'Pot Stickers',
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
    imgUrl: 'https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_7626edit-1.jpg',
    cuisineType: 'Japanese',
    recipeLink: 'https://damndelicious.net/2014/03/01/potstickers/'
  }

const userRecipeList = (user) => (
  <div>
    <h2>{user.username}</h2>
    {recipeDetails(testRecipe)}
  </div>
)


const testUsers = [
  { username: "SageGuy", email: "ryansage09@gmail.com", recipes: ''},
  { username: "Muffin", email: "afreeman_2010@yahoo.com", recipes: testRecipe}
]
const App = () => (
  <div>
    <h1>Pintecipe</h1>
    {/* {userList(testUsers)} */}
    {/* {recipeDetails(testRecipe)} */}
    {userRecipeList(testUsers[1])}
  </div>
)

export default App;