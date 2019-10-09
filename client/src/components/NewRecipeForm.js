import React from 'react';
const saveRecipeToServer = (newRecipe) =>
    fetch('/api/recipe/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecipe)
        }
    ).then(res => res.json())
const saveInstructionsToServer = (newInstructions) => 
    fetch('/api/instruction/',
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newInstructions)
        }
    ).then(res => res.json())
const saveIngredientsToServer = (newIngredients) => 
fetch('/api/inglist/',
    {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newIngredients)
    }
).then(res => res.json())



    class NewRecipeForm extends React.Component {
        state = {
            recipe: {
                recipeName: "",
                summary: "",
                notes: "",
                recipeImg: "",
                cuisineType: "",
                recipeLink: "",
                user: 1
             },
             instructions : {
                stepDesc: "",
                steps: [],
                recipe: ""
            },
            ingredients : {
                ingDesc: "",
                ings: [],
                recipe:""
            }
        }
        
        handleInput = (evnt) => {
            let newRecipe = {...this.state.recipe};
            newRecipe[evnt.target.name] = evnt.target.value;
            this.setState({recipe: newRecipe})
        }
        handleInstructionInput = (evnt) => {
            let newInstructions = {...this.state.instructions}
            newInstructions[evnt.target.name] = evnt.target.value;
            this.setState({instructions: newInstructions})
        }
        handleIngredientInput = (evnt) => {
            let newIngredients = {...this.state.ingredients}
            newIngredients[evnt.target.name] = evnt.target.value;
            this.setState({ingredients: newIngredients})
        }


        handleSubmit = (evnt) => {
            evnt.preventDefault();
            this.addNewRecipe(this.state)
            this.addNewInstructions(this.state.instructions)
            this.setState({
                recipe: {
                    recipeName: "",
                    summary: "",
                    notes: "",
                    recipeImg: "",
                    cuisineType: "",
                    recipeLink: "",
                    user: 1
                 },
                 instructions : {
                    stepDesc: "",
                    steps: [],
                    recipe: ""
                },
                ingredients : {
                    ingDesc: "",
                    ings: [],
                    recipe:""
                }
            })
        }


        addNewRecipe = (newRecipeInfo) => {
            saveRecipeToServer(newRecipeInfo.recipe)
                .then(newRecipe => {
                    this.addNewInstructions(newRecipe.id, newRecipeInfo.instructions)
                    this.addNewIngredients(newRecipe.id, newRecipeInfo.ingredients)
                    console.log(newRecipe.id, newRecipeInfo.instructions)
                })
        }

        addNewInstructions = (recipeId, instructions) => {
            let { stepDesc, steps } = instructions
            let lines = stepDesc.split(/\r?\n/);

            for (let i = 0; i < lines.length; i++) {
                const obj = {stepNum: i+1, stepDesc: lines[i].trim(), recipe: recipeId}
                const trimmedLine = lines[i].trim()
                if (trimmedLine !== "") {
                    steps.push(obj);
                }
            }
            this.setState({instructions: {stepDesc, steps}})
            this.state.instructions.steps.forEach(function (instruction){
                let currentInstruction = instruction
                saveInstructionsToServer(currentInstruction)
            })
        } 


        addNewIngredients = (recipeId, ingredients) => {
            let { ingDesc, ings } = ingredients
            let lines = ingDesc.split(/\r?\n/);

            for (let i = 0; i < lines.length; i++) {
                const obj = {ingNum: i+1, ingDesc: lines[i].trim(), recipe: recipeId}
                const trimmedLine = lines[i].trim()
                if (trimmedLine !== "") {
                    ings.push(obj);
                }
            }
            this.setState({ingredients: {ingDesc, ings}})
            this.state.ingredients.ings.forEach(function (ingredient){
                let currentIngredient = ingredient
                saveIngredientsToServer(currentIngredient)
            })
        }

        render = () => (
            <div>
                <h2> Add a recipe </h2>
                <form id="newRecipe" onSubmit={this.handleSubmit}>
                    <label for="recipeName">Recipe Name: </label>
                    <input type="text" onChange={this.handleInput} name="recipeName" value={this.state.recipe.recipeName} placeholder="Name of Recipe" />
                    <br />
                    <label for="summary">Recipe Summary: </label>
                    <textarea name="summary" onChange={this.handleInput} form="newRecipe" rows="4" cols="40"
                        placeholder="Enter a brief summary of the recipe" value={this.state.recipe.summary}></textarea>
                    <br />
                    <h4>Ingredients</h4>
                    <label for="ingDesc">Recipe Ingredients </label>
                    <textarea name="ingDesc" onChange={this.handleIngredientInput} form="newRecipe" rows="10" cols="40" 
                    placeholder="Enter/Paste recipe ingredients here. Please list one ingredient per line. Example: 
                    &#10;4 Quarts water&#10;1 lb. angel hair pasta" value={this.state.ingredients.ingDesc}></textarea>
                    <br />
                    <br />
                    <br />
                    <h4>Instructions</h4>
                    <label for="stepDesc">Recipe Instrucions: </label>
                    <textarea name="stepDesc" onChange={this.handleInstructionInput} form="newRecipe" rows="10" cols="40" 
                    placeholder="Enter/Paste recipe instructions here. Preffered format is one step per line. Example: 
                    &#10;Bring 4 quarts water to boil&#10;Add pasta and boil for 10 minutes" value={this.state.instructions.stepDesc}></textarea>
                    <br />
                    <label for="notes">Recipe Notes: </label>
                    <textarea name="notes" onChange={this.handleInput} form="newRecipe" rows="4" cols="40"
                        placeholder="Enter side notes about the recipe" value={this.state.recipe.notes}></textarea>
                    <br />
                    <label for="cuisineType">Type of Cuisine: </label>
                    <input type="text" name="cuisineType" onChange={this.handleInput} value={this.state.recipe.cuisineType} placeholder="ie: 'Japanese', 'Amercian' " />
                    <br />
                    <label for="recipeImg">Submit a link to the an image of the recipe: </label>
                    <input type="url" name="recipeImg" onChange={this.handleInput} value={this.state.recipe.recipeImg} placeholder="" />
                    <br />
                    <label for="recipeLink">Link to Recipe: </label>
                    <input type="url" name="recipeLink" onChange={this.handleInput} value={this.state.recipe.recipeLink} placeholder="" />
                    <br /> 
                    <input type="submit" value="Submit Recipe" />
                </form>
            </div>
        )
    }

    export default NewRecipeForm
