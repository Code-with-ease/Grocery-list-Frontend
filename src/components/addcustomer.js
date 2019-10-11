import React, { Component } from 'react';
class Add extends Component {
  render() {
    return (
        <form action='https://smart-node-api.herokuapp.com/api/addCustomer' method="POST">
            <input type="file" accept="image/*" capture="camera" />
            <input name="fname" placeholder="name"></input>
            <input name="lname" placeholder="name"></input>
            <button type="submit">Add</button>
        </form>
    );
  }
}

export default Add;
