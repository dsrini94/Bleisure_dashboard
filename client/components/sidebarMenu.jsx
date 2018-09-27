import React from 'react';

import {
  Icon,
  Menu,
} from 'semantic-ui-react';

import {HashRouter, Route, Link} from 'react-router-dom';

export default class SidebarMenu extends React.Component {
  render() {
    return (<div>
      <Menu.Item name='Dashboard'  as={Link} to='/MainLandingPage'>
       <Icon name='tasks' style={{color:'#800000'}}/>
       Dashboard
      </Menu.Item>
      <Menu.Item name=' PassengerManifest' as={Link} to='/passengerList'>
        <Icon name='file text outline' style={{color:'#800000'}}/>
       Passenger Manifest
      </Menu.Item>
      <Menu.Item name='  CheckList' as={Link} to='/checkList'>
        <Icon name='checked calendar' style={{color:'#800000'}}/>
        Check List
      </Menu.Item>
      <Menu.Item name='Complaints' as={Link} to='complaintRegister' >
        <Icon name='alarm outline' style={{color:'#800000'}}/>
      Issues
      </Menu.Item>
      <Menu.Item name='Shop' as={Link} to='/ShoppingPage'>
        <Icon name='cart' style={{color:'#800000'}}/>
        Shop
      </Menu.Item>
      <Menu.Item name='  DutyLog' as={Link} to='/ShoppingPage'>
        <Icon name='edit' style={{color:'#800000'}}/>
      Duty Log
      </Menu.Item>
    </div>
  );
 }
}
