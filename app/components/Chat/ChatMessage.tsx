import type { Message } from '../../contexts/ChatContext';

type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  // Function to format text with line breaks
  const formatText = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[80%] rounded-xl p-4 whitespace-pre-wrap ${
          isUser 
            ? 'bg-[#36E2EC]/20 text-white' 
            : 'bg-[#360A0F] border border-[#DFBD69]/20 text-white'
        }`}
      >
        {formatText(message.content)}
      </div>
    </div>
  );
}
