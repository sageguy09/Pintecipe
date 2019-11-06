import React from 'react';
import { Link } from 'react-router-dom';
import "bulma/css/bulma.css"
class UserHomePage extends React.Component {
    state = {
      logged_in: localStorage.getItem('token') ? true : false,
      user: {} ,
    }
  
    componentDidMount = () => {
      if (this.state.logged_in) {
        fetch('/api/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          },
          credentials: 'include'
        })
          .then(res => res.json())
          .then(user => {
            this.setState({ user: user });
          });
      }
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

    userRecipeTiles = (recipe) => (
      <div class="tile is-parent is-3">
      <article class="tile is-child notification is-info">
      <p class="title"><Link to={`/RecipeDetails/${recipe.id}`}>{recipe.recipeName}</Link></p>
        <p class="subtitle">{recipe.summary}</p>
        <figure class="image is-4by3">
          <img alt="recipe " src={recipe.recipeImg}/>
        </figure>
      </article>
      </div>
    )
    render = () => (
      <div class="container">
        <h2 class="title">{this.state.user.username!== undefined ? this.state.user.username: null} Home Page</h2>
        <h3 class="title is-4">Saved Recipes</h3>
          {/* <ul>{this.state.user.recipes!== undefined ? this.state.user.recipes.map(this.userRecipes) : null}</ul> */}
        <div class="tile is-ancestor is-flex">
          <div class="tile ">
            {this.state.user.recipes!== undefined ? this.state.user.recipes.map(this.userRecipeTiles) : null}
          </div>
        </div>
      </div>
    )
  }

  export default UserHomePage