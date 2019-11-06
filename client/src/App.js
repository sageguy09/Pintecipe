import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeAuth from './authcomp/HomeAuth'


class App extends React.Component {
  render = () => (
  <div>
 <Router>
<HomeAuth />
 </Router>
{/* <ReviewRecipeForm /> */}
  </div>
  )
}

export default App;

