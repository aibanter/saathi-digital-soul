
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BuildPersona = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
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

        {/* Form will be added here */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20">
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Persona building form coming soon...
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This will include the conditional form engine with smart branching logic.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuildPersona;
