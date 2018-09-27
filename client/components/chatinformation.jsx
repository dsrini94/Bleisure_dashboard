import React from 'react';
import { friendOptions } from './commons.js'
import {Button, Comment, Form, Header, Segment,Grid,Icon,Search,Divider,Input,Feed} from 'semantic-ui-react';


export default class ChatInfo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={    }
  }
  render()
  {
    return(
      <div>
        <Segment className="segmentDesign" raised>
          <Comment.Group>
            <Grid columns='equal'>
              <Grid.Column>
                <Button circular basic color='green' icon='reply' onClick={this.props.handleClick.bind(this,0)}></Button>
              </Grid.Column>
              <Grid.Column width={14}>
                <Header as='h3' dividing>Jenny Hase, Pilot</Header>
              </Grid.Column>
            </Grid>
              <Comment>
                  <Feed>
                    <Feed.Event>
                      <Feed.Label image='images/elliot.jpg' />
                        <Feed.Content>
                          <Feed.Date content='9 min ago' />
                            <Feed.Summary>
                              Hi, Catherine
                          </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                  </Feed>

                            <Comment.Group>
                              <Comment>
                                    <Feed>
                                      <Feed.Event>
                                        <Feed.Label image='images/avatar.jpg' />
                                          <Feed.Content>
                                            <Feed.Date content='8 min ago' />
                                              <Feed.Summary>
                                                Hello.
                                            </Feed.Summary>
                                          </Feed.Content>
                                      </Feed.Event>
                                    </Feed>
                              </Comment>
                            </Comment.Group>
                          </Comment>

              <Comment>
                    <Feed>
                      <Feed.Event>
                        <Feed.Label image='images/elliot.jpg' />
                          <Feed.Content>
                            <Feed.Date content='7 min ago' />
                              <Feed.Summary>
                                Are all the boarding procedures done?
                            </Feed.Summary>
                          </Feed.Content>
                      </Feed.Event>
                    </Feed>

                <Comment.Group>
                  <Comment>
                        <Feed>
                          <Feed.Event>
                            <Feed.Label image='images/avatar.jpg' />
                              <Feed.Content>
                                <Feed.Date content='6 min ago' />
                                  <Feed.Summary>
                                    Yes, we are good to take off.
                                </Feed.Summary>
                              </Feed.Content>
                          </Feed.Event>
                        </Feed>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                    <Feed>
                      <Feed.Event>
                        <Feed.Label image='images/elliot.jpg' />
                          <Feed.Content>
                            <Feed.Date content='5 min ago' />
                              <Feed.Summary>
                                Thanks
                            </Feed.Summary>
                          </Feed.Content>
                      </Feed.Event>
                    </Feed>
              </Comment>
            <Divider inverted />
            <Input fluid icon='share' placeholder='Type your message...' />
          </Comment.Group>

        </Segment>
    </div>
    );
  }
}
