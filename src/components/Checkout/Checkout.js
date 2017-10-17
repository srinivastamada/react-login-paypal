import React, {Component} from 'react';
import './Checkout.css';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import Title from '../Title/Title';
import PayPal from '../PayPal/PayPal';
class Checkout extends Component {

  constructor(props){
   super(props);
   this.state = {
   name:'',
   redirect: false,
   pid:'',
   product:[]
   };
  
  
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('userData'));
    console.log(data);
    this.getProductData(data.userData);
    this.setState({name: data.userData.name})
  }

  getProductData(userData){
    let pid = sessionStorage.getItem('pid');
    let postData = {uid: userData.uid, token:userData.token, pid: pid};
   
    PostData('getProduct', postData).then((result) =>{
      let responseJson = result;
      this.setState({product: responseJson.product});
      console.log(responseJson.product);
    });

  }


  render() {

    if(!sessionStorage.getItem('userData') || this.state.redirect){
      return (<Redirect to={'/'}/>)
    }

  


    return (
      <div className="row body" >
      <Title name={this.state.name}/>
       <h2>Checkout</h2>
       <div className='row'>
       <div className="medium-4 columns" >Product</div>
       <div className="medium-4 columns" >Name</div>
       <div className="medium-4 columns" >Price</div>
    
       </div>
       <div className='row'>
       <div className="medium-4 columns" ><img src={'https://demos.9lessons.info/PHP-PayPal-ExpressCheckout/img/'+this.state.product.product_img} /></div>
       <div className="medium-4 columns" >{this.state.product.product}</div>
       <div className="medium-4 columns" >{this.state.product.price}
       <PayPal />
       </div>
       

       </div>
      </div>
    );
  }
}

export default Checkout;