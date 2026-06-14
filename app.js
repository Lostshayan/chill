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
  isForestLampOn: false,
  isForestRainHeavy: false,
  isTrainNightMode: false,
  todos: []
};

// Audio Nodes/Context
let audioContext = null;
let musicAudio = null; // HTML5 Audio Element for track
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

// Scene 3 Elements
const elScene2 = document.getElementById('scene2-container');
const elScene3 = document.getElementById('scene3-container');
const elForestDay = document.getElementById('forest-day');
const elForestNight = document.getElementById('forest-night');
const elLampOff = document.getElementById('lamp-off');
const elLampOn = document.getElementById('lamp-on');
const elHotspotLamp3 = document.getElementById('hotspotLamp3');
const elHotspotWindow3 = document.getElementById('hotspotWindow3');

// Scene 4 Elements
const elScene4 = document.getElementById('scene4-container');
const elSkyDay = document.getElementById('sky-dome-day');
const elSkyNight = document.getElementById('sky-dome-night');
const elMtnDay = document.getElementById('mountain-scroll-day');
const elMtnNight = document.getElementById('mountain-scroll-night');
const elForestDayL = document.getElementById('forest-scroll-day');
const elForestNightL = document.getElementById('forest-scroll-night');
const elUtilityScroll = document.getElementById('utility-scroll');
const elInteriorDay = document.getElementById('interior-day');
const elInteriorNight = document.getElementById('interior-night');
const elGlassGlare = document.getElementById('glass-glare');
const elBtnToggleTransit = document.getElementById('btnToggleTransit');

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

// Initialize interface on launch
window.addEventListener('DOMContentLoaded', () => {
  setupInteractiveRoom();
  setupScene3();
  setupScene4();
  setupThemeSwitcher();
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
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  
  // Master Gain control
  masterGainNode = audioContext.createGain();
  masterGainNode.gain.setValueAtTime(0.7, audioContext.currentTime);
  masterGainNode.connect(audioContext.destination);
  
  // Music Audio Element
  musicAudio = new Audio();
  musicAudio.crossOrigin = "anonymous";
  musicAudio.loop = false; // We handle track ending to play next track
  
  musicSource = audioContext.createMediaElementSource(musicAudio);
  musicSource.connect(masterGainNode);
  
  // Handle Track ending
  musicAudio.addEventListener('ended', () => {
    if (!USE_MOCK_MODE) {
      const nextIndex = (state.currentTrackIndex + 1) % PLAYLISTS[state.currentVibe].length;
      window.updateFirebaseRoomState({
        currentTrackIndex: nextIndex,
        trackStartTime: Date.now(),
        isPlaying: true
      });
    } else {
      playNextTrack();
    }
  });

  // Keep progress bar updated
  musicAudio.addEventListener('timeupdate', updateProgressBar);
  
  // Initialize Soundscape overlay audio loops
  for (const soundName in SOUNDSCAPES) {
    const audio = new Audio(SOUNDSCAPES[soundName]);
    audio.crossOrigin = "anonymous";
    audio.loop = true;
    
    const source = audioContext.createMediaElementSource(audio);
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    
    source.connect(gainNode);
    gainNode.connect(masterGainNode);
    
    soundscapeElements[soundName] = audio;
    soundscapeGainNodes[soundName] = gainNode;
  }
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
  
  if (volume > 0) {
    if (audio.paused) {
      audio.play().catch(e => console.log("Audio play blocked until interaction"));
    }
    gainNode.gain.setTargetAtTime(volume, audioContext.currentTime, 0.1);
  } else {
    gainNode.gain.setTargetAtTime(0, audioContext.currentTime, 0.1);
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
  elProgressBar.style.width = `${percent}%`;
  
  elTimeCurrent.textContent = formatTime(musicAudio.currentTime);
  elTimeDuration.textContent = formatTime(musicAudio.duration);
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
elBtnMute.addEventListener('click', toggleMute);

elSliderMaster.addEventListener('input', (e) => {
  handleMasterVolume(parseFloat(e.target.value));
});

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

  // Toggle containers display
  if (elScene2) elScene2.style.display = (themeId === 'scene2') ? 'block' : 'none';
  if (elScene3) elScene3.style.display = (themeId === 'scene3') ? 'block' : 'none';
  if (elScene4) elScene4.style.display = (themeId === 'scene4') ? 'block' : 'none';

  // Toggle utility button display
  if (elBtnToggleTransit) {
    elBtnToggleTransit.style.display = (themeId === 'scene4') ? 'inline-flex' : 'none';
  }

  // Manage Blizzard engine
  if (themeId === 'scene2') {
    if (window.blizzardEngine) window.blizzardEngine.start();
  } else {
    if (window.blizzardEngine) window.blizzardEngine.stop();
  }

  // Manage Forest engines
  if (themeId === 'scene3') {
    if (!window.forestWeatherEngine) {
      window.forestWeatherEngine = new ForestWeatherEngine('rain-canvas');
    } else {
      window.forestWeatherEngine.start();
    }
    if (!window.steamEngine) {
      window.steamEngine = new SteamEngine('steam-canvas');
    } else {
      window.steamEngine.start();
    }
    applyForestState();
  } else {
    if (window.forestWeatherEngine) window.forestWeatherEngine.stop();
    if (window.steamEngine) window.steamEngine.stop();
  }

  // Manage Train scenery loop animations
  if (themeId === 'scene4') {
    if (elMtnDay) elMtnDay.classList.add('parallax-anim-active');
    if (elMtnNight) elMtnNight.classList.add('parallax-anim-active');
    if (elForestDayL) elForestDayL.classList.add('parallax-anim-active');
    if (elForestNightL) elForestNightL.classList.add('parallax-anim-active');
    if (elUtilityScroll) elUtilityScroll.classList.add('parallax-anim-active');
    applyTrainTransitState();
  } else {
    if (elMtnDay) elMtnDay.classList.remove('parallax-anim-active');
    if (elMtnNight) elMtnNight.classList.remove('parallax-anim-active');
    if (elForestDayL) elForestDayL.classList.remove('parallax-anim-active');
    if (elForestNightL) elForestNightL.classList.remove('parallax-anim-active');
    if (elUtilityScroll) elUtilityScroll.classList.remove('parallax-anim-active');
  }
}

function applyForestState() {
  if (state.isForestLampOn) {
    // Night mode
    if (elForestDay) elForestDay.style.opacity = '0';
    if (elForestNight) elForestNight.style.opacity = '1';
    if (elLampOff) elLampOff.style.opacity = '0';
    if (elLampOn) elLampOn.style.opacity = '1';
    if (window.forestWeatherEngine) window.forestWeatherEngine.setNightMode(true);
    if (window.steamEngine) window.steamEngine.setActive(true);
  } else {
    // Day mode
    if (elForestDay) elForestDay.style.opacity = '1';
    if (elForestNight) elForestNight.style.opacity = '0';
    if (elLampOff) elLampOff.style.opacity = '1';
    if (elLampOn) elLampOn.style.opacity = '0';
    if (window.forestWeatherEngine) window.forestWeatherEngine.setNightMode(false);
    if (window.steamEngine) window.steamEngine.setActive(false);
  }
}

// --- SCENE 3 SETUP ---
function setupScene3() {
  // Lamp toggle (day/night)
  if (elHotspotLamp3) {
    elHotspotLamp3.addEventListener('click', () => {
      state.isForestLampOn = !state.isForestLampOn;
      applyForestState();
    });
  }

  // Rain intensity toggle
  if (elHotspotWindow3) {
    elHotspotWindow3.addEventListener('click', () => {
      state.isForestRainHeavy = !state.isForestRainHeavy;
      if (window.forestWeatherEngine) {
        window.forestWeatherEngine.setHeavyRain(state.isForestRainHeavy);
      }
    });
  }
}

// --- SCENE 4 SETUP (Train Window) ---
function setupScene4() {
  if (elBtnToggleTransit) {
    elBtnToggleTransit.addEventListener('click', () => {
      state.isTrainNightMode = !state.isTrainNightMode;
      applyTrainTransitState();
    });
  }
}

function applyTrainTransitState() {
  if (state.isTrainNightMode) {
    // Night Mode
    if (elSkyDay) elSkyDay.style.opacity = '0';
    if (elSkyNight) elSkyNight.style.opacity = '1';
    if (elMtnDay) elMtnDay.style.opacity = '0';
    if (elMtnNight) elMtnNight.style.opacity = '1';
    if (elForestDayL) elForestDayL.style.opacity = '0';
    if (elForestNightL) elForestNightL.style.opacity = '1';
    if (elInteriorDay) elInteriorDay.style.opacity = '0';
    if (elInteriorNight) elInteriorNight.style.opacity = '1';
    
    // Glass reflection glow pulsing in night mode
    if (elGlassGlare) {
      elGlassGlare.classList.add('glare-night-active');
    }
    
    // Update button text / icon to show Sun icon (switching to Day)
    if (elBtnToggleTransit) {
      elBtnToggleTransit.innerHTML = '<i class="fa-solid fa-sun"></i> Switch to Day';
    }
  } else {
    // Day Mode
    if (elSkyDay) elSkyDay.style.opacity = '1';
    if (elSkyNight) elSkyNight.style.opacity = '0';
    if (elMtnDay) elMtnDay.style.opacity = '1';
    if (elMtnNight) elMtnNight.style.opacity = '0';
    if (elForestDayL) elForestDayL.style.opacity = '1';
    if (elForestNightL) elForestNightL.style.opacity = '0';
    if (elInteriorDay) elInteriorDay.style.opacity = '1';
    if (elInteriorNight) elInteriorNight.style.opacity = '0';
    
    // Glass reflection is static faint in day mode
    if (elGlassGlare) {
      elGlassGlare.classList.remove('glare-night-active');
    }
    
    // Update button text / icon to show Moon icon (switching to Night)
    if (elBtnToggleTransit) {
      elBtnToggleTransit.innerHTML = '<i class="fa-solid fa-moon"></i> Switch to Night';
    }
  }
}

// --- BLIZZARD ENGINE (Scene 2) ---
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
    this.width = window.innerWidth;
    this.height = window.innerHeight;
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

// --- FOREST WEATHER ENGINE (Scene 3: Rain + Fireflies) ---
class ForestWeatherEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.raindrops = [];
    this.fireflies = [];
    this.numRain = 150;
    this.numFireflies = 20;
    this.isNight = false;
    this.isHeavy = false;
    this.running = true;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initRain();
    this.initFireflies();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  initRain() {
    this.raindrops = [];
    const count = this.isHeavy ? 750 : this.numRain;
    for (let i = 0; i < count; i++) {
      this.raindrops.push(this.createRaindrop());
    }
  }

  createRaindrop() {
    const speed = this.isHeavy ? (Math.random() * 12 + 16) : (Math.random() * 4 + 4);
    const len = this.isHeavy ? (Math.random() * 25 + 25) : (Math.random() * 15 + 10);
    const weight = this.isHeavy ? (Math.random() * 0.8 + 1.2) : 1.0;
    const opacity = this.isHeavy ? (Math.random() * 0.35 + 0.2) : (Math.random() * 0.2 + 0.08);
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      length: len,
      speed: speed,
      weight: weight,
      opacity: opacity,
      windX: this.isHeavy ? (Math.random() * 4 + 3) : (Math.random() * 0.5)
    };
  }

  initFireflies() {
    this.fireflies = [];
    for (let i = 0; i < this.numFireflies; i++) {
      this.fireflies.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height * 0.7,
        size: Math.random() * 2 + 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        driftX: (Math.random() - 0.5) * 0.4,
        driftY: (Math.random() - 0.5) * 0.3
      });
    }
  }

  setNightMode(isNight) {
    this.isNight = isNight;
  }

  setHeavyRain(isHeavy) {
    this.isHeavy = isHeavy;
    this.initRain();
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

    // Draw rain
    for (let r of this.raindrops) {
      this.ctx.strokeStyle = `rgba(174, 219, 255, ${r.opacity})`;
      this.ctx.lineWidth = r.weight || 1.2;
      this.ctx.beginPath();
      this.ctx.moveTo(r.x, r.y);
      this.ctx.lineTo(r.x + r.windX, r.y + r.length);
      this.ctx.stroke();

      r.y += r.speed;
      r.x += r.windX;

      if (r.y > this.height) {
        r.y = -r.length;
        r.x = Math.random() * this.width;
      }
      if (r.x > this.width) r.x = 0;
    }

    // Draw fireflies (only at night)
    if (this.isNight) {
      for (let f of this.fireflies) {
        f.pulsePhase += f.pulseSpeed;
        const glow = (Math.sin(f.pulsePhase) + 1) / 2; // 0 to 1
        const alpha = 0.3 + glow * 0.7;
        const radius = f.size * (0.8 + glow * 0.4);

        // Outer glow
        const gradient = this.ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, radius * 4);
        gradient.addColorStop(0, `rgba(212, 255, 0, ${alpha * 0.6})`);
        gradient.addColorStop(0.5, `rgba(180, 255, 50, ${alpha * 0.2})`);
        gradient.addColorStop(1, 'rgba(180, 255, 50, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, radius * 4, 0, Math.PI * 2);
        this.ctx.fill();

        // Core dot
        this.ctx.fillStyle = `rgba(230, 255, 100, ${alpha})`;
        this.ctx.beginPath();
        this.ctx.arc(f.x, f.y, radius, 0, Math.PI * 2);
        this.ctx.fill();

        // Drift
        f.x += f.driftX;
        f.y += f.driftY;

        // Wrap
        if (f.x < 0) f.x = this.width;
        if (f.x > this.width) f.x = 0;
        if (f.y < 0) f.y = this.height * 0.7;
        if (f.y > this.height * 0.7) f.y = 0;
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// --- STEAM ENGINE (Scene 3: Coffee Mug Steam) ---
class SteamEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.wisps = [];
    this.numWisps = 5;
    this.active = false;
    this.running = true;
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initWisps();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    // Mug position (approximate — right side of desk, ~62% from left, ~78% from top)
    this.mugX = this.width * 0.62;
    this.mugY = this.height * 0.72;
  }

  initWisps() {
    this.wisps = [];
    for (let i = 0; i < this.numWisps; i++) {
      this.wisps.push(this.createWisp());
    }
  }

  createWisp() {
    return {
      x: this.mugX + (Math.random() - 0.5) * 16,
      y: this.mugY,
      size: Math.random() * 4 + 3,
      opacity: Math.random() * 0.3 + 0.15,
      speedY: -(Math.random() * 0.6 + 0.3),
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayAmp: Math.random() * 6 + 3,
      life: 0,
      maxLife: Math.random() * 120 + 80
    };
  }

  setActive(active) {
    this.active = active;
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

    if (this.active) {
      for (let i = 0; i < this.wisps.length; i++) {
        const w = this.wisps[i];
        w.life++;
        w.sway += w.swaySpeed;

        const progress = w.life / w.maxLife;
        const fadeOut = progress > 0.6 ? 1 - ((progress - 0.6) / 0.4) : 1;
        const alpha = w.opacity * fadeOut;
        const xOffset = Math.sin(w.sway) * w.swayAmp;
        const expandedSize = w.size * (1 + progress * 1.5);

        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        this.ctx.beginPath();
        this.ctx.arc(w.x + xOffset, w.y, expandedSize, 0, Math.PI * 2);
        this.ctx.fill();

        w.y += w.speedY;

        if (w.life >= w.maxLife) {
          this.wisps[i] = this.createWisp();
        }
      }
      this.ctx.globalAlpha = 1;
    }

    requestAnimationFrame(() => this.animate());
  }
}
