import React, {Component} from 'react';
import './ProductsList.css';
class OrdersList extends Component {

  constructor(props){
    super(props);
  
    
  }

  render() {
    
  
    let productList = this
      .props
      .ordersData
      .map(function (orderData, index) {
        return (
          <div clasName="row orderList" key={index}>
          <div className="medium-3 columns" >
          {orderData.oid}
          </div>
          <div className="medium-3 columns" >
          {orderData.product}
          </div>
          <div className="medium-3 columns" >
          ${orderData.price}
          </div>
          <div className="medium-3 columns" >
          {orderData.created}
          </div>
          </div>
         
        )
      }, this);

    return (
      <div>
        {ordersList}

      </div>
    );
  }

}

export default OrdersList;