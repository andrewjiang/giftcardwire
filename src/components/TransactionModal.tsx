import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  recipientEmail: string;
  onConfirm: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ 
  isOpen, 
  onClose, 
  amount, 
  recipientEmail,
  onConfirm 
}) => {
  if (!isOpen) return null;

  const estimatedGas = "0.002";
  const total = (parseFloat(amount) + parseFloat(estimatedGas)).toFixed(3);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md overflow-hidden">
        <div className="bg-[#24272A] p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="https://images.ctfassets.net/9sy2a0egs6zh/2qy1wS5MmZOXkXn9yFlGJp/f3797a512c283e6f71450abd408b7452/mm-logo-white.svg"
                alt="MetaMask"
                className="w-8 h-8"
              />
              <span className="text-white font-medium">MetaMask</span>
            </div>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900">Confirm Transaction</h2>
            <p className="text-sm text-gray-600">
              Send gift card to {recipientEmail}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Amount</span>
              <span className="font-medium">{amount} USDC</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Estimated gas fee</span>
              <span className="font-medium">{estimatedGas} USDC</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg text-blue-600">
              <span className="font-medium">Total</span>
              <span className="font-medium">{total} USDC</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onClose}
              className="py-3 px-4 rounded-lg border-2 border-gray-200 text-gray-700 font-medium hover:border-gray-300 transition-all duration-200"
            >
              Reject
            </button>
            <button
              onClick={onConfirm}
              className="py-3 px-4 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Confirm</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionModal;