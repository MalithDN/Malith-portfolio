import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, sending: false })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitted: false, error: false, sending: true })

    try {
      // Using FormSubmit.co - free service that sends form data to your email
      const response = await fetch('https://formsubmit.co/malithdilharanawala@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _captcha: 'false'
        })
      })

      if (response.ok) {
        setFormStatus({ submitted: true, error: false, sending: false })
        
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' })
          setFormStatus({ submitted: false, error: false, sending: false })
        }, 3000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setFormStatus({ submitted: false, error: true, sending: false })
      
      setTimeout(() => {
        setFormStatus({ submitted: false, error: false, sending: false })
      }, 3000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="p-8 rounded-2xl backdrop-blur-md"
      style={{
        background: 'linear-gradient(135deg, rgba(10, 25, 45, 0.7) 0%, rgba(20, 35, 60, 0.5) 100%)',
        border: '1px solid rgba(100, 108, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(100, 108, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.05)'
      }}
    >
      <h3 className="mb-1 text-2xl font-extrabold text-white">Send a Message</h3>
      <p className="mb-6 text-sm text-gray-400">I'll get back to you within 24 hours</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50"
            placeholder="Your Name"
            style={{
              backgroundColor: 'rgba(100, 108, 255, 0.05)',
              borderColor: 'rgba(100, 108, 255, 0.15)',
              color: '#ffffff',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50"
            placeholder="your@email.com"
            style={{
              backgroundColor: 'rgba(100, 108, 255, 0.05)',
              borderColor: 'rgba(100, 108, 255, 0.15)',
              color: '#ffffff',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block mb-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50"
            placeholder="Project Inquiry"
            style={{
              backgroundColor: 'rgba(100, 108, 255, 0.05)',
              borderColor: 'rgba(100, 108, 255, 0.15)',
              color: '#ffffff',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-xs font-semibold tracking-wider uppercase text-cyan-400">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 text-white placeholder-gray-500 transition-all duration-300 border rounded-lg resize-none backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400/50"
            placeholder="Tell me about your project..."
            style={{
              backgroundColor: 'rgba(100, 108, 255, 0.05)',
              borderColor: 'rgba(100, 108, 255, 0.15)',
              color: '#ffffff',
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              lineHeight: '1.5'
            }}
          />
        </div>

        <motion.button
          type="submit"
          className="flex items-center justify-center w-full gap-2 px-6 py-3 mt-2 text-sm font-bold tracking-wider text-white uppercase transition-all duration-300 rounded-lg"
          whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(97, 218, 251, 0.3)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.8) 0%, rgba(155, 92, 255, 0.6) 100%)',
            border: '1px solid rgba(97, 218, 251, 0.4)',
            boxShadow: '0 4px 15px rgba(97, 218, 251, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)'
          }}
          disabled={formStatus.submitted || formStatus.sending}
        >
          <span className="flex items-center gap-2">
            {formStatus.sending ? 'Sending...' : formStatus.submitted ? 'Message Sent!' : 'Send Message'}
            <Send className={`w-4 h-4 ${formStatus.submitted ? 'animate-bounce' : formStatus.sending ? 'animate-pulse' : ''}`} />
          </span>
        </motion.button>

        {formStatus.submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 text-center border rounded-lg bg-emerald-500/10 border-emerald-500/30"
          >
            <p className="text-sm font-medium text-emerald-400">
              ✓ Thank you for reaching out! I'll get back to you soon.
            </p>
          </motion.div>
        )}

        {formStatus.error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 text-center border rounded-lg bg-red-500/10 border-red-500/30"
          >
            <p className="text-sm font-medium text-red-400">
              ✗ Failed to send message. Please try again or email me directly.
            </p>
          </motion.div>
        )}
      </form>

      <style>{`
        .contact-form-card {
          background:
            linear-gradient(#0b0b0b, #0b0b0b) padding-box,
            linear-gradient(90deg, rgba(56,189,248,0.4), rgba(16,185,129,0.4)) border-box;
          border: 1.5px solid transparent;
          transition: box-shadow 0.5s ease, filter 0.5s ease;
        }
        
        .contact-form-card:hover {
          box-shadow:
            0 20px 65px rgba(56,189,248,0.18),
            0 12px 38px rgba(16,185,129,0.15);
          filter: brightness(1.05);
        }

        .btn-submit {
          background: linear-gradient(#000, #000) padding-box,
                      linear-gradient(90deg, #38bdf8, #10b981) border-box;
          border-radius: 9999px;
          border: 2px solid transparent;
          position: relative;
          isolation: isolate;
          transition: all 0.4s ease;
        }

        .btn-submit:hover:not(:disabled) {
          background: linear-gradient(90deg, #38bdf8, #10b981);
          color: #000;
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.5);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        input:focus, textarea:focus {
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }
      `}</style>
    </motion.div>
  )
}

