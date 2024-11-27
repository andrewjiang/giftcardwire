import React from 'react';
import { Wallet } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, onConnect }) => {
  if (!isOpen) return null;

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
          <div className="space-y-4">
            <button
              onClick={onConnect}
              className="w-full flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.ctfassets.net/9sy2a0egs6zh/2qy1wS5MmZOXkXn9yFlGJp/f3797a512c283e6f71450abd408b7452/mm-logo-white.svg"
                  alt="MetaMask"
                  className="w-8 h-8"
                />
                <span className="font-medium text-gray-900">MetaMask</span>
              </div>
              <span className="text-sm text-gray-500">Popular</span>
            </button>

            <button
              disabled
              className="w-full flex items-center justify-between p-4 border-2 border-gray-100 rounded-lg bg-gray-50 cursor-not-allowed"
            >
              <div className="flex items-center space-x-3">
                <Wallet className="w-8 h-8 text-gray-400" />
                <span className="font-medium text-gray-400">Other Wallets</span>
              </div>
              <span className="text-sm text-gray-400">Coming soon</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            By connecting a wallet, you agree to Based.gift's Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;