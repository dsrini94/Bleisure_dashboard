import React from 'react';
import {
  Grid,
  Image,
  Card,
  Button,
  Label,
  Statistic
} from 'semantic-ui-react';
import ShoppingModal from './shoppingModal.jsx';
import BuyShoppingModal from './buyShoppingModal.jsx';


const dataSet = [
  {
    image: 'https://cdn.macrumors.com/article-new/2017/10/iphone-x-silver.jpg',
    name: 'iphone X',
    price: '$1000',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'
  }, {
    image: 'http://www.chicagonow.com/code-purple-gold/files/2017/04/dj.png',
    name: 'Headphone',
    price: '$250',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'http://lp.hm.com/hmprod?set=key[source],value[/model/2016/E00%200424186%20001%2036%201125.jpg]&set=key[rotate],value[]&set=key[width],value[]&set=key[height],value[]&set=key[x],value[]&set=key[y],value[]&set=key[type],value[STILL_LIFE_FRONT]&set=key[hmver],value[4]&set=key[quality],value[80]&set=key[size],value[346x405]&call=url[file:/mobile/v2/product]',
    name: 'Men Casual Jeans',
    price: '$50',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'https://cdn.zando.co.za/p/138164-1262-461831-1-detail.jpg',
    name: 'Dior Perfumes',
    price: '$50',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'http://raredelights.com/wp-content/uploads/2013/09/La-Maison-du-Chocolat.jpg',
    name: 'To’ak Chocolates',
    price: '$250',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJ0BpMFpj5GuvxSqPAtkqVpElft-M6xOYURgBRREXSWaTwNkH',
    name: 'Luxury Trolley bags',
    price: '$300',
    desc:'The iPhone X display has rounded corners that follow a beautiful curved design and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less).'

  }
]

export default class ShoppingComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: '',
      selectedProduct:'',
      modalOpen:false,
      buyModalOpen:false
    }
    this.handleView = this.handleView.bind(this);
    this.handleBuy = this.handleBuy.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.buyModalClose = this.buyModalClose.bind(this);

  }

  buyModalClose()
  {
    this.setState({buyModalOpen:!this.state.buyModalOpen});
  }
  handleBuy(item)
  {
    this.setState({selectedProduct:item,buyModalOpen:!this.state.buyModalOpen});
  }
  modalClose()
  {
    this.setState({modalOpen:!this.state.modalOpen})
  }
  handleView(item)
  {
    this.setState({selectedProduct:item,modalOpen:!this.state.modalOpen})
  }

  componentWillMount() {
    var temp = [];

    temp.push(dataSet.map((item, i) => {
      return (<Grid.Column key={i}>
        <Card>
          <Image src={item.image} style={{marginTop:'5px'}}/>
          <Card.Content>
            <Card.Header>
              <br/>
              <center>
              <Statistic size={'mini'} >
                <Statistic.Value style={{
                    color: '#800000',marginBottom:'5px'
                  }}>{item.price}</Statistic.Value>
                <Statistic.Label style={{
                    color: '#800000'
                  }}>{item.name}</Statistic.Label>
              </Statistic>
              </center>
            </Card.Header>

          </Card.Content>
          <Card.Content extra>
            <center>
            <Button.Group >
              <Button inverted style={{
                  backgroundColor: '#800000'
                }} onClick={()=>this.handleView(item)}>View</Button>
              <Button.Or/>
              <Button inverted style={{
                  backgroundColor: '#800000'
                }} onClick={()=>this.handleBuy(item)}>Buy</Button>
            </Button.Group>
            </center>
          </Card.Content>
        </Card>
      </Grid.Column>)
    }));
    this.setState({products: temp});
  }

  render() {
    return (<div style={{marginTop:'10px'}}>
      <Grid columns={2}>
        {this.state.products}
      </Grid>
      <ShoppingModal modalOpen={this.state.modalOpen} selectedProduct={this.state.selectedProduct} modalClose={this.modalClose}/>
      <BuyShoppingModal openState={this.state.buyModalOpen} selectedProduct={this.state.selectedProduct} buyModalClose={this.buyModalClose}/>
    </div>);
  }
}
