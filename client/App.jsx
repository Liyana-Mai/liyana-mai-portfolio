import React, { useState, useEffect, useMemo } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  CheckoutProvider
} from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import CheckoutForm from './CheckoutForm';

import "./App.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test secret API key.
const stripePromise = loadStripe("pk_test_51RYpwq2aC06LT0QhgGTDgPi01NdFBJLAQhSGq09Vyjiv7YaZdOocxGziAVFsMskXEkjHZW1XItAPGUwEtRcY6ZnD001CDDCa88");

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    )
  }

  return null;
}

const App = () => {
  const promise = useMemo(() => {
    return fetch('/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const appearance = {
    theme: 'stripe',
  };

  return (
    <div className="App">
      <Router>
        <CheckoutProvider
          stripe={stripePromise}
          options={{
            fetchClientSecret: () => promise,
            elementsOptions: {appearance},
          }}
        >
          <Routes>
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/return" element={<Return />} />
          </Routes>
        </CheckoutProvider>
      </Router>
    </div>
  )
}

export default App;