import React from 'react';
import { Link } from 'react-router-dom';
import "bulma/css/bulma.css"
class UserHomePage extends React.Component {
    state = {
      logged_in: localStorage.getItem('token') ? true : false,
      user: this.props.currentUser ,
      //recipes: {...this.props.userRecipes}
    }
  


    // componentDidMount = () => {
    //   if (this.state.logged_in) {
    //     fetch('http://localhost:8000/api/current_user/', {
    //       headers: {
    //         Authorization: `JWT ${localStorage.getItem('token')}`
    //       }
    //     })
    //       .then(res => res.json())
    //       .then(json => {
    //         this.setState({ user: json.user });
    //       });
    //   }
    //  // this.getUser();
    // }
  
    // getUser = () => {
    //   fetch(`/api/user/${this.props.currentUser.id}/`)
    //   .then(res => res.json())
    //   .then(user => {
    //     console.log("logging of user: ", user)
    //     this.setState({ user })
    //   })
    // }

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
        {/* <a><Link to="/recipeDetails"> */}
      <article class="tile is-child notification is-info">
      <p class="title"><Link to={`/recipeDetails/${recipe.id}`}>{recipe.recipeName}</Link></p>
        {/* <p class="title"><Link to="/recipeDetails">{recipe.recipeName}</Link></p> */}
        <p class="subtitle">{recipe.summary}</p>
        <figure class="image is-4by3">
          <img src={recipe.recipeImg}/>
        </figure>
      </article>
      {/* </Link>
      </a> */}
      </div>
    )
    render = () => (
      <div class="container">
        <h2>{this.state.user.username} Home Page</h2>
        <h3>Saved Recipes</h3>
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