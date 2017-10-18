import React, {Component} from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom';
import {PostData} from '../../services/PostData';
import Title from '../Title/Title';
import ProductsList from '../ProductsList/ProductsList';
import PayPal from '../PayPal/PayPal';
class Home extends Component {

  constructor(props){
   super(props);
   this.state = {
   name:'',
   redirect: false,
   products:[],
   pid:''
   };
  
   this.getProducts = this.getProducts.bind(this);
   this.checkout = this.checkout.bind(this);
  }

  componentDidMount() {
    let data = JSON.parse(sessionStorage.getItem('userData'));
    console.log(data);
    this.getProducts(data.userData);
    this.setState({name: data.userData.name})
  }

  getProducts(userData){
   let postData = {uid: userData.uid, token:userData.token};
   console.log(postData);
   PostData('products', postData).then((result) =>{
    let responseJson = result;
    this.setState({products: responseJson.products});
  

  });
  }
  

  checkout(e){
    console.log(e.target);
    let pid = e.target.getAttribute('value');
    console.log("Pid"+ pid);
    sessionStorage.setItem('pid',pid);
    this.setState({pid: pid});
    }
  

  render() {

    if(!sessionStorage.getItem('userData') || this.state.redirect){
      return (<Redirect to={'/'}/>)
    }

    if(this.state.pid > 0){
      return (<Redirect to={'/checkout'}/>)
    }

    return (
      <div className="row body" >
      <Title name={this.state.name}/>
     
      <ProductsList productsData={this.state.products}  checkout={this.checkout}/>
      </div>
    );
  }
}

export default Home;