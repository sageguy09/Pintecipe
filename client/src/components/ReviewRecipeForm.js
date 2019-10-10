import React from 'react';
import "bulma/css/bulma.css";
class ReviewRecipeForm extends React.Component {
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

  handleInput = (evnt) => {
    let currentRecipe = {...this.state.recipe};
    currentRecipe[evnt.target.name] = evnt.target.value;
    this.setState({recipe: currentRecipe})
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    this.props.addNewRecipe(this.state)
  }

  handleInstructionInput = (evnt) => {
    let newInstructions = {...this.state.recipe.instructions}
    newInstructions[evnt.target.id] = evnt.target.value;
    this.setState({instructions: newInstructions})
  }

  handleIngredientInput = (i) => (evnt) => {
    let newIngredients = {...this.state.recipe.ingList}
    newIngredients[i].ingDesc = evnt.target.value;
    this.setState({ingList: newIngredients})
  }

  editRecipeItems = (ingItem, i) => (
    <li>
      <div class="control">
        <input 
          type="text" 
          class="input" 
          name="ingDesc" 
          //onChange={(evnt) => this.handleIngredientInput(i, evnt)} 
          onChange={this.handleIngredientInput(i)}
          value={ingItem.ingDesc}
        />
      </div>
      {/* <button>Delete Ingredient</button> */}
    </li>
  )
  
  editInstructionSteps = (instructionSteps) => (
    <li>
      <div class="control">
      <input 
      type="text" class="input" name="stepDesc" id={instructionSteps.id} 
      onChange={this.handleInstructionInput} value={instructionSteps.stepDesc} />
      </div>
      {/* <button>Delete Step</button> */}
    </li>
  )
  
  render = () => (
      <div>
        <h2>Review and Edit Recipe</h2>
        <form id="editRecipe"> 
          <div class="field">
            <label class="label">Recipe Name: </label>
                <div class="control">
                  <input type="text" class="input" name="recipeName" onChange={this.handleInput} value={this.state.recipe.recipeName} placeholder="Name of Recipe" />
                </div>
          </div>
          <div class="field">
            <label class="label">Recipe Summary: </label>
                <div class="control">
                  <textarea name="summary" class="textarea" onChange={this.handleInput} form="editRecipe" rows="4" cols="40" 
                  placeholder="Enter a brief summary of the recipe" value={this.state.recipe.summary}></textarea>
                </div>
          </div>
          <div>
            <h3>Ingredients</h3>
            <ul>
              <div class="field">
                {/*list all associated ingredients from ingList as <li>*/}
                {this.state.recipe.ingList !== undefined ? this.state.recipe.ingList.map(this.editRecipeItems) : null}
              </div>
            </ul>
            <div class="field">
              <div class="control">
                <button class="button is-primary">Add additonal ingredient</button>
              </div>
            </div>
          </div>
          <div>
            <h3>Instructions</h3>
            <ol >
              <div class="field">
                {/*list all associated instructions as <li>*/}
                {this.state.recipe.instructions !== undefined ? this.state.recipe.instructions.map(this.editInstructionSteps) : null}
              </div>
            </ol>
            <div class="field">
                <div class="control">
                  <button class="button is-primary">Add additonal instruction step</button>
                </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Notes:</label>
                <div class="control">
                  <textarea name="notes" class="textarea" onChange={this.handleInput} form="editRecipe" rows="4" cols="40" 
                  placeholder="Enter side notes about the recipe" value={this.state.recipe.notes}></textarea>
                </div>
          </div>
          <div class="field">
            <label class="label">Type of Cuisine:</label>
                <div class="control">
                  <input type="text" class="input" name="cuisineType" onChange={this.handleInput} 
                  value={this.state.recipe.cuisineType} placeholder="ie: 'Japanese', 'Amercian' " 
                  />
                </div>
          </div>
          <div class="field">
            <label class="label">Link to Recipe Image:</label>
                <div class="control">
                <input type="url" class="input" onChange={this.handleInput} name="recipeImg" value={this.state.recipe.recipeImg} placeholder="" />
                {/*submitted recipe image*/}
                <img src={this.state.recipe.recipeImg} onChange={this.handleInput} alt={this.state.recipe.name} width="500" height="400"/>
                </div>
          </div>
          <div class="field">
            <label class="label">Link to Recipe:</label>
                <div class="control">
                  <input type="url" class="input" name="recipeLink" onChange={this.handleInput} 
                  value={this.state.recipe.recipeLink} placeholder="" 
                  />
                </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
                {/* saves entered data above to database */}
                <input class="button is-primary" type="submit" value="Save Recipe" />
              </div>
            <div class="control">
            {/* reset's recipe data to match what is in the database from intial add/last saved edit*/}
            <button class="button is-primary">Start Over</button>
            </div>
            <div class="control">
            {/* deletes recipe from database*/}
            <button class="button is-primary">Delete Recipe</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
export default ReviewRecipeForm;