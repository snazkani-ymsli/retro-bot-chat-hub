
import React, { useRef, useEffect } from 'react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import ChatHeader from '@/components/ChatHeader';
import TypingIndicator from '@/components/TypingIndicator';
import RetroGlow from '@/components/RetroGlow';
import { useChatBot } from '@/hooks/useChatBot';

const Index = () => {
  const { messages, isTyping, sendMessage, clearChat } = useChatBot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-retro-background p-4 relative overflow-hidden">
      {/* Retro scanline effect */}
      <div className="scanline"></div>
      
      <RetroGlow className="w-full max-w-2xl h-full max-h-[80vh]">
        <div className="flex flex-col h-full max-h-[80vh] bg-retro-background border border-retro-border rounded-lg shadow-xl animate-pulse-glow crt">
          <ChatHeader onClearChat={clearChat} />
          
          <div className="flex-grow overflow-y-auto p-4 bg-retro-background scrollbar-thin scrollbar-thumb-retro-accent scrollbar-track-retro-terminal">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
          
          <ChatInput onSendMessage={sendMessage} disabled={isTyping} />
        </div>
      </RetroGlow>
      
      <footer className="mt-8 text-retro-muted text-xs text-center">
        <p>RetroBot 1.0 &copy; {new Date().getFullYear()}</p>
        <p className="mt-1">
          <span className="inline-block w-2 h-2 bg-retro-accent rounded-full mr-1"></span>
          ONLINE
        </p>
      </footer>
    </div>
  );
};

export default Index;
