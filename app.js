// config.js is loaded before this file via a script tag

// --- PLAYLIST & TRACK DATA ---
const PLAYLISTS = {
  focus: [
    { title: "Tôzen", artist: "Chillhop Beats", url: "assets/audio/music/lofi_02_tozen.mp3" },
    { title: "Apple Juice", artist: "Chillhop Music", url: "assets/audio/music/lofi_01_apple_juice.mp3" },
    { title: "Swiss", artist: "Cozy Lofi Study", url: "assets/audio/music/lofi_03_swiss.mp3" },
    { title: "Endless Sunset", artist: "Lofi Sunset Radio", url: "assets/audio/music/lofi_04_endless_sunset.mp3" },
    { title: "Floating Vibes", artist: "Dreamhop Records", url: "assets/audio/music/lofi_05_floating_vibes.mp3" },
    { title: "Missing Earth", artist: "hoogway (Kupla)", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/01%20hoogway%20-%20Missing%20Earth%20%28Kupla%20Master%29.mp3" },
    { title: "Pale Moon", artist: "Dr. Dundiff x Allem Iversom", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/06%20Dr.%20Dundiff%20x%20Allem%20Iversom%20-%20Pale%20Moon%20%28Kupla%20Master2%29%20%281%29.mp3" },
    { title: "Waves", artist: "Chillhop Essentials", url: "https://stream.chillhop.com/mp3/8914" },
    { title: "With You", artist: "Lofi Garden", url: "https://stream.chillhop.com/mp3/8941" },
    { title: "Wondering", artist: "Night Owl Lofi", url: "https://stream.chillhop.com/mp3/8943" },
    { title: "You", artist: "Cocabona", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/02%20Cocabona%20-%20You%20%28Kupla%20Master%29.mp3" },
    { title: "Ruby", artist: "Sleepermane x Sebastian Kamae", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/03%20Sleepermane%20x%20Sebastian%20Kamae%20-%20Ruby%20%28Kupla%20Master%29%20%281%29.mp3" },
    { title: "Ships", artist: "Elior x eaup", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/04%20Elior%20x%20eaup%20-%20Ships%20%28Kupla%20Master%29.mp3" },
    { title: "VHS", artist: "Spencer Hunt x WYS", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/05%20Spencer%20Hunt%20x%20WYS%20-%20VHS%20%28Kupla%20Master%29.mp3" },
    { title: "Puddles", artist: "E I S U", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/07%20E%20I%20S%20U%20-%20Puddles%20%28Kupla%20Master%29.mp3" },
    { title: "Honey & Lemon", artist: "lilac", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/08%20lilac%20-%20Honey%20_%20Lemon%20%28Kupla%20Master%29.mp3" },
    { title: "Nautilus", artist: "WYS", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/09%20WYS%20-%20Nautilus%20%28Kupla%20Master%29.mp3" },
    { title: "Compassion", artist: "Steezy Prime x Spencer Hunt", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/10%20Steezy%20Prime%20x%20Spencer%20Hunt%20-%20Compassion%20%28Kupla%20Master%29.mp3" },
    { title: "It's Going to Be a Good Day", artist: "ocha", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/11%20ocha%20-%20It_s%20Going%20to%20Be%20a%20Good%20Day%20%28Kupla%20Master%29.mp3" },
    { title: "Midnight Snack", artist: "Purrple Cat", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/12%20purrple%20cat%20-%20Midnight%20Snack%20%28Kupl%20Master%29.mp3" },
    { title: "Infused", artist: "Yasper x Glimlip", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/13%20Yasper%20x%20Glimlip%20-%20Infused%20%28Kupla%20Master%29.mp3" },
    { title: "Night Owls", artist: "Casioo x Sleepermane", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/17%20Casioo%20x%20Sleepermane%20-%20Night%20Owls%20%28Kupla%20Master%29.mp3" },
    { title: "Stars and Chimneys", artist: "Kalaido", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/19%20Kalaido%20-%20Stars%20and%20Chimneys%20%28Kupla%20Master%29.mp3" },
    { title: "Drowsy", artist: "brillion.", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/24%20brillion.%20-%20Drowsy%20%28Kupla%20Master%29.mp3" }
  ],
  cafe: [
    { title: "Tôzen", artist: "Chillhop Beats", url: "assets/audio/music/lofi_02_tozen.mp3" },
    { title: "Apple Juice", artist: "Chillhop Music", url: "assets/audio/music/lofi_01_apple_juice.mp3" },
    { title: "Swiss", artist: "Cozy Lofi Study", url: "assets/audio/music/lofi_03_swiss.mp3" },
    { title: "Floating Vibes", artist: "Dreamhop Records", url: "assets/audio/music/lofi_05_floating_vibes.mp3" },
    { title: "Waves", artist: "Chillhop Essentials", url: "https://stream.chillhop.com/mp3/8914" },
    { title: "Honey & Lemon", artist: "lilac", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/08%20lilac%20-%20Honey%20_%20Lemon%20%28Kupla%20Master%29.mp3" },
    { title: "It's Going to Be a Good Day", artist: "ocha", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/11%20ocha%20-%20It_s%20Going%20to%20Be%20a%20Good%20Day%20%28Kupla%20Master%29.mp3" },
    { title: "Infused", artist: "Yasper x Glimlip", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/13%20Yasper%20x%20Glimlip%20-%20Infused%20%28Kupla%20Master%29.mp3" },
    { title: "You", artist: "Cocabona", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/02%20Cocabona%20-%20You%20%28Kupla%20Master%29.mp3" }
  ],
  dream: [
    { title: "Endless Sunset", artist: "Lofi Sunset Radio", url: "assets/audio/music/lofi_04_endless_sunset.mp3" },
    { title: "Missing Earth", artist: "hoogway (Kupla)", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/01%20hoogway%20-%20Missing%20Earth%20%28Kupla%20Master%29.mp3" },
    { title: "Pale Moon", artist: "Dr. Dundiff x Allem Iversom", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/06%20Dr.%20Dundiff%20x%20Allem%20Iversom%20-%20Pale%20Moon%20%28Kupla%20Master2%29%20%281%29.mp3" },
    { title: "Wondering", artist: "Night Owl Lofi", url: "https://stream.chillhop.com/mp3/8943" },
    { title: "Ships", artist: "Elior x eaup", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/04%20Elior%20x%20eaup%20-%20Ships%20%28Kupla%20Master%29.mp3" },
    { title: "Nautilus", artist: "WYS", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/09%20WYS%20-%20Nautilus%20%28Kupla%20Master%29.mp3" },
    { title: "Midnight Snack", artist: "Purrple Cat", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/12%20purrple%20cat%20-%20Midnight%20Snack%20%28Kupl%20Master%29.mp3" },
    { title: "Stars and Chimneys", artist: "Kalaido", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/19%20Kalaido%20-%20Stars%20and%20Chimneys%20%28Kupla%20Master%29.mp3" },
    { title: "Drowsy", artist: "brillion.", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/24%20brillion.%20-%20Drowsy%20%28Kupla%20Master%29.mp3" }
  ],
  jazz: [
    { title: "Tôzen", artist: "Chillhop Beats", url: "assets/audio/music/lofi_02_tozen.mp3" },
    { title: "With You", artist: "Lofi Garden", url: "https://stream.chillhop.com/mp3/8941" },
    { title: "Swiss", artist: "Cozy Lofi Study", url: "assets/audio/music/lofi_03_swiss.mp3" },
    { title: "Ruby", artist: "Sleepermane x Sebastian Kamae", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/03%20Sleepermane%20x%20Sebastian%20Kamae%20-%20Ruby%20%28Kupla%20Master%29%20%281%29.mp3" },
    { title: "Infused", artist: "Yasper x Glimlip", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/13%20Yasper%20x%20Glimlip%20-%20Infused%20%28Kupla%20Master%29.mp3" },
    { title: "Compassion", artist: "Steezy Prime x Spencer Hunt", url: "https://archive.org/download/lofigirl/2-AM-Study-Session/10%20Steezy%20Prime%20x%20Spencer%20Hunt%20-%20Compassion%20%28Kupla%20Master%29.mp3" }
  ],
  durga_puja: [
    { title: "Tôzen", artist: "Chillhop Beats", url: "assets/audio/music/lofi_02_tozen.mp3" },
    { title: "Apple Juice", artist: "Chillhop Music", url: "assets/audio/music/lofi_01_apple_juice.mp3" },
    { title: "Swiss", artist: "Cozy Lofi Study", url: "assets/audio/music/lofi_03_swiss.mp3" },
    { title: "Endless Sunset", artist: "Lofi Sunset Radio", url: "assets/audio/music/lofi_04_endless_sunset.mp3" },
    { title: "Floating Vibes", artist: "Dreamhop Records", url: "assets/audio/music/lofi_05_floating_vibes.mp3" }
  ],
  kali_puja: [
    { title: "Tôzen", artist: "Chillhop Beats", url: "assets/audio/music/lofi_02_tozen.mp3" },
    { title: "Floating Vibes", artist: "Dreamhop Records", url: "assets/audio/music/lofi_05_floating_vibes.mp3" },
    { title: "Swiss", artist: "Cozy Lofi Study", url: "assets/audio/music/lofi_03_swiss.mp3" },
    { title: "Apple Juice", artist: "Chillhop Music", url: "assets/audio/music/lofi_01_apple_juice.mp3" },
    { title: "Endless Sunset", artist: "Lofi Sunset Radio", url: "assets/audio/music/lofi_04_endless_sunset.mp3" }
  ]
};

// --- COMPLETE CATALOG OF SONGS FOR ON-SCREEN CRT MENU ---
const ALL_TRACKS = [
  // Lofi Chill & Study Beats
  {
    id: "lofi_02",
    vibe: "focus",
    index: 0,
    title: "Tôzen",
    artist: "Chillhop Beats",
    category: "lofi",
    tag: "Study Beats",
    url: "assets/audio/music/lofi_02_tozen.mp3"
  },
  {
    id: "lofi_01",
    vibe: "focus",
    index: 1,
    title: "Apple Juice",
    artist: "Chillhop Music",
    category: "lofi",
    tag: "Chillhop",
    url: "assets/audio/music/lofi_01_apple_juice.mp3"
  },
  {
    id: "lofi_03",
    vibe: "focus",
    index: 2,
    title: "Swiss",
    artist: "Cozy Lofi Study",
    category: "lofi",
    tag: "Cozy Study",
    url: "assets/audio/music/lofi_03_swiss.mp3"
  },
  {
    id: "lofi_04",
    vibe: "focus",
    index: 3,
    title: "Endless Sunset",
    artist: "Lofi Sunset Radio",
    category: "lofi",
    tag: "Sunset Vibes",
    url: "assets/audio/music/lofi_04_endless_sunset.mp3"
  },
  {
    id: "lofi_05",
    vibe: "focus",
    index: 4,
    title: "Floating Vibes",
    artist: "Dreamhop Records",
    category: "lofi",
    tag: "Dreamhop",
    url: "assets/audio/music/lofi_05_floating_vibes.mp3"
  },
  {
    id: "lofi_06",
    vibe: "focus",
    index: 5,
    title: "Missing Earth",
    artist: "hoogway (Kupla)",
    category: "lofi",
    tag: "LofiGirl",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/01%20hoogway%20-%20Missing%20Earth%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_07",
    vibe: "focus",
    index: 6,
    title: "Pale Moon",
    artist: "Dr. Dundiff x Allem Iversom",
    category: "lofi",
    tag: "LofiGirl",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/06%20Dr.%20Dundiff%20x%20Allem%20Iversom%20-%20Pale%20Moon%20%28Kupla%20Master2%29%20%281%29.mp3"
  },
  {
    id: "lofi_08",
    vibe: "focus",
    index: 7,
    title: "Waves",
    artist: "Chillhop Essentials",
    category: "lofi",
    tag: "Chillhop",
    url: "https://stream.chillhop.com/mp3/8914"
  },
  {
    id: "lofi_09",
    vibe: "focus",
    index: 8,
    title: "With You",
    artist: "Lofi Garden",
    category: "lofi",
    tag: "Chillhop",
    url: "https://stream.chillhop.com/mp3/8941"
  },
  {
    id: "lofi_10",
    vibe: "focus",
    index: 9,
    title: "Wondering",
    artist: "Night Owl Lofi",
    category: "lofi",
    tag: "Night Lofi",
    url: "https://stream.chillhop.com/mp3/8943"
  },
  {
    id: "lofi_11",
    vibe: "focus",
    index: 10,
    title: "You",
    artist: "Cocabona",
    category: "lofi",
    tag: "Chillhop",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/02%20Cocabona%20-%20You%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_12",
    vibe: "focus",
    index: 11,
    title: "Ruby",
    artist: "Sleepermane x Sebastian Kamae",
    category: "lofi",
    tag: "Late Night",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/03%20Sleepermane%20x%20Sebastian%20Kamae%20-%20Ruby%20%28Kupla%20Master%29%20%281%29.mp3"
  },
  {
    id: "lofi_13",
    vibe: "focus",
    index: 12,
    title: "Ships",
    artist: "Elior x eaup",
    category: "lofi",
    tag: "Dreamhop",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/04%20Elior%20x%20eaup%20-%20Ships%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_14",
    vibe: "focus",
    index: 13,
    title: "VHS",
    artist: "Spencer Hunt x WYS",
    category: "lofi",
    tag: "Chillhop",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/05%20Spencer%20Hunt%20x%20WYS%20-%20VHS%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_15",
    vibe: "focus",
    index: 14,
    title: "Puddles",
    artist: "E I S U",
    category: "lofi",
    tag: "Rainy Vibes",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/07%20E%20I%20S%20U%20-%20Puddles%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_16",
    vibe: "focus",
    index: 15,
    title: "Honey & Lemon",
    artist: "lilac",
    category: "lofi",
    tag: "Cozy Study",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/08%20lilac%20-%20Honey%20_%20Lemon%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_17",
    vibe: "focus",
    index: 16,
    title: "Nautilus",
    artist: "WYS",
    category: "lofi",
    tag: "Deep Focus",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/09%20WYS%20-%20Nautilus%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_18",
    vibe: "focus",
    index: 17,
    title: "Compassion",
    artist: "Steezy Prime x Spencer Hunt",
    category: "lofi",
    tag: "Chillhop",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/10%20Steezy%20Prime%20x%20Spencer%20Hunt%20-%20Compassion%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_19",
    vibe: "focus",
    index: 18,
    title: "It's Going to Be a Good Day",
    artist: "ocha",
    category: "lofi",
    tag: "Mellow Chill",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/11%20ocha%20-%20It_s%20Going%20to%20Be%20a%20Good%20Day%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_20",
    vibe: "focus",
    index: 19,
    title: "Midnight Snack",
    artist: "Purrple Cat",
    category: "lofi",
    tag: "Night Lofi",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/12%20purrple%20cat%20-%20Midnight%20Snack%20%28Kupl%20Master%29.mp3"
  },
  {
    id: "lofi_21",
    vibe: "focus",
    index: 20,
    title: "Infused",
    artist: "Yasper x Glimlip",
    category: "lofi",
    tag: "Chillhop",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/13%20Yasper%20x%20Glimlip%20-%20Infused%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_22",
    vibe: "focus",
    index: 21,
    title: "Night Owls",
    artist: "Casioo x Sleepermane",
    category: "lofi",
    tag: "Night Lofi",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/17%20Casioo%20x%20Sleepermane%20-%20Night%20Owls%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_23",
    vibe: "focus",
    index: 22,
    title: "Stars and Chimneys",
    artist: "Kalaido",
    category: "lofi",
    tag: "Deep Focus",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/19%20Kalaido%20-%20Stars%20and%20Chimneys%20%28Kupla%20Master%29.mp3"
  },
  {
    id: "lofi_24",
    vibe: "focus",
    index: 23,
    title: "Drowsy",
    artist: "brillion.",
    category: "lofi",
    tag: "Late Night",
    url: "https://archive.org/download/lofigirl/2-AM-Study-Session/24%20brillion.%20-%20Drowsy%20%28Kupla%20Master%29.mp3"
  }
];

const SOUNDSCAPES = {
  rain: "https://www.soundjay.com/nature/sounds/rain-07.mp3",
  campfire: "https://www.soundjay.com/nature/sounds/fire-1.mp3",
  keyboard: "https://assets.mixkit.co/active_storage/sfx/1676/1676-84.wav",
  cafe: "https://assets.mixkit.co/active_storage/sfx/2869/2869-84.wav",
  wind: "https://www.soundjay.com/nature/sounds/wind-weather-01.mp3"
};

// --- APPLICATION STATE ---
let state = {
  username: "Anonymous Study Bud",
  roomId: "cozy-study",
  currentVibe: "focus",
  currentTrackIndex: 0,
  isPlaying: false,
  trackStartTime: 0,
  syncOffset: 0, // difference between server and local time
  soundscapeVols: { rain: 0, campfire: 0, keyboard: 0, cafe: 0, wind: 0 },
  lampOn: true,
  mugWarm: false,
  isBlizzardActive: false,
  isLibraryRainActive: false,
  isForestRainActive: false,
  isForestCabinRainActive: false,
  isDurgaPujaRainActive: false,
  isKaliPujaRainActive: false,
  isDarjeelingRainActive: false,
  isSaharaNightActive: true,
  isSaharaSandstormActive: false,
  currentTheme: 'scene2',
  hotspots: {
    blizzard: false,
    fireplace: false,
    libraryRain: false,
    forestRain: false,
    forestCabinRain: false,
    durgaDhak: false,
    kaliFireworks: false,
    kaliShyama: false,
    darjeelingChai: false,
    darjeelingRain: false,
    darjeelingBirds: false,
    saharaCampfire: false,
    saharaWind: false,
    saharaTea: false
  },
  hotspotVolumes: {
    blizzard: 0.7,
    fireplace: 0.7,
    libraryRain: 0.8,
    forestRain: 0.8,
    forestCabinRain: 0.8,
    durgaDhak: 0.7,
    kaliFireworks: 0.85,
    kaliShyama: 0.7,
    darjeelingChai: 0.75,
    darjeelingRain: 0.8,
    darjeelingBirds: 0.7,
    saharaCampfire: 0.8,
    saharaWind: 0.7,
    saharaTea: 0.75
  },
  todos: []
};

// --- INTERACTIVE SCENE HOTSPOT AUDIOS ---
const hotspotAudios = {
  blizzard: new Audio('assets/audio/soundscapes/blizzard.m4a?v=blizzard_v1'),
  fireplace: new Audio('assets/audio/soundscapes/fireplace.m4a'),
  libraryRain: new Audio('assets/audio/soundscapes/rain.m4a?v=library_rain_v4'),
  forestRain: new Audio('assets/audio/soundscapes/forest_rain.m4a?v=forest_rain_v1'),
  forestCabinRain: new Audio('assets/audio/soundscapes/forest_rain.m4a?v=forest_rain_v1'),
  durgaDhak: new Audio('assets/audio/music/durga_puja_dhak_beats.mp3'),
  kaliFireworks: new Audio('assets/audio/soundscapes/fireworks.m4a?v=pure_v2'),
  kaliShyama: new Audio('assets/audio/music/kali_puja_shyama_sangeet.m4a'),
  darjeelingChai: new Audio('assets/audio/soundscapes/darjeeling_tea.m4a?v=dj1'),
  darjeelingRain: new Audio('assets/audio/soundscapes/darjeeling_rain.m4a?v=dj1'),
  darjeelingBirds: new Audio('assets/audio/soundscapes/darjeeling_birds.m4a?v=dj1'),
  saharaCampfire: new Audio('assets/audio/soundscapes/sahara_campfire.m4a?v=sh1'),
  saharaWind: new Audio('assets/audio/soundscapes/sahara_wind.m4a?v=sh1'),
  saharaTea: new Audio('assets/audio/soundscapes/sahara_tea.m4a?v=sh1')
};

for (const key in hotspotAudios) {
  if (hotspotAudios[key]) {
    hotspotAudios[key].loop = true;
    hotspotAudios[key].volume = 0.7;
  }
}

// Global Foreground Processing State (Hoisted to prevent TDZ errors)
let cabinForegroundProcessed = false;
window.foregroundCabinCanvas = null;
let libraryForegroundProcessed = false;
window.foregroundLibraryCanvas = null;

// Audio Nodes/Context
let audioContext = null;
let musicAudio = new Audio();
let musicSource = null;
let soundscapeElements = {}; // Map of audio tags for soundscapes
let soundscapeGainNodes = {}; // Volume nodes for soundscapes
let masterGainNode = null;
let isMuted = false;
let previousMasterVolume = 0.7;

// Firebase References
let db = null;
let unsubRoom = null;
let unsubMembers = null;
let unsubTodos = null;

// Mock Mode peers
let mockPeers = [
  { name: "LofiPanda 🐼", avatar: "🐼" },
  { name: "ChillCat 🐱", avatar: "🐱" },
  { name: "StudyKoala 🐨", avatar: "🐨" }
];

// --- HTML ELEMENT REFERENCES ---
const elBtnPlay = document.getElementById('btnPlay');
const elBtnPrev = document.getElementById('btnPrev');
const elBtnNext = document.getElementById('btnNext');
const elBtnMute = document.getElementById('btnMute');
const elSliderMaster = document.getElementById('slider-master');
const elTrackTitle = document.getElementById('trackTitle');
const elTrackArtist = document.getElementById('trackArtist');
const elProgressBar = document.getElementById('progressBar');
const elProgressContainer = document.getElementById('progressContainer');
const elTimeCurrent = document.getElementById('timeCurrent');
const elTimeDuration = document.getElementById('timeDuration');
const elTrackIcon = document.querySelector('.track-thumbnail');

// Scene 2 Elements (Winter Cabin)
const elScene2 = document.getElementById('scene2-container');
const elBgMountains = document.getElementById('bg-mountains');
const elBlizzardCanvas = document.getElementById('blizzard-canvas');
const elCabinForegroundLayer = document.getElementById('cabin-foreground-layer');

// Scene Library Elements (Grand Library)
const elSceneLibrary = document.getElementById('scene-library-container');
const elBgLibrary = document.getElementById('bg-library');
const elLibraryRainCanvas = document.getElementById('library-rain-canvas');
const elLibraryForegroundLayer = document.getElementById('library-foreground-layer');

// Scene Forest Elements (Forest House)
const elSceneForest = document.getElementById('scene-forest-container');
const elBgForest = document.getElementById('bg-forest');
const elForestFireflyCanvas = document.getElementById('forest-firefly-canvas');
const elForestRainCanvas = document.getElementById('forest-rain-canvas');

// Scene Forest Cabin Elements (Study Desk in the Woods)
const elSceneForestCabin = document.getElementById('scene-forest-cabin-container');
const elBgForestCabin = document.getElementById('bg-forest-cabin');
const elForestCabinFireflyCanvas = document.getElementById('forest-cabin-firefly-canvas');
const elForestCabinRainCanvas = document.getElementById('forest-cabin-rain-canvas');
const elForestCabinForeground = document.getElementById('forest-cabin-foreground');

// Scene Durga Puja Elements (Kolkata Pandal & Evening Street)
const elSceneDurgaPuja = document.getElementById('scene-durga-puja-container');
const elBgDurgaPuja = document.getElementById('bg-durga-puja');
const elDurgaSparklesCanvas = document.getElementById('durga-sparkles-canvas');
const elDurgaRainCanvas = document.getElementById('durga-rain-canvas');

// Scene Kali Puja Elements (Night Sky, Fireworks & Pandal)
const elSceneKaliPuja = document.getElementById('scene-kali-puja-container');
const elBgKaliSky = document.getElementById('bg-kali-sky');
const elKaliFireworksContainer = document.getElementById('kali-fireworks-container');
const elKaliLanterns = document.getElementById('kali-lanterns');
const elKaliPandalFg = document.getElementById('kali-pandal-fg');
const elKaliRainCanvas = document.getElementById('kali-rain-canvas');

// Scene Darjeeling Elements (Himalayan Tea Estate Veranda)
const elSceneDarjeeling = document.getElementById('scene-darjeeling-container');
const elBgDarjeelingSunny = document.getElementById('bg-darjeeling-sunny');
const elBgDarjeelingRainy = document.getElementById('bg-darjeeling-rainy');
const elFgDarjeelingSunny = document.getElementById('fg-darjeeling-sunny');
const elFgDarjeelingRainy = document.getElementById('fg-darjeeling-rainy');
const elDarjeelingSunbeamsCanvas = document.getElementById('darjeeling-sunbeams-canvas');
const elDarjeelingRainCanvas = document.getElementById('darjeeling-rain-canvas');

// Scene Sahara Elements (Bedouin Tent & Starry Oasis)
const elSceneSahara = document.getElementById('scene-sahara-container');
const elBgSaharaSunset = document.getElementById('bg-sahara-sunset');
const elBgSaharaNight = document.getElementById('bg-sahara-night');
const elFgSaharaTent = document.getElementById('fg-sahara-tent');
const elSaharaStarsCanvas = document.getElementById('sahara-stars-canvas');
const elSaharaSandCanvas = document.getElementById('sahara-sand-canvas');

const elRoomNameDisplay = document.getElementById('roomNameDisplay');
const elSyncStatus = document.getElementById('syncStatus');
const elSyncText = document.getElementById('syncText');
const elMockModeIndicator = document.getElementById('mockModeIndicator');

const elListenersCount = document.getElementById('listenersCount');
const elListenersList = document.getElementById('listenersList');

// Slide Panels & Bottom Bar Toggles
const elPanelRight = document.getElementById('panelRight');
const elPanelProfile = document.getElementById('panelProfile');
const elToggleRightPanelBtn = document.getElementById('toggleRightPanelBtn');
const elToggleProfileBtn = document.getElementById('toggleProfileBtn');
const elToggleTodoBtn = document.getElementById('toggleTodoBtn');
const elClosePanelRight = document.getElementById('closePanelRight');
const elClosePanelProfile = document.getElementById('closePanelProfile');

// Profile & Analytics Elements
const elProfileAvatarDisplay = document.getElementById('profileAvatarDisplay');
const elChangeAvatarBtn = document.getElementById('changeAvatarBtn');
const elAvatarPickerDropdown = document.getElementById('avatarPickerDropdown');
const elProfileUsernameDisplay = document.getElementById('profileUsernameDisplay');
const elEditUsernameBtn = document.getElementById('editUsernameBtn');
const elProfileLevelBadge = document.getElementById('profileLevelBadge');
const elProfileStreakBadge = document.getElementById('profileStreakBadge');
const elXpValues = document.getElementById('xpValues');
const elXpBarFill = document.getElementById('xpBarFill');
const elStatTotalFocus = document.getElementById('statTotalFocus');
const elStatSessionsCount = document.getElementById('statSessionsCount');
const elStatTasksCount = document.getElementById('statTasksCount');
const elStatStreakCount = document.getElementById('statStreakCount');
const elGoalFraction = document.getElementById('goalFraction');
const elDailyGoalFill = document.getElementById('dailyGoalFill');
const elChartTotalWeek = document.getElementById('chartTotalWeek');
const elWeeklyBarsContainer = document.getElementById('weeklyBarsContainer');
const elBreakdownCabinPct = document.getElementById('breakdownCabinPct');
const elBreakdownCabinBar = document.getElementById('breakdownCabinBar');
const elBreakdownLibraryPct = document.getElementById('breakdownLibraryPct');
const elBreakdownLibraryBar = document.getElementById('breakdownLibraryBar');
const elBreakdownForestPct = document.getElementById('breakdownForestPct');
const elBreakdownForestBar = document.getElementById('breakdownForestBar');
const elBreakdownForestCabinPct = document.getElementById('breakdownForestCabinPct');
const elBreakdownForestCabinBar = document.getElementById('breakdownForestCabinBar');
const elBreakdownDurgaPct = document.getElementById('breakdownDurgaPct');
const elBreakdownDurgaBar = document.getElementById('breakdownDurgaBar');
const elBreakdownKaliPct = document.getElementById('breakdownKaliPct');
const elBreakdownKaliBar = document.getElementById('breakdownKaliBar');
const elBreakdownDarjeelingPct = document.getElementById('breakdownDarjeelingPct');
const elBreakdownDarjeelingBar = document.getElementById('breakdownDarjeelingBar');
const elBreakdownSaharaPct = document.getElementById('breakdownSaharaPct');
const elBreakdownSaharaBar = document.getElementById('breakdownSaharaBar');
const elAddQuickFocusBtn = document.getElementById('addQuickFocusBtn');
const elLogoutBtn = document.getElementById('logoutBtn');
const elDigitalClock = document.getElementById('digitalClock');
const elScreenClockWidget = document.getElementById('screenClockWidget');

// Focus & Rest Timer Widget Elements
const elScreenTimerWidget = document.getElementById('screenTimerWidget');
const elTimerPill = document.getElementById('timerPill');
const elTimerPhaseBadge = document.getElementById('timerPhaseBadge');
const elTimerPhaseText = document.getElementById('timerPhaseText');
const elTimerDisplay = document.getElementById('timerDisplay');
const elTimerPlayBtn = document.getElementById('timerPlayBtn');
const elTimerPlayIcon = document.getElementById('timerPlayIcon');
const elTimerResetBtn = document.getElementById('timerResetBtn');
const elTimerSettingsBtn = document.getElementById('timerSettingsBtn');
const elCloseTimerBtn = document.getElementById('closeTimerBtn');
const elToggleTimerBtn = document.getElementById('toggleTimerBtn');

// Timer Settings Elements
const elTimerSettingsModal = document.getElementById('timerSettingsModal');
const elCloseTimerSettingsBtn = document.getElementById('closeTimerSettingsBtn');
const elPreset25_5 = document.getElementById('preset25_5');
const elPreset50_10 = document.getElementById('preset50_10');
const elFocusTimeInput = document.getElementById('focusTimeInput');
const elRestTimeInput = document.getElementById('restTimeInput');
const elFocusDecBtn = document.getElementById('focusDecBtn');
const elFocusIncBtn = document.getElementById('focusIncBtn');
const elRestDecBtn = document.getElementById('restDecBtn');
const elRestIncBtn = document.getElementById('restIncBtn');
const elTimerStartApplyBtn = document.getElementById('timerStartApplyBtn');

const elPanelTodo = document.getElementById('panelTodo');
const elClosePanelTodo = document.getElementById('closePanelTodo');
const elTodoForm = document.getElementById('todoForm');
const elTodoInput = document.getElementById('todoInput');
const elTodoList = document.getElementById('todoList');
const elTodoProgressPill = document.getElementById('todoProgressPill');
const elTodoProgressBarFill = document.getElementById('todoProgressBarFill');
const elTodoEmptyState = document.getElementById('todoEmptyState');
const elTodoBottomActions = document.getElementById('todoBottomActions');
const elTodoStatusSummary = document.getElementById('todoStatusSummary');
const elClearCompletedTodoBtn = document.getElementById('clearCompletedTodoBtn');

// --- RETRO ENGINE CLASSES (Hoisted to avoid TDZ errors) ---

class BlizzardEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 35;
    this.wind = 0.2;
    this.isActive = false;
    this.running = true;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
    this.animate();
  }

  resize() {
    const container = document.getElementById('roomContainer');
    const dpr = window.devicePixelRatio || 1;
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(this.createParticle());
    }
  }

  createParticle() {
    if (this.isActive) {
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 4 + 4,
        speedX: Math.random() * 5 + 5,
        opacity: Math.random() * 0.5 + 0.3
      };
    } else {
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3
      };
    }
  }

  activateBlizzard() {
    this.isActive = true;
    this.numParticles = 500;
    this.wind = 8;
    this.init();
  }

  deactivateBlizzard() {
    this.isActive = false;
    this.numParticles = 35;
    this.wind = 0.2;
    this.init();
  }

  stop() { this.running = false; }
  start() {
    if (!this.running) {
      this.running = true;
      this.animate();
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (let p of this.particles) {
      this.ctx.globalAlpha = p.opacity;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      p.y += p.speedY;
      p.x += p.speedX + this.wind;
      if (p.y > this.height) { p.y = -10; p.x = Math.random() * this.width; }
      if (p.x > this.width) { p.x = -10; p.y = Math.random() * this.height; }
      else if (p.x < -10) { p.x = this.width + 10; p.y = Math.random() * this.height; }
    }
    requestAnimationFrame(() => this.animate());
  }
}

class LibraryRainEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.drops = [];
    this.numDrops = 60;
    this.running = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    const container = document.getElementById('roomContainer');
    const dpr = window.devicePixelRatio || 1;
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
  }

  init() {
    this.drops = [];
    for (let i = 0; i < this.numDrops; i++) {
      this.drops.push(this.createDrop(true));
    }
  }

  createDrop(randomY = false) {
    // Upper arched windows coordinates
    const minX = this.width * 0.53;
    const maxX = this.width * 0.74;
    const minY = this.height * 0.08;
    const maxY = this.height * 0.31;

    return {
      x: minX + Math.random() * (maxX - minX),
      y: randomY ? minY + Math.random() * (maxY - minY) : minY - 10,
      length: Math.random() * 12 + 8,
      speedY: Math.random() * 8 + 8,
      speedX: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.35,
      thickness: Math.random() * 1.2 + 0.8
    };
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    const maxY = this.height * 0.31;

    for (let d of this.drops) {
      const x2 = d.x + d.speedX;
      const y2 = d.y + d.length;

      const grad = this.ctx.createLinearGradient(d.x, d.y, x2, y2);
      grad.addColorStop(0, 'rgba(180, 205, 230, 0)');
      grad.addColorStop(0.6, `rgba(195, 218, 240, ${d.opacity * 0.5})`);
      grad.addColorStop(1, `rgba(215, 235, 255, ${d.opacity})`);

      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = d.thickness;
      this.ctx.lineCap = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(d.x, d.y);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();

      d.y += d.speedY;
      d.x += d.speedX * 0.5;

      if (d.y > maxY) {
        Object.assign(d, this.createDrop(false));
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

class ForestRainEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.running = false;
    this.animId = null;

    // Natural cinematic wind angle (~9 degrees slant to left)
    this.windAngle = -0.16;
    this.windX = Math.sin(this.windAngle);
    this.windY = Math.cos(this.windAngle);

    // 3 Distinct Parallax Depth Layers (Distant Drizzle, Midground Rain, Foreground Streaks)
    this.layers = [
      { count: 320, minLen: 10, maxLen: 22, minSpd: 22, maxSpd: 32, width: 0.6, baseAlpha: 0.12, color: [175, 195, 220] },
      { count: 150, minLen: 25, maxLen: 50, minSpd: 32, maxSpd: 44, width: 0.9, baseAlpha: 0.22, color: [195, 215, 235] },
      { count: 40,  minLen: 60, maxLen: 95, minSpd: 46, maxSpd: 62, width: 1.5, baseAlpha: 0.35, color: [220, 235, 255] }
    ];

    this.particles = [];
    this.splashes = [];
    this.mistTime = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    if (!this.canvas) return;
    const container = document.getElementById('roomContainer');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.dpr = dpr;
  }

  init() {
    this.particles = [];
    this.splashes = [];
    this.layers.forEach((cfg, layerIdx) => {
      for (let i = 0; i < cfg.count; i++) {
        this.particles.push(this.createParticle(cfg, layerIdx, true));
      }
    });
  }

  createParticle(cfg, layerIdx, randomY = false) {
    const dpr = this.dpr || 1;
    const speed = (cfg.minSpd + Math.random() * (cfg.maxSpd - cfg.minSpd)) * dpr;
    const length = (cfg.minLen + Math.random() * (cfg.maxLen - cfg.minLen)) * dpr;
    const margin = 140 * dpr;

    return {
      layerIdx,
      x: Math.random() * (this.width + margin * 2) - margin * 0.5,
      y: randomY ? Math.random() * this.height : -(Math.random() * 100 + 20) * dpr,
      speed,
      length,
      width: cfg.width * dpr,
      alpha: cfg.baseAlpha * (0.75 + Math.random() * 0.5),
      color: cfg.color
    };
  }

  createSplash(x, y, layerIdx) {
    const dpr = this.dpr || 1;
    const count = Math.random() < 0.6 ? 2 : 3;
    for (let i = 0; i < count; i++) {
      const angle = -Math.PI * 0.5 + (Math.random() - 0.5) * 1.4;
      const spd = (Math.random() * 2.2 + 1.0) * dpr;
      this.splashes.push({
        x: x + (Math.random() - 0.5) * 4 * dpr,
        y: y - Math.random() * 2 * dpr,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        radius: (Math.random() * 0.6 + 0.4) * dpr,
        alpha: 0.32,
        decay: Math.random() * 0.05 + 0.05
      });
    }
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    const dpr = this.dpr || 1;

    // 1. Atmospheric Ambient Ground Mist
    this.mistTime += 0.015;
    const mistY = this.height * 0.68;
    const mistH = this.height * 0.32;
    const mistGrad = this.ctx.createLinearGradient(0, mistY, 0, this.height);
    const mistAlpha = 0.035 + Math.sin(this.mistTime) * 0.012;
    mistGrad.addColorStop(0, `rgba(160, 185, 215, 0)`);
    mistGrad.addColorStop(0.5, `rgba(165, 190, 220, ${mistAlpha})`);
    mistGrad.addColorStop(1, `rgba(150, 175, 205, ${mistAlpha * 0.7})`);
    this.ctx.fillStyle = mistGrad;
    this.ctx.fillRect(0, mistY, this.width, mistH);

    // Warm Japanese house windows illumination zone
    const houseMinX = this.width * 0.44;
    const houseMaxX = this.width * 0.68;
    const houseMinY = this.height * 0.48;
    const houseMaxY = this.height * 0.74;

    // 2. Multi-layer Falling Rain Streaks (Tapered Motion Blur Gradients)
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      const cfg = this.layers[p.layerIdx];

      const dx = this.windX * p.length;
      const dy = this.windY * p.length;
      const x2 = p.x + dx;
      const y2 = p.y + dy;

      // Realistic environmental lighting reflection
      const inWarmLight = (p.x >= houseMinX && p.x <= houseMaxX && p.y >= houseMinY && p.y <= houseMaxY);
      const r = inWarmLight ? 255 : p.color[0];
      const g = inWarmLight ? 222 : p.color[1];
      const b = inWarmLight ? 175 : p.color[2];

      const grad = this.ctx.createLinearGradient(p.x, p.y, x2, y2);
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
      grad.addColorStop(0.65, `rgba(${r}, ${g}, ${b}, ${p.alpha * 0.5})`);
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, ${p.alpha})`);

      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = p.width;
      this.ctx.lineCap = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();

      p.x += this.windX * p.speed;
      p.y += this.windY * p.speed;

      // Natural ground curvature impact
      const groundY = this.height * (0.80 + Math.sin(p.x / this.width * Math.PI) * 0.08);

      if (p.y >= groundY) {
        if (p.layerIdx >= 1 && this.splashes.length < 45 && Math.random() < 0.22) {
          this.createSplash(p.x, groundY, p.layerIdx);
        }
        Object.assign(p, this.createParticle(cfg, p.layerIdx, false));
      } else if (p.y > this.height + 25 * dpr || p.x < -140 * dpr) {
        Object.assign(p, this.createParticle(cfg, p.layerIdx, false));
      }
    }

    // 3. Atomized Water Mist Particles on Surface Impact
    for (let i = this.splashes.length - 1; i >= 0; i--) {
      const s = this.splashes[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.12 * dpr;
      s.alpha -= s.decay;

      if (s.alpha <= 0) {
        this.splashes.splice(i, 1);
        continue;
      }

      this.ctx.fillStyle = `rgba(195, 220, 245, ${s.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

class ForestFireflyEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.running = false;
    this.animId = null;
    this.fireflies = [];
    this.numFireflies = 34;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    if (!this.canvas) return;
    const container = document.getElementById('roomContainer');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.dpr = dpr;
  }

  init() {
    this.fireflies = [];
    for (let i = 0; i < this.numFireflies; i++) {
      this.fireflies.push(this.createFirefly(true));
    }
  }

  createFirefly(randomInit = false) {
    const dpr = this.dpr || 1;
    const tierRand = Math.random();
    const tier = tierRand < 0.45 ? 0 : (tierRand < 0.82 ? 1 : 2);

    let coreRadius, glowRadius, maxAlpha, speed;
    if (tier === 0) {
      coreRadius = (Math.random() * 0.4 + 1.0) * dpr;
      glowRadius = (Math.random() * 3 + 8) * dpr;
      maxAlpha = Math.random() * 0.25 + 0.45;
      speed = (Math.random() * 0.25 + 0.2) * dpr;
    } else if (tier === 1) {
      coreRadius = (Math.random() * 0.6 + 1.6) * dpr;
      glowRadius = (Math.random() * 5 + 16) * dpr;
      maxAlpha = Math.random() * 0.25 + 0.70;
      speed = (Math.random() * 0.35 + 0.3) * dpr;
    } else {
      coreRadius = (Math.random() * 0.8 + 2.4) * dpr;
      glowRadius = (Math.random() * 8 + 28) * dpr;
      maxAlpha = Math.random() * 0.15 + 0.85;
      speed = (Math.random() * 0.45 + 0.45) * dpr;
    }

    return {
      tier,
      x: Math.random() * this.width,
      y: randomInit ? (Math.random() * this.height * 0.85 + this.height * 0.05) : (Math.random() < 0.5 ? this.height + 10 : Math.random() * this.height),
      angle: Math.random() * Math.PI * 2,
      targetSpeed: speed,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      coreRadius,
      glowRadius,
      maxAlpha,
      minAlpha: 0.04,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.025 + 0.018,
      hoverOffset: Math.random() * Math.PI * 2,
      wanderTimer: Math.floor(Math.random() * 60)
    };
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    const dpr = this.dpr || 1;

    for (let f of this.fireflies) {
      f.wanderTimer--;
      if (f.wanderTimer <= 0) {
        f.angle += (Math.random() - 0.5) * 1.2;
        f.wanderTimer = Math.floor(Math.random() * 40 + 30);
      }

      const targetVx = Math.cos(f.angle) * f.targetSpeed;
      const targetVy = Math.sin(f.angle) * f.targetSpeed - (0.07 * dpr);

      f.vx += (targetVx - f.vx) * 0.06;
      f.vy += (targetVy - f.vy) * 0.06;

      f.hoverOffset += 0.04;
      const hoverY = Math.sin(f.hoverOffset) * 0.25 * dpr;

      f.x += f.vx;
      f.y += f.vy + hoverY;

      const margin = 30 * dpr;
      if (f.x < -margin) f.x = this.width + margin;
      else if (f.x > this.width + margin) f.x = -margin;
      if (f.y < -margin) f.y = this.height + margin;
      else if (f.y > this.height + margin) f.y = -margin;

      f.pulsePhase += f.pulseSpeed;
      const sinVal = Math.sin(f.pulsePhase);
      const pulseFactor = Math.pow(Math.max(0, sinVal), 2.2);
      const currentAlpha = f.minAlpha + (f.maxAlpha - f.minAlpha) * pulseFactor;

      if (currentAlpha > 0.03) {
        const glowRad = f.glowRadius * (0.8 + pulseFactor * 0.35);

        const glowGrad = this.ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glowRad);
        glowGrad.addColorStop(0, `rgba(255, 255, 235, ${currentAlpha})`);
        glowGrad.addColorStop(0.25, `rgba(255, 230, 95, ${currentAlpha * 0.75})`);
        glowGrad.addColorStop(0.65, `rgba(255, 175, 40, ${currentAlpha * 0.22})`);
        glowGrad.addColorStop(1, 'rgba(255, 150, 20, 0)');

        this.ctx.fillStyle = glowGrad;
        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, glowRad, 0, Math.PI * 2);
        this.ctx.fill();

        const coreRad = f.coreRadius * (0.75 + pulseFactor * 0.35);
        this.ctx.fillStyle = `rgba(255, 255, 250, ${Math.min(1, currentAlpha * 1.3)})`;
        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, coreRad, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

class DarjeelingSunbeamsEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.running = false;
    this.animId = null;
    this.motes = [];
    this.time = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    if (!this.canvas) return;
    const container = document.getElementById('roomContainer');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.dpr = dpr;
  }

  init() {
    this.motes = [];
    const count = 45;
    const w = this.width || 800;
    const h = this.height || 600;
    for (let i = 0; i < count; i++) {
      this.motes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: (Math.random() * 2.2 + 0.8) * (this.dpr || 1),
        baseAlpha: Math.random() * 0.35 + 0.15,
        pulseSpeed: Math.random() * 0.03 + 0.012,
        phase: Math.random() * Math.PI * 2,
        vx: (Math.random() * 0.35 + 0.1) * (this.dpr || 1),
        vy: (Math.random() * 0.25 - 0.12) * (this.dpr || 1)
      });
    }
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.time += 0.015;

    // Soft golden morning sunbeam across the misty Himalayan valley
    const grad = this.ctx.createLinearGradient(0, 0, this.width * 0.85, this.height);
    const beamPulse = (Math.sin(this.time * 0.8) * 0.035) + 0.07;
    grad.addColorStop(0, `rgba(255, 238, 180, ${beamPulse + 0.04})`);
    grad.addColorStop(0.35, `rgba(255, 228, 155, ${beamPulse * 0.5})`);
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Drifting sunlit mountain mist particles
    for (let m of this.motes) {
      m.phase += m.pulseSpeed;
      m.x += m.vx;
      m.y += m.vy;

      if (m.x > this.width + 15) m.x = -15;
      if (m.y < -15) m.y = this.height + 15;
      if (m.y > this.height + 15) m.y = -15;

      const alpha = Math.max(0, m.baseAlpha + Math.sin(m.phase) * 0.2);
      this.ctx.beginPath();
      this.ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 248, 215, ${alpha})`;
      this.ctx.shadowBlur = 6 * (this.dpr || 1);
      this.ctx.shadowColor = 'rgba(255, 220, 130, 0.5)';
      this.ctx.fill();
    }
    this.ctx.shadowBlur = 0;

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

class SaharaStarsEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.running = false;
    this.animId = null;
    this.stars = [];
    this.shootingStars = [];
    this.nextShootingTime = 0;
    this.time = 0;
    this.isObscured = false;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    if (!this.canvas) return;
    const container = document.getElementById('roomContainer');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.dpr = dpr;
    this.init();
  }

  setObscured(val) {
    this.isObscured = !!val;
  }

  init() {
    this.stars = [];
    this.shootingStars = [];
    this.nextShootingTime = performance.now() + 1500;
    const count = 75;
    const w = this.width || 800;
    const h = this.height || 600;
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * w,
        y: Math.random() * (h * 0.72),
        radius: (Math.random() * 1.5 + 0.6) * (this.dpr || 1),
        baseAlpha: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.015,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.8 ? 'rgba(180, 220, 255,' : (Math.random() > 0.6 ? 'rgba(255, 235, 190,' : 'rgba(255, 255, 255,')
      });
    }
  }

  spawnShootingStar() {
    const w = this.width || 800;
    const h = this.height || 600;
    const startX = Math.random() * (w * 0.7) + (w * 0.1);
    const startY = Math.random() * (h * 0.35);
    const speed = (Math.random() * 7 + 14) * (this.dpr || 1);
    const angle = (Math.random() * 0.25 + 0.55) * Math.PI; // roughly downward right
    const length = (Math.random() * 60 + 90) * (this.dpr || 1);

    this.shootingStars.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      length: length,
      life: 0,
      maxLife: Math.floor(Math.random() * 18 + 28),
      size: (Math.random() * 1.2 + 1.2) * (this.dpr || 1)
    });
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.nextShootingTime = performance.now() + 1200;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.time += 0.02;
    const now = performance.now();

    // Spawn shooting stars periodically (obscured during heavy sandstorm)
    if (!this.isObscured && now >= this.nextShootingTime) {
      this.spawnShootingStar();
      this.nextShootingTime = now + (Math.random() * 3200 + 2200);
    }

    // Draw twinkling celestial stars
    const obscureFactor = this.isObscured ? 0.12 : 1.0;
    for (let s of this.stars) {
      s.phase += s.twinkleSpeed;
      const alpha = Math.max(0.04, Math.min(1.0, (s.baseAlpha + Math.sin(s.phase) * 0.35) * obscureFactor));
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${s.hue} ${alpha})`;
      if (!this.isObscured && s.radius > 1.4 * (this.dpr || 1)) {
        this.ctx.shadowBlur = 4 * (this.dpr || 1);
        this.ctx.shadowColor = 'rgba(210, 235, 255, 0.7)';
      }
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    // Draw shooting stars with trailing tail (skip if sandstorm obscured)
    if (!this.isObscured) {
      for (let i = this.shootingStars.length - 1; i >= 0; i--) {
        const ss = this.shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life++;

        const progress = ss.life / ss.maxLife;
        const alpha = progress < 0.2 ? progress / 0.2 : Math.max(0, 1 - (progress - 0.2) / 0.8);

        const tailX = ss.x - (ss.vx / Math.hypot(ss.vx, ss.vy)) * ss.length;
        const tailY = ss.y - (ss.vy / Math.hypot(ss.vx, ss.vy)) * ss.length;

        const grad = this.ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`);
        grad.addColorStop(0.3, `rgba(180, 220, 255, ${alpha * 0.65})`);
        grad.addColorStop(1, 'rgba(120, 180, 255, 0)');

        this.ctx.beginPath();
        this.ctx.moveTo(ss.x, ss.y);
        this.ctx.lineTo(tailX, tailY);
        this.ctx.strokeStyle = grad;
        this.ctx.lineWidth = ss.size;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();

        // Bright head point
        this.ctx.beginPath();
        this.ctx.arc(ss.x, ss.y, ss.size * 1.1, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        this.ctx.fill();

        if (ss.life >= ss.maxLife) {
          this.shootingStars.splice(i, 1);
        }
      }
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

class SaharaSandEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.embers = [];
    this.numParticles = 35;
    this.wind = 0.2;
    this.isSandstorm = false;
    this.isNight = true;
    this.running = false;
    this.animId = null;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    if (!this.canvas) return;
    const container = document.getElementById('roomContainer');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = container ? container.clientWidth : window.innerWidth;
    const h = container ? container.clientHeight : window.innerHeight;
    this.width = Math.round(w * dpr);
    this.height = Math.round(h * dpr);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
    this.dpr = dpr;
    this.init();
  }

  setNightMode(isNight) {
    this.isNight = !!isNight;
  }

  createParticle() {
    const dpr = this.dpr || 1;
    if (this.isSandstorm) {
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: (Math.random() * 1.5 + 0.7) * dpr,
        speedX: (Math.random() * 6 + 6) * dpr,
        speedY: (Math.random() * 2 + 1) * dpr,
        opacity: Math.random() * 0.55 + 0.25
      };
    } else {
      return {
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: (Math.random() * 1.3 + 0.6) * dpr,
        speedX: (Math.random() * 0.8 + 0.3) * dpr,
        speedY: (Math.random() * 0.5 - 0.2) * dpr,
        opacity: Math.random() * 0.35 + 0.15
      };
    }
  }

  spawnEmber() {
    const dpr = this.dpr || 1;
    const w = this.width || 800;
    const h = this.height || 600;
    const originX = w * 0.82 + (Math.random() * 20 - 10) * dpr;
    const originY = h * 0.66 + (Math.random() * 10 - 5) * dpr;

    this.embers.push({
      x: originX,
      y: originY,
      vx: (Math.random() * -1.0 - 0.3) * dpr,
      vy: (Math.random() * -1.8 - 1.0) * dpr,
      radius: (Math.random() * 1.3 + 0.7) * dpr,
      life: 0,
      maxLife: Math.floor(Math.random() * 40 + 30),
      swayPhase: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.08 + 0.04
    });
  }

  activateSandstorm() {
    this.isSandstorm = true;
    this.numParticles = 550;
    this.wind = 8 * (this.dpr || 1);
    this.init();
  }

  deactivateSandstorm() {
    this.isSandstorm = false;
    this.numParticles = this.isNight ? 35 : 55;
    this.wind = 0.2 * (this.dpr || 1);
    this.init();
  }

  init() {
    this.particles = [];
    this.embers = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(this.createParticle());
    }
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.animate();
  }

  stop() {
    this.running = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  animate() {
    if (!this.running) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Warm desert sand tone
    this.ctx.fillStyle = this.isNight ? 'rgba(235, 215, 175, 0.85)' : 'rgba(245, 205, 145, 0.9)';

    // Render sand particles (exact BlizzardEngine structure)
    for (let p of this.particles) {
      this.ctx.globalAlpha = p.opacity;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();

      p.y += p.speedY;
      p.x += p.speedX + this.wind;

      if (p.y > this.height + 10) { p.y = -10; p.x = Math.random() * this.width; }
      if (p.x > this.width + 10) { p.x = -10; p.y = Math.random() * this.height; }
      else if (p.x < -10) { p.x = this.width + 10; p.y = Math.random() * this.height; }
    }

    // In calm night mode, subtle campfire embers rise from the fire threshold
    if (!this.isSandstorm && this.isNight) {
      if (Math.random() < 0.3) {
        this.spawnEmber();
      }

      for (let i = this.embers.length - 1; i >= 0; i--) {
        const e = this.embers[i];
        e.swayPhase += e.swaySpeed;
        e.x += e.vx + Math.sin(e.swayPhase) * (0.6 * (this.dpr || 1));
        e.y += e.vy;
        e.life++;

        const progress = e.life / e.maxLife;
        const alpha = Math.max(0, 1 - progress);

        this.ctx.globalAlpha = alpha * 0.9;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, e.radius * (1 - progress * 0.4), 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255, ${Math.floor(140 + 80 * (1 - progress))}, 40, 1)`;
        this.ctx.fill();

        if (e.life >= e.maxLife) {
          this.embers.splice(i, 1);
        }
      }
    }

    this.ctx.globalAlpha = 1.0;
    this.animId = requestAnimationFrame(() => this.animate());
  }
}

// Preload Forest House sunny and rainy artwork
const preloadForestSunny = new Image();
preloadForestSunny.src = 'assets/images/scene_forest/forest_sunny.png?v=new_v2';
const preloadForestRainy = new Image();
preloadForestRainy.src = 'assets/images/scene_forest/forest_rainy.png?v=new_v2';

// Preload Forest Cabin artwork
const preloadCabinDesk = new Image();
preloadCabinDesk.src = 'assets/images/scene_forest_cabin/foreground_desk.png?v=fc1';
const preloadCabinSunny = new Image();
preloadCabinSunny.src = 'assets/images/scene_forest_cabin/bg_sunny.jpg?v=fc1';
const preloadCabinRainy = new Image();
preloadCabinRainy.src = 'assets/images/scene_forest_cabin/bg_rainy.jpg?v=fc1';

// Preload Durga Puja artwork
const preloadDurgaPuja = new Image();
preloadDurgaPuja.src = 'assets/images/scene_durga_puja/durga_puja.jpg?v=dp1';

// Preload Kali Puja artwork
const preloadKaliSky = new Image();
preloadKaliSky.src = 'assets/images/scene_kali_puja/sky.jpg?v=kp1';
const preloadKaliPandal = new Image();
preloadKaliPandal.src = 'assets/images/scene_kali_puja/pandal_fg.png?v=kp1';
const preloadKaliLanterns = new Image();
preloadKaliLanterns.src = 'assets/images/scene_kali_puja/lanterns.png?v=kp1';

// Preload Darjeeling Veranda artwork
const preloadDarjeelingSunnyBg = new Image();
preloadDarjeelingSunnyBg.src = 'assets/images/scene_darjeeling/bg_sunny.jpg?v=dj2';
const preloadDarjeelingRainyBg = new Image();
preloadDarjeelingRainyBg.src = 'assets/images/scene_darjeeling/bg_rainy.jpg?v=dj2';
const preloadDarjeelingSunnyFg = new Image();
preloadDarjeelingSunnyFg.src = 'assets/images/scene_darjeeling/foreground_sunny.png?v=dj2';
const preloadDarjeelingRainyFg = new Image();
preloadDarjeelingRainyFg.src = 'assets/images/scene_darjeeling/foreground_rainy.png?v=dj2';

// Kali Puja Fireworks Manager in designated portion of the sky (crashmax-dev/fireworks-js)
function initKaliFireworks() {
  const container = document.getElementById('kali-fireworks-container');
  if (!container) return;

  const FireworksConstructor = (window.Fireworks && window.Fireworks.default)
    ? window.Fireworks.default
    : (typeof window.Fireworks === 'function' ? window.Fireworks : window.Fireworks?.Fireworks);

  if (!FireworksConstructor) {
    console.warn('Fireworks library not available yet, will retry');
    setTimeout(initKaliFireworks, 150);
    return;
  }

  const w = container.clientWidth || 520;
  const h = container.clientHeight || 280;

  if (!window.kaliFireworksInstance) {
    window.kaliFireworksInstance = new FireworksConstructor(container, {
      autoresize: true,
      opacity: 0.6,
      acceleration: 1.004,
      friction: 0.96,
      gravity: 0.45,
      particles: 55,
      traceLength: 2,
      traceSpeed: 1.2,
      explosion: 2,
      intensity: 15,
      flickering: 25,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 55,
      },
      delay: {
        min: 40,
        max: 75,
      },
      rocketsPoint: {
        min: 45,
        max: 55,
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 2,
        },
        trace: {
          min: 1,
          max: 1.5,
        },
      },
      brightness: {
        min: 65,
        max: 92,
      },
      decay: {
        min: 0.007,
        max: 0.014,
      },
      mouse: {
        click: true,
        move: false,
        max: 1000,
      },
      boundaries: {
        x: 20,
        y: 15,
        width: w,
        height: h
      }
    });
  } else {
    window.kaliFireworksInstance.updateOptions({
      acceleration: 1.004,
      friction: 0.96,
      gravity: 0.45,
      particles: 55,
      traceLength: 2,
      traceSpeed: 1.2,
      explosion: 2,
      intensity: 15,
      flickering: 25,
      hue: { min: 0, max: 55 },
      delay: { min: 40, max: 75 },
      brightness: { min: 65, max: 92 },
      decay: { min: 0.007, max: 0.014 }
    });
  }

  // Ensure size & boundaries match current container
  if (container.clientWidth > 0 && container.clientHeight > 0) {
    window.kaliFireworksInstance.updateSize({
      width: container.clientWidth,
      height: container.clientHeight
    });
    window.kaliFireworksInstance.updateBoundaries({
      x: 20,
      y: 15,
      width: container.clientWidth,
      height: container.clientHeight
    });
  }

  if (state.currentTheme === 'scene_kali_puja' && state.hotspots.kaliFireworks && !window.kaliFireworksInstance.isRunning) {
    window.kaliFireworksInstance.start();
  }
}

// Initialize interface on launch
window.addEventListener('DOMContentLoaded', () => {
  setupInteractiveRoom();
  setupScene2();
  setupSceneLibrary();
  setupThemeSwitcher();
  initHotspots();
  setupTvBezelControls();
  startClock();
  setupFocusTimer();
  setupProfileAndAnalytics();
  initSupabaseAuth();
  initLandingPage();
  initProfileSetupModal();
  window.blizzardEngine = new BlizzardEngine('blizzard-canvas');
  window.libraryRainEngine = new LibraryRainEngine('library-rain-canvas');
  window.forestRainEngine = new ForestRainEngine('forest-rain-canvas');
  window.forestFireflyEngine = new ForestFireflyEngine('forest-firefly-canvas');
  window.forestCabinRainEngine = new ForestRainEngine('forest-cabin-rain-canvas');
  window.forestCabinFireflyEngine = new ForestFireflyEngine('forest-cabin-firefly-canvas');
  window.durgaRainEngine = new ForestRainEngine('durga-rain-canvas');
  window.durgaSparklesEngine = new ForestFireflyEngine('durga-sparkles-canvas');
  window.kaliRainEngine = new ForestRainEngine('kali-rain-canvas');
  window.darjeelingRainEngine = new ForestRainEngine('darjeeling-rain-canvas');
  window.darjeelingSunbeamsEngine = new DarjeelingSunbeamsEngine('darjeeling-sunbeams-canvas');
  window.saharaStarsEngine = new SaharaStarsEngine('sahara-stars-canvas');
  window.saharaSandEngine = new SaharaSandEngine('sahara-sand-canvas');
  initAudio();
  switchTheme('scene2', false);
  state.isPlaying = false;
  if (musicAudio) {
    musicAudio.pause();
  }
  if (elBtnPlay) {
    elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
  if (elTrackIcon) {
    elTrackIcon.style.animationPlayState = 'paused';
  }
  updateTvPowerLed();
  updateNowPlayingStatus();
  if (USE_MOCK_MODE) {
    if (elMockModeIndicator) elMockModeIndicator.style.display = 'block';
  } else {
    if (elMockModeIndicator) {
      elMockModeIndicator.innerHTML = '<i class="fa-solid fa-cloud"></i> Firebase mode active. Enjoy real sync!';
      elMockModeIndicator.style.color = '#03dac6';
    }
  }
  
  // Auto-start session instead of waiting for login
  state.username = "Studying Bud";
  state.roomId = "cozy-study";
  if (elRoomNameDisplay) elRoomNameDisplay.textContent = state.roomId;
  
  startSession();
});

// --- SUPABASE CLIENT & GOOGLE AUTHENTICATION ---
let supabaseClient = null;

function getSupabase() {
  if (supabaseClient) return supabaseClient;
  if (typeof window.supabase !== 'undefined' && typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined') {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      return supabaseClient;
    } catch (err) {
      console.error("Failed to initialize Supabase client:", err);
    }
  }
  return null;
}

async function signInWithGoogle() {
  const client = getSupabase();
  if (!client) {
    alert("Supabase client is not available. Please verify credentials in config.js.");
    return;
  }
  try {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + window.location.pathname
      }
    });
    if (error) throw error;
  } catch (err) {
    console.error("Google login failed:", err);
    alert("Google Sign-In failed: " + err.message);
  }
}

// --- SUPABASE DATABASE SYNC (PROFILES & TODOS) ---
async function syncProfileFromSupabase(user) {
  const client = getSupabase();
  if (!client || !user || !user.id) return;
  try {
    const { data, error } = await client
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    if (error) {
      console.warn("Supabase profile fetch error:", error.message);
      return;
    }

    if (data) {
      if (!profileState) loadProfileData();
      if (data.username) profileState.username = data.username;
      if (data.avatar_url) profileState.avatarUrl = data.avatar_url;
      if (data.avatar_animal) profileState.avatarAnimal = data.avatar_animal;
      if (data.total_focus_minutes !== undefined && data.total_focus_minutes > (profileState.totalMinutes || 0)) {
        profileState.totalMinutes = data.total_focus_minutes;
      }
      if (data.streak_days !== undefined && data.streak_days > (profileState.streakDays || 1)) {
        profileState.streakDays = data.streak_days;
      }
      state.username = profileState.username;
      try { localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profileState)); } catch (_) {}
      renderProfileUI();
      if (typeof syncMyPresence === 'function') syncMyPresence();
    } else {
      // First time user in database, save initial profile
      saveProfileToSupabase(user);
    }
  } catch (err) {
    console.warn("syncProfileFromSupabase error:", err);
  }
}

async function saveProfileToSupabase(user = state.currentUser) {
  const client = getSupabase();
  if (!client || !user || !user.id || !profileState) return;
  try {
    await client.from('profiles').upsert({
      id: user.id,
      username: profileState.username || 'Cozy Scholar',
      avatar_url: profileState.avatarUrl || null,
      avatar_animal: profileState.avatarAnimal || 'cat',
      total_focus_minutes: profileState.totalMinutes || 0,
      streak_days: profileState.streakDays || 1,
      last_active_date: profileState.lastActiveDate || getTodayDateString(),
      updated_at: new Date().toISOString()
    });
  } catch (err) {
    console.warn("saveProfileToSupabase error:", err);
  }
}

async function syncTodosFromSupabase(user) {
  const client = getSupabase();
  if (!client || !user || !user.id) return;
  try {
    const { data, error } = await client
      .from('user_todos')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: true });

    if (error) {
      console.warn("Supabase todos fetch error:", error.message);
      return;
    }

    if (data && data.length > 0) {
      state.todos = data.map(t => ({
        id: t.id,
        text: t.text,
        completed: !!t.completed,
        createdAt: new Date(t.created_at).getTime() || Date.now()
      }));
      saveTodosToStorage();
      updateTodoUI();
    }
  } catch (err) {
    console.warn("syncTodosFromSupabase error:", err);
  }
}

async function saveTodoToSupabase(todoItem, action = 'upsert') {
  const client = getSupabase();
  const user = state.currentUser;
  if (!client || !user || !user.id) return;
  try {
    if (action === 'delete') {
      await client.from('user_todos').delete().eq('id', todoItem.id).eq('user_id', user.id);
    } else {
      await client.from('user_todos').upsert({
        id: todoItem.id,
        user_id: user.id,
        text: todoItem.text,
        completed: !!todoItem.completed
      });
    }
  } catch (err) {
    console.warn("saveTodoToSupabase error:", err);
  }
}

function initLandingPage() {
  const elLandingNavLoginBtn = document.getElementById('landingNavLoginBtn');
  const elLandingGoogleLoginBtn = document.getElementById('landingGoogleLoginBtn');
  const elLandingGoogleLoginBtnBottom = document.getElementById('landingGoogleLoginBtnBottom');
  const elLandingGuestBtn = document.getElementById('landingGuestBtn');
  const elLandingPage = document.getElementById('landingPage');

  [elLandingNavLoginBtn, elLandingGoogleLoginBtn, elLandingGoogleLoginBtnBottom].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        signInWithGoogle();
      });
    }
  });

  if (elLandingGuestBtn) {
    elLandingGuestBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.guestModeActive = true;
      if (elLandingPage) {
        elLandingPage.classList.add('hidden');
      }
    });
  }
}

async function signOutUser() {
  const client = getSupabase();
  if (client) {
    try {
      await client.auth.signOut();
    } catch (e) {
      console.warn("Sign out error:", e);
    }
  }
  window.guestModeActive = false;
  state.currentUser = null;
  state.username = "Studying Bud";
  if (profileState) {
    profileState.googleUser = null;
    profileState.avatarUrl = null;
    profileState.username = "Chill Scholar";
    saveProfileData();
  }
  updateAuthUI(null);
  renderProfileUI();
  if (typeof syncMyPresence === 'function') {
    syncMyPresence();
  }
}

function updateAuthUI(user) {
  const elAuthLoggedOut = document.getElementById('authLoggedOut');
  const elAuthLoggedIn = document.getElementById('authLoggedIn');
  const elAuthUserEmail = document.getElementById('authUserEmail');
  const elLogoutBtn = document.getElementById('logoutBtn');
  const elLandingPage = document.getElementById('landingPage');

  if (user) {
    if (elLandingPage) elLandingPage.classList.add('hidden');
    if (elAuthLoggedOut) elAuthLoggedOut.style.display = 'none';
    if (elAuthLoggedIn) elAuthLoggedIn.style.display = 'flex';
    if (elAuthUserEmail) {
      const emailText = user.email || (user.user_metadata && user.user_metadata.full_name) || "Google User";
      elAuthUserEmail.textContent = emailText;
    }
    if (elLogoutBtn) {
      elLogoutBtn.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Sign Out';
      elLogoutBtn.title = `Signed in as ${user.email || 'Google User'}`;
    }
  } else {
    if (elLandingPage && !window.guestModeActive) {
      elLandingPage.classList.remove('hidden');
    }
    if (elAuthLoggedOut) elAuthLoggedOut.style.display = 'block';
    if (elAuthLoggedIn) elAuthLoggedIn.style.display = 'none';
    if (elLogoutBtn) {
      elLogoutBtn.innerHTML = '<i class="fa-brands fa-google"></i> Sign In';
      elLogoutBtn.title = "Sign in with Google";
    }
  }
}

function handleAuthUser(user) {
  if (!user) {
    updateAuthUI(null);
    return;
  }
  state.currentUser = user;
  const fullName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || "Chill Scholar";
  const googleAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture;

  if (!profileState) loadProfileData();

  if (profileState) {
    profileState.googleUser = {
      id: user.id,
      email: user.email,
      name: fullName,
      avatarUrl: googleAvatar || null
    };

    const setupKey = `lofify_profile_setup_${user.id}`;
    const hasCompletedSetup = localStorage.getItem(setupKey) === 'true';

    if (!hasCompletedSetup) {
      // Prompt user to pick cute animal avatar & username on initial login!
      const initialNickname = fullName.split(' ')[0] || fullName;
      profileState.username = initialNickname;
      if (!profileState.avatarUrl) {
        profileState.avatarUrl = 'assets/images/avatars/cat.svg';
        profileState.avatarAnimal = 'cat';
        profileState.selectedAvatar = 'Mochi Cat 🐱';
      }
      state.username = initialNickname;
      saveProfileData();
      updateAuthUI(user);
      renderProfileUI();

      // Open cute animal onboarding modal with a smooth welcoming delay
      setTimeout(() => {
        openProfileSetupModal(user, false);
      }, 400);
    } else {
      // User has already customized their persona
      state.username = profileState.username || fullName;
      saveProfileData();
      updateAuthUI(user);
      renderProfileUI();
      if (typeof syncMyPresence === 'function') {
        syncMyPresence();
      }
    }

    // Sync cloud profile and todos from Supabase
    syncProfileFromSupabase(user);
    syncTodosFromSupabase(user);
  }
}

function openProfileSetupModal(user = state.currentUser, isEditing = false) {
  const modal = document.getElementById('profileSetupModal');
  if (!modal) return;

  if (!profileState) loadProfileData();

  const elInput = document.getElementById('setupUsernameInput');
  const elCharCount = document.getElementById('setupCharCount');
  const elPreviewImg = document.getElementById('setupSelectedAvatarImg');
  const elPreviewLabel = document.getElementById('setupSelectedAvatarLabel');
  const elBadge = modal.querySelector('.setup-badge span');
  const elTitle = modal.querySelector('.setup-title');

  if (elBadge) {
    elBadge.textContent = isEditing ? '🎨 customize persona' : '✨ welcome to lofify';
  }
  if (elTitle) {
    elTitle.textContent = isEditing ? 'Edit your study persona' : 'Choose your study persona';
  }

  // Pre-fill username
  const currentName = (profileState && profileState.username) || (user && user.user_metadata?.full_name?.split(' ')[0]) || "Cozy Scholar";
  if (elInput) {
    elInput.value = currentName;
    if (elCharCount) elCharCount.textContent = `${currentName.length}/20`;
  }

  // Select active avatar in grid
  const currentAvatarUrl = (profileState && profileState.avatarUrl) || 'assets/images/avatars/cat.svg';
  let matchedBtn = null;

  document.querySelectorAll('.setup-avatar-opt').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.src === currentAvatarUrl || (profileState?.avatarAnimal && btn.dataset.animal === profileState.avatarAnimal)) {
      matchedBtn = btn;
    }
  });

  if (!matchedBtn) {
    matchedBtn = document.querySelector('.setup-avatar-opt[data-animal="cat"]') || document.querySelector('.setup-avatar-opt');
  }

  if (matchedBtn) {
    matchedBtn.classList.add('active');
    if (elPreviewImg) elPreviewImg.src = matchedBtn.dataset.src;
    if (elPreviewLabel) elPreviewLabel.textContent = matchedBtn.dataset.name;
  }

  modal.classList.add('open');
  if (elInput) {
    setTimeout(() => elInput.focus(), 250);
  }
}

function closeProfileSetupModal() {
  const modal = document.getElementById('profileSetupModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

function initProfileSetupModal() {
  const modal = document.getElementById('profileSetupModal');
  if (!modal) return;

  const elInput = document.getElementById('setupUsernameInput');
  const elCharCount = document.getElementById('setupCharCount');
  const elPreviewImg = document.getElementById('setupSelectedAvatarImg');
  const elPreviewLabel = document.getElementById('setupSelectedAvatarLabel');
  const elSaveBtn = document.getElementById('btnSaveProfileSetup');
  const elSkipBtn = document.getElementById('btnSkipProfileSetup');

  // Input live character counter
  if (elInput && elCharCount) {
    elInput.addEventListener('input', () => {
      const len = elInput.value.length;
      elCharCount.textContent = `${len}/20`;
    });
    elInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (elSaveBtn) elSaveBtn.click();
      }
    });
  }

  // Avatar grid options click handler
  document.querySelectorAll('.setup-avatar-opt').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.setup-avatar-opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (elPreviewImg) {
        elPreviewImg.src = btn.dataset.src;
        const ring = document.getElementById('setupAvatarPreviewRing');
        if (ring) {
          ring.style.transform = 'scale(1.1)';
          setTimeout(() => ring.style.transform = 'scale(1)', 180);
        }
      }
      if (elPreviewLabel) {
        elPreviewLabel.textContent = btn.dataset.name;
      }
    });
  });

  // Save button
  if (elSaveBtn) {
    elSaveBtn.addEventListener('click', () => {
      if (!profileState) loadProfileData();

      const rawName = (elInput?.value || '').trim();
      const finalName = rawName ? rawName.slice(0, 20) : (profileState.username || "Cozy Scholar");

      const activeOpt = document.querySelector('.setup-avatar-opt.active');
      const avatarSrc = activeOpt?.dataset.src || 'assets/images/avatars/cat.svg';
      const avatarAnimal = activeOpt?.dataset.animal || 'cat';
      const avatarName = activeOpt?.dataset.name || 'Mochi Cat 🐱';

      // Update state
      state.username = finalName;
      profileState.username = finalName;
      profileState.avatarUrl = avatarSrc;
      profileState.avatarAnimal = avatarAnimal;
      profileState.selectedAvatar = avatarName;
      profileState.hasCustomProfile = true;

      if (state.currentUser?.id) {
        localStorage.setItem(`lofify_profile_setup_${state.currentUser.id}`, 'true');
      }
      localStorage.setItem('lofify_profile_setup_local', 'true');

      saveProfileData();
      renderProfileUI();
      updateRoomUI();
      if (typeof syncMyPresence === 'function') {
        syncMyPresence();
      }

      closeProfileSetupModal();
      showRoomToast(`✨ Persona saved! Welcome to lofify, <strong>${finalName}</strong>.`);
    });
  }

  // Skip button
  if (elSkipBtn) {
    elSkipBtn.addEventListener('click', () => {
      if (state.currentUser?.id) {
        localStorage.setItem(`lofify_profile_setup_${state.currentUser.id}`, 'true');
      }
      localStorage.setItem('lofify_profile_setup_local', 'true');
      closeProfileSetupModal();
      if (typeof syncMyPresence === 'function') {
        syncMyPresence();
      }
    });
  }

  // Close modal when clicking outside card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProfileSetupModal();
    }
  });
}

async function initSupabaseAuth() {
  const client = getSupabase();
  if (!client) {
    console.log("Supabase not configured or library pending");
    return;
  }

  try {
    // Check active session
    const { data: { session } } = await client.auth.getSession();
    if (session && session.user) {
      handleAuthUser(session.user);
    } else {
      updateAuthUI(null);
    }

    // Subscribe to auth state changes
    client.auth.onAuthStateChange((event, session) => {
      console.log("Supabase Auth event:", event);
      if (session && session.user) {
        handleAuthUser(session.user);
      } else if (event === 'SIGNED_OUT') {
        updateAuthUI(null);
        if (profileState) {
          profileState.googleUser = null;
          profileState.avatarUrl = null;
          profileState.username = "Chill Scholar";
          saveProfileData();
        }
        renderProfileUI();
      }
    });
  } catch (err) {
    console.warn("Failed to check Supabase auth session:", err);
  }
}

// Helper to load a script dynamically
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// --- SUPABASE REALTIME ROOM & PRESENCE ENGINE ---
let roomChannel = null;

function getRoomIdFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const r = params.get('room');
    if (r && r.trim()) {
      return r.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-').slice(0, 32);
    }
  } catch (e) {
    console.warn("Could not parse room from URL:", e);
  }
  return null;
}

function getRoomInviteUrl() {
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('room', state.roomId || 'cozy-study');
    return url.toString();
  } catch (e) {
    return `${window.location.origin}${window.location.pathname}?room=${encodeURIComponent(state.roomId || 'cozy-study')}`;
  }
}

function showRoomToast(message) {
  let toast = document.getElementById('roomToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'roomToast';
    toast.className = 'room-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = message;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3500);
}

function updateRoomUI() {
  const currentRoom = state.roomId || 'cozy-study';
  const inviteUrl = getRoomInviteUrl();

  const elRoomPillLabel = document.getElementById('roomPillLabel');
  if (elRoomPillLabel) elRoomPillLabel.textContent = `Room: ${currentRoom}`;

  const elRoomInviteInput = document.getElementById('roomInviteInput');
  if (elRoomInviteInput) elRoomInviteInput.value = inviteUrl;

  const elRoomNameInput = document.getElementById('roomNameInput');
  if (elRoomNameInput) elRoomNameInput.value = currentRoom;

  if (elRoomNameDisplay) elRoomNameDisplay.textContent = currentRoom;
}

async function syncMyPresence() {
  if (!roomChannel) return;
  const avatarUrl = (profileState && profileState.avatarUrl) || "assets/images/avatars/cat.svg";
  const avatar = (profileState && profileState.selectedAvatar) || "🐱";
  const displayName = state.username || (profileState && profileState.username) || "Chill Scholar";
  try {
    await roomChannel.track({
      displayName: displayName,
      avatar: avatar,
      avatarUrl: avatarUrl,
      isGoogle: !!(profileState && profileState.googleUser),
      joinedAt: Date.now()
    });
  } catch (err) {
    console.warn("Error tracking Supabase presence:", err);
  }
}

function handleTodoBroadcast(payload) {
  if (!payload || !payload.action) return;
  if (payload.action === 'add' && payload.task) {
    if (!state.todos.some(t => t.id === payload.task.id)) {
      state.todos.push(payload.task);
      updateTodoUI();
    }
  } else if (payload.action === 'toggle') {
    const t = state.todos.find(item => item.id === payload.id);
    if (t) {
      t.completed = payload.completed;
      updateTodoUI();
    }
  } else if (payload.action === 'delete') {
    state.todos = state.todos.filter(item => item.id !== payload.id);
    updateTodoUI();
  }
}

async function initSupabaseRoom(forcedRoomId = null) {
  const client = getSupabase();
  if (!client) {
    console.warn("Supabase client unavailable, using simulation room");
    initMockRoom();
    return;
  }

  // 1. Resolve room ID
  if (forcedRoomId) {
    state.roomId = forcedRoomId;
  } else {
    const roomFromUrl = getRoomIdFromUrl();
    if (roomFromUrl) {
      state.roomId = roomFromUrl;
    } else if (!state.roomId) {
      state.roomId = "cozy-study";
    }
  }

  // Reflect room query param in browser address bar without reload
  try {
    const currentParams = new URLSearchParams(window.location.search);
    if (currentParams.get('room') !== state.roomId) {
      currentParams.set('room', state.roomId);
      const newUrl = `${window.location.pathname}?${currentParams.toString()}${window.location.hash}`;
      window.history.replaceState({}, '', newUrl);
    }
  } catch (e) {
    // Ignore URL replace errors in some environments
  }

  updateRoomUI();

  // If already subscribed, unsubscribe first
  if (roomChannel) {
    try {
      client.removeChannel(roomChannel);
    } catch (e) {
      console.warn("Cleanup error for previous channel:", e);
    }
    roomChannel = null;
  }

  const presenceKey = (state.currentUser && state.currentUser.id)
    ? state.currentUser.id
    : `anon-${Math.random().toString(36).substring(2, 9)}`;

  // Create Realtime channel
  roomChannel = client.channel(`room:${state.roomId}`, {
    config: {
      presence: { key: presenceKey },
      broadcast: { self: false }
    }
  });

  // Track room presence (who is online in the room)
  roomChannel
    .on('presence', { event: 'sync' }, () => {
      const presenceState = roomChannel.presenceState();
      const list = [];
      for (const id in presenceState) {
        const presences = presenceState[id];
        if (presences && presences.length > 0) {
          const userMeta = presences[0];
          list.push({
            id: id,
            displayName: userMeta.displayName || 'Studying Bud',
            avatar: userMeta.avatar || '🎧',
            avatarUrl: userMeta.avatarUrl || null,
            isMe: id === presenceKey
          });
        }
      }
      updateListenersUI(list);
    })
    .on('presence', { event: 'join' }, ({ newPresences }) => {
      if (newPresences && newPresences.length > 0) {
        const p = newPresences[0];
        if (p && p.displayName && p.displayName !== state.username) {
          showRoomToast(`👋 <strong>${p.displayName}</strong> joined the study room!`);
        }
      }
    })
    .on('presence', { event: 'leave' }, ({ leftPresences }) => {
      if (leftPresences && leftPresences.length > 0) {
        const p = leftPresences[0];
        if (p && p.displayName && p.displayName !== state.username) {
          showRoomToast(`👋 <strong>${p.displayName}</strong> left the room.`);
        }
      }
    });

  // Broadcast handlers
  roomChannel.on('broadcast', { event: 'room_state' }, ({ payload }) => {
    if (payload) {
      handleRoomSyncUpdate(payload);
    }
  });

  roomChannel.on('broadcast', { event: 'todo_action' }, ({ payload }) => {
    if (payload) {
      handleTodoBroadcast(payload);
    }
  });

  roomChannel.on('broadcast', { event: 'timer_action' }, ({ payload }) => {
    if (payload) {
      handleTimerRoomSync(payload);
    }
  });

  roomChannel.on('broadcast', { event: 'request_state' }, () => {
    if (roomChannel) {
      roomChannel.send({
        type: 'broadcast',
        event: 'room_state',
        payload: {
          currentTheme: state.currentTheme,
          currentVibe: state.currentVibe,
          currentTrackIndex: state.currentTrackIndex,
          isPlaying: state.isPlaying,
          trackStartTime: Date.now() - ((musicAudio?.currentTime || 0) * 1000),
          weather: {
            themeId: state.currentTheme,
            isActive: (typeof isThemeWeatherActive === 'function') ? isThemeWeatherActive(state.currentTheme) : false,
            allWeather: {
              isBlizzardActive: state.isBlizzardActive,
              isLibraryRainActive: state.isLibraryRainActive,
              isForestRainActive: state.isForestRainActive,
              isForestCabinRainActive: state.isForestCabinRainActive,
              isDurgaPujaRainActive: state.isDurgaPujaRainActive,
              isKaliPujaRainActive: state.isKaliPujaRainActive
            }
          },
          timer: (typeof getTimerSyncPayload === 'function') ? getTimerSyncPayload('sync') : null,
          soundscapes: state.soundscapeVols,
          hotspots: state.hotspots,
          todos: state.todos
        }
      });
    }
  });

  // Subscribe
  roomChannel.subscribe(async (status) => {
    if (status === 'SUBSCRIBED') {
      console.log(`Supabase Realtime room subscribed: ${state.roomId}`);
      if (elSyncText) elSyncText.textContent = `Room: ${state.roomId}`;
      if (elSyncStatus) elSyncStatus.className = "sync-status online";
      if (elMockModeIndicator) {
        elMockModeIndicator.innerHTML = `<i class="fa-solid fa-users"></i> Room <strong>${state.roomId}</strong> live & synced`;
        elMockModeIndicator.style.color = '#03dac6';
        elMockModeIndicator.style.display = 'block';
      }

      await syncMyPresence();

      // Ask peers if room state (music, timer, theme, weather) is already running
      roomChannel.send({
        type: 'broadcast',
        event: 'request_state',
        payload: {}
      });
    } else if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
      console.warn("Supabase Realtime status:", status);
    }
  });

  // Wire helper methods for room state and todos
  window.updateFirebaseRoomState = async (updateObject) => {
    if (roomChannel) {
      roomChannel.send({
        type: 'broadcast',
        event: 'room_state',
        payload: updateObject
      });
    }
  };

  window.sendTimerRoomAction = async (timerPayload) => {
    if (roomChannel) {
      roomChannel.send({
        type: 'broadcast',
        event: 'timer_action',
        payload: timerPayload
      });
    }
  };

  window.addFirebaseTodo = async (taskText) => {
    const newTask = {
      id: 'task-' + Date.now() + '-' + Math.random().toString(36).substr(2, 4),
      text: taskText,
      completed: false,
      timestamp: Date.now()
    };
    state.todos.push(newTask);
    updateTodoUI();
    if (roomChannel) {
      roomChannel.send({
        type: 'broadcast',
        event: 'todo_action',
        payload: { action: 'add', task: newTask }
      });
    }
  };

  window.toggleFirebaseTodo = async (id, completed) => {
    const t = state.todos.find(item => item.id === id);
    if (t) {
      t.completed = completed;
      updateTodoUI();
      if (roomChannel) {
        roomChannel.send({
          type: 'broadcast',
          event: 'todo_action',
          payload: { action: 'toggle', id, completed }
        });
      }
    }
  };

  window.deleteFirebaseTodo = async (id) => {
    state.todos = state.todos.filter(item => item.id !== id);
    updateTodoUI();
    if (roomChannel) {
      roomChannel.send({
        type: 'broadcast',
        event: 'todo_action',
        payload: { action: 'delete', id }
      });
    }
  };

  if (elSyncText) elSyncText.textContent = `Room: ${state.roomId}`;
  if (elSyncStatus) elSyncStatus.className = "sync-status online";
}

async function switchStudyRoom(newRoomId) {
  if (!newRoomId || !newRoomId.trim()) return;
  const cleanId = newRoomId.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '-').slice(0, 32);
  if (!cleanId) return;
  if (cleanId === state.roomId) {
    showRoomToast(`ℹ️ Already in room: <strong>${cleanId}</strong>`);
    return;
  }
  state.roomId = cleanId;

  // Immediately update query param in URL
  try {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set('room', cleanId);
    const newUrl = `${window.location.pathname}?${currentParams.toString()}${window.location.hash}`;
    window.history.replaceState({}, '', newUrl);
  } catch (e) {}

  await initSupabaseRoom(cleanId);
  updateRoomUI();
  showRoomToast(`🚪 Switched to room: <strong>${cleanId}</strong>`);
}

async function startSession() {
  initAudio();
  if (typeof USE_SUPABASE !== 'undefined' && USE_SUPABASE) {
    await initSupabaseRoom();
  } else if (USE_MOCK_MODE) {
    console.log("Starting in mock simulation mode...");
    initMockRoom();
  } else {
    initMockRoom();
  }
}

// --- ROOM SYNC MANAGER ---
function handleRoomSyncUpdate(roomData) {
  if (!roomData) return;

  // 1. Sync Theme across all room peers
  if (roomData.currentTheme && roomData.currentTheme !== state.currentTheme) {
    if (typeof switchTheme === 'function') {
      switchTheme(roomData.currentTheme, false, true);
      const name = (typeof getThemeDisplayName === 'function') ? getThemeDisplayName(roomData.currentTheme) : roomData.currentTheme;
      showRoomToast(`🎨 Room theme switched to <strong>${name}</strong>`);
    }
  }

  // 2. Sync Music Track & Playlist
  if (roomData.currentVibe && roomData.currentVibe !== state.currentVibe) {
    state.currentVibe = roomData.currentVibe;
    state.currentTrackIndex = roomData.currentTrackIndex || 0;
    updateVibeButtonsUI();
    loadTrack(state.currentVibe, state.currentTrackIndex);
  } else if (roomData.currentTrackIndex !== undefined && roomData.currentTrackIndex !== state.currentTrackIndex) {
    state.currentTrackIndex = roomData.currentTrackIndex;
    loadTrack(state.currentVibe, state.currentTrackIndex);
  }

  // 3. Sync Volume Sliders and Ambient Soundscapes
  if (roomData.soundscapes) {
    for (const soundName in roomData.soundscapes) {
      const vol = roomData.soundscapes[soundName];
      if (state.soundscapeVols[soundName] !== vol) {
        state.soundscapeVols[soundName] = vol;
        const sliderEl = document.getElementById(`slider-${soundName}`);
        if (sliderEl) sliderEl.value = vol;
        const valEl = document.getElementById(`val-${soundName}`);
        if (valEl) valEl.textContent = vol > 0 ? `${Math.round(vol * 100)}%` : "Off";
        adjustSoundscapeVolume(soundName, vol);
      }
    }
  }

  // 4. Playback State Synchronization (Play / Pause / Seek)
  if (roomData.isPlaying !== undefined && roomData.isPlaying !== state.isPlaying) {
    state.isPlaying = roomData.isPlaying;
    if (state.isPlaying) {
      // Calculate exact offset position
      if (roomData.trackStartTime) {
        const elapsedMs = Date.now() - roomData.trackStartTime;
        const elapsedSec = elapsedMs / 1000;
        if (musicAudio && musicAudio.duration) {
          musicAudio.currentTime = Math.max(0, elapsedSec % musicAudio.duration);
        }
      }
      if (musicAudio) {
        musicAudio.play().catch(e => console.log("User interaction required to start audio"));
      }
      if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
    } else {
      if (musicAudio) {
        musicAudio.pause();
      }
      if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'paused';
    }
    updateTvPowerLed();
    updateNowPlayingStatus();
    updateMusicMenuSelection();
  } else if (roomData.trackStartTime && state.isPlaying && musicAudio && musicAudio.duration) {
    // Scrubbing / Seek update while already playing
    const elapsedMs = Date.now() - roomData.trackStartTime;
    const elapsedSec = elapsedMs / 1000;
    const targetTime = Math.max(0, elapsedSec % musicAudio.duration);
    if (Math.abs(musicAudio.currentTime - targetTime) > 2) {
      musicAudio.currentTime = targetTime;
    }
  }

  // 5. Sync Weather Controls
  if (roomData.weather) {
    if (roomData.weather.allWeather) {
      Object.assign(state, roomData.weather.allWeather);
    }
    if (roomData.weather.themeId && typeof applyThemeWeather === 'function') {
      applyThemeWeather(roomData.weather.themeId, roomData.weather.isActive, true);
    }
  }

  // 6. Sync Pomodoro Focus Timer
  if (roomData.timer && typeof handleTimerRoomSync === 'function') {
    handleTimerRoomSync(roomData.timer);
  }

  // 7. Sync Interactive Hotspots & Ambient Audio
  if (roomData.hotspots && typeof toggleHotspot === 'function') {
    for (const hId in roomData.hotspots) {
      if (state.hotspots[hId] !== roomData.hotspots[hId]) {
        toggleHotspot(hId, roomData.hotspots[hId], true);
      }
    }
  }
}

// --- MOCK MODE SIMULATOR ---
function initMockRoom() {
  if (elSyncText) elSyncText.textContent = "Simulation Mode";
  if (elSyncStatus) elSyncStatus.className = "sync-status online";
  
  // Setup Mock Members
  const list = [{ displayName: state.username, avatar: "🥑" }, ...mockPeers];
  updateListenersUI(list);
  


  // Load first track locally
  loadTrack(state.currentVibe, state.currentTrackIndex);
}

// --- AUDIO CONFIGURATION (WEB AUDIO API & HTML5 AUDIO) ---
let audioInitialized = false;

function initAudio() {
  if (!musicAudio) {
    musicAudio = new Audio();
  }
  musicAudio.preload = "auto";
  musicAudio.muted = isMuted;
  musicAudio.volume = isMuted ? 0 : (previousMasterVolume || 0.7);

  if (elSliderMaster) {
    elSliderMaster.value = isMuted ? 0 : (previousMasterVolume || 0.7);
  }

  if (!audioInitialized) {
    musicAudio.addEventListener('timeupdate', updateProgressBar);

    musicAudio.addEventListener('ended', () => {
      playNextTrack();
    });

    musicAudio.addEventListener('error', (e) => {
      console.warn("Audio playback issue with current track, advancing:", e);
      if (state.isPlaying) {
        setTimeout(playNextTrack, 800);
      }
    });

    audioInitialized = true;
  }

  loadTrack(state.currentVibe, state.currentTrackIndex);
  updateMuteIcon();
  updateNowPlayingStatus();
}

function loadTrack(vibe, index) {
  const playlist = PLAYLISTS[vibe] || PLAYLISTS.focus;
  if (!playlist || playlist.length === 0) return;
  const safeIndex = (index + playlist.length) % playlist.length;
  state.currentTrackIndex = safeIndex;
  const track = playlist[safeIndex];

  musicAudio.src = track.url;
  if (elTrackTitle) elTrackTitle.textContent = track.title;
  if (elTrackArtist) elTrackArtist.textContent = track.artist;
  musicAudio.load();
  updateNowPlayingStatus();
  updateMusicMenuSelection();
}

function togglePlay() {
  // If YouTube custom player is active, toggle YouTube playback
  if (typeof customMusicState !== 'undefined' && customMusicState.active && customMusicState.service === 'youtube' && ytPlayer) {
    try {
      const pState = ytPlayer.getPlayerState ? ytPlayer.getPlayerState() : -1;
      if (pState === 1) { // Currently playing -> pause
        ytPlayer.pauseVideo();
        state.isPlaying = false;
      } else { // Paused -> play
        ytPlayer.playVideo();
        state.isPlaying = true;
      }
      if (elBtnPlay) elBtnPlay.innerHTML = state.isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
      updateTvPowerLed();
      updateNowPlayingStatus();
      return;
    } catch (e) {
      console.warn("YouTube play/pause error:", e);
    }
  }

  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }

  const newState = !state.isPlaying;
  state.isPlaying = newState;

  if (state.isPlaying) {
    if (musicAudio) {
      if (!musicAudio.src || musicAudio.src === '' || musicAudio.src === window.location.href) {
        loadTrack(state.currentVibe, state.currentTrackIndex);
      }
      musicAudio.play().then(() => {
        state.isPlaying = true;
        if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
        updateTvPowerLed();
        updateNowPlayingStatus();
        updateMusicMenuSelection();
      }).catch(e => {
        console.warn("Audio play error / user interaction required:", e);
        state.isPlaying = false;
        if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
        if (elTrackIcon) elTrackIcon.style.animationPlayState = 'paused';
        updateTvPowerLed();
        updateNowPlayingStatus();
      });
    }
    if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
  } else {
    if (musicAudio) {
      musicAudio.pause();
    }
    if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    if (elTrackIcon) elTrackIcon.style.animationPlayState = 'paused';
  }

  updateTvPowerLed();
  updateNowPlayingStatus();
  updateMusicMenuSelection();

  if (typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({
      isPlaying: state.isPlaying,
      trackStartTime: state.isPlaying ? Date.now() - ((musicAudio?.currentTime || 0) * 1000) : Date.now()
    });
  }
}

function playNextTrack() {
  // If YouTube custom player is active, advance to next video in playlist
  if (typeof customMusicState !== 'undefined' && customMusicState.active && customMusicState.service === 'youtube' && ytPlayer && ytPlayer.nextVideo) {
    try {
      ytPlayer.nextVideo();
      return;
    } catch (e) {
      console.warn("YouTube nextVideo error:", e);
    }
  }

  const currentPlaylist = PLAYLISTS[state.currentVibe] || PLAYLISTS.focus;
  const nextIndex = (state.currentTrackIndex + 1) % currentPlaylist.length;
  state.currentTrackIndex = nextIndex;
  loadTrack(state.currentVibe, state.currentTrackIndex);
  if (musicAudio) {
    musicAudio.play().catch(e => console.log("Play next track error:", e));
  }
  state.isPlaying = true;
  if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
  if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
  updateTvPowerLed();
  updateNowPlayingStatus();
  updateMusicMenuSelection();

  if (typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({
      currentVibe: state.currentVibe,
      currentTrackIndex: nextIndex,
      trackStartTime: Date.now(),
      isPlaying: true
    });
  }
}

function playPrevTrack() {
  // If YouTube custom player is active, go back to previous video in playlist
  if (typeof customMusicState !== 'undefined' && customMusicState.active && customMusicState.service === 'youtube' && ytPlayer && ytPlayer.previousVideo) {
    try {
      ytPlayer.previousVideo();
      return;
    } catch (e) {
      console.warn("YouTube previousVideo error:", e);
    }
  }

  const currentPlaylist = PLAYLISTS[state.currentVibe] || PLAYLISTS.focus;
  let prevIndex = state.currentTrackIndex - 1;
  if (prevIndex < 0) {
    prevIndex = currentPlaylist.length - 1;
  }
  state.currentTrackIndex = prevIndex;
  loadTrack(state.currentVibe, state.currentTrackIndex);
  if (musicAudio) {
    musicAudio.play().catch(e => console.log("Play prev track error:", e));
  }
  state.isPlaying = true;
  if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
  if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
  updateTvPowerLed();
  updateNowPlayingStatus();
  updateMusicMenuSelection();

  if (typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({
      currentVibe: state.currentVibe,
      currentTrackIndex: prevIndex,
      trackStartTime: Date.now(),
      isPlaying: true
    });
  }
}

// --- SOUNDSCAPE MIXER HANDLERS ---
function handleSoundscapeChange(name, volume) {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }

  const vol = parseFloat(volume);
  state.soundscapeVols[name] = vol;
  adjustSoundscapeVolume(name, vol);

  if (typeof window.updateFirebaseRoomState === 'function') {
    const updatedSoundscapes = { ...state.soundscapeVols, [name]: vol };
    window.updateFirebaseRoomState({
      soundscapes: updatedSoundscapes
    });
  }
}

function adjustSoundscapeVolume(name, volume) {
  const audio = soundscapeElements[name];
  const gainNode = soundscapeGainNodes[name];
  
  if (audio && gainNode) {
    if (volume > 0) {
      if (audio.paused) {
        audio.play().catch(e => console.log("Audio play blocked until interaction"));
      }
      gainNode.gain.setTargetAtTime(volume, audioContext.currentTime, 0.1);
    } else {
      gainNode.gain.setTargetAtTime(0, audioContext.currentTime, 0.1);
    }
  }

  // Trigger weather & lights visual mapping
  updateWeatherVisuals();
}

function updateWeatherVisuals() {
  // All weather overlays were attached to Scene 1, which has been removed.
  // We can add Scene 2 weather overlay mappings here in the future if needed.
}

// --- MASTER VOLUME CONTROL ---
function handleMasterVolume(val) {
  const clamped = Math.max(0, Math.min(1, parseFloat(val) || 0));
  if (musicAudio) {
    musicAudio.volume = clamped;
    musicAudio.muted = (clamped === 0);
  }
  if (typeof customMusicState !== 'undefined' && customMusicState.active && customMusicState.service === 'youtube' && ytPlayer && ytPlayer.setVolume) {
    try {
      ytPlayer.setVolume(clamped * 100);
      if (clamped === 0) ytPlayer.mute(); else ytPlayer.unMute();
    } catch (e) {}
  }
  if (masterGainNode && audioContext) {
    masterGainNode.gain.setValueAtTime(clamped, audioContext.currentTime);
  }
  isMuted = (clamped === 0);
  if (clamped > 0) {
    previousMasterVolume = clamped;
  }
  updateMuteIcon();
  if (typeof updateHotspotVolumes === 'function') updateHotspotVolumes();
}

function toggleMute() {
  const tvVolumeKnob = document.getElementById('tvVolumeKnob');
  if (isMuted) {
    isMuted = false;
    const restoreVol = previousMasterVolume > 0 ? previousMasterVolume : 0.7;
    if (musicAudio) {
      musicAudio.muted = false;
      musicAudio.volume = restoreVol;
    }
    if (typeof customMusicState !== 'undefined' && customMusicState.active && customMusicState.service === 'youtube' && ytPlayer && ytPlayer.unMute) {
      try {
        ytPlayer.unMute();
        ytPlayer.setVolume(restoreVol * 100);
      } catch (e) {}
    }
    if (elSliderMaster) elSliderMaster.value = restoreVol;
    if (masterGainNode && audioContext) {
      masterGainNode.gain.setValueAtTime(restoreVol, audioContext.currentTime);
    }
    if (tvVolumeKnob) {
      const volAngles = [-120, -60, 0, 60, 120];
      const volLevels = [0.0, 0.25, 0.5, 0.75, 1.0];
      let closestIdx = 3;
      let minDiff = 100;
      for (let i = 0; i < volLevels.length; i++) {
        let diff = Math.abs(volLevels[i] - restoreVol);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }
      tvVolumeKnob.style.transform = `rotate(${volAngles[closestIdx]}deg)`;
    }
  } else {
    previousMasterVolume = elSliderMaster ? (parseFloat(elSliderMaster.value) || 0.7) : (musicAudio ? (musicAudio.volume || 0.7) : 0.7);
    isMuted = true;
    if (musicAudio) {
      musicAudio.muted = true;
      musicAudio.volume = 0;
    }
    if (typeof customMusicState !== 'undefined' && customMusicState.active && customMusicState.service === 'youtube' && ytPlayer && ytPlayer.mute) {
      try {
        ytPlayer.mute();
      } catch (e) {}
    }
    if (elSliderMaster) elSliderMaster.value = 0;
    if (masterGainNode && audioContext) {
      masterGainNode.gain.setValueAtTime(0, audioContext.currentTime);
    }
    if (tvVolumeKnob) {
      tvVolumeKnob.style.transform = `rotate(-120deg)`;
    }
  }
  updateMuteIcon();
  if (typeof updateHotspotVolumes === 'function') updateHotspotVolumes();
}

function updateMuteIcon() {
  if (!elBtnMute) return;
  if (isMuted) {
    elBtnMute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    elBtnMute.classList.add('muted');
    elBtnMute.title = "Unmute Music";
  } else if (elSliderMaster && elSliderMaster.value < 0.35) {
    elBtnMute.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
    elBtnMute.classList.remove('muted');
    elBtnMute.title = "Mute Music";
  } else {
    elBtnMute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    elBtnMute.classList.remove('muted');
    elBtnMute.title = "Mute Music";
  }
}


// --- INTERACTIVE HOTSPOTS LOOPS ---
// --- INTERACTIVE HOTSPOTS LOOPS ---
function setupInteractiveRoom() {
  setupRoomPanelControls();
  if (typeof setupTodoPanelControls === 'function') {
    setupTodoPanelControls();
  }
}

function setupRoomPanelControls() {
  const elScreenRoomWidget = document.getElementById('screenRoomWidget');
  const elToggleRoomBtn = document.getElementById('toggleRoomBtn');
  const elPanelRoom = document.getElementById('panelRoom');
  const elClosePanelRoom = document.getElementById('closePanelRoom');
  const elBtnCopyRoomLink = document.getElementById('btnCopyRoomLink');
  const elRoomInviteInput = document.getElementById('roomInviteInput');
  const elBtnSwitchRoom = document.getElementById('btnSwitchRoom');
  const elRoomNameInput = document.getElementById('roomNameInput');

  function openRoomPanel() {
    if (!elPanelRoom) return;
    elPanelRoom.classList.add('open');
    if (elToggleRoomBtn) elToggleRoomBtn.classList.add('active');
    const elPanelProfile = document.getElementById('panelProfile');
    if (elPanelProfile) elPanelProfile.classList.remove('open');
    const elToggleProfileBtn = document.getElementById('toggleProfileBtn');
    if (elToggleProfileBtn) elToggleProfileBtn.classList.remove('active');
    if (typeof closeTodoPanel === 'function') closeTodoPanel();
    updateRoomUI();
  }

  function closeRoomPanel() {
    if (!elPanelRoom) return;
    elPanelRoom.classList.remove('open');
    if (elToggleRoomBtn) elToggleRoomBtn.classList.remove('active');
  }

  function toggleRoomPanel() {
    if (!elPanelRoom) return;
    if (elPanelRoom.classList.contains('open')) {
      closeRoomPanel();
    } else {
      openRoomPanel();
    }
  }

  if (elScreenRoomWidget) {
    elScreenRoomWidget.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRoomPanel();
    });
  }

  if (elToggleRoomBtn) {
    elToggleRoomBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleRoomPanel();
    });
  }

  if (elClosePanelRoom) {
    elClosePanelRoom.addEventListener('click', (e) => {
      e.stopPropagation();
      closeRoomPanel();
    });
  }

  // Copy invite link
  if (elBtnCopyRoomLink) {
    elBtnCopyRoomLink.addEventListener('click', async (e) => {
      e.stopPropagation();
      const inviteUrl = getRoomInviteUrl();
      try {
        await navigator.clipboard.writeText(inviteUrl);
        elBtnCopyRoomLink.classList.add('copied');
        elBtnCopyRoomLink.innerHTML = '<i class="fa-solid fa-check"></i> <span>Copied!</span>';
        showRoomToast('🔗 <strong>Invite link copied!</strong> Send it to your friends to study together.');
        setTimeout(() => {
          if (elBtnCopyRoomLink) {
            elBtnCopyRoomLink.classList.remove('copied');
            elBtnCopyRoomLink.innerHTML = '<i class="fa-solid fa-copy"></i> <span>Copy</span>';
          }
        }, 2500);
      } catch (err) {
        if (elRoomInviteInput) {
          elRoomInviteInput.select();
          document.execCommand('copy');
          showRoomToast('🔗 <strong>Link copied!</strong> Share with friends.');
        }
      }
    });
  }

  // Select all text on clicking invite input
  if (elRoomInviteInput) {
    elRoomInviteInput.addEventListener('click', () => {
      elRoomInviteInput.select();
    });
  }

  // Switch or create room
  if (elBtnSwitchRoom && elRoomNameInput) {
    const handleSwitch = () => {
      const targetRoom = elRoomNameInput.value.trim();
      if (targetRoom) {
        switchStudyRoom(targetRoom);
      }
    };
    elBtnSwitchRoom.addEventListener('click', (e) => {
      e.stopPropagation();
      handleSwitch();
    });
    elRoomNameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSwitch();
      }
    });
  }

  // Close when clicking outside in roomContainer
  document.addEventListener('click', (e) => {
    if (elPanelRoom && elPanelRoom.classList.contains('open')) {
      if (!elPanelRoom.contains(e.target) && 
          (!elScreenRoomWidget || !elScreenRoomWidget.contains(e.target)) && 
          (!elToggleRoomBtn || !elToggleRoomBtn.contains(e.target))) {
        closeRoomPanel();
      }
    }
  });

  // Escape key closes room panel
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elPanelRoom && elPanelRoom.classList.contains('open')) {
      closeRoomPanel();
    }
  });
}

// --- UI UPDATERS ---
function updateVibeButtonsUI() {
  document.querySelectorAll('.vibe-btn').forEach(btn => {
    if (btn.dataset.vibe === state.currentVibe) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function updateProgressBar() {
  if (!musicAudio.duration) return;
  const percent = (musicAudio.currentTime / musicAudio.duration) * 100;
  if (elProgressBar) elProgressBar.style.width = `${percent}%`;
  
  if (elTimeCurrent) elTimeCurrent.textContent = formatTime(musicAudio.currentTime);
  if (elTimeDuration) elTimeDuration.textContent = formatTime(musicAudio.duration);
}

function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateListenersUI(listeners) {
  const count = listeners ? listeners.length : 1;
  if (elListenersCount) elListenersCount.textContent = count;

  const elRoomListenersCount = document.getElementById('roomListenersCount');
  if (elRoomListenersCount) elRoomListenersCount.textContent = count;

  const elRoomPillCount = document.getElementById('roomPillCount');
  if (elRoomPillCount) elRoomPillCount.innerHTML = `<i class="fa-solid fa-user-group"></i> ${count}`;

  const elRoomMembersList = document.getElementById('roomMembersList');
  if (elRoomMembersList) {
    elRoomMembersList.innerHTML = '';
    if (!listeners || listeners.length === 0) {
      elRoomMembersList.innerHTML = '<div class="no-members-hint">No other buddies yet. Click "Copy" above and send the link to friends!</div>';
    } else {
      listeners.forEach(user => {
        const card = document.createElement('div');
        card.className = `room-member-card ${user.isMe ? 'is-me' : ''}`;

        let avatarHtml = '';
        if (user.avatarUrl) {
          avatarHtml = `<img src="${user.avatarUrl}" referrerpolicy="no-referrer" class="member-avatar-img" alt="${user.displayName}">`;
        } else {
          avatarHtml = `<span class="member-avatar-emoji">${user.avatar || '🎧'}</span>`;
        }

        card.innerHTML = `
          <div class="member-avatar-wrap">
            ${avatarHtml}
            <span class="member-online-dot"></span>
          </div>
          <div class="member-meta">
            <div class="member-name">${user.displayName} ${user.isMe ? '<span class="you-badge">(You)</span>' : ''}</div>
            <div class="member-status-sub">${user.isMe ? 'Host / You' : 'Studying with you'}</div>
          </div>
        `;
        elRoomMembersList.appendChild(card);
      });
    }
  }

  if (elListenersList) {
    elListenersList.innerHTML = '';
    if (listeners) {
      listeners.forEach(user => {
        const badge = document.createElement('div');
        badge.className = 'listener-avatar-badge';
        if (user.avatarUrl) {
          badge.innerHTML = `<img src="${user.avatarUrl}" referrerpolicy="no-referrer" class="listener-avatar-img" style="width:20px;height:20px;border-radius:50%;object-fit:cover;"> <span>${user.displayName}</span>`;
        } else {
          badge.innerHTML = `<span class="avatar-icon">${user.avatar || '🎧'}</span> <span>${user.displayName}</span>`;
        }
        elListenersList.appendChild(badge);
      });
    }
  }
}



// --- STUDY CHECKLIST & TO-DO LIST (TV SCREEN PANEL) ---
const LOCAL_STORAGE_TODO_KEY = 'lofify_study_todos_v1';
let currentTodoFilter = 'all'; // 'all' | 'active' | 'completed'

function loadTodosFromStorage() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_TODO_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.todos = parsed;
        return;
      }
    }
  } catch (err) {
    console.warn("Could not read todos from localStorage:", err);
  }

  // Sensible default starter tasks for first-time visitors
  state.todos = [
    { id: 'todo-sample-1', text: 'Study with lo-fi beats (25m focus)', completed: false, createdAt: Date.now() },
    { id: 'todo-sample-2', text: 'Drink water & stretch during break', completed: false, createdAt: Date.now() + 1 }
  ];
  saveTodosToStorage();
}

function saveTodosToStorage() {
  try {
    localStorage.setItem(LOCAL_STORAGE_TODO_KEY, JSON.stringify(state.todos));
  } catch (err) {
    console.warn("Could not save todos to localStorage:", err);
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function updateTodoUI() {
  if (!elTodoList) return;
  elTodoList.innerHTML = '';

  const total = state.todos.length;
  const completedCount = state.todos.filter(t => t.completed).length;
  const activeCount = total - completedCount;
  const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  // Update progress badge & bar
  if (elTodoProgressPill) {
    elTodoProgressPill.textContent = `${completedCount} / ${total} done`;
  }
  if (elTodoProgressBarFill) {
    elTodoProgressBarFill.style.width = `${pct}%`;
  }

  // Filter tasks
  let filtered = state.todos;
  if (currentTodoFilter === 'active') {
    filtered = state.todos.filter(t => !t.completed);
  } else if (currentTodoFilter === 'completed') {
    filtered = state.todos.filter(t => t.completed);
  }

  // Empty state handling
  if (elTodoEmptyState) {
    if (filtered.length === 0) {
      elTodoEmptyState.style.display = 'flex';
      const emptyP = elTodoEmptyState.querySelector('p');
      if (emptyP) {
        if (total === 0) {
          emptyP.innerHTML = 'No study tasks yet.<br><span>Add your first goal above to get in the zone!</span>';
        } else if (currentTodoFilter === 'active') {
          emptyP.innerHTML = 'All tasks completed! 🎉<br><span>Take a rest or add a new study goal.</span>';
        } else if (currentTodoFilter === 'completed') {
          emptyP.innerHTML = 'No completed tasks yet.<br><span>Check off tasks as you finish them!</span>';
        }
      }
    } else {
      elTodoEmptyState.style.display = 'none';
    }
  }

  // Bottom action bar (Clear completed)
  if (elTodoBottomActions && elTodoStatusSummary) {
    if (total > 0) {
      elTodoBottomActions.style.display = 'flex';
      elTodoStatusSummary.textContent = `${activeCount} task${activeCount === 1 ? '' : 's'} remaining`;
      if (elClearCompletedTodoBtn) {
        elClearCompletedTodoBtn.style.display = completedCount > 0 ? 'inline-block' : 'none';
      }
    } else {
      elTodoBottomActions.style.display = 'none';
    }
  }

  // Render items
  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = `todo-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;

    li.innerHTML = `
      <div class="todo-item-content">
        <i class="todo-check-icon fa-regular ${task.completed ? 'fa-circle-check' : 'fa-circle'}"></i>
        <span class="todo-text">${escapeHtml(task.text)}</span>
      </div>
      <button type="button" class="delete-todo-btn" data-id="${task.id}" title="Delete task">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    `;

    // Toggle completion listener
    li.querySelector('.todo-item-content').addEventListener('click', () => {
      const willBeCompleted = !task.completed;
      task.completed = willBeCompleted;
      if (willBeCompleted && typeof recordCompletedTask === 'function') {
        recordCompletedTask();
      }
      saveTodosToStorage();
      saveTodoToSupabase(task, 'upsert');
      updateTodoUI();
    });

    // Delete listener
    li.querySelector('.delete-todo-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      state.todos = state.todos.filter(t => t.id !== task.id);
      saveTodosToStorage();
      saveTodoToSupabase(task, 'delete');
      updateTodoUI();
    });

    elTodoList.appendChild(li);
  });
}

function openTodoPanel() {
  if (!elPanelTodo) return;
  elPanelTodo.classList.add('open');
  if (elToggleTodoBtn) elToggleTodoBtn.classList.add('active');
  if (elPanelRoom) elPanelRoom.classList.remove('open');
  if (elToggleRoomBtn) elToggleRoomBtn.classList.remove('active');
  if (elPanelProfile) elPanelProfile.classList.remove('open');
  if (elToggleProfileBtn) elToggleProfileBtn.classList.remove('active');
  updateTodoUI();
  if (elTodoInput) elTodoInput.focus();
}

function closeTodoPanel() {
  if (!elPanelTodo) return;
  elPanelTodo.classList.remove('open');
  if (elToggleTodoBtn) elToggleTodoBtn.classList.remove('active');
}

function toggleTodoPanel() {
  if (!elPanelTodo) return;
  if (elPanelTodo.classList.contains('open')) {
    closeTodoPanel();
  } else {
    openTodoPanel();
  }
}

function setupTodoPanelControls() {
  // Bezel toggle button
  if (elToggleTodoBtn) {
    elToggleTodoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTodoPanel();
    });
  }

  // Panel close button
  if (elClosePanelTodo) {
    elClosePanelTodo.addEventListener('click', (e) => {
      e.stopPropagation();
      closeTodoPanel();
    });
  }

  // Filter tabs
  const filterBtns = document.querySelectorAll('.todo-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTodoFilter = btn.dataset.filter || 'all';
      updateTodoUI();
    });
  });

  // Quick suggestion chips
  const chips = document.querySelectorAll('.todo-chip-btn');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskText = chip.dataset.text || chip.textContent.replace('+', '').trim();
      if (!taskText) return;
      const taskId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ('00000000-0000-4000-8000-' + Date.now().toString(16).padStart(12, '0'));
      const newTask = {
        id: taskId,
        text: taskText,
        completed: false,
        createdAt: Date.now()
      };
      state.todos.unshift(newTask);
      saveTodosToStorage();
      saveTodoToSupabase(newTask, 'upsert');
      updateTodoUI();
    });
  });

  // Clear completed button
  if (elClearCompletedTodoBtn) {
    elClearCompletedTodoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const completedTasks = state.todos.filter(t => t.completed);
      completedTasks.forEach(t => saveTodoToSupabase(t, 'delete'));
      state.todos = state.todos.filter(t => !t.completed);
      saveTodosToStorage();
      updateTodoUI();
    });
  }

  // Todo Form submit
  if (elTodoForm && elTodoInput) {
    elTodoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = elTodoInput.value.trim();
      if (!taskText) return;

      const taskId = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : ('00000000-0000-4000-8000-' + Date.now().toString(16).padStart(12, '0'));
      const newTask = {
        id: taskId,
        text: taskText,
        completed: false,
        createdAt: Date.now()
      };
      state.todos.unshift(newTask);
      saveTodosToStorage();
      saveTodoToSupabase(newTask, 'upsert');
      updateTodoUI();
      elTodoInput.value = '';
    });
  }

  // Initial load
  loadTodosFromStorage();
  updateTodoUI();
}

// --- BUTTONS EVENTS WIRE UP ---
if (elBtnPlay) elBtnPlay.addEventListener('click', togglePlay);
if (elBtnPrev) elBtnPrev.addEventListener('click', playPrevTrack);
if (elBtnNext) elBtnNext.addEventListener('click', playNextTrack);
if (elBtnMute) {
  elBtnMute.addEventListener('click', toggleMute);
}

if (elSliderMaster) {
  elSliderMaster.addEventListener('input', (e) => {
    handleMasterVolume(parseFloat(e.target.value));
  });
}



// Audio Progress Seek
if (elProgressContainer) {
  elProgressContainer.addEventListener('click', (e) => {
    if (!musicAudio || !musicAudio.duration) return;
    const rect = elProgressContainer.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const seekTime = percentage * musicAudio.duration;
    
    musicAudio.currentTime = seekTime;
    updateProgressBar();

    if (typeof window.updateFirebaseRoomState === 'function') {
      window.updateFirebaseRoomState({
        trackStartTime: Date.now() - (seekTime * 1000)
      });
    }
  });
}

// Digital Clock Logic (Permanent Display)
function startClock() {
  function updateTime() {
    if (!elDigitalClock) return;
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    elDigitalClock.textContent = `${hours}:${minutes} ${ampm}`;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

// // Focus & Rest Pomodoro Timer Logic
let timerState = {
  focusMinutes: 25,
  restMinutes: 5,
  currentPhase: 'focus', // 'focus' | 'rest'
  remainingSeconds: 25 * 60,
  isRunning: false,
  intervalId: null
};

function formatTimerTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateTimerUI() {
  if (elTimerDisplay) {
    elTimerDisplay.textContent = formatTimerTime(timerState.remainingSeconds);
  }

  if (elTimerPhaseBadge) {
    if (timerState.currentPhase === 'focus') {
      elTimerPhaseBadge.style.display = 'none';
      if (elTimerPhaseText) elTimerPhaseText.textContent = '';
    } else {
      elTimerPhaseBadge.style.display = 'inline-flex';
      elTimerPhaseBadge.className = 'timer-phase-badge rest';
      if (elTimerPhaseText) elTimerPhaseText.textContent = 'REST';
    }
  }

  if (elTimerPlayIcon) {
    if (timerState.isRunning) {
      elTimerPlayIcon.className = 'fa-solid fa-pause';
    } else {
      elTimerPlayIcon.className = 'fa-solid fa-play';
    }
  }
}

function playTimerChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.15); // E5
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.6);
  } catch (e) {}
}

function tickTimer() {
  if (timerState.remainingSeconds > 0) {
    timerState.remainingSeconds--;
    updateTimerUI();
  } else {
    // Phase completed: automatic transition
    playTimerChime();
    if (timerState.currentPhase === 'focus') {
      if (typeof recordCompletedFocusSession === 'function') {
        recordCompletedFocusSession(timerState.focusMinutes);
      }
      timerState.currentPhase = 'rest';
      timerState.remainingSeconds = timerState.restMinutes * 60;
    } else {
      timerState.currentPhase = 'focus';
      timerState.remainingSeconds = timerState.focusMinutes * 60;
    }
    updateTimerUI();
    broadcastTimerAction('phase_transition');
  }
}

function getTimerSyncPayload(action = 'sync') {
  return {
    action: action,
    isRunning: timerState.isRunning,
    currentPhase: timerState.currentPhase,
    remainingSeconds: timerState.remainingSeconds,
    focusMinutes: timerState.focusMinutes,
    restMinutes: timerState.restMinutes,
    timestamp: Date.now()
  };
}

function broadcastTimerAction(action) {
  const payload = getTimerSyncPayload(action);
  if (typeof window.sendTimerRoomAction === 'function') {
    window.sendTimerRoomAction(payload);
  }
  if (typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({ timer: payload });
  }
}

function startTimer(isRemote = false) {
  if (timerState.isRunning) return;
  timerState.isRunning = true;
  if (timerState.intervalId) clearInterval(timerState.intervalId);
  timerState.intervalId = setInterval(tickTimer, 1000);
  updateTimerUI();
  if (elScreenTimerWidget) elScreenTimerWidget.classList.remove('hidden');
  if (!isRemote) {
    broadcastTimerAction('start');
  }
}

function pauseTimer(isRemote = false) {
  if (!timerState.isRunning) return;
  timerState.isRunning = false;
  if (timerState.intervalId) {
    clearInterval(timerState.intervalId);
    timerState.intervalId = null;
  }
  updateTimerUI();
  if (!isRemote) {
    broadcastTimerAction('pause');
  }
}

function resetTimer(isRemote = false) {
  if (timerState.intervalId) {
    clearInterval(timerState.intervalId);
    timerState.intervalId = null;
  }
  timerState.isRunning = false;
  timerState.currentPhase = 'focus';
  timerState.remainingSeconds = (timerState.focusMinutes || 25) * 60;
  updateTimerUI();
  if (!isRemote) {
    broadcastTimerAction('reset');
  }
}

function handleTimerRoomSync(timerData) {
  if (!timerData) return;

  if (timerData.focusMinutes) timerState.focusMinutes = timerData.focusMinutes;
  if (timerData.restMinutes) timerState.restMinutes = timerData.restMinutes;
  if (elFocusTimeInput) elFocusTimeInput.value = timerState.focusMinutes;
  if (elRestTimeInput) elRestTimeInput.value = timerState.restMinutes;

  if (timerData.action === 'reset') {
    resetTimer(true);
    return;
  }

  if (timerData.currentPhase) {
    timerState.currentPhase = timerData.currentPhase;
  }

  if (timerData.isRunning) {
    let secs = timerData.remainingSeconds;
    if (timerData.timestamp) {
      const elapsed = Math.floor((Date.now() - timerData.timestamp) / 1000);
      secs = Math.max(0, secs - elapsed);
    }
    timerState.remainingSeconds = secs;
    if (!timerState.isRunning) {
      startTimer(true);
    } else {
      updateTimerUI();
    }
  } else {
    if (timerData.remainingSeconds !== undefined) {
      timerState.remainingSeconds = timerData.remainingSeconds;
    }
    if (timerState.isRunning) {
      pauseTimer(true);
    } else {
      updateTimerUI();
    }
  }

  if (elScreenTimerWidget && timerData.isRunning) {
    elScreenTimerWidget.classList.remove('hidden');
  }
}

function setupFocusTimer() {
  if (!elScreenTimerWidget) return;

  updateTimerUI();

  // Play/Pause button
  if (elTimerPlayBtn) {
    elTimerPlayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (timerState.isRunning) pauseTimer(false);
      else startTimer(false);
    });
  }

  // Reset button
  if (elTimerResetBtn) {
    elTimerResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetTimer(false);
    });
  }

  // Settings toggle
  function toggleSettings(open) {
    if (!elTimerSettingsModal) return;
    const shouldOpen = (open !== undefined) ? open : !elTimerSettingsModal.classList.contains('active');
    elTimerSettingsModal.classList.toggle('active', shouldOpen);
  }

  if (elTimerSettingsBtn) {
    elTimerSettingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSettings();
    });
  }

  if (elTimerDisplay) {
    elTimerDisplay.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSettings();
    });
  }

  if (elCloseTimerSettingsBtn) {
    elCloseTimerSettingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSettings(false);
    });
  }

  // Preset Buttons
  function selectPreset(focus, rest, activeBtn) {
    if (elFocusTimeInput) elFocusTimeInput.value = focus;
    if (elRestTimeInput) elRestTimeInput.value = rest;
    document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
    if (activeBtn) activeBtn.classList.add('active');
  }

  if (elPreset25_5) {
    elPreset25_5.addEventListener('click', () => selectPreset(25, 5, elPreset25_5));
  }
  if (elPreset50_10) {
    elPreset50_10.addEventListener('click', () => selectPreset(50, 10, elPreset50_10));
  }

  // Stepper Buttons
  function adjustInput(input, delta, min, max) {
    if (!input) return;
    let val = (parseInt(input.value, 10) || min) + delta;
    val = Math.max(min, Math.min(max, val));
    input.value = val;
    document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
  }

  if (elFocusDecBtn) elFocusDecBtn.addEventListener('click', () => adjustInput(elFocusTimeInput, -1, 1, 180));
  if (elFocusIncBtn) elFocusIncBtn.addEventListener('click', () => adjustInput(elFocusTimeInput, 1, 1, 180));
  if (elRestDecBtn) elRestDecBtn.addEventListener('click', () => adjustInput(elRestTimeInput, -1, 1, 60));
  if (elRestIncBtn) elRestIncBtn.addEventListener('click', () => adjustInput(elRestTimeInput, 1, 1, 60));

  // Start & Apply button in settings
  if (elTimerStartApplyBtn) {
    elTimerStartApplyBtn.addEventListener('click', () => {
      const fMin = Math.max(1, Math.min(180, parseInt(elFocusTimeInput.value, 10) || 25));
      const rMin = Math.max(1, Math.min(60, parseInt(elRestTimeInput.value, 10) || 5));
      timerState.focusMinutes = fMin;
      timerState.restMinutes = rMin;
      timerState.currentPhase = 'focus';
      timerState.remainingSeconds = fMin * 60;
      toggleSettings(false);
      resetTimer(false);
      startTimer(false);
    });
  }

  // Dismiss / Close widget buttons
  if (elCloseTimerBtn && elScreenTimerWidget) {
    elCloseTimerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      elScreenTimerWidget.classList.add('hidden');
      toggleSettings(false);
    });
  }

  // Bezel toggle timer button
  if (elToggleTimerBtn && elScreenTimerWidget) {
    elToggleTimerBtn.addEventListener('click', () => {
      elScreenTimerWidget.classList.toggle('hidden');
    });
  }

  // Close settings on outside click
  document.addEventListener('click', (e) => {
    if (elTimerSettingsModal && elTimerSettingsModal.classList.contains('active')) {
      if (!elTimerSettingsModal.contains(e.target) && !elTimerSettingsBtn.contains(e.target) && !elTimerDisplay.contains(e.target)) {
        toggleSettings(false);
      }
    }
  });

  // Initial UI draw
  updateTimerUI();
}



// ========================================================
// USER PROFILE & ANALYTICS ENGINE
// ========================================================

const STORAGE_KEY_PROFILE = 'lofi_user_profile_analytics';
const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getTodayDateString() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getTodayDayKey() {
  const d = new Date().getDay(); // 0: Sun, 1: Mon, ... 6: Sat
  const map = { 1: 'Mon', 2: 'Tue', 3: 'Wed', 4: 'Thu', 5: 'Fri', 6: 'Sat', 0: 'Sun' };
  return map[d] || 'Mon';
}

function getWeekNumber(d = new Date()) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

function getDefaultProfileData() {
  return {
    username: "Chill Scholar",
    avatar: "assets/images/avatars/cat.svg",
    avatarUrl: "assets/images/avatars/cat.svg",
    avatarAnimal: "cat",
    selectedAvatar: "Mochi Cat 🐱",
    hasCustomProfile: false,
    totalFocusMinutes: 0,
    completedSessions: 0,
    completedTasks: 0,
    dailyGoalMinutes: 60,
    streakDays: 1,
    lastActiveDate: getTodayDateString(),
    lastWeekNumber: getWeekNumber(),
    weeklyMinutes: {
      Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0
    },
    themeMinutes: {
      scene2: 0,
      scene_library: 0,
      scene_forest: 0,
      scene_forest_cabin: 0,
      scene_durga_puja: 0,
      scene_kali_puja: 0,
      scene_darjeeling: 0
    }
  };
}

let profileState = null;

function loadProfileData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (raw) {
      const parsed = JSON.parse(raw);
      profileState = { ...getDefaultProfileData(), ...parsed };
      if (!profileState.weeklyMinutes) {
        profileState.weeklyMinutes = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
      }
      if (!profileState.themeMinutes) {
        profileState.themeMinutes = { scene2: 0, scene_library: 0, scene_forest: 0, scene_forest_cabin: 0, scene_durga_puja: 0, scene_kali_puja: 0, scene_darjeeling: 0 };
      } else {
        if (profileState.themeMinutes.scene_forest === undefined) profileState.themeMinutes.scene_forest = 0;
        if (profileState.themeMinutes.scene_forest_cabin === undefined) profileState.themeMinutes.scene_forest_cabin = 0;
        if (profileState.themeMinutes.scene_durga_puja === undefined) profileState.themeMinutes.scene_durga_puja = 0;
        if (profileState.themeMinutes.scene_kali_puja === undefined) profileState.themeMinutes.scene_kali_puja = 0;
        if (profileState.themeMinutes.scene_darjeeling === undefined) profileState.themeMinutes.scene_darjeeling = 0;
      }

      // Check if new week has started, roll over weekly chart
      const currentWeek = getWeekNumber();
      if (profileState.lastWeekNumber !== currentWeek) {
        profileState.lastWeekNumber = currentWeek;
        profileState.weeklyMinutes = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
      }

      // Streak check
      const today = getTodayDateString();
      if (profileState.lastActiveDate && profileState.lastActiveDate !== today) {
        const lastDate = new Date(profileState.lastActiveDate);
        const nowDate = new Date(today);
        const diffTime = nowDate - lastDate;
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
          // Missed more than 1 day
          profileState.streakDays = 1;
        }
      }
    } else {
      profileState = getDefaultProfileData();
    }
  } catch (e) {
    console.error("Failed to load profile data:", e);
    profileState = getDefaultProfileData();
  }
  return profileState;
}

function saveProfileData() {
  try {
    if (!profileState) return;
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profileState));
    if (state.currentUser && state.currentUser.id) {
      saveProfileToSupabase(state.currentUser);
    }
  } catch (e) {
    console.error("Failed to save profile data:", e);
  }
}

function getLevelInfo(totalMinutes) {
  const level = Math.floor(totalMinutes / 60) + 1;
  const currentXp = totalMinutes % 60;
  let title = "Novice Scholar";
  if (level === 2) title = "Focused Mind";
  else if (level === 3) title = "Study Virtuoso";
  else if (level === 4) title = "Deep Work Guru";
  else if (level >= 5) title = "Zen Grandmaster";

  return {
    level,
    title,
    badgeText: `Lv. ${level} ${title}`,
    currentXp,
    xpPct: Math.max(5, Math.min(100, Math.round((currentXp / 60) * 100)))
  };
}

function formatMinutes(mins) {
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

function updateStreakOnActivity() {
  if (!profileState) return;
  const today = getTodayDateString();
  if (profileState.lastActiveDate === today) return;

  const lastDate = new Date(profileState.lastActiveDate);
  const nowDate = new Date(today);
  const diffTime = nowDate - lastDate;
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    profileState.streakDays = (profileState.streakDays || 1) + 1;
  } else if (diffDays > 1) {
    profileState.streakDays = 1;
  }
  profileState.lastActiveDate = today;
}

function renderWeeklyChart() {
  if (!elWeeklyBarsContainer || !profileState) return;
  const weekly = profileState.weeklyMinutes || {};
  const todayKey = getTodayDayKey();
  const maxMinutes = Math.max(60, ...WEEK_DAYS.map(d => weekly[d] || 0));

  elWeeklyBarsContainer.innerHTML = '';
  let weekTotal = 0;

  WEEK_DAYS.forEach(day => {
    const mins = weekly[day] || 0;
    weekTotal += mins;
    const isToday = (day === todayKey);
    const heightPct = mins > 0 ? Math.max(8, Math.min(100, Math.round((mins / maxMinutes) * 100))) : 4;

    const col = document.createElement('div');
    col.className = `weekly-bar-col ${isToday ? 'today' : ''}`;
    col.title = `${day}: ${mins}m logged`;

    col.innerHTML = `
      <div class="bar-val-label">${mins > 0 ? mins + 'm' : ''}</div>
      <div class="bar-track">
        <div class="bar-fill-elem" style="height: ${heightPct}%;"></div>
      </div>
      <div class="bar-day-name">${day}</div>
    `;
    elWeeklyBarsContainer.appendChild(col);
  });

  if (elChartTotalWeek) {
    elChartTotalWeek.textContent = `${weekTotal}m this week`;
  }
}

function renderThemeBreakdown() {
  if (!profileState) return;
  const tm = profileState.themeMinutes || {};
  const cabinMins = tm.scene2 || 0;
  const libraryMins = tm.scene_library || 0;
  const forestMins = tm.scene_forest || 0;
  const forestCabinMins = tm.scene_forest_cabin || 0;
  const durgaMins = tm.scene_durga_puja || 0;
  const kaliMins = tm.scene_kali_puja || 0;
  const darjeelingMins = tm.scene_darjeeling || 0;
  const saharaMins = tm.scene_sahara || 0;
  const total = cabinMins + libraryMins + forestMins + forestCabinMins + durgaMins + kaliMins + darjeelingMins + saharaMins;

  let cabinPct = 12;
  let libraryPct = 12;
  let forestPct = 12;
  let forestCabinPct = 12;
  let durgaPct = 12;
  let kaliPct = 14;
  let darjeelingPct = 13;
  let saharaPct = 13;
  if (total > 0) {
    cabinPct = Math.round((cabinMins / total) * 100);
    libraryPct = Math.round((libraryMins / total) * 100);
    forestPct = Math.round((forestMins / total) * 100);
    forestCabinPct = Math.round((forestCabinMins / total) * 100);
    durgaPct = Math.round((durgaMins / total) * 100);
    kaliPct = Math.round((kaliMins / total) * 100);
    darjeelingPct = Math.round((darjeelingMins / total) * 100);
    saharaPct = Math.max(0, 100 - cabinPct - libraryPct - forestPct - forestCabinPct - durgaPct - kaliPct - darjeelingPct);
  }

  if (elBreakdownCabinPct) elBreakdownCabinPct.textContent = `${cabinPct}%`;
  if (elBreakdownCabinBar) elBreakdownCabinBar.style.width = `${cabinPct}%`;
  if (elBreakdownLibraryPct) elBreakdownLibraryPct.textContent = `${libraryPct}%`;
  if (elBreakdownLibraryBar) elBreakdownLibraryBar.style.width = `${libraryPct}%`;
  if (elBreakdownForestPct) elBreakdownForestPct.textContent = `${forestPct}%`;
  if (elBreakdownForestBar) elBreakdownForestBar.style.width = `${forestPct}%`;
  if (elBreakdownForestCabinPct) elBreakdownForestCabinPct.textContent = `${forestCabinPct}%`;
  if (elBreakdownForestCabinBar) elBreakdownForestCabinBar.style.width = `${forestCabinPct}%`;
  if (elBreakdownDurgaPct) elBreakdownDurgaPct.textContent = `${durgaPct}%`;
  if (elBreakdownDurgaBar) elBreakdownDurgaBar.style.width = `${durgaPct}%`;
  if (elBreakdownKaliPct) elBreakdownKaliPct.textContent = `${kaliPct}%`;
  if (elBreakdownKaliBar) elBreakdownKaliBar.style.width = `${kaliPct}%`;
  if (elBreakdownDarjeelingPct) elBreakdownDarjeelingPct.textContent = `${darjeelingPct}%`;
  if (elBreakdownDarjeelingBar) elBreakdownDarjeelingBar.style.width = `${darjeelingPct}%`;
  if (elBreakdownSaharaPct) elBreakdownSaharaPct.textContent = `${saharaPct}%`;
  if (elBreakdownSaharaBar) elBreakdownSaharaBar.style.width = `${saharaPct}%`;
}

function renderProfileUI() {
  if (!profileState) return;

  // Avatar & Username
  if (elProfileAvatarDisplay) {
    const avatarPath = profileState.avatarUrl || profileState.avatar || "assets/images/avatars/cat.svg";
    if (typeof avatarPath === 'string' && (avatarPath.includes('/') || avatarPath.includes('.'))) {
      elProfileAvatarDisplay.innerHTML = `<img src="${avatarPath}" class="profile-avatar-img" alt="Avatar" referrerpolicy="no-referrer">`;
    } else {
      elProfileAvatarDisplay.textContent = avatarPath;
    }
  }
  if (elProfileUsernameDisplay) elProfileUsernameDisplay.textContent = profileState.username || "Chill Scholar";

  // Level & XP
  const levelInfo = getLevelInfo(profileState.totalFocusMinutes || 0);
  if (elProfileLevelBadge) elProfileLevelBadge.textContent = levelInfo.badgeText;
  if (elXpValues) elXpValues.textContent = `${levelInfo.currentXp} / 60 min`;
  if (elXpBarFill) elXpBarFill.style.width = `${levelInfo.xpPct}%`;

  // Streak Badge
  const streak = profileState.streakDays || 1;
  if (elProfileStreakBadge) {
    elProfileStreakBadge.textContent = `🔥 ${streak} Day${streak === 1 ? '' : 's'} Streak`;
  }

  // 4 Stats Cards
  if (elStatTotalFocus) elStatTotalFocus.textContent = formatMinutes(profileState.totalFocusMinutes || 0);
  if (elStatSessionsCount) elStatSessionsCount.textContent = profileState.completedSessions || 0;
  if (elStatTasksCount) elStatTasksCount.textContent = profileState.completedTasks || 0;
  if (elStatStreakCount) elStatStreakCount.textContent = `${streak} day${streak === 1 ? '' : 's'}`;

  // Daily Goal
  const todayKey = getTodayDayKey();
  const todayMins = (profileState.weeklyMinutes && profileState.weeklyMinutes[todayKey]) || 0;
  const goalMins = profileState.dailyGoalMinutes || 60;
  const goalPct = Math.min(100, Math.round((todayMins / goalMins) * 100));
  if (elGoalFraction) elGoalFraction.textContent = `${todayMins} / ${goalMins}m (${goalPct}%)`;
  if (elDailyGoalFill) elDailyGoalFill.style.width = `${goalPct}%`;

  // Weekly Chart & Breakdown
  renderWeeklyChart();
  renderThemeBreakdown();
}

// Global hook to record completed focus sessions
function recordCompletedFocusSession(mins = 25) {
  if (!profileState) loadProfileData();
  mins = Math.max(1, parseInt(mins, 10) || 25);

  profileState.totalFocusMinutes = (profileState.totalFocusMinutes || 0) + mins;
  profileState.completedSessions = (profileState.completedSessions || 0) + 1;

  const todayKey = getTodayDayKey();
  profileState.weeklyMinutes = profileState.weeklyMinutes || {};
  profileState.weeklyMinutes[todayKey] = (profileState.weeklyMinutes[todayKey] || 0) + mins;

  const currentTheme = state.currentTheme || 'scene2';
  profileState.themeMinutes = profileState.themeMinutes || {};
  profileState.themeMinutes[currentTheme] = (profileState.themeMinutes[currentTheme] || 0) + mins;

  updateStreakOnActivity();
  saveProfileData();
  renderProfileUI();
}

// Global hook to record completed todo tasks
function recordCompletedTask() {
  if (!profileState) loadProfileData();
  profileState.completedTasks = (profileState.completedTasks || 0) + 1;
  updateStreakOnActivity();
  saveProfileData();
  renderProfileUI();
}

// Global hook to record theme usage
function recordThemeUsage(themeId) {
  if (!profileState) loadProfileData();
  profileState.themeMinutes = profileState.themeMinutes || {};
  profileState.themeMinutes[themeId] = (profileState.themeMinutes[themeId] || 0) + 1;
  saveProfileData();
  renderThemeBreakdown();
}

function setupProfileAndAnalytics() {
  loadProfileData();
  renderProfileUI();

  // Slide panel toggle button on bezel
  if (elToggleProfileBtn && elPanelProfile) {
    elToggleProfileBtn.addEventListener('click', () => {
      const willOpen = !elPanelProfile.classList.contains('open');
      if (willOpen) {
        if (elPanelRoom) elPanelRoom.classList.remove('open');
        if (elToggleRoomBtn) elToggleRoomBtn.classList.remove('active');
        if (typeof closeTodoPanel === 'function') closeTodoPanel();
      }
      elPanelProfile.classList.toggle('open');
      elToggleProfileBtn.classList.toggle('active');
    });
  }

  // Close panel button
  if (elClosePanelProfile && elPanelProfile) {
    elClosePanelProfile.addEventListener('click', (e) => {
      e.stopPropagation();
      elPanelProfile.classList.remove('open');
      if (elToggleProfileBtn) elToggleProfileBtn.classList.remove('active');
      if (elAvatarPickerDropdown) elAvatarPickerDropdown.classList.add('hidden');
    });
  }

  // Close profile panel when clicking outside
  document.addEventListener('click', (e) => {
    if (elPanelProfile && elPanelProfile.classList.contains('open')) {
      if (!elPanelProfile.contains(e.target) && e.target !== elToggleProfileBtn && !elToggleProfileBtn.contains(e.target)) {
        elPanelProfile.classList.remove('open');
        if (elToggleProfileBtn) elToggleProfileBtn.classList.remove('active');
        if (elAvatarPickerDropdown) elAvatarPickerDropdown.classList.add('hidden');
      }
    }
  });

  // Open cute animal avatar modal from profile panel
  if (elChangeAvatarBtn) {
    elChangeAvatarBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProfileSetupModal(state.currentUser, true);
    });
  }

  if (elProfileAvatarDisplay) {
    elProfileAvatarDisplay.addEventListener('click', (e) => {
      e.stopPropagation();
      openProfileSetupModal(state.currentUser, true);
    });
  }

  // Edit username button
  if (elEditUsernameBtn) {
    elEditUsernameBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProfileSetupModal(state.currentUser, true);
    });
  }

  // Quick session logger (+25m)
  if (elAddQuickFocusBtn) {
    elAddQuickFocusBtn.addEventListener('click', () => {
      recordCompletedFocusSession(25);
    });
  }

  // Google Sign-in button
  const elBtnGoogleLogin = document.getElementById('btnGoogleLogin');
  if (elBtnGoogleLogin) {
    elBtnGoogleLogin.addEventListener('click', () => {
      signInWithGoogle();
    });
  }

  // Google Sign-out button in header
  const elBtnSignOut = document.getElementById('btnSignOut');
  if (elBtnSignOut) {
    elBtnSignOut.addEventListener('click', () => {
      signOutUser();
    });
  }

  // Logout / Sign-in bottom action button
  if (elLogoutBtn) {
    elLogoutBtn.addEventListener('click', () => {
      if (state.currentUser) {
        if (confirm("Sign out of your Google account?")) {
          signOutUser();
        }
      } else {
        signInWithGoogle();
      }
    });
  }

  // Close avatar dropdown when clicking elsewhere
  document.addEventListener('click', (e) => {
    if (elAvatarPickerDropdown && !elAvatarPickerDropdown.classList.contains('hidden')) {
      if (!elAvatarPickerDropdown.contains(e.target) && !elChangeAvatarBtn.contains(e.target)) {
        elAvatarPickerDropdown.classList.add('hidden');
      }
    }
  });
}

// Cursor Parallax Engine
function initParallax() {
  const layerBg = document.getElementById('layerBg');
  const layerMid = document.getElementById('layerMid');
  const layerFore = document.getElementById('layerFore');
  const room = document.getElementById('roomContainer');

  const bgMtn = document.getElementById('bg-mountains');
  const cabin = document.getElementById('foreground-cabin');
  const blizzard = document.getElementById('blizzard-canvas');

  if (!room) return;

  // window.addEventListener('mousemove', (e) => {
  //   // Parallax effect removed at user request
  // });

  // // Reset layers position on mouse leave
  // document.body.addEventListener('mouseleave', () => {
  //   // Parallax effect removed at user request
  // });
}

function initThemeSelector() {
  // Legacy — kept for compatibility. Theme switching now uses setupThemeSwitcher().
}

// --- THEME & WEATHER HELPERS ---
function isThemeWeatherActive(themeId) {
  if (themeId === 'scene2') return !!state.isBlizzardActive;
  if (themeId === 'scene_library') return !!state.isLibraryRainActive;
  if (themeId === 'scene_forest') return !!state.isForestRainActive;
  if (themeId === 'scene_forest_cabin') return !!state.isForestCabinRainActive;
  if (themeId === 'scene_durga_puja') return false;
  if (themeId === 'scene_kali_puja') return false;
  if (themeId === 'scene_darjeeling') return !!state.isDarjeelingRainActive;
  if (themeId === 'scene_sahara') return !!state.isSaharaSandstormActive;
  return false;
}

function getThemeDisplayName(themeId) {
  switch (themeId) {
    case 'scene2': return 'Winter Cabin';
    case 'scene_library': return 'Vintage Library';
    case 'scene_forest': return 'Misty Forest';
    case 'scene_forest_cabin': return 'Forest Cabin';
    case 'scene_durga_puja': return 'Durga Puja';
    case 'scene_kali_puja': return 'Kali Puja';
    case 'scene_darjeeling': return 'Darjeeling Veranda';
    case 'scene_sahara': return 'Sahara Oasis';
    default: return 'Cozy Room';
  }
}

function applyThemeWeather(themeId, isActive, isRemote = false) {
  if (themeId === 'scene2') {
    state.isBlizzardActive = isActive;
    state.hotspots.blizzard = isActive;
    const fogBg = document.getElementById('bg-mountains');
    if (fogBg) fogBg.classList.toggle('blizzard-fog', isActive);
    if (window.blizzardEngine) {
      if (isActive) window.blizzardEngine.activateBlizzard();
      else window.blizzardEngine.deactivateBlizzard();
    }
    const elBlizzard = document.getElementById('hotspotWinterBlizzard');
    if (elBlizzard) {
      elBlizzard.classList.toggle('active', isActive);
      const tt = elBlizzard.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = isActive ? 'Blizzard: Active' : 'Blizzard: Quiet';
    }
  } else if (themeId === 'scene_library') {
    state.isLibraryRainActive = isActive;
    state.hotspots.libraryRain = isActive;
    const bgLib = document.getElementById('bg-library');
    if (bgLib) bgLib.classList.toggle('rain-active', isActive);
    if (window.libraryRainEngine) {
      if (isActive) window.libraryRainEngine.start();
      else window.libraryRainEngine.stop();
    }
    const elLibRain = document.getElementById('hotspotLibraryRain');
    if (elLibRain) {
      elLibRain.classList.toggle('active', isActive);
      const tt = elLibRain.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = isActive ? 'Rain: Active' : 'Rain: Off';
    }
  } else if (themeId === 'scene_forest') {
    state.isForestRainActive = isActive;
    state.hotspots.forestRain = isActive;
    const bgForest = document.getElementById('bg-forest');
    if (bgForest) bgForest.classList.toggle('rainy', isActive);
    if (window.forestRainEngine) {
      if (isActive) window.forestRainEngine.start();
      else window.forestRainEngine.stop();
    }
    if (window.forestFireflyEngine) {
      if (!isActive) window.forestFireflyEngine.start();
      else window.forestFireflyEngine.stop();
    }
    const elForestRain = document.getElementById('hotspotForestRain');
    if (elForestRain) {
      elForestRain.classList.toggle('active', isActive);
      const tt = elForestRain.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = isActive ? 'Rain: Active' : 'Rain: Sunny';
    }
  } else if (themeId === 'scene_forest_cabin') {
    state.isForestCabinRainActive = isActive;
    state.hotspots.forestCabinRain = isActive;
    const bgForestCabin = document.getElementById('bg-forest-cabin');
    if (bgForestCabin) bgForestCabin.classList.toggle('rainy', isActive);
    if (window.forestCabinRainEngine) {
      if (isActive) window.forestCabinRainEngine.start();
      else window.forestCabinRainEngine.stop();
    }
    if (window.forestCabinFireflyEngine) {
      if (!isActive) window.forestCabinFireflyEngine.start();
      else window.forestCabinFireflyEngine.stop();
    }
    const elForestCabinRain = document.getElementById('hotspotForestCabinRain');
    if (elForestCabinRain) {
      elForestCabinRain.classList.toggle('active', isActive);
      const tt = elForestCabinRain.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = isActive ? 'Rain: Pouring' : 'Rain: Clear';
    }
  } else if (themeId === 'scene_durga_puja') {
    state.isDurgaPujaRainActive = isActive;
    const bgDurga = document.getElementById('bg-durga-puja');
    if (bgDurga) bgDurga.classList.toggle('rainy', isActive);
    if (window.durgaRainEngine) {
      if (isActive) window.durgaRainEngine.start();
      else window.durgaRainEngine.stop();
    }
    if (window.durgaSparklesEngine) {
      if (!isActive) window.durgaSparklesEngine.start();
      else window.durgaSparklesEngine.stop();
    }
  } else if (themeId === 'scene_kali_puja') {
    state.isKaliPujaRainActive = isActive;
    if (window.kaliRainEngine) {
      if (isActive) window.kaliRainEngine.start();
      else window.kaliRainEngine.stop();
    }
  } else if (themeId === 'scene_darjeeling') {
    state.isDarjeelingRainActive = isActive;
    state.hotspots.darjeelingRain = isActive;
    const sceneDj = document.getElementById('scene-darjeeling-container');
    if (sceneDj) sceneDj.classList.toggle('rainy', isActive);
    if (window.darjeelingRainEngine) {
      if (isActive) window.darjeelingRainEngine.start();
      else window.darjeelingRainEngine.stop();
    }
    if (window.darjeelingSunbeamsEngine) {
      if (!isActive) window.darjeelingSunbeamsEngine.start();
      else window.darjeelingSunbeamsEngine.stop();
    }
    const elDjRain = document.getElementById('hotspotDarjeelingRain');
    if (elDjRain) {
      elDjRain.classList.toggle('active', isActive);
      const tt = elDjRain.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = isActive ? 'Monsoon Rain: Active' : 'Monsoon Rain: Off';
    }
  } else if (themeId === 'scene_sahara') {
    state.isSaharaSandstormActive = isActive;
    state.hotspots.saharaWind = isActive;
    const bgSunset = document.getElementById('bg-sahara-sunset');
    const bgNight = document.getElementById('bg-sahara-night');
    if (bgSunset) bgSunset.classList.toggle('sandstorm-fog', isActive);
    if (bgNight) bgNight.classList.toggle('sandstorm-fog', isActive);

    if (window.saharaSandEngine) {
      if (isActive) window.saharaSandEngine.activateSandstorm();
      else window.saharaSandEngine.deactivateSandstorm();
    }
    if (window.saharaStarsEngine) {
      window.saharaStarsEngine.setObscured(isActive);
    }
    const elWind = document.getElementById('hotspotSaharaWind');
    if (elWind) {
      elWind.classList.toggle('active', isActive);
      const tt = elWind.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = isActive ? 'Sandstorm: Howling' : 'Desert Wind: Calm';
    }
  }

  // Update physical TV toggle switch position if active theme matches
  const tvWeatherSwitch = document.getElementById('tvWeatherSwitch');
  if (tvWeatherSwitch && state.currentTheme === themeId) {
    tvWeatherSwitch.classList.toggle('switch-up', !!isActive);
  }

  // Keep ambient audios in sync
  updateHotspotThemeAudios();

  // Broadcast to room if toggled locally
  if (!isRemote && typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({
      weather: {
        themeId: themeId,
        isActive: isActive,
        allWeather: {
          isBlizzardActive: state.isBlizzardActive,
          isLibraryRainActive: state.isLibraryRainActive,
          isForestRainActive: state.isForestRainActive,
          isForestCabinRainActive: state.isForestCabinRainActive,
          isDurgaPujaRainActive: state.isDurgaPujaRainActive,
          isKaliPujaRainActive: state.isKaliPujaRainActive,
          isDarjeelingRainActive: state.isDarjeelingRainActive,
          isSaharaNightActive: state.isSaharaNightActive,
          isSaharaSandstormActive: state.isSaharaSandstormActive
        }
      },
      hotspots: state.hotspots
    });
  }
}

// --- DISCORD LOFI-STYLE INTERACTIVE HOTSPOTS ---
const previousHotspotVolumes = {};

function updateHotspotSpeakerIcon(key, vol) {
  const sliders = document.querySelectorAll(`.hotspot-vol-slider[data-hotspot="${key}"]`);
  sliders.forEach(slider => {
    const bar = slider.closest('.hotspot-vol-bar');
    if (!bar) return;
    const icon = bar.querySelector('i');
    if (!icon) return;
    const numericVol = parseFloat(vol);
    if (numericVol <= 0.001) {
      icon.className = 'fa-solid fa-volume-xmark muted';
      icon.title = 'Unmute';
    } else if (numericVol >= 0.5) {
      icon.className = 'fa-solid fa-volume-high';
      icon.title = 'Mute';
    } else {
      icon.className = 'fa-solid fa-volume-low';
      icon.title = 'Mute';
    }
  });
}

function toggleHotspotMute(key) {
  if (!key) return;
  const currentVol = (state.hotspotVolumes && state.hotspotVolumes[key] !== undefined)
    ? state.hotspotVolumes[key]
    : 0.7;

  let targetVol;
  if (currentVol > 0.001) {
    previousHotspotVolumes[key] = currentVol;
    targetVol = 0;
  } else {
    targetVol = (previousHotspotVolumes[key] && previousHotspotVolumes[key] > 0.001)
      ? previousHotspotVolumes[key]
      : 0.7;
  }

  // Update slider input value across all matching elements
  const sliders = document.querySelectorAll(`.hotspot-vol-slider[data-hotspot="${key}"]`);
  sliders.forEach(slider => {
    slider.value = targetVol;
  });

  handleHotspotVolumeChange(key, targetVol);
  updateHotspotSpeakerIcon(key, targetVol);
}

function updateHotspotVolumes() {
  const masterVol = isMuted ? 0 : (previousMasterVolume ?? 0.7);
  for (const key in hotspotAudios) {
    const a = hotspotAudios[key];
    if (a) {
      a.muted = isMuted;
      const individualVol = (state.hotspotVolumes && state.hotspotVolumes[key] !== undefined)
        ? state.hotspotVolumes[key]
        : 0.7;
      a.volume = Math.max(0, Math.min(1, masterVol * individualVol));
    }
  }
}

function handleHotspotVolumeChange(hotspotKey, value) {
  const numVal = parseFloat(value);
  if (isNaN(numVal)) return;
  if (!state.hotspotVolumes) state.hotspotVolumes = {};
  const clamped = Math.max(0, Math.min(1, numVal));
  state.hotspotVolumes[hotspotKey] = clamped;
  if (clamped > 0.001) {
    previousHotspotVolumes[hotspotKey] = clamped;
  }
  updateHotspotVolumes();
  updateHotspotSpeakerIcon(hotspotKey, clamped);
}

function updateHotspotThemeAudios() {
  const theme = state.currentTheme;

  // Blizzard (scene2)
  if (theme === 'scene2' && state.hotspots.blizzard) {
    hotspotAudios.blizzard.play().catch(() => {});
  } else {
    hotspotAudios.blizzard.pause();
  }

  // Fireplace (scene_library)
  if (theme === 'scene_library' && state.hotspots.fireplace) {
    hotspotAudios.fireplace.play().catch(() => {});
  } else {
    hotspotAudios.fireplace.pause();
  }

  // Library Rain (scene_library)
  if (theme === 'scene_library' && state.hotspots.libraryRain) {
    hotspotAudios.libraryRain.play().catch(() => {});
  } else {
    hotspotAudios.libraryRain.pause();
  }

  // Forest House Rain (scene_forest)
  if (theme === 'scene_forest' && state.hotspots.forestRain) {
    hotspotAudios.forestRain.play().catch(() => {});
  } else {
    hotspotAudios.forestRain.pause();
  }

  // Forest Cabin Rain (scene_forest_cabin)
  if (theme === 'scene_forest_cabin' && state.hotspots.forestCabinRain) {
    hotspotAudios.forestCabinRain.play().catch(() => {});
  } else {
    hotspotAudios.forestCabinRain.pause();
  }

  // Durga Puja Dhak (scene_durga_puja)
  if (theme === 'scene_durga_puja' && state.hotspots.durgaDhak) {
    hotspotAudios.durgaDhak.play().catch(() => {});
  } else {
    hotspotAudios.durgaDhak.pause();
  }

  // Kali Puja Fireworks (scene_kali_puja)
  if (theme === 'scene_kali_puja' && state.hotspots.kaliFireworks) {
    hotspotAudios.kaliFireworks.play().catch(() => {});
    if (window.kaliFireworksInstance && !window.kaliFireworksInstance.isRunning) {
      window.kaliFireworksInstance.start();
    }
  } else {
    hotspotAudios.kaliFireworks.pause();
    if (window.kaliFireworksInstance && window.kaliFireworksInstance.isRunning) {
      window.kaliFireworksInstance.stop();
    }
  }

  // Kali Puja Shyama Sangeet (scene_kali_puja)
  if (theme === 'scene_kali_puja' && state.hotspots.kaliShyama) {
    hotspotAudios.kaliShyama.play().catch(() => {});
  } else {
    hotspotAudios.kaliShyama.pause();
  }

  // Darjeeling Veranda (scene_darjeeling)
  if (theme === 'scene_darjeeling' && state.hotspots.darjeelingRain) {
    hotspotAudios.darjeelingRain.play().catch(() => {});
  } else {
    hotspotAudios.darjeelingRain.pause();
  }

  if (theme === 'scene_darjeeling' && state.hotspots.darjeelingChai) {
    hotspotAudios.darjeelingChai.play().catch(() => {});
  } else {
    hotspotAudios.darjeelingChai.pause();
  }

  if (theme === 'scene_darjeeling' && state.hotspots.darjeelingBirds) {
    hotspotAudios.darjeelingBirds.play().catch(() => {});
  } else {
    hotspotAudios.darjeelingBirds.pause();
  }

  // Sahara Oasis (scene_sahara)
  if (theme === 'scene_sahara' && state.hotspots.saharaCampfire) {
    hotspotAudios.saharaCampfire.play().catch(() => {});
  } else {
    hotspotAudios.saharaCampfire.pause();
  }

  if (theme === 'scene_sahara' && state.hotspots.saharaWind) {
    hotspotAudios.saharaWind.play().catch(() => {});
  } else {
    hotspotAudios.saharaWind.pause();
  }

  if (theme === 'scene_sahara' && state.hotspots.saharaTea) {
    hotspotAudios.saharaTea.play().catch(() => {});
  } else {
    hotspotAudios.saharaTea.pause();
  }
}

function toggleHotspot(hotspotId, forceState = null, isRemote = false) {
  const currentState = !!state.hotspots[hotspotId];
  const newState = (forceState !== null) ? !!forceState : !currentState;
  state.hotspots[hotspotId] = newState;

  updateHotspotVolumes();

  const hotspotElements = {
    blizzard: { btn: 'hotspotWinterBlizzard', wrap: 'wrapWinterBlizzard', label: 'Blizzard', onTxt: 'Active', offTxt: 'Quiet' },
    fireplace: { btn: 'hotspotLibraryFurnace', wrap: 'wrapLibraryFurnace', label: 'Furnace', onTxt: 'Burning', offTxt: 'Off' },
    libraryRain: { btn: 'hotspotLibraryRain', wrap: 'wrapLibraryRain', label: 'Rain', onTxt: 'Active', offTxt: 'Off' },
    forestRain: { btn: 'hotspotForestRain', wrap: 'wrapForestRain', label: 'Rain', onTxt: 'Active', offTxt: 'Sunny' },
    forestCabinRain: { btn: 'hotspotForestCabinRain', wrap: 'wrapForestCabinRain', label: 'Rain', onTxt: 'Pouring', offTxt: 'Clear' },
    durgaDhak: { btn: 'hotspotDurgaDhak', wrap: 'wrapDurgaDhak', label: 'Dhak', onTxt: 'Playing', offTxt: 'Paused' },
    kaliFireworks: { btn: 'hotspotKaliFireworks', wrap: 'wrapKaliFireworks', label: 'Fireworks', onTxt: 'Active', offTxt: 'Off' },
    kaliShyama: { btn: 'hotspotKaliShyama', wrap: 'wrapKaliShyama', label: 'Shyama Sangeet', onTxt: 'Playing', offTxt: 'Paused' },
    darjeelingChai: { btn: 'hotspotDarjeelingChai', wrap: 'wrapDarjeelingChai', label: 'Masala Chai', onTxt: 'Hot & Steaming', offTxt: 'Off' },
    darjeelingRain: { btn: 'hotspotDarjeelingRain', wrap: 'wrapDarjeelingRain', label: 'Tin Roof Rain', onTxt: 'Monsoon Pouring', offTxt: 'Off' },
    darjeelingBirds: { btn: 'hotspotDarjeelingBirds', wrap: 'wrapDarjeelingBirds', label: 'Himalayan Birds', onTxt: 'Singing', offTxt: 'Quiet' },
    saharaCampfire: { btn: 'hotspotSaharaCampfire', wrap: 'wrapSaharaCampfire', label: 'Cedar Campfire', onTxt: 'Crackling', offTxt: 'Quiet' },
    saharaWind: { btn: 'hotspotSaharaWind', wrap: 'wrapSaharaWind', label: 'Sandstorm', onTxt: 'Howling', offTxt: 'Calm' },
    saharaTea: { btn: 'hotspotSaharaTea', wrap: 'wrapSaharaTea', label: 'Mint Tea Pot', onTxt: 'Bubbling', offTxt: 'Off' },
    saharaSky: { btn: 'hotspotSaharaSky', wrap: 'wrapSaharaSky', label: 'Sky', onTxt: 'Starlit Night', offTxt: 'Sunset Twilight' }
  };

  const meta = hotspotElements[hotspotId];
  if (meta) {
    const elBtn = document.getElementById(meta.btn);
    const elWrap = document.getElementById(meta.wrap);
    if (elBtn) {
      elBtn.classList.toggle('active', newState);
      const tt = elBtn.querySelector('.hotspot-tooltip');
      if (tt) tt.textContent = `${meta.label}: ${newState ? meta.onTxt : meta.offTxt}`;
    }
    if (elWrap) {
      elWrap.classList.toggle('active', newState);
    }
  }

  switch (hotspotId) {
    case 'blizzard':
      applyThemeWeather('scene2', newState, true);
      break;

    case 'fireplace':
      break;

    case 'libraryRain':
      applyThemeWeather('scene_library', newState, true);
      break;

    case 'forestRain':
      applyThemeWeather('scene_forest', newState, true);
      break;

    case 'forestCabinRain':
      applyThemeWeather('scene_forest_cabin', newState, true);
      break;

    case 'durgaDhak':
      break;

    case 'kaliFireworks':
      if (window.kaliFireworksInstance) {
        if (newState && state.currentTheme === 'scene_kali_puja') {
          if (!window.kaliFireworksInstance.isRunning) window.kaliFireworksInstance.start();
        } else {
          window.kaliFireworksInstance.stop();
        }
      }
      break;

    case 'kaliShyama':
      break;

    case 'darjeelingRain':
      applyThemeWeather('scene_darjeeling', newState, true);
      break;

    case 'darjeelingChai':
      break;

    case 'darjeelingBirds':
      break;

    case 'saharaCampfire':
      break;

    case 'saharaWind':
      applyThemeWeather('scene_sahara', newState, true);
      break;

    case 'saharaTea':
      break;

    case 'saharaSky':
      state.isSaharaNightActive = !state.isSaharaNightActive;
      const sceneSh = document.getElementById('scene-sahara-container');
      if (sceneSh) sceneSh.classList.toggle('night', state.isSaharaNightActive);
      if (window.saharaSandEngine) {
        window.saharaSandEngine.setNightMode(state.isSaharaNightActive);
      }
      if (window.saharaStarsEngine) {
        if (state.isSaharaNightActive) window.saharaStarsEngine.start();
        else window.saharaStarsEngine.stop();
      }
      const elSky = document.getElementById('hotspotSaharaSky');
      if (elSky) {
        elSky.classList.toggle('active', state.isSaharaNightActive);
        const tt = elSky.querySelector('.hotspot-tooltip');
        if (tt) tt.textContent = state.isSaharaNightActive ? 'Sky: Starlit Night' : 'Sky: Sunset Twilight';
      }
      break;
  }

  updateHotspotThemeAudios();

  // Sync to room peers
  if (!isRemote && typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({
      hotspots: state.hotspots
    });
  }
}

function initHotspots() {
  const binds = [
    { id: 'hotspotWinterBlizzard', key: 'blizzard' },
    { id: 'hotspotLibraryFurnace', key: 'fireplace' },
    { id: 'hotspotLibraryRain', key: 'libraryRain' },
    { id: 'hotspotForestRain', key: 'forestRain' },
    { id: 'hotspotForestCabinRain', key: 'forestCabinRain' },
    { id: 'hotspotDurgaDhak', key: 'durgaDhak' },
    { id: 'hotspotKaliFireworks', key: 'kaliFireworks' },
    { id: 'hotspotKaliShyama', key: 'kaliShyama' },
    { id: 'hotspotDarjeelingChai', key: 'darjeelingChai' },
    { id: 'hotspotDarjeelingRain', key: 'darjeelingRain' },
    { id: 'hotspotDarjeelingBirds', key: 'darjeelingBirds' },
    { id: 'hotspotSaharaCampfire', key: 'saharaCampfire' },
    { id: 'hotspotSaharaWind', key: 'saharaWind' },
    { id: 'hotspotSaharaTea', key: 'saharaTea' },
    { id: 'hotspotSaharaSky', key: 'saharaSky' }
  ];

  binds.forEach(({ id, key }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleHotspot(key);
      });
    }
  });

  // Wire volume sliders for each hotspot
  document.querySelectorAll('.hotspot-vol-slider').forEach(slider => {
    const key = slider.dataset.hotspot;
    if (key && state.hotspotVolumes && state.hotspotVolumes[key] !== undefined) {
      slider.value = state.hotspotVolumes[key];
    }
    slider.addEventListener('click', (e) => e.stopPropagation());
    slider.addEventListener('pointerdown', (e) => e.stopPropagation());
    slider.addEventListener('mousedown', (e) => e.stopPropagation());
    slider.addEventListener('input', (e) => {
      e.stopPropagation();
      handleHotspotVolumeChange(key, e.target.value);
    });
    slider.addEventListener('change', (e) => {
      e.stopPropagation();
      handleHotspotVolumeChange(key, e.target.value);
    });
  });

  // Wire speaker icons for instant mute toggle like Spotify
  document.querySelectorAll('.hotspot-vol-bar i').forEach(icon => {
    icon.style.cursor = 'pointer';
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const slider = icon.parentElement ? icon.parentElement.querySelector('.hotspot-vol-slider') : null;
      if (slider && slider.dataset.hotspot) {
        toggleHotspotMute(slider.dataset.hotspot);
      }
    });
    icon.addEventListener('pointerdown', (e) => e.stopPropagation());
    icon.addEventListener('mousedown', (e) => e.stopPropagation());
  });

  // Prevent clicks inside the volume capsule from bubbling to the scene
  document.querySelectorAll('.hotspot-vol-bar').forEach(bar => {
    bar.addEventListener('click', (e) => e.stopPropagation());
    bar.addEventListener('pointerdown', (e) => e.stopPropagation());
    bar.addEventListener('mousedown', (e) => e.stopPropagation());
  });

  // Sync initial UI classes & volume icons
  for (const key in state.hotspots) {
    toggleHotspot(key, state.hotspots[key], true);
  }
  if (state.hotspotVolumes) {
    for (const key in state.hotspotVolumes) {
      updateHotspotSpeakerIcon(key, state.hotspotVolumes[key]);
    }
  }
}

// --- THEME SWITCHER ---
function setupThemeSwitcher() {
  const cards = document.querySelectorAll('.theme-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const theme = card.dataset.theme;
      if (theme === state.currentTheme) return;
      switchTheme(theme, false, false);
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

function switchTheme(themeId = 'scene2', triggerPlay = false, isRemote = false) {
  state.currentTheme = themeId;
  if (typeof recordThemeUsage === 'function') {
    recordThemeUsage(themeId);
  }

  // Sync retro TV weather switch position for active theme
  const tvWeatherSwitch = document.getElementById('tvWeatherSwitch');
  if (tvWeatherSwitch) {
    let isWeatherActive = isThemeWeatherActive(themeId);
    tvWeatherSwitch.classList.toggle('switch-up', !!isWeatherActive);
  }

  // Weather switch is not needed for Durga Puja and Kali Puja
  const tvWeatherSwitchContainer = document.getElementById('tvWeatherSwitchContainer');
  if (tvWeatherSwitchContainer) {
    if (themeId === 'scene_durga_puja' || themeId === 'scene_kali_puja') {
      tvWeatherSwitchContainer.style.display = 'none';
    } else {
      tvWeatherSwitchContainer.style.display = 'flex';
    }
  }

  // Sync sidebar theme cards
  document.querySelectorAll('.theme-card').forEach(card => {
    card.classList.toggle('active', card.dataset.theme === themeId);
  });

  // Sync on-screen TV theme menu cards
  document.querySelectorAll('.screen-theme-card').forEach(card => {
    card.classList.toggle('active', card.dataset.theme === themeId);
  });

  // Toggle scene containers
  if (elScene2) elScene2.style.display = (themeId === 'scene2') ? 'block' : 'none';
  if (elSceneLibrary) elSceneLibrary.style.display = (themeId === 'scene_library') ? 'block' : 'none';
  if (elSceneForest) elSceneForest.style.display = (themeId === 'scene_forest') ? 'block' : 'none';
  if (elSceneForestCabin) elSceneForestCabin.style.display = (themeId === 'scene_forest_cabin') ? 'block' : 'none';
  if (elSceneDurgaPuja) elSceneDurgaPuja.style.display = (themeId === 'scene_durga_puja') ? 'block' : 'none';
  if (elSceneKaliPuja) elSceneKaliPuja.style.display = (themeId === 'scene_kali_puja') ? 'block' : 'none';
  if (elSceneDarjeeling) elSceneDarjeeling.style.display = (themeId === 'scene_darjeeling') ? 'block' : 'none';
  if (elSceneSahara) elSceneSahara.style.display = (themeId === 'scene_sahara') ? 'block' : 'none';

  // Manage Winter Cabin engine
  if (themeId === 'scene2') {
    if (window.blizzardEngine) {
      window.blizzardEngine.resize();
      window.blizzardEngine.start();
      if (state.isBlizzardActive) window.blizzardEngine.activateBlizzard();
      else window.blizzardEngine.deactivateBlizzard();
    }
    if (elBgMountains) {
      if (state.isBlizzardActive) elBgMountains.classList.add('blizzard-fog');
      else elBgMountains.classList.remove('blizzard-fog');
    }
    drawCabinForeground();
  } else {
    if (window.blizzardEngine) window.blizzardEngine.stop();
  }

  // Manage Grand Library rain engine
  if (themeId === 'scene_library') {
    if (window.libraryRainEngine) {
      window.libraryRainEngine.resize();
      if (state.isLibraryRainActive) window.libraryRainEngine.start();
      else window.libraryRainEngine.stop();
    }
    if (elBgLibrary) {
      if (state.isLibraryRainActive) elBgLibrary.classList.add('rain-active');
      else elBgLibrary.classList.remove('rain-active');
    }
    drawLibraryForeground();
  } else {
    if (window.libraryRainEngine) window.libraryRainEngine.stop();
  }

  // Manage Forest House engine
  if (themeId === 'scene_forest') {
    if (elBgForest) {
      elBgForest.classList.toggle('rainy', !!state.isForestRainActive);
    }
    if (window.forestRainEngine) {
      window.forestRainEngine.resize();
      if (state.isForestRainActive) window.forestRainEngine.start();
      else window.forestRainEngine.stop();
    }
    if (window.forestFireflyEngine) {
      window.forestFireflyEngine.resize();
      if (!state.isForestRainActive) window.forestFireflyEngine.start();
      else window.forestFireflyEngine.stop();
    }
  } else {
    if (window.forestRainEngine) window.forestRainEngine.stop();
    if (window.forestFireflyEngine) window.forestFireflyEngine.stop();
  }

  // Manage Forest Cabin engine (Study Desk in the Woods)
  if (themeId === 'scene_forest_cabin') {
    if (elBgForestCabin) {
      elBgForestCabin.classList.toggle('rainy', !!state.isForestCabinRainActive);
    }
    if (window.forestCabinRainEngine) {
      window.forestCabinRainEngine.resize();
      if (state.isForestCabinRainActive) window.forestCabinRainEngine.start();
      else window.forestCabinRainEngine.stop();
    }
    if (window.forestCabinFireflyEngine) {
      window.forestCabinFireflyEngine.resize();
      if (!state.isForestCabinRainActive) window.forestCabinFireflyEngine.start();
      else window.forestCabinFireflyEngine.stop();
    }
  } else {
    if (window.forestCabinRainEngine) window.forestCabinRainEngine.stop();
    if (window.forestCabinFireflyEngine) window.forestCabinFireflyEngine.stop();
  }

  // Manage Durga Puja engine (Kolkata Evening Street)
  if (themeId === 'scene_durga_puja') {
    if (elBgDurgaPuja) {
      elBgDurgaPuja.classList.toggle('rainy', !!state.isDurgaPujaRainActive);
    }
    if (window.durgaRainEngine) {
      window.durgaRainEngine.resize();
      if (state.isDurgaPujaRainActive) window.durgaRainEngine.start();
      else window.durgaRainEngine.stop();
    }
    if (window.durgaSparklesEngine) {
      window.durgaSparklesEngine.resize();
      if (!state.isDurgaPujaRainActive) window.durgaSparklesEngine.start();
      else window.durgaSparklesEngine.stop();
    }
  } else {
    if (window.durgaRainEngine) window.durgaRainEngine.stop();
    if (window.durgaSparklesEngine) window.durgaSparklesEngine.stop();
  }

  // Manage Kali Puja fireworks & rain (Night Sky & Pandal)
  if (themeId === 'scene_kali_puja') {
    initKaliFireworks();
    if (window.kaliFireworksInstance) {
      const container = document.getElementById('kali-fireworks-container');
      if (container && container.clientWidth > 0 && container.clientHeight > 0) {
        window.kaliFireworksInstance.updateSize({
          width: container.clientWidth,
          height: container.clientHeight
        });
        window.kaliFireworksInstance.updateBoundaries({
          x: 20,
          y: 15,
          width: container.clientWidth,
          height: container.clientHeight
        });
      }
      if (state.hotspots.kaliFireworks && !window.kaliFireworksInstance.isRunning) {
        window.kaliFireworksInstance.start();
      }
    }
    if (window.kaliRainEngine) {
      window.kaliRainEngine.resize();
      if (state.isKaliPujaRainActive) window.kaliRainEngine.start();
      else window.kaliRainEngine.stop();
    }
  } else {
    if (window.kaliFireworksInstance) {
      window.kaliFireworksInstance.stop();
    }
    if (window.kaliRainEngine) {
      window.kaliRainEngine.stop();
    }
  }

  // Manage Darjeeling Veranda engine (Himalayan Tea Estate)
  if (themeId === 'scene_darjeeling') {
    const sceneDj = document.getElementById('scene-darjeeling-container');
    if (sceneDj) {
      sceneDj.classList.toggle('rainy', !!state.isDarjeelingRainActive);
    }
    if (window.darjeelingRainEngine) {
      window.darjeelingRainEngine.resize();
      if (state.isDarjeelingRainActive) window.darjeelingRainEngine.start();
      else window.darjeelingRainEngine.stop();
    }
    if (window.darjeelingSunbeamsEngine) {
      window.darjeelingSunbeamsEngine.resize();
      if (!state.isDarjeelingRainActive) window.darjeelingSunbeamsEngine.start();
      else window.darjeelingSunbeamsEngine.stop();
    }
  } else {
    if (window.darjeelingRainEngine) window.darjeelingRainEngine.stop();
    if (window.darjeelingSunbeamsEngine) window.darjeelingSunbeamsEngine.stop();
  }

  // Manage Sahara Oasis engine (Bedouin Tent & Desert Stars)
  if (themeId === 'scene_sahara') {
    const sceneSh = document.getElementById('scene-sahara-container');
    if (sceneSh) {
      sceneSh.classList.toggle('night', !!state.isSaharaNightActive);
    }
    const bgSunset = document.getElementById('bg-sahara-sunset');
    const bgNight = document.getElementById('bg-sahara-night');
    if (bgSunset) bgSunset.classList.toggle('sandstorm-fog', !!state.isSaharaSandstormActive);
    if (bgNight) bgNight.classList.toggle('sandstorm-fog', !!state.isSaharaSandstormActive);

    if (window.saharaStarsEngine) {
      window.saharaStarsEngine.resize();
      window.saharaStarsEngine.setObscured(!!state.isSaharaSandstormActive);
      if (state.isSaharaNightActive) window.saharaStarsEngine.start();
      else window.saharaStarsEngine.stop();
    }
    if (window.saharaSandEngine) {
      window.saharaSandEngine.resize();
      window.saharaSandEngine.setNightMode(!!state.isSaharaNightActive);
      if (state.isSaharaSandstormActive) window.saharaSandEngine.activateSandstorm();
      else window.saharaSandEngine.deactivateSandstorm();
      window.saharaSandEngine.start();
    }
  } else {
    if (window.saharaStarsEngine) window.saharaStarsEngine.stop();
    if (window.saharaSandEngine) window.saharaSandEngine.stop();
  }

  // Durga Puja & Kali Puja use relaxing Lo-Fi beats same as all other themes
  if (state.currentVibe === 'durga_puja' || state.currentVibe === 'kali_puja') {
    state.currentVibe = 'focus';
    state.currentTrackIndex = 0;
    loadTrack('focus', 0);
  }

  // Audio Playback State on Theme Switch (Seamlessly preserve active playback)
  const wasPlaying = Boolean(state.isPlaying || (musicAudio && !musicAudio.paused));
  const shouldPlay = triggerPlay || wasPlaying;

  if (shouldPlay) {
    if (musicAudio) {
      if (isMuted) {
        isMuted = false;
        const restoreVol = previousMasterVolume > 0 ? previousMasterVolume : 0.7;
        musicAudio.muted = false;
        musicAudio.volume = restoreVol;
        if (elSliderMaster) elSliderMaster.value = restoreVol;
        updateMuteIcon();
      }
      if (musicAudio.paused) {
        musicAudio.play().then(() => {
          state.isPlaying = true;
          if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
          if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
          updateTvPowerLed();
          updateNowPlayingStatus();
          updateMusicMenuSelection();
          if (typeof window.updateFirebaseRoomState === 'function') {
            window.updateFirebaseRoomState({
              currentVibe: state.currentVibe,
              currentTrackIndex: state.currentTrackIndex,
              trackStartTime: Date.now(),
              isPlaying: true
            });
          }
        }).catch(err => {
          console.log("Audio playback waiting for user interaction:", err);
        });
      } else {
        state.isPlaying = true;
        if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
        updateTvPowerLed();
        updateNowPlayingStatus();
        updateMusicMenuSelection();
      }
    }
  } else {
    // Only pause if music was not playing and triggerPlay was false
    state.isPlaying = false;
    if (musicAudio) {
      musicAudio.pause();
    }
    if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    if (elTrackIcon) elTrackIcon.style.animationPlayState = 'paused';
    updateTvPowerLed();
    updateNowPlayingStatus();
    updateMusicMenuSelection();
  }

  // Update theme-specific interactive hotspot audios
  updateHotspotThemeAudios();

  // Broadcast theme change to room if not from remote peer
  if (!isRemote && typeof window.updateFirebaseRoomState === 'function') {
    window.updateFirebaseRoomState({
      currentTheme: themeId,
      currentVibe: state.currentVibe,
      currentTrackIndex: state.currentTrackIndex,
      isPlaying: state.isPlaying
    });
  }
}

// --- SCENE 2 SETUP (Winter Cabin) ---
function setupScene2() {
  processGreenScreenScene2();
}

function processGreenScreenScene2() {
  const img = new Image();
  img.onload = () => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;

    // Build chromakeyed foreground canvas (removes green window area)
    window.foregroundCabinCanvas = document.createElement('canvas');
    window.foregroundCabinCanvas.width = w;
    window.foregroundCabinCanvas.height = h;
    const fgCtx = window.foregroundCabinCanvas.getContext('2d');
    fgCtx.imageSmoothingEnabled = true;
    fgCtx.imageSmoothingQuality = 'high';
    fgCtx.drawImage(img, 0, 0);

    const fgImgData = fgCtx.getImageData(0, 0, w, h);
    const fgData = fgImgData.data;

    for (let i = 0; i < fgData.length; i += 4) {
      const pixelIdx = i / 4;
      const py = Math.floor(pixelIdx / w);

      // Key out both left and right window panes (upper 55% of the frame)
      // Leaves desk, laptop, papers, books, and lamp 100% untouched
      if (py < h * 0.55) {
        const r = fgData[i];
        const g = fgData[i + 1];
        const b = fgData[i + 2];

        const isChroma = (r <= 70 && g >= 140 && b <= 70);
        const isDominantGreen = (g > 65 && g > r * 1.35 && g > b * 1.35);
        if (isChroma || isDominantGreen) {
          fgData[i + 3] = 0; // make transparent
        } else if (g > r && g > 60) {
          // Clean subtle green edge fringe along window frames
          fgData[i + 1] = Math.floor(r * 0.85);
        }
      }
    }

    fgCtx.putImageData(fgImgData, 0, 0);
    cabinForegroundProcessed = true;
    drawCabinForeground();
  };
  img.src = 'assets/images/scene2/foreground_cabin.jpg';
}

function drawCabinForeground() {
  if (!cabinForegroundProcessed || !window.foregroundCabinCanvas) return;
  const canvas = document.getElementById('cabin-foreground-layer');
  if (!canvas) return;
  const container = document.getElementById('roomContainer');
  if (!container) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  const w = container.clientWidth;
  const h = container.clientHeight;

  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCoverImage(ctx, window.foregroundCabinCanvas, canvas.width, canvas.height);
}

// --- SCENE LIBRARY SETUP (Grand Library) ---
function setupSceneLibrary() {
  processGreenScreenLibrary();
}

function processGreenScreenLibrary() {
  const img = new Image();
  img.onload = () => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;

    window.foregroundLibraryCanvas = document.createElement('canvas');
    window.foregroundLibraryCanvas.width = w;
    window.foregroundLibraryCanvas.height = h;
    const fgCtx = window.foregroundLibraryCanvas.getContext('2d');
    fgCtx.imageSmoothingEnabled = true;
    fgCtx.imageSmoothingQuality = 'high';
    fgCtx.drawImage(img, 0, 0);

    const fgImgData = fgCtx.getImageData(0, 0, w, h);
    const fgData = fgImgData.data;

    for (let i = 0; i < fgData.length; i += 4) {
      const pixelIdx = i / 4;
      const py = Math.floor(pixelIdx / w);
      const px = pixelIdx % w;

      // Only check pixels in upper arched window bounding area
      // Preserves 100% of the room interior, books, fireplace, wood, and candles untouched
      if (py < h * 0.35 && px > w * 0.50 && px < w * 0.76) {
        const r = fgData[i];
        const g = fgData[i + 1];
        const b = fgData[i + 2];

        // Detect bright chroma-green in upper windows
        const isChroma = (r <= 80 && g >= 140 && b <= 80);
        const isDominantGreen = (g > 65 && g > r * 1.25 && g > b * 1.25);
        if (isChroma || isDominantGreen) {
          fgData[i + 3] = 0; // make window pane transparent
        } else if (g > r && g > 60) {
          // Suppress green fringe along thin wooden railing posts
          fgData[i + 1] = Math.floor(r * 0.85);
        }
      }
    }

    fgCtx.putImageData(fgImgData, 0, 0);
    libraryForegroundProcessed = true;
    drawLibraryForeground();
  };
  img.src = 'assets/images/scene_library/foreground_library.jpg';
}

function drawLibraryForeground() {
  if (!libraryForegroundProcessed || !window.foregroundLibraryCanvas) return;
  const canvas = document.getElementById('library-foreground-layer');
  if (!canvas) return;
  const container = document.getElementById('roomContainer');
  if (!container) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  const w = container.clientWidth;
  const h = container.clientHeight;

  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;

  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCoverImage(ctx, window.foregroundLibraryCanvas, canvas.width, canvas.height);
}

function drawCoverImage(ctx, source, targetW, targetH) {
  const srcW = source.width;
  const srcH = source.height;
  const srcRatio = srcW / srcH;
  const targetRatio = targetW / targetH;

  let sx, sy, sw, sh;
  if (targetRatio > srcRatio) {
    sw = srcW;
    sh = srcW / targetRatio;
    sx = 0;
    sy = (srcH - sh) / 2;
  } else {
    sw = srcH * targetRatio;
    sh = srcH;
    sx = (srcW - sw) / 2;
    sy = 0;
  }

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(source, sx, sy, sw, sh, 0, 0, targetW, targetH);
}

// Comprehensive resize handler across all visual layers & canvas engines
function handleAllResizes() {
  if (window.blizzardEngine) window.blizzardEngine.resize();
  if (window.libraryRainEngine) window.libraryRainEngine.resize();
  if (window.forestRainEngine) window.forestRainEngine.resize();
  if (window.forestFireflyEngine) window.forestFireflyEngine.resize();
  if (window.forestCabinRainEngine) window.forestCabinRainEngine.resize();
  if (window.forestCabinFireflyEngine) window.forestCabinFireflyEngine.resize();
  if (window.durgaRainEngine) window.durgaRainEngine.resize();
  if (window.durgaSparklesEngine) window.durgaSparklesEngine.resize();
  if (window.kaliFireworksInstance) {
    const container = document.getElementById('kali-fireworks-container');
    if (container && container.clientWidth > 0 && container.clientHeight > 0) {
      window.kaliFireworksInstance.updateSize({
        width: container.clientWidth,
        height: container.clientHeight
      });
      window.kaliFireworksInstance.updateBoundaries({
        x: 20,
        y: 15,
        width: container.clientWidth,
        height: container.clientHeight
      });
    }
  }
  if (window.kaliRainEngine) window.kaliRainEngine.resize();
  if (window.darjeelingRainEngine) window.darjeelingRainEngine.resize();
  if (window.darjeelingSunbeamsEngine) window.darjeelingSunbeamsEngine.resize();
  if (window.saharaStarsEngine) window.saharaStarsEngine.resize();
  if (window.saharaSandEngine) window.saharaSandEngine.resize();
  drawCabinForeground();
  drawLibraryForeground();
}

window.addEventListener('resize', handleAllResizes);
window.addEventListener('orientationchange', () => {
  setTimeout(handleAllResizes, 150);
});

// --- RETRO TV BEZEL CONTROLS INTERACTIVE HANDLERS ---
function updateTvPowerLed() {
  const elTvPowerLed = document.getElementById('tvPowerLed');
  if (elTvPowerLed) {
    if (state.isPlaying) {
      elTvPowerLed.classList.add('glow-red');
    } else {
      elTvPowerLed.classList.remove('glow-red');
    }
  }
}

function setupTvBezelControls() {
  const tvVolumeKnob = document.getElementById('tvVolumeKnob');
  const tvChannelBtn = document.getElementById('tvChannelBtn');
  const tvWeatherSwitch = document.getElementById('tvWeatherSwitch');

  // Initial power LED state
  updateTvPowerLed();

  // 1. Volume Knob Rotation Cycles (Linear Step volume control)
  const volLevels = [0.0, 0.25, 0.5, 0.75, 1.0];
  const volAngles = [-120, -60, 0, 60, 120];
  let currentVolIndex = 3; // Default: unmuted (~75%)

  if (elSliderMaster) {
    const initVol = parseFloat(elSliderMaster.value) || 0;
    let closestIdx = 0;
    let minDiff = 100;
    for (let i = 0; i < volLevels.length; i++) {
      let diff = Math.abs(volLevels[i] - initVol);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    currentVolIndex = closestIdx;
    if (tvVolumeKnob) {
      tvVolumeKnob.style.transform = `rotate(${volAngles[currentVolIndex]}deg)`;
    }
  }

  if (tvVolumeKnob) {
    tvVolumeKnob.addEventListener('click', () => {
      currentVolIndex = (currentVolIndex + 1) % volLevels.length;
      tvVolumeKnob.style.transform = `rotate(${volAngles[currentVolIndex]}deg)`;
      
      const targetVol = volLevels[currentVolIndex];
      if (elSliderMaster) {
        elSliderMaster.value = targetVol;
      }
      handleMasterVolume(targetVol);
    });
  }

  // 2. Channel Switcher Button & On-Screen Horizontal Theme Menu
  const screenThemeMenu = document.getElementById('screenThemeMenu');
  const closeThemeMenuBtn = document.getElementById('closeThemeMenuBtn');
  const screenThemeTrack = document.getElementById('screenThemeTrack');
  const themeScrollPrevBtn = document.getElementById('themeScrollPrevBtn');
  const themeScrollNextBtn = document.getElementById('themeScrollNextBtn');

  if (tvChannelBtn && screenThemeMenu) {
    function updateThemeNavButtons() {
      if (!screenThemeTrack || !themeScrollPrevBtn || !themeScrollNextBtn) return;
      const maxScroll = Math.max(0, screenThemeTrack.scrollWidth - screenThemeTrack.clientWidth);
      const atStart = screenThemeTrack.scrollLeft <= 4;
      const atEnd = screenThemeTrack.scrollLeft >= maxScroll - 4;

      themeScrollPrevBtn.classList.toggle('disabled', atStart);
      themeScrollNextBtn.classList.toggle('disabled', atEnd);
    }

    function scrollActiveCardIntoView() {
      if (!screenThemeTrack) return;
      const activeCard = screenThemeTrack.querySelector('.screen-theme-card.active');
      if (activeCard) {
        // Scroll within the track only — never scroll the window
        const cardLeft = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        const trackWidth = screenThemeTrack.offsetWidth;
        const targetScroll = cardLeft - (trackWidth / 2) + (cardWidth / 2);
        screenThemeTrack.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
      setTimeout(updateThemeNavButtons, 350);
    }

    tvChannelBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = screenThemeMenu.classList.toggle('active');
      tvChannelBtn.classList.toggle('active', isOpen);
      if (isOpen) {
        updateThemeNavButtons();
        setTimeout(scrollActiveCardIntoView, 60);
      }
    });

    if (closeThemeMenuBtn) {
      closeThemeMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        screenThemeMenu.classList.remove('active');
        tvChannelBtn.classList.remove('active');
      });
    }

    // Scroll navigation arrows (scroll smoothly by ~65% of track width)
    if (themeScrollPrevBtn && screenThemeTrack) {
      themeScrollPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const step = Math.max(240, Math.round(screenThemeTrack.clientWidth * 0.65));
        screenThemeTrack.scrollBy({ left: -step, behavior: 'smooth' });
        setTimeout(updateThemeNavButtons, 250);
      });
    }
    if (themeScrollNextBtn && screenThemeTrack) {
      themeScrollNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const step = Math.max(240, Math.round(screenThemeTrack.clientWidth * 0.65));
        screenThemeTrack.scrollBy({ left: step, behavior: 'smooth' });
        setTimeout(updateThemeNavButtons, 250);
      });
    }

    // Mouse & Trackpad Wheel Handling
    if (screenThemeTrack) {
      screenThemeTrack.addEventListener('wheel', (e) => {
        // Native horizontal trackpad gesture
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          return;
        }

        // Vertical mouse wheel mapped to horizontal scroll
        if (e.deltaY !== 0) {
          e.preventDefault();
          screenThemeTrack.scrollLeft += e.deltaY;
          updateThemeNavButtons();
        }
      }, { passive: false });

      screenThemeTrack.addEventListener('scroll', updateThemeNavButtons, { passive: true });

      // Drag-to-Scroll Support
      let isDown = false;
      let startX = 0;
      let scrollStart = 0;
      let draggedDist = 0;

      screenThemeTrack.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        isDown = true;
        draggedDist = 0;
        startX = e.pageX;
        scrollStart = screenThemeTrack.scrollLeft;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const diff = e.pageX - startX;
        draggedDist = Math.abs(diff);
        if (draggedDist > 5) {
          screenThemeTrack.classList.add('is-dragging');
          screenThemeTrack.scrollLeft = scrollStart - diff;
          updateThemeNavButtons();
        }
      });

      window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        setTimeout(() => {
          screenThemeTrack.classList.remove('is-dragging');
          draggedDist = 0;
        }, 60);
      });

      // Click handler for theme cards inside the on-screen menu
      const screenThemeCards = document.querySelectorAll('.screen-theme-card');
      screenThemeCards.forEach(card => {
        card.addEventListener('click', (e) => {
          if (draggedDist > 6) {
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          e.stopPropagation();
          const theme = card.dataset.theme;
          if (theme) {
            switchTheme(theme, false);
            scrollActiveCardIntoView();
          }
        });
      });
    }

    // Close menu when clicking outside it in roomContainer
    const roomContainer = document.getElementById('roomContainer');
    if (roomContainer) {
      roomContainer.addEventListener('click', (e) => {
        if (!screenThemeMenu.contains(e.target) && e.target !== tvChannelBtn) {
          screenThemeMenu.classList.remove('active');
          tvChannelBtn.classList.remove('active');
        }
      });
    }

    // Escape key closes menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && screenThemeMenu.classList.contains('active')) {
        screenThemeMenu.classList.remove('active');
        tvChannelBtn.classList.remove('active');
      }
    });

    // Initial load: Theme menu is open by default so user can immediately browse
    // but once closed, it never re-opens automatically at random times
    if (screenThemeMenu.classList.contains('active')) {
      tvChannelBtn.classList.add('active');
      updateThemeNavButtons();
      setTimeout(scrollActiveCardIntoView, 120);
    }
  }

  // 3. Weather Toggle Switch (Blizzard in Cabin / Rain in Library / Rain in Forest House)
  const tvWeatherSwitchContainer = document.getElementById('tvWeatherSwitchContainer');
  if (tvWeatherSwitchContainer) {
    if (state.currentTheme === 'scene_durga_puja' || state.currentTheme === 'scene_kali_puja') {
      tvWeatherSwitchContainer.style.display = 'none';
    } else {
      tvWeatherSwitchContainer.style.display = 'flex';
    }
  }

  if (tvWeatherSwitch) {
    let isInitialWeather = isThemeWeatherActive(state.currentTheme);
    tvWeatherSwitch.classList.toggle('switch-up', !!isInitialWeather);

    tvWeatherSwitch.addEventListener('click', () => {
      const currentActive = isThemeWeatherActive(state.currentTheme);
      applyThemeWeather(state.currentTheme, !currentActive, false);
    });
  }

  // 4. Clickable Song Screen & On-Screen CRT Music Menu
  const tvScreenDisplay = document.getElementById('tvScreenDisplay');
  const screenMusicMenu = document.getElementById('screenMusicMenu');
  const closeMusicMenuBtn = document.getElementById('closeMusicMenuBtn');

  if (tvScreenDisplay && screenMusicMenu) {
    tvScreenDisplay.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = screenMusicMenu.classList.toggle('active');
      if (isOpen) {
        // Close theme menu if open so they don't overlap
        const screenThemeMenu = document.getElementById('screenThemeMenu');
        if (screenThemeMenu) screenThemeMenu.classList.remove('active');
        const tvChannelBtn = document.getElementById('tvChannelBtn');
        if (tvChannelBtn) tvChannelBtn.classList.remove('active');
        renderMusicList();
      }
    });

    if (closeMusicMenuBtn) {
      closeMusicMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        screenMusicMenu.classList.remove('active');
      });
    }

    // Close when clicking outside in roomContainer
    const roomContainer = document.getElementById('roomContainer');
    if (roomContainer) {
      roomContainer.addEventListener('click', (e) => {
        if (screenMusicMenu.classList.contains('active') && !screenMusicMenu.contains(e.target) && !tvScreenDisplay.contains(e.target)) {
          screenMusicMenu.classList.remove('active');
        }
      });
    }

    // Escape key closes song menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && screenMusicMenu.classList.contains('active')) {
        screenMusicMenu.classList.remove('active');
      }
    });

    // Setup filter tabs
    const musicTabs = document.querySelectorAll('.music-tab-btn');
    musicTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        musicTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderMusicList(tab.dataset.tab);
      });
    });

    // Initial render
    renderMusicList();
  }
}

// --- RETRO YOUTUBE PLAYER & DRAGGABLE SCREEN WIDGET ---
let customMusicState = {
  active: false,
  service: 'youtube',
  url: '',
  title: '',
  artist: '',
  minimized: false
};

let ytPlayer = null;
let isYtApiReady = false;
let pendingYtCommand = null;

window.onYouTubeIframeAPIReady = function() {
  isYtApiReady = true;
  if (pendingYtCommand) {
    const cmd = pendingYtCommand;
    pendingYtCommand = null;
    cmd();
  }
};

function parseYouTubeUrl(url) {
  if (!url || typeof url !== 'string') return null;
  url = url.trim();

  // YouTube Playlist
  const ytPlaylistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/i);
  if (ytPlaylistMatch && (url.includes('youtube.com') || url.includes('youtu.be'))) {
    return {
      service: 'youtube',
      type: 'playlist',
      listId: ytPlaylistMatch[1]
    };
  }

  // YouTube Video / Livestream / Shorts
  const ytVideoMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|live\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/i);
  if (ytVideoMatch) {
    return {
      service: 'youtube',
      type: 'video',
      videoId: ytVideoMatch[1]
    };
  }

  return null;
}

function loadYoutubeStream(listId, isPlaylist = true, videoId = null) {
  // Pause built-in audio
  if (musicAudio) musicAudio.pause();

  const ytPanel = document.getElementById('screenYoutubePanel');
  if (ytPanel) ytPanel.classList.add('active');

  customMusicState.active = true;
  customMusicState.service = 'youtube';
  customMusicState.minimized = false;
  customMusicState.title = isPlaylist ? "YouTube Playlist" : "YouTube Stream";
  customMusicState.artist = "YouTube Player";

  if (elTrackTitle) elTrackTitle.textContent = customMusicState.title;
  if (elTrackArtist) elTrackArtist.textContent = customMusicState.artist;
  updateCustomDockPill();

  const initOrPlay = () => {
    const masterVol = elSliderMaster ? parseFloat(elSliderMaster.value) : 0.7;
    if (!ytPlayer) {
      ytPlayer = new YT.Player('youtubePlayerTarget', {
        height: '100%',
        width: '100%',
        playerVars: {
          autoplay: 1,
          controls: 1,
          enablejsapi: 1,
          modestbranding: 1,
          rel: 0,
          origin: window.location.origin
        },
        events: {
          onReady: (e) => {
            e.target.setVolume(masterVol * 100);
            if (isPlaylist) {
              e.target.loadPlaylist({ list: listId, listType: 'playlist' });
            } else {
              e.target.loadVideoById(videoId);
            }
            state.isPlaying = true;
            if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
            updateTvPowerLed();
            updateNowPlayingStatus();
          },
          onStateChange: onYtStateChange
        }
      });
    } else {
      ytPlayer.setVolume(masterVol * 100);
      if (isPlaylist) {
        ytPlayer.loadPlaylist({ list: listId, listType: 'playlist' });
      } else {
        ytPlayer.loadVideoById(videoId);
      }
      state.isPlaying = true;
      if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      updateTvPowerLed();
      updateNowPlayingStatus();
    }
  };

  if (isYtApiReady && window.YT && window.YT.Player) {
    initOrPlay();
  } else {
    pendingYtCommand = initOrPlay;
  }
}

function onYtStateChange(e) {
  if (e.data === 1) { // Playing
    state.isPlaying = true;
    if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    try {
      const data = ytPlayer.getVideoData ? ytPlayer.getVideoData() : null;
      if (data && data.title) {
        customMusicState.title = data.title;
        customMusicState.artist = data.author || "YouTube Stream";
        if (elTrackTitle) elTrackTitle.textContent = data.title;
        if (elTrackArtist) elTrackArtist.textContent = customMusicState.artist;
        const ytTitle = document.getElementById('youtubePanelTitle');
        if (ytTitle) ytTitle.textContent = data.title.length > 28 ? data.title.slice(0, 28) + '...' : data.title;
      }
    } catch (err) {}
    updateTvPowerLed();
    updateNowPlayingStatus();
    updateCustomDockPill();
  } else if (e.data === 2) { // Paused
    state.isPlaying = false;
    if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
    updateTvPowerLed();
    updateNowPlayingStatus();
  }
}

function resetCustomMusic() {
  customMusicState.active = false;
  customMusicState.minimized = false;
  customMusicState.url = '';

  if (ytPlayer && ytPlayer.stopVideo) {
    try { ytPlayer.stopVideo(); } catch (e) {}
  }
  const ytPanel = document.getElementById('screenYoutubePanel');
  if (ytPanel) {
    ytPanel.classList.remove('active');
    // Reset position to center for next opening
    ytPanel.style.left = '50%';
    ytPanel.style.top = '50%';
    ytPanel.style.transform = 'translate(-50%, -50%)';
  }

  const dockPill = document.getElementById('customMusicDockPill');
  if (dockPill) dockPill.style.display = 'none';

  loadTrack(state.currentVibe, state.currentTrackIndex);
  if (musicAudio) {
    musicAudio.pause();
    musicAudio.currentTime = 0;
  }
  state.isPlaying = false;
  if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
  updateTvPowerLed();
  updateNowPlayingStatus();
  updateMusicMenuSelection();
  renderMusicList();
}

function updateCustomDockPill() {
  const dockPill = document.getElementById('customMusicDockPill');
  const dockLabel = document.getElementById('dockPillLabel');
  if (!dockPill) return;

  if (customMusicState.active && customMusicState.minimized) {
    dockPill.style.display = 'flex';
    if (dockLabel) dockLabel.textContent = `YouTube: ${customMusicState.title || 'Playing'}`;
  } else {
    dockPill.style.display = 'none';
  }
}

// Enable free dragging of YouTube player across the screen
function makeYoutubePanelDraggable() {
  const panel = document.getElementById('screenYoutubePanel');
  const header = document.getElementById('youtubePanelHeader');
  if (!panel || !header) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initLeft = 0;
  let initTop = 0;

  const onPointerDown = (e) => {
    // Ignore clicks on control buttons (minimize, close)
    if (e.target.closest('.youtube-panel-btn')) return;

    isDragging = true;
    panel.classList.add('dragging');

    if (header.setPointerCapture && e.pointerId !== undefined) {
      try { header.setPointerCapture(e.pointerId); } catch (_) {}
    }

    startX = e.clientX;
    startY = e.clientY;

    const rect = panel.getBoundingClientRect();
    initLeft = rect.left;
    initTop = rect.top;

    // Convert centered transform to absolute coordinates
    panel.style.transform = 'none';
    panel.style.left = `${initLeft}px`;
    panel.style.top = `${initTop}px`;
    panel.style.bottom = 'auto';
    panel.style.right = 'auto';

    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    let newLeft = initLeft + dx;
    let newTop = initTop + dy;

    // Keep panel comfortably inside screen bounds
    const pWidth = panel.offsetWidth;
    const pHeight = panel.offsetHeight;
    const maxLeft = Math.max(10, window.innerWidth - pWidth - 10);
    const maxTop = Math.max(10, window.innerHeight - pHeight - 10);

    newLeft = Math.max(10, Math.min(maxLeft, newLeft));
    newTop = Math.max(10, Math.min(maxTop, newTop));

    panel.style.left = `${newLeft}px`;
    panel.style.top = `${newTop}px`;
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    panel.classList.remove('dragging');
    if (header.releasePointerCapture && e && e.pointerId !== undefined) {
      try { header.releasePointerCapture(e.pointerId); } catch (_) {}
    }
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
  };

  header.addEventListener('pointerdown', onPointerDown);
}

function initCustomMusicPanels() {
  const btnMinYt = document.getElementById('btnMinimizeYoutube');
  const btnCloseYt = document.getElementById('btnCloseYoutube');
  const ytPanel = document.getElementById('screenYoutubePanel');

  if (btnMinYt && ytPanel) {
    btnMinYt.addEventListener('click', (e) => {
      e.stopPropagation();
      ytPanel.classList.remove('active');
      customMusicState.minimized = true;
      updateCustomDockPill();
    });
  }
  if (btnCloseYt) {
    btnCloseYt.addEventListener('click', (e) => {
      e.stopPropagation();
      resetCustomMusic();
    });
  }

  const dockPill = document.getElementById('customMusicDockPill');
  const dockPillExpand = document.getElementById('dockPillExpandBtn');
  const dockPillClose = document.getElementById('dockPillCloseBtn');

  if (dockPill) {
    dockPill.addEventListener('click', (e) => {
      if (e.target.closest('#dockPillCloseBtn')) return;
      customMusicState.minimized = false;
      updateCustomDockPill();
      if (ytPanel) ytPanel.classList.add('active');
    });
  }

  if (dockPillClose) {
    dockPillClose.addEventListener('click', (e) => {
      e.stopPropagation();
      resetCustomMusic();
    });
  }

  // Activate free drag-and-drop repositioning
  makeYoutubePanelDraggable();
}

// --- ON-SCREEN CRT MUSIC MENU FUNCTIONS ---
let currentMusicTabFilter = 'all';

function renderMusicList(filter = currentMusicTabFilter) {
  currentMusicTabFilter = filter;
  const listEl = document.getElementById('screenMusicList');
  if (!listEl) return;

  // Dedicated YouTube Stream & Playlist Studio Tab
  if (filter === 'youtube' || filter === 'custom') {
    listEl.innerHTML = '';
    const studio = document.createElement('div');
    studio.className = 'custom-music-studio';

    let activeBannerHtml = '';
    if (customMusicState.active) {
      activeBannerHtml = `
        <div class="custom-active-bar">
          <div class="custom-active-info">
            <i class="fa-brands fa-youtube" style="color:#ff4444;"></i>
            <span>Active: <strong>${customMusicState.title}</strong></span>
          </div>
          <button class="custom-reset-btn" id="btnReturnToBuiltinRadio">
            <i class="fa-solid fa-rotate-left"></i> Return to Lofify Radio
          </button>
        </div>
      `;
    }

    studio.innerHTML = `
      ${activeBannerHtml}
      <div class="custom-input-card">
        <div class="custom-service-badges">
          <span class="service-badge youtube"><i class="fa-brands fa-youtube"></i> Full-Length YouTube Playlists, Livestreams & Videos</span>
        </div>
        <div class="custom-input-row">
          <input type="text" class="custom-music-input" id="customMusicInput" placeholder="Paste YouTube playlist or video link..." autocomplete="off">
          <button class="custom-music-submit-btn" id="btnLoadCustomMusic">
            <i class="fa-solid fa-play"></i> Play
          </button>
        </div>
        <div class="custom-music-status" id="customMusicStatus"></div>
      </div>

      <div class="custom-presets-title">⚡ Curated 24/7 Lo-Fi Streams</div>
      <div class="custom-presets-grid">
        <button class="custom-preset-btn" data-url="https://www.youtube.com/watch?v=jfKfPfyJRdk">
          <span>☕ Lofi Girl - 24/7 Relax / Study Beats</span>
          <span class="custom-preset-badge youtube"><i class="fa-brands fa-youtube"></i> Live</span>
        </button>
        <button class="custom-preset-btn" data-url="https://www.youtube.com/watch?v=5yx6BWlEVcY">
          <span>🌧️ Chillhop Radio - Jazzy & Lofi Hip Hop</span>
          <span class="custom-preset-badge youtube"><i class="fa-brands fa-youtube"></i> Live</span>
        </button>
        <button class="custom-preset-btn" data-url="https://www.youtube.com/watch?v=4xDzrJKXOOY">
          <span>🌌 Synthwave Radio - Chill Synth / Lofi</span>
          <span class="custom-preset-badge youtube"><i class="fa-brands fa-youtube"></i> Live</span>
        </button>
        <button class="custom-preset-btn" data-url="https://www.youtube.com/watch?v=lP26UCnoH9s">
          <span>☕ Coffee Shop Lo-Fi / Jazz Study Cafe</span>
          <span class="custom-preset-badge youtube"><i class="fa-brands fa-youtube"></i> Beats</span>
        </button>
        <button class="custom-preset-btn" data-url="https://www.youtube.com/watch?v=HuFYqnbVbzQ">
          <span>🌙 Tokyo Night Drive - Late Night Chill</span>
          <span class="custom-preset-badge youtube"><i class="fa-brands fa-youtube"></i> Lo-Fi</span>
        </button>
      </div>
    `;

    listEl.appendChild(studio);

    const inputEl = studio.querySelector('#customMusicInput');
    const submitBtn = studio.querySelector('#btnLoadCustomMusic');
    const statusEl = studio.querySelector('#customMusicStatus');
    const returnBtn = studio.querySelector('#btnReturnToBuiltinRadio');

    const handleLoad = () => {
      const url = inputEl.value.trim();
      if (!url) {
        if (statusEl) {
          statusEl.textContent = "Please paste a YouTube playlist or video URL first.";
          statusEl.className = "custom-music-status error";
        }
        return;
      }
      const parsed = parseYouTubeUrl(url);
      if (!parsed) {
        if (statusEl) {
          statusEl.textContent = "Invalid link. Please enter a valid YouTube video or playlist URL.";
          statusEl.className = "custom-music-status error";
        }
        return;
      }
      if (statusEl) {
        statusEl.textContent = "Loading YouTube stream...";
        statusEl.className = "custom-music-status success";
      }

      if (parsed.type === 'playlist') {
        loadYoutubeStream(parsed.listId, true, null);
      } else {
        loadYoutubeStream(null, false, parsed.videoId);
      }

      const screenMusicMenu = document.getElementById('screenMusicMenu');
      if (screenMusicMenu) screenMusicMenu.classList.remove('active');
    };

    if (submitBtn) submitBtn.addEventListener('click', handleLoad);
    if (inputEl) {
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleLoad();
      });
    }

    if (returnBtn) {
      returnBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetCustomMusic();
      });
    }

    studio.querySelectorAll('.custom-preset-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = btn.dataset.url;
        const parsed = parseYouTubeUrl(url);
        if (parsed) {
          if (parsed.type === 'playlist') {
            loadYoutubeStream(parsed.listId, true, null);
          } else {
            loadYoutubeStream(null, false, parsed.videoId);
          }
          const screenMusicMenu = document.getElementById('screenMusicMenu');
          if (screenMusicMenu) screenMusicMenu.classList.remove('active');
        }
      });
    });

    return;
  }

  const currentTrackUrl = (musicAudio && musicAudio.src) ? musicAudio.src : '';

  const filtered = ALL_TRACKS.filter(t => {
    if (filter === 'lofi') return t.tag === 'Chillhop';
    if (filter === 'focus') return t.tag !== 'Chillhop';
    return true;
  });

  listEl.innerHTML = '';
  filtered.forEach((track, idx) => {
    const isCurrent = (state.currentVibe === track.vibe && state.currentTrackIndex === track.index) ||
                      (currentTrackUrl && currentTrackUrl.includes(track.url));

    const item = document.createElement('div');
    item.className = `music-track-item ${isCurrent ? 'active' : ''}`;
    item.title = `Play ${track.title}`;

    const numStr = String(idx + 1).padStart(2, '0');
    const playIcon = isCurrent && state.isPlaying 
      ? '<i class="fa-solid fa-volume-high"></i>' 
      : '<i class="fa-solid fa-play"></i>';
    const tagClass = track.category === 'festive' ? 'tag-festive' : '';

    item.innerHTML = `
      <div class="track-index-col">${numStr}</div>
      <div class="track-details-col">
        <div class="track-item-title">${track.title}</div>
        <div class="track-item-artist">${track.artist}</div>
      </div>
      <span class="track-tag-col ${tagClass}">${track.tag}</span>
      <div class="track-play-col">${playIcon}</div>
    `;

    item.addEventListener('click', (e) => {
      e.stopPropagation();
      selectTrack(track);
    });

    listEl.appendChild(item);
  });
}

function selectTrack(track) {
  // If returning to built-in music from external YouTube stream, clear custom player
  if (customMusicState && customMusicState.active) {
    if (ytPlayer && ytPlayer.stopVideo) {
      try { ytPlayer.stopVideo(); } catch (e) {}
    }
    const ytPanel = document.getElementById('screenYoutubePanel');
    if (ytPanel) {
      ytPanel.classList.remove('active');
      ytPanel.style.left = '50%';
      ytPanel.style.top = '50%';
      ytPanel.style.transform = 'translate(-50%, -50%)';
    }
    const dockPill = document.getElementById('customMusicDockPill');
    if (dockPill) dockPill.style.display = 'none';
    customMusicState.active = false;
    customMusicState.minimized = false;
  }

  state.currentVibe = track.vibe;
  state.currentTrackIndex = track.index;
  loadTrack(track.vibe, track.index);

  if (musicAudio) {
    if (isMuted) {
      // Unmute so user can immediately hear the song they clicked
      isMuted = false;
      const restoreVol = previousMasterVolume > 0 ? previousMasterVolume : 0.7;
      musicAudio.muted = false;
      musicAudio.volume = restoreVol;
      if (elSliderMaster) elSliderMaster.value = restoreVol;
      updateMuteIcon();
      const tvVolumeKnob = document.getElementById('tvVolumeKnob');
      if (tvVolumeKnob) tvVolumeKnob.style.transform = `rotate(60deg)`;
    }

    musicAudio.play().then(() => {
      state.isPlaying = true;
      if (elBtnPlay) elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
      updateTvPowerLed();
      updateNowPlayingStatus();
      renderMusicList();

      if (typeof window.updateFirebaseRoomState === 'function') {
        window.updateFirebaseRoomState({
          currentVibe: state.currentVibe,
          currentTrackIndex: state.currentTrackIndex,
          trackStartTime: Date.now(),
          isPlaying: true
        });
      }
    }).catch(e => {
      console.log("Audio play error:", e);
    });
  }
}

function updateMusicMenuSelection() {
  const listEl = document.getElementById('screenMusicList');
  if (listEl && listEl.children.length > 0) {
    renderMusicList();
  }
}

function updateNowPlayingStatus() {
  const statusLine = document.getElementById('tvLedStatusLine');
  if (statusLine) {
    statusLine.classList.toggle('playing', !!state.isPlaying);
  }
}

// Initialize Custom Music panels & drag handling
initCustomMusicPanels();

// Trigger initial canvas resizes once the layout is fully rendered on window load
window.addEventListener('load', handleAllResizes);


