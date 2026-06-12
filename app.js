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
  blizzardOn: true,
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
const elTrackIcon = document.querySelector('.track-icon');

// Scene 2 Elements
const elHotspotLamp2 = document.getElementById('hotspotLamp2');
const elHotspotWindow2 = document.getElementById('hotspotWindow2');
const elSteamContainer2 = document.getElementById('steamContainer2');
const elLampLight2 = document.getElementById('lampLight2');

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
  startClock();
  initParallax();
  new BlizzardEngine('blizzard-canvas');
  if (USE_MOCK_MODE) {
    elMockModeIndicator.style.display = 'block';
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
      elMockModeIndicator.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Firebase failed to initialize. Reverting to Mock Mode.';
      elMockModeIndicator.style.color = '#ffb74d';
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
      elTrackIcon.style.animationPlayState = 'running';
    } else {
      musicAudio.pause();
      elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
      elTrackIcon.style.animationPlayState = 'paused';
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
      elTrackIcon.style.animationPlayState = 'running';
    } else {
      musicAudio.pause();
      elBtnPlay.innerHTML = '<i class="fa-solid fa-play"></i>';
      elTrackIcon.style.animationPlayState = 'paused';
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
    elTrackIcon.style.animationPlayState = 'running';
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
    elTrackIcon.style.animationPlayState = 'running';
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

// --- INTERACTIVE HOTSPOTS LOOPS ---
function setupInteractiveRoom() {
  // Set initial lamp state based on state
  if (state.lampOn) {
    if (elLampLight2) elLampLight2.classList.add('active');
  } else {
    if (elLampLight2) elLampLight2.classList.remove('active');
  }
  updateWeatherVisuals();

  const toggleLamp = () => {
    state.lampOn = !state.lampOn;
    if (state.lampOn) {
      if (elLampLight2) elLampLight2.classList.add('active');
    } else {
      if (elLampLight2) elLampLight2.classList.remove('active');
    }
    updateWeatherVisuals(); // Toggle stars depending on day/night
  };

  // Lamp click handlers
  if (elHotspotLamp2) elHotspotLamp2.addEventListener('click', toggleLamp);

  // Blizzard click handler
  if (elHotspotWindow2) {
    elHotspotWindow2.addEventListener('click', () => {
      state.blizzardOn = !state.blizzardOn;
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
      elTrackIcon.style.animationPlayState = 'running';
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

  window.addEventListener('mousemove', (e) => {
    // Calculate normalized coordinates (-1 to 1) relative to screen center
    const xVal = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    const yVal = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

    // Apply translation mapping with different speed multipliers for depth
    // layerBg (Background): moves slowly (~ -6px max translation)
    // layerMid (Midground character/desk): moves medium (~ -16px max translation)
    // layerFore (Foreground frame/lamp): moves fastest (~ -32px max translation)
    const bgX = xVal * -6;
    const bgY = yVal * -6;
    const midX = xVal * -16;
    const midY = yVal * -16;
    const foreX = xVal * -32;
    const foreY = yVal * -32;

    if (layerBg) layerBg.style.transform = `translate3d(${bgX}px, ${bgY}px, 0)`;
    if (layerMid) layerMid.style.transform = `translate3d(${midX}px, ${midY}px, 0)`;
    if (layerFore) layerFore.style.transform = `translate3d(${foreX}px, ${foreY}px, 0)`;

    if (bgMtn) bgMtn.style.transform = `translate3d(${bgX}px, ${bgY}px, 0)`;
    if (blizzard) blizzard.style.transform = `translate3d(${midX}px, ${midY}px, 0)`;
    if (cabin) cabin.style.transform = `translate3d(${foreX}px, ${foreY}px, 0)`;
  });

  // Reset layers position on mouse leave
  document.body.addEventListener('mouseleave', () => {
    if (layerBg) layerBg.style.transform = 'translate3d(0, 0, 0)';
    if (layerMid) layerMid.style.transform = 'translate3d(0, 0, 0)';
    if (layerFore) layerFore.style.transform = 'translate3d(0, 0, 0)';
    if (bgMtn) bgMtn.style.transform = 'translate3d(0, 0, 0)';
    if (blizzard) blizzard.style.transform = 'translate3d(0, 0, 0)';
    if (cabin) cabin.style.transform = 'translate3d(0, 0, 0)';
  });
}

function initThemeSelector() {
  const select = document.getElementById('themeSelector');
  if (!select) return;
  const scene1 = document.getElementById('scene1-container');
  const scene2 = document.getElementById('scene2-container');
  
  select.addEventListener('change', (e) => {
    if (e.target.value === 'scene1') {
      if (scene1) scene1.style.display = 'block';
      if (scene2) scene2.style.display = 'none';
    } else {
      if (scene1) scene1.style.display = 'none';
      if (scene2) scene2.style.display = 'block';
    }
  });
}

class BlizzardEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.numParticles = 300;
    this.wind = 2; // Horizontal wind force
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
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 3 + 2,
        speedX: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    
    if (!state.blizzardOn) {
      requestAnimationFrame(() => this.animate());
      return;
    }

    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    
    for (let p of this.particles) {
      this.ctx.globalAlpha = p.opacity;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();

      // Move
      p.y += p.speedY;
      p.x += p.speedX + this.wind;

      // Wrap
      if (p.y > this.height) {
        p.y = -10;
        p.x = Math.random() * this.width;
      }
      if (p.x > this.width) {
        p.x = -10;
        p.y = Math.random() * this.height;
      } else if (p.x < -10) {
        p.x = this.width + 10;
        p.y = Math.random() * this.height;
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}
