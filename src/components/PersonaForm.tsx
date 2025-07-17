
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface FormData {
  [key: string]: any;
}

interface Question {
  id: string;
  type: 'radio' | 'select' | 'textarea' | 'checkbox' | 'input';
  question: string;
  description?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
  nextQuestion?: (value: string) => string | null;
}

const questions: Question[] = [
  {
    id: 'personality_type',
    type: 'radio',
    question: 'How would you describe your personality in social situations?',
    description: 'This helps us understand your social preferences',
    options: [
      { value: 'extrovert', label: 'I love being around people and gain energy from social interactions' },
      { value: 'introvert', label: 'I prefer quieter settings and need alone time to recharge' },
      { value: 'ambivert', label: 'I enjoy both social interactions and solitude, depending on my mood' }
    ],
    required: true,
    nextQuestion: (value) => {
      if (value === 'extrovert') return 'communication_style';
      if (value === 'introvert') return 'deep_thinking';
      return 'adaptability';
    }
  },
  {
    id: 'communication_style',
    type: 'radio',
    question: 'How do you prefer to communicate?',
    description: 'Understanding your communication style helps create authentic interactions',
    options: [
      { value: 'direct', label: 'Direct and straightforward - I say what I mean' },
      { value: 'diplomatic', label: 'Diplomatic and tactful - I consider others\' feelings' },
      { value: 'humorous', label: 'Light-hearted and humorous - I like to keep things fun' },
      { value: 'analytical', label: 'Analytical and detailed - I prefer thorough explanations' }
    ],
    required: true,
    nextQuestion: (value) => {
      if (value === 'analytical') return 'decision_making';
      return 'values_priorities';
    }
  },
  {
    id: 'deep_thinking',
    type: 'radio',
    question: 'What best describes your thinking process?',
    description: 'This helps us understand how you process information',
    options: [
      { value: 'philosophical', label: 'I enjoy deep, philosophical conversations' },
      { value: 'practical', label: 'I focus on practical, real-world applications' },
      { value: 'creative', label: 'I think creatively and enjoy exploring new ideas' },
      { value: 'systematic', label: 'I prefer systematic, logical thinking' }
    ],
    required: true,
    nextQuestion: () => 'decision_making'
  },
  {
    id: 'adaptability',
    type: 'radio',
    question: 'How do you handle change and new situations?',
    description: 'Understanding your adaptability helps us create appropriate responses',
    options: [
      { value: 'embrace', label: 'I embrace change and see it as an opportunity' },
      { value: 'cautious', label: 'I approach change cautiously but adapt when needed' },
      { value: 'resistant', label: 'I prefer stability and find change challenging' },
      { value: 'selective', label: 'I welcome some changes but resist others' }
    ],
    required: true,
    nextQuestion: () => 'communication_style'
  },
  {
    id: 'decision_making',
    type: 'radio',
    question: 'How do you typically make important decisions?',
    description: 'This reveals your decision-making patterns',
    options: [
      { value: 'intuitive', label: 'I trust my gut instincts and intuition' },
      { value: 'analytical', label: 'I analyze all available data and options' },
      { value: 'collaborative', label: 'I seek input from others before deciding' },
      { value: 'quick', label: 'I make decisions quickly and move forward' }
    ],
    required: true,
    nextQuestion: (value) => {
      if (value === 'analytical') return 'problem_solving';
      return 'values_priorities';
    }
  },
  {
    id: 'problem_solving',
    type: 'radio',
    question: 'When faced with a complex problem, what\'s your approach?',
    description: 'Understanding your problem-solving style',
    options: [
      { value: 'methodical', label: 'Break it down into smaller, manageable parts' },
      { value: 'creative', label: 'Think outside the box and explore unconventional solutions' },
      { value: 'research', label: 'Research extensively and gather expert opinions' },
      { value: 'collaborative', label: 'Brainstorm with others and leverage collective intelligence' }
    ],
    required: true,
    nextQuestion: () => 'stress_management'
  },
  {
    id: 'values_priorities',
    type: 'checkbox',
    question: 'What values are most important to you? (Select all that apply)',
    description: 'Your core values shape how you interact with the world',
    options: [
      { value: 'honesty', label: 'Honesty and transparency' },
      { value: 'creativity', label: 'Creativity and innovation' },
      { value: 'stability', label: 'Security and stability' },
      { value: 'growth', label: 'Personal growth and learning' },
      { value: 'relationships', label: 'Strong relationships and connections' },
      { value: 'achievement', label: 'Success and achievement' },
      { value: 'freedom', label: 'Independence and freedom' },
      { value: 'service', label: 'Helping others and making a difference' }
    ],
    required: true,
    nextQuestion: () => 'motivations'
  },
  {
    id: 'stress_management',
    type: 'radio',
    question: 'How do you handle stress and pressure?',
    description: 'This helps us understand your coping mechanisms',
    options: [
      { value: 'calm', label: 'I stay calm and think through solutions methodically' },
      { value: 'active', label: 'I channel stress into productive action' },
      { value: 'support', label: 'I seek support and advice from others' },
      { value: 'withdraw', label: 'I take time alone to process and recharge' }
    ],
    required: true,
    nextQuestion: () => 'motivations'
  },
  {
    id: 'motivations',
    type: 'radio',
    question: 'What motivates you most in life?',
    description: 'Understanding your core motivations',
    options: [
      { value: 'purpose', label: 'Having a sense of purpose and meaning' },
      { value: 'achievement', label: 'Achieving goals and recognition' },
      { value: 'connection', label: 'Building meaningful relationships' },
      { value: 'growth', label: 'Continuous learning and self-improvement' },
      { value: 'impact', label: 'Making a positive impact on others' },
      { value: 'autonomy', label: 'Having control over my own decisions' }
    ],
    required: true,
    nextQuestion: () => 'learning_style'
  },
  {
    id: 'learning_style',
    type: 'radio',
    question: 'How do you prefer to learn new things?',
    description: 'This influences how information should be presented to you',
    options: [
      { value: 'visual', label: 'Through visual examples, diagrams, and demonstrations' },
      { value: 'hands_on', label: 'By doing and practicing hands-on' },
      { value: 'discussion', label: 'Through discussion and asking questions' },
      { value: 'reading', label: 'By reading and studying detailed information' }
    ],
    required: true,
    nextQuestion: () => 'interests_hobbies'
  },
  {
    id: 'interests_hobbies',
    type: 'textarea',
    question: 'Tell us about your interests, hobbies, and passions',
    description: 'Share what you love to do in your free time (3-5 sentences)',
    required: true,
    nextQuestion: () => 'background_context'
  },
  {
    id: 'background_context',
    type: 'select',
    question: 'What best describes your professional/life stage?',
    description: 'This helps us understand your current context',
    options: [
      { value: 'student', label: 'Student (High School/College)' },
      { value: 'early_career', label: 'Early Career Professional' },
      { value: 'mid_career', label: 'Mid-Career Professional' },
      { value: 'senior_professional', label: 'Senior Professional/Executive' },
      { value: 'entrepreneur', label: 'Entrepreneur/Business Owner' },
      { value: 'retired', label: 'Retired' },
      { value: 'parent', label: 'Stay-at-home Parent' },
      { value: 'career_change', label: 'Career Transition/Change' },
      { value: 'other', label: 'Other' }
    ],
    required: true,
    nextQuestion: () => 'communication_preferences'
  },
  {
    id: 'communication_preferences',
    type: 'radio',
    question: 'In conversations, do you prefer to:',
    description: 'This shapes how your persona will engage with others',
    options: [
      { value: 'listen_first', label: 'Listen first and ask thoughtful questions' },
      { value: 'share_experiences', label: 'Share personal experiences and stories' },
      { value: 'offer_advice', label: 'Offer practical advice and solutions' },
      { value: 'explore_ideas', label: 'Explore ideas and theoretical concepts' }
    ],
    required: true,
    nextQuestion: () => 'contact_info'
  },
  {
    id: 'contact_info',
    type: 'input',
    question: 'Contact Information (Optional)',
    description: 'Provide your email and/or phone for future engagement opportunities',
    required: false,
    nextQuestion: () => null
  }
];

export function PersonaForm() {
  const [currentQuestionId, setCurrentQuestionId] = useState('personality_type');
  const [formData, setFormData] = useState<FormData>({});
  const [questionHistory, setQuestionHistory] = useState<string[]>(['personality_type']);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions.find(q => q.id === currentQuestionId);
  const progress = ((questionHistory.length - 1) / questions.length) * 100;

  const handleAnswer = (value: any) => {
    const newFormData = { ...formData, [currentQuestionId]: value };
    setFormData(newFormData);

    if (currentQuestion?.nextQuestion) {
      const nextId = currentQuestion.nextQuestion(value);
      if (nextId) {
        setCurrentQuestionId(nextId);
        setQuestionHistory([...questionHistory, nextId]);
      } else {
        setIsComplete(true);
      }
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (questionHistory.length > 1) {
      const newHistory = questionHistory.slice(0, -1);
      setQuestionHistory(newHistory);
      setCurrentQuestionId(newHistory[newHistory.length - 1]);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
    alert('Persona created successfully! Your shareable link will be generated shortly.');
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground">Persona Created Successfully!</h2>
        <p className="text-lg text-muted-foreground">
          Your digital persona has been created based on your responses. 
          We're generating your shareable link now.
        </p>
        
        {formData.contact_info && (
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              We'll send your shareable link to: <strong>{formData.contact_info}</strong>
            </p>
          </div>
        )}
        
        <Button onClick={handleSubmit} size="lg" className="bg-primary hover:bg-primary/90">
          Generate Shareable Link
        </Button>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Question {questionHistory.length} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            {currentQuestion.question}
          </h2>
          {currentQuestion.description && (
            <p className="text-muted-foreground">
              {currentQuestion.description}
            </p>
          )}
        </div>

        {/* Answer Input */}
        <div className="space-y-4">
          {currentQuestion.type === 'radio' && currentQuestion.options && (
            <RadioGroup 
              value={formData[currentQuestionId] || ''} 
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer leading-relaxed">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === 'checkbox' && currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:bg-muted/50">
                  <Checkbox 
                    id={option.value}
                    checked={(formData[currentQuestionId] || []).includes(option.value)}
                    onCheckedChange={(checked) => {
                      const currentValues = formData[currentQuestionId] || [];
                      if (checked) {
                        handleAnswer([...currentValues, option.value]);
                      } else {
                        handleAnswer(currentValues.filter((v: string) => v !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
              {(formData[currentQuestionId] || []).length > 0 && (
                <Button 
                  onClick={() => handleAnswer(formData[currentQuestionId])}
                  className="w-full"
                >
                  Continue
                </Button>
              )}
            </div>
          )}

          {currentQuestion.type === 'select' && currentQuestion.options && (
            <div className="space-y-4">
              <Select 
                value={formData[currentQuestionId] || ''} 
                onValueChange={handleAnswer}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {currentQuestion.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {currentQuestion.type === 'textarea' && (
            <div className="space-y-4">
              <Textarea
                value={formData[currentQuestionId] || ''}
                onChange={(e) => setFormData({ ...formData, [currentQuestionId]: e.target.value })}
                placeholder="Share your thoughts here..."
                className="min-h-[120px]"
              />
              <Button 
                onClick={() => handleAnswer(formData[currentQuestionId])}
                disabled={!formData[currentQuestionId]?.trim()}
                className="w-full"
              >
                Continue
              </Button>
            </div>
          )}

          {currentQuestion.type === 'input' && (
            <div className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <Button 
                onClick={() => handleAnswer({ email: formData.email, phone: formData.phone })}
                className="w-full"
              >
                Complete Persona
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={questionHistory.length <= 1}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Question {questionHistory.length} of {questions.length}</span>
        </div>
      </div>
    </div>
  );
}
