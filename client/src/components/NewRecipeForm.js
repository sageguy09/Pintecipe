
import React from 'react';
const saveRecipeToServer = (newRecipe) =>
fetch('/api/recipe/',
    {method: "POST",
    headers : { "Content-Type": "application/json" },
    body : JSON.stringify(newRecipe)
    }
).then(res => res.json())

class NewRecipeForm extends React.Component {
    state = {
      recipeName: "",
      // ingredients = [],
      // instructrions = [],
      summary: "",
      notes: "",
      recipeImg: "",
      cuisineType: "",
      recipeLink: "",
      user: 2
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
    handleSubmit = (evnt) => {
        evnt.preventDefault();
    
        this.addNewRecipe(this.state)
        this.setState({ 
            summary: "",
            notes: "",
            recipeImg: "",
            cuisineType: "",
            recipeLink: "",
            user: 2
        })
      }

      addNewRecipe = (newRecipeInfo) => {
          saveRecipeToServer(newRecipeInfo)
            .then(newRecipe => {
                console.log(newRecipe)
            })
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
      {/* <label for="ingredients">Ingredients:  </label>
      <textarea name="ingredients" onChange={this.handleInput} form="newRecipe" rows="10" cols="40" 
      placeholder="Example of the preffered recipe format: &#10;'1 cup cheddar cheese, shredded'" value=""></textarea>
      <br />
      <label for="instructions">Instructions: </label>
      <textarea name="instructions" onChange={this.handleInput} form="newRecipe" rows="10" cols="40" 
      placeholder="Enter steps to making your recipe here. Preffered format is one step per line. Example: 
      &#10;Bring 4 quarts water to boil&#10;Add pasta and boil for 10 minutes" value=""></textarea>
      <br /> */}
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