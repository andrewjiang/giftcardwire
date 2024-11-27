import React from 'react';
import { Gift } from 'lucide-react';

interface GiftNoteProps {
  senderName: string;
  message: string;
}

const GiftNote: React.FC<GiftNoteProps> = ({ senderName, message }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-100">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Gift className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-medium text-gray-900">Gift Note</h3>
        </div>
        
        <div className="space-y-3 min-h-[120px]">
          <p className="text-gray-700 whitespace-pre-wrap">
            {message || "Your message will appear here..."}
          </p>
          
          {senderName && (
            <p className="text-gray-900 font-medium">
              - {senderName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default GiftNote;