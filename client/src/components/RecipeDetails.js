import React from 'react';

class RecipeDetails extends React.Component {
    state = {
      recipe: {},
    } 
    componentDidMount = () => {
      fetch('/api/recipe/4/')
      .then(res => res.json())
      .then(currentRecipe => {
        console.log('logging of user from RecipeDetails', currentRecipe)
        this.setState({ recipe: currentRecipe })
      })
    }
    recipeItems = (ingItems) => (
        <li>{ingItems.ingDesc}</li>
      )
    instructionSteps = (instructionSteps) => (
      <li>{instructionSteps.stepDesc}</li>
    )
    render = () => (
      <div> 
      <h3>{this.state.recipe.recipeName}</h3>
       <h3>Ingredients</h3>
       <ul> 
       {this.state.recipe.ingList !== undefined ? this.state.recipe.ingList.map(this.recipeItems) : null }
      </ul> 
      <h3>Instructions</h3>
      <ol>
        {this.state.recipe.instructions != undefined ? this.state.recipe.instructions.map(this.instructionSteps) : null }
      </ol>
      <img src={this.state.recipe.recipeImg} alt={this.state.recipe.recipeName} width="500" height="400"/>
      <h3>Recipe Summary</h3>
      <p>{this.state.recipe.summary}</p>
      <h3>Cuisine Type: {this.state.recipe.cuisineType}</h3> 
      <h3>Link to recipe:</h3>
      <a href={this.state.recipe.recipeLink}>{this.state.recipe.recipeLink}</a> 
    </div>
    )
  }

  
export default RecipeDetails

