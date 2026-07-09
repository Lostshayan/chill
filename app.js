// config.js is loaded before this file via a script tag

// --- PLAYLIST & TRACK DATA ---
const PLAYLISTS = {
  focus: [
    { title: "Cozy Study Session", artist: "Lofi Focus Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { title: "Warm Coffee Beats", artist: "Study Room Radio", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
  ],
  cafe: [
    { title: "Rainy Day Cafe Jazz", artist: "Brewed Notes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { title: "Espresso & Chill", artist: "Lo-Fi Cafe Crew", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" }
  ],
  dream: [
    { title: "Cloud Drift", artist: "Nebula Dreams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { title: "Deep Slumber Loop", artist: "Sleepy Head", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" }
  ],
  jazz: [
    { title: "Midnight Sax Lofi", artist: "Blue Notes Duo", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { title: "Starlit Keys", artist: "Nocturnal Vibe", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" }
  ]
};

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
  currentTheme: 'scene2',
  isRainActive: false,
  todos: []
};

// Audio Nodes/Context
let audioContext = null;
let musicAudio = {
  src: "",
  currentTime: 0,
  duration: 180,
  volume: 1,
  play: async () => {},
  pause: () => {},
  load: () => {},
  addEventListener: (event, callback) => {},
  removeEventListener: () => {}
};
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

// Scene 2 Elements
const elBgMountains = document.getElementById('bg-mountains');
const elHotspotLamp2 = document.getElementById('hotspotLamp2');
const elHotspotWindow2 = document.getElementById('hotspotWindow2');
const elFgCabinOff = document.getElementById('foreground-cabin-off');
const elFgCabinOn = document.getElementById('foreground-cabin-on');

// Scene 3 Elements (Greenhouse Sanctuary)
const elScene2 = document.getElementById('scene2-container');
const elScene3 = document.getElementById('scene3-container');
const elForestSunny = document.getElementById('forest-sunny');
const elForestRainy = document.getElementById('forest-rainy');
const elRoomForegroundLayer = document.getElementById('room-foreground-layer');
const elToggleWeatherBtn = document.getElementById('toggle-weather-btn');

const elRoomNameDisplay = document.getElementById('roomNameDisplay');
const elSyncStatus = document.getElementById('syncStatus');
const elSyncText = document.getElementById('syncText');
const elMockModeIndicator = document.getElementById('mockModeIndicator');

const elListenersCount = document.getElementById('listenersCount');
const elListenersList = document.getElementById('listenersList');

const elPlaylistDrawer = document.getElementById('playlistDrawer');
const elTogglePlaylistBtn = document.getElementById('togglePlaylistBtn');
const elClosePlaylistBtn = document.getElementById('closePlaylistBtn');

// Slide Panels & Bottom Bar Toggles
const elPanelLeft = document.getElementById('panelLeft');
const elPanelRight = document.getElementById('panelRight');
const elToggleLeftPanelBtn = document.getElementById('toggleLeftPanelBtn');
const elToggleRightPanelBtn = document.getElementById('toggleRightPanelBtn');
const elToggleTodoBtn = document.getElementById('toggleTodoBtn');
const elClosePanelLeft = document.getElementById('closePanelLeft');
const elClosePanelRight = document.getElementById('closePanelRight');
const elDigitalClock = document.getElementById('digitalClock');

const elTodoModal = document.getElementById('todoModal');
const elCloseTodoBtn = document.getElementById('closeTodoBtn');
const elTodoForm = document.getElementById('todoForm');
const elTodoInput = document.getElementById('todoInput');
const elTodoList = document.getElementById('todoList');

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
    if (container) {
      this.width = container.clientWidth;
      this.height = container.clientHeight;
    } else {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
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

class BoundedRainEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 180;
    this.active = false;
    this.animationId = null;
    
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.init();
  }

  resize() {
    const container = document.getElementById('roomContainer');
    if (container) {
      this.canvas.width = container.clientWidth;
      this.canvas.height = container.clientHeight;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }

  init() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(this.createParticle(true));
    }
  }

  createParticle(randomY = false) {
    const w = this.canvas.width;
    const h = this.canvas.height;
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -25,
      length: Math.random() * 25 + 18,
      speed: Math.random() * 14 + 14,
      opacity: Math.random() * 0.16 + 0.08,
      wind: Math.random() * 2.5 + 1.5
    };
  }

  start() {
    if (this.active) return;
    this.active = true;
    this.animate();
  }

  stop() {
    this.active = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  animate() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 1. Draw the active rain particles moving diagonally
    for (let p of this.particles) {
      this.ctx.strokeStyle = `rgba(174, 219, 255, ${p.opacity})`;
      this.ctx.lineWidth = 1.3;
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.x + p.wind, p.y + p.length);
      this.ctx.stroke();

      p.y += p.speed;
      p.x += p.wind;

      if (p.y > this.canvas.height) {
        Object.assign(p, this.createParticle(false));
      }
    }

    // 2. Apply the composite mask to cut out the indoor shapes
    if (window.rainMaskCanvas) {
      this.ctx.globalCompositeOperation = 'destination-in';
      drawCoverImage(this.ctx, window.rainMaskCanvas, this.canvas.width, this.canvas.height);
      this.ctx.globalCompositeOperation = 'source-over';
    }

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

let roomForegroundProcessed = false;
window.foregroundRoomCanvas = null;
window.rainMaskCanvas = null;

// Initialize interface on launch
window.addEventListener('DOMContentLoaded', () => {
  setupInteractiveRoom();
  setupScene3();
  setupThemeSwitcher();
  setupTvBezelControls();
  startClock();
  initParallax();
  window.blizzardEngine = new BlizzardEngine('blizzard-canvas');
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

// --- FIREBASE / MOCK INITIALIZATION ---

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

async function startSession() {
  if (USE_MOCK_MODE) {
    console.log("Starting in mock simulation mode...");
    initAudio();
    initMockRoom();
  } else {
    try {
      // Load Firebase compat SDKs (these attach to window.firebase)
      await loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
      await loadScript("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js");

      const app = firebase.initializeApp(firebaseConfig);
      db = firebase.firestore();

      elSyncText.textContent = "Syncing...";
      initAudio();
      
      // Sync Room State
      const roomDocRef = db.collection("rooms").doc(state.roomId);
      
      // Initialize room doc if it doesn't exist
      await roomDocRef.set({
        currentVibe: state.currentVibe,
        currentTrackIndex: state.currentTrackIndex,
        isPlaying: state.isPlaying,
        trackStartTime: Date.now(),
        soundscapes: state.soundscapeVols
      }, { merge: true });

      // Join as active member
      const memberId = state.username.replace(/\s+/g, '-').toLowerCase() + '-' + Date.now();
      const memberRef = db.collection("rooms").doc(state.roomId).collection("members").doc(memberId);
      await memberRef.set({
        displayName: state.username,
        avatar: ["🐼", "🐱", "🐨", "🦊", "🐯", "🐰"][Math.floor(Math.random() * 6)],
        lastActive: Date.now()
      });

      // Cleanup member on tab close
      window.addEventListener('beforeunload', () => {
        memberRef.delete();
      });

      // Listen to Room state updates
      unsubRoom = roomDocRef.onSnapshot((docSnap) => {
        if (docSnap.exists) {
          handleRoomSyncUpdate(docSnap.data());
        }
      });

      // Listen to Members list
      unsubMembers = db.collection("rooms").doc(state.roomId).collection("members")
        .onSnapshot((querySnap) => {
          const list = [];
          querySnap.forEach(memberDoc => {
            list.push(memberDoc.data());
          });
          updateListenersUI(list);
        });

      // Listen to Todo Tasks
      unsubTodos = db.collection("rooms").doc(state.roomId).collection("todos")
        .orderBy("timestamp", "asc")
        .onSnapshot((querySnap) => {
          const list = [];
          querySnap.forEach(todoDoc => {
            list.push({ id: todoDoc.id, ...todoDoc.data() });
          });
          state.todos = list;
          updateTodoUI();
        });

      // Wire Room DB Mutators
      window.updateFirebaseRoomState = async (updateObject) => {
        await roomDocRef.update(updateObject);
      };

      window.addFirebaseTodo = async (taskText) => {
        await db.collection("rooms").doc(state.roomId).collection("todos").add({
          text: taskText,
          completed: false,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
      };

      window.toggleFirebaseTodo = async (id, completed) => {
        await db.collection("rooms").doc(state.roomId).collection("todos").doc(id).update({ completed });
      };

      window.deleteFirebaseTodo = async (id) => {
        await db.collection("rooms").doc(state.roomId).collection("todos").doc(id).delete();
      };

      elSyncText.textContent = "Synced Live";
      elSyncStatus.className = "sync-status online";
    } catch (e) {
      console.error("Firebase setup failed, reverting to local mock mode:", e);
      if (elMockModeIndicator) {
        elMockModeIndicator.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Firebase failed to initialize. Reverting to Mock Mode.';
        elMockModeIndicator.style.color = '#ffb74d';
      }
      initAudio();
      initMockRoom();
    }
  }
}

// --- ROOM SYNC MANAGER ---
function handleRoomSyncUpdate(roomData) {
  // Sync vibe playlist
  if (roomData.currentVibe !== state.currentVibe) {
    state.currentVibe = roomData.currentVibe;
    state.currentTrackIndex = roomData.currentTrackIndex;
    updateVibeButtonsUI();
    loadTrack(state.currentVibe, state.currentTrackIndex);
  } else if (roomData.currentTrackIndex !== state.currentTrackIndex) {
    state.currentTrackIndex = roomData.currentTrackIndex;
    loadTrack(state.currentVibe, state.currentTrackIndex);
  }

  // Sync volume sliders and soundscapes
  for (const soundName in roomData.soundscapes) {
    const vol = roomData.soundscapes[soundName];
    if (state.soundscapeVols[soundName] !== vol) {
      state.soundscapeVols[soundName] = vol;
      document.getElementById(`slider-${soundName}`).value = vol;
      document.getElementById(`val-${soundName}`).textContent = vol > 0 ? `${Math.round(vol * 100)}%` : "Off";
      adjustSoundscapeVolume(soundName, vol);
    }
  }

  // Playback state synchronization
  if (roomData.isPlaying !== state.isPlaying) {
    state.isPlaying = roomData.isPlaying;
    if (state.isPlaying) {
      // Calculate exact offset position
      const elapsedMs = Date.now() - roomData.trackStartTime;
      const elapsedSec = elapsedMs / 1000;
      
      musicAudio.currentTime = Math.max(0, elapsedSec % musicAudio.duration || 0);
      musicAudio.play().catch(e => console.log("User interaction required to start audio"));
      elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
    } else {
      musicAudio.pause();
      elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'paused';
    }
    updateTvPowerLed();
  }
}

// --- MOCK MODE SIMULATOR ---
function initMockRoom() {
  elSyncText.textContent = "Simulation Mode";
  elSyncStatus.className = "sync-status online";
  
  // Setup Mock Members
  const list = [{ displayName: state.username, avatar: "🥑" }, ...mockPeers];
  updateListenersUI(list);
  


  // Load first track locally
  loadTrack(state.currentVibe, state.currentTrackIndex);
}

// --- AUDIO CONFIGURATION (WEB AUDIO API) ---
function initAudio() {
  console.log("Audio systems disabled at user request.");
}

function loadTrack(vibe, index) {
  const track = PLAYLISTS[vibe][index];
  musicAudio.src = track.url;
  elTrackTitle.textContent = track.title;
  elTrackArtist.textContent = track.artist;
  musicAudio.load();
}

function togglePlay() {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }

  const newState = !state.isPlaying;
  if (!USE_MOCK_MODE) {
    window.updateFirebaseRoomState({
      isPlaying: newState,
      trackStartTime: newState ? Date.now() - (musicAudio.currentTime * 1000) : Date.now()
    });
  } else {
    state.isPlaying = newState;
    if (state.isPlaying) {
      musicAudio.play().catch(e => console.log(e));
      elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
    } else {
      musicAudio.pause();
      elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'paused';
    }
    updateTvPowerLed();
  }
}

function playNextTrack() {
  const nextIndex = (state.currentTrackIndex + 1) % PLAYLISTS[state.currentVibe].length;
  if (!USE_MOCK_MODE) {
    window.updateFirebaseRoomState({
      currentTrackIndex: nextIndex,
      trackStartTime: Date.now(),
      isPlaying: true
    });
  } else {
    state.currentTrackIndex = nextIndex;
    loadTrack(state.currentVibe, state.currentTrackIndex);
    musicAudio.play().catch(e => console.log(e));
    state.isPlaying = true;
    elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
  }
}

function playPrevTrack() {
  let prevIndex = state.currentTrackIndex - 1;
  if (prevIndex < 0) {
    prevIndex = PLAYLISTS[state.currentVibe].length - 1;
  }
  if (!USE_MOCK_MODE) {
    window.updateFirebaseRoomState({
      currentTrackIndex: prevIndex,
      trackStartTime: Date.now(),
      isPlaying: true
    });
  } else {
    state.currentTrackIndex = prevIndex;
    loadTrack(state.currentVibe, state.currentTrackIndex);
    musicAudio.play().catch(e => console.log(e));
    state.isPlaying = true;
    elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
    if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
  }
}

// --- SOUNDSCAPE MIXER HANDLERS ---
function handleSoundscapeChange(name, volume) {
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }

  if (!USE_MOCK_MODE) {
    const updatedSoundscapes = { ...state.soundscapeVols, [name]: parseFloat(volume) };
    window.updateFirebaseRoomState({
      soundscapes: updatedSoundscapes
    });
  } else {
    state.soundscapeVols[name] = parseFloat(volume);
    adjustSoundscapeVolume(name, volume);
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
  if (masterGainNode) {
    masterGainNode.gain.setValueAtTime(val, audioContext.currentTime);
  }
  isMuted = (val === 0);
  updateMuteIcon();
}

function toggleMute() {
  if (isMuted) {
    isMuted = false;
    elSliderMaster.value = previousMasterVolume;
    handleMasterVolume(previousMasterVolume);
  } else {
    previousMasterVolume = elSliderMaster.value;
    isMuted = true;
    elSliderMaster.value = 0;
    handleMasterVolume(0);
  }
}

function updateMuteIcon() {
  if (!elBtnMute) return;
  if (isMuted) {
    elBtnMute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
  } else if (elSliderMaster.value < 0.35) {
    elBtnMute.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
  } else {
    elBtnMute.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
  }
}

function applyScene2LampState() {
  if (state.lampOn) {
    if (elFgCabinOff) elFgCabinOff.style.opacity = '0';
    if (elFgCabinOn) elFgCabinOn.style.opacity = '1';
  } else {
    if (elFgCabinOff) elFgCabinOff.style.opacity = '1';
    if (elFgCabinOn) elFgCabinOn.style.opacity = '0';
  }
}

// --- INTERACTIVE HOTSPOTS LOOPS ---
function setupInteractiveRoom() {
  // Set initial lamp state — crossfade foreground layers
  applyScene2LampState();
  updateWeatherVisuals();

  const toggleLamp = () => {
    state.lampOn = !state.lampOn;
    applyScene2LampState();
    updateWeatherVisuals();
  };

  // Lamp click handlers
  if (elHotspotLamp2) elHotspotLamp2.addEventListener('click', toggleLamp);

  // Blizzard click handler
  if (elHotspotWindow2) {
    elHotspotWindow2.addEventListener('click', () => {
      state.isBlizzardActive = !state.isBlizzardActive;
      if (state.isBlizzardActive) {
        if (elBgMountains) elBgMountains.classList.add('blizzard-fog');
        if (window.blizzardEngine) window.blizzardEngine.activateBlizzard();
      } else {
        if (elBgMountains) elBgMountains.classList.remove('blizzard-fog');
        if (window.blizzardEngine) window.blizzardEngine.deactivateBlizzard();
      }
    });
  }

  elCloseTodoBtn.addEventListener('click', () => {
    elTodoModal.classList.remove('active');
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
  elListenersCount.textContent = listeners.length;
  elListenersList.innerHTML = '';
  
  listeners.forEach(user => {
    const badge = document.createElement('div');
    badge.className = 'listener-avatar-badge';
    badge.innerHTML = `<span class="avatar-icon">${user.avatar || '🐼'}</span> <span>${user.displayName}</span>`;
    elListenersList.appendChild(badge);
  });
}



// --- STUDY CHECKLIST HANDLERS ---
function updateTodoUI() {
  elTodoList.innerHTML = '';
  state.todos.forEach(task => {
    const li = document.createElement('li');
    li.className = `todo-item ${task.completed ? 'completed' : ''}`;
    
    li.innerHTML = `
      <div class="todo-item-content">
        <i class="fa-regular ${task.completed ? 'fa-circle-check' : 'fa-circle'}"></i>
        <span>${task.text}</span>
      </div>
      <button class="delete-todo-btn" data-id="${task.id}"><i class="fa-solid fa-trash"></i></button>
    `;
    
    // Toggle completion listener
    li.querySelector('.todo-item-content').addEventListener('click', () => {
      if (!USE_MOCK_MODE) {
        toggleFirebaseTodo(task.id, !task.completed);
      } else {
        task.completed = !task.completed;
        updateTodoUI();
      }
    });

    // Delete listener
    li.querySelector('.delete-todo-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      if (!USE_MOCK_MODE) {
        deleteFirebaseTodo(task.id);
      } else {
        state.todos = state.todos.filter(t => t.id !== task.id);
        updateTodoUI();
      }
    });

    elTodoList.appendChild(li);
  });
}

// --- FORM SUBMIT ACTIONS ---

// Todo List Submit Form
elTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = elTodoInput.value.trim();
  if (!taskText) return;

  if (!USE_MOCK_MODE) {
    window.addFirebaseTodo(taskText);
  } else {
    const newTask = {
      id: 'task-' + Date.now(),
      text: taskText,
      completed: false
    };
    state.todos.push(newTask);
    updateTodoUI();
  }

  elTodoInput.value = '';
});

// --- BUTTONS EVENTS WIRE UP ---
elBtnPlay.addEventListener('click', togglePlay);
elBtnPrev.addEventListener('click', playPrevTrack);
elBtnNext.addEventListener('click', playNextTrack);
if (elBtnMute) {
  elBtnMute.addEventListener('click', toggleMute);
}

if (elSliderMaster) {
  elSliderMaster.addEventListener('input', (e) => {
    handleMasterVolume(parseFloat(e.target.value));
  });
}

// Wire slider changes for soundscapes
document.querySelectorAll('.mixer-item input').forEach(slider => {
  slider.addEventListener('input', (e) => {
    const name = e.target.id.replace('slider-', '');
    const vol = parseFloat(e.target.value);
    document.getElementById(`val-${name}`).textContent = vol > 0 ? `${Math.round(vol * 100)}%` : "Off";
    handleSoundscapeChange(name, vol);
  });
});

// Toggle Playlist Drawer
elTogglePlaylistBtn.addEventListener('click', () => {
  elPlaylistDrawer.classList.toggle('open');
});

elClosePlaylistBtn.addEventListener('click', () => {
  elPlaylistDrawer.classList.remove('open');
});

// Wire vibe playlists selection buttons
document.querySelectorAll('.vibe-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget;
    const vibe = target.dataset.vibe;
    
    // Close the drawer automatically when user makes a selection
    elPlaylistDrawer.classList.remove('open');
    
    if (vibe === state.currentVibe) return;

    if (!USE_MOCK_MODE) {
      window.updateFirebaseRoomState({
        currentVibe: vibe,
        currentTrackIndex: 0,
        trackStartTime: Date.now(),
        isPlaying: true
      });
    } else {
      state.currentVibe = vibe;
      state.currentTrackIndex = 0;
      updateVibeButtonsUI();
      loadTrack(vibe, 0);
      musicAudio.play().catch(e => console.log(e));
      state.isPlaying = true;
      elBtnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
      if (elTrackIcon) elTrackIcon.style.animationPlayState = 'running';
    }
  });
});

// Audio Progress Seek
if (elProgressContainer) {
  elProgressContainer.addEventListener('click', (e) => {
    if (!musicAudio.duration) return;
    const rect = elProgressContainer.getBoundingClientRect();
    const percentage = (e.clientX - rect.left) / rect.width;
    const seekTime = percentage * musicAudio.duration;
    
    if (!USE_MOCK_MODE) {
      window.updateFirebaseRoomState({
        trackStartTime: Date.now() - (seekTime * 1000)
      });
    } else {
      musicAudio.currentTime = seekTime;
    }
  });
}

// Digital Clock Logic
function startClock() {
  function updateTime() {
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

// Slide Panels Toggle Events (via Bottom Control Bar)
elToggleLeftPanelBtn.addEventListener('click', () => {
  elPanelLeft.classList.toggle('open');
  elToggleLeftPanelBtn.classList.toggle('active');
});

elClosePanelLeft.addEventListener('click', () => {
  elPanelLeft.classList.remove('open');
  elToggleLeftPanelBtn.classList.remove('active');
  elPlaylistDrawer.classList.remove('open'); // Also hide sub-drawer
});

elToggleRightPanelBtn.addEventListener('click', () => {
  elPanelRight.classList.toggle('open');
  elToggleRightPanelBtn.classList.toggle('active');
});

elClosePanelRight.addEventListener('click', () => {
  elPanelRight.classList.remove('open');
  elToggleRightPanelBtn.classList.remove('active');
});

// To-Do list modal trigger via bottom bar
elToggleTodoBtn.addEventListener('click', () => {
  elTodoModal.classList.add('active');
});

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

// --- THEME SWITCHER ---
function setupThemeSwitcher() {
  const cards = document.querySelectorAll('.theme-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const theme = card.dataset.theme;
      if (theme === state.currentTheme) return;
      switchTheme(theme);
      cards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });
}

function switchTheme(themeId) {
  state.currentTheme = themeId;

  // Sync retro TV knob angle
  const tvChannelKnob = document.getElementById('tvChannelKnob');
  if (tvChannelKnob) {
    const angle = (themeId === 'scene2') ? -45 : 45;
    tvChannelKnob.style.transform = `rotate(${angle}deg)`;
  }

  // Toggle containers display
  if (elScene2) elScene2.style.display = (themeId === 'scene2') ? 'block' : 'none';
  if (elScene3) elScene3.style.display = (themeId === 'scene3') ? 'block' : 'none';

  // Manage Blizzard engine
  if (themeId === 'scene2') {
    if (window.blizzardEngine) {
      window.blizzardEngine.resize();
      window.blizzardEngine.start();
    }
  } else {
    if (window.blizzardEngine) window.blizzardEngine.stop();
  }

  // Manage Greenhouse engines
  if (themeId === 'scene3') {
    if (!window.greenhouseRainEngine) {
      window.greenhouseRainEngine = new BoundedRainEngine('rain-canvas');
    }
    window.greenhouseRainEngine.resize();
    drawRoomForeground();
    if (state.isRainActive) {
      window.greenhouseRainEngine.start();
    } else {
      window.greenhouseRainEngine.stop();
    }
  } else {
    if (window.greenhouseRainEngine) window.greenhouseRainEngine.stop();
  }
}

// --- SCENE 3 SETUP (Greenhouse Sanctuary) ---
function setupScene3() {
  // Start chromakey loading and processing
  processGreenScreen();

  if (elToggleWeatherBtn && elForestRainy) {
    elToggleWeatherBtn.addEventListener('click', () => {
      state.isRainActive = !state.isRainActive;
      
      if (state.isRainActive) {
        elForestRainy.style.opacity = '1';
        if (window.greenhouseRainEngine) {
          window.greenhouseRainEngine.start();
        }
        elToggleWeatherBtn.innerHTML = '<i class="fa-solid fa-cloud-showers-water"></i> Rainy Mode';
      } else {
        elForestRainy.style.opacity = '0';
        if (window.greenhouseRainEngine) {
          window.greenhouseRainEngine.stop();
        }
        elToggleWeatherBtn.innerHTML = '<i class="fa-solid fa-cloud-sun"></i> Sunny Mode';
      }
    });
  }

  // Set initial text
  if (elToggleWeatherBtn) {
    elToggleWeatherBtn.innerHTML = '<i class="fa-solid fa-cloud-sun"></i> Sunny Mode';
  }
}

// Engines classes and composting globals moved to the top of the file to prevent Temporal Dead Zone errors.

function processGreenScreen() {
  const img = new Image();
  img.onload = () => {
    const w = img.naturalWidth;
    const h = img.naturalHeight;

    // 1. Process Foreground layer (remove green)
    window.foregroundRoomCanvas = document.createElement('canvas');
    window.foregroundRoomCanvas.width = w;
    window.foregroundRoomCanvas.height = h;
    const fgCtx = window.foregroundRoomCanvas.getContext('2d');
    fgCtx.drawImage(img, 0, 0);

    const fgImgData = fgCtx.getImageData(0, 0, w, h);
    const fgData = fgImgData.data;

    // 2. Process Rain Mask layer (green becomes solid, non-green transparent)
    window.rainMaskCanvas = document.createElement('canvas');
    window.rainMaskCanvas.width = w;
    window.rainMaskCanvas.height = h;
    const maskCtx = window.rainMaskCanvas.getContext('2d');
    const maskImgData = maskCtx.createImageData(w, h);
    const maskData = maskImgData.data;

    for (let i = 0; i < fgData.length; i += 4) {
      const r = fgData[i];
      const g = fgData[i + 1];
      const b = fgData[i + 2];

      // Chrome-Green: R around 0, G near 255, B around 0.
      // Tolerance buffer ±30: R <= 30, G >= 225, B <= 30.
      // We also check green dominance to clean up fuzzy leaf edges where light bleeds.
      const isGreen = (r <= 60 && g >= 160 && b <= 60) || (g > 100 && g > r * 1.4 && g > b * 1.4);

      if (isGreen) {
        // Clear from room foreground
        fgData[i + 3] = 0;

        // Make solid white in rain mask
        maskData[i] = 255;
        maskData[i + 1] = 255;
        maskData[i + 2] = 255;
        maskData[i + 3] = 255;
      } else {
        // Keep original room foreground pixel
        // Make transparent in rain mask
        maskData[i] = 0;
        maskData[i + 1] = 0;
        maskData[i + 2] = 0;
        maskData[i + 3] = 0;
      }
    }

    fgCtx.putImageData(fgImgData, 0, 0);
    maskCtx.putImageData(maskImgData, 0, 0);

    roomForegroundProcessed = true;
    drawRoomForeground();
  };
  img.src = 'assets/images/scene_greenhouse/room_green_screen.png';
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

  ctx.drawImage(source, sx, sy, sw, sh, 0, 0, targetW, targetH);
}

function drawRoomForeground() {
  if (!roomForegroundProcessed || !window.foregroundRoomCanvas) return;
  const canvas = document.getElementById('room-foreground-layer');
  if (!canvas) return;
  const container = document.getElementById('roomContainer');
  if (!container) return;

  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCoverImage(ctx, window.foregroundRoomCanvas, canvas.width, canvas.height);
}

// Bind resize events to redraw the room foreground dynamically
window.addEventListener('resize', () => {
  drawRoomForeground();
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
  const tvChannelKnob = document.getElementById('tvChannelKnob');
  const tvWeatherSwitch = document.getElementById('tvWeatherSwitch');

  // Initial power LED state
  updateTvPowerLed();

  // 1. Volume Knob Rotation Cycles (Linear Step volume control)
  const volLevels = [0.0, 0.25, 0.5, 0.75, 1.0];
  const volAngles = [-120, -60, 0, 60, 120];
  let currentVolIndex = 3; // start at 75% volume

  if (elSliderMaster) {
    const initVol = parseFloat(elSliderMaster.value);
    let closestIdx = 2;
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
      
      isMuted = (targetVol === 0);
      updateMuteIcon();
    });
  }

  // 2. Channel Switcher Knob Rotation Cycles (Switch Themes)
  if (tvChannelKnob) {
    const initialAngle = (state.currentTheme === 'scene2') ? -45 : 45;
    tvChannelKnob.style.transform = `rotate(${initialAngle}deg)`;

    tvChannelKnob.addEventListener('click', () => {
      const nextTheme = (state.currentTheme === 'scene2') ? 'scene3' : 'scene2';
      switchTheme(nextTheme);

      document.querySelectorAll('.theme-card').forEach(card => {
        if (card.dataset.theme === nextTheme) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  }

  // 3. Weather Toggle Switch (Slides up and down)
  if (tvWeatherSwitch) {
    // Initial switch position
    if (state.isRainActive) {
      tvWeatherSwitch.classList.add('switch-up');
    } else {
      tvWeatherSwitch.classList.remove('switch-up');
    }

    tvWeatherSwitch.addEventListener('click', () => {
      state.isRainActive = !state.isRainActive;
      
      if (state.isRainActive) {
        tvWeatherSwitch.classList.add('switch-up');
      } else {
        tvWeatherSwitch.classList.remove('switch-up');
      }

      // Sync active weather states
      if (state.currentTheme === 'scene3') {
        if (elForestRainy) elForestRainy.style.opacity = state.isRainActive ? '1' : '0';
        if (window.greenhouseRainEngine) {
          if (state.isRainActive) window.greenhouseRainEngine.start();
          else window.greenhouseRainEngine.stop();
        }
      } else if (state.currentTheme === 'scene2') {
        state.isBlizzardActive = state.isRainActive;
        const fogBg = document.getElementById('bg-mountains');
        if (fogBg) {
          if (state.isBlizzardActive) fogBg.classList.add('blizzard-fog');
          else fogBg.classList.remove('blizzard-fog');
        }
        if (window.blizzardEngine) {
          if (state.isBlizzardActive) window.blizzardEngine.activateBlizzard();
          else window.blizzardEngine.deactivateBlizzard();
        }
      }
    });
  }
}

// Trigger initial canvas resizes once the layout is fully rendered on window load
window.addEventListener('load', () => {
  if (window.blizzardEngine) window.blizzardEngine.resize();
  if (window.greenhouseRainEngine) window.greenhouseRainEngine.resize();
  drawRoomForeground();
});
