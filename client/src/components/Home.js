import React from 'react';
import "bulma/css/bulma.css"

class Home extends React.Component {
render = () => (
    <div>
<section class="hero is-dark is-small">
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
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Add User
            </a>
            <a class="navbar-item">
              Add Recipe
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted">
                <span class="icon">
                  <i class="fas fa-user"></i>
                </span>
                <span>Current User</span>
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

    </div>
)
}

export default Home