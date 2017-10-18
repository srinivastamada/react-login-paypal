import React, {Component} from 'react';
import './PayPal.css';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
class PayPal extends Component {
  constructor(props){
    super(props);
    this.state={
      redirect: false
    }
    this.createOrder = this.createOrder.bind(this);
  }

  createOrder(payment){
    let postData = {uid: this.props.userData.uid, token:this.props.userData.token, payerID: payment.payerID, paymentID: payment.paymentID, paymentToken: payment.paymentToken, pid: this.props.pid };
    console.log(postData);
    PostData('createOrder', postData).then((result) =>{
     let responseJson = result;
     if(responseJson.status === 'true'){
       this.setState({redirect: true});
     }
   
 
   });
   }

  render() {
    if(this.state.redirect){
      return (<Redirect to={'/orders'}/>)
    }

    const onSuccess = (payment) => {
      console.log("The payment was succeeded!", payment);

      this.createOrder(payment);

      
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
      console.log("Error!", err);
    }

    let env = 'sandbox'; 
    let currency = 'USD'; 
    let total = this.props.value; 

    const client = {
      
      sandbox:    'AQwoZAAHsmA5vBLj_mZffS3NWJjNJODewuV2WakPm-BQilgsawTtnbLvWHNC73idcfiaHBOjaeTDkAS8',
      production: '<insert production client id>'
    }

    return (
      <PaypalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}/>
    );
  }
}

export default PayPal;