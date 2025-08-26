import { Star, MessageCircle, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: '2B+',
    label: 'WhatsApp Users Worldwide',
    description: 'Largest messaging platform globally'
  },
  {
    icon: MessageCircle,
    number: '98%',
    label: 'Message Open Rate',
    description: 'Messages read within 3 seconds'
  },
  {
    icon: TrendingUp,
    number: '5x',
    label: 'Higher Engagement',
    description: 'Compared to traditional email'
  },
  {
    icon: Star,
    number: '70+',
    label: 'Countries Supported',
    description: 'Global reach and coverage'
  }
];

const testimonials = [
  {
    quote: "WhatsApp Business messaging transformed how we connect with customers. Our response rates increased by 400%.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions"
  },
  {
    quote: "The instant delivery and high open rates make WhatsApp our most effective customer communication channel.",
    author: "Michael Rodriguez",
    role: "Customer Success Manager", 
    company: "CloudBase Inc"
  },
  {
    quote: "Professional, reliable, and incredibly effective. Our customers love receiving updates via WhatsApp.",
    author: "Emily Johnson",
    role: "Operations Manager",
    company: "RetailPlus"
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Businesses
            <span className="text-primary"> Worldwide</span>
          </h2>
          <p className="text-xl text-text-soft max-w-3xl mx-auto">
            Join the millions of businesses already using WhatsApp to deliver 
            exceptional customer experiences.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-whatsapp-light rounded-2xl flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-muted">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="feature-card space-y-4"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-text-soft italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border-soft pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;