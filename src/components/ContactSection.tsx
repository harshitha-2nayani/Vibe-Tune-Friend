import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact-section" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have questions about the project or want to collaborate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Phone */}
          <Card className="p-6 text-center hover:shadow-bright transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <div className="p-3 rounded-full bg-primary/20 w-fit mx-auto mb-4 shadow-light">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Phone</h3>
            <p className="text-muted-foreground mb-4">+91 93907 56672</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('tel:+919390756672')}
              className="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary shadow-light"
            >
              Call Now
            </Button>
          </Card>

          {/* Email */}
          <Card className="p-6 text-center hover:shadow-bright transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <div className="p-3 rounded-full bg-accent/20 w-fit mx-auto mb-4 shadow-light">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Email</h3>
            <p className="text-muted-foreground mb-4 text-sm">nayaniharshitha2@gmail.com</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('mailto:nayaniharshitha2@gmail.com')}
              className="bg-accent/10 hover:bg-accent/20 border-accent/30 text-accent shadow-light"
            >
              Send Email
            </Button>
          </Card>

          {/* Message */}
          <Card className="p-6 text-center hover:shadow-bright transition-all duration-300 bg-card/50 backdrop-blur-sm">
            <div className="p-3 rounded-full bg-secondary/30 w-fit mx-auto mb-4 shadow-light">
              <MessageCircle className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="font-semibold mb-2 text-card-foreground">Let's Connect</h3>
            <p className="text-muted-foreground mb-4">Available for new opportunities</p>
            <Button
              variant="outline"
              size="sm"
              className="bg-secondary/20 hover:bg-secondary/30 border-secondary/40 text-secondary-foreground shadow-light"
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};