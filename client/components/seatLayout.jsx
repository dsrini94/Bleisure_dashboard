import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import SwipeableViews from 'react-swipeable-views';
import {Grid,Image,Icon,Divider,Segment,Header,Sidebar,Menu,Dropdown,Button} from 'semantic-ui-react';
import ModalCrew from '../components/modalLayoutCrew.jsx';
import PeopleLayout from '../components/peopleLayout.jsx';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import CrewChatBox from '../components/crewchatbox.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
export default class seatLayout extends React.Component {
constructor(){
  super()
  this.state = {
    businessArray : [],
    economyArray:[],
    firstClass: [],
    sidebarVisiblity: false,
    toggleIcon: 'content'
  }

  this.handleFirstClass = this.handleFirstClass.bind(this);
  this.businessArray =this.businessArray.bind(this);
  this.economyArray =  this.economyArray.bind(this);
};
handleFirstClass(){
this.state.firstClass.push(<Grid.Row key= {"F1"}><Grid.Column width = {1}></Grid.Column>
<Grid.Column centered = {"true"}width ={2}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>
<Grid.Column centered={"true"} width = {10}></Grid.Column>
<Grid.Column centered = {"true"}width ={2}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>
<Grid.Column width = {1}>{1}</Grid.Column>
</Grid.Row>)
for(let i = 2 ; i<=4 ; i ++){
  this.state.firstClass.push(<Grid.Row key ={"F"+i} only='mobile'>
<Grid.Column width = {1}></Grid.Column>
  <Grid.Column centered = {"true"}width ={2}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>

   <Grid.Column width={3}></Grid.Column>

  <Grid.Column centered = {"true"} width ={2}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered= {"true"}  width ={2}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>

   <Grid.Column width={3}></Grid.Column>
     <Grid.Column centered= {"true"}  width ={2}> <i  className="material-icons color md-24">event_seat</i></Grid.Column>
<Grid.Column width = {1}>{i}</Grid.Column>
 </Grid.Row>)

}
console.log(this.state.firstClass);
}

businessArray(){
for(let i = 10 ; i<=15 ; i ++){
  this.state.businessArray.push(<Grid.Row key ={"B"+i} only='mobile'>
<Grid.Column width = {1}></Grid.Column>
  <Grid.Column centered = {"true"}width ={1}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"}width ={1}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>



   <Grid.Column width={3}></Grid.Column>

  <Grid.Column centered = {"true"} width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered= {"true"}  width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"} width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"} width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>

   <Grid.Column width={3}></Grid.Column>
   <Grid.Column centered= {"true"}  width ={1}> <i  className="material-icons color md-24">event_seat</i></Grid.Column>
     <Grid.Column centered= {"true"}  width ={1}> <i  className="material-icons color md-24">event_seat</i></Grid.Column>
<Grid.Column width = {1}>{i}</Grid.Column>
 </Grid.Row>)

}
}
economyArray(){
for(let i = 20 ; i<=28 ; i ++){
  this.state.economyArray.push(<Grid.Row key ={"E"+i} only='mobile'>
<Grid.Column width = {1}></Grid.Column>
  <Grid.Column centered = {"true"}width ={1}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"}width ={1}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"}width ={1}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>



   <Grid.Column width={2}></Grid.Column>

  <Grid.Column centered = {"true"} width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered= {"true"}  width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"} width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>
  <Grid.Column centered = {"true"} width ={1}>    <i  className="material-icons color md-24">event_seat</i></Grid.Column>

   <Grid.Column width={2}></Grid.Column>
   <Grid.Column centered= {"true"}  width ={1}> <i  className="material-icons color md-24">event_seat</i></Grid.Column>
   <Grid.Column centered = {"true"}width ={1}>  <i   className="material-icons color md-24">event_seat</i></Grid.Column>
     <Grid.Column centered= {"true"}  width ={1}> <i  className="material-icons color md-24">event_seat</i></Grid.Column>
<Grid.Column width = {1}>{i}</Grid.Column>
 </Grid.Row>)

}
}

componentWillMount(){
this.handleFirstClass();
this.businessArray();
this.economyArray();
}
handleSiderbarVisiblity(){
  if (this.state.sidebarVisiblity)
    this.setState({
      sidebarVisiblity: !this.state.sidebarVisiblity,
      toggleIcon: 'content'
    })
  else
    this.setState({
      sidebarVisiblity: !this.state.sidebarVisiblity,
      toggleIcon: 'remove'
    })
}
  render(){
    return(
      <div style={{overflow:'hidden'}}>
        <div className = "sidebar">
         <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='push'  width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
             <SidebarMenu />
           </Sidebar>
           <Sidebar.Pusher>
             <Segment basic style={{
                padding:"14px 0px"}}>
                  <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px',marginTop:'-12px'}}>
                  </Segment>
                  <Grid style ={{backgroundColor:"#FFEBEE"}}>
                    <Grid.Row><Grid.Column><h3 style ={{fontSize:"18px",textAlign:"center"}} className="ui header">First Class</h3></Grid.Column></Grid.Row>
                    <Grid.Row><Grid.Column width={1}></Grid.Column><Grid.Column width={2}>A</Grid.Column><Grid.Column width ={3}></Grid.Column><Grid.Column width={2}>E</Grid.Column><Grid.Column width={2}>F</Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={2}>K</Grid.Column>
                    <Grid.Column width = {1}></Grid.Column>
                    </Grid.Row>
                    {this.state.firstClass}
                    </Grid>
                    <Grid style = {{backgroundColor:"#E3F2FD"}}>
                      <Grid.Row><Grid.Column><h3 style ={{fontSize:"18px",textAlign:"center"}} className="ui header">Buisness Class</h3></Grid.Column></Grid.Row>
                    <Grid.Row><Grid.Column width={1}></Grid.Column><Grid.Column width={1}>A</Grid.Column><Grid.Column width={1}>B</Grid.Column><Grid.Column width={3}></Grid.Column><Grid.Column width={1}>D</Grid.Column>
                    <Grid.Column width={1}>E</Grid.Column><Grid.Column width={1}>F</Grid.Column><Grid.Column width={1}>G</Grid.Column><Grid.Column width={3}></Grid.Column>
                    <Grid.Column width = {1}>J</Grid.Column><Grid.Column width = {1}>K</Grid.Column><Grid.Column width = {1}></Grid.Column>
                    </Grid.Row>
                    {this.state.businessArray}
                    </Grid>
                    <Grid style = {{backgroundColor : "#EDE7F6"}}>
                      <Grid.Row><Grid.Column><h3 style ={{fontSize:"18px",textAlign:"center"}} className="ui header">Economy Class</h3></Grid.Column></Grid.Row>

                    <Grid.Row><Grid.Column width={1}></Grid.Column><Grid.Column width={1}>A</Grid.Column><Grid.Column width={1}>B</Grid.Column><Grid.Column width={1}>C</Grid.Column><Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={1}>D</Grid.Column><Grid.Column width={1}>E</Grid.Column><Grid.Column width={1}>F</Grid.Column><Grid.Column width={1}>G</Grid.Column>
                    <Grid.Column width = {2}></Grid.Column><Grid.Column width = {1}>H</Grid.Column><Grid.Column width = {1}>I</Grid.Column><Grid.Column width = {1}>J</Grid.Column>
                    </Grid.Row>

                    {this.state.economyArray}
                    </Grid>
            </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>


      </div>
    )
  }
}
