import React, { Component } from 'react'
import { Button, Dimmer, Header, Icon, Image, Segment, Card,Grid,Label} from 'semantic-ui-react'

export default class DimmerExampleDimmer extends Component {
constructor(){
  super()
    this.state ={
      date: '',
      dayArray : ["Sun","Mon" ,"Tues" , "Wed" , "Thurs" , "Fri" , "Sat" ],
      month :["Jan" ,"Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" ,"Oct" ,"Nov" ,"Dec"]
      // active:true
    }
    // this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
}

  handleHide()
  {
    // this.setState({ active: false })
    this.props.method();
  }
  componentWillMount(){
    var day = new Date ();


   this.state.date = day.getDate() + "  " + this.state.month[day.getMonth()] + "  "+ this.state.dayArray[day.getDay()];

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
              <Label  floating><Icon  color = 'red' name = "birthday" size='large'/></Label>
                <Card.Content style ={{textColor :"#800000", backgroundColor :"lightgrey"}}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column centered = {'true'}>
                        <img className="ui avatar image" style={{'fontSize':42}} src="./../../images/christopher.jpg" />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>Christopher Nolan</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>Seat No : D3, Birthday  {this.state.date} (Today)</Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>
                        Meal Perference : AVML
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column centered = {'true'} style={{color:'#800000'}}>
                      Wish him with sweets
                      </Grid.Column>
                    </Grid.Row>

                  </Grid>
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
