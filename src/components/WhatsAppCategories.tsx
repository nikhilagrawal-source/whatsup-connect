import { Shield, Wrench, Megaphone, MessageCircle } from 'lucide-react';

const categories = [
  {
    icon: Wrench,
    title: 'Utility Messages',
    gradient: 'bg-gradient-utility',
    description: 'Business-initiated transactional messages',
    examples: [
      'Order confirmations & shipping updates',
      'Appointment reminders',
      'Payment confirmations',
      'Account notifications'
    ],
    sampleMessage: 'Order #1234 confirmed and will be delivered by 3PM tomorrow 📦'
  },
  {
    icon: Shield,
    title: 'Authentication Messages',
    gradient: 'bg-gradient-auth',
    description: 'Secure verification and authentication',
    examples: [
      'OTP codes & two-factor authentication',
      'Account verification',
      'Password resets',
      'Login confirmations'
    ],
    sampleMessage: 'Your login verification code is 123456. Valid for 5 minutes. 🔐'
  },
  {
    icon: Megaphone,
    title: 'Marketing Messages',
    gradient: 'bg-gradient-marketing',
    description: 'Promotional and marketing communications',
    examples: [
      'Product launches & promotions',
      'Seasonal campaigns',
      'Back-in-stock alerts',
      'Special offers'
    ],
    sampleMessage: '🎉 Flash Sale! Get 30% off all electronics. Shop now with code FLASH30'
  },
  {
    icon: MessageCircle,
    title: 'Service Messages',
    gradient: 'bg-gradient-service',
    description: 'Customer-initiated support conversations',
    examples: [
      'Customer support inquiries',
      'Product questions',
      'Order tracking requests',
      'General assistance'
    ],
    sampleMessage: 'Customer: "What\'s the status of my order?" → Instant tracking response'
  }
];

const WhatsAppCategories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            WhatsApp Business Platform
            <span className="text-primary"> Message Types</span>
          </h2>
          <p className="text-xl text-text-soft max-w-3xl mx-auto">
            Choose from four powerful messaging categories to connect with your customers 
            at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="category-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Header */}
                <div className={`w-16 h-16 rounded-2xl ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  
                  <p className="text-text-soft text-sm">
                    {category.description}
                  </p>

                  {/* Examples */}
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-text-muted flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {example}
                      </li>
                    ))}
                  </ul>

                  {/* Sample Message */}
                  <div className="bg-surface-soft border border-border-soft rounded-lg p-3 mt-4">
                    <p className="text-xs text-text-muted mb-1">Sample Message:</p>
                    <p className="text-sm text-foreground italic">
                      "{category.sampleMessage}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCategories;