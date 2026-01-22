import { cn } from "@/lib/utils";

interface MoodCardProps {
  mood: string;
  gradient: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

export const MoodCard = ({ mood, gradient, icon, isSelected, onClick }: MoodCardProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-bright shadow-light",
        gradient,
        isSelected ? "ring-2 ring-primary shadow-bright scale-105" : ""
      )}
    >
      <div className="relative z-10">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="text-xl font-semibold text-white capitalize">{mood}</h3>
      </div>
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};