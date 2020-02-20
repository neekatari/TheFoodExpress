import React from 'react';
import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';


export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    // TODO: Send the token information and any other
    // relevant information to your payment process
    // server, wait for the response, and update the UI
    // accordingly. How this is done is up to you. Using
    // XHR, fetch, or a GraphQL mutation is typical.
    console.log("Tocken : " + token +", Address :" +addresses);
  };
  render() {
    return (
      <StripeCheckout
        amount="500"
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="YourDomain.tld"
        stripeKey="pk_test_OnvUxTfBKsAUDN1omwNi1pSJ00rXCsuZeG"
        token={this.onToken}
        zipCode
      />
    )
  }
}
