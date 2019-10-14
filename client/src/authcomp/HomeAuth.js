import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Nav from './Nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Header from '../components/Header'
import UserHomePage from '../components/UserHomepage'
import RecipeDetails from '../components/RecipeDetails'
import ReviewRecipeForm from '../components/ReviewRecipeForm'
import NewUserForm from '../components/NewUserForm'
import NewRecipeForm from '../components/NewRecipeForm'
import '../App.css';

class HomeAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      currentUser: 1,
      user: {
              id: 5,
              username: "ali",
              email: "afreeman_2010@yahoo.com",
              recipes: []
            },
      redirect: false
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username,
          currentUser: json.user.id,
          user: json.user
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username,
          user: json.user,
          redirect: true
        })
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '', redirect: true });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };
  getCurrentUser = () =>
    this.state.user.id
    getCurrentUserName = () =>
    this.state.user
    getCurrentUserObj = () =>
    this.state.users.find(user => user.id === parseInt(this.state.currentUser))

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/user/"/>)
    }
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }
    let UserPage = () => {
      return (
          <UserHomePage currentUser={this.state.user}
          />
      )
  }

  let NewRecipePage = () => {
    return (
      <NewRecipeForm currentUser={this.getCurrentUser() || {}}
        />
      
    )
  }

    return (
      <div className="App">
        <Header currentUser={this.state.user}
        logged_in={this.state.logged_in}
        display_form={this.display_form}
        handle_logout={this.handle_logout} 
        state={this.state}
        handle_login={this.handle_login}
        handle_signup={this.handle_signup}/>

       <Switch>
       <Route path="/user/" render={UserPage} />
          <Route path="/addUser" component={NewUserForm} />
          <Route path="/addRecipe" render={NewRecipePage} />
          {/* <Route path="/newRecipe" render={NewRecipePage} /> */}
          {/* <Route path="/reviewRecipe" component={ReviewRecipeForm} /> */}
          <Route path="/reviewRecipe/:recipeid/" component={ReviewRecipeForm} />
          <Route path="/recipeDetails/:id" component={RecipeDetails} />
          <Route path="/recipeDetails" component={RecipeDetails} />
       </Switch>
      </div>
      
    );
  }
}

export default HomeAuth;

//{this.state.recipe.instructions != undefined ? this.state.recipe.instructions.map(this.instructionSteps) : null }