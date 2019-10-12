import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import UserHomePage from './UserHomepage'
import RecipeDetails from './RecipeDetails'
import ReviewRecipeForm from './ReviewRecipeForm'
import NewUserForm from './NewUserForm'
import NewRecipeForm from './NewRecipeForm'
import "bulma/css/bulma.css"

const usersListItems = (user) => (
  <option value={user.id}>{user.username}</option>
)

const userList = (users, currentUserId, onChange) => (
  <select value={currentUserId} onChange={(evnt) => onChange(evnt.target.value)}>
    {users.map(usersListItems)}
  </select>
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
    ('In a large bowl, combine pork, cabbage, mushrooms, garlic, green onions, hoisin, ginger, sesame oil, Sriracha and white pepper.'),
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


// const testUserModel =
//   [
//     {
//       id: 0,
//       username: "SageGuy",
//       email: "ryansage09@gmail.com",
//       recipes: [testRecipe]
//     },

//     {
//       id: 1,
//       username: "ali",
//       email: "afreeman_2010@yahoo.com",
//       recipes: [testRecipe]
//     }
//   ]

const getUsersFromServer = () =>
  fetch('/api/user/')
    .then(res => res.json())
class Home extends React.Component {
  state = {
    currentUser: 1,
    users: [{}]
  }
  componentDidMount = () => {
    getUsersFromServer()
      .then(users => {
        console.log("logging of users: ", users)
        this.setState({ users })
      })
  }
  getCurrentUser = () =>
    this.state.users.find(user => user.id === parseInt(this.state.currentUser))

  getAllUsers = () =>
    Object.values(this.state.users)

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }


  render() {
    let UserPage = () => {
        return (
            <UserHomePage currentUser={this.getCurrentUser() || {}}
            />
        )
    }
    // let NavHeader = () => {
    //   return (
    //     <Header currentUser={this.getCurrentUser()} />
    //   )
    // }

    return (
      <div>
        <Header users={this.state.users[this.state.currentUser]} currentUser={this.getCurrentUser() || {}} />
        {userList(this.getAllUsers(), this.state.currentUser, this.setCurrentUser)}
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/user/" render={UserPage} />
          <Route path="/addUser" component={NewUserForm} />
          <Route path="/addRecipe" component={NewRecipeForm} />
          {/* <Route path="/reviewRecipe" component={ReviewRecipeForm} /> */}
          <Route path="/reviewRecipe/:recipeid/" component={ReviewRecipeForm} />
          <Route path="/recipeDetails/:id" component={RecipeDetails} />
          <Route path="/recipeDetails" component={RecipeDetails} />

        </Switch>
      </div>
    )
  }
}

export default Home