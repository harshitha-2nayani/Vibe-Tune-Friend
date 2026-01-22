import { Card } from "@/components/ui/card";
import { Music } from "lucide-react";
import { AudioPlayer } from "./AudioPlayer";
import { cn } from "@/lib/utils";

interface SongCardProps {
  title: string;
  artist: string;
  description: string;
  audioUrl?: string;
  duration?: string;
  isSurprise?: boolean;
}

export const SongCard = ({ title, artist, description, audioUrl, duration, isSurprise = false }: SongCardProps) => {
  return (
    <Card className={cn(
      "p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-bright bg-card/80 backdrop-blur-sm border-border/50 shadow-light",
      isSurprise ? "bg-gradient-to-br from-accent/20 to-primary/20 border-accent/30 shadow-bright" : ""
    )}>
      <div className="flex items-start gap-4">
        <div className={cn(
          "p-3 rounded-full transition-colors",
          isSurprise ? "bg-accent/20" : "bg-primary/20"
        )}>
          <Music className={cn(
            "h-5 w-5",
            isSurprise ? "text-accent" : "text-primary"
          )} />
        </div>
        <div className="flex-1 space-y-3">
          {isSurprise && (
            <span className="text-sm font-medium text-accent">✨ Surprise Pick</span>
          )}
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{artist}</p>
            {duration && (
              <p className="text-xs text-muted-foreground/70">{duration}</p>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          {audioUrl && duration && (
            <div className="pt-2">
              <AudioPlayer
                audioUrl={audioUrl}
                title={title}
                artist={artist}
                duration={duration}
              />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};