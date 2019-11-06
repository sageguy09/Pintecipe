import React from 'react';
import "bulma/css/bulma.css"
class Landing  extends React.Component {

    render = () => (
      <div class="container">
        <h2 class="title is-2"> Welcome to Pintecipe</h2>
        <h4 class="title is-4">Please sign up or login to begin working with your recipes!</h4>
        <div class="content">
        <h3 class="title is-3"> About This Site </h3>
        <p class="content"> 
        Import your recipes from any other source by selecting Add Recipe and entering the recipe details. 
        Copy and Paste the recipe details from a recipe page and all of the details and images will be added to your profile upon submission
        </p> 
        <h5> Pintecipe is in active developement and some features may not yet be available</h5>
        </div>
        <div class="block">
        <ul type="1">
        <h4 class="title is-4"> Upcoming Features: </h4>
          <li>Login with Facebook, Google, or Facebook</li>
          <li>Create Recipe books from submitted recipes</li>
          <li>Export rich pins to Pinterst boards</li>
          <li>Import Pin boards from Pinterest</li>
          <li>Embedded Browser for viewing recipe to import</li>
        </ul>
        </div>
        </div>
    )
  }

  export default Landing