import React from 'react';

class RecipeDetails extends React.Component {
    state = {
      recipe: {...this.props.currentRecipe}
    } 
    recipeItems = (ingItems) => (
        <li>{ingItems.qty} {ingItems.unit} {ingItems.other} {ingItems.name}, {ingItems.comment}</li>
      )
      
      instructionSteps = (instructionSteps) => (
        <li>{instructionSteps}</li>
      )
      
    render = () => (
      <div> 
      <h3>{this.state.recipe.recipeName}</h3>
      <h3>Ingredients</h3>
      <ul>
        {this.state.recipe.ingredients.map(this.recipeItems)}
      </ul> 
      <h3>Instructions</h3>
      <ol>
        {this.state.recipe.instructions.map(this.instructionSteps)}
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

  
export default RecipeDetails