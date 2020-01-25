import React from 'react';
import './team.css'
import contextMain from './context'
import { Link } from 'react-router-dom'

export default class Team extends React.Component{
    constructor(){
        super();
        this.state = {
              checked : false
    }
}
 
setChecked = () => {
        if (this.state.checked) {
           return this.setState({checked : false})
        }
        this.setState({checked : true})
    }

    render(){
        let setStyle = this.state.checked ? { border : '2px solid lightgrey'} : {border : "none"};
   
    return (
        
        <contextMain.Consumer>
             {contextMain => 
            <div className='subContainer' style={setStyle} value={this.props.name}>
                <input type="checkbox" className='teamCheck' id={this.props.name} value={this.props.name} onChange={(e) => contextMain.updateTeams(e.target.value)}/>
                <label htmlFor={this.props.name} onClick={this.setChecked}>
                <img src={this.props.imgsrc} id='teamImg'/>
                <h3 className='teamNameLabel'>{this.props.name}</h3></label>
            </div>}
            </contextMain.Consumer>
    )}

}