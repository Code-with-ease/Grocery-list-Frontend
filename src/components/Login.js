import React, { Component } from 'react';
class Login extends Component {
    render() {
      return ( 
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email-id"></input>
          <label for="email">Password</label>
          <input type="password" class="form-control" name="pass" id="pass" placeholder="password"></input>
        </div>
      );
    }
  }

  export default Login;