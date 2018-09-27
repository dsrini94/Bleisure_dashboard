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

const square = { width: 130, height: 130 }
const data = {
  labels: [
  		'AVML',
  		'SVML',
  		'NVML',
      'HVML'
  	],
datasets: [{
data: [150, 50, 100, 40],
backgroundColor: [
'#f44336',
'#2196F3',
'#FFCE56',
    '#8BC34A'
],
hoverBackgroundColor: [
'#f44336',
'#36A2EB',
'#FFCE56',
    '#8BC34A'
]
}]
};
const data1 = {
  labels: [
  		'VIP',
  		'CIP',
  		'VVIP'

  	],
datasets: [{
data: [10, 7, 3],
backgroundColor: [
'#f44336',
'#2196F3',
"TEAL"

],
hoverBackgroundColor: [
'#f44336',
'#36A2EB',
'#FFCE56'

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
       flag:false,
       colors:['#f44336',
       '#2196F3',
       '#FFCE56',
       '#8BC34A'],
       sidebarVisiblity: false,
       toggleIcon: 'content',
       date:''
    }
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

  componentWillMount(){
var d = new Date();

let x = d.getMonth()
if(x==11)
{
 x =x +1
};
this.setState({date:x + "/" + d.getDate() + "/" + d.getFullYear()});




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
                    <Grid>
                      <Grid.Row style={{fontSize:'11px'}}>
                        <Grid.Column width={4}>
                          <center>
                            XX1234
                          </center>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <center>
                            DFW->JFK
                          </center>
                        </Grid.Column>
                        <Grid.Column width={7}>
                          <center>
                          <Grid.Row>
                            DEP - {this.state.date} 14:55
                          </Grid.Row>
                          <Grid.Row>
                            ARR - {this.state.date} 23:55
                          </Grid.Row>
                          </center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px',marginTop:'-12px'}}>
                    <Grid>
                      <Grid.Row style={{fontSize:'12px'}}>
                        <Grid.Column width={6} >
                          <center>
                            <Grid.Row>
                              DWF - Cloudy 56 °F
                            </Grid.Row>
                            <Grid.Row>
                              Wind Speed 7 mph
                            </Grid.Row>
                          </center>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <center>
                            4hrs 20mins to dest
                          </center>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <center>
                              <Grid.Row>
                                JFK - Cloudy 50 °F
                              </Grid.Row>
                              <Grid.Row>
                                Wind Speed 11 mph
                              </Grid.Row>
                            </center>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Segment>

                  <Header as='h4' block inverted style ={{margin:'5px'}} >
                    <center>
                       Total Number Of Customers : 340
                     </center>
                  </Header>
                  <Grid style={{marginTop:'4px'}}>
                    <Grid.Row>
                      <Grid.Column width={1}></Grid.Column>
                      <Grid.Column width={7} as={Link} to='/tierLayout'>
                        <Segment inverted color='grey'>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='star' style={{paddingTop:'10px'}}/>
                             <span style={{fontSize:'12px'}}>
                               Tier Layout
                             </span>
                          </Header>
                          </center>
                        </Segment>
                        </Grid.Column>
                      <Grid.Column width={7} as={Link} to='/peopleLayout'>
                        <Segment inverted color='grey'>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='users' style={{paddingTop:'10px'}}/>
                             <span style={{fontSize:'12px'}}>
                              Customer Layout
                             </span>
                          </Header>
                          </center>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={1}></Grid.Column>
                      <Grid.Column width={7} as={Link} to='/mealLayout'>
                      {/* style={{background:"url('./../../images/food.jpg')"}} */}
                        <Segment inverted color='grey'>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='food' style={{paddingTop:'10px'}}/>
                              <span style={{fontSize:'12px'}}>
                                Meals Layout
                              </span>
                          </Header>
                          </center>
                        </Segment>
                      </Grid.Column>
                      <Grid.Column width={7} as={Link} to='/notification'>
                        <Segment inverted color='grey'>
                          <center>
                          <Header as='h2' inverted>
                             <Icon name='bell outline' style={{paddingTop:'10px'}}/>
                             <span style={{fontSize:'12px'}}>
                                Notification Summary
                             </span>
                          </Header>
                          </center>
                        </Segment>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <center>
                  <Button primary  style={{width:'90%',margin:'20px'}} onClick={this.handleClick.bind(this)}>Crew Details</Button>
                  </center>
                  <center>
                  <Button primary  style={{width:'90%',margin:'20px',marginTop:'-10px'}} as={Link} to='/seatLayout'>Seat Layout</Button>
                  </center>
            </Segment>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
         <ModalCrew method={this.handleClick1.bind(this)} flag={this.state.flag}/>
        </div>


      </div>
    )
  }
}
