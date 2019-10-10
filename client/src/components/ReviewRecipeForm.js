import React from 'react';
import "bulma/css/bulma.css";

const updateRecipeOnServer = (recipeId, updatedRecipe) =>
    fetch('/api/recipe/'+recipeId+'/',
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedRecipe)
        }
    ).then(res => res.json())
const updateIngListOnServer = (ingId, updatedIngItem) =>
//console.log(ingId, updatedIngItem)
fetch('/api/inglist/'+ingId+'/',
    {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedIngItem)
    }
).then(res => res.json())
const updateInstructionsOnServer = (instId, updatedInst) =>
//console.log(ingId, updatedIngItem)
fetch('/api/instruction/'+instId+'/',
    {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedInst)
    }
).then(res => res.json())
const DeleteRecipeFromServer = (recipeId, deletedRecipe) =>
  //console.log(recipeId, deletedRecipe)    
fetch('/api/recipe/'+recipeId+'/',
        {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(deletedRecipe)
        }
    )
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
    //this.props.addNewRecipe(this.state)
    this.updateRecipe(this.state)
  }
  handleDelete = (evnt) => {
    evnt.preventDefault();
    this.deleteRecipe(this.state)
  }
  updateRecipe = (updatedRecipe) => {

    //console.log( 'api/recipe/'+updatedRecipe.recipe.id)
    updateRecipeOnServer(updatedRecipe.recipe.id, updatedRecipe.recipe)
      .then(savedRecipe =>{
        this.updateIngList(updatedRecipe.recipe)
        this.updateInstructions(updatedRecipe.recipe)
        //console.log(updatedRecipe)
      })
  }
  updateIngList = (savedRecipe) => {
    //console.log(savedRecipe.ingList)
    savedRecipe.ingList.forEach(function(ingItem){
      let currentIngredient = ingItem
      //console.log(currentIngredient)
      updateIngListOnServer(currentIngredient.id, currentIngredient)
      //console.log(savedRecipe.ingList)
    })
  }
  updateInstructions = (savedRecipe) => {
    //console.log(savedRecipe.ingList)
    savedRecipe.instructions.forEach(function(instruction){
      let currentInstruction = instruction
      //console.log(currentInstruction)
      updateInstructionsOnServer(currentInstruction.id, currentInstruction)
      //console.log(savedRecipe.ingList)
    })
  }

  deleteRecipe = (recipeToDelete) => {
    //console.log(recipeToDelete)
    DeleteRecipeFromServer(recipeToDelete.recipe.id, recipeToDelete.recipe)
  }
  handleInstructionInput = (evnt) => {
    let newInstructions = {...this.state.recipe.instructions}
    newInstructions[evnt.target.id] = evnt.target.value;
    this.setState({instructions: newInstructions})
  }

  handleIngredientInput = (recipieKey, objKey) => (i) => (evnt) => {
    let recipe = {...this.state.recipe}
    recipe[recipieKey][i][objKey] = evnt.target.value;
    this.setState({ recipe })
  }

  editRecipeItems = (ingItem, i) => (
    <li>
      <div class="control">
        <input 
          type="text" 
          class="input" 
          name="ingDesc" 
          //onChange={(evnt) => this.handleIngredientInput(i, evnt)} 
          onChange={this.handleIngredientInput("ingList", "ingDesc")(i)}
          value={ingItem.ingDesc}
        />
      </div>
      {/* <button>Delete Ingredient</button> */}
    </li>
  )
  
  editInstructionSteps = (instructionSteps, i) => (
    <li>
      <div class="control">
      <input 
        type="text" 
        class="input" 
        name="stepDesc"
        onChange={this.handleIngredientInput("instructions", "stepDesc")(i)}
        value={instructionSteps.stepDesc} 
      />
      </div>
      {/* <button>Delete Step</button> */}
    </li>
  )



//initial code for adding a list item to ingredients
  // addIngredientItem = () => (
  //   <li>
  //     <div class="control">
  //       <input 
  //       type="text"
  //       class="input"
  //       name="indDesc"
  //       onChange={this.handleInstructionInput}
  //       value={this.ingList.ingDesc} />
  //     </div>
  //   </li>
  // )
  
  render = () => (
      <div>
        <h2>Review and Edit Recipe</h2>
        <form id="editRecipe" onSubmit={this.handleSubmit}> 
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
            <button class="button is-primary" onClick={this.componentDidMount}>Start Over</button>
            </div>
            <div class="control">
            {/* deletes recipe from database*/}
            <button class="button is-primary" onClick={this.handleDelete}>Delete Recipe</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
  
export default ReviewRecipeForm;