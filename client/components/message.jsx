import React, { Component } from 'react'
import { friendOptions } from './commons.js'
import { Input, Menu, Segment,Card,Feed,Button,Form,Dropdown,TextArea,Label,Icon } from 'semantic-ui-react'

export default class MessageTabs1 extends Component {

  constructor()
  {
    super();
    this.state = {
      activeItem: 'unread',
      pdtDetails: []
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount()
  {
    var template = [];
      template.push(
        <Card.Group >
           <Card fluid color='red'>
             <Card.Content>
               <Feed>
                 <Feed.Event>
                   <Feed.Label image='images/steve.jpg' />
                     <Feed.Content>
                       <Feed.Date content='5 min ago' />
                         <Feed.Summary>
                           You have a new meassage from  <a>Jenny Hess</a>.
                       </Feed.Summary>
                     </Feed.Content>
                 </Feed.Event>
               </Feed>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button style={{backgroundColor:'#800000',color:'white'}} onClick={this.props.handleClick.bind(this,1)}>Read</Button>
               </div>
             </Card.Content>
           </Card>
           <Card fluid color='red'>
             <Card.Content>
               <Feed>
                 <Feed.Event>
                   <Feed.Label image='images/elliot.jpg' />
                     <Feed.Content>
                       <Feed.Date content='6 min ago' />
                         <Feed.Summary>
                           You have a new meassage from  <a>Christian Bane</a>.
                       </Feed.Summary>
                     </Feed.Content>
                 </Feed.Event>
               </Feed>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
                 <Button style={{backgroundColor:'#800000',color:'white'}} onClick={this.props.handleClick.bind(this,1)}>Read</Button>
               </div>
             </Card.Content>
           </Card>
         </Card.Group>
    )
    this.setState({pdtDetails: template});
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    console.log(name);

    var template = [];
    if(name=='unread'){
    template.push(
      <Card.Group >
         <Card fluid color='red'>
           <Card.Content>
             <Feed>
               <Feed.Event>
                 <Feed.Label image='images/steve.jpg' />
                   <Feed.Content>
                     <Feed.Date content='5 min ago' />
                       <Feed.Summary>
                         You have a new meassage from  <a>Jenny Hess</a>.
                     </Feed.Summary>
                   </Feed.Content>
               </Feed.Event>
             </Feed>
           </Card.Content>
           <Card.Content extra>
             <div className='ui two buttons'>
               <Button style={{backgroundColor:'#800000',color:'white'}} onClick={this.props.handleClick.bind(this,1)}>Read</Button>
             </div>
           </Card.Content>
         </Card>
         <Card fluid color='red'>
           <Card.Content>
             <Feed>
               <Feed.Event>
                 <Feed.Label image='images/elliot.jpg' />
                   <Feed.Content>
                     <Feed.Date content='6 min ago' />
                       <Feed.Summary>
                         You have a new meassage from  <a>Christian Bane</a>.
                     </Feed.Summary>
                   </Feed.Content>
               </Feed.Event>
             </Feed>
           </Card.Content>
           <Card.Content extra>
             <div className='ui two buttons'>
               <Button style={{backgroundColor:'#800000',color:'white'}} onClick={this.props.handleClick.bind(this,1)}>Read</Button>
             </div>
           </Card.Content>
         </Card>
       </Card.Group>
     )
    }
    if(name=='new'){
      template.push(
        <Form>
          <Form.Group inline className='outlines'>
            <Dropdown placeholder='To' fluid selection options={friendOptions} />
          </Form.Group>
      <br/>
            <Form.Field className='outlines' id='form-textarea-control-opinion' control={TextArea} placeholder='Message' />
          <Form.Field id='form-button-control-public' size='large' circular color='red' icon='check' style={{marginLeft:'46%'}} control={Button} />
        </Form>
      )
    }
    this.setState({pdtDetails: template});
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Segment>
        <Menu attached='top' tabular>
          <Menu.Item name='unread' key='unread messages' active={activeItem === 'unread'} onClick={this.handleItemClick}><Label circular pointing='below' color='red' floating>2</Label>Unread Messages</Menu.Item>
          <Menu.Item name='new' key='new messages' active={activeItem === 'new'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
          </Menu.Menu>
        </Menu>
        <Segment attached='bottom'>
          {this.state.pdtDetails}
        </Segment>
      </Segment>
      </div>
    )
  }
}
