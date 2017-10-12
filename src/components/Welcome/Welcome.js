import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './Welcome.css';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
    
  }
  signup(){
    console.log("Requested to api");
  }
  render() {

    const responseFacebook = (response) => {
      console.log("facebook console");
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log("google console");
      console.log(response);
    }

    const componentClicked = (response) => {
      console.log("facebook console");
      console.log(response);
    }

    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
        <div className="medium-12 columns">
        <h2 id="welcomeText"></h2>
        <FacebookLogin
        appId="517280548623431"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook} />

        <br/><br/><br/>

        <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
        
      </div>
   
          
        </div>
      </div>
    );
  }
}

export default Welcome;