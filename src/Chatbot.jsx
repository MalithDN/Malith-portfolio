import { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! 👋 I'm your MD Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Simple bot responses based on keywords
  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase()

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 Feel free to ask me about the projects, skills, or how to contact."
    }
    if (msg.includes('project')) {
      return "I have 6 featured projects: E-Commerce Platform, Inventory Management System, Library Management App, Campus News App, AI App .NET Microsoft, and MyStudy AI-Chat-app. Would you like to know more about any of them?"
    }
    if (msg.includes('e-commerce')) {
      return "E-Commerce Platform: Full-stack solution with React, TypeScript, MongoDB, and Stripe API integration for inventory management and payments."
    }
    if (msg.includes('inventory')) {
      return "Inventory Management System: Streamlined platform for university faculty with real-time tracking, automated stock updates using React, TypeScript, and MongoDB."
    }
    if (msg.includes('library')) {
      return "Library Management App: Web-based system built with PHP and MySQL featuring online catalog search, member/staff portals, and automated issue/return tracking."
    }
    if (msg.includes('campus news') || msg.includes('campus app')) {
      return "Campus News App: Android app built with Java and Firebase for students to view real-time campus news and announcements."
    }
    if (msg.includes('ai app') || msg.includes('.net microsoft')) {
      return "AI App .NET Microsoft: C# .NET application leveraging Microsoft.Extensions.AI for intelligent data processing and model integration."
    }
    if (msg.includes('mystudy') || msg.includes('study assistant')) {
      return "MyStudy AI-Chat-app: Personal study assistant built with .NET and C#, offering AI-powered Q&A, topic explanations, and study support for students."
    }
    if (msg.includes('skill')) {
      return "My skills include React, TypeScript, Node.js, MongoDB, PostgreSQL, and more. Check the Skills section for the complete list!"
    }
    if (msg.includes('certificate') || msg.includes('certification') || msg.includes('credential')) {
      return "I have 5 professional certifications: Python Essentials 1 (Cisco), ASP.NET Core 10 (Udemy - ongoing), Node.js Bootcamp (LetsUpgrade), JavaScript Bootcamp (LetsUpgrade), and Java Bootcamp (LetsUpgrade). Which one interests you?"
    }
    if (msg.includes('python')) {
      return "Python Essentials 1: Certified by Cisco Network Academy in 2024. Skilled in Python programming and standard library problem-solving."
    }
    if (msg.includes('asp.net') || msg.includes('asp net') || msg.includes('.net core')) {
      return "ASP.NET Core 10 (.NET 10) Ultimate Guide: Currently ongoing training on Udemy. Focus on MVC, Web APIs, SOLID principles, and advanced deployment."
    }
    if (msg.includes('node') || msg.includes('nodejs')) {
      return "Node.js Bootcamp: Successfully completed the full Node.js Bootcamp program through LetsUpgrade in 2025."
    }
    if (msg.includes('javascript')) {
      return "JavaScript Bootcamp: Successfully completed the full JavaScript Bootcamp program through LetsUpgrade in 2025."
    }
    if (msg.includes('java')) {
      return "Java Bootcamp: Successfully completed the full Java Bootcamp program through LetsUpgrade in 2025."
    }
    if (msg.includes('contact') || msg.includes('email')) {
      return "You can reach me at malithdilharanawala@gmail.com or through the contact links at the bottom of the page."
    }
    if (msg.includes('experience') || msg.includes('work')) {
      return "I have experience in full-stack development, UI engineering, and consulting. Check the Resume section for details!"
    }
    if (msg.includes('thank')) {
      return "You're welcome! 😊 Is there anything else you'd like to know?"
    }
    if (msg.includes('what can you do') || msg.includes('help')) {
      return "I can help you with: 📌 Project details, 🔧 Technical skills, 📧 Contact information, 💼 Work experience, and more. Just ask!"
    }
    if (msg.includes('github') || msg.includes('linkedin')) {
      return "Check out my GitHub: github.com/MalithDN and LinkedIn: linkedin.com/in/malith-dilhara-9ab044354"
    }
    if (msg.includes('service') || msg.includes('offer')) {
      return "I offer 6 comprehensive services: Full-Stack Web Development, AI & Machine Learning Integration, Mobile & Android Development, .NET & C# Solutions, Database Design & Optimization, and UI/UX & Frontend Engineering. Which service interests you?"
    }
    if (msg.includes('full-stack') || msg.includes('web development')) {
      return "Full-Stack Web Development: End-to-end web applications with React frontend, Node.js backend, and MongoDB databases. From e-commerce platforms to inventory management systems."
    }
    if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('intelligence')) {
      return "AI & Machine Learning Integration: Intelligent applications using OpenAI APIs, Microsoft.Extensions.AI, and .NET for smart chatbots, study assistants, and data processing solutions."
    }
    if (msg.includes('mobile') || msg.includes('android')) {
      return "Mobile & Android Development: Native Android applications built with Java and Firebase. Real-time features, push notifications, and cloud synchronization for campus and social apps."
    }
    if (msg.includes('.net') || msg.includes('c#')) {
      return ".NET & C# Solutions: Enterprise-grade applications using .NET framework with C#. AI-powered backends, real-time processing, and scalable cloud solutions."
    }
    if (msg.includes('database') || msg.includes('optimization')) {
      return "Database Design & Optimization: Expert database architecture with MongoDB, PostgreSQL, MySQL, and Firebase. Optimized queries, real-time sync, and data management systems."
    }
    if (msg.includes('design') || msg.includes('ui') || msg.includes('frontend')) {
      return "UI/UX & Frontend Engineering: Modern, responsive interfaces with React, TypeScript, and Tailwind CSS. Accessibility, performance optimization, and interactive user experiences."
    }
    if (msg.includes('backend') || msg.includes('api')) {
      return "I work with Node.js, Express, and databases like MongoDB and PostgreSQL to build scalable backend systems."
    }
    return "That's interesting! 🤔 Feel free to ask me about my projects, skills, services, experience, or how to contact me."
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsLoading(false)
    }, 500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Open chat"
      >
        <span className="chat-icon">💬</span>
        {!isOpen && <span className="chat-badge">1</span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>MD Assistant</h3>
            <button
              className="close-button"
              onClick={() => setIsOpen(false)}
              title="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender}`}
              >
                <div className="message-content">
                  <p>{message.text}</p>
                  <span className="message-time">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message bot">
                <div className="message-content typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="chatbot-input"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || inputValue.trim() === ''}
              className="send-button"
              title="Send message"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  )
}
