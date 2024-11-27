import React from 'react';
import { Gift } from 'lucide-react';
import { type CardBackground } from '../types';

interface GiftCardProps {
  amount: string;
  background: CardBackground;
}

const GiftCard: React.FC<GiftCardProps> = ({ amount, background }) => {
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Background */}
      {background.type === 'gradient' ? (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${background.url})`,
            backgroundBlendMode: 'overlay',
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      
      {/* Card content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="text-white text-lg font-medium">USDC Gift Card</h3>
            <p className="text-blue-100 text-sm">Digital Currency</p>
          </div>
          <Gift className="text-white/80 h-8 w-8" />
        </div>

        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-blue-100 text-sm">Balance</p>
            <p className="text-white text-3xl font-bold">
              ${amount || '0.00'}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-white/30" />
            </div>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-white/30" />
            </div>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-white/30" />
            </div>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <div className="h-6 w-6 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;