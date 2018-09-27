import React from 'react'
import {Grid, Input, Icon, Divider, Button} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class LoginPage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      logoMarginTop: '3%',
      textFieldMarginTop: '5%',
      password:'',
      userId:'',
      stars:''
    }
  }

  handlePassword(e)
  {
    if(e.target.value.length > this.state.starts)
    {
      var tempStars = this.state.stars;
      tempStars += '*';
      this.setState({stars:tempStars})
    }
    this.setState({password:e.target.value})
  }
  handleUserId(e)
  {
    console.log(e.target.value);
  }
  componentDidMount()
  {
    if (window.innerHeight > window.innerWidth) {
      this.setState({logoMarginTop: '30%', textFieldMarginTop: '5%'});
    } else {
      this.setState({logoMarginTop: '3%', textFieldMarginTop: '2%'});
    }

  }
  render()
  {
    return (
      <div style={{margin:'0px',overflow:'hidden',backgroundColor:'#f22731'}}>
        <div className="loginPageSection1">
          <Grid >
            <Grid.Row only='mobile'>
              <Grid.Column width={2}></Grid.Column>
              <Grid.Column width={12}>
                <center >
                  <Icon name='send' inverted size="huge" style={{
                    marginTop: this.state.logoMarginTop
                  }}/>
                  <br/>
                  <br/>
                  <span className="companyName">Airlines</span>
                  <br/>
                  <br/>
                  <Input fluid onChange={this.handleUserId.bind(this)} icon='user' iconPosition='left' placeholder='User id' />
                  <br/>
                  <Input fluid onChange={this.handlePassword.bind(this)} value={this.state.stars} icon='lock' iconPosition='left' placeholder='password' style={{
                    marginTop: this.state.textFieldMarginTop
                  }}/>
                  <br/>
                  <br/>
                  <Link to='/MainLandingPage'><Button inverted circular icon='arrow right' /></Link>
                  <br/>
                  <br/>
                </center>
              </Grid.Column>
              <Grid.Column width={2}></Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
