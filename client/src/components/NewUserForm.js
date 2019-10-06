import React from 'react';


class NewUserForm extends React.Component {
    state = 
      { username: "",
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
    render = () => (
      <form onSubmit={this.handleSubmit}>
        <label for="username" >Username</label>
        <input type="text"   name="username" onChange={this.handleInput} value={this.state.username} placeholder="User Name"/>
        <br />
        <label for="email" >Email</label>
        <input type="email"  name="email"    onChange={this.handleInput} value={this.state.email}    placeholder="Email"/>
        <br />
        <label for="firstName" >Email</label>
        <input type="text"  name="firstName"    onChange={this.handleInput} value={this.state.firstName}    placeholder="Enter your first name"/>
        <br />
        <label for="location" >Email</label>
        <input type="text"  name="location"    onChange={this.handleInput} value={this.state.location}    placeholder="ie: Atlanta, GA"/>
        <br />
        <input type="submit"                 value="New User" />
      </form>
    )
  }

  export default NewUserForm;