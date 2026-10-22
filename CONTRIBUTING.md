# Contributing to Lofify

Thank you for your interest in contributing to **Lofify**! We welcome community contributions, bug fixes, feature proposals, and soundscape additions.

---

## Code of Conduct

Please be respectful, constructive, and considerate of all contributors and community members.

---

## Development Workflow

### 1. Prerequisites
Lofify is built with native web technologies (HTML5, modern CSS3, vanilla ES6+ JavaScript, Web Audio API, and HTML5 Canvas). No complex build steps or node package compilations are required to run the client.

To run locally, you only need a local HTTP server:
- **Node.js** (optional): `npx serve .`
- **Python 3**: `python3 -m http.server 8080`
- **VS Code**: "Live Server" extension

### 2. Fork & Clone
1. Fork the repository to your own GitHub account.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/chill.git
   cd chill
   ```

### 3. Create a Feature Branch
Create a branch named after the feature or fix:
```bash
git checkout -b feature/ambient-soundscape-reverb
# or
git checkout -b fix/pomodoro-timer-drift
```

### 4. Code Standards
- **Zero Framework Bloat**: Lofify relies on vanilla web standards for speed, accessibility, and zero-bundle performance. Avoid introducing heavy UI frameworks unless formally discussed.
- **Audio Optimization**: Audio files added to `assets/audio/` must be compressed properly (`.mp3` or `.m4a` at 128kbps/192kbps) to preserve low bandwidth consumption.
- **Canvas Rendering**: Ensure all canvas particle loops adhere to `requestAnimationFrame` with delta-time throttling to maintain 60 FPS across mobile and low-power devices.
- **Formatting**: Maintain clean indentation, meaningful variable names, and JSDoc annotations for complex state machines or mathematical models.

### 5. Testing
Before submitting a pull request:
1. Verify syntax integrity:
   ```bash
   node -c app.js
   ```
2. Test responsive layouts on desktop, tablet, and mobile viewport sizes.
3. Verify that multiplayer synchronization, audio volume blending, and local storage persistence work cleanly across browser refreshes.

### 6. Submitting a Pull Request
1. Commit your changes with clear, semantic commit messages (e.g., `feat(audio): add campfire crackle soundscape`, `fix(auth): handle expired supabase session gracefully`).
2. Push your branch to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request on GitHub against `main`. Provide a clear summary of the changes, screenshots/recordings if UI-related, and steps to test.

---

## Questions or Suggestions?
Feel free to open an Issue on GitHub for feature requests, bug reports, or discussion.
