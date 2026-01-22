import { Heart, Code, Music2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/60 backdrop-blur-sm border-t border-border shadow-light">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          {/* Main content */}
          <div className="flex items-center justify-center gap-2 text-lg">
            <span className="text-muted-foreground">Developed with</span>
            <Heart className="h-5 w-5 text-accent animate-pulse" />
            <span className="text-muted-foreground">by</span>
          </div>
          
          {/* Developer info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              N V S Harshitha Chandran
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>📱</span>
                <span>+91 93907 56672</span>
              </div>
              <div className="flex items-center gap-1">
                <span>✉️</span>
                <span>nayaniharshitha2@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Project info */}
          <div className="flex items-center justify-center gap-2 pt-4 border-t border-border/50">
            <div className="p-2 rounded-full bg-primary/20 shadow-light">
              <Music2 className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">
              VibeTune Friend - Your personal music mood companion
            </span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground/70 pt-2">
            © 2024 VibeTune Friend. Built with passion for music lovers everywhere.
          </div>
        </div>
      </div>
    </footer>
  );
};