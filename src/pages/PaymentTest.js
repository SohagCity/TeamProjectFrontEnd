import React from 'react';
import '../App.scss';
import PaymentForm from '../components/PaymentForm'

// test of the payment form 
function PaymentTest() {
  return(
    <div className="PaymentForm">
        <h2>Test for payments</h2>
        <PaymentForm />
    </div>
  );
}

export default PaymentTest;
