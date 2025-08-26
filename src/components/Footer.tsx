import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border-soft">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-foreground">GOMEWA</span>
            </div>
            <p className="text-text-soft text-sm">
              Gateway for Omnichannel Marketing & Engagement with WhatsApp. 
              Connect with your customers professionally.
            </p>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-soft">WhatsApp Business Platform Partner</span>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2 text-sm text-text-soft">
              <li>Utility Messages</li>
              <li>Authentication Messages</li>
              <li>Marketing Messages</li>
              <li>Service Messages</li>
              <li>Template Management</li>
              <li>Message Analytics</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-text-soft">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Support Center</li>
              <li>API Documentation</li>
              <li>Status Page</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm text-text-soft">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@gomewa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-soft mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-text-muted">
            © 2024 GOMEWA. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-text-muted">
            <span>WhatsApp Business Platform</span>
            <span>•</span>
            <span>Powered by Meta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;