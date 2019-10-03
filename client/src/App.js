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
  <li>{ingItems.qty} {ingItems.unit} {ingItems.name}, {ingItems.comment}</li>
)

const instructionSteps = (instructionSteps) => (
  <li>{instructionSteps}</li>
)


const recipePreview = (recipe) => (
  <div> 
    <h3>{recipe.name}</h3>
    <h3>Ingredients</h3>
    <ul>
      {recipe.ingredients.map(recipeItems)}
    </ul> 
    <h3>Instructions</h3>
    {/* <ul>
      {recipe.instructions.map(instructionSteps)}
    </ul> */}
    {/* <a href={recipe.img_url}>{recipe.name} Image</a>
    <h3>Recipe Summary</h3>
    <p>{recipe.summary}</p>
    <h3>Cuisine Type: {recipe.cuisine_type}</h3>  */}


  </div>
)






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
        "comment": " for serving"
      }
    ],
    instructions: [
      {"step_1": 'In a large bowl, combine pork, cabbage, mushrooms, garlic, green onions, hoisin, ginger, sesame oil, Sriracha and white pepper.'},
      {"step_2":'To assemble the dumplings, place wrappers on a work surface. Spoon 1 tablespoon of the pork mixture into the center of each wrapper. Using your finger, rub the edges of the wrappers with water. Fold the dough over the filling to create a half-moon shape, pinching the edges to seal.'},
      {"step_3": 'Heat vegetable oil in a large skillet over medium heat. Add potstickers in a single layer and cook until golden and crisp, about 2-3 minutes per side.'}, 
      {"step_4": 'Serve immediately with soy sauce, if desired.'}
    ], 
    summary: 'this is a summary of the recipe',
    img_url: 'https://s23209.pcdn.co/wp-content/uploads/2014/03/IMG_7626edit-1.jpg',
    cuisine_type: 'Japanese'
  }




const testUsers = [
  { username: "SageGuy", email: "ryansage09@gmail.com"},
  { username: "Muffin", email: "afreeman_2010@yahoo.com"}
]
const App = () => (
  <div>
    <h1>Hello World.</h1>
    {userList(testUsers)}
    {recipePreview(testRecipe)}
  </div>
)

export default App;