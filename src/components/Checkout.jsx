import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Checkout({ cart, setView }) {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lbl8vt3', 'template_iwo5xad', formRef.current, {
        publicKey: '4EYl7slj9euc-6L7Q',
      })
      .then(
        () => {
          alert('Order placed successfully! Confirmation sent to your email.');
          setView('products');
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('There was an issue sending your order confirmation.');
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="checkout">
      <h2>Checkout</h2>
      <p className="total">Total: ${total}</p>

      <label>Name</label>
      <input
        type="text"
        name="user_name"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <label>Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />

      <label>Address</label>
      <textarea
        name="message"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        required
      />

      <button type="submit">Place Order</button>
    </form>
  );
}

export default Checkout;

