import { CheckCircle, Clock, Globe, Zap, BarChart3, Users } from 'lucide-react';

const benefits = [
  {
    icon: CheckCircle,
    title: 'Professional Business Account',
    description: 'Verified WhatsApp Business account with green checkmark for trust and credibility.'
  },
  {
    icon: Clock,
    title: 'Template Message Support',
    description: 'Pre-approved message templates for consistent, compliant business communications.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with customers in 70+ countries where WhatsApp is widely adopted.'
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Messages delivered instantly with real-time read receipts and delivery confirmation.'
  },
  {
    icon: BarChart3,
    title: 'Message Analytics',
    description: 'Track message delivery, read rates, and engagement to optimize your communications.'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Organize conversations, categorize contacts, and manage customer relationships effectively.'
  }
];

const CoreBenefits = () => {
  return (
    <section id="benefits" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Choose GOMEWA for
            <span className="text-primary"> WhatsApp Business?</span>
          </h2>
          <p className="text-xl text-text-soft max-w-3xl mx-auto">
            Get everything you need to start professional WhatsApp messaging 
            with your customers today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-whatsapp-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-text-soft text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-marketing rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Customer Communication?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses using WhatsApp to deliver exceptional customer experiences 
              and drive meaningful engagement.
            </p>
            <button className="bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors hover-lift shadow-lg">
              Get Started with WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBenefits;