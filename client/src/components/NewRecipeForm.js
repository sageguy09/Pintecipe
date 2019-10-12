import React from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import "bulma/css/bulma.css";

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
            user: this.props.currentUser
            },
        instructions : {
            stepsDesc: "",
            steps: [],
            recipe: ""
            },
        ingList : {
            ingDesc: "",
            ings: [],
            recipe:""
            },
            redirect: false
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
        let newIngredients = {...this.state.ingList}
        newIngredients[evnt.target.name] = evnt.target.value;
        this.setState({ingList: newIngredients})
    }

    submitForm = (evnt) => {
        evnt.preventDefault();
        console.log(this.state)
    }
    
    
    handleSubmit = (evnt) => {
        evnt.preventDefault();
        this.addNewRecipe(this.state)
        //this.addNewInstructions(this.state.instructions)
        this.setState({
            // recipe: {
            //     recipeName: "",
            //     summary: "",
            //     notes: "",
            //     recipeImg: "",
            //     cuisineType: "",
            //     recipeLink: "",
            //     user: 1
            //     },

            // instructions : {
            //     stepsDesc: "",
            //     steps: [],
            //     recipe: ""
            //     },
            // ingList : {
            //     ingDesc: "",
            //     ings: [],
            //     recipe:""
            // },
            redirect: true
        })

    }


    addNewRecipe = (newRecipeInfo) => {
        saveRecipeToServer(newRecipeInfo.recipe)
            .then(newRecipe => {
                this.addNewInstructions(newRecipe.id, newRecipeInfo.instructions)
                this.addNewIngredients(newRecipe.id, newRecipeInfo.ingList)
                console.log(newRecipe.id, newRecipeInfo.instructions)
            })
    }

    addNewInstructions = (recipeId, instructions) => {
        let { stepsDesc, steps } = instructions
        let lines = stepsDesc.split(/\r?\n/);

        for (let i = 0; i < lines.length; i++) {
            const obj = {stepNum: i+1, stepDesc: lines[i].trim(), recipe: recipeId}
            const trimmedLine = lines[i].trim()
            if (trimmedLine !== "") {
                steps.push(obj);
            }
        }
        this.setState({instructions: {stepsDesc, steps}})
        this.state.instructions.steps.forEach(function (instruction){
            let currentInstruction = instruction
            saveInstructionsToServer(currentInstruction)
        })
    } 


    addNewIngredients = (recipeId, ingList) => {
        let { ingDesc, ings } = ingList
        let lines = ingDesc.split(/\r?\n/);

        for (let i = 0; i < lines.length; i++) {
            const obj = {ingNum: i+1, ingDesc: lines[i].trim(), recipe: recipeId}
            const trimmedLine = lines[i].trim()
                if (trimmedLine !== "") {
                    ings.push(obj);
                }
        }
        this.setState({ingList: {ingDesc, ings}})
        this.state.ingList.ings.forEach(function (ingredient){
            let currentIngredient = ingredient
            saveIngredientsToServer(currentIngredient)
        })
    }

    render() {
        if (this.state.redirect) {
            return(<Redirect to="/user/2"/>)
        }
        return (
        <div>
            <h2> Add a recipe </h2>
            <form id="newRecipe" onSubmit={this.handleSubmit}>
                <div class="field">
                    <label class="label">Recipe Name: </label>
                        <div class="control">
                            <input type="text" class="input" onChange={this.handleInput} name="recipeName" value={this.state.recipe.recipeName} placeholder="Name of Recipe" />
                        </div>
                    </div>
                <div class="field">
                    <label class="label">Recipe Summary: </label>
                    <div class="control">
                        <textarea name="summary" class="textarea" onChange={this.handleInput} form="newRecipe" rows="4" cols="40"
                        placeholder="Enter a brief summary of the recipe" value={this.state.recipe.summary}></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Recipe Ingredients </label>
                    <div class="control">
                        <textarea name="ingDesc" class="textarea" onChange={this.handleIngredientInput} form="newRecipe" rows="10" cols="40" 
                        placeholder="Enter/Paste recipe ingredients here. Please list one ingredient per line. Example: 
                        &#10;4 Quarts water&#10;1 lb. angel hair pasta" value={this.state.ingList.ingDesc}></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Recipe Instructions </label>
                    <div class="control">
                        <textarea name="stepsDesc" class="textarea" onChange={this.handleInstructionInput} form="newRecipe" rows="10" cols="40" 
                        placeholder="Enter/Paste recipe instructions here. Preffered format is one step per line. Example: 
                       Bring 4 quarts water to boil&#10;Add pasta and boil for 10 minutes" value={this.state.instructions.stepsDesc}></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Notes </label>
                    <div class="control">
                        <textarea name="notes" class="textarea" onChange={this.handleInput} form="newRecipe" rows="4" cols="40"
                        placeholder="Enter side notes about the recipe" value={this.state.recipe.notes}></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Type of Cuisine </label>
                    <div class="control">
                        <input type="text" class="input" name="cuisineType" onChange={this.handleInput} value={this.state.recipe.cuisineType} placeholder="ie: 'Japanese', 'Amercian' " />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Link to Recipe Image</label>
                    <div class="control">
                        <input type="url" class="input" name="recipeImg" onChange={this.handleInput} value={this.state.recipe.recipeImg} placeholder="" />
                    </div>
                </div>
                <div class="field">
                    <label class="label">Link to Recipe Site</label>
                    <div class="control">
                        <input type="url" class="input" name="recipeLink" onChange={this.handleInput} value={this.state.recipe.recipeLink} placeholder="" />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input class="button is-primary"type="submit" value="Submit Recipe" />
                    </div>
                </div>
            </form>
        </div>
    )
    }
}

    export default NewRecipeForm
