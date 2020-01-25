import React from 'react';
import STORE from './methods'
import Standings from './standings'

export default class Dashboard extends React.Component{
constructor() {
    super();
    this.state = {
        standings : [],
        selectedTeam : 'lakers'
    }
}
componentDidMount(){
   const standingsUrl = 'https://api.sportsdata.io/v3/nba/scores/json/Standings/2020'
    fetch(standingsUrl , {
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
        this.setState({standings : res})
      })
      .catch(err => console.log(err))
    }
    updateDash = (e) => {
        console.log('this is team ' +e)
this.setState({selectedTeam : e});
    }
    componentWillUnmount(){
        this.state = {};
    }

    render() {
        return (
            <>
            <h1>Dashboard</h1>
            <div className='legend'>
            <h1>Your Teams: </h1>
            {this.props.teams.map(team => 
                <h3 className='userTeam' onClick={(e) => this.updateDash(team)}>{team}</h3>
                )}
            </div>
            <div className='teamStats'>
                {(this.state.standings !== []) && <Standings team={this.state.currentTeam} list={this.state.standings}/>}
            </div>

                </>
        )
    }
}