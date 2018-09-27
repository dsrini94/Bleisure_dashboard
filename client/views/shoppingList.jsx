import React from 'react'
import Appbar from './../components/appbarCrew.jsx';
import SidebarMenu from './../components/sidebarMenu.jsx';
import ShoppingComponent from './../components/shoppingComponent.jsx';

import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Icon,
  Grid,
  Divider
} from 'semantic-ui-react';
export default class ShoppingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebarVisiblity: false,
      toggleIcon: 'content',
      modalState: false

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
    return (<div>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={this.state.sidebarVisiblity} icon='labeled' vertical>
        <SidebarMenu/>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
          <div>
            <Appbar toggleIcon={this.state.toggleIcon} handleSiderbarVisiblity={this.handleSiderbarVisiblity.bind(this)}/>
          </div>
          <div>
            <ShoppingComponent/>
          </div>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>);
  }
}
