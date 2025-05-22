// ContactMe.jsx
import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: Replace with actual email sending logic
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p className="contact-subtitle">
        Have a question, proposal, or just want to say hello? Feel free to reach out.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactMe;
