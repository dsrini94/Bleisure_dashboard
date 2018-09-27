import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import SwipeableViews from 'react-swipeable-views';
import {Grid,Image,Icon,Divider,Segment,Header} from 'semantic-ui-react';
import ModalDesign from './modalDesign.jsx';


const data = {
	labels: [
		'AVML',
		'SVML',
		'NVML',
    'HVML',
		'UNKNOWN'
	],
	datasets: [{
		data: [150, 50, 75, 40,15],
		backgroundColor: [
		'#f44336',
		'#2196F3',
		'#FFCE56',
    '#8BC34A',"black"
		],
		hoverBackgroundColor: [
		'#f44336',
		'#36A2EB',
		'#FFCE56',
    '#8BC34A',"black"
		]
	}]
};
const legendOpts = {
  display: true,
  position: 'right',
  fullWidth: true,
  reverse: true,
  labels: {
    fontColor: 'rgb(255, 99, 132)'
  }
}

export default class CrewPage extends React.Component {
constructor(){
    super()
    this.state = {
      totalBusinessClassSeat :399,
      seatBClass:[],
      colum1:[],
       seatArray:[],
			 flag:false
    }
  };

componentWillMount(){
	this.state.seatArray.push(<Grid.Row key ={"E"+1}  only='mobile'>

		<Grid.Column key ={"space"} width={1}> {1}</Grid.Column>

	<Grid.Column  key ={"a"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
		<Grid.Column  key ={"b"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
		<Grid.Column  key ={"i"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons md-24">event_seat</i></Grid.Column>
		<Grid.Column key ={"e"} width={1}></Grid.Column>

	<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i style ={{color:this.state.colors[0]}}  className="material-icons  md-24">event_seat</i></Grid.Column>

<Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[3]}} className="material-icons  md-24">event_seat</i></Grid.Column>
		<Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
	<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
		<Grid.Column key ={"m"} width={1}></Grid.Column>
		<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
	<Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>

</Grid.Row>)
this.state.seatArray.push( <Grid.Row key ={"E"+2}  only='mobile'>

	 <Grid.Column key ={"space"} width={1}> {2}</Grid.Column>

 <Grid.Column  key ={"a"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[2]}} className="material-icons md-24">event_seat</i></Grid.Column>
	 <Grid.Column  key ={"b"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
 <Grid.Column  key ={"i"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
	 <Grid.Column key ={"e"} width={1}></Grid.Column>

 <Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[4]}}  className="material-icons  md-24">event_seat</i></Grid.Column>

	 <Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
 <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[3]}} className="material-icons  md-24">event_seat</i></Grid.Column>
	 <Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>
	 <Grid.Column key ={"m"} width={1}></Grid.Column>
	 <Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
	 <Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[1]}} className="material-icons  md-24">event_seat</i></Grid.Column>
	 <Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>

</Grid.Row>)

this.state.seatArray.push(  <Grid.Row key ={"E"+3}  only='mobile'>

	<Grid.Column key ={"space"} width={1}> {3}</Grid.Column>

<Grid.Column  key ={"a"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[3]}} className="material-icons md-24">event_seat</i></Grid.Column>
	<Grid.Column  key ={"i"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons md-24">event_seat</i></Grid.Column>
	<Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i onClick={this.handleClick.bind(this)} style ={{color:'#795548',borderStyle:'solid', borderWidth: '1px'}}  className="material-icons  md-24">event_seat</i></Grid.Column>

	<Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[1]}} className="material-icons  md-24">event_seat</i></Grid.Column>
	<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>
	<Grid.Column key ={"m"} width={1}></Grid.Column>
	<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
	<Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[1]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>

</Grid.Row>);

this.state.seatArray.push( <Grid.Row key ={"E"+4}  only='mobile'>

 <Grid.Column key ={"space"} width={1}> {4}</Grid.Column>

<Grid.Column  key ={"a"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
 <Grid.Column  key ={"b"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
 <Grid.Column  key ={"i"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons md-24">event_seat</i></Grid.Column>
 <Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[1]}}  className="material-icons  md-24">event_seat</i></Grid.Column>

<Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[2]}} className="material-icons  md-24">event_seat</i></Grid.Column>
 <Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
 <Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>
 <Grid.Column key ={"m"} width={1}></Grid.Column>
 <Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>

</Grid.Row>);
this.state.seatArray.push(<Grid.Row key ={"E"+5}  only='mobile'>

<Grid.Column key ={"space"} width={1}> {5}</Grid.Column>

<Grid.Column  key ={"a"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column  key ={"i"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[1]}}  className="material-icons  md-24">event_seat</i></Grid.Column>

<Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"m"} width={1}></Grid.Column>
<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[3]}} className="material-icons  md-24">event_seat</i></Grid.Column>

</Grid.Row>);

this.state.seatArray.push(  <Grid.Row key ={"E"+6}  only='mobile'>

<Grid.Column key ={"space"} width={1}> {6}</Grid.Column>

<Grid.Column  key ={"a"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[4]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column  key ={"b"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column  key ={"i"} centered = {"true"}width ={1}>  <i style ={{color:this.state.colors[1]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"e"} width={1}></Grid.Column>

<Grid.Column key ={"c"} centered = {"true"} width ={1}>   <i  style ={{color:this.state.colors[0]}}  className="material-icons  md-24">event_seat</i></Grid.Column>

<Grid.Column key ={"l"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"k"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"f"} centered = {"true"} width ={1}>    <i style ={{color:this.state.colors[4]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"m"} width={1}></Grid.Column>
<Grid.Column key ={"g"} centered= {"true"}  width ={1}>    <i style ={{color:this.state.colors[0]}} className="material-icons md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"h"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[0]}} className="material-icons  md-24">event_seat</i></Grid.Column>
<Grid.Column key ={"j"} centered= {"true"}  width ={1}> <i style ={{color:this.state.colors[3]}} className="material-icons  md-24">event_seat</i></Grid.Column>

</Grid.Row>);

    }

this.setState({colum1:this.state.seatArray},function(){
  console.log(this.state.seatArray);
})
}
handleClick(){
	this.setState({flag:true});
}
handleClick1(){
	console.log("inside handle click 1");
	this.setState({flag:false});
}
  render(){
    return(
      <div style={{overflow:'hidden'}}>

        <SwipeableViews>

          <div>
					<Header as='h3' block inverted style ={{margin:'5px'}} >
				 <center>
 Meal Perference Donut View
 </center>
</Header>
            <Segment secondary  style={{margin:'10px'}}>
              <Doughnut data={data} legend={legendOpts}/>
            </Segment> <Header as='h3' block  inverted style ={{margin:'5px'}} >
						<center>
    Meal Perference Seating Layout
		</center>
  </Header>
						<div><Segment  style={{margin:'10px'}}>


						<Grid >
						<ModalDesign method={this.handleClick1.bind(this)} flag={this.state.flag}/>
			{this.state.colum1}
			</Grid>
		</Segment>
						</div>
          </div>
          <div>
            <Segment secondary  style={{margin:'10px'}}>
              <Doughnut data={data}/>
            </Segment>
          </div>



        </SwipeableViews>

      </div>
    )
  }
}
