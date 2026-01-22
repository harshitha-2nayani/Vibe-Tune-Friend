export interface Song {
  title: string;
  artist: string;
  description: string;
  audioUrl: string;
  duration: string;
}

export interface LanguageData {
  songs: Song[];
  surpriseTrack: Song;
}

export interface MoodData {
  hindi: LanguageData;
  english: LanguageData;
  tamil: LanguageData;
  kannada: LanguageData;
}

export const musicRecommendations: Record<string, MoodData> = {
  happy: {
    hindi: {
      songs: [
        {
          title: "Gallan Goodiyaan",
          artist: "Yashraj Mukhate",
          description: "Pure Bollywood joy that makes you want to dance instantly. This celebration anthem captures the spirit of happiness perfectly.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          duration: "3:45"
        },
        {
          title: "Nagada Sang Dhol",
          artist: "Shreya Ghoshal",
          description: "Traditional meets modern in this energetic celebration song. The beats are absolutely infectious!",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
          duration: "4:12"
        },
        {
          title: "Jai Ho",
          artist: "A.R. Rahman",
          description: "The ultimate victory anthem! This Oscar-winning track radiates triumph and pure joy.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
          duration: "3:28"
        },
        {
          title: "Bom Diggy Diggy",
          artist: "Zack Knight & Jasmin Walia",
          description: "Modern Bollywood at its happiest. This peppy track is guaranteed to lift your spirits.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
          duration: "3:15"
        },
        {
          title: "Badtameez Dil",
          artist: "Benny Dayal",
          description: "Youthful energy and romance combined. This upbeat track from Yeh Jawaani Hai Deewani is pure happiness.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
          duration: "4:02"
        },
        {
          title: "Tune Maari Entriyaan",
          artist: "Vishal Dadlani & Neeti Mohan",
          description: "High-energy Bollywood track that's impossible to sit still to. Perfect for celebrating life!",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
          duration: "3:38"
        },
        {
          title: "Malhari",
          artist: "Vishal Dadlani",
          description: "Powerful and uplifting anthem from Bajirao Mastani. This track makes you feel like a warrior celebrating victory.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
          duration: "4:25"
        },
        {
          title: "Tamma Tamma Again",
          artist: "Bappi Lahiri & Anuradha Paudwal",
          description: "Retro Bollywood happiness! This remake brings back the 90s joy with modern production.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
          duration: "3:52"
        },
        {
          title: "Seeti Maar",
          artist: "Devi Sri Prasad",
          description: "Mass celebration song that gets everyone on their feet. Pure festive energy in musical form.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
          duration: "4:08"
        },
        {
          title: "Nashe Si Chadh Gayi",
          artist: "Arijit Singh",
          description: "Romantic happiness with a party vibe. This track from Befikre captures the joy of being carefree.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
          duration: "3:33"
        }
      ],
      surpriseTrack: {
        title: "Kala Chashma",
        artist: "Amar Arshi & Neha Kakkar",
        description: "This Punjabi-Hindi fusion became a global sensation! Even if you think you don't know it, you'll recognize this instantly danceable track.",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
        duration: "3:47"
      }
    },
    english: {
      songs: [
        {
          title: "Good 4 U",
          artist: "Olivia Rodrigo",
          description: "Pure joy wrapped in pop-punk energy. This anthem captures that unstoppable feeling when everything just clicks perfectly.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
          duration: "2:58"
        },
        {
          title: "Levitating",
          artist: "Dua Lipa",
          description: "Disco-pop perfection that makes you feel like you're floating on clouds. Impossible not to dance to this euphoric beat.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
          duration: "3:23"
        },
        {
          title: "Mr. Blue Sky",
          artist: "Electric Light Orchestra",
          description: "The ultimate feel-good classic. This orchestral masterpiece radiates sunshine and boundless optimism.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
          duration: "5:03"
        },
        {
          title: "Uptown Funk",
          artist: "Mark Ronson ft. Bruno Mars",
          description: "Infectious groove that transforms any room into a dance floor. Pure confidence and swagger in musical form.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
          duration: "4:30"
        },
        {
          title: "Happy",
          artist: "Pharrell Williams",
          description: "The song that defined happiness for a generation. This track literally makes it impossible to frown.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
          duration: "3:53"
        },
        {
          title: "Can't Stop the Feeling!",
          artist: "Justin Timberlake",
          description: "Instant mood booster with irresistible pop hooks. This track brings out the sunshine in everyone.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
          duration: "3:56"
        },
        {
          title: "Walking on Sunshine",
          artist: "Katrina and the Waves",
          description: "Pure 80s joy that never gets old. This anthem makes every step feel like you're bouncing on clouds.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
          duration: "3:58"
        },
        {
          title: "Good as Hell",
          artist: "Lizzo",
          description: "Self-love anthem with infectious energy. This empowering track celebrates feeling amazing in your own skin.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
          duration: "2:39"
        },
        {
          title: "Shut Up and Dance",
          artist: "Walk the Moon",
          description: "High-energy indie pop that demands movement. This track captures the euphoria of spontaneous joy.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
          duration: "3:09"
        },
        {
          title: "September",
          artist: "Earth, Wind & Fire",
          description: "Disco funk perfection that transcends generations. This eternal celebration song never fails to energize.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3",
          duration: "3:35"
        }
      ],
      surpriseTrack: {
        title: "Dancing Queen",
        artist: "ABBA",
        description: "Trust me on this one - this disco legend will amplify your happy vibes in ways you didn't expect. Sometimes the classics hit different.",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3",
        duration: "3:52"
      }
    },
    tamil: {
      songs: [
        {
          title: "Vaathi Coming",
          artist: "Anirudh Ravichander",
          description: "Mass energy Tamil style! This track from Master brings pure celebration vibes.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3",
          duration: "4:15"
        },
        {
          title: "Rowdy Baby",
          artist: "Dhanush & Dhee",
          description: "The song that took Tamil music global! Infectious beats that make everyone want to dance.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3",
          duration: "4:03"
        },
        {
          title: "Kutty Story",
          artist: "Thalapathy Vijay & Anirudh",
          description: "Feel-good Tamil track with modern beats. Perfect for celebrating life's little joys.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3",
          duration: "3:42"
        },
        {
          title: "Marana Kuthu",
          artist: "Anirudh Ravichander",
          description: "High-energy kuthu beats that get your blood pumping. Pure Tamil celebration energy!",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3",
          duration: "3:28"
        },
        {
          title: "Beast Mode",
          artist: "Anirudh Ravichander",
          description: "Modern Tamil anthem with international appeal. This track brings out the beast in your happiness!",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3",
          duration: "3:55"
        },
        {
          title: "Aalaporaan Tamizhan",
          artist: "A.R. Rahman",
          description: "Patriotic joy with A.R. Rahman's signature sound. Celebrates Tamil pride with infectious energy.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3",
          duration: "4:22"
        },
        {
          title: "Soorarai Pottru",
          artist: "G.V. Prakash Kumar",
          description: "Inspirational and uplifting track about chasing dreams. Pure motivation in musical form.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3",
          duration: "4:08"
        },
        {
          title: "Polakatum Para Para",
          artist: "Dhanush",
          description: "Quirky and fun Tamil track that's impossible not to smile to. Celebrates the joy of being different.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3",
          duration: "3:33"
        },
        {
          title: "Arabic Kuthu",
          artist: "Anirudh Ravichander",
          description: "Viral sensation with Arabic influences. This fusion track became a global dance phenomenon.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3",
          duration: "3:47"
        },
        {
          title: "Jimikki Kammal",
          artist: "Various Artists",
          description: "The track that broke the internet! Simple, catchy, and absolutely irresistible Tamil folk fusion.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3",
          duration: "2:58"
        }
      ],
      surpriseTrack: {
        title: "Why This Kolaveri Di",
        artist: "Dhanush",
        description: "The amateur song that became a global phenomenon! This broken English-Tamil mix proves sometimes simple is best.",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3",
        duration: "4:02"
      }
    },
    kannada: {
      songs: [
        {
          title: "Kanoora Heege",
          artist: "Armaan Malik",
          description: "Modern Kannada pop with beautiful melodies. This track brings joy with its contemporary sound.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3",
          duration: "3:42"
        },
        {
          title: "Ondu Malebillu",
          artist: "Sonu Nigam",
          description: "Classic Kannada happiness with Sonu Nigam's magical voice. Pure joy in traditional style.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3",
          duration: "4:15"
        },
        {
          title: "Yaarige Gottu",
          artist: "Nakash Aziz",
          description: "Peppy Kannada track that gets everyone moving. Contemporary beats with local flavor.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3",
          duration: "3:28"
        },
        {
          title: "Gelathi Gombhu",
          artist: "Vijay Prakash",
          description: "Feel-good Kannada melody that celebrates friendship and joy. Perfect for happy moments.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-37.mp3",
          duration: "4:03"
        },
        {
          title: "Belageddu",
          artist: "Hemanth Kumar",
          description: "Energetic Kannada track with folk influences. This song brings out the rustic joy.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3",
          duration: "3:55"
        },
        {
          title: "Nodamma Hudugi",
          artist: "Chandan Shetty",
          description: "Modern rap-influenced Kannada track. Contemporary happiness with local pride.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3",
          duration: "3:33"
        },
        {
          title: "Mandya to Mumbai",
          artist: "Various Artists",
          description: "Journey song that celebrates dreams and ambitions. Uplifting Kannada track about success.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-40.mp3",
          duration: "4:12"
        },
        {
          title: "Anisutide Yako Indu",
          artist: "S.P. Balasubrahmanyam",
          description: "Classic SPB magic in Kannada. This evergreen track never fails to bring smiles.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-41.mp3",
          duration: "4:28"
        },
        {
          title: "Loose Madha Yogi",
          artist: "Puneeth Rajkumar",
          description: "Power Star's energetic track that motivates and energizes. Pure Kannada celebration.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-42.mp3",
          duration: "3:47"
        },
        {
          title: "College Kumar",
          artist: "Vikram & Various",
          description: "Youthful Kannada anthem about college life and dreams. Nostalgic happiness at its best.",
          audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-43.mp3",
          duration: "3:52"
        }
      ],
      surpriseTrack: {
        title: "Bombe Helutaithe",
        artist: "Rajkumar",
        description: "Dr. Rajkumar's classic that every Kannadiga knows by heart! This vintage gem brings timeless joy that transcends generations.",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-44.mp3",
        duration: "4:35"
      }
    }
  },
  // Adding abbreviated versions for other moods to keep response manageable
  sad: {
    hindi: {
      songs: [
        { title: "Khairiyat", artist: "Arijit Singh", description: "Heart-wrenching melody about longing and love lost.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-45.mp3", duration: "4:40" },
        { title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", description: "Pain of unrequited love expressed beautifully.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-46.mp3", duration: "4:28" },
        { title: "Tum Hi Ho", artist: "Arijit Singh", description: "Romantic ballad that touches the deepest emotions.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-47.mp3", duration: "4:22" },
        { title: "Jeene Laga Hoon", artist: "Atif Aslam", description: "Beautiful sad melody about finding meaning in love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-48.mp3", duration: "3:58" },
        { title: "Tose Naina", artist: "Armaan Malik", description: "Soft, melancholic track about silent conversations through eyes.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-49.mp3", duration: "4:15" },
        { title: "Shayad", artist: "Arijit Singh", description: "Uncertainty in love expressed through haunting vocals.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-50.mp3", duration: "3:33" },
        { title: "Kabira", artist: "Tochi Raina", description: "Sufi-influenced track about spiritual and emotional longing.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-51.mp3", duration: "4:02" },
        { title: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh", description: "Unconditional love despite heartbreak.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-52.mp3", duration: "4:35" },
        { title: "Raabta", artist: "Arijit Singh", description: "About eternal connections that transcend time.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-53.mp3", duration: "4:05" },
        { title: "Agar Tum Saath Ho", artist: "Alka Yagnik & Arijit Singh", description: "Duet about the pain of separation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-54.mp3", duration: "5:42" }
      ],
      surpriseTrack: { title: "Lag Jaa Gale", artist: "Lata Mangeshkar", description: "Timeless classic that brings tears to every generation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-55.mp3", duration: "3:47" }
    },
    english: {
      songs: [
        { title: "Someone Like You", artist: "Adele", description: "A gentle embrace for your aching heart.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-56.mp3", duration: "4:45" },
        { title: "Hurt", artist: "Johnny Cash", description: "Hauntingly beautiful and deeply cathartic.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-57.mp3", duration: "3:38" },
        { title: "Mad World", artist: "Gary Jules", description: "Melancholic and ethereal for introspective moments.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-58.mp3", duration: "3:08" },
        { title: "The Night We Met", artist: "Lord Huron", description: "Nostalgic and tender, wraps around your sadness.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-59.mp3", duration: "3:28" },
        { title: "Skinny Love", artist: "Bon Iver", description: "Raw emotion captured in falsetto and guitar.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-60.mp3", duration: "3:58" },
        { title: "Black", artist: "Pearl Jam", description: "Grunge ballad about love's darkness and light.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-61.mp3", duration: "5:43" },
        { title: "Everybody Hurts", artist: "R.E.M.", description: "Anthem for when you need to know you're not alone.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-62.mp3", duration: "5:17" },
        { title: "Creep", artist: "Radiohead", description: "Alternative rock classic about feeling like an outsider.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-63.mp3", duration: "3:58" },
        { title: "Tears in Heaven", artist: "Eric Clapton", description: "Beautiful ballad about loss and healing.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-64.mp3", duration: "4:32" },
        { title: "Hallelujah", artist: "Jeff Buckley", description: "Ethereal cover that touches the soul deeply.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-65.mp3", duration: "6:53" }
      ],
      surpriseTrack: { title: "Breathe Me", artist: "Sia", description: "Vulnerable masterpiece perfect for processing deep emotions.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-66.mp3", duration: "4:31" }
    },
    tamil: {
      songs: [
        { title: "Kadhalagi", artist: "Hariharan", description: "Emotional Tamil ballad about lost love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-67.mp3", duration: "4:25" },
        { title: "Mounam Pesiyadhe", artist: "Various", description: "Silent conversations through melancholic melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-68.mp3", duration: "4:12" },
        { title: "Yaaradi Nee Mohini", artist: "Dhanush", description: "Folk-influenced sad song about unrequited love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-69.mp3", duration: "3:58" },
        { title: "Pachai Nirame", artist: "A.R. Rahman", description: "Nature-inspired melancholy from the maestro.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-70.mp3", duration: "4:33" },
        { title: "Kathalikkum Pennin", artist: "Unni Krishnan", description: "Classic Tamil sad song about love's complexities.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-71.mp3", duration: "4:45" },
        { title: "Nenjukkul Peidhidum", artist: "Harris Jayaraj", description: "Rain-themed melancholy that touches the heart.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-72.mp3", duration: "4:02" },
        { title: "Venpani Malare", artist: "K.J. Yesudas", description: "Evergreen sad melody that never loses its charm.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-73.mp3", duration: "4:28" },
        { title: "Thendral Vanthu", artist: "S.P. Balasubrahmanyam", description: "Breeze-themed melancholic classic.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-74.mp3", duration: "4:15" },
        { title: "Mayya Mayya", artist: "Chinmayi", description: "Sufi-influenced Tamil track about spiritual longing.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-75.mp3", duration: "3:47" },
        { title: "Ilamai Thirumbudhe", artist: "A.R. Rahman", description: "About youth's fleeting nature and its melancholy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-76.mp3", duration: "4:52" }
      ],
      surpriseTrack: { title: "Mullum Malarum", artist: "Ilaiyaraaja", description: "Ilaiyaraaja's masterpiece that defined Tamil film music's emotional depth.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-77.mp3", duration: "4:38" }
    },
    kannada: {
      songs: [
        { title: "Neene Neene", artist: "Sonu Nigam", description: "Romantic sadness expressed through Sonu's voice.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-78.mp3", duration: "4:22" },
        { title: "Gaganave Baagi", artist: "Rajesh Krishnan", description: "Melancholic Kannada track about sky and dreams.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-79.mp3", duration: "4:15" },
        { title: "Jotheyali", artist: "Vijay Prakash", description: "Sad melody about longing and memories.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-80.mp3", duration: "3:58" },
        { title: "Onde Ondu Sari", artist: "Armaan Malik", description: "Modern Kannada ballad about second chances.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-81.mp3", duration: "4:03" },
        { title: "Yenammi Yenadhu", artist: "K.S. Chithra", description: "Classical sad song about life's questions.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-82.mp3", duration: "4:28" },
        { title: "Huttidare Kannada", artist: "Rajkumar", description: "Patriotic sadness about homeland love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-83.mp3", duration: "4:35" },
        { title: "Neene Rama Neene Shyama", artist: "S.P. Balasubrahmanyam", description: "Devotional sadness with spiritual longing.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-84.mp3", duration: "4:45" },
        { title: "Yaaree Koogadali", artist: "Hemanth Kumar", description: "Folk-influenced sad song about friends and memories.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-85.mp3", duration: "4:12" },
        { title: "Kanasina Loka", artist: "Various", description: "Dream world melancholy in traditional style.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-86.mp3", duration: "3:47" },
        { title: "Baa Nalle Madhuchandrake", artist: "P.B. Sreenivas", description: "Classic romantic sadness that's timeless.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-87.mp3", duration: "4:33" }
      ],
      surpriseTrack: { title: "Eradu Kanasu", artist: "Rajkumar", description: "Dr. Rajkumar's classic about two dreams - one of the most beautiful sad songs in Kannada cinema.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-88.mp3", duration: "4:42" }
    }
  },
  // Continuing with abbreviated versions for other moods
  relaxed: {
    hindi: {
      songs: [
        { title: "Weightless", artist: "Marconi Union", description: "Scientifically designed to reduce anxiety.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-89.mp3", duration: "8:10" },
        { title: "Tere Bina", artist: "A.R. Rahman", description: "Peaceful melody for quiet reflection.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-90.mp3", duration: "5:42" },
        { title: "Kun Faya Kun", artist: "A.R. Rahman", description: "Sufi calmness for the soul.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-91.mp3", duration: "7:08" },
        { title: "Jashn-E-Bahaaraa", artist: "Javed Ali", description: "Spring celebration with gentle vibes.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-92.mp3", duration: "4:25" },
        { title: "Piya Tose Naina Lage Re", artist: "Various", description: "Classical relaxation with traditional instruments.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-93.mp3", duration: "6:15" },
        { title: "Allah Ke Bande", artist: "Kailash Kher", description: "Spiritual calm with Kailash's unique voice.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-94.mp3", duration: "5:33" },
        { title: "Dil Se Re", artist: "A.R. Rahman", description: "Peaceful yet passionate musical journey.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-95.mp3", duration: "4:52" },
        { title: "Maula Mere Maula", artist: "Roop Kumar Rathod", description: "Devotional peace for the mind.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-96.mp3", duration: "4:38" },
        { title: "Chanda Re Chanda Re", artist: "Shreya Ghoshal", description: "Lullaby-like gentle melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-97.mp3", duration: "4:15" },
        { title: "Mitwa", artist: "Shafqat Amanat Ali", description: "Soothing melody for peaceful moments.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-98.mp3", duration: "4:28" }
      ],
      surpriseTrack: { title: "Aqueous Transmission", artist: "Incubus", description: "7-minute ambient journey that's pure relaxation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-99.mp3", duration: "7:46" }
    },
    english: {
      songs: [
        { title: "Weightless", artist: "Marconi Union", description: "Scientifically designed to reduce anxiety by 65%.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-100.mp3", duration: "8:10" },
        { title: "River", artist: "Joni Mitchell", description: "Flowing like gentle water for peaceful minds.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-101.mp3", duration: "4:00" },
        { title: "Clair de Lune", artist: "Claude Debussy", description: "Moonlight captured in piano keys.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-102.mp3", duration: "4:28" },
        { title: "Holocene", artist: "Bon Iver", description: "Ethereal falsetto for self-reflection.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-103.mp3", duration: "5:36" },
        { title: "Mad About You", artist: "Sting", description: "Gentle jazz-influenced relaxation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-104.mp3", duration: "3:58" },
        { title: "Comptine d'un autre été", artist: "Yann Tiersen", description: "French piano piece for quiet contemplation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-105.mp3", duration: "2:18" },
        { title: "Gymnopédie No. 1", artist: "Erik Satie", description: "Minimalist piano for peaceful meditation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-106.mp3", duration: "3:33" },
        { title: "Sleep Baby Sleep", artist: "Broods", description: "Modern lullaby for adult relaxation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-107.mp3", duration: "4:12" },
        { title: "On Earth as It is in Heaven", artist: "Angels & Airwaves", description: "Ambient rock for peaceful escape.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-108.mp3", duration: "6:45" },
        { title: "Porcelain", artist: "Moby", description: "Electronic ambient with emotional depth.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-109.mp3", duration: "4:01" }
      ],
      surpriseTrack: { title: "Aqueous Transmission", artist: "Incubus", description: "You know Incubus for rock, but this ambient journey is pure relaxation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-110.mp3", duration: "7:46" }
    },
    tamil: {
      songs: [
        { title: "Adagio For Strings", artist: "Samuel Barber", description: "Classical piece for deep relaxation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-111.mp3", duration: "8:36" },
        { title: "Vennilave Vennilave", artist: "Hariharan", description: "Moonlight-themed calm Tamil melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-112.mp3", duration: "5:15" },
        { title: "Mutham Mutham", artist: "A.R. Rahman", description: "Gentle romantic melody for peaceful moments.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-113.mp3", duration: "4:33" },
        { title: "Theeyae Theeyae", artist: "Unni Krishnan", description: "Spiritual Tamil song for meditation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-114.mp3", duration: "4:45" },
        { title: "Anjali Anjali", artist: "Ilaiyaraaja", description: "Classical Tamil composition for relaxation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-115.mp3", duration: "4:28" },
        { title: "Malargale Malargale", artist: "S.P. Balasubrahmanyam", description: "Flower-themed gentle melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-116.mp3", duration: "4:52" },
        { title: "Kadhal Rojave", artist: "A.R. Rahman", description: "Love and roses in peaceful harmony.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-117.mp3", duration: "5:23" },
        { title: "Snehithane Snehithane", artist: "K.S. Chithra", description: "Friendship song with calming vibes.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-118.mp3", duration: "4:38" },
        { title: "Thamizha Thamizha", artist: "A.R. Rahman", description: "Patriotic peace with cultural pride.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-119.mp3", duration: "4:15" },
        { title: "Mounam Konjam Neram", artist: "Various", description: "Silence and time - perfect for reflection.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-120.mp3", duration: "3:47" }
      ],
      surpriseTrack: { title: "Roja Jaaneman", artist: "S.P. Balasubrahmanyam", description: "A.R. Rahman's breakthrough that created a new sound in Tamil cinema.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-121.mp3", duration: "5:08" }
    },
    kannada: {
      songs: [
        { title: "Usure Usure", artist: "Vijay Prakash", description: "Breath-focused peaceful Kannada melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-122.mp3", duration: "4:25" },
        { title: "Jeeva Hoovagide", artist: "S.P. Balasubrahmanyam", description: "Life as a flower - gentle philosophy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-123.mp3", duration: "4:38" },
        { title: "Nodirbeku Hendathi", artist: "Rajkumar", description: "Classical Kannada peace about relationships.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-124.mp3", duration: "4:52" },
        { title: "Baanige Bandaga", artist: "Various", description: "Welcome song with peaceful undertones.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-125.mp3", duration: "4:15" },
        { title: "Kanasalu Neene Manasalu Neene", artist: "Sonu Nigam", description: "Dreams and heart in peaceful harmony.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-126.mp3", duration: "4:33" },
        { title: "Modalasala Munde", artist: "Vijay Prakash", description: "Beginning of peace in musical form.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-127.mp3", duration: "3:58" },
        { title: "Mysore Mallige", artist: "P.B. Sreenivas", description: "Jasmine-themed gentle Kannada classic.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-128.mp3", duration: "4:28" },
        { title: "Yaava Mohana Murali", artist: "Yesudas", description: "Devotional peace with flute references.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-129.mp3", duration: "5:15" },
        { title: "Sukha Samsarada", artist: "Rajkumar", description: "Happy family life in peaceful expression.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-130.mp3", duration: "4:42" },
        { title: "Chandada Gombe", artist: "K.S. Chithra", description: "Moon doll - gentle lullaby style.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-131.mp3", duration: "4:03" }
      ],
      surpriseTrack: { title: "Naadamaya", artist: "L. Vaidyanathan", description: "Classical Kannada composition that's pure meditation in musical form.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-132.mp3", duration: "6:22" }
    }
  },
  romantic: {
    hindi: {
      songs: [
        { title: "All of Me", artist: "John Legend", description: "Pure devotion set to piano.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-133.mp3", duration: "4:29" },
        { title: "Tum Hi Ho", artist: "Arijit Singh", description: "Ultimate Bollywood romantic ballad.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-134.mp3", duration: "4:22" },
        { title: "Jeene Laga Hoon", artist: "Atif Aslam", description: "Found meaning through love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-135.mp3", duration: "3:58" },
        { title: "Raabta", artist: "Arijit Singh", description: "Soul connections and eternal bonds.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-136.mp3", duration: "4:05" },
        { title: "Pehla Nasha", artist: "Udit Narayan", description: "First intoxication of love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-137.mp3", duration: "5:38" },
        { title: "Chahun Main Ya Naa", artist: "Arijit Singh", description: "Dilemma of love beautifully expressed.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-138.mp3", duration: "4:45" },
        { title: "Mere Haath Mein", artist: "Rahat Fateh Ali Khan", description: "Devotional love with Sufi touch.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-139.mp3", duration: "4:32" },
        { title: "Ishq Wala Love", artist: "Shilpa Rao & Salim Merchant", description: "Modern romantic track with traditional heart.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-140.mp3", duration: "4:15" },
        { title: "Tera Hone Laga Hoon", artist: "Atif Aslam", description: "Becoming yours - romantic transformation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-141.mp3", duration: "4:28" },
        { title: "Samjhawan", artist: "Arijit Singh", description: "Understanding love through gentle melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-142.mp3", duration: "4:52" }
      ],
      surpriseTrack: { title: "La Vie En Rose", artist: "Édith Piaf", description: "French romance that transcends language barriers.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-143.mp3", duration: "3:05" }
    },
    english: {
      songs: [
        { title: "All of Me", artist: "John Legend", description: "Pure devotion set to piano keys.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-144.mp3", duration: "4:29" },
        { title: "Perfect", artist: "Ed Sheeran", description: "Modern love letter in melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-145.mp3", duration: "4:23" },
        { title: "At Last", artist: "Etta James", description: "Timeless jazz romance with soul.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-146.mp3", duration: "3:01" },
        { title: "Make You Feel My Love", artist: "Adele", description: "Bob Dylan's masterpiece through Adele's voice.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-147.mp3", duration: "3:32" },
        { title: "Thinking Out Loud", artist: "Ed Sheeran", description: "Growing old together beautifully expressed.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-148.mp3", duration: "4:41" },
        { title: "A Thousand Years", artist: "Christina Perri", description: "Eternal love promised through time.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-149.mp3", duration: "4:45" },
        { title: "Can't Help Myself", artist: "Four Tops", description: "Classic Motown love that's irresistible.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-150.mp3", duration: "2:44" },
        { title: "Wonderful Tonight", artist: "Eric Clapton", description: "Simple love expressed beautifully.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-151.mp3", duration: "3:43" },
        { title: "Stand by Me", artist: "Ben E. King", description: "Classic promise of eternal support.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-152.mp3", duration: "2:58" },
        { title: "The Way You Look Tonight", artist: "Frank Sinatra", description: "Timeless appreciation of beauty in love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-153.mp3", duration: "3:22" }
      ],
      surpriseTrack: { title: "La Vie En Rose", artist: "Édith Piaf", description: "French romance that makes hearts flutter worldwide.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-154.mp3", duration: "3:05" }
    },
    tamil: {
      songs: [
        { title: "Kanave Kanave", artist: "Anirudh Ravichander", description: "Dream-like romantic melody.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-155.mp3", duration: "4:33" },
        { title: "Ennodu Nee Irundhaal", artist: "Sid Sriram", description: "Being with you - ultimate romantic expression.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-156.mp3", duration: "4:15" },
        { title: "Kaadhal Anukkal", artist: "A.R. Rahman", description: "Love's alphabet in Tamil cinema.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-157.mp3", duration: "4:52" },
        { title: "Malargale Malargale", artist: "Unni Krishnan", description: "Flowers blooming in romantic hearts.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-158.mp3", duration: "4:28" },
        { title: "Vennilave Vennilave", artist: "Hariharan", description: "Moonlight romance in its purest form.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-159.mp3", duration: "5:15" },
        { title: "Thalli Pogathey", artist: "Sid Sriram", description: "Don't go away - heartfelt romantic plea.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-160.mp3", duration: "4:38" },
        { title: "Idhayathai Yedho Ondru", artist: "Karthik", description: "Something touched the heart romantically.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-161.mp3", duration: "4:45" },
        { title: "Pachai Kiligal", artist: "A.R. Rahman", description: "Green parrots carrying messages of love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-162.mp3", duration: "4:22" },
        { title: "Snehithane", artist: "Various", description: "Dear friend turning into beloved.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-163.mp3", duration: "4:08" },
        { title: "Cheliya Cheliya", artist: "A.R. Rahman", description: "Darling darling - pure romantic joy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-164.mp3", duration: "4:33" }
      ],
      surpriseTrack: { title: "Ilamai Enum Poongatru", artist: "S.P. Balasubrahmanyam", description: "Youth as a garden breeze - Ilaiyaraaja's romantic masterpiece that defined Tamil love songs.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-165.mp3", duration: "4:47" }
    },
    kannada: {
      songs: [
        { title: "Neene Neene", artist: "Sonu Nigam", description: "You you - romantic repetition of love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-166.mp3", duration: "4:22" },
        { title: "Onde Ondu Sari", artist: "Armaan Malik", description: "Just once - romantic request beautifully sung.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-167.mp3", duration: "4:03" },
        { title: "Kanasina Loka", artist: "S.P. Balasubrahmanyam", description: "Dream world where love resides.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-168.mp3", duration: "4:35" },
        { title: "Jotheyali", artist: "Vijay Prakash", description: "With you always - romantic commitment.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-169.mp3", duration: "4:15" },
        { title: "Usire Usire", artist: "Hemanth Kumar", description: "Breath breath - life in love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-170.mp3", duration: "4:28" },
        { title: "Modalasala", artist: "Various", description: "In the beginning - romantic origins.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-171.mp3", duration: "3:58" },
        { title: "Yaaree Nee Mohini", artist: "Rajesh Krishnan", description: "Who are you, enchantress - romantic wonder.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-172.mp3", duration: "4:45" },
        { title: "Baanige Bandaga", artist: "K.S. Chithra", description: "When sky came - romantic metaphor.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-173.mp3", duration: "4:33" },
        { title: "Gaganave Baagi", artist: "Unni Krishnan", description: "Opening the sky - limitless love.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-174.mp3", duration: "4:52" },
        { title: "Cheluve Ondu Keloke", artist: "Vijay Prakash", description: "Beautiful one, just listen - romantic plea.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-175.mp3", duration: "4:18" }
      ],
      surpriseTrack: { title: "Baa Nalle Madhuchandrake", artist: "P.B. Sreenivas", description: "Come sweet moon - timeless Kannada romantic classic that every generation falls in love with.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-176.mp3", duration: "4:47" }
    }
  },
  energetic: {
    hindi: {
      songs: [
        { title: "Gallan Goodiyaan", artist: "Yashraj Mukhate", description: "High-energy Bollywood celebration anthem.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-177.mp3", duration: "3:45" },
        { title: "Malhari", artist: "Vishal Dadlani", description: "Warrior celebration with thunderous energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-178.mp3", duration: "4:25" },
        { title: "Nagada Sang Dhol", artist: "Shreya Ghoshal", description: "Traditional drums meet modern energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-179.mp3", duration: "4:12" },
        { title: "Seeti Maar", artist: "Devi Sri Prasad", description: "Whistle blowing mass celebration track.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-180.mp3", duration: "4:08" },
        { title: "Jai Ho", artist: "A.R. Rahman", description: "Victory anthem that conquered the world.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-181.mp3", duration: "3:28" },
        { title: "Tune Maari Entriyaan", artist: "Vishal Dadlani", description: "You made an entry - celebratory entrance.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-182.mp3", duration: "3:38" },
        { title: "Bom Diggy Diggy", artist: "Zack Knight", description: "Modern Bollywood energy with global appeal.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-183.mp3", duration: "3:15" },
        { title: "Badtameez Dil", artist: "Benny Dayal", description: "Naughty heart with youthful energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-184.mp3", duration: "4:02" },
        { title: "Tamma Tamma Again", artist: "Bappi Lahiri", description: "Retro energy revived for new generation.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-185.mp3", duration: "3:52" },
        { title: "Nashe Si Chadh Gayi", artist: "Arijit Singh", description: "Intoxication of energy and youth.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-186.mp3", duration: "3:33" }
      ],
      surpriseTrack: { title: "Kernkraft 400", artist: "Zombie Nation", description: "Electronic banger from early 2000s that's pure adrenaline from German producers.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-187.mp3", duration: "3:45" }
    },
    english: {
      songs: [
        { title: "Don't Stop Me Now", artist: "Queen", description: "Freddie Mercury's explosive celebration of life.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-188.mp3", duration: "3:29" },
        { title: "Pump It", artist: "The Black Eyed Peas", description: "High-octane energy for superhero moments.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-189.mp3", duration: "3:33" },
        { title: "Thunder", artist: "Imagine Dragons", description: "Lightning in a bottle with empowering beats.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-190.mp3", duration: "3:07" },
        { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", description: "Pure determination and unstoppable drive.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-191.mp3", duration: "4:18" },
        { title: "Eye of the Tiger", artist: "Survivor", description: "Classic motivation anthem for champions.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-192.mp3", duration: "4:04" },
        { title: "We Will Rock You", artist: "Queen", description: "Stadium anthem that unites the world.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-193.mp3", duration: "2:02" },
        { title: "Titanium", artist: "David Guetta ft. Sia", description: "Bulletproof energy with soaring vocals.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-194.mp3", duration: "4:05" },
        { title: "Stronger", artist: "Kelly Clarkson", description: "What doesn't kill you makes you dance.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-195.mp3", duration: "3:42" },
        { title: "Roar", artist: "Katy Perry", description: "Finding your voice with powerful energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-196.mp3", duration: "3:43" },
        { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", description: "Unstoppable positive energy in musical form.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-197.mp3", duration: "3:56" }
      ],
      surpriseTrack: { title: "Kernkraft 400", artist: "Zombie Nation", description: "Electronic banger that's impossible not to move to - you'll recognize it from sports stadiums worldwide.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-198.mp3", duration: "3:45" }
    },
    tamil: {
      songs: [
        { title: "Vaathi Coming", artist: "Anirudh Ravichander", description: "Teacher's arrival with mass energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-199.mp3", duration: "4:15" },
        { title: "Rowdy Baby", artist: "Dhanush & Dhee", description: "Global sensation with infectious Tamil beats.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-200.mp3", duration: "4:03" },
        { title: "Marana Kuthu", artist: "Anirudh Ravichander", description: "Deadly rhythm that energizes instantly.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-201.mp3", duration: "3:28" },
        { title: "Beast Mode", artist: "Anirudh Ravichander", description: "Unleashing the beast within through music.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-202.mp3", duration: "3:55" },
        { title: "Arabic Kuthu", artist: "Anirudh Ravichander", description: "Viral Arabic-Tamil fusion phenomenon.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-203.mp3", duration: "3:47" },
        { title: "Aalaporaan Tamizhan", artist: "A.R. Rahman", description: "Tamil pride with Rahman's energetic touch.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-204.mp3", duration: "4:22" },
        { title: "Kutty Story", artist: "Thalapathy Vijay", description: "Short story with massive energy impact.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-205.mp3", duration: "3:42" },
        { title: "Jimikki Kammal", artist: "Various Artists", description: "Folk fusion that broke the internet.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-206.mp3", duration: "2:58" },
        { title: "Polakatum Para Para", artist: "Dhanush", description: "Quirky energy that's impossible to resist.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-207.mp3", duration: "3:33" },
        { title: "Soorarai Pottru", artist: "G.V. Prakash Kumar", description: "Soaring high with motivational energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-208.mp3", duration: "4:08" }
      ],
      surpriseTrack: { title: "Why This Kolaveri Di", artist: "Dhanush", description: "The amateur song that became a global phenomenon - sometimes simple energy is the most powerful.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-209.mp3", duration: "4:02" }
    },
    kannada: {
      songs: [
        { title: "Loose Madha Yogi", artist: "Puneeth Rajkumar", description: "Power Star's motivational energy anthem.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-210.mp3", duration: "3:47" },
        { title: "Nodamma Hudugi", artist: "Chandan Shetty", description: "Rap-influenced Kannada energy track.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-211.mp3", duration: "3:33" },
        { title: "Belageddu", artist: "Hemanth Kumar", description: "Morning energy with folk influences.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-212.mp3", duration: "3:55" },
        { title: "College Kumar", artist: "Vikram & Various", description: "College life energy and youthful dreams.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-213.mp3", duration: "3:52" },
        { title: "Mandya to Mumbai", artist: "Various Artists", description: "Journey from village to city with energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-214.mp3", duration: "4:12" },
        { title: "Yaarige Gottu", artist: "Nakash Aziz", description: "Who knows - energetic mystery celebration.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-215.mp3", duration: "3:28" },
        { title: "Gelathi Gombhu", artist: "Vijay Prakash", description: "Friendship energy with contemporary beats.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-216.mp3", duration: "4:03" },
        { title: "Kanoora Heege", artist: "Armaan Malik", description: "Like this and that - playful energy.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-217.mp3", duration: "3:42" },
        { title: "Anisutide Yako Indu", artist: "S.P. Balasubrahmanyam", description: "Doesn't it seem today - energetic questioning.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-218.mp3", duration: "4:28" },
        { title: "Ondu Malebillu", artist: "Sonu Nigam", description: "One rain drop with powerful energy impact.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-219.mp3", duration: "4:15" }
      ],
      surpriseTrack: { title: "Bombe Helutaithe", artist: "Rajkumar", description: "Dr. Rajkumar's energetic classic that gets every Kannadiga dancing - timeless energy that never gets old.", audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-220.mp3", duration: "4:35" }
    }
  }
};
