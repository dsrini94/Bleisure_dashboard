import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon, Image, Segment, Card,Grid,Label} from 'semantic-ui-react'

export default class DimmerExampleDimmer extends Component {
constructor(){
  super()
    this.state ={
      // active:true
    }
    // this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
}
  // handleShow() {
  //   this.setState({ active: true })
  // }
  handleHide()
  {
    // this.setState({ active: false })
    this.props.method();
  }

  render() {
    // const { active } = this.state

    return (
      <div>

          <Dimmer active={this.props.flag} onClickOutside={this.handleHide}>
          <Grid >
            <Grid.Row >
            <Grid.Column width={2}>
            </Grid.Column>
            <Grid.Column width={12} >
              <Card style={{textAlign:'center'}}>
              {/* <Label  floating><Icon  color = 'red' name = "info" size='large'/></Label> */}
                <Card.Content style ={{textColor :"#800000", backgroundColor :"lightgrey"}}>
                  <Segment  style={{borderRadius:'0px',padding:'7px',backgroundColor:'#800000'}}>
                    <span>Crew Details</span>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px'}}>
                    <span>Jenny Hess, Pilot</span>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px'}}>
                    <span>Elliot James, Co-Pilot</span>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px'}}>
                    <span>Catherine Kate, Stewardess</span>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px'}}>
                    <span>Christian Bane, Steward</span>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px'}}>
                    <span>Stevie Feliciano, Steward</span>
                  </Segment>
                  <Segment secondary style={{borderRadius:'0px',padding:'7px'}}>
                    <span>Jennifer Lawrence, Stewardess</span>
                  </Segment>
                  {/* <Grid>
                    <Grid.Row>
                    </Grid.Row>
                  </Grid> */}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          </Dimmer>


      </div>
    )
  }
}
