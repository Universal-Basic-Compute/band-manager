import { Message } from './ChatInterface';

type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-xl p-4 ${
          isUser 
            ? 'bg-[#36E2EC]/20 text-white' 
            : 'bg-[#360A0F] border border-[#DFBD69]/20 text-white'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
