import { cn } from "@/lib/utils";

interface LanguageCardProps {
  language: string;
  flag: string;
  isSelected: boolean;
  onClick: () => void;
}

export const LanguageCard = ({ language, flag, isSelected, onClick }: LanguageCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-bright bg-card/80 backdrop-blur-sm border shadow-light",
        isSelected ? "ring-2 ring-primary shadow-bright scale-105 border-primary" : "border-border/50"
      )}
    >
      <div className="text-center">
        <div className="text-3xl mb-2">{flag}</div>
        <h3 className="text-lg font-semibold text-foreground capitalize">{language}</h3>
      </div>
    </div>
  );
};