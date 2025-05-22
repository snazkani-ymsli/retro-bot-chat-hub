
import { useState, useEffect, useCallback } from 'react';
import { Message } from '@/components/ChatMessage';
import { v4 as uuidv4 } from 'uuid';

// Sample responses for the chatbot
const botResponses = [
  "Hello! I'm RetroBot, your AI assistant with a vintage style. How can I help you today?",
  "That's an interesting question. Let me think about that for a moment...",
  "According to my retro database, the answer is 42. But seriously, I'm here to chat!",
  "Back in the day, we would have needed a much larger computer to have this conversation!",
  "Beep boop! Processing your request... Just kidding, I don't actually make those sounds.",
  "I may look retro, but my knowledge is pretty up-to-date!",
  "That's a great point! I'd like to know more about your perspective on that.",
  "Fascinating question! The field of AI has come a long way since the early text adventures.",
  "If I were a real 80s computer, I'd be taking much longer to respond!",
  "I'm designed to look retro, but my responses are modern. The best of both worlds!",
  "Let me compute that for you... *makes whirring disk noises* Here's what I think...",
  "Have you tried turning it off and on again? Just kidding, that's the standard IT response.",
  "I'm processing your request at blazing 8-bit speeds! Well, not really, but you get the idea.",
  "My creators gave me this retro look, but my thinking is quite contemporary.",
  "That's a complex topic! Let me break it down in a way that would make even an 8-bit processor understand.",
];

// Function to get a random response with some intelligence
const getRandomResponse = (userMessage: string) => {
  // Check for greetings
  if (/\b(hi|hello|hey|greetings)\b/i.test(userMessage)) {
    return "Hello there! Welcome to RetroBot! How can I assist you today?";
  }

  // Check for questions about the bot
  if (/who are you|what are you|tell me about yourself/i.test(userMessage)) {
    return "I'm RetroBot, an AI assistant with a retro aesthetic! I was created to provide a nostalgic chat experience with modern capabilities. How can I help you?";
  }

  // Check for goodbyes
  if (/\b(bye|goodbye|see you|farewell)\b/i.test(userMessage)) {
    return "Goodbye! It was nice chatting with you. Come back soon for more retro-futuristic conversations!";
  }

  // Check for thanks
  if (/\b(thanks|thank you|thx)\b/i.test(userMessage)) {
    return "You're welcome! It's my pleasure to assist. Is there anything else you'd like to know?";
  }

  // Default: return a random response
  return botResponses[Math.floor(Math.random() * botResponses.length)];
};

export const useChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Load messages from localStorage on initial load
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      // Add welcome message if no saved messages
      const welcomeMessage: Message = {
        id: uuidv4(),
        text: "Welcome to RetroBot! I'm your AI assistant with a vintage vibe. How can I help you today?",
        sender: 'bot',
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = useCallback((text: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      text,
      sender: 'user',
      timestamp: Date.now(),
    };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking with a random delay
    setTimeout(() => {
      const botMessage: Message = {
        id: uuidv4(),
        text: getRandomResponse(text),
        sender: 'bot',
        timestamp: Date.now(),
      };
      
      setMessages(prevMessages => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  }, []);

  const clearChat = useCallback(() => {
    const welcomeMessage: Message = {
      id: uuidv4(),
      text: "Chat history cleared. How can I help you today?",
      sender: 'bot',
      timestamp: Date.now(),
    };
    setMessages([welcomeMessage]);
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat,
  };
};
