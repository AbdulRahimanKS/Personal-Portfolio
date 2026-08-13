import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Alex's AI assistant. How can I help you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking and responding
    setTimeout(() => {
      let botResponse = "Thanks for reaching out! I'm currently a demo bot, but Alex will get back to you soon if you leave a message via the contact form.";
      
      const lowerInput = inputValue.toLowerCase();
      if (lowerInput.includes('hello') || lowerInput.includes('hi ')) {
        botResponse = "Hello! How can I assist you with Alex's portfolio?";
      } else if (lowerInput.includes('hire') || lowerInput.includes('freelance')) {
        botResponse = "Alex is always open to discussing new opportunities. Feel free to use the Contact section to send an email!";
      } else if (lowerInput.includes('skills') || lowerInput.includes('tech')) {
        botResponse = "Alex specializes in Full Stack Development using React, Python, Node.js, and PostgreSQL among other technologies. Check out the Skills section for more details!";
      }

      setMessages([...newMessages, { text: botResponse, isUser: false }]);
      setIsTyping(false);
    }, 1500); // 1.5 seconds thinking time
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3 className={styles.headerTitle}>Alex's Assistant</h3>
            <button className={styles.closeButton} onClick={toggleChat} aria-label="Close chat">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className={styles.chatMessages}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.messageWrapper} ${msg.isUser ? styles.user : styles.bot}`}>
                <div className={`${styles.message} ${msg.isUser ? styles.user : styles.bot}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className={`${styles.messageWrapper} ${styles.bot}`}>
                <div className={styles.typingIndicator}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.chatInputContainer} onSubmit={handleSend}>
            <input
              type="text"
              className={styles.chatInput}
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={!inputValue.trim() || isTyping}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button className={styles.chatButton} onClick={toggleChat} aria-label="Open chat">
          <span className={`material-symbols-outlined ${styles.chatButtonIcon}`}>chat</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
