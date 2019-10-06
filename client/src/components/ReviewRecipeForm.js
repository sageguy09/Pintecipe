import React from 'react';

class ReviewRecipeForm extends React.Component {
    state = {
      recipe: {...this.props.recipe}
      // ingredients = [opp],
      // instructrions = [],
      // summary: "",
      // notes: "",
      // recipeImg: "",
      // cuisineType: "",
      // recipeLink: ""
    }
    //factor multiple ingredient listings/instrucions
    //ie Component Name, ingredient list, Component Name, ingredient list, etc
  
  
  
    handleInput = (evnt) => {
      let currentRecipe = {...this.state.recipe};
  
      currentRecipe[evnt.target.name] = evnt.target.value;
  
      this.setState({recipe: currentRecipe})
    }
  
    handleSubmit = (evnt) => {
      evnt.preventDefault();
      
      this.props.addNewRecipe(this.state)
    }
    editRecipeItems = (ingItems) => (
      // if (ingItems.unit != false){
      //   unitType = ingItems.unit}
      // else {
      //   unitType = ingItems.other
      // }
      <li><button>-</button>{ingItems.qty}<button>+</button>  
      <input name="unit"onChange={this.handleInput} value={ingItems.unit}/> <input name="other" onChange={this.handleInput} value={ingItems.other}/> 
      <input name="name"onChange={this.handleInput} value={ingItems.name}/> <input name="comment" onChange={this.handleInput} value={ingItems.comment}/> 
      <button>Delete Ingredient</button></li>
    )
    
    editInstructionSteps = (instructionSteps) => (
      <li><input  name="" onChange={this.handleInput} value={instructionSteps} /></li>
    )
    
     render = () => (
     <div>
       <h2>Review and Edit Recipe</h2>
       <form id="editRecipe"> 
      <label for="recipeName">Recipe Name: </label>
      <input type="text" name="recipeName" onChange={this.handleInput} value={this.state.recipe.recipeName} placeholder="Name of Recipe" />
      <br />
      <label for="summary">Recipe Summary: </label>
      <textarea name="summary" onChange={this.handleInput} form="editRecipe" rows="4" cols="40" 
      placeholder="Enter a brief summary of the recipe" value={this.state.recipe.summary}></textarea>
      <br />
       <div>
        <h3>Ingredients</h3>
        {this.state.recipe.ingredients.map(this.editRecipeItems)}
        <button>Add additonal ingredient</button>
      </div>
      <br />
      <div>
        <ol >
          {this.state.recipe.instructions.map(this.editInstructionSteps)}
        </ol>
      </div>
      <br />
      <label for="notes">Recipe Notes: </label>
      <textarea name="notes" onChange={this.handleInput} form="editRecipe" rows="4" cols="40" 
      placeholder="Enter side notes about the recipe" value={this.state.recipe.notes}></textarea>
      <br />
      <label for="cuisineType">Type of Cuisine: </label>
      <input type="text" name="cuisineType" onChange={this.handleInput} value={this.state.recipe.cuisineType} placeholder="ie: 'Japanese', 'Amercian' " />
      <br />
      <label for="recipeImg">Submit a link to the an image of the recipe: </label>
      <input type="url" onChange={this.handleInput} name="recipeImg" value={this.state.recipe.recipeImg} placeholder="" />
      <img src={this.state.recipe.recipeImg} onChange={this.handleInput} alt={this.state.recipe.name} width="500" height="400"/>
      <br />
      <label for="recipeLink">Link to Recipe: </label>
      <input type="url" name="recipeLink" onChange={this.handleInput} value={this.state.recipe.recipeLink} placeholder="" />
      <br /> 
      {/* deletes recipe from database
      <button>Delete Recipe</button>
      {/* reset's recipe data to match what is in the database from intial add/last saved edit*/}
      <button>Start Over</button>
      {/* saves entered data above to database */}
      <input type="submit" value="Save Recipe" />
    </form>
     </div>
     )
   }
  
   export default ReviewRecipeForm;