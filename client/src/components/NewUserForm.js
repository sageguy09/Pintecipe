import React from 'react';


class NewUserForm extends React.Component {
    state = 
      { username: ""
      , email   : ""
      }
  
    handleInput = (evnt) => {
      let newUser = {...this.state};
  
      newUser[evnt.target.name] = evnt.target.value;
  
      this.setState(newUser)
    }
  
    handleSubmit = (evnt) => {
      evnt.preventDefault();
  
      this.props.addNewUser(this.state)
    }
    render = () => (
      <form onSubmit={this.handleSubmit}>
        <label for="username" >Username</label>
        <input type="text"   name="username" onChange={this.handleInput} value={this.state.username} placeholder="User Name"/>
        <br />
        <label for="email" >Email</label>
        <input type="email"  name="email"    onChange={this.handleInput} value={this.state.email}    placeholder="Email"/>
        <br />
        <input type="submit"                 value="New User" />
      </form>
    )
  }

  export default NewUserForm;