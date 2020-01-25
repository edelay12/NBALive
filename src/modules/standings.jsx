import React from 'react';
import contextMain from './context'

export default class Standings extends React.Component {
    static contextType = contextMain;
render(){
    const stats = this.props.list.filter(teams => teams.Name.toLowerCase().includes(this.context.team.toLowerCase()))
    {console.log(stats)}
return (
    <>
    {stats.map(stat => 
    <div>
         <h1>{`${stat.City} ${stat.Name}`}</h1>
         <h3>{`Conference: ${stat.Conference} Division: ${stat.Division}`}</h3>
         <h3>{`Wins: ${stat.Wins} Losses: ${stat.Losses}`}</h3>
         <h3>{`Percentage: ${stat.Percentage}`}</h3>
         <h3>{`Streak: ${stat.Streak}`}</h3>
         <h3>{`Games Back: ${stat.GamesBack}`}</h3>
         <h3>{`Conference Ranking: ${stat.ConferenceRank}`}</h3>
         <h3>{`Division Ranking: ${stat.DivisionRank}`}</h3>
         </div>
        )}
   
    </>
)}
}