import React from 'react';
import { DollarSign } from 'lucide-react';

interface AmountSelectorProps {
  amount: string;
  setAmount: (amount: string) => void;
  isDisabled?: boolean;
}

const AmountSelector: React.FC<AmountSelectorProps> = ({ amount, setAmount, isDisabled }) => {
  const presetAmounts = [10, 25, 50, 100];

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value === '' || /^\d+\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <DollarSign className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={amount}
          onChange={handleCustomAmount}
          placeholder="Enter amount"
          disabled={isDisabled}
          className={`block w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-200 ${
            isDisabled
              ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
              : 'border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }`}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            onClick={() => !isDisabled && setAmount(preset.toString())}
            disabled={isDisabled}
            className={`py-4 px-6 rounded-lg border-2 transition-all duration-200 ${
              isDisabled
                ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                : amount === preset.toString()
                ? 'border-blue-600 bg-blue-50 text-blue-600'
                : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50'
            }`}
          >
            ${preset}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AmountSelector;