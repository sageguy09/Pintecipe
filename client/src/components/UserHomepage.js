import React from 'react';
class UserHomePage extends React.Component {
    state = {
      user: {...this.props.currentUser},
      //recipes: {...this.props.userRecipes}
    }
  
    componentDidMount = () => {
      fetch('/api/user/1')
        .then(res => res.json())
        .then(user => {
          console.log("logging of users: ", user)
          this.setState({ user })
        })
    }
  
  
    userRecipes = (recipe) => (
      <li>{recipe.recipeName}</li>
    )
    userRecipeListing = (user) => (
      <div>
      <h2>{user.username} Available Recipes</h2>
      <ul>{user.recipes.map(this.userRecipes)}</ul>
      </div>
    )

  
    render = () => (
      <div>
      <h2>{this.state.user.username} Home Page</h2>
      <h3>Saved Recipes</h3>
      <ul>{this.state.user.recipes.map(this.userRecipes)}</ul>
      </div>
    )
  }

  export default UserHomePage