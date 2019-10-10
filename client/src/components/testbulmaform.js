import React from 'react';
import "bulma/css/bulma.css"

class TestBulmaForm extends React.Component {
state = {
    name : "",
    password : ""
}

handleInput = (evnt) => {
    let userLogin = {...this.state};

    userLogin[evnt.target.name] = evnt.target.value;

    this.setState(userLogin)
}

submitForm = (evnt) => {
    evnt.preventDefault();
    alert(this.state)
}


render = () => (
  <div>
    <h1>Test Bulma Form</h1>
    <form id="formsub" onSubmit={this.submitForm}>
      <div class="field">
        <label class="label">Name</label>
          <div class="control">
            <input form="formsub" class="input" name="name" onChange={this.handleInput}type="text" placeholder="Text input"/>
          </div>
      </div>
      <div class="field">
        <label class="label">password</label>
          <div class="control">
            <input form="formsub" class="input" name="password" onChange={this.handleInput}type="text" placeholder="Text input"/>
          </div>
        </div>
        
        <div class="field is-grouped">
          <div class="control">
            <input type="submit" class="button is-link"/>
          </div>
          <div class="control">
            <button  class="button is-text">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}
                
  export default TestBulmaForm;