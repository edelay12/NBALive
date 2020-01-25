import React from 'react';
import Team from './modules/Team'
import { Link } from 'react-router-dom'
import './App.css';

export default function Welcome(props){
return (
    <>
    <h1>Welcome to NBA Live!</h1>
     <h3>Let's get started - pick your favorite team(s)</h3>       
      <ul className='teamsList'>
      {props.teams.map((team , index) => 
      <li className='teamContainer'>
          <Team imgsrc={team.WikipediaLogoUrl} name={team.Name} num={index}/>
          </li>
      )}
      </ul>
     <Link to='/dashboard'><button id='addTeamsButton'>Add teams</button></Link>
    </>
)
}