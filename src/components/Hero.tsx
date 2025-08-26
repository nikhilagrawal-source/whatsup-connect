import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import whatsappMockup from '@/assets/whatsapp-phone-mockup.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-whatsapp-green rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-whatsapp-light rounded-full text-primary font-medium text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Business Platform
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transform Customer 
                <span className="text-primary"> Communication</span> with WhatsApp
              </h1>
              
              <p className="text-xl text-text-soft leading-relaxed">
                Reach 2+ billion users with professional WhatsApp Business messaging. 
                Achieve 98% open rates and build stronger customer relationships.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Start Messaging
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-secondary">
                See How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-soft">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2B+</div>
                <div className="text-sm text-text-muted">Users Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-text-muted">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5x</div>
                <div className="text-sm text-text-muted">Better Than Email</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <img 
                src={whatsappMockup} 
                alt="WhatsApp Business Platform Interface"
                className="w-80 h-auto drop-shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-whatsapp animate-pulse">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;