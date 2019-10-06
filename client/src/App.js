import React from 'react';
import UserHomePage from './components/UserHomepage'

const usersListItems = (user) => (
  <li>{user.id} - {user.username} - {user.email}</li>
)

const userList = (users) => (
  <ul>
    {users.map(usersListItems)}
  </ul>
)

// const userRecipes = (recipe) => (
//   <li>{recipe.recipeName}</li>
// )
// const userRecipeListing = (user) => (
//   <div>
//   <h2>{user.username} Available Recipes</h2>
//   <ul>{user.recipes.map(userRecipes)}</ul>
//   </div>
// )

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




const testRecipe = {
    id: 1,
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

 class ReviewRecipeForm extends React.Component {
  state = {
    recipe: {...this.props.recipe}
    // ingredients = [opp],
    // instructrions = [],
    // summary: "",
    // notes: "",
    // recipeImg: "",
    // cuisineType: "",
    // recipeLink: ""
  }
  //factor multiple ingredient listings/instrucions
  //ie Component Name, ingredient list, Component Name, ingredient list, etc



  handleInput = (evnt) => {
    let currentRecipe = {...this.state.recipe};

    currentRecipe[evnt.target.name] = evnt.target.value;

    this.setState({recipe: currentRecipe})
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    
    this.props.addNewRecipe(this.state)
  }
  editRecipeItems = (ingItems) => (
    // if (ingItems.unit != false){
    //   unitType = ingItems.unit}
    // else {
    //   unitType = ingItems.other
    // }
    <li><button>-</button>{ingItems.qty}<button>+</button>  
    <input name="unit"onChange={this.handleInput} value={ingItems.unit}/> <input name="other" onChange={this.handleInput} value={ingItems.other}/> 
    <input name="name"onChange={this.handleInput} value={ingItems.name}/> <input name="comment" onChange={this.handleInput} value={ingItems.comment}/> 
    <button>Delete Ingredient</button></li>
  )
  
  editInstructionSteps = (instructionSteps) => (
    <li><input  name="" onChange={this.handleInput} value={instructionSteps} /></li>
  )
  
   render = () => (
   <div>
     <h2>Review and Edit Recipe</h2>
     <form id="editRecipe"> 
    <label for="recipeName">Recipe Name: </label>
    <input type="text" name="recipeName" onChange={this.handleInput} value={this.state.recipe.recipeName} placeholder="Name of Recipe" />
    <br />
    <label for="summary">Recipe Summary: </label>
    <textarea name="summary" onChange={this.handleInput} form="editRecipe" rows="4" cols="40" 
    placeholder="Enter a brief summary of the recipe" value={this.state.recipe.summary}></textarea>
    <br />
     <div>
      <h3>Ingredients</h3>
      {this.state.recipe.ingredients.map(this.editRecipeItems)}
      <button>Add additonal ingredient</button>
    </div>
    <br />
    <div>
      <ol >
        {this.state.recipe.instructions.map(this.editInstructionSteps)}
      </ol>
    </div>
    <br />
    <label for="notes">Recipe Notes: </label>
    <textarea name="notes" onChange={this.handleInput} form="editRecipe" rows="4" cols="40" 
    placeholder="Enter side notes about the recipe" value={this.state.recipe.notes}></textarea>
    <br />
    <label for="cuisineType">Type of Cuisine: </label>
    <input type="text" name="cuisineType" onChange={this.handleInput} value={this.state.recipe.cuisineType} placeholder="ie: 'Japanese', 'Amercian' " />
    <br />
    <label for="recipeImg">Submit a link to the an image of the recipe: </label>
    <input type="url" onChange={this.handleInput} name="recipeImg" value={this.state.recipe.recipeImg} placeholder="" />
    <img src={this.state.recipe.recipeImg} onChange={this.handleInput} alt={this.state.recipe.name} width="500" height="400"/>
    <br />
    <label for="recipeLink">Link to Recipe: </label>
    <input type="url" name="recipeLink" onChange={this.handleInput} value={this.state.recipe.recipeLink} placeholder="" />
    <br /> 
    {/* deletes recipe from database
    <button>Delete Recipe</button>
    {/* reset's recipe data to match what is in the database from intial add/last saved edit*/}
    <button>Start Over</button>
    {/* saves entered data above to database */}
    <input type="submit" value="Save Recipe" />
  </form>
   </div>
   )
 }




const userRecipeList = (user) => (
  <div>
    <h2>User and recipes details</h2>
    <h2>{user.username}</h2>
    {recipeDetails(user.recipes)}
  </div>
)
class NewRecipeForm extends React.Component {
  state = {
    recipeName: "",
    // ingredients = [],
    // instructrions = [],
    summary: "",
    notes: "",
    recipeImg: "",
    cuisineType: "",
    recipeLink: ""
  }
  //instructions
//for each line push an item into to state:instructions[]
  handleInput = (evnt) => {
    let newRecipe = {...this.state};

    newRecipe[evnt.target.name] = evnt.target.value;

    this.setState(newRecipe)
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    
    this.props.addNewRecipe(this.state)
  }
  render = () => (
    <div>
      <h2> Add a recipe </h2>
  <form id="newRecipe" onSubmit={this.handleSubmit}> 
    <label for="recipeName">Recipe Name: </label>
    <input type="text" onChange={this.handleInput} name="recipeName" value={this.recipeName} placeholder="Name of Recipe" />
    <br />
    <label for="summary">Recipe Summary: </label>
    <textarea name="summary" onChange={this.handleInput} form="newRecipe" rows="4" cols="40" 
    placeholder="Enter a brief summary of the recipe" value={this.summary}></textarea>
    <br />
    <label for="ingredients">Ingredients:  </label>
    <textarea name="ingredients" onChange={this.handleInput} form="newRecipe" rows="10" cols="40" 
    placeholder="Example of the preffered recipe format: &#10;'1 cup cheddar cheese, shredded'" value=""></textarea>
    <br />
    <label for="instructions">Instructions: </label>
    <textarea name="instructions" onChange={this.handleInput} form="newRecipe" rows="10" cols="40" 
    placeholder="Enter steps to making your recipe here. Preffered format is one step per line. Example: 
    &#10;Bring 4 quarts water to boil&#10;Add pasta and boil for 10 minutes" value=""></textarea>
    <br />
    <label for="notes">Recipe Notes: </label>
    <textarea name="notes" onChange={this.handleInput} form="newRecipe" rows="4" cols="40" 
    placeholder="Enter side notes about the recipe" value={this.notes}></textarea>
    <br />
    <label for="cuisineType">Type of Cuisine: </label>
    <input type="text" name="cuisineType" onChange={this.handleInput} value={this.cuisineType} placeholder="ie: 'Japanese', 'Amercian' " />
    <br />
    <label for="recipeImg">Submit a link to the an image of the recipe: </label>
    <input type="url" name="recipeImg"  onChange={this.handleInput} value={this.recipeImg} placeholder="" />
    <br />
    <label for="recipeLink">Link to Recipe: </label>
    <input type="url" name="recipeLink" onChange={this.handleInput} value={this.recipeLink} placeholder="" />
    <br />
    <input type="submit" value="Submit Recipe" />
  </form>
    </div>
  )
}

class RecipeDetails extends React.Component {
  state = {
    recipe: {...this.props.currentRecipe}
  } 

  render = () => (
    <div> 
    <h3>{this.state.recipe.recipeName}</h3>
    <h3>Ingredients</h3>
    <ul>
      {this.state.recipe.ingredients.map(recipeItems)}
    </ul> 
    <h3>Instructions</h3>
    <ol>
      {this.state.recipe.instructions.map(instructionSteps)}
    </ol>
    <img src={this.state.recipe.recipeImg} alt={this.state.recipe.name} width="500" height="400"/>
    <h3>Recipe Summary</h3>
    <p>{this.state.recipe.summary}</p>
    <h3>Cuisine Type: {this.state.recipe.cuisineType}</h3> 
    <h3>Link to recipe:</h3>
    <a href={this.state.recipe.recipeLink}>{this.state.recipe.recipeLink}</a>
  </div>
  )
}


const testUsers = [
  { username: "SageGuy", email: "ryansage09@gmail.com", recipes: []},
  { username: "Muffin", email: "afreeman_2010@yahoo.com", recipes: [testRecipe]}
]


class NewUserForm extends React.Component {
  state = 
    { username: ""
    , email   : ""
    }

  handleInput = (evnt) => {
    let newUser = {...this.state};

    newUser[evnt.target.name] = evnt.target.value;

    this.setState(newUser)
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();

    this.props.addNewUser(this.state)
  }
  render = () => (
    <form onSubmit={this.handleSubmit}>
      <label for="username" >Username</label>
      <input type="text"   name="username" onChange={this.handleInput} value={this.state.username} placeholder="User Name"/>
      <br />
      <label for="email" >Email</label>
      <input type="email"  name="email"    onChange={this.handleInput} value={this.state.email}    placeholder="Email"/>
      <br />
      <input type="submit"                 value="New User" />
    </form>
  )
}

  const testUserModel = 
    [
      { id:1, 
        username: "SageGuy", 
        email: "ryansage09@gmail.com", 
        recipes: []
      },

    { id:2, 
      username: "ali", 
      email: "afreeman_2010@yahoo.com", 
      recipes: [testRecipe]
    }
    ]


  const getUsersFromServer = () =>
    fetch('/api/user/')
      .then(res => res.json())

class App extends React.Component {
  state = {
    currentUser: 1,
    users: testUserModel
  }
  componentDidMount = () => {
    getUsersFromServer()
      .then(users => {
        console.log("logging of users: ", users)
        this.setState({ users })
      })
  }
  getNextUserId = () => 
    Math.max(...this.getAllUsers().map(user => user.id)) +1

  addNewUser = (newUser) => {
    newUser.recipes = [];
    newUser.id = this.getNextUserId()

    let users = {...this.state.users};

    users[newUser.id] = newUser;

    this.setState({ users })
  }

  getCurrentUser = () =>
    this.state.users[this.state.currentUser]

  getAllUsers = () =>
    Object.values(this.state.users)

  getNextRecipeId = () => 
    Math.max(...this.getCurrentUser().recipes.map(recipe => recipe.id)) +1
  
  addNewRecipeCurrentUser = (recipe) => {
    const newRecipe = 
    { 
      recipeName: recipe.recipeName,
      ingredients: [],
      instructions: [],
      summary: recipe.summary,
      notes: recipe.notes,
      cuisineType: recipe.cuisineType,
      recipeImg: recipe.recipeImg,
      recipeLink: recipe.recipeLink,
      id: this.getNextRecipeId()
    }

      let users = {...this.state.users};

      users[this.state.currentUser].recipes.push(newRecipe)
      console.log(users)
      this.setState({ users })
  }

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }

  render = () => (
  <div>
    <aside>
      <h1>New User Form and List of All Users</h1>
      <NewUserForm addNewUser={this.addNewUser}/>
      {userList(this.getAllUsers())}
      ____________________________________________________________________________________
    </aside>
    <article>
    {/* <NewRecipeForm addNewRecipe={this.addNewRecipeCurrentUser} />
    <ReviewRecipeForm recipe={this.getCurrentUser().recipes[0]}/> */}
    <UserHomePage currentUser={this.getCurrentUser()}/>
    <RecipeDetails currentRecipe={this.getCurrentUser().recipes[0]} />
    {/* {userRecipeListing(this.getCurrentUser())} */}
    {/* {recipeDetails(this.getCurrentUser().recipes[0])} */}
    </article>
  </div>
  )
}

export default App;



