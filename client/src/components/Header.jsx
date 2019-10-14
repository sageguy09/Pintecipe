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
    user: {},
    redirect: false
  }


  componentDidMount = () => {
    this.setUser()
  }
  setUser = () => {
    let activeUser = this.props.currentUser
    //console.log(activeUser)
    this.setState({ user: activeUser })
  }
  logged_out_nav = (
    <div><a class="dropdown-item" onClick={() => this.props.display_form('login')}>
      login
      </a>
      <a class="dropdown-item" onClick={() => this.props.display_form('signup')}>
        signup
      </a>
    </div>
  );
  logged_out_login = (
    <a class="dropdown-item" onClick={() => this.props.display_form('login')}>
      login
   </a>

  );
  logged_out_signup = (
    <a class="dropdown-item" onClick={() => this.props.display_form('signup')}>
      signup
 </a>

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
  onMouseLeave = e => {
    e.preventDefault();
    let dropdown = document.queryselector('.dropdown')
    dropdown.classList.toggle('is-active')
  }
  profileclick = e => {
    e.preventDefault();
    let menu = document.querySelector('.dropdown')
    menu.classList.toggle('is-active')
  }
  render() {
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
                    <Link to="/addRecipe">Add Recipe</Link>
                  </a>
                  <span class="navbar-item">
                    <div class="dropdown" onMouseLeave={this.profileclick}>
                      <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span onClick={this.profileclick}>{this.props.logged_in
                            ? `${this.props.state.username != undefined ? this.props.state.username : null}`
                            : 'Log In'}</span>
                          <span class="icon is-small">
                          </span>
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">

                          <a class="dropdown-item">
                            {this.props.logged_in
                              ? `${this.props.state.username != undefined ? this.props.state.username : null}`
                              : null}
                          </a>
                          <hr class="dropdown-divider" />
                          {/* <a href="#" class="dropdown-item">
      {this.props.logged_in ? this.logged_in_nav : this.logged_out_nav}
      </a> */}
                          <a  class="dropdown-item" >
                            {this.props.logged_in ? this.logged_in_nav : this.logged_out_login}
                          </a>
                          <a  class="dropdown-item" >
                            {this.props.logged_in ? null : this.logged_out_signup}
                          </a>
                        </div>
                      </div>
                    </div>
                  </span>

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

// <a class="button is-info is-inverted" onClick={this.navbarclick}>
// <span class="icon is-primary">
{/* <i class="fas fa-user"></i> */ }
// </span>
// <span>{this.props.logged_in
// ? `${this.props.currentUser.username}`
// : 'Log In'}</span>
// </a>