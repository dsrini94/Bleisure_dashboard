import React from 'react';
import Message from './message.jsx';
import ChatInfo from './chatinformation.jsx'
import {Button, Modal,Icon} from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';


export default class CrewChatBox extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      slideIndex: 0,
      modalOpen:false
    }
  }

  handleOpen() {
    this.setState({
      modalOpen: true
    });
  }
  handleClose() {
    this.setState({
      modalOpen: false
    });
  }
  handleChange(value) {
    this.setState({slideIndex: value}, function() {
      console.log("--------------->" + this.state.slideIndex);
    });
  }
  render()
  {
    return(
      <div>
        <Modal
        trigger={<Icon size='large' name='commenting' onClick={this.handleOpen.bind(this)}></Icon>}
        open={this.state.modalOpen}
        onClose={this.handleClose.bind(this)}
        size='fullscreen'
      >
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange.bind(this)}>
            <div>
              <Message handleClick={this.handleChange.bind(this)}/>
            </div>
            <div>
              <ChatInfo handleClick={this.handleChange.bind(this)}/>
            </div>
        </SwipeableViews>
      </Modal>
    </div>
    );
  }
}
