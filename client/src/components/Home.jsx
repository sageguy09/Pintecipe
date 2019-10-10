import React from 'react';
import {Route, Switch} from 'react-router-dom'
import UserHomePage from './UserHomepage'
import RecipeDetails from './RecipeDetails'
import ReviewRecipeForm from './ReviewRecipeForm'
import NewUserForm from './NewUserForm'
import NewRecipeForm from './NewRecipeForm'
import "bulma/css/bulma.css"

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

 
const testUserModel = 
[
  { id:0, 
    username: "SageGuy", 
    email: "ryansage09@gmail.com", 
    recipes: [testRecipe]
  },

{ id:1, 
  username: "ali", 
  email: "afreeman_2010@yahoo.com", 
  recipes: [testRecipe]
}
]

const getUsersFromServer = () =>
fetch('/api/user/')
  .then(res => res.json())
class Home extends React.Component {
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
      getCurrentUser = () =>
      this.state.users[this.state.currentUser]
render() { 
    let UserPage = () => {
        return (
            <UserHomePage currentUser={this.getCurrentUser()} />
        )
    }

return (
<div>

<section class="hero is-dark is-small">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title"> Pintecipe</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Add User
            </a>
            <a class="navbar-item">
              Add Recipe
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fas fa-user"></i>
                </span>
                <span>Current User</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
    </div>
  </div>
</section>
<Switch>
    {/* <Route exact path="/" component={Home}/> */}
    <Route path="/user" render={UserPage}/>
    <Route path="/addUser" component={NewUserForm}/>
    <Route path="/addRecipe" component={NewRecipeForm}/>
    <Route path="/reviewRecipe" component={ReviewRecipeForm}/>
    <Route path="/recipeDetails" component={RecipeDetails}/>
    
</Switch>
    </div>
)
}
}

export default Home