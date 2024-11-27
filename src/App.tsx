import React, { useState } from 'react';
import { Wallet, CircleDot } from 'lucide-react';
import AmountSelector from './components/AmountSelector';
import GiftCard from './components/GiftCard';
import ArtGenerator from './components/ArtGenerator';
import PersonalizedNote from './components/PersonalizedNote';
import GiftNote from './components/GiftNote';
import ReviewStep from './components/ReviewStep';
import GiftView from './components/GiftView';
import WalletModal from './components/WalletModal';
import TransactionModal from './components/TransactionModal';
import { type CardBackground, type GiftCardData } from './types';

const steps = [
  { id: 'amount', label: 'Select amount' },
  { id: 'art', label: 'Create art' },
  { id: 'note', label: 'Write message' },
  { id: 'review', label: 'Review & send' }
];

function App() {
  const [currentStep, setCurrentStep] = useState<'amount' | 'art' | 'note' | 'review' | 'complete' | 'view'>('amount');
  const [amount, setAmount] = useState<string>('');
  const [background, setBackground] = useState<CardBackground>({ type: 'gradient' });
  const [senderName, setSenderName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  const handleNext = () => {
    if (currentStep === 'amount') setCurrentStep('art');
    else if (currentStep === 'art') setCurrentStep('note');
    else if (currentStep === 'note') setCurrentStep('review');
    else if (currentStep === 'review') setIsTransactionModalOpen(true);
  };

  const handleBack = () => {
    if (currentStep === 'art') setCurrentStep('amount');
    else if (currentStep === 'note') setCurrentStep('art');
    else if (currentStep === 'review') setCurrentStep('note');
  };

  const handleStepClick = (stepId: string) => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    const clickedIndex = steps.findIndex(step => step.id === stepId);
    
    if (clickedIndex < currentIndex) {
      setCurrentStep(stepId as typeof currentStep);
    }
  };

  const handleCreateAnother = () => {
    setAmount('');
    setBackground({ type: 'gradient' });
    setSenderName('');
    setRecipientEmail('');
    setMessage('');
    setCurrentStep('amount');
  };

  const handleConnectWallet = () => {
    setTimeout(() => {
      setIsWalletConnected(true);
      setIsWalletModalOpen(false);
    }, 1000);
  };

  const handleConfirmTransaction = () => {
    setTimeout(() => {
      setIsTransactionModalOpen(false);
      setCurrentStep('complete');
    }, 1000);
  };

  const isNextDisabled = () => {
    if (!isWalletConnected) return true;
    if (currentStep === 'amount') return !amount;
    if (currentStep === 'art') return background.type === 'gradient';
    if (currentStep === 'note') return !senderName || !recipientEmail || !message;
    return false;
  };

  const giftCardData: GiftCardData = {
    amount,
    background,
    senderName,
    recipientEmail,
    message
  };

  const getCurrentStepLabel = () => {
    if (currentStep === 'complete') return 'Gift Card Created';
    return steps.find(step => step.id === currentStep)?.label || '';
  };

  if (currentStep === 'view') {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="text-xl font-bold text-blue-600">Based.gift</div>
              {isWalletConnected ? (
                <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">
                  Connected
                </div>
              ) : (
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
                >
                  <Wallet className="h-5 w-5 mr-2" />
                  CONNECT WALLET
                </button>
              )}
            </div>
          </div>
        </nav>
        <GiftView data={giftCardData} onCreateAnother={handleCreateAnother} />
        <footer className="py-6 border-t">
          <div className="text-center text-sm text-gray-600">
            Powered by <span className="font-medium">Gifted.art</span>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-blue-600">Based.gift</div>
            {isWalletConnected ? (
              <div className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium">
                Connected
              </div>
            ) : (
              <button
                onClick={() => setIsWalletModalOpen(true)}
                className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                <Wallet className="h-5 w-5 mr-2" />
                CONNECT WALLET
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Input Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-gray-900">
                  {getCurrentStepLabel()}
                </h1>
                <p className="text-lg text-gray-600">
                  {!isWalletConnected 
                    ? 'Connect your wallet to start'
                    : currentStep === 'amount' 
                    ? 'Choose your gift amount'
                    : currentStep === 'art'
                    ? 'Design your gift card'
                    : currentStep === 'note'
                    ? 'Add your personal message'
                    : currentStep === 'review'
                    ? 'Review and confirm details'
                    : 'Your gift card is ready!'}
                </p>
              </div>

              {currentStep === 'amount' ? (
                <AmountSelector 
                  amount={amount} 
                  setAmount={setAmount}
                  isDisabled={!isWalletConnected}
                />
              ) : currentStep === 'art' ? (
                <ArtGenerator onSelectArt={setBackground} />
              ) : currentStep === 'note' ? (
                <PersonalizedNote
                  senderName={senderName}
                  setSenderName={setSenderName}
                  recipientEmail={recipientEmail}
                  setRecipientEmail={setRecipientEmail}
                  message={message}
                  setMessage={setMessage}
                />
              ) : currentStep === 'review' ? (
                <ReviewStep data={giftCardData} />
              ) : (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Congratulations! Your gift card has been created.
                  </p>
                  <p className="text-gray-600">
                    We've sent the gift card to {recipientEmail}.
                  </p>
                </div>
              )}
            </div>

            {/* Right Side - Gift Card Preview */}
            <div className="space-y-6 lg:sticky lg:top-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {steps.map((step, index) => {
                  const currentIndex = steps.findIndex(s => s.id === currentStep);
                  const isClickable = index < currentIndex;
                  
                  return (
                    <React.Fragment key={step.id}>
                      <div 
                        className={`flex flex-col items-center ${isClickable ? 'cursor-pointer' : ''}`}
                        onClick={() => isClickable && handleStepClick(step.id)}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.id === currentStep
                              ? 'bg-blue-600 text-white'
                              : currentIndex > index
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          <CircleDot className="h-5 w-5" />
                        </div>
                        <span className={`text-sm mt-2 text-center ${
                          step.id === currentStep
                            ? 'text-blue-600 font-medium'
                            : 'text-gray-500'
                        }`}>
                          {step.label}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 ${
                          currentIndex > index
                            ? 'bg-blue-600'
                            : 'bg-gray-200'
                        }`} />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className={currentStep === 'note' ? 'scale-90 origin-top' : ''}>
                <GiftCard amount={amount} background={background} />
              </div>
              
              {currentStep === 'note' && (
                <GiftNote senderName={senderName} message={message} />
              )}

              {currentStep !== 'complete' && (
                <div className="flex gap-4">
                  {currentStep !== 'amount' && (
                    <button
                      onClick={handleBack}
                      className="flex-1 py-4 px-6 rounded-lg border-2 border-gray-200 text-gray-700 font-medium hover:border-gray-300 transition-all duration-200"
                    >
                      BACK
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className={`flex-1 py-4 px-6 rounded-lg text-white font-medium transition-all duration-200 ${
                      !isNextDisabled()
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-300 cursor-not-allowed'
                    }`}
                    disabled={isNextDisabled()}
                  >
                    {currentStep === 'review' ? 'SEND GIFT CARD' : 'NEXT'}
                  </button>
                </div>
              )}
              
              {currentStep === 'complete' && (
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handleCreateAnother}
                    className="py-4 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200"
                  >
                    Create Another
                  </button>
                  <button
                    onClick={() => setCurrentStep('view')}
                    className="py-4 px-6 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
                  >
                    View Gift
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t">
        <div className="text-center text-sm text-gray-600">
          Powered by <span className="font-medium">Gifted.art</span>
        </div>
      </footer>

      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={handleConnectWallet}
      />

      <TransactionModal
        isOpen={isTransactionModalOpen}
        onClose={() => setIsTransactionModalOpen(false)}
        amount={amount}
        recipientEmail={recipientEmail}
        onConfirm={handleConfirmTransaction}
      />
    </div>
  );
}

export default App;