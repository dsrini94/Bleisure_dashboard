import React from 'react';
import {Menu,Icon,Dropdown,Label,Grid} from 'semantic-ui-react';
import CrewChatBox from '../components/crewchatbox.jsx';

const trigger = (
  <Menu.Item as='a' >
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Grid.Row>
            <center>
            <span style={{paddingRight:'5px',float:'right'}}>Catherine</span>
            </center>
          </Grid.Row>
          <Grid.Row>
            <span style={{paddingRight:'5px',fontSize:'10px', float:'right'}}>Head Flight Attendent</span>

          </Grid.Row>
          <Grid.Row>
          <span style={{paddingRight:'5px',fontSize:'10px', float:'right'}}>Economy Class</span>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <img className="ui avatar image" src="./../../images/avatar.jpg" />
    <span style={{padding:'7px'}}><CrewChatBox/></span>
  </Menu.Item>
)

const options = [
  { key: 'user', text: 'My profile', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
]

export default class AppbarCrew extends React.Component
{
  constructor(props)
  {
     super(props);
     this.state= {
       sidebarVisiblity: false,
       toggleIcon: 'content'
     }
  }
  handleParentToggle()
  {
    this.props.handleSiderbarVisiblity();
  }
  render()
  {
    return(
      <Menu secondary className='appbar' inverted>
        <Menu.Item name='submit'>
          <Icon name={this.props.toggleIcon} inverted style={{
            marginLeft: '0px'
          }} onClick={this.handleParentToggle.bind(this)}/>
          <Icon name='send'/>
        <span className='companyName'>Airlines</span>
        </Menu.Item>
        <Menu.Menu position='right' style={{paddingRight:'10px'}}>
          <Dropdown  trigger={trigger} options={options} pointing='top right' icon={null}/>
        </Menu.Menu>
      </Menu>
    );
  }
}
