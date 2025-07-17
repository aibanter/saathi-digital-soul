
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart, Clock, Sparkles, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuildPersona = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">Saathi</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pt-8 pb-24">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Build Your
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block">
              Digital Persona
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to help us understand your personality, thoughts, and unique traits.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="bg-card border border-border rounded-2xl p-12 text-center space-y-8">
          <div className="relative">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-12 h-12 text-primary animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-6 h-6 text-primary animate-bounce" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We're crafting an intelligent form with conditional branching logic to capture your unique personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Smart Questions</h3>
              <p className="text-sm text-muted-foreground">
                Dynamic questions that adapt based on your previous answers
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI analysis to create your digital twin
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Personalized</h3>
              <p className="text-sm text-muted-foreground">
                Capture your unique personality and communication style
              </p>
            </div>
          </div>

          <div className="pt-6">
            <p className="text-sm text-muted-foreground">
              Get notified when we launch →
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuildPersona;
