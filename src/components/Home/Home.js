import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import './Home.css';
import {Redirect} from 'react-router-dom';

class Home extends Component {

  constructor(props){
   super(props);
   this.state = {
   name:'',
   redirect: false
   };
   this.logout = this.logout.bind(this);
   this.getProducts = this.getProducts.bind(this);
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
  }
  
  logout(){
    sessionStorage.setItem("userData",'');
    sessionStorage.clear();
    this.setState({redirect: true});

  }

  render() {

    if(!sessionStorage.getItem('userData') || this.state.redirect){
      return (<Redirect to={'/'}/>)
    }

    return (
      <div className="row " id="Body">
      <a href="#" onClick={this.logout} className="right">Logout</a>
      <h1>Welcome {this.state.name}</h1>

      </div>
    );
  }
}

export default Home;