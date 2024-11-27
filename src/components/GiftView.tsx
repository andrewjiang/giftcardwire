import React from 'react';
import GiftCard from './GiftCard';
import GiftNote from './GiftNote';
import { type GiftCardData } from '../types';

interface GiftViewProps {
  data: GiftCardData;
  onCreateAnother: () => void;
}

const GiftView: React.FC<GiftViewProps> = ({ data, onCreateAnother }) => {
  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Your USDC Gift Card
          </h1>
          
          <div className="space-y-8">
            <GiftCard amount={data.amount} background={data.background} />
            <GiftNote senderName={data.senderName} message={data.message} />
          </div>

          <div className="flex justify-center">
            <button
              onClick={onCreateAnother}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Create Another Gift Card
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default GiftView;