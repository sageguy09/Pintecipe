import React from 'react';
import "bulma/css/bulma.css"
class UserHomePage extends React.Component {
    state = {
      user: {...this.props.currentUser},
      //recipes: {...this.props.userRecipes}
    }
  

    getUser = () => {
      fetch(`/api/user/${this.props.match.params.id}/`)
      .then(res => res.json())
      .then(user => {
        console.log("logging of user: ", user)
        this.setState({ user })
      })
    }

    componentDidMount = () => {
      this.getUser();
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
      <ul>{this.state.user.recipes!== undefined ? this.state.user.recipes.map(this.userRecipes) : null}</ul>
      </div>
    )
  }
  // {this.state.recipe.instructions !== undefined ? this.state.recipe.instructions.map(this.editInstructionSteps) : null}
  export default UserHomePage