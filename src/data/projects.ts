export interface StackItem {
  category: string
  items: string[]
}

export interface Project {
  slug: string
  name: string
  description: string
  longDescription: string[]
  tags: string[]
  stack: StackItem[]
  whatILearned: string[]
  github?: string
  live?: string
  highlight?: boolean
  images?: string[]
}

export const projects: Project[] = [
  {
    slug: 'the-grind',
    name: 'The Grind',
    description:
      'A LoL eSports analytics platform for a competitive team — tracking player performance, scouting opponents, and visualizing trends with data from the Riot Games API and Prime League.',
    longDescription: [
      'The Grind is a full-stack analytics platform built for Infinity eSports, a competitive League of Legends team. It scrapes match data from the Prime League website, pulls player stats from the Riot Games API, and visualizes performance trends to support team strategy.',
      'Features include a live leaderboard with rank snapshots, player performance graphs (Chart.js), opponent scouting with champion and ban trend analysis, and CSV data export. The platform is built with Next.js 15 App Router, React 19, TypeScript, and PostgreSQL (Neon) — deployed on Vercel.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Riot API'],
    stack: [
      { category: 'Frontend', items: ['Next.js 15', 'React 19', 'Tailwind CSS 4', 'Chart.js'] },
      { category: 'Backend', items: ['Next.js API Routes', 'PostgreSQL (Neon)', 'Riot Games API'] },
      { category: 'Data', items: ['Cheerio (web scraping)', 'CSV export'] },
      { category: 'Infrastructure', items: ['Vercel', 'TypeScript 5'] },
    ],
    whatILearned: [
      'Building API routes that aggregate and compare data from external APIs',
      'Web scraping with Cheerio for match schedule and team data',
      'Data visualization with Chart.js and react-chartjs-2',
      'PostgreSQL with Neon serverless driver for rank snapshots',
      'TypeScript strict mode in a full-stack Next.js app',
    ],
    github: 'https://github.com/rurfy/the-grind',
    highlight: true,
  },
  {
    slug: 'onepiece-inventory',
    name: 'One Piece Inventory',
    description:
      'A full-stack card collection tracker for the One Piece TCG — manage your inventory, build decks, check completion status, and monitor market prices with real-time CardMarket scraping.',
    longDescription: [
      'One Piece Inventory is a web app for tracking your One Piece Trading Card Game collection. It connects to Firebase for real-time inventory management with multi-provider authentication (Google, Apple, Discord), lets you import and manage deck lists, and shows deck completion status with missing cards and tradeable extras.',
      'The app scrapes CardMarket for live market prices, caches them in Firestore, and calculates your total collection value. Built with Next.js 16 App Router, React 19, TypeScript, and Firebase — deployed on Vercel. Uses react-window for virtualized rendering of large card collections.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Firebase', 'Cheerio'],
    stack: [
      { category: 'Frontend', items: ['Next.js 16', 'React 19', 'shadcn/ui', 'Tailwind CSS 4'] },
      { category: 'Backend', items: ['Firebase Auth', 'Cloud Firestore'] },
      { category: 'Data', items: ['Cheerio (CardMarket scraping)', 'react-window'] },
    ],
    whatILearned: [
      'Firebase real-time listeners with persistent local caching',
      'Web scraping with Cheerio for CardMarket price data',
      'Deck building logic with ownership tracking and completion checks',
      'Virtualized rendering with react-window for large datasets',
    ],
    github: 'https://github.com/rurfy/onepiece-inventory',
    live: 'https://onepiece-inventory.vercel.app',
    highlight: true,
  },
  {
    slug: 'project-o',
    name: 'Project-O',
    description:
      'An automated One Piece TCG card sorter — uses computer vision to identify cards via camera, then routes them through an Arduino-controlled chute into sorted bins using a 6-pass radix sort algorithm.',
    longDescription: [
      'Project-O is a physical card sorting machine for the One Piece Trading Card Game. It uses OpenCV and perceptual hashing (dhash) to identify individual cards from a camera feed, then sends serial commands to an Arduino/ESP32 that controls a rotating chute to route each card into the correct bin. After 6 passes of radix sort, hundreds of cards end up in perfect canonical order.',
      'The system includes a full computer vision pipeline (edge detection, perspective warp, hash matching with OCR tie-breaking), a Python sort controller with session logging, and 3D-printable mechanical parts designed in OpenSCAD. Cards are encoded into 6-digit canonical keys for sorting across card sets (OP, EB, ST, PRB, P).',
    ],
    tags: ['Python', 'OpenCV', 'Arduino', 'Computer Vision', '3D Printing'],
    stack: [
      { category: 'Vision', items: ['Python', 'OpenCV', 'imagehash', 'NumPy'] },
      { category: 'Hardware', items: ['Arduino/ESP32', 'pyserial'] },
      { category: 'Mechanical', items: ['OpenSCAD', '3D printing'] },
    ],
    whatILearned: [
      'Perceptual hashing (dhash) for fast image matching',
      'Radix sort applied to physical card sorting with 11 bins',
      'Serial communication between Python and Arduino',
      'Designing 3D-printable mechanical parts in OpenSCAD',
    ],
    github: 'https://github.com/rurfy/project-o',
    highlight: true,
  },
  {
    slug: 'beerpong-app',
    name: 'Beerpong App',
    description:
      'A mobile app for tracking beer pong games, scores, and stats with friends. Built with Flutter and Firebase, featuring real-time game syncing, player profiles, and leaderboards.',
    longDescription: [
      'Beerpong App is a cross-platform mobile app built with Flutter and Firebase that brings real-time score tracking to beer pong nights. It supports multiplayer game sessions, player profiles, and live leaderboards — no more arguments about the score. Games sync instantly across devices using Firestore\'s real-time listeners.',
      'The app is live and actively used by a growing group of friends. It handles authentication via Google and Apple Sign-In, stores game history, and tracks stats per player. I worked on it together with my friend Throribus, who handles hosting and operations.',
    ],
    tags: ['Flutter', 'Firebase', 'Dart', 'iOS', 'Android'],
    stack: [
      { category: 'Mobile', items: ['Flutter', 'Dart'] },
      { category: 'Backend', items: ['Firebase Authentication', 'Cloud Firestore'] },
      { category: 'Error Tracking', items: ['Sentry'] },
    ],
    whatILearned: [
      'Real-time data sync with Firestore listeners',
      'Flutter state management at scale',
      'iOS and Android App Store deployment',
      'Firebase Authentication (Google + Apple Sign-In)',
      'Collaborating on a live production app',
    ],
    github: 'https://github.com/rurfy',
    highlight: true,
  },
  {
    slug: 'habit-tracker',
    name: 'Habit Tracker',
    description:
      'A gamified habit-building app built with Flutter that turns daily routines into a progression system. Earn XP, build streaks, and level up — making habit formation feel rewarding.',
    longDescription: [
      'Habit Tracker is a gamified habit-building app built with Flutter that turns daily routines into a progression system. Users earn XP for completing habits, build streaks, and level up — making the grind of building new habits feel rewarding rather than tedious. The app runs on both mobile and web from a single Flutter codebase.',
      'I built this project to explore gamification mechanics and the Provider state management pattern. The XP and streak system required careful state design to stay consistent across sessions and platforms.',
    ],
    tags: ['Flutter', 'Dart', 'Provider', 'Web', 'Mobile'],
    stack: [
      { category: 'Framework', items: ['Flutter', 'Dart'] },
      { category: 'State Management', items: ['Provider'] },
      { category: 'Persistence', items: ['Local storage'] },
      { category: 'Platforms', items: ['Web', 'Mobile'] },
    ],
    whatILearned: [
      'Provider pattern for complex shared state',
      'Gamification design — XP curves, streak logic',
      'Building one Flutter codebase for both web and mobile',
      'Persisting state locally across app restarts',
    ],
    github: 'https://github.com/rurfy/habit-tracker',
  },
  {
    slug: 'sustainability-ai',
    name: 'Sustainability AI',
    description:
      'A research project combining YOLOv5 object detection with Carbontracker to measure the carbon footprint of running ML inference — making the environmental cost of AI visible.',
    longDescription: [
      'Sustainability AI is a research project that combines YOLOv5 object detection with Carbontracker to measure the carbon footprint of running machine learning inference. The goal: make the environmental cost of AI visible, not invisible.',
      'The project tracks GPU energy consumption during YOLOv5 detection runs and reports estimated CO₂ emissions per inference batch. It was built as an experiment in carbon-aware computing — understanding not just what AI can do, but what it costs the planet to do it.',
    ],
    tags: ['Python', 'YOLOv5', 'PyTorch', 'Carbontracker', 'ML'],
    stack: [
      { category: 'Language', items: ['Python'] },
      { category: 'Model', items: ['YOLOv5'] },
      { category: 'Deep Learning', items: ['PyTorch'] },
      { category: 'Emissions Tracking', items: ['Carbontracker'] },
    ],
    whatILearned: [
      'Object detection pipeline setup with YOLOv5',
      'Measuring ML model energy consumption with Carbontracker',
      'Carbon-aware computing concepts',
      'Research-style Python project structure',
    ],
    github: 'https://github.com/rurfy/Sustainablity-AI',
  },
]
