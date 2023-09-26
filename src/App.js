import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'http://4.bp.blogspot.com/-TRKYFeiqSSI/VfbA0mHFjxI/AAAAAAAAC0E/9joIo79MyIk/s1600/Samsung%2BGalaxy%2BS6%2Bprices%2Bin%2BNigeria.jpg',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'http://www.riskmanagementmonitor.com/wp-content/uploads/2014/12/Laptop1.jpg',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('Heyy please inc the qty of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); // [{}]

    this.setState({
      products: items
    })
  }

  getCartCount=()=>{
    const {products}=this.state;

    let count=0;
    products.forEach(products => {
count+=products.qty;      
    });

    return count;
  }

  getCartTotal=()=>{
    const {prodcuts}=this.state;
    let cartTotal=0;
    prodcuts.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price
    return null;
    })

  return cartTotal;
  }
render(){

  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      
      />

      <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>
    </div>
  );

}}
export default App;
