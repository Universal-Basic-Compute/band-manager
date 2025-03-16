import type { Message } from '../../contexts/ChatContext';

type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const isLoading = message.content === '...';
  
  // Function to format text with line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };
  
  // Loading indicator component
  const LoadingIndicator = () => (
    <div className="flex space-x-2 items-center p-1">
      <div className="w-2 h-2 bg-[#DFBD69] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
      <div className="w-2 h-2 bg-[#DFBD69] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
      <div className="w-2 h-2 bg-[#DFBD69] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
    </div>
  );
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-xl p-4 whitespace-pre-wrap ${
          isUser 
            ? 'bg-[#36E2EC]/20 text-white' 
            : 'bg-[#360A0F] border border-[#DFBD69]/20 text-white'
        }`}
      >
        {isLoading ? <LoadingIndicator /> : formatText(message.content)}
      </div>
    </div>
  );
}
