import React from 'react';
import { Link } from 'react-router-dom';
class RecipeDetails extends React.Component {
    state = {
      recipe: {},
    } 
    componentDidMount = () => {
      console.log(this.props.match.params)
      fetch(`/api/recipe/${this.props.match.params.id}`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        },
        credentials: 'include'
      })
      .then(res => res.json())
      .then(currentRecipe => {
      console.log('logging of user from RecipeDetails', currentRecipe)
        this.setState({ recipe: currentRecipe })
      });
    }
    recipeItems = (ingItems) => (
        <li>{ingItems.ingDesc}</li>
      )
    instructionSteps = (instructionSteps) => (
      <li>{instructionSteps.stepDesc}</li>
    )


    render = () => (
      <div class="section"> 

<div class="container">
      <h1 class="title is-1">{this.state.recipe.recipeName}</h1>
       
       <img class="is-pulled-right" src={this.state.recipe.recipeImg} alt={this.state.recipe.recipeName} width="500" height="400"/>
       <div class="block">
       <ul> 
       <h3 class="title is-3">Ingredients</h3>
       {this.state.recipe.ingList !== undefined ? this.state.recipe.ingList.map(this.recipeItems) : null }
      </ul> 
      </div>
      
      <div class="content">
      <h3 class="title is-3">Instructions</h3>
      <ol >
        {this.state.recipe.instructions !== undefined ? this.state.recipe.instructions.map(this.instructionSteps) : null }
      </ol>
      </div>
      <h3>Recipe Summary</h3>
      <p>{this.state.recipe.summary}</p>
      <h3>Cuisine Type: {this.state.recipe.cuisineType}</h3> 
      <h3>Link to recipe:</h3>
      <a href={this.state.recipe.recipeLink}>{this.state.recipe.recipeLink}</a> 
      </div>
      <div>
        <button class="button is-primary"><Link to={`/reviewRecipe/${this.state.recipe.id}/`}>Edit Recipe</Link></button>
      </div>
      </div>
    
    )
  }

  
export default RecipeDetails

