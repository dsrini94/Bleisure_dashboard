import React from 'react'
import {
  Divider,
  Statistic,
  Button,
  Icon,
  Modal,
  Radio,
  Image,
  Header,
  Input
} from 'semantic-ui-react';

export default class BuyShoppingModal extends React.Component {

  constructor()
  {
    super();
    this.state={confirmation:false}
    this.handleConfirmationDialouge = this.handleConfirmationDialouge.bind(this);

  }

  handleConfirmationDialouge()
  {
    this.props.buyModalClose();
    this.setState({confirmation:!this.state.confirmation})
  }

  render() {
    return (<div>
      <Modal open={this.props.openState}>
        <Modal.Header style={{
            color: '#800000'
          }}><Icon name='credit card alternative'/>
          Payment</Modal.Header>
        <Modal.Content image={true}>
          <Image src={this.props.selectedProduct.image} size='tiny'/>
          <Statistic size={'mini'}>
            <Statistic.Value style={{
                color: '#800000',
                marginBottom: '5px'
              }}>{this.props.selectedProduct.price}</Statistic.Value>
            <Statistic.Label style={{
                color: '#800000'
              }}>{this.props.selectedProduct.name}</Statistic.Label>
          </Statistic>
          <Modal.Description>
            <Header style={{
                color: '#800000'
              }}>Make Payment</Header>

            <Header as='h5' style={{
                border: 'none',
                margin: '10px',
                padding: '0px'
              }}>Enter card details</Header>
            <Input fluid={true} iconPosition='left' placeholder='Email'>
              <Icon name='credit card alternative'/>
              <input/>
            </Input>
            <Header as='h5' style={{
                border: 'none',
                margin: '10px',
                padding: '0px'
              }}>Enter Seat Number</Header>
            <Input fluid={true} iconPosition='left' placeholder='Seat No.'>
              <input/>
            </Input>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={() => this.props.buyModalClose()}>
            <Icon name='remove'/>
            close window
          </Button>
          <Button color='green' onClick={this.handleConfirmationDialouge}>
            <Icon name='credit card alternative'/>
            Buy
          </Button>
        </Modal.Actions>
      </Modal>

      <Modal open={this.state.confirmation}  size='small'>
        <Header icon='credit card alternative' content='Payment Successfull'/>
        <Modal.Content>
          <p>Thank you for purchasing {this.props.selectedProduct.name}. Now you can collect your product at our duty free shop</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' fluid inverted={true} onClick={()=>{this.setState({confirmation:!this.state.confirmation})}}>
            <Icon name='checkmark'/>
            close window
          </Button>
        </Modal.Actions>
      </Modal>

    </div>);
  }
}
