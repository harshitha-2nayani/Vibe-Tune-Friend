import { useState } from "react";
import { MoodCard } from "./MoodCard";
import { LanguageCard } from "./LanguageCard";
import { SongCard } from "./SongCard";
import { Header } from "./Header";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { musicRecommendations } from "@/data/musicRecommendations";
import { Button } from "@/components/ui/button";
import { Heart, Music2, RotateCcw, Shuffle, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const moods = [
  { name: "happy", gradient: "bg-gradient-happy", icon: "😊" },
  { name: "sad", gradient: "bg-gradient-sad", icon: "😢" },
  { name: "relaxed", gradient: "bg-gradient-relaxed", icon: "😌" },
  { name: "romantic", gradient: "bg-gradient-romantic", icon: "💕" },
  { name: "energetic", gradient: "bg-gradient-energetic", icon: "⚡" },
];

const languages = [
  { name: "hindi", flag: "🇮🇳" },
  { name: "english", flag: "🇺🇸" },
  { name: "tamil", flag: "🏛️" },
  { name: "kannada", flag: "🎭" },
];

export const VibeTuneFriend = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleMoodSelect = (mood: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedMood(mood);
    setIsAnimating(false);
  };

  const handleLanguageSelect = (language: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedLanguage(language);
    setTimeout(() => {
      setShowRecommendations(true);
      setIsAnimating(false);
    }, 500);
  };

  const resetSelection = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowRecommendations(false);
    setTimeout(() => {
      setSelectedMood(null);
      setSelectedLanguage(null);
      setIsAnimating(false);
    }, 300);
  };

  const shuffleRecommendations = () => {
    if (!selectedMood) return;
    setIsAnimating(true);
    setShowRecommendations(false);
    setTimeout(() => {
      setShowRecommendations(true);
      setIsAnimating(false);
      toast({
        title: "Fresh recommendations!",
        description: "Here's a new mix for your mood ✨",
      });
    }, 300);
  };

  const shareRecommendations = async () => {
    if (!selectedMood) return;
    
    const text = `I'm feeling ${selectedMood} and VibeTune Friend recommended some perfect songs! Check it out: ${window.location.href}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'VibeTune Friend',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Link copied!",
        description: "Share your mood and recommendations with friends",
      });
    }
  };

  const selectedMoodData = selectedMood && selectedLanguage ? musicRecommendations[selectedMood][selectedLanguage] : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/20 animate-pulse">
              <Music2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              VibeTune Friend
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {!selectedMood 
              ? "Hey there! How are you feeling right now? I'll find the perfect songs to match your vibe and maybe surprise you with something special." 
              : "Perfect choice! Here are some songs that capture exactly what you're feeling right now."
            }
          </p>
        </div>

        {/* Mood Selection */}
        {!selectedMood && !isAnimating && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12 animate-in fade-in duration-500 px-2">
            {moods.map((mood, index) => (
              <div
                key={mood.name}
                className="animate-in slide-in-from-bottom duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MoodCard
                  mood={mood.name}
                  gradient={mood.gradient}
                  icon={mood.icon}
                  isSelected={false}
                  onClick={() => handleMoodSelect(mood.name)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Language Selection */}
        {selectedMood && !selectedLanguage && !isAnimating && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-2xl">
                  {moods.find(m => m.name === selectedMood)?.icon}
                </span>
                <span className="text-lg font-medium text-primary capitalize">
                  Feeling {selectedMood}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">Choose Your Language</h2>
              <p className="text-muted-foreground mb-8">What language would you like your songs in?</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="animate-in slide-in-from-bottom duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <LanguageCard
                    language={language.name}
                    flag={language.flag}
                    isSelected={false}
                    onClick={() => handleLanguageSelect(language.name)}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                onClick={resetSelection}
                variant="outline"
                className="bg-card/80 backdrop-blur-sm hover:bg-card"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Choose Different Mood
              </Button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {isAnimating && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-16 w-16 border-2 border-primary border-t-transparent mx-auto"></div>
              <p className="text-muted-foreground">Finding your perfect songs...</p>
            </div>
          </div>
        )}

        {/* Recommendations */}
        {selectedMood && selectedLanguage && showRecommendations && selectedMoodData && !isAnimating && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Controls */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={resetSelection}
                variant="outline"
                className="bg-card/80 backdrop-blur-sm hover:bg-card"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Choose Different Mood
              </Button>
              <Button
                onClick={shuffleRecommendations}
                variant="outline"
                className="bg-card/80 backdrop-blur-sm hover:bg-card"
              >
                <Shuffle className="h-4 w-4 mr-2" />
                New Mix
              </Button>
              <Button
                onClick={shareRecommendations}
                variant="outline"
                className="bg-card/80 backdrop-blur-sm hover:bg-card"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Current Mood */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 animate-pulse">
                <span className="text-2xl">
                  {moods.find(m => m.name === selectedMood)?.icon}
                </span>
                <span className="text-lg font-medium text-primary capitalize">
                  Feeling {selectedMood}
                </span>
              </div>
            </div>

            {/* Song Recommendations */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                Perfect for Your Mood
              </h2>
               <div className="grid gap-4 md:grid-cols-2">
                 {selectedMoodData?.songs?.map((song, index) => (
                  <div
                    key={index}
                    className="animate-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                     <SongCard
                       title={song.title}
                       artist={song.artist}
                       description={song.description}
                       audioUrl={song.audioUrl}
                       duration={song.duration}
                     />
                  </div>
                ))}
              </div>
            </div>

            {/* Surprise Track */}
            <div>
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-2xl">✨</span>
                Your Surprise Track
              </h2>
               <div className="animate-in slide-in-from-bottom duration-700">
                 <SongCard
                   title={selectedMoodData?.surpriseTrack?.title || ""}
                   artist={selectedMoodData?.surpriseTrack?.artist || ""}
                   description={selectedMoodData?.surpriseTrack?.description || ""}
                   audioUrl={selectedMoodData?.surpriseTrack?.audioUrl}
                   duration={selectedMoodData?.surpriseTrack?.duration}
                   isSurprise={true}
                 />
               </div>
            </div>
          </div>
        )}

      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};