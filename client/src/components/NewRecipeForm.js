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
fetch('/api/ingredient/',
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
                // ingredients = [],
                //instructrions = [],
                summary: "",
                notes: "",
                recipeImg: "",
                cuisineType: "",
                recipeLink: "",
                user: 2
             },
             instructions : {
                stepNum: "",
                stepDesc: "",
                recipe: ""
            },
            ingredients : {
                unit: "",
                name: "",
                qty: "",
                comment: "",
                input: "",
                recipe:""
            }
        }
        
        //for each line push an item into to state:instructions[]
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


        // handleSubmit = (evnt) => {
        //     evnt.preventDefault();

        //     this.props.addNewRecipe(this.state.recipe)
        // }
        handleSubmit = (evnt) => {
            evnt.preventDefault();

            this.addNewRecipe(this.state)
            // this.addNewInstructions(this.state.instructions)
            // this.setState({
            //     recipe: {
            //         recipeName: "",
            //         summary: "",
            //         notes: "",
            //         recipeImg: "",
            //         cuisineType: "",
            //         recipeLink: "",
                    
            //         user: 2
            //     },
            //     instructions: 
            //         {
            //             stepNum: "",
            //             stepDesc: "",
            //             recipe: ""
            //         }
            //     ,
                
            // })
        }

        addNewRecipe = (newRecipeInfo) => {
            saveRecipeToServer(newRecipeInfo.recipe)
                .then(newRecipe => {
                    this.addNewInstructions(newRecipe.id)
                    this.addNewIngredients(newRecipe.id)
                    console.log(newRecipe.id, newRecipeInfo.instructions)
                })
        }

        addNewInstructions = (recipeId) => {
            let currentInstructions = {...this.state.instructions}
            currentInstructions.recipe = recipeId
            this.setState({instructions: currentInstructions})
            saveInstructionsToServer(currentInstructions)
        } 
        addNewIngredients = (recipeId) => {
            let currentIngredient = {...this.state.ingredients}
            currentIngredient.recipe = recipeId
            this.setState({ingredients: currentIngredient})
            saveIngredientsToServer(currentIngredient)
        }

        // instructionRecipeMapping = (recipeId) => {
        //     let currentInstructions = {...this.state.instructions}

        //     currentInstructions.recipe = recipeId

        //     this.setState(currentInstructions)
        //     console.log(currentInstructions)
        // }
        //pass down the recipe.id after the post. 
        //call a function that sets the state of instructions to include the recipe's id
        //return instructions to be posted to the db.


        // 
        // addNewInstructions = (newInstructionsInfo) => {
        //     saveInstructionsToServer(newInstructionsInfo)
        //         .then(newInstructions => {
        //             console.log(newInstructions)
        //         })
        // }


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
                    <label for="qty">Qty </label>
                    <input name="qty" onChange={this.handleIngredientInput} value={this.state.ingredients.qty}/> 
                    <label for="unit">Unit </label>
                    <input name="unit"onChange={this.handleIngredientInput} value={this.state.ingredients.unit}/> 
                    <label for="name">Name </label>
                    <input name="name"onChange={this.handleIngredientInput} value={this.state.ingredients.name}/> 
                    <label for="comment">Comment </label>
                    <input name="comment" onChange={this.handleIngredientInput} value={this.state.ingredients.comment}/> 
                    <label for="input">Input </label>
                    <input name="input" onChange={this.handleIngredientInput} value={this.state.ingredients.input}/> 
                    <br />
                    <br />
                    <br />
                    <h4>Instructions</h4>
                    <label for="stepNum">step number: </label>
                    <input type='number'name="stepNum" onChange={this.handleInstructionInput} value={this.state.instructions.stepNum} placeholder="step number" />
                    <label for="stepDesc">step description: </label>
                    <textarea name="stepDesc" onChange={this.handleInstructionInput} form="newRecipe" rows="10" cols="40" 
                    placeholder="Enter steps to making your recipe here. Preffered format is one step per line. Example: 
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


//   {
//     "id": 1,
//     "recipeName": "CRISPY SOUTHWEST CHICKEN WRAPS",
//     "summary": "These southwest crispy chicken wraps are delicious, easy to make, and so versatile! It’s no surprise they’ve been on our steady meal rotation for many years!",
//     "notes": "This is one of the most adaptable recipes on here (reading through the comments will prove that – your variations sound amazing!). Feel free to up the cilantro, add in a different meat of your choice, eliminate the pepper, add green chilies – seriously, the options are endless. You can easily use smaller tortillas to maximize the number of wraps you make. \r\n\r\nOften, I add salsa verde, and I also love subbing in chopped roasted red peppers for the diced bell pepper. \r\n\r\nI almost always double this recipe when making so I can freeze the cooled crispy wraps and freeze individually wrapped in plastic wrap (and tossed in a freezer ziploc bag with the other wraps) for quick, easily reheatable lunches!",
//     "recipeImg": "https://www.melskitchencafe.com/wp-content/uploads/crispy-sw-wraps2.jpg",
//     "recipeLink": "https://www.melskitchencafe.com/crispy-southwest-chicken-wraps/",
//     "cuisineType": "Mexican",
//     "user": 1
// }