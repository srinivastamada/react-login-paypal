import React, {Component} from 'react';
import './ProductsList.css';
class ProductsList extends Component {

  constructor(props){
    super(props);
  
    
  }

  render() {
    
  
    let productList = this
      .props
      .productsData
      .map(function (productData, index) {
        return (
          <div className="row list" key={index}>
          <div className="medium-3 columns" >
         
          <img src={'https://demos.9lessons.info/PHP-PayPal-ExpressCheckout/img/'+productData.product_img} />
          
          
          </div>
          <div className="medium-3 columns" >
          
          {productData.product}
           
           
           </div>
           <div className="medium-3 columns" >
           
           $ {productData.price} 
            
            </div>
            <div className="medium-3 columns" >
            
           <button className="button">Order</button>
             
             </div>
          </div>
         
        )
      }, this);

    return (
      <div>
        {productList}

      </div>
    );
  }

}

export default ProductsList;