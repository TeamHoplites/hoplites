import React, { useState } from 'react';
import Footer from '../components/Footer';

const instagramSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const youtubeSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const accessKey = '87e167cc-6beb-468a-b4f9-36be0a0c7e3e';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    submissionData.append('access_key', accessKey);
    submissionData.append('name', formData.name);
    submissionData.append('email', formData.email);
    submissionData.append('subject', formData.subject || 'Message from Hoplites Site');
    submissionData.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert(result.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error Context:', error);
      alert('Network error. If you are using an Ad-blocker or Brave browser, please temporarily disable shields and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page active" id="contact">
      <div className="page-hero">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', color: '#fff' }}>
          Contact Us
        </h2>
        <div className="section-divider"></div>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h3>Find Us</h3>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-text">
              <div className="contact-label">Location</div>
              <div className="contact-value">
                Sri Krishna College of Engineering And Technology<br />
                Kuniyamuthur, Coimbatore – 641008<br />
                Tamil Nadu, India
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-text">
              <div className="contact-label">Phone</div>
              <div className="contact-value">
                +91 99441 39012
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <div className="contact-text">
              <div className="contact-label">Email</div>
              <div className="contact-value">
                hoplites26.123@gmail.com
              </div>
            </div>
          </div>

          <div className="social-follow">
            <h4>Follow Us</h4>
            <div className="social-buttons">
              <a
                href="https://www.instagram.com/_.hoplites._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
              >
                {instagramSVG}
                Instagram
              </a>
              <a
                href="https://youtube.com/@teamhoplites-ci4et?si=lUMcWQV3C18J6LE1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn youtube"
              >
                {youtubeSVG}
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <h3>Send a Message</h3>
          
          {!isSuccess ? (
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          ) : (
            <div className="form-success" id="formSuccess" style={{ display: 'block' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '44px', height: '44px', margin: '0 auto 1.2rem' }}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#fff' }}>Message Sent!</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                We'll get back to you soon. Thank you for reaching out to Team Hoplites!
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
