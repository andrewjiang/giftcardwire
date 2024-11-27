import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { type CardBackground } from '../types';

interface ArtGeneratorProps {
  onSelectArt: (background: CardBackground) => void;
}

const ArtGenerator: React.FC<ArtGeneratorProps> = ({ onSelectArt }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const presetPrompts = [
    {
      label: 'Happy birthday unicorn',
      imageUrl: 'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?auto=format&fit=crop&q=80&w=1600'
    },
    {
      label: 'Puppy playing with a ball',
      imageUrl: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80&w=1600'
    },
    {
      label: 'Penguin graduating',
      imageUrl: 'https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&q=80&w=1600'
    },
    {
      label: 'Space exploration',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'
    }
  ];

  const handleSelectPreset = (imageUrl: string) => {
    onSelectArt({ type: 'image', url: imageUrl });
  };

  const handleCustomPrompt = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate AI generation with a preset image after a delay
    setTimeout(() => {
      onSelectArt({ 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&q=80&w=1600'
      });
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Custom prompt input */}
      <form onSubmit={handleCustomPrompt} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your gift card art..."
            className="block w-full pr-12 py-4 pl-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button
            type="submit"
            disabled={!prompt || isGenerating}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-700 disabled:text-gray-400"
          >
            <Sparkles className="h-5 w-5" />
          </button>
        </div>
        {isGenerating && (
          <p className="text-sm text-blue-600 animate-pulse">
            ✨ Generating your custom art...
          </p>
        )}
      </form>

      {/* Preset options */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-700">Quick selections</h3>
        <div className="grid grid-cols-2 gap-4">
          {presetPrompts.map((preset) => (
            <button
              key={preset.label}
              onClick={() => handleSelectPreset(preset.imageUrl)}
              className="p-4 text-left border-2 border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              <span className="text-sm text-gray-900">{preset.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtGenerator;