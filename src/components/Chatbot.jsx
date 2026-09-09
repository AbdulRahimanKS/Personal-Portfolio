import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';
import { API_ENDPOINTS } from '../config/api';

const QUICK_PROMPTS = [
  { label: 'Work Experience', prompt: 'Tell me about your professional work experience and background' },
  { label: 'Top Projects', prompt: 'What are your top projects and architectures?' },
  { label: 'Tech Stack', prompt: 'What is your core technical stack and skills?' },
  { label: 'Contact / Hire', prompt: 'How can I contact or hire Abdul?' }
];

const INITIAL_MESSAGE = {
  text: "Hello! I am Abdul Rahiman's AI Assistant. How can I help you explore Abdul's work experience, projects, or technical skills?",
  isUser: false,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

// Simple safe markdown formatter for assistant responses (handles **bold**, *italic*, - bullet lists, and markdown links)
const renderFormattedText = (text) => {
  if (!text) return null;

  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    // Bullet list items
    const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
    const cleanedLine = isBullet ? line.trim().substring(2) : line;

    // Parse bold, link, and inline elements
    const parts = [];
    // Regex for markdown links [text](url) and bold **text**
    const tokenRegex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = tokenRegex.exec(cleanedLine)) !== null) {
      if (match.index > lastIndex) {
        parts.push(cleanedLine.substring(lastIndex, match.index));
      }

      if (match[2] && match[3]) {
        // Link
        parts.push(
          <a
            key={`link-${lineIdx}-${match.index}`}
            href={match[3]}
            target={match[3].startsWith('http') ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={styles.chatLink}
          >
            {match[2]}
          </a>
        );
      } else if (match[4]) {
        // Bold
        parts.push(<strong key={`bold-${lineIdx}-${match.index}`}>{match[4]}</strong>);
      } else if (match[5]) {
        // Italic
        parts.push(<em key={`italic-${lineIdx}-${match.index}`}>{match[5]}</em>);
      }
      lastIndex = tokenRegex.lastIndex;
    }

    if (lastIndex < cleanedLine.length) {
      parts.push(cleanedLine.substring(lastIndex));
    }

    if (isBullet) {
      return (
        <li key={lineIdx} className={styles.bulletItem}>
          {parts}
        </li>
      );
    }

    // Regular line / paragraph
    return (
      <p key={lineIdx} className={styles.textParagraph}>
        {parts.length > 0 ? parts : '\u00A0'}
      </p>
    );
  });
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBackendOnline, setIsBackendOnline] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Poll backend health status to dynamically set online/offline indicators
  useEffect(() => {
    let isMounted = true;

    const checkHealth = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        const res = await fetch(API_ENDPOINTS.HEALTH, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (res.ok && isMounted) {
          setIsBackendOnline(true);
        } else if (isMounted) {
          setIsBackendOnline(false);
        }
      } catch {
        if (isMounted) {
          setIsBackendOnline(false);
        }
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 15000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const sendQuery = async (userText) => {
    const trimmed = userText.trim();
    if (!trimmed || isTyping) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Append user message to UI
    const updatedMessages = [
      ...messages,
      { text: trimmed, isUser: true, timestamp: timeString }
    ];
    setMessages(updatedMessages);
    setInputValue('');
    setIsTyping(true);

    // 2. Prepare history for API
    const historyPayload = updatedMessages
      .filter(m => m !== INITIAL_MESSAGE)
      .slice(-6)
      .map(m => ({
        role: m.isUser ? 'user' : 'assistant',
        content: m.text
      }));

    try {
      const response = await fetch(API_ENDPOINTS.CHAT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: trimmed,
          history: historyPayload
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.reply || "I'm sorry, I couldn't process that response. Please feel free to reach out via the Contact page!";

      setMessages(prev => [
        ...prev,
        {
          text: replyText,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          text: "Unable to connect to the assistant right now. You can reach Abdul directly at **rahimanks.abdul@gmail.com** or use the Contact form.",
          isUser: false,
          isError: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendQuery(inputValue);
  };

  const handlePromptClick = (promptText) => {
    sendQuery(promptText);
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow} role="region" aria-label="AI Portfolio Assistant">
          {/* Header */}
          <div className={styles.chatHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.avatarWrapper}>
                <span className={`material-symbols-outlined ${styles.botAvatarIcon}`}>smart_toy</span>
                <span
                  className={`${styles.onlineBadge} ${isBackendOnline ? styles.badgeOnline : styles.badgeOffline}`}
                  title={isBackendOnline ? "Backend Online" : "Backend Offline"}
                ></span>
              </div>
              <div className={styles.headerTexts}>
                <h3 className={styles.headerTitle}>Abdul's AI Assistant</h3>
                <span className={styles.headerSubtitle}>
                  {isBackendOnline ? "Live Portfolio AI" : "Offline"}
                </span>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button
                className={styles.iconButton}
                onClick={handleResetChat}
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <span className="material-symbols-outlined">restart_alt</span>
              </button>
              <button
                className={styles.iconButton}
                onClick={toggleChat}
                title="Close chat"
                aria-label="Close chat"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </div>

          {/* Messages list */}
          <div className={styles.chatMessages}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${styles.messageWrapper} ${msg.isUser ? styles.user : styles.bot}`}
              >
                <div
                  className={`${styles.message} ${msg.isUser ? styles.user : styles.bot} ${msg.isError ? styles.errorMessage : ''
                    }`}
                >
                  <div className={styles.messageContent}>
                    {msg.isUser ? msg.text : renderFormattedText(msg.text)}
                  </div>
                  {msg.timestamp && (
                    <span className={styles.messageTime}>{msg.timestamp}</span>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className={`${styles.messageWrapper} ${styles.bot}`}>
                <div className={styles.typingIndicator}>
                  <span className={styles.typingLabel}>Abdul's AI is thinking</span>
                  <div className={styles.typingDots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className={styles.quickPromptsContainer}>
            <div className={styles.quickPromptsScroll}>
              {QUICK_PROMPTS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={styles.promptChip}
                  onClick={() => handlePromptClick(item.prompt)}
                  disabled={isTyping}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form */}
          <form className={styles.chatInputContainer} onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              className={styles.chatInput}
              placeholder="Ask anything about Abdul's work or skills..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
              maxLength={500}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          className={styles.chatButton}
          onClick={toggleChat}
          aria-label="Open AI Assistant"
          title={`Chat with Abdul's AI Assistant (${isBackendOnline ? 'Online' : 'Offline'})`}
        >
          <span className={`material-symbols-outlined ${styles.chatButtonIcon}`}>smart_toy</span>
          <span
            className={`${styles.floatingPulse} ${isBackendOnline ? styles.pulseOnline : styles.pulseOffline}`}
            title={isBackendOnline ? "Backend Online" : "Backend Offline"}
          ></span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
