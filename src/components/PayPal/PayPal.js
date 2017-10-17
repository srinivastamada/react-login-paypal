import React, {Component} from 'react';
import './PayPal.css';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class PayPal extends Component {

  render() {
    const onSuccess = (payment) => {
      console.log("The payment was succeeded!", payment);
    }

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
      console.log("Error!", err);
    }

    let env = 'sandbox'; 
    let currency = 'USD'; 
    let total = 1; 

    const client = {
      sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
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