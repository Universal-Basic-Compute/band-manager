type ChatHeaderProps = {
  title: string;
  description?: string;
  showActionButton?: boolean;
  actionButtonText?: string;
  onActionButtonClick?: () => void;
};

export default function ChatHeader({
  title,
  description,
  showActionButton = false,
  actionButtonText = 'Continue',
  onActionButtonClick,
}: ChatHeaderProps) {
  return (
    <div className="bg-[#360A0F] border-b border-[#DFBD69]/20 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-serif text-[#DFBD69]">{title}</h2>
          {description && <p className="text-sm text-gray-300 mt-1">{description}</p>}
        </div>
        
        {showActionButton && onActionButtonClick && (
          <button
            onClick={onActionButtonClick}
            className="px-4 py-2 bg-[#DFBD69] text-[#360A0F] rounded-full font-bold text-sm hover:bg-[#DFBD69]/90 transition-all"
          >
            {actionButtonText}
          </button>
        )}
      </div>
    </div>
  );
}
