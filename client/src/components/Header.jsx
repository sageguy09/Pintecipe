import React from 'react';
import { Link } from 'react-router-dom';
import "bulma/css/bulma.css"
import PropTypes from 'prop-types';
import LoginForm from '../authcomp/LoginForm';
import SignupForm from '../authcomp/SignupForm';
// $('.navbar-burger').click(function() {
//   $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
// });
// toggleMenu = () => {

// }

class Header extends React.Component {
  state = {
    currentUsername: "",
    user: {}
  }
  

  componentDidMount = () => {
    this.setUser()
  }
  setUser = () => {
    let activeUser = this.props.currentUser
    this.setState({user: activeUser})
  }
logged_out_nav = (
    <ul>
      <li onClick={() => this.props.display_form('login')}>login</li>
      <li onClick={() => this.props.display_form('signup')}>signup</li>
    </ul>
  );

logged_in_nav = (
    <ul>
      <li onClick={this.props.handle_logout}>logout</li>
    </ul>
  );


  navbarclick = e => {
    e.preventDefault();
    let hambar = document.querySelector('.navbar-burger')
    let items = document.querySelector('#navbarMenuHeroA')
   
    items.classList.toggle('is-active')
    hambar.classList.toggle('is-active')

  }
render () {
  let form;
    switch (this.props.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.props.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.props.handle_signup} />;
        break;
      default:
        form = null;
    }
    return (
<section class="hero is-dark is-small is-flex-desktop-only">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title"> Pintecipe</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA" onClick={this.navbarclick}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              <Link to="/user/">Home</Link>
            </a>
            <a class="navbar-item">
              <Link to="/addUser">Add User</Link>
            </a>
            <a class="navbar-item">
              <Link to="/addRecipe">Add Recipe</Link>
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted" onClick={this.navbarclick}>
                <span class="icon is-primary">
                  <i class="fas fa-user"></i>
                </span>
                <span>{this.props.logged_in
            ? `${this.props.currentUser.username}`
            : 'Log In'}</span>
              </a>
            </span>
            <div clas="navbar-item">{this.props.logged_in ? this.logged_in_nav : this.logged_out_nav}</div>
            {form}
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
    </div>
  </div>
</section>
)
}
}

export default Header;

Header.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};