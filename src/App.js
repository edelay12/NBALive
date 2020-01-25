import React from 'react';
import './App.css';
import STORE from './modules/methods'
import Welcome from './WelcomePage'
import { Route, Switch, Link } from "react-router-dom";
import Dashboard from './modules/Dashboard';
import contextMain from "./modules/context";

class App extends React.Component {
constructor(){
super();
this.state = {
  teams : [],
  userTeam : 'lakers',
  userTeams : []
}
}

componentDidMount(){
  const url = 'https://api.sportsdata.io/v3/nba/scores/json/teams'
  fetch(url , {
    method : 'GET',
    headers : {
      'Ocp-Apim-Subscription-Key' : STORE.key
    }
  })
  .then(res => {
    if(res.ok) {
      return res.json()
    }
    throw Error 
  })
  .then(res => {
    this.setState({teams : res})
  })
  .catch(err => console.log(err))
}

updateUserTeamsSelected = (e) => {
console.log('updateTeams')
console.log(e)

if (this.state.userTeams.includes(e)){
  let newarr = this.state.userTeams;
  let index = this.state.userTeams.indexOf(e);
  newarr.splice(index, 1);
  return this.setState({userTeams : newarr})
}

this.setState({userTeam : e});
this.state.userTeams.push(e);
console.log(this.state.userTeams)
}

  render(){
  return (
    <contextMain.Provider
    value={{ state: this.state, updateTeams : this.updateUserTeamsSelected , team : this.state.userTeam}}
  >
    <div className='pageHeader'>
      <Link to='/' className='siteLabel'><h1 className='siteLabel'>NBALive</h1></Link>
    </div>
    <div className="App">
      <Switch>
     <Route path='/' exact render={props => 
      <Welcome teams={this.state.teams} />
    }/>

      <Route path='/dashboard' render={props => 
      <Dashboard teams={this.state.userTeams} />
    } />
      </Switch>
    </div>
    </contextMain.Provider>
  );
}
}
export default App;
