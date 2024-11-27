import React from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';

interface PersonalizedNoteProps {
  senderName: string;
  setSenderName: (name: string) => void;
  recipientEmail: string;
  setRecipientEmail: (email: string) => void;
  message: string;
  setMessage: (message: string) => void;
}

const PersonalizedNote: React.FC<PersonalizedNoteProps> = ({
  senderName,
  setSenderName,
  recipientEmail,
  setRecipientEmail,
  message,
  setMessage,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Sender Name Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your name"
            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Recipient Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="Recipient's email"
            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <div className="absolute left-4 top-4 pointer-events-none">
            <MessageSquare className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your personal message..."
            rows={4}
            className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalizedNote;