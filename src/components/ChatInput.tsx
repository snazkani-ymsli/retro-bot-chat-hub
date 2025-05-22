
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2 bg-retro-terminal p-3 border-t border-retro-border rounded-b-lg">
      <Input
        ref={inputRef}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        disabled={disabled}
        className="flex-grow bg-retro-background text-retro-text border-retro-accent focus-visible:ring-retro-accent"
      />
      <Button 
        onClick={handleSend}
        disabled={!message.trim() || disabled}
        variant="outline"
        size="icon"
        className="bg-retro-accent text-retro-background hover:bg-retro-accent2 border-none"
      >
        <Send size={18} />
      </Button>
    </div>
  );
};

export default ChatInput;
