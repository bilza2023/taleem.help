import { Timer, renderLoop } from
  "https://unpkg.com/taleem-pam@latest/dist/taleem-pam.esm.js";

import {
  createTaleemPlayer,
  resolveAssetPaths,
  resolveBackground
} from
  "https://unpkg.com/taleem-player@latest/dist/taleem-player.esm.js";

// ----------------------------------
// read deck from URL
// ----------------------------------
const params = new URLSearchParams(window.location.search)
const deckName = params.get("deck")

if (!deckName) {
  document.body.innerHTML = "<h2>No deck specified</h2>"
  throw new Error("Missing deck")
}

// ----------------------------------
// load deck
// ----------------------------------
const res = await fetch(`/decks/${deckName}.json`)
if (!res.ok) {
  document.body.innerHTML = "<h2>Deck not found</h2>"
  throw new Error("Deck not found")
}

const deck = await res.json()

resolveAssetPaths(deck, "/images/")
resolveBackground(deck, "/images/")

// ----------------------------------
// create player
// ----------------------------------
const player = createTaleemPlayer({
  mount: "#app",
  deck
})

// ----------------------------------
// duration (last slide end)
// ----------------------------------
const duration = deck.deck[deck.deck.length - 1].end

// ----------------------------------
// PAM state + timer
// ----------------------------------
const state = {
  currentTime: 0,
  duration
}

const timer = new Timer()

// ----------------------------------
// UI refs
// ----------------------------------
const timeEl   = document.getElementById("time")
const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")
const scrubEl = document.getElementById("scrub")

scrubEl.max = duration

// ----------------------------------
// draw function (THE core bridge)
// ----------------------------------
function draw(state) {
  const t = state.currentTime
  player.renderAt(t)
  timeEl.textContent = `${t.toFixed(1)}s`
  scrubEl.value = t
}

renderLoop.setDraw(draw)

// ----------------------------------
// start render loop
// ----------------------------------
renderLoop.start(() => {
  state.currentTime = timer.now()
  renderLoop.draw(state)
})

// ----------------------------------
// controls
// ----------------------------------
playBtn.onclick = () => {
  timer.play()
}

pauseBtn.onclick = () => {
  timer.pause()
}

stopBtn.onclick = () => {
  timer.pause()
  timer.seek(0)
}

scrubEl.oninput = e => {
  timer.seek(+e.target.value)
  timer.pause()
}
