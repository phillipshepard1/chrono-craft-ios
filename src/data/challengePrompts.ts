export interface Challenge {
  id: string;
  week: string;
  number: number;
  category: "social" | "networking" | "video" | "content" | "engagement";
  title: string;
  shortDescription: string;
  fullDescription: string;
  instructions: string[];
  tips: string[];
  captionTemplate?: string;
  difficulty: "easy" | "medium" | "pro";
  timeEstimate: string;
  platforms: ("instagram" | "tiktok" | "facebook" | "linkedin")[];
  howToLink?: string;
  emoji: string;
}

export interface PlannedChallenge {
  challengeId: string;
  plannedDate?: Date;
  completed: boolean;
  postId?: string;
}

export const weeklyChallenge: Challenge[] = [
  {
    id: "1",
    week: "2025-W02",
    number: 1,
    category: "networking",
    title: "Coffee Connection",
    shortDescription: "Take a client to a local coffee shop and share the moment",
    fullDescription: "Build authentic relationships by taking a client or prospect to your favorite local coffee shop. This shows your personal side while supporting local businesses—a win-win that resonates with your community.",
    instructions: [
      "Choose a cozy, photogenic local coffee shop in your area",
      "Invite a client, prospect, or referral partner for a casual coffee chat",
      "Take a genuine photo together (candid works best!)",
      "Tag both the person and the coffee shop in your post",
      "Write a heartfelt caption about the connection"
    ],
    tips: [
      "Ask permission before posting their photo",
      "Choose a spot with good natural lighting",
      "Post during morning hours for best engagement",
      "Follow up with a thank-you message after posting"
    ],
    captionTemplate: "☕ Nothing beats a great conversation over coffee! Loved catching up with [NAME] at @[COFFEE_SHOP]. Supporting local businesses while building real relationships—that's what it's all about. #RealEstateLife #LocalLove #CommunityFirst",
    difficulty: "easy",
    timeEstimate: "30 min",
    platforms: ["instagram", "facebook"],
    howToLink: "https://later.com/blog/instagram-photo-tips/",
    emoji: "☕"
  },
  {
    id: "2",
    week: "2025-W02",
    number: 2,
    category: "video",
    title: "Neighborhood Spotlight Reel",
    shortDescription: "Create a 30-second Reel showcasing a hidden gem",
    fullDescription: "Position yourself as the local expert by creating a quick, engaging Reel that highlights a hidden gem in your area. This could be a park, restaurant, boutique, or unique neighborhood feature that buyers would love to know about.",
    instructions: [
      "Scout a unique location that represents your area's charm",
      "Film 5-7 short clips (3-5 seconds each) with your phone",
      "Use trending audio or upbeat music",
      "Add text overlays highlighting key features",
      "Include a call-to-action about living in the area"
    ],
    tips: [
      "Film in landscape AND portrait to repurpose content",
      "Visit during 'golden hour' for beautiful lighting",
      "Use a simple gimbal or stabilizer for smooth shots",
      "Keep text on screen for at least 2 seconds"
    ],
    captionTemplate: "🏘️ Hidden gem alert! Did you know [NEIGHBORHOOD] has this amazing [SPOT]? This is exactly why I love helping people find their home here. Want to explore the area? DM me! 📍 #HiddenGems #LocalExpert #[CITY]RealEstate",
    difficulty: "medium",
    timeEstimate: "1 hour",
    platforms: ["instagram", "tiktok"],
    howToLink: "https://later.com/blog/how-to-make-reels/",
    emoji: "🎬"
  },
  {
    id: "3",
    week: "2025-W02",
    number: 3,
    category: "content",
    title: "How I Got Into Real Estate",
    shortDescription: "Share your personal journey story",
    fullDescription: "People connect with people, not logos. Share your authentic story about how you became a real estate agent. This vulnerability builds trust and helps potential clients feel like they know you before you ever meet.",
    instructions: [
      "Find a quiet, well-lit spot to record",
      "Start with what you were doing BEFORE real estate",
      "Share the 'aha moment' that led you to this career",
      "Talk about what you love most about helping clients",
      "End with what drives you today"
    ],
    tips: [
      "Keep it under 60 seconds for maximum retention",
      "Be authentic—imperfect is relatable",
      "Look directly at the camera like you're talking to a friend",
      "Add captions for accessibility"
    ],
    captionTemplate: "I never planned to be a real estate agent... 🏡\n\n[Share your story]\n\nNow I get to help families find their perfect home every single day. And honestly? I can't imagine doing anything else.\n\nWhat's YOUR story? I'd love to hear it in the comments! 👇 #MyStory #RealEstateAgent #WhyIDoWhatIDo",
    difficulty: "easy",
    timeEstimate: "20 min",
    platforms: ["instagram", "tiktok", "linkedin"],
    howToLink: "https://later.com/blog/talking-head-videos/",
    emoji: "🎤"
  },
  {
    id: "4",
    week: "2025-W02",
    number: 4,
    category: "content",
    title: "Market Update Monday",
    shortDescription: "Create a carousel with local market stats",
    fullDescription: "Establish yourself as a market expert by sharing bite-sized, digestible market data. Use visuals to make numbers interesting and always translate data into what it means for buyers and sellers.",
    instructions: [
      "Pull 3-5 key stats from your MLS or local reports",
      "Create a Canva carousel with consistent branding",
      "Start with a hook slide ('Here's what's happening in [CITY]...')",
      "Make each stat its own slide with a brief explanation",
      "End with a CTA slide"
    ],
    tips: [
      "Use simple charts and big numbers",
      "Compare to last month or last year for context",
      "Always explain what the data MEANS for your audience",
      "Post on Monday morning when people are planning their week"
    ],
    captionTemplate: "📊 [CITY] Market Update – January 2025\n\nHere's what you need to know:\n✓ [STAT 1]\n✓ [STAT 2]\n✓ [STAT 3]\n\nSwipe through for the full breakdown! 👉\n\nThinking about buying or selling this year? Let's chat about what these numbers mean for YOU. Link in bio! #MarketUpdate #[CITY]RealEstate #RealEstateStats",
    difficulty: "medium",
    timeEstimate: "45 min",
    platforms: ["instagram", "linkedin", "facebook"],
    howToLink: "https://www.canva.com/templates/instagram-carousels/",
    emoji: "📊"
  },
  {
    id: "5",
    week: "2025-W02",
    number: 5,
    category: "video",
    title: "Open House Behind-the-Scenes",
    shortDescription: "Show your prep work before an open house",
    fullDescription: "Pull back the curtain and show the work that goes into hosting an open house. This 'day in the life' content is highly engaging and shows potential sellers the value you bring.",
    instructions: [
      "Start filming as you arrive at the property",
      "Show staging touches, signage setup, and detail work",
      "Give a quick tour of the home's highlights",
      "End with the doors opening for visitors",
      "Capture some visitor reactions if possible"
    ],
    tips: [
      "Use Stories for real-time, casual content",
      "Add music and text overlays for engagement",
      "Show your personality and energy",
      "Always get homeowner permission first"
    ],
    captionTemplate: "🏠 Open House prep at [ADDRESS]! \n\nHere's what goes into making your home shine for potential buyers:\n\n✨ Fresh flowers\n🕯️ Subtle scents\n📋 Feature sheets ready\n☀️ Natural light maximized\n\nThis home is READY to impress! See you Sunday 1-4pm 🔑 #OpenHouse #BehindTheScenes #RealtorLife #[CITY]Homes",
    difficulty: "easy",
    timeEstimate: "15 min",
    platforms: ["instagram", "tiktok"],
    howToLink: "https://later.com/blog/instagram-stories-ideas/",
    emoji: "🏠"
  },
  {
    id: "6",
    week: "2025-W02",
    number: 6,
    category: "engagement",
    title: "Client Testimonial Feature",
    shortDescription: "Post a photo with a happy client and their quote",
    fullDescription: "Social proof is everything in real estate. Feature a happy client with their testimonial to build credibility and show potential clients what working with you looks like.",
    instructions: [
      "Reach out to a recent happy client for permission",
      "Take a photo at closing or their new home",
      "Ask for a short quote about their experience",
      "Create a beautiful graphic with their words",
      "Write a heartfelt caption celebrating them"
    ],
    tips: [
      "Video testimonials perform even better if they're willing",
      "Tag them so they can share to their network",
      "Save these to a 'Reviews' highlight on Instagram",
      "Follow up with a small thank-you gift"
    ],
    captionTemplate: "🏡 Another happy homeowner! \n\n\"[CLIENT QUOTE]\" - [CLIENT NAME]\n\nCongratulations on your beautiful new home! It was such a joy helping you through this journey. Here's to new beginnings and making memories! 🔑❤️\n\nReady to start your home journey? Let's talk! #HappyHomeowners #ClientLove #[CITY]RealEstate",
    difficulty: "easy",
    timeEstimate: "20 min",
    platforms: ["instagram", "facebook", "linkedin"],
    howToLink: "https://later.com/blog/user-generated-content/",
    emoji: "⭐"
  },
  {
    id: "7",
    week: "2025-W02",
    number: 7,
    category: "networking",
    title: "Local Business Shoutout",
    shortDescription: "Feature and support a small business in your community",
    fullDescription: "Show your community love by spotlighting a local business. This builds your reputation as a community-focused agent and creates valuable networking opportunities with business owners.",
    instructions: [
      "Choose a business you genuinely love and use",
      "Visit and take photos/video of the space and products",
      "Write about why you love them and what makes them special",
      "Tag the business and encourage followers to visit",
      "Engage with comments and the business's response"
    ],
    tips: [
      "Build ongoing relationships by featuring different businesses monthly",
      "Ask if they'd like to cross-promote",
      "This often leads to referral partnerships",
      "Feature businesses your buyers would love"
    ],
    captionTemplate: "🌟 Local business spotlight: @[BUSINESS]!\n\nIf you haven't checked out [BUSINESS NAME] yet, you're missing out! [WHY YOU LOVE THEM]\n\nSupporting our local community is what makes [CITY] such an amazing place to live. Who else loves this spot? 👇 #ShopLocal #[CITY]Community #SupportSmallBusiness",
    difficulty: "easy",
    timeEstimate: "30 min",
    platforms: ["instagram", "facebook"],
    howToLink: "https://later.com/blog/instagram-collab-posts/",
    emoji: "🏪"
  },
  {
    id: "8",
    week: "2025-W02",
    number: 8,
    category: "content",
    title: "Quick Tip Tuesday",
    shortDescription: "Share one actionable home buying or selling tip",
    fullDescription: "Position yourself as a helpful expert by sharing valuable tips. Quick, actionable advice performs well and gets saved/shared, extending your reach to new audiences.",
    instructions: [
      "Choose ONE specific, actionable tip",
      "Create a simple graphic or quick video explaining it",
      "Keep it under 30 seconds or one carousel slide",
      "Explain WHY this tip matters",
      "Invite questions in the caption"
    ],
    tips: [
      "Think about questions clients always ask you",
      "Seasonal tips perform especially well",
      "Save tips as a series in a highlight reel",
      "Repurpose the same tip across all platforms"
    ],
    captionTemplate: "💡 Quick Tip Tuesday!\n\n[YOUR TIP]\n\nThis is one of the most common questions I get, and the answer might surprise you!\n\n[BRIEF EXPLANATION]\n\nHave questions about buying or selling? Drop them below! 👇 I love helping. #QuickTip #RealEstateTips #HomeBuyingTips #[CITY]Realtor",
    difficulty: "easy",
    timeEstimate: "15 min",
    platforms: ["instagram", "tiktok", "linkedin"],
    howToLink: "https://later.com/blog/instagram-carousel/",
    emoji: "💡"
  },
  {
    id: "9",
    week: "2025-W02",
    number: 9,
    category: "video",
    title: "Just Listed Walk-Through",
    shortDescription: "Film a casual video tour of a new listing",
    fullDescription: "Create excitement around a new listing with an authentic, casual walk-through. This style feels more genuine than polished property videos and generates high engagement.",
    instructions: [
      "Film yourself walking through the home naturally",
      "Start at the front door with a hook",
      "Point out 3-5 standout features",
      "Show the flow of the home",
      "End with pricing and contact info"
    ],
    tips: [
      "Walk slowly and keep the camera steady",
      "Talk like you're showing a friend the home",
      "Highlight unique features competitors would miss",
      "Post within 24 hours of listing going live"
    ],
    captionTemplate: "🔑 JUST LISTED! [ADDRESS]\n\nTake a walk through this stunning [BEDS]bd/[BATHS]ba home with me! 🏡\n\n✨ [FEATURE 1]\n✨ [FEATURE 2]\n✨ [FEATURE 3]\n\n💰 Offered at $[PRICE]\n📍 [NEIGHBORHOOD], [CITY]\n\nInterested? DM me or link in bio to schedule a private showing! #JustListed #[CITY]Homes #NewListing #OpenHouse",
    difficulty: "medium",
    timeEstimate: "45 min",
    platforms: ["instagram", "tiktok", "facebook"],
    howToLink: "https://later.com/blog/real-estate-instagram/",
    emoji: "🔑"
  },
  {
    id: "10",
    week: "2025-W02",
    number: 10,
    category: "engagement",
    title: "Weekend Warrior",
    shortDescription: "Share what you do on weekends to show personality",
    fullDescription: "Let your audience see the real you! Share your weekend activities, hobbies, or family time. This builds genuine connections and makes you memorable beyond just 'another realtor.'",
    instructions: [
      "Document something fun from your weekend",
      "Take candid photos or quick video clips",
      "Share authentically—you don't need to be 'on'",
      "Connect it back to your values or community",
      "Engage with everyone who comments"
    ],
    tips: [
      "This content often gets the MOST engagement",
      "Be yourself—authenticity wins",
      "Show interests that align with your ideal client",
      "Post Sunday evening or Monday morning"
    ],
    captionTemplate: "📸 Weekend mode: [WHAT YOU DID]!\n\n[Personal reflection or fun story]\n\nBecause real estate is my passion, but [HOBBY/FAMILY/INTEREST] is what keeps me grounded. ❤️\n\nHow did YOU spend your weekend? Tell me in the comments! 👇 #WeekendVibes #RealEstateLife #BehindTheScenes #[CITY]Living",
    difficulty: "easy",
    timeEstimate: "10 min",
    platforms: ["instagram", "facebook", "tiktok"],
    howToLink: "https://later.com/blog/instagram-personal-brand/",
    emoji: "🌅"
  }
];

export const categoryColors = {
  social: { bg: "bg-pink-500/20", text: "text-pink-500", border: "border-pink-500/30" },
  networking: { bg: "bg-amber-500/20", text: "text-amber-500", border: "border-amber-500/30" },
  video: { bg: "bg-purple-500/20", text: "text-purple-500", border: "border-purple-500/30" },
  content: { bg: "bg-blue-500/20", text: "text-blue-500", border: "border-blue-500/30" },
  engagement: { bg: "bg-emerald-500/20", text: "text-emerald-500", border: "border-emerald-500/30" }
};

export const categoryLabels = {
  social: "Social Media",
  networking: "Networking",
  video: "Video Content",
  content: "Content",
  engagement: "Engagement"
};

export const difficultyConfig = {
  easy: { label: "Easy", color: "bg-emerald-500/20 text-emerald-600" },
  medium: { label: "Medium", color: "bg-amber-500/20 text-amber-600" },
  pro: { label: "Pro", color: "bg-rose-500/20 text-rose-600" }
};
