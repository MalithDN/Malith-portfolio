import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      // Using Email.js service (free tier available)
      // You'll need to sign up at https://www.emailjs.com/ and get your service ID
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_malith', // Replace with your Email.js service ID
          template_id: 'template_portfolio', // Replace with your Email.js template ID
          user_id: 'YOUR_PUBLIC_KEY', // Replace with your Email.js public key
          template_params: {
            to_email: 'malith@example.com', // Replace with your email
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input textarea"
          rows="6"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="submit-button"
      >
        {loading ? (
          <span className="loading-spinner">
            <span className="spinner-dot"></span>
            <span className="spinner-dot"></span>
            <span className="spinner-dot"></span>
          </span>
        ) : (
          'Send Message'
        )}
      </button>

      {status === 'success' && (
        <div className="form-message success">
          ✓ Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="form-message error">
          ✗ Failed to send message. Please try again or email directly.
        </div>
      )}
    </form>
  )
}
