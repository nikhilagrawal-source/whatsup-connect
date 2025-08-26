import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const features = [
  'Professional WhatsApp Business account setup',
  'Template message creation and approval',
  'Message broadcasting capabilities',
  '24/7 customer support',
  'Delivery tracking and analytics',
  'No setup fees or hidden costs'
];

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-background rounded-3xl shadow-2xl p-8 md:p-12 text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-whatsapp-light rounded-full text-primary font-medium text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Your WhatsApp Journey Today
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Connect with
                <span className="text-primary"> 2+ Billion Users?</span>
              </h2>
              
              <p className="text-xl text-text-soft max-w-2xl mx-auto">
                Transform your customer communication with professional WhatsApp Business messaging. 
                Get started in minutes and see results immediately.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-text-soft">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button className="btn-hero text-lg px-10 py-4 group">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-border-soft pt-8">
              <p className="text-sm text-text-muted mb-4">Trusted by 1000+ businesses worldwide</p>
              <div className="flex items-center justify-center space-x-8 text-text-muted">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">Instant Setup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;