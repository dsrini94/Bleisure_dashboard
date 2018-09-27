import React, { Component } from 'react';
// import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import Reveal from 'react-reveal';
import { Input, Menu, Segment,Header,Feed,Button,Form,Dropdown,Modal,Label,Icon,Grid ,Divider,Image,Sidebar,Card} from 'semantic-ui-react'
import Appbar from './../components/appbarCrew.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';

export default class MessageTabs extends Component {

  constructor()
  {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      activeItem: 'checkin',
      pdtDetails: [],
      pnr: [
        {
          key: 'ABCD1234',
          text: 'ABCD1234',
          value: 'ABCD1234',
        },
        {
          key: '1234XYZW',
          text: '1234XYZW',
          value: '1234XYZW',
        },
        {
          key: '1234PQRS',
          text: '1234PQRS',
          value: '1234PQRS',
        },
      ]
    }
  }
  handleSiderbarVisiblity() {
    if (this.state.sidebarVisiblity) {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'content'});
    } else {
      this.setState({
        sidebarVisiblity: !this.state.sidebarVisiblity
      });
      this.setState({toggleIcon: 'remove'});
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div style={{overflow:'hidden'}}>
      <div className = "sidebar">
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical >
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic style={{
             padding:"14px 0px"}}>
            <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
          <div >
            <Header as='h5' block inverted style ={{margin:'5px'}} >
              <center>
                 Passenger Manifest
               </center>
            </Header>
              <Grid celled style={{fontSize:'14px'}}>
                <Grid.Row style={{backgroundColor:'#800000',color:'white',fontSize:'10px'}}>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>S No</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Name</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>Loyalty</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>Seat</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>SSR</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>Meal Pref</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>1</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Jenny Hess</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>0144256382</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1A</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>SPML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>2</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Elliot Fu</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>9152853376</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1B</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>WCHR</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>HNML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>3</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Stevie Feliciano</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>3368330206</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1C</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>NVML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>4</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Christian James</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>8775397348</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1D</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>SPML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>5</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Matt Davis</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>8922589629</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1E</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>6</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Justen Kitsune</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>3310452533</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1F</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>SPML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>7</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Andrew Lance</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>8415618192</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1G</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>WCHC</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>HNML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>8</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Barak Mustafa</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>6742542244</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1H</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>NVML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>9</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Daniel Rob</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>7200416465</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1I</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>SPML</h5>
                  </Grid.Column>

                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>10</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Ebenezer Hill</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4847340082</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>1J</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>11</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Eliphaz Stark</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>6332241976</h5>
                  </Grid.Column>

                  <Grid.Column width={2} textAlign='center'>
                      <h5>2A</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>SPML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>12</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Esau Evans</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>6915029870</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2B</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>HNML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>13</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Monica</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>0350807320</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2C</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>NVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>14</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Jairus Niel</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>1400727667</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2D</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>SPML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>15</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Jason Bourne</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2E</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>16</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Cliff Dweller</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2F</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>17</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Dennis Ray</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2G</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>18</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Driscoll Watt</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2H</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>19</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Eldwin James</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2I</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>20</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Frederick Patt</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>2J</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>21</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Freeman Hall</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3A</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>22</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Fergal Brown</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3B</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>23</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Gabriel Jan</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3C</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>24</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Christopher Nolan</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3D</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>25</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Halsey Smith</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3E</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>26</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Hardy Clan</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3F</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>27</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Gresham Bell</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3G</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>28</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Morris John</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3H</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>29</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Murray Ray</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3I</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>30</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Steve Philip</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>3J</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>31</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Heliary Clinton</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4A</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>32</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Milburn Joy</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4B</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>33</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Paul Spike</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4C</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>34</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Quade Roy</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4D</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>35</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Peter Smith</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4E</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>36</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Pretti Ram</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4F</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>37</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Kiran Kumar</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4F</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>38</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Taylor Swift</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4G</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>39</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>John Brown</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4H</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} textAlign='center'>
                    <h5>40</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>Scarlett John</h5>
                  </Grid.Column>
                  <Grid.Column width={4} textAlign='center'>
                    <h5>4345421547</h5>
                  </Grid.Column>
                  <Grid.Column width={2} textAlign='center'>
                      <h5>4I</h5>
                  </Grid.Column>
                  <Grid.Column width={3} textAlign='center'>
                    <h5>-</h5>
                  </Grid.Column>
                    <Grid.Column width={2} textAlign='center'>
                    <h5>AVML</h5>
                  </Grid.Column>
                </Grid.Row>

              </Grid>
          </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      </div>
    </div>
    )
  }
}
