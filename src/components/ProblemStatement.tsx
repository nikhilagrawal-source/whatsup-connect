import { MessageSquare, TrendingUp, Users } from 'lucide-react';

const ProblemStatement = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Customers Are Already on WhatsApp
            </h2>
            <p className="text-xl text-text-soft">
              Don't miss out on the world's most popular messaging platform. 
              Connect with customers where they spend their time.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card text-center space-y-4">
              <div className="w-16 h-16 bg-whatsapp-light rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">2+ Billion Users</h3>
              <p className="text-text-soft">
                WhatsApp connects billions of people worldwide, making it the perfect channel for business communication.
              </p>
            </div>

            <div className="feature-card text-center space-y-4">
              <div className="w-16 h-16 bg-whatsapp-light rounded-2xl flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">98% Open Rate</h3>
              <p className="text-text-soft">
                Messages are read within seconds, ensuring your important communications reach customers instantly.
              </p>
            </div>

            <div className="feature-card text-center space-y-4">
              <div className="w-16 h-16 bg-whatsapp-light rounded-2xl flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Direct Communication</h3>
              <p className="text-text-soft">
                Build personal relationships with customers through direct, conversational messaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;