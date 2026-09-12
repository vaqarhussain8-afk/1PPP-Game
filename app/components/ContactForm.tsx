"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <CheckCircle2 />
        <h3>Message received.</h3>
        <p>Thanks for reaching out — we'll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label className="form-field">
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label className="form-field">
        <span>Subject</span>
        <input type="text" name="subject" placeholder="What's this about?" required />
      </label>
      <label className="form-field">
        <span>Message</span>
        <textarea name="message" rows={5} placeholder="Tell us more..." required />
      </label>
      <button type="submit" className="btn primary">
        <Send /> SEND MESSAGE
      </button>
    </form>
  );
}
