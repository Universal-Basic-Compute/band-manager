type Step = {
  id: string;
  title: string;
  isCompleted: boolean;
  isCurrent: boolean;
};

type StepProgressProps = {
  steps: Step[];
};

export default function StepProgress({ steps }: StepProgressProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step circle */}
            <div 
              className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold
                ${step.isCompleted 
                  ? 'bg-[#DFBD69] text-[#360A0F]' 
                  : step.isCurrent 
                    ? 'bg-[#36E2EC] text-[#360A0F]' 
                    : 'bg-[#360A0F] text-gray-400 border border-gray-600'}
              `}
            >
              {step.isCompleted ? '✓' : index + 1}
            </div>
            
            {/* Step title */}
            <span 
              className={`ml-3 ${
                step.isCurrent 
                  ? 'text-[#36E2EC] font-medium' 
                  : step.isCompleted 
                    ? 'text-[#DFBD69]' 
                    : 'text-gray-400'
              }`}
            >
              {step.title}
            </span>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div 
                className={`
                  h-[2px] flex-grow mx-4 min-w-[40px]
                  ${step.isCompleted ? 'bg-[#DFBD69]' : 'bg-gray-600'}
                `}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
