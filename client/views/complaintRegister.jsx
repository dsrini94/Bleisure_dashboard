import React from 'react';
import { Accordion, Icon,Segment,Menu,Sidebar,Header,Input,Button,Modal} from 'semantic-ui-react';
import AppbarCrew from '../components/appbarCrew.jsx';
import SidebarMenu from '../components/sidebarMenu.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class ComplaintRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      confirmation: false
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
 handleHide()
 {
   this.setState({
     confirmation: !this.state.confirmation
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
                     Issues
                   </center>
                  </Header>
                  <Input  fluid

                    placeholder='Enter the issues'
                    style={{width:'90%',margin:'20px'}}/>
                    <Input  fluid

                      placeholder='Description'
                      style={{width:'90%',margin:'20px'}}/>
                      <Input  fluid
                        action={{ icon: 'camera'}}
                        placeholder='Enter the seat number'
                        style={{width:'90%',margin:'20px'}}/>
                  <center>
                  <Button primary  style={{width:'90%',margin:'20px'}} onClick={this.handleHide.bind(this)}>Submit</Button>
                  </center>
                  <Modal open={this.state.confirmation}  size='small'>
                    <Header content='Thank you'/>
                    <Modal.Content>
                      <p> Complaint has been registered and send to the ground team</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='green' fluid inverted="inverted" onClick={()=>{this.setState({confirmation:!this.state.confirmation})}}  as={Link} to='./MainLandingPage'>
                        <Icon name='checkmark'/>
                        close window
                      </Button>
                    </Modal.Actions>
                  </Modal>
           </Sidebar.Pusher>
         </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}
