import React from 'react';
import { Accordion, Icon,Segment,Menu,Popup , Button ,Sidebar,Header} from 'semantic-ui-react';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class NotificationSummary extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      sidebarVisiblity: false,
      toggleIcon: 'content'
    }
  }
  handleClick(e, titleProps) {
   const { index } = titleProps
   const { activeIndex } = this.state
   const newIndex = activeIndex === index ? -1 : index
   this.setState({ activeIndex: newIndex })
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

                  <AppbarCrew toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
                  <Header as='h4' block inverted style ={{margin:'5px'}} >
                    <Menu.Item as={Link} to='/MainLandingPage'>
                      <Icon name='reply' style={{float:'left',color:'#FFF'}}  />
                    </Menu.Item>
                  <center>
                   Notification Summary
                   </center>
                  </Header>
                  <Accordion styled exclusive={false}>
                    <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
                      <Icon color='teal' name='dropdown' />
                    Customer Delight
                    </Accordion.Title>
                  <Accordion.Content active={this.state.activeIndex === 0}>
                    <Segment><Popup trigger ={<Button  fluid content ="Seat No F3 & G3 newly wed couple"></Button>}
                  content = {<Button content  = "offer $100 off on next flight "/>}
                postion = 'top center'/></Segment>
              <Segment><Popup trigger ={<Button  fluid content ="Seat No D3 has birthday"></Button>}
              content = {<Button content  = "Greet him with chocolates "/>}
            postion = 'top center'/></Segment>
                  </Accordion.Content>

                  <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}>
                    <Icon color='teal' name='dropdown' />
                  Service Recovery
                </Accordion.Title>
                <Accordion.Content active={this.state.activeIndex === 1}>
                  <Segment><Popup trigger ={<Button  fluid content ="Seat No C2  had coffee spill in last leg"></Button>}
                content = {<Button content  = "Apology the customer"/>}
              postion = 'top center'/></Segment>
            <Segment><Popup trigger ={<Button  fluid content ="Seat No F2 had discomfort in seat during his last leg"></Button>}
            content = {<Button content  = "Apology the customer and offer $100 off  shopping coupon"/>}
          postion = 'top center'/></Segment>
                </Accordion.Content>
                <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick.bind(this)}>
                  <Icon color='teal' name='dropdown' />
                Cross Sell
              </Accordion.Title>
              <Accordion.Content active={this.state.activeIndex === 2}>
                <Segment><Popup trigger ={<Button  fluid content ="Seat No I2  wife birthday is tomorrow and she is our customer fond of beligium chocolates"></Button>}
              content = {<Button content  = "offer beligum chocolates"/>}
            postion = 'top center'/></Segment>
          <Segment><Popup trigger ={<Button  fluid content ="Seat No F2 had discomfort in seat during his last leg"></Button>}
          content = {<Button content  = "Apology the customer and offer $100 off  shopping coupon"/>}
        postion = 'top center'/></Segment>
              </Accordion.Content>
              <Accordion.Title active={this.state.activeIndex === 3} index={3} onClick={this.handleClick.bind(this)}>
                <Icon color='teal' name='dropdown' />
              Up Sell
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 3}>
              <Segment><Popup trigger ={<Button  fluid content ="Seat No B2 has become Gold member from silver ++ during his last leg "></Button>}
            content = {<Button content  = "offer him a seat upgrade with $100 OFF"/>}
          postion = 'top center'/></Segment>
        <Segment><Popup trigger ={<Button  fluid content ="Seat No C2 is 100 points away from gold tier"></Button>}
        content = {<Button content  = "Offer  $100  off on duty free shoppng "/>}
      postion = 'top center'/></Segment>
            </Accordion.Content>
              </Accordion>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>


      </div>
    )
  }
}
