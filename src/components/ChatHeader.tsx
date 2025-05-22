
import React from 'react';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

interface ChatHeaderProps {
  onClearChat: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClearChat }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-retro-terminal border-b border-retro-border rounded-t-lg">
      <div>
        <h1 className="font-pixel text-retro-accent text-xl glow-text">RETRO-BOT</h1>
        <p className="text-retro-muted text-xs">Ask me anything...</p>
      </div>
      <Button 
        onClick={onClearChat}
        variant="outline" 
        size="icon"
        className="bg-transparent border border-retro-border hover:bg-retro-terminal hover:text-retro-accent text-retro-muted"
      >
        <Trash size={18} />
      </Button>
    </div>
  );
};

export default ChatHeader;
