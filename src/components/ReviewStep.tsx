import React from 'react';
import { Check, Mail, DollarSign } from 'lucide-react';
import { type GiftCardData } from '../types';

interface ReviewStepProps {
  data: GiftCardData;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ data }) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Amount */}
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <DollarSign className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Amount</p>
            <p className="text-gray-900 font-medium">${data.amount}</p>
          </div>
        </div>

        {/* Recipient */}
        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
          <Mail className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Recipient</p>
            <p className="text-gray-900 font-medium">{data.recipientEmail}</p>
          </div>
        </div>

        {/* Message Preview */}
        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
          <div className="flex items-center space-x-2">
            <Check className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-gray-600">Message</p>
          </div>
          <p className="text-gray-900 whitespace-pre-wrap">{data.message}</p>
          <p className="text-gray-900 font-medium">- {data.senderName}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewStep;