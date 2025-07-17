
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">Saathi</span>
        </div>
        
        <Button 
          onClick={() => navigate('/build-persona')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
        >
          Build Your Persona
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center space-y-8">
          {/* Hero Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent/50 rounded-full px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Create Your Digital Soul</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Your Personal
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent block">
                Digital Companion
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build a deeply personalized digital persona that understands you, 
              shares your thoughts, and connects with others authentically.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-8">
            <Button 
              size="lg"
              onClick={() => navigate('/build-persona')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Building Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 text-primary hover:bg-accent/50 font-medium px-8 py-4 text-lg rounded-xl"
            >
              <Users className="mr-2 w-5 h-5" />
              Explore Personas
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-24">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Intelligent Persona</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced AI creates a digital version of you that thinks, responds, and behaves authentically.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Share & Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generate shareable links so others can chat with your persona and discover who you really are.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Deeply Personal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built from your unique traits, thoughts, and personality to create meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">Saathi</span>
          </div>
          <p className="text-muted-foreground">
            Creating authentic digital connections, one persona at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
