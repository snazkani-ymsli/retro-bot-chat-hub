
import React from 'react';
import { cn } from '@/lib/utils';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: number;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={cn(
      "mb-4 flex",
      isBot ? "justify-start" : "justify-end"
    )}>
      <div className={cn(
        "rounded px-4 py-2 max-w-[80%] shadow-md",
        isBot 
          ? "bg-retro-terminal text-retro-accent animate-pulse-glow border border-retro-accent" 
          : "bg-retro-accent text-retro-background"
      )}>
        <div className="flex items-center gap-2 mb-1">
          <span className={cn(
            "text-xs font-pixel",
            isBot ? "text-retro-accent2" : "text-retro-background"
          )}>
            {isBot ? 'RETRO-BOT' : 'YOU'}
          </span>
          <span className="text-xs opacity-60">
            {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
        <p className="whitespace-pre-wrap break-words">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
