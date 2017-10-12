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
      .map(function (feedData, index) {
        return (
          <div clasName="row orderList">
          <div className="medium-12 columns" key={index}>
          
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