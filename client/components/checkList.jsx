import React, { Component } from 'react';
// import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
// import Reveal from 'react-reveal';
import { Input, Menu, Segment,Header,Feed,Button,Form,Dropdown,Modal,Label,Icon,Grid ,Divider,Image,Sidebar,Card,Checkbox} from 'semantic-ui-react'
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
      pdtDetails: []
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
            <Header as='h4' block inverted style ={{margin:'5px'}} >
              <center>
                 CheckList
               </center>
            </Header>
          <Grid>
              <Grid.Row style={{margin:'5px'}}>
                <Grid.Column>
                  <Card.Group>
                  <Card fluid color='red'>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                            Pre Boarding Checklist
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox  />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red'>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                            Food Checklist
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox   />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red'>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                          An Official Weather Briefing Check
                            </Feed.Summary>
                          </Feed.Content>
                          <Checkbox  />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                  <Card fluid color='red'>
                    <Card.Content>
                      <Feed>
                        <Feed.Event>
                          <Feed.Content>
                            <Feed.Summary>
                              Pre TakeOff CheckList
                            </Feed.Summary>
                          </Feed.Content>
                        <Checkbox  />
                        </Feed.Event>
                      </Feed>
                    </Card.Content>
                  </Card>
                    <Card fluid color='red'>
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                              PreLanding CheckList
                              </Feed.Summary>
                            </Feed.Content>

                            <Checkbox  />

                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>




                    <Card fluid color='red'>
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                              Post Landing CheckList
                              </Feed.Summary>
                            </Feed.Content>
                          <Checkbox   />
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                    <Card fluid color='red'>
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                                LogBook CheckList
                              </Feed.Summary>
                            </Feed.Content>
                            <Checkbox  />
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>

                    <Card fluid color='red'>
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                                First aid kit - sealed.
                              </Feed.Summary>
                            </Feed.Content>
                          <Checkbox   />
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                    <Card fluid color='red'>
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                                Evacuation slide - properly pressurized.
                              </Feed.Summary>
                            </Feed.Content>
                            <Checkbox  />
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                    <Card fluid color='red'>
                      <Card.Content>
                        <Feed>
                          <Feed.Event>
                            <Feed.Content>
                              <Feed.Summary>
                                Defibrilator - charged.
                              </Feed.Summary>
                            </Feed.Content>
                            <Checkbox  />

                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                    </Card>
                  </Card.Group>
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
