import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
class Card extends Component {
  render() {
    return (
        <div>
        
        <div class="card bg-dark text-white">
          <img class="card-img" src="holder.js/100x180/" alt=""></img>
          <div class="card-img-overlay">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
        <Button variant="danger" id="button1" class="button">Danger</Button>
        <Button variant="danger" id="button2" class="button">Danger</Button>
        </div>
    );
  }
}

export default Card;
