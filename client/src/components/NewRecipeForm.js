
import React from 'react';

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

  export default NewRecipeForm
  