import React from 'react';
import { Link } from 'react-router-dom';
import "bulma/css/bulma.css"
// $('.navbar-burger').click(function() {
//   $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
// });
// toggleMenu = () => {

// }

class Header extends React.Component {
  state = {
    currentUsername: "None",
    user: {}
  }
  

  componentDidMount = () => {
    this.setUser()
  }
  setUser = () => {
    let activeUser = this.props.currentUser
    this.setState({user: activeUser})
  }
render = () => (
<section class="hero is-dark is-small is-flex-desktop-only">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title"> Pintecipe</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item">
              <Link to="/user/2">Home</Link>
            </a>
            <a class="navbar-item">
              <Link to="/addUser">Add User</Link>
            </a>
            <a class="navbar-item">
              <Link to="/addRecipe">Add Recipe</Link>
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted" onClick={this.setUser}>
                <span class="icon is-primary">
                  <i class="fas fa-user"></i>
                </span>
                <span>{this.state.user.username}</span>
              </a>
            </span>
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

export default Header;