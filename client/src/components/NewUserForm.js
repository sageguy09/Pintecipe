import React from 'react';
import "bulma/css/bulma.css"

class NewUserForm extends React.Component {
    state = 
      { 
      username: "",
      email   : "",
      firstName: "",
      location: ""
      }

  
    handleInput = (evnt) => {
      let newUser = {...this.state};
  
      newUser[evnt.target.name] = evnt.target.value;
  
      this.setState(newUser)
    }
  
    handleSubmit = (evnt) => {
      evnt.preventDefault();
  
      this.props.addNewUser(this.state)
      this.setState({ username: "",
      email   : "",
      firstName: "",
      location: ""})
    }


    render = () => (
      <div>
      <form id="newUserForm" onSubmit={this.handleSubmit}>
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input type="text"   class="input"  name="username" onChange={this.handleInput} value={this.state.username} placeholder="User Name"/>
          </div>
        </div>
        <div class="field">
        <label class="label" >Email</label>
          <div class="control">
            <input type="email" class="input" name="email"    onChange={this.handleInput} value={this.state.email}    placeholder="Email"/>
          </div>
         </div>
        <div class="field">
          <label class="label" >First Name</label>
            <div class="control">
              <input type="text" class="input" name="firstName"    onChange={this.handleInput} value={this.state.firstName}    placeholder="Enter your first name"/>
            </div>
        </div>
        <div class="field">
          <label class="label" >Location</label>
            <div class="control">
              <input type="text"  class="input" name="location"    onChange={this.handleInput} value={this.state.location}    placeholder="ie: Atlanta, GA"/>
            </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="button is-primary"type="submit" value="Create New User" />
          </div>
        </div>
      </form>
      </div>
    )
  }

  export default NewUserForm;



  
    // addNewUser = (newUserInfo) => {
    //   saveUserToServer(newUserInfo)
    //     .then(newUser => {
    //       console.log(newUser);
    //       newUser.issues = [];
  
    //       let users = {...this.state.users};
  
    //       users[newUser.id] = newUser;
  
    //       this.setState({ users, currentUser: newUser.id });
    //   })
    // }