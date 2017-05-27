import React from 'react';
import FacebookLogin from 'react-facebook-login';

class ApiCall extends React.Component {
  responseFacebook(response) {
      console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="299814710442802"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
      />
    )
  }
}

export default ApiCall;
