import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      window.location.href = `mailto:tahmidislamsamit@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`;
    }
  };

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  return (
    <section id="contact" className="contact reveal">
      <h2 className="section-title">
        Contact
        <span className="section-title__underline" />
      </h2>

      <div className="contact__content">
        <div className="contact__info">
          <h3>Get In Touch</h3>
          <div className="contact__row">
            <FaEnvelope className="contact__icon floating" />
            <a href="mailto:tahmidislamsamit@gmail.com">tahmidislamsamit@gmail.com</a>
          </div>
          <div className="contact__row">
            <FaMapMarkerAlt className="contact__icon floating" />
            <span>Dhaka, Bangladesh</span>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={errors.name ? "input--error" : ""}
              aria-label="Your name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={errors.email ? "input--error" : ""}
              aria-label="Your email"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className={errors.message ? "input--error" : ""}
              aria-label="Your message"
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>
          <button type="submit" className="btn btn--outline btn--send">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
