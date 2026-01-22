import { Music2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border shadow-light sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left side - Developer name and project */}
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/20 shadow-bright">
              <Music2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                VibeTune Friend
              </h1>
              <p className="text-sm text-muted-foreground">
                by N V S Harshitha Chandran
              </p>
            </div>
          </div>

          {/* Right side - Contact button */}
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="bg-primary/10 hover:bg-primary/20 border-primary/30 text-primary shadow-light"
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
};