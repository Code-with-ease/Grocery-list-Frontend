import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       customers: []
//     };
//   }

//   componentDidMount() {
//     fetch('/api/customers')
//       .then(res => res.json())
//       .then(
//         (customers) => {
//           this.setState({
//             isLoaded: true,
//             customers: customers
//           });
//         })
//   }
// render(){
//   if(error){
//     return <div>Error in loading</div>
//   }else if (!isLoaded) {
//     return <div>Loading ...</div>
//   }else{
//   return (
//       <div>
//         <h2>Customers</h2>
//         <ul>
//         {customers.map(customer => 
//           <li>{customer.fname} {customer.lname}</li>
//         )}
//         </ul>
//       </div>
//     );
//   }
// }
constructor(){
  super();
  this.state = {
      error : null,
      isLoaded : false,
      data : []   
  };
}


componentDidMount(){
  // I will use fake api from jsonplaceholder website
  // this return 100 posts 
  fetch('http://127.0.0.1:5000/recommend')
  .then( response => response.json())
  .then(
      // handle the result
      (data) => {
         // console.log(customers)
          var customer;
          if(!data){
            customer=[]
          }
          else{
            customer=data
            //console.log(customer)
          }
          this.setState({
              isLoaded : true,
              // if(!customers.data){
              data:customer
              // }
          }
          , () => console.log('Customers fetched...', data)
          );
      },
      // Handle error 
      (error) => {
          this.setState({
              isLoaded: true,
              error
          })
      },
  ).catch(() => console.log("Can’t access response. Blocked by browser?"))
}
render() {
  // const {error, isLoaded, customers} = this.state;
  if(this.state.error){
      return <div>Error in loading</div>
  }else if (!this.state.isLoaded) {
      return <div>Loading ...</div>
  }else{
      return(
          <div>
            <h2>Customers  </h2><h4>Recommneded Item</h4>
            <ul>
            {this.state.data.map(customer =>
              
              <li key={customer.key} >{customer.customerId} {customer.productId}</li>
              
            )}
            </ul>
          </div>
      );
  }

}
}

export default Customers;
