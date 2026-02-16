var wa = {
  type: "titleAndSubtitle",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "title")?.content, t = a.data?.find((r) => r.name === "subtitle")?.content;
    if (!e)
      throw new Error("titleAndSubtitle: requires title");
    return Object.freeze({
      type: "titleAndSubtitle",
      render() {
        return `
          <section class="slide titleAndSubtitle">
            <h1>${e}</h1>
            ${t ? `<h2>${t}</h2>` : ""}
          </section>
        `;
      }
    });
  }
}, xa = {
  type: "titleAndPara",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "title")?.content, t = a.data?.find((r) => r.name === "para")?.content;
    if (!e && !t)
      throw new Error("titleAndPara: requires at least title or para");
    return Object.freeze({
      type: "titleAndPara",
      render() {
        return `
          <section class="slide titleAndPara">
            ${e ? `<h1>${e}</h1>` : ""}
            ${t ? `<p>${t}</p>` : ""}
          </section>
        `;
      }
    });
  }
}, Sa = {
  type: "bulletList",
  fromJSON(a) {
    const e = a.data?.filter((t) => t.name === "bullet").map((t) => t.content);
    if (!e || e.length === 0)
      throw new Error("bulletList: requires at least one bullet");
    return Object.freeze({
      type: "bulletList",
      bullets: e,
      render({ visibleCount: t = e.length, activeIndex: r = null } = {}) {
        return `
          <section class="slide bulletList">
            <ul>
              ${e.map((n, l) => l >= t ? "" : `<li class="${l === r ? "is-active" : r !== null && l < r ? "is-dim" : ""}">${n}</li>`).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
}, ka = {
  type: "twoColumnText",
  fromJSON(a) {
    const e = a.data?.filter((r) => r.name === "left").map((r) => r.content), t = a.data?.filter((r) => r.name === "right").map((r) => r.content);
    if (!e?.length || !t?.length)
      throw new Error("twoColumnText: requires left and right");
    return Object.freeze({
      type: "twoColumnText",
      render() {
        return `
          <section class="slide twoColumnText">
            <div class="col left">
              ${e.map((r) => `<div>${r}</div>`).join("")}
            </div>
            <div class="col right">
              ${t.map((r) => `<div>${r}</div>`).join("")}
            </div>
          </section>
        `;
      }
    });
  }
}, _a = {
  type: "imageSlide",
  fromJSON(a) {
    const e = a.data?.find((t) => t.name === "image")?.content;
    if (!e) throw new Error("imageSlide: image required");
    return Object.freeze({
      type: "imageSlide",
      src: e,
      render() {
        return `
          <section class="slide imageSlide">
            <img src="${e}" alt="" />
          </section>
        `;
      }
    });
  }
}, Aa = {
  type: "fillImage",
  fromJSON(a) {
    const e = a.data?.find((t) => t.name === "image")?.content;
    if (!e)
      throw new Error("fillImage: image required");
    return Object.freeze({
      type: "fillImage",
      image: e,
      render() {
        return `
          <section class="slide fillImage">
            <img src="${e}" alt="" />
          </section>
        `;
      }
    });
  }
}, Ta = {
  type: "imageWithTitle",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "image")?.content, t = a.data?.find((r) => r.name === "title")?.content;
    if (!e || !t)
      throw new Error("imageWithTitle: image and title required");
    return Object.freeze({
      type: "imageWithTitle",
      src: e,
      title: t,
      render() {
        return `
          <section class="slide imageWithTitle">
            <img src="${e}" alt="" />
            <h1>${t}</h1>
          </section>
        `;
      }
    });
  }
}, Ma = {
  type: "imageWithCaption",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "image")?.content, t = a.data?.find((r) => r.name === "caption")?.content;
    if (!e || !t)
      throw new Error("imageWithCaption: image and caption required");
    return Object.freeze({
      type: "imageWithCaption",
      src: e,
      caption: t,
      render() {
        return `
          <figure class="slide imageWithCaption">
            <img src="${e}" alt="" />
            <figcaption>${t}</figcaption>
          </figure>
        `;
      }
    });
  }
}, za = {
  type: "imageLeftBulletsRight",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "image")?.content, t = a.data?.filter((r) => r.name === "bullet").map((r) => r.content);
    if (!e || !t || t.length === 0)
      throw new Error("imageLeftBulletsRight: image and bullets required");
    return Object.freeze({
      type: "imageLeftBulletsRight",
      image: e,
      bullets: t,
      render({ visibleCount: r = t.length } = {}) {
        return `
          <section class="slide imageLeftBulletsRight">
            <img src="${e}" alt="" />
            <ul>
              ${t.map(
          (n, l) => l < r ? `<li>${n}</li>` : ""
        ).join("")}
            </ul>
          </section>
        `;
      }
    });
  }
}, Ba = {
  type: "imageRightBulletsLeft",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "image")?.content, t = a.data?.filter((r) => r.name === "bullet").map((r) => r.content);
    if (!e || !t || t.length === 0)
      throw new Error("imageRightBulletsLeft: image and bullets required");
    return Object.freeze({
      type: "imageRightBulletsLeft",
      image: e,
      bullets: t,
      render({ visibleCount: r = t.length } = {}) {
        return `
          <section class="slide imageRightBulletsLeft">
            <ul>
              ${t.map(
          (n, l) => l < r ? `<li>${n}</li>` : ""
        ).join("")}
            </ul>
            <img src="${e}" alt="" />
          </section>
        `;
      }
    });
  }
}, Da = {
  type: "table",
  fromJSON(a) {
    const e = a.data;
    return !Array.isArray(e) || e.length === 0 ? (console.warn("Empty table skipped", a), null) : Object.freeze({
      type: "table",
      render() {
        return `
          <table class="slide table">
            <tbody>
              ${e.map(
          (t) => `<tr>${t.map((r) => `<td>${r}</td>`).join("")}</tr>`
        ).join("")}
            </tbody>
          </table>
        `;
      }
    });
  }
}, Ca = {
  type: "barChart",
  fromJSON(a) {
    const e = (a.data || []).filter((r) => r.name === "bar");
    if (!e.length)
      throw new Error("barChart requires bar items");
    const t = Math.max(...e.map((r) => r.value));
    return Object.freeze({
      type: "barChart",
      render({ visibleCount: r = e.length, activeIndex: n = -1 } = {}) {
        return `
          <section class="slide barChart">
            <div class="bar-chart">
              ${e.map((l, c) => {
          if (c >= r) return "";
          const h = l.value / t * 100;
          return `
                  <div class="bar-row">
                    <div class="bar-label">${l.label}</div>

                    <div class="bar-track">
                      <div
                        class="bar-fill"
                        style="width: ${h}%"
                      ></div>
                    </div>

                    <div class="bar-value">${l.value}</div>
                  </div>
                `;
        }).join("")}
            </div>
          </section>
        `;
      }
    });
  }
}, Ia = {
  type: "progressbar",
  fromJSON(a) {
    const e = a.data?.filter((t) => t.name === "bar").map((t) => ({
      label: t.label,
      value: Math.max(0, Math.min(100, Number(t.value)))
    }));
    if (!e || e.length === 0)
      throw new Error("progressbar requires at least one bar");
    return Object.freeze({
      type: "progressbar",
      bars: e,
      render({ visibleCount: t = e.length } = {}) {
        return `
          <section class="slide progressbar">
            ${e.map((r, n) => n >= t ? "" : `
                <div class="progressbar-item">
                  <div class="progressbar-label">${r.label}</div>
                  <div class="progressbar-track">
                    <div class="progressbar-fill" style="width:${r.value}%"></div>
                  </div>
                </div>
              `).join("")}
          </section>
        `;
      }
    });
  }
}, qa = {
  type: "quoteSlide",
  fromJSON(a) {
    const e = a.data?.find((r) => r.name === "quote")?.content, t = a.data?.find((r) => r.name === "author")?.content;
    if (!e)
      throw new Error("quoteSlide: quote required");
    return Object.freeze({
      type: "quoteSlide",
      quote: e,
      author: t,
      render() {
        return `
          <blockquote class="slide quoteSlide">
            <p>${e}</p>
            ${t ? `<footer>${t}</footer>` : ""}
          </blockquote>
        `;
      }
    });
  }
}, Na = {
  type: "keyIdeasSlide",
  fromJSON(a) {
    const e = a.data?.filter((t) => t.name === "card").map((t) => ({ icon: t.icon, label: t.label }));
    if (!e || e.length === 0)
      throw new Error("keyIdeasSlide requires at least one card");
    return Object.freeze({
      type: "keyIdeasSlide",
      cards: e,
      render({ visibleCount: t = e.length } = {}) {
        return `
          <section class="slide keyIdeasSlide">
            ${e.map((r, n) => n >= t ? "" : `
                <div class="key-idea">
                  <div class="icon">${r.icon}</div>
                  <div class="label">${r.label}</div>
                </div>
              `).join("")}
          </section>
        `;
      }
    });
  }
}, Oa = {
  type: "eq",
  fromJSON(a) {
    const e = a.data ?? [];
    return Object.freeze({
      type: "eq",
      lines: e,
      render({ visibleCount: t = e.length } = {}) {
        const r = Math.min(t, e.length), n = e.slice(0, r), c = (r > 0 ? e[r - 1] : null)?.spItems ?? [];
        return `
          <section class="slide eq imageRightBulletsLeft">
            
            <!-- LEFT: lines (pure bullet behavior) -->
            <ul class="eq-lines">
              ${n.map(
          (h) => `<li class="eq-line">${h.content}</li>`
        ).join("")}
            </ul>

            <!-- RIGHT: explanation panel -->
            <div class="eq-side-panel">
              ${c.map((h) => h.type === "spImage" ? `
                    <div class="eq-explain-item eq-explain-image">
                      <img src="${h.content}" alt="" />
                    </div>
                  ` : `
                  <div class="eq-explain-item">
                    ${h.content}
                  </div>
                `).join("")}
            </div>

          </section>
        `;
      }
    });
  }
}, Ea = {
  titleAndSubtitle: wa,
  titleAndPara: xa,
  bulletList: Sa,
  twoColumnText: ka,
  imageSlide: _a,
  fillImage: Aa,
  imageWithTitle: Ta,
  imageWithCaption: Ma,
  imageLeftBulletsRight: za,
  imageRightBulletsLeft: Ba,
  table: Da,
  barChart: Ca,
  progressbar: Ia,
  quoteSlide: qa,
  keyIdeasSlide: Na,
  eq: Oa
};
function La(a) {
  const e = Ea[a];
  if (!e)
    throw new Error(`Unknown slide template type "${a}"`);
  return e;
}
function Ra(a, e = {}) {
  if (!a) throw new Error("taleem-player: mount is required");
  const t = typeof a == "string" ? document.querySelector(a) : a;
  if (!t) throw new Error("taleem-player: mount element not found");
  t.innerHTML = "";
  const r = document.createElement("div");
  r.className = "taleem-player-stage", r.style.position = "relative", r.style.width = "100%", r.style.height = "100%", r.style.overflow = "hidden";
  const n = document.createElement("div");
  n.className = "taleem-player-bg", n.style.position = "absolute", n.style.inset = "0", n.style.zIndex = "0", n.style.backgroundRepeat = "no-repeat", n.style.backgroundSize = "cover", n.style.backgroundPosition = "center", e.backgroundColor && (n.style.backgroundColor = e.backgroundColor), e.backgroundImage && (n.style.backgroundImage = `url("${e.backgroundImage}")`), typeof e.backgroundImageOpacity == "number" && e.backgroundImageOpacity < 1 && (n.style.opacity = String(e.backgroundImageOpacity));
  const l = document.createElement("div");
  l.className = "taleem-player-slides", l.style.position = "relative", l.style.zIndex = "1", l.style.width = "100%", l.style.height = "100%", r.appendChild(n), r.appendChild(l), t.appendChild(r);
  function c() {
    l.innerHTML = "";
  }
  function h() {
    t.innerHTML = "";
  }
  return {
    el: l,
    clear: c,
    destroy: h
  };
}
function Zi({ mount: a, deck: e }) {
  const t = Ra(a, e.background);
  let r = null, n = null;
  function l(v, w) {
    const i = v.deck;
    for (let u = i.length - 1; u >= 0; u--) {
      const f = i[u];
      if (w >= f.start && w < f.end) return f;
    }
    return null;
  }
  function c(v, w) {
    if (!Array.isArray(v.data))
      return {};
    let i = 0, u = -1;
    return v.data.forEach((f, g) => {
      typeof f.showAt == "number" && w >= f.showAt && (i++, u = g);
    }), {
      visibleCount: i,
      activeIndex: u
    };
  }
  function h(v) {
    const w = l(e, v);
    if (!w) {
      t.clear(), r = null, n = null;
      return;
    }
    const i = c(w, v), u = `${w.start}-${i.visibleCount}-${i.activeIndex}`;
    if (w !== r && (t.clear(), r = w, n = null), u === n)
      return;
    const S = La(w.type).fromJSON(w).render(i);
    t.el.innerHTML = S, n = u;
  }
  function m() {
    t.destroy();
  }
  return {
    renderAt: h,
    destroy: m
  };
}
function Ji(a, e) {
  return a.background?.backgroundImage && typeof a.background.backgroundImage == "string" && (a.background.backgroundImage = e + a.background.backgroundImage.split("/").pop()), a.deck.forEach((t) => {
    t.data?.forEach((r) => {
      r.name === "image" && typeof r.content == "string" && (r.content = e + r.content.split("/").pop()), Array.isArray(r.spItems) && r.spItems.forEach((n) => {
        n.type === "spImage" && typeof n.content == "string" && (n.content = e + n.content.split("/").pop());
      });
    });
  }), a;
}
function Ki(a, e) {
  if (!a || !a.background) return a;
  const t = a.background;
  return typeof t.backgroundImage == "string" && t.backgroundImage.length > 0 && (t.backgroundImage = e + t.backgroundImage.split("/").pop()), t.backgroundImageOpacity === void 0 && (t.backgroundImageOpacity = 1), a;
}
function Qi(a) {
  return !a || !a.deck || a.deck.length === 0 ? 0 : a.deck[a.deck.length - 1].end;
}
var i0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, X0 = {};
var Ft;
function Ha() {
  return Ft || (Ft = 1, (function(a) {
    (function() {
      var e = function() {
        this.init();
      };
      e.prototype = {
        /**
         * Initialize the global Howler object.
         * @return {Howler}
         */
        init: function() {
          var i = this || t;
          return i._counter = 1e3, i._html5AudioPool = [], i.html5PoolSize = 10, i._codecs = {}, i._howls = [], i._muted = !1, i._volume = 1, i._canPlayEvent = "canplaythrough", i._navigator = typeof window < "u" && window.navigator ? window.navigator : null, i.masterGain = null, i.noAudio = !1, i.usingWebAudio = !0, i.autoSuspend = !0, i.ctx = null, i.autoUnlock = !0, i._setup(), i;
        },
        /**
         * Get/set the global volume for all sounds.
         * @param  {Float} vol Volume from 0.0 to 1.0.
         * @return {Howler/Float}     Returns self or current volume.
         */
        volume: function(i) {
          var u = this || t;
          if (i = parseFloat(i), u.ctx || w(), typeof i < "u" && i >= 0 && i <= 1) {
            if (u._volume = i, u._muted)
              return u;
            u.usingWebAudio && u.masterGain.gain.setValueAtTime(i, t.ctx.currentTime);
            for (var f = 0; f < u._howls.length; f++)
              if (!u._howls[f]._webAudio)
                for (var g = u._howls[f]._getSoundIds(), S = 0; S < g.length; S++) {
                  var _ = u._howls[f]._soundById(g[S]);
                  _ && _._node && (_._node.volume = _._volume * i);
                }
            return u;
          }
          return u._volume;
        },
        /**
         * Handle muting and unmuting globally.
         * @param  {Boolean} muted Is muted or not.
         */
        mute: function(i) {
          var u = this || t;
          u.ctx || w(), u._muted = i, u.usingWebAudio && u.masterGain.gain.setValueAtTime(i ? 0 : u._volume, t.ctx.currentTime);
          for (var f = 0; f < u._howls.length; f++)
            if (!u._howls[f]._webAudio)
              for (var g = u._howls[f]._getSoundIds(), S = 0; S < g.length; S++) {
                var _ = u._howls[f]._soundById(g[S]);
                _ && _._node && (_._node.muted = i ? !0 : _._muted);
              }
          return u;
        },
        /**
         * Handle stopping all sounds globally.
         */
        stop: function() {
          for (var i = this || t, u = 0; u < i._howls.length; u++)
            i._howls[u].stop();
          return i;
        },
        /**
         * Unload and destroy all currently loaded Howl objects.
         * @return {Howler}
         */
        unload: function() {
          for (var i = this || t, u = i._howls.length - 1; u >= 0; u--)
            i._howls[u].unload();
          return i.usingWebAudio && i.ctx && typeof i.ctx.close < "u" && (i.ctx.close(), i.ctx = null, w()), i;
        },
        /**
         * Check for codec support of specific extension.
         * @param  {String} ext Audio file extention.
         * @return {Boolean}
         */
        codecs: function(i) {
          return (this || t)._codecs[i.replace(/^x-/, "")];
        },
        /**
         * Setup various state values for global tracking.
         * @return {Howler}
         */
        _setup: function() {
          var i = this || t;
          if (i.state = i.ctx && i.ctx.state || "suspended", i._autoSuspend(), !i.usingWebAudio)
            if (typeof Audio < "u")
              try {
                var u = new Audio();
                typeof u.oncanplaythrough > "u" && (i._canPlayEvent = "canplay");
              } catch {
                i.noAudio = !0;
              }
            else
              i.noAudio = !0;
          try {
            var u = new Audio();
            u.muted && (i.noAudio = !0);
          } catch {
          }
          return i.noAudio || i._setupCodecs(), i;
        },
        /**
         * Check for browser support for various codecs and cache the results.
         * @return {Howler}
         */
        _setupCodecs: function() {
          var i = this || t, u = null;
          try {
            u = typeof Audio < "u" ? new Audio() : null;
          } catch {
            return i;
          }
          if (!u || typeof u.canPlayType != "function")
            return i;
          var f = u.canPlayType("audio/mpeg;").replace(/^no$/, ""), g = i._navigator ? i._navigator.userAgent : "", S = g.match(/OPR\/(\d+)/g), _ = S && parseInt(S[0].split("/")[1], 10) < 33, x = g.indexOf("Safari") !== -1 && g.indexOf("Chrome") === -1, M = g.match(/Version\/(.*?) /), C = x && M && parseInt(M[1], 10) < 15;
          return i._codecs = {
            mp3: !!(!_ && (f || u.canPlayType("audio/mp3;").replace(/^no$/, ""))),
            mpeg: !!f,
            opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
            ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            oga: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            wav: !!(u.canPlayType('audio/wav; codecs="1"') || u.canPlayType("audio/wav")).replace(/^no$/, ""),
            aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
            caf: !!u.canPlayType("audio/x-caf;").replace(/^no$/, ""),
            m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
            m4b: !!(u.canPlayType("audio/x-m4b;") || u.canPlayType("audio/m4b;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
            mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
            weba: !!(!C && u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            webm: !!(!C && u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
            dolby: !!u.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
            flac: !!(u.canPlayType("audio/x-flac;") || u.canPlayType("audio/flac;")).replace(/^no$/, "")
          }, i;
        },
        /**
         * Some browsers/devices will only allow audio to be played after a user interaction.
         * Attempt to automatically unlock audio on the first user interaction.
         * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
         * @return {Howler}
         */
        _unlockAudio: function() {
          var i = this || t;
          if (!(i._audioUnlocked || !i.ctx)) {
            i._audioUnlocked = !1, i.autoUnlock = !1, !i._mobileUnloaded && i.ctx.sampleRate !== 44100 && (i._mobileUnloaded = !0, i.unload()), i._scratchBuffer = i.ctx.createBuffer(1, 1, 22050);
            var u = function(f) {
              for (; i._html5AudioPool.length < i.html5PoolSize; )
                try {
                  var g = new Audio();
                  g._unlocked = !0, i._releaseHtml5Audio(g);
                } catch {
                  i.noAudio = !0;
                  break;
                }
              for (var S = 0; S < i._howls.length; S++)
                if (!i._howls[S]._webAudio)
                  for (var _ = i._howls[S]._getSoundIds(), x = 0; x < _.length; x++) {
                    var M = i._howls[S]._soundById(_[x]);
                    M && M._node && !M._node._unlocked && (M._node._unlocked = !0, M._node.load());
                  }
              i._autoResume();
              var C = i.ctx.createBufferSource();
              C.buffer = i._scratchBuffer, C.connect(i.ctx.destination), typeof C.start > "u" ? C.noteOn(0) : C.start(0), typeof i.ctx.resume == "function" && i.ctx.resume(), C.onended = function() {
                C.disconnect(0), i._audioUnlocked = !0, document.removeEventListener("touchstart", u, !0), document.removeEventListener("touchend", u, !0), document.removeEventListener("click", u, !0), document.removeEventListener("keydown", u, !0);
                for (var L = 0; L < i._howls.length; L++)
                  i._howls[L]._emit("unlock");
              };
            };
            return document.addEventListener("touchstart", u, !0), document.addEventListener("touchend", u, !0), document.addEventListener("click", u, !0), document.addEventListener("keydown", u, !0), i;
          }
        },
        /**
         * Get an unlocked HTML5 Audio object from the pool. If none are left,
         * return a new Audio object and throw a warning.
         * @return {Audio} HTML5 Audio object.
         */
        _obtainHtml5Audio: function() {
          var i = this || t;
          if (i._html5AudioPool.length)
            return i._html5AudioPool.pop();
          var u = new Audio().play();
          return u && typeof Promise < "u" && (u instanceof Promise || typeof u.then == "function") && u.catch(function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
          }), new Audio();
        },
        /**
         * Return an activated HTML5 Audio object to the pool.
         * @return {Howler}
         */
        _releaseHtml5Audio: function(i) {
          var u = this || t;
          return i._unlocked && u._html5AudioPool.push(i), u;
        },
        /**
         * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
         * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
         * @return {Howler}
         */
        _autoSuspend: function() {
          var i = this;
          if (!(!i.autoSuspend || !i.ctx || typeof i.ctx.suspend > "u" || !t.usingWebAudio)) {
            for (var u = 0; u < i._howls.length; u++)
              if (i._howls[u]._webAudio) {
                for (var f = 0; f < i._howls[u]._sounds.length; f++)
                  if (!i._howls[u]._sounds[f]._paused)
                    return i;
              }
            return i._suspendTimer && clearTimeout(i._suspendTimer), i._suspendTimer = setTimeout(function() {
              if (i.autoSuspend) {
                i._suspendTimer = null, i.state = "suspending";
                var g = function() {
                  i.state = "suspended", i._resumeAfterSuspend && (delete i._resumeAfterSuspend, i._autoResume());
                };
                i.ctx.suspend().then(g, g);
              }
            }, 3e4), i;
          }
        },
        /**
         * Automatically resume the Web Audio AudioContext when a new sound is played.
         * @return {Howler}
         */
        _autoResume: function() {
          var i = this;
          if (!(!i.ctx || typeof i.ctx.resume > "u" || !t.usingWebAudio))
            return i.state === "running" && i.ctx.state !== "interrupted" && i._suspendTimer ? (clearTimeout(i._suspendTimer), i._suspendTimer = null) : i.state === "suspended" || i.state === "running" && i.ctx.state === "interrupted" ? (i.ctx.resume().then(function() {
              i.state = "running";
              for (var u = 0; u < i._howls.length; u++)
                i._howls[u]._emit("resume");
            }), i._suspendTimer && (clearTimeout(i._suspendTimer), i._suspendTimer = null)) : i.state === "suspending" && (i._resumeAfterSuspend = !0), i;
        }
      };
      var t = new e(), r = function(i) {
        var u = this;
        if (!i.src || i.src.length === 0) {
          console.error("An array of source files must be passed with any new Howl.");
          return;
        }
        u.init(i);
      };
      r.prototype = {
        /**
         * Initialize a new Howl group object.
         * @param  {Object} o Passed in properties for this group.
         * @return {Howl}
         */
        init: function(i) {
          var u = this;
          return t.ctx || w(), u._autoplay = i.autoplay || !1, u._format = typeof i.format != "string" ? i.format : [i.format], u._html5 = i.html5 || !1, u._muted = i.mute || !1, u._loop = i.loop || !1, u._pool = i.pool || 5, u._preload = typeof i.preload == "boolean" || i.preload === "metadata" ? i.preload : !0, u._rate = i.rate || 1, u._sprite = i.sprite || {}, u._src = typeof i.src != "string" ? i.src : [i.src], u._volume = i.volume !== void 0 ? i.volume : 1, u._xhr = {
            method: i.xhr && i.xhr.method ? i.xhr.method : "GET",
            headers: i.xhr && i.xhr.headers ? i.xhr.headers : null,
            withCredentials: i.xhr && i.xhr.withCredentials ? i.xhr.withCredentials : !1
          }, u._duration = 0, u._state = "unloaded", u._sounds = [], u._endTimers = {}, u._queue = [], u._playLock = !1, u._onend = i.onend ? [{ fn: i.onend }] : [], u._onfade = i.onfade ? [{ fn: i.onfade }] : [], u._onload = i.onload ? [{ fn: i.onload }] : [], u._onloaderror = i.onloaderror ? [{ fn: i.onloaderror }] : [], u._onplayerror = i.onplayerror ? [{ fn: i.onplayerror }] : [], u._onpause = i.onpause ? [{ fn: i.onpause }] : [], u._onplay = i.onplay ? [{ fn: i.onplay }] : [], u._onstop = i.onstop ? [{ fn: i.onstop }] : [], u._onmute = i.onmute ? [{ fn: i.onmute }] : [], u._onvolume = i.onvolume ? [{ fn: i.onvolume }] : [], u._onrate = i.onrate ? [{ fn: i.onrate }] : [], u._onseek = i.onseek ? [{ fn: i.onseek }] : [], u._onunlock = i.onunlock ? [{ fn: i.onunlock }] : [], u._onresume = [], u._webAudio = t.usingWebAudio && !u._html5, typeof t.ctx < "u" && t.ctx && t.autoUnlock && t._unlockAudio(), t._howls.push(u), u._autoplay && u._queue.push({
            event: "play",
            action: function() {
              u.play();
            }
          }), u._preload && u._preload !== "none" && u.load(), u;
        },
        /**
         * Load the audio file.
         * @return {Howler}
         */
        load: function() {
          var i = this, u = null;
          if (t.noAudio) {
            i._emit("loaderror", null, "No audio support.");
            return;
          }
          typeof i._src == "string" && (i._src = [i._src]);
          for (var f = 0; f < i._src.length; f++) {
            var g, S;
            if (i._format && i._format[f])
              g = i._format[f];
            else {
              if (S = i._src[f], typeof S != "string") {
                i._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                continue;
              }
              g = /^data:audio\/([^;,]+);/i.exec(S), g || (g = /\.([^.]+)$/.exec(S.split("?", 1)[0])), g && (g = g[1].toLowerCase());
            }
            if (g || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), g && t.codecs(g)) {
              u = i._src[f];
              break;
            }
          }
          if (!u) {
            i._emit("loaderror", null, "No codec support for selected audio sources.");
            return;
          }
          return i._src = u, i._state = "loading", window.location.protocol === "https:" && u.slice(0, 5) === "http:" && (i._html5 = !0, i._webAudio = !1), new n(i), i._webAudio && c(i), i;
        },
        /**
         * Play a sound or resume previous playback.
         * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Number}          Sound ID.
         */
        play: function(i, u) {
          var f = this, g = null;
          if (typeof i == "number")
            g = i, i = null;
          else {
            if (typeof i == "string" && f._state === "loaded" && !f._sprite[i])
              return null;
            if (typeof i > "u" && (i = "__default", !f._playLock)) {
              for (var S = 0, _ = 0; _ < f._sounds.length; _++)
                f._sounds[_]._paused && !f._sounds[_]._ended && (S++, g = f._sounds[_]._id);
              S === 1 ? i = null : g = null;
            }
          }
          var x = g ? f._soundById(g) : f._inactiveSound();
          if (!x)
            return null;
          if (g && !i && (i = x._sprite || "__default"), f._state !== "loaded") {
            x._sprite = i, x._ended = !1;
            var M = x._id;
            return f._queue.push({
              event: "play",
              action: function() {
                f.play(M);
              }
            }), M;
          }
          if (g && !x._paused)
            return u || f._loadQueue("play"), x._id;
          f._webAudio && t._autoResume();
          var C = Math.max(0, x._seek > 0 ? x._seek : f._sprite[i][0] / 1e3), L = Math.max(0, (f._sprite[i][0] + f._sprite[i][1]) / 1e3 - C), H = L * 1e3 / Math.abs(x._rate), P = f._sprite[i][0] / 1e3, G = (f._sprite[i][0] + f._sprite[i][1]) / 1e3;
          x._sprite = i, x._ended = !1;
          var X = function() {
            x._paused = !1, x._seek = C, x._start = P, x._stop = G, x._loop = !!(x._loop || f._sprite[i][2]);
          };
          if (C >= G) {
            f._ended(x);
            return;
          }
          var N = x._node;
          if (f._webAudio) {
            var fe = function() {
              f._playLock = !1, X(), f._refreshBuffer(x);
              var Q = x._muted || f._muted ? 0 : x._volume;
              N.gain.setValueAtTime(Q, t.ctx.currentTime), x._playStart = t.ctx.currentTime, typeof N.bufferSource.start > "u" ? x._loop ? N.bufferSource.noteGrainOn(0, C, 86400) : N.bufferSource.noteGrainOn(0, C, L) : x._loop ? N.bufferSource.start(0, C, 86400) : N.bufferSource.start(0, C, L), H !== 1 / 0 && (f._endTimers[x._id] = setTimeout(f._ended.bind(f, x), H)), u || setTimeout(function() {
                f._emit("play", x._id), f._loadQueue();
              }, 0);
            };
            t.state === "running" && t.ctx.state !== "interrupted" ? fe() : (f._playLock = !0, f.once("resume", fe), f._clearTimer(x._id));
          } else {
            var ae = function() {
              N.currentTime = C, N.muted = x._muted || f._muted || t._muted || N.muted, N.volume = x._volume * t.volume(), N.playbackRate = x._rate;
              try {
                var Q = N.play();
                if (Q && typeof Promise < "u" && (Q instanceof Promise || typeof Q.then == "function") ? (f._playLock = !0, X(), Q.then(function() {
                  f._playLock = !1, N._unlocked = !0, u ? f._loadQueue() : f._emit("play", x._id);
                }).catch(function() {
                  f._playLock = !1, f._emit("playerror", x._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), x._ended = !0, x._paused = !0;
                })) : u || (f._playLock = !1, X(), f._emit("play", x._id)), N.playbackRate = x._rate, N.paused) {
                  f._emit("playerror", x._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  return;
                }
                i !== "__default" || x._loop ? f._endTimers[x._id] = setTimeout(f._ended.bind(f, x), H) : (f._endTimers[x._id] = function() {
                  f._ended(x), N.removeEventListener("ended", f._endTimers[x._id], !1);
                }, N.addEventListener("ended", f._endTimers[x._id], !1));
              } catch (ce) {
                f._emit("playerror", x._id, ce);
              }
            };
            N.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (N.src = f._src, N.load());
            var K = window && window.ejecta || !N.readyState && t._navigator.isCocoonJS;
            if (N.readyState >= 3 || K)
              ae();
            else {
              f._playLock = !0, f._state = "loading";
              var we = function() {
                f._state = "loaded", ae(), N.removeEventListener(t._canPlayEvent, we, !1);
              };
              N.addEventListener(t._canPlayEvent, we, !1), f._clearTimer(x._id);
            }
          }
          return x._id;
        },
        /**
         * Pause playback and save current position.
         * @param  {Number} id The sound ID (empty to pause all in group).
         * @return {Howl}
         */
        pause: function(i) {
          var u = this;
          if (u._state !== "loaded" || u._playLock)
            return u._queue.push({
              event: "pause",
              action: function() {
                u.pause(i);
              }
            }), u;
          for (var f = u._getSoundIds(i), g = 0; g < f.length; g++) {
            u._clearTimer(f[g]);
            var S = u._soundById(f[g]);
            if (S && !S._paused && (S._seek = u.seek(f[g]), S._rateSeek = 0, S._paused = !0, u._stopFade(f[g]), S._node))
              if (u._webAudio) {
                if (!S._node.bufferSource)
                  continue;
                typeof S._node.bufferSource.stop > "u" ? S._node.bufferSource.noteOff(0) : S._node.bufferSource.stop(0), u._cleanBuffer(S._node);
              } else (!isNaN(S._node.duration) || S._node.duration === 1 / 0) && S._node.pause();
            arguments[1] || u._emit("pause", S ? S._id : null);
          }
          return u;
        },
        /**
         * Stop playback and reset to start.
         * @param  {Number} id The sound ID (empty to stop all in group).
         * @param  {Boolean} internal Internal Use: true prevents event firing.
         * @return {Howl}
         */
        stop: function(i, u) {
          var f = this;
          if (f._state !== "loaded" || f._playLock)
            return f._queue.push({
              event: "stop",
              action: function() {
                f.stop(i);
              }
            }), f;
          for (var g = f._getSoundIds(i), S = 0; S < g.length; S++) {
            f._clearTimer(g[S]);
            var _ = f._soundById(g[S]);
            _ && (_._seek = _._start || 0, _._rateSeek = 0, _._paused = !0, _._ended = !0, f._stopFade(g[S]), _._node && (f._webAudio ? _._node.bufferSource && (typeof _._node.bufferSource.stop > "u" ? _._node.bufferSource.noteOff(0) : _._node.bufferSource.stop(0), f._cleanBuffer(_._node)) : (!isNaN(_._node.duration) || _._node.duration === 1 / 0) && (_._node.currentTime = _._start || 0, _._node.pause(), _._node.duration === 1 / 0 && f._clearSound(_._node))), u || f._emit("stop", _._id));
          }
          return f;
        },
        /**
         * Mute/unmute a single sound or all sounds in this Howl group.
         * @param  {Boolean} muted Set to true to mute and false to unmute.
         * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
         * @return {Howl}
         */
        mute: function(i, u) {
          var f = this;
          if (f._state !== "loaded" || f._playLock)
            return f._queue.push({
              event: "mute",
              action: function() {
                f.mute(i, u);
              }
            }), f;
          if (typeof u > "u")
            if (typeof i == "boolean")
              f._muted = i;
            else
              return f._muted;
          for (var g = f._getSoundIds(u), S = 0; S < g.length; S++) {
            var _ = f._soundById(g[S]);
            _ && (_._muted = i, _._interval && f._stopFade(_._id), f._webAudio && _._node ? _._node.gain.setValueAtTime(i ? 0 : _._volume, t.ctx.currentTime) : _._node && (_._node.muted = t._muted ? !0 : i), f._emit("mute", _._id));
          }
          return f;
        },
        /**
         * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
         *   volume() -> Returns the group's volume value.
         *   volume(id) -> Returns the sound id's current volume.
         *   volume(vol) -> Sets the volume of all sounds in this Howl group.
         *   volume(vol, id) -> Sets the volume of passed sound id.
         * @return {Howl/Number} Returns self or current volume.
         */
        volume: function() {
          var i = this, u = arguments, f, g;
          if (u.length === 0)
            return i._volume;
          if (u.length === 1 || u.length === 2 && typeof u[1] > "u") {
            var S = i._getSoundIds(), _ = S.indexOf(u[0]);
            _ >= 0 ? g = parseInt(u[0], 10) : f = parseFloat(u[0]);
          } else u.length >= 2 && (f = parseFloat(u[0]), g = parseInt(u[1], 10));
          var x;
          if (typeof f < "u" && f >= 0 && f <= 1) {
            if (i._state !== "loaded" || i._playLock)
              return i._queue.push({
                event: "volume",
                action: function() {
                  i.volume.apply(i, u);
                }
              }), i;
            typeof g > "u" && (i._volume = f), g = i._getSoundIds(g);
            for (var M = 0; M < g.length; M++)
              x = i._soundById(g[M]), x && (x._volume = f, u[2] || i._stopFade(g[M]), i._webAudio && x._node && !x._muted ? x._node.gain.setValueAtTime(f, t.ctx.currentTime) : x._node && !x._muted && (x._node.volume = f * t.volume()), i._emit("volume", x._id));
          } else
            return x = g ? i._soundById(g) : i._sounds[0], x ? x._volume : 0;
          return i;
        },
        /**
         * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id (omit to fade all sounds).
         * @return {Howl}
         */
        fade: function(i, u, f, g) {
          var S = this;
          if (S._state !== "loaded" || S._playLock)
            return S._queue.push({
              event: "fade",
              action: function() {
                S.fade(i, u, f, g);
              }
            }), S;
          i = Math.min(Math.max(0, parseFloat(i)), 1), u = Math.min(Math.max(0, parseFloat(u)), 1), f = parseFloat(f), S.volume(i, g);
          for (var _ = S._getSoundIds(g), x = 0; x < _.length; x++) {
            var M = S._soundById(_[x]);
            if (M) {
              if (g || S._stopFade(_[x]), S._webAudio && !M._muted) {
                var C = t.ctx.currentTime, L = C + f / 1e3;
                M._volume = i, M._node.gain.setValueAtTime(i, C), M._node.gain.linearRampToValueAtTime(u, L);
              }
              S._startFadeInterval(M, i, u, f, _[x], typeof g > "u");
            }
          }
          return S;
        },
        /**
         * Starts the internal interval to fade a sound.
         * @param  {Object} sound Reference to sound to fade.
         * @param  {Number} from The value to fade from (0.0 to 1.0).
         * @param  {Number} to   The volume to fade to (0.0 to 1.0).
         * @param  {Number} len  Time in milliseconds to fade.
         * @param  {Number} id   The sound id to fade.
         * @param  {Boolean} isGroup   If true, set the volume on the group.
         */
        _startFadeInterval: function(i, u, f, g, S, _) {
          var x = this, M = u, C = f - u, L = Math.abs(C / 0.01), H = Math.max(4, L > 0 ? g / L : g), P = Date.now();
          i._fadeTo = f, i._interval = setInterval(function() {
            var G = (Date.now() - P) / g;
            P = Date.now(), M += C * G, M = Math.round(M * 100) / 100, C < 0 ? M = Math.max(f, M) : M = Math.min(f, M), x._webAudio ? i._volume = M : x.volume(M, i._id, !0), _ && (x._volume = M), (f < u && M <= f || f > u && M >= f) && (clearInterval(i._interval), i._interval = null, i._fadeTo = null, x.volume(f, i._id), x._emit("fade", i._id));
          }, H);
        },
        /**
         * Internal method that stops the currently playing fade when
         * a new fade starts, volume is changed or the sound is stopped.
         * @param  {Number} id The sound id.
         * @return {Howl}
         */
        _stopFade: function(i) {
          var u = this, f = u._soundById(i);
          return f && f._interval && (u._webAudio && f._node.gain.cancelScheduledValues(t.ctx.currentTime), clearInterval(f._interval), f._interval = null, u.volume(f._fadeTo, i), f._fadeTo = null, u._emit("fade", i)), u;
        },
        /**
         * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
         *   loop() -> Returns the group's loop value.
         *   loop(id) -> Returns the sound id's loop value.
         *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
         *   loop(loop, id) -> Sets the loop value of passed sound id.
         * @return {Howl/Boolean} Returns self or current loop value.
         */
        loop: function() {
          var i = this, u = arguments, f, g, S;
          if (u.length === 0)
            return i._loop;
          if (u.length === 1)
            if (typeof u[0] == "boolean")
              f = u[0], i._loop = f;
            else
              return S = i._soundById(parseInt(u[0], 10)), S ? S._loop : !1;
          else u.length === 2 && (f = u[0], g = parseInt(u[1], 10));
          for (var _ = i._getSoundIds(g), x = 0; x < _.length; x++)
            S = i._soundById(_[x]), S && (S._loop = f, i._webAudio && S._node && S._node.bufferSource && (S._node.bufferSource.loop = f, f && (S._node.bufferSource.loopStart = S._start || 0, S._node.bufferSource.loopEnd = S._stop, i.playing(_[x]) && (i.pause(_[x], !0), i.play(_[x], !0)))));
          return i;
        },
        /**
         * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   rate() -> Returns the first sound node's current playback rate.
         *   rate(id) -> Returns the sound id's current playback rate.
         *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
         *   rate(rate, id) -> Sets the playback rate of passed sound id.
         * @return {Howl/Number} Returns self or the current playback rate.
         */
        rate: function() {
          var i = this, u = arguments, f, g;
          if (u.length === 0)
            g = i._sounds[0]._id;
          else if (u.length === 1) {
            var S = i._getSoundIds(), _ = S.indexOf(u[0]);
            _ >= 0 ? g = parseInt(u[0], 10) : f = parseFloat(u[0]);
          } else u.length === 2 && (f = parseFloat(u[0]), g = parseInt(u[1], 10));
          var x;
          if (typeof f == "number") {
            if (i._state !== "loaded" || i._playLock)
              return i._queue.push({
                event: "rate",
                action: function() {
                  i.rate.apply(i, u);
                }
              }), i;
            typeof g > "u" && (i._rate = f), g = i._getSoundIds(g);
            for (var M = 0; M < g.length; M++)
              if (x = i._soundById(g[M]), x) {
                i.playing(g[M]) && (x._rateSeek = i.seek(g[M]), x._playStart = i._webAudio ? t.ctx.currentTime : x._playStart), x._rate = f, i._webAudio && x._node && x._node.bufferSource ? x._node.bufferSource.playbackRate.setValueAtTime(f, t.ctx.currentTime) : x._node && (x._node.playbackRate = f);
                var C = i.seek(g[M]), L = (i._sprite[x._sprite][0] + i._sprite[x._sprite][1]) / 1e3 - C, H = L * 1e3 / Math.abs(x._rate);
                (i._endTimers[g[M]] || !x._paused) && (i._clearTimer(g[M]), i._endTimers[g[M]] = setTimeout(i._ended.bind(i, x), H)), i._emit("rate", x._id);
              }
          } else
            return x = i._soundById(g), x ? x._rate : i._rate;
          return i;
        },
        /**
         * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
         *   seek() -> Returns the first sound node's current seek position.
         *   seek(id) -> Returns the sound id's current seek position.
         *   seek(seek) -> Sets the seek position of the first sound node.
         *   seek(seek, id) -> Sets the seek position of passed sound id.
         * @return {Howl/Number} Returns self or the current seek position.
         */
        seek: function() {
          var i = this, u = arguments, f, g;
          if (u.length === 0)
            i._sounds.length && (g = i._sounds[0]._id);
          else if (u.length === 1) {
            var S = i._getSoundIds(), _ = S.indexOf(u[0]);
            _ >= 0 ? g = parseInt(u[0], 10) : i._sounds.length && (g = i._sounds[0]._id, f = parseFloat(u[0]));
          } else u.length === 2 && (f = parseFloat(u[0]), g = parseInt(u[1], 10));
          if (typeof g > "u")
            return 0;
          if (typeof f == "number" && (i._state !== "loaded" || i._playLock))
            return i._queue.push({
              event: "seek",
              action: function() {
                i.seek.apply(i, u);
              }
            }), i;
          var x = i._soundById(g);
          if (x)
            if (typeof f == "number" && f >= 0) {
              var M = i.playing(g);
              M && i.pause(g, !0), x._seek = f, x._ended = !1, i._clearTimer(g), !i._webAudio && x._node && !isNaN(x._node.duration) && (x._node.currentTime = f);
              var C = function() {
                M && i.play(g, !0), i._emit("seek", g);
              };
              if (M && !i._webAudio) {
                var L = function() {
                  i._playLock ? setTimeout(L, 0) : C();
                };
                setTimeout(L, 0);
              } else
                C();
            } else if (i._webAudio) {
              var H = i.playing(g) ? t.ctx.currentTime - x._playStart : 0, P = x._rateSeek ? x._rateSeek - x._seek : 0;
              return x._seek + (P + H * Math.abs(x._rate));
            } else
              return x._node.currentTime;
          return i;
        },
        /**
         * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
         * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
         * @return {Boolean} True if playing and false if not.
         */
        playing: function(i) {
          var u = this;
          if (typeof i == "number") {
            var f = u._soundById(i);
            return f ? !f._paused : !1;
          }
          for (var g = 0; g < u._sounds.length; g++)
            if (!u._sounds[g]._paused)
              return !0;
          return !1;
        },
        /**
         * Get the duration of this sound. Passing a sound id will return the sprite duration.
         * @param  {Number} id The sound id to check. If none is passed, return full source duration.
         * @return {Number} Audio duration in seconds.
         */
        duration: function(i) {
          var u = this, f = u._duration, g = u._soundById(i);
          return g && (f = u._sprite[g._sprite][1] / 1e3), f;
        },
        /**
         * Returns the current loaded state of this Howl.
         * @return {String} 'unloaded', 'loading', 'loaded'
         */
        state: function() {
          return this._state;
        },
        /**
         * Unload and destroy the current Howl object.
         * This will immediately stop all sound instances attached to this group.
         */
        unload: function() {
          for (var i = this, u = i._sounds, f = 0; f < u.length; f++)
            u[f]._paused || i.stop(u[f]._id), i._webAudio || (i._clearSound(u[f]._node), u[f]._node.removeEventListener("error", u[f]._errorFn, !1), u[f]._node.removeEventListener(t._canPlayEvent, u[f]._loadFn, !1), u[f]._node.removeEventListener("ended", u[f]._endFn, !1), t._releaseHtml5Audio(u[f]._node)), delete u[f]._node, i._clearTimer(u[f]._id);
          var g = t._howls.indexOf(i);
          g >= 0 && t._howls.splice(g, 1);
          var S = !0;
          for (f = 0; f < t._howls.length; f++)
            if (t._howls[f]._src === i._src || i._src.indexOf(t._howls[f]._src) >= 0) {
              S = !1;
              break;
            }
          return l && S && delete l[i._src], t.noAudio = !1, i._state = "unloaded", i._sounds = [], i = null, null;
        },
        /**
         * Listen to a custom event.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
         * @return {Howl}
         */
        on: function(i, u, f, g) {
          var S = this, _ = S["_on" + i];
          return typeof u == "function" && _.push(g ? { id: f, fn: u, once: g } : { id: f, fn: u }), S;
        },
        /**
         * Remove a custom event. Call without parameters to remove all events.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to remove. Leave empty to remove all.
         * @param  {Number}   id    (optional) Only remove events for this sound.
         * @return {Howl}
         */
        off: function(i, u, f) {
          var g = this, S = g["_on" + i], _ = 0;
          if (typeof u == "number" && (f = u, u = null), u || f)
            for (_ = 0; _ < S.length; _++) {
              var x = f === S[_].id;
              if (u === S[_].fn && x || !u && x) {
                S.splice(_, 1);
                break;
              }
            }
          else if (i)
            g["_on" + i] = [];
          else {
            var M = Object.keys(g);
            for (_ = 0; _ < M.length; _++)
              M[_].indexOf("_on") === 0 && Array.isArray(g[M[_]]) && (g[M[_]] = []);
          }
          return g;
        },
        /**
         * Listen to a custom event and remove it once fired.
         * @param  {String}   event Event name.
         * @param  {Function} fn    Listener to call.
         * @param  {Number}   id    (optional) Only listen to events for this sound.
         * @return {Howl}
         */
        once: function(i, u, f) {
          var g = this;
          return g.on(i, u, f, 1), g;
        },
        /**
         * Emit all events of a specific type and pass the sound id.
         * @param  {String} event Event name.
         * @param  {Number} id    Sound ID.
         * @param  {Number} msg   Message to go with event.
         * @return {Howl}
         */
        _emit: function(i, u, f) {
          for (var g = this, S = g["_on" + i], _ = S.length - 1; _ >= 0; _--)
            (!S[_].id || S[_].id === u || i === "load") && (setTimeout((function(x) {
              x.call(this, u, f);
            }).bind(g, S[_].fn), 0), S[_].once && g.off(i, S[_].fn, S[_].id));
          return g._loadQueue(i), g;
        },
        /**
         * Queue of actions initiated before the sound has loaded.
         * These will be called in sequence, with the next only firing
         * after the previous has finished executing (even if async like play).
         * @return {Howl}
         */
        _loadQueue: function(i) {
          var u = this;
          if (u._queue.length > 0) {
            var f = u._queue[0];
            f.event === i && (u._queue.shift(), u._loadQueue()), i || f.action();
          }
          return u;
        },
        /**
         * Fired when playback ends at the end of the duration.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _ended: function(i) {
          var u = this, f = i._sprite;
          if (!u._webAudio && i._node && !i._node.paused && !i._node.ended && i._node.currentTime < i._stop)
            return setTimeout(u._ended.bind(u, i), 100), u;
          var g = !!(i._loop || u._sprite[f][2]);
          if (u._emit("end", i._id), !u._webAudio && g && u.stop(i._id, !0).play(i._id), u._webAudio && g) {
            u._emit("play", i._id), i._seek = i._start || 0, i._rateSeek = 0, i._playStart = t.ctx.currentTime;
            var S = (i._stop - i._start) * 1e3 / Math.abs(i._rate);
            u._endTimers[i._id] = setTimeout(u._ended.bind(u, i), S);
          }
          return u._webAudio && !g && (i._paused = !0, i._ended = !0, i._seek = i._start || 0, i._rateSeek = 0, u._clearTimer(i._id), u._cleanBuffer(i._node), t._autoSuspend()), !u._webAudio && !g && u.stop(i._id, !0), u;
        },
        /**
         * Clear the end timer for a sound playback.
         * @param  {Number} id The sound ID.
         * @return {Howl}
         */
        _clearTimer: function(i) {
          var u = this;
          if (u._endTimers[i]) {
            if (typeof u._endTimers[i] != "function")
              clearTimeout(u._endTimers[i]);
            else {
              var f = u._soundById(i);
              f && f._node && f._node.removeEventListener("ended", u._endTimers[i], !1);
            }
            delete u._endTimers[i];
          }
          return u;
        },
        /**
         * Return the sound identified by this ID, or return null.
         * @param  {Number} id Sound ID
         * @return {Object}    Sound object or null.
         */
        _soundById: function(i) {
          for (var u = this, f = 0; f < u._sounds.length; f++)
            if (i === u._sounds[f]._id)
              return u._sounds[f];
          return null;
        },
        /**
         * Return an inactive sound from the pool or create a new one.
         * @return {Sound} Sound playback object.
         */
        _inactiveSound: function() {
          var i = this;
          i._drain();
          for (var u = 0; u < i._sounds.length; u++)
            if (i._sounds[u]._ended)
              return i._sounds[u].reset();
          return new n(i);
        },
        /**
         * Drain excess inactive sounds from the pool.
         */
        _drain: function() {
          var i = this, u = i._pool, f = 0, g = 0;
          if (!(i._sounds.length < u)) {
            for (g = 0; g < i._sounds.length; g++)
              i._sounds[g]._ended && f++;
            for (g = i._sounds.length - 1; g >= 0; g--) {
              if (f <= u)
                return;
              i._sounds[g]._ended && (i._webAudio && i._sounds[g]._node && i._sounds[g]._node.disconnect(0), i._sounds.splice(g, 1), f--);
            }
          }
        },
        /**
         * Get all ID's from the sounds pool.
         * @param  {Number} id Only return one ID if one is passed.
         * @return {Array}    Array of IDs.
         */
        _getSoundIds: function(i) {
          var u = this;
          if (typeof i > "u") {
            for (var f = [], g = 0; g < u._sounds.length; g++)
              f.push(u._sounds[g]._id);
            return f;
          } else
            return [i];
        },
        /**
         * Load the sound back into the buffer source.
         * @param  {Sound} sound The sound object to work with.
         * @return {Howl}
         */
        _refreshBuffer: function(i) {
          var u = this;
          return i._node.bufferSource = t.ctx.createBufferSource(), i._node.bufferSource.buffer = l[u._src], i._panner ? i._node.bufferSource.connect(i._panner) : i._node.bufferSource.connect(i._node), i._node.bufferSource.loop = i._loop, i._loop && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop || 0), i._node.bufferSource.playbackRate.setValueAtTime(i._rate, t.ctx.currentTime), u;
        },
        /**
         * Prevent memory leaks by cleaning up the buffer source after playback.
         * @param  {Object} node Sound's audio node containing the buffer source.
         * @return {Howl}
         */
        _cleanBuffer: function(i) {
          var u = this, f = t._navigator && t._navigator.vendor.indexOf("Apple") >= 0;
          if (!i.bufferSource)
            return u;
          if (t._scratchBuffer && i.bufferSource && (i.bufferSource.onended = null, i.bufferSource.disconnect(0), f))
            try {
              i.bufferSource.buffer = t._scratchBuffer;
            } catch {
            }
          return i.bufferSource = null, u;
        },
        /**
         * Set the source to a 0-second silence to stop any downloading (except in IE).
         * @param  {Object} node Audio node to clear.
         */
        _clearSound: function(i) {
          var u = /MSIE |Trident\//.test(t._navigator && t._navigator.userAgent);
          u || (i.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
        }
      };
      var n = function(i) {
        this._parent = i, this.init();
      };
      n.prototype = {
        /**
         * Initialize a new Sound object.
         * @return {Sound}
         */
        init: function() {
          var i = this, u = i._parent;
          return i._muted = u._muted, i._loop = u._loop, i._volume = u._volume, i._rate = u._rate, i._seek = 0, i._paused = !0, i._ended = !0, i._sprite = "__default", i._id = ++t._counter, u._sounds.push(i), i.create(), i;
        },
        /**
         * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
         * @return {Sound}
         */
        create: function() {
          var i = this, u = i._parent, f = t._muted || i._muted || i._parent._muted ? 0 : i._volume;
          return u._webAudio ? (i._node = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), i._node.gain.setValueAtTime(f, t.ctx.currentTime), i._node.paused = !0, i._node.connect(t.masterGain)) : t.noAudio || (i._node = t._obtainHtml5Audio(), i._errorFn = i._errorListener.bind(i), i._node.addEventListener("error", i._errorFn, !1), i._loadFn = i._loadListener.bind(i), i._node.addEventListener(t._canPlayEvent, i._loadFn, !1), i._endFn = i._endListener.bind(i), i._node.addEventListener("ended", i._endFn, !1), i._node.src = u._src, i._node.preload = u._preload === !0 ? "auto" : u._preload, i._node.volume = f * t.volume(), i._node.load()), i;
        },
        /**
         * Reset the parameters of this sound to the original state (for recycle).
         * @return {Sound}
         */
        reset: function() {
          var i = this, u = i._parent;
          return i._muted = u._muted, i._loop = u._loop, i._volume = u._volume, i._rate = u._rate, i._seek = 0, i._rateSeek = 0, i._paused = !0, i._ended = !0, i._sprite = "__default", i._id = ++t._counter, i;
        },
        /**
         * HTML5 Audio error listener callback.
         */
        _errorListener: function() {
          var i = this;
          i._parent._emit("loaderror", i._id, i._node.error ? i._node.error.code : 0), i._node.removeEventListener("error", i._errorFn, !1);
        },
        /**
         * HTML5 Audio canplaythrough listener callback.
         */
        _loadListener: function() {
          var i = this, u = i._parent;
          u._duration = Math.ceil(i._node.duration * 10) / 10, Object.keys(u._sprite).length === 0 && (u._sprite = { __default: [0, u._duration * 1e3] }), u._state !== "loaded" && (u._state = "loaded", u._emit("load"), u._loadQueue()), i._node.removeEventListener(t._canPlayEvent, i._loadFn, !1);
        },
        /**
         * HTML5 Audio ended listener callback.
         */
        _endListener: function() {
          var i = this, u = i._parent;
          u._duration === 1 / 0 && (u._duration = Math.ceil(i._node.duration * 10) / 10, u._sprite.__default[1] === 1 / 0 && (u._sprite.__default[1] = u._duration * 1e3), u._ended(i)), i._node.removeEventListener("ended", i._endFn, !1);
        }
      };
      var l = {}, c = function(i) {
        var u = i._src;
        if (l[u]) {
          i._duration = l[u].duration, v(i);
          return;
        }
        if (/^data:[^;]+;base64,/.test(u)) {
          for (var f = atob(u.split(",")[1]), g = new Uint8Array(f.length), S = 0; S < f.length; ++S)
            g[S] = f.charCodeAt(S);
          m(g.buffer, i);
        } else {
          var _ = new XMLHttpRequest();
          _.open(i._xhr.method, u, !0), _.withCredentials = i._xhr.withCredentials, _.responseType = "arraybuffer", i._xhr.headers && Object.keys(i._xhr.headers).forEach(function(x) {
            _.setRequestHeader(x, i._xhr.headers[x]);
          }), _.onload = function() {
            var x = (_.status + "")[0];
            if (x !== "0" && x !== "2" && x !== "3") {
              i._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
              return;
            }
            m(_.response, i);
          }, _.onerror = function() {
            i._webAudio && (i._html5 = !0, i._webAudio = !1, i._sounds = [], delete l[u], i.load());
          }, h(_);
        }
      }, h = function(i) {
        try {
          i.send();
        } catch {
          i.onerror();
        }
      }, m = function(i, u) {
        var f = function() {
          u._emit("loaderror", null, "Decoding audio data failed.");
        }, g = function(S) {
          S && u._sounds.length > 0 ? (l[u._src] = S, v(u, S)) : f();
        };
        typeof Promise < "u" && t.ctx.decodeAudioData.length === 1 ? t.ctx.decodeAudioData(i).then(g).catch(f) : t.ctx.decodeAudioData(i, g, f);
      }, v = function(i, u) {
        u && !i._duration && (i._duration = u.duration), Object.keys(i._sprite).length === 0 && (i._sprite = { __default: [0, i._duration * 1e3] }), i._state !== "loaded" && (i._state = "loaded", i._emit("load"), i._loadQueue());
      }, w = function() {
        if (t.usingWebAudio) {
          try {
            typeof AudioContext < "u" ? t.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? t.ctx = new webkitAudioContext() : t.usingWebAudio = !1;
          } catch {
            t.usingWebAudio = !1;
          }
          t.ctx || (t.usingWebAudio = !1);
          var i = /iP(hone|od|ad)/.test(t._navigator && t._navigator.platform), u = t._navigator && t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), f = u ? parseInt(u[1], 10) : null;
          if (i && f && f < 9) {
            var g = /safari/.test(t._navigator && t._navigator.userAgent.toLowerCase());
            t._navigator && !g && (t.usingWebAudio = !1);
          }
          t.usingWebAudio && (t.masterGain = typeof t.ctx.createGain > "u" ? t.ctx.createGainNode() : t.ctx.createGain(), t.masterGain.gain.setValueAtTime(t._muted ? 0 : t._volume, t.ctx.currentTime), t.masterGain.connect(t.ctx.destination)), t._setup();
        }
      };
      a.Howler = t, a.Howl = r, typeof i0 < "u" ? (i0.HowlerGlobal = e, i0.Howler = t, i0.Howl = r, i0.Sound = n) : typeof window < "u" && (window.HowlerGlobal = e, window.Howler = t, window.Howl = r, window.Sound = n);
    })();
    (function() {
      HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
        var r = this;
        if (!r.ctx || !r.ctx.listener)
          return r;
        for (var n = r._howls.length - 1; n >= 0; n--)
          r._howls[n].stereo(t);
        return r;
      }, HowlerGlobal.prototype.pos = function(t, r, n) {
        var l = this;
        if (!l.ctx || !l.ctx.listener)
          return l;
        if (r = typeof r != "number" ? l._pos[1] : r, n = typeof n != "number" ? l._pos[2] : n, typeof t == "number")
          l._pos = [t, r, n], typeof l.ctx.listener.positionX < "u" ? (l.ctx.listener.positionX.setTargetAtTime(l._pos[0], Howler.ctx.currentTime, 0.1), l.ctx.listener.positionY.setTargetAtTime(l._pos[1], Howler.ctx.currentTime, 0.1), l.ctx.listener.positionZ.setTargetAtTime(l._pos[2], Howler.ctx.currentTime, 0.1)) : l.ctx.listener.setPosition(l._pos[0], l._pos[1], l._pos[2]);
        else
          return l._pos;
        return l;
      }, HowlerGlobal.prototype.orientation = function(t, r, n, l, c, h) {
        var m = this;
        if (!m.ctx || !m.ctx.listener)
          return m;
        var v = m._orientation;
        if (r = typeof r != "number" ? v[1] : r, n = typeof n != "number" ? v[2] : n, l = typeof l != "number" ? v[3] : l, c = typeof c != "number" ? v[4] : c, h = typeof h != "number" ? v[5] : h, typeof t == "number")
          m._orientation = [t, r, n, l, c, h], typeof m.ctx.listener.forwardX < "u" ? (m.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, 0.1), m.ctx.listener.forwardY.setTargetAtTime(r, Howler.ctx.currentTime, 0.1), m.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, 0.1), m.ctx.listener.upX.setTargetAtTime(l, Howler.ctx.currentTime, 0.1), m.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), m.ctx.listener.upZ.setTargetAtTime(h, Howler.ctx.currentTime, 0.1)) : m.ctx.listener.setOrientation(t, r, n, l, c, h);
        else
          return v;
        return m;
      }, Howl.prototype.init = /* @__PURE__ */ (function(t) {
        return function(r) {
          var n = this;
          return n._orientation = r.orientation || [1, 0, 0], n._stereo = r.stereo || null, n._pos = r.pos || null, n._pannerAttr = {
            coneInnerAngle: typeof r.coneInnerAngle < "u" ? r.coneInnerAngle : 360,
            coneOuterAngle: typeof r.coneOuterAngle < "u" ? r.coneOuterAngle : 360,
            coneOuterGain: typeof r.coneOuterGain < "u" ? r.coneOuterGain : 0,
            distanceModel: typeof r.distanceModel < "u" ? r.distanceModel : "inverse",
            maxDistance: typeof r.maxDistance < "u" ? r.maxDistance : 1e4,
            panningModel: typeof r.panningModel < "u" ? r.panningModel : "HRTF",
            refDistance: typeof r.refDistance < "u" ? r.refDistance : 1,
            rolloffFactor: typeof r.rolloffFactor < "u" ? r.rolloffFactor : 1
          }, n._onstereo = r.onstereo ? [{ fn: r.onstereo }] : [], n._onpos = r.onpos ? [{ fn: r.onpos }] : [], n._onorientation = r.onorientation ? [{ fn: r.onorientation }] : [], t.call(this, r);
        };
      })(Howl.prototype.init), Howl.prototype.stereo = function(t, r) {
        var n = this;
        if (!n._webAudio)
          return n;
        if (n._state !== "loaded")
          return n._queue.push({
            event: "stereo",
            action: function() {
              n.stereo(t, r);
            }
          }), n;
        var l = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
        if (typeof r > "u")
          if (typeof t == "number")
            n._stereo = t, n._pos = [t, 0, 0];
          else
            return n._stereo;
        for (var c = n._getSoundIds(r), h = 0; h < c.length; h++) {
          var m = n._soundById(c[h]);
          if (m)
            if (typeof t == "number")
              m._stereo = t, m._pos = [t, 0, 0], m._node && (m._pannerAttr.panningModel = "equalpower", (!m._panner || !m._panner.pan) && e(m, l), l === "spatial" ? typeof m._panner.positionX < "u" ? (m._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), m._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), m._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : m._panner.setPosition(t, 0, 0) : m._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)), n._emit("stereo", m._id);
            else
              return m._stereo;
        }
        return n;
      }, Howl.prototype.pos = function(t, r, n, l) {
        var c = this;
        if (!c._webAudio)
          return c;
        if (c._state !== "loaded")
          return c._queue.push({
            event: "pos",
            action: function() {
              c.pos(t, r, n, l);
            }
          }), c;
        if (r = typeof r != "number" ? 0 : r, n = typeof n != "number" ? -0.5 : n, typeof l > "u")
          if (typeof t == "number")
            c._pos = [t, r, n];
          else
            return c._pos;
        for (var h = c._getSoundIds(l), m = 0; m < h.length; m++) {
          var v = c._soundById(h[m]);
          if (v)
            if (typeof t == "number")
              v._pos = [t, r, n], v._node && ((!v._panner || v._panner.pan) && e(v, "spatial"), typeof v._panner.positionX < "u" ? (v._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), v._panner.positionY.setValueAtTime(r, Howler.ctx.currentTime), v._panner.positionZ.setValueAtTime(n, Howler.ctx.currentTime)) : v._panner.setPosition(t, r, n)), c._emit("pos", v._id);
            else
              return v._pos;
        }
        return c;
      }, Howl.prototype.orientation = function(t, r, n, l) {
        var c = this;
        if (!c._webAudio)
          return c;
        if (c._state !== "loaded")
          return c._queue.push({
            event: "orientation",
            action: function() {
              c.orientation(t, r, n, l);
            }
          }), c;
        if (r = typeof r != "number" ? c._orientation[1] : r, n = typeof n != "number" ? c._orientation[2] : n, typeof l > "u")
          if (typeof t == "number")
            c._orientation = [t, r, n];
          else
            return c._orientation;
        for (var h = c._getSoundIds(l), m = 0; m < h.length; m++) {
          var v = c._soundById(h[m]);
          if (v)
            if (typeof t == "number")
              v._orientation = [t, r, n], v._node && (v._panner || (v._pos || (v._pos = c._pos || [0, 0, -0.5]), e(v, "spatial")), typeof v._panner.orientationX < "u" ? (v._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime), v._panner.orientationY.setValueAtTime(r, Howler.ctx.currentTime), v._panner.orientationZ.setValueAtTime(n, Howler.ctx.currentTime)) : v._panner.setOrientation(t, r, n)), c._emit("orientation", v._id);
            else
              return v._orientation;
        }
        return c;
      }, Howl.prototype.pannerAttr = function() {
        var t = this, r = arguments, n, l, c;
        if (!t._webAudio)
          return t;
        if (r.length === 0)
          return t._pannerAttr;
        if (r.length === 1)
          if (typeof r[0] == "object")
            n = r[0], typeof l > "u" && (n.pannerAttr || (n.pannerAttr = {
              coneInnerAngle: n.coneInnerAngle,
              coneOuterAngle: n.coneOuterAngle,
              coneOuterGain: n.coneOuterGain,
              distanceModel: n.distanceModel,
              maxDistance: n.maxDistance,
              refDistance: n.refDistance,
              rolloffFactor: n.rolloffFactor,
              panningModel: n.panningModel
            }), t._pannerAttr = {
              coneInnerAngle: typeof n.pannerAttr.coneInnerAngle < "u" ? n.pannerAttr.coneInnerAngle : t._coneInnerAngle,
              coneOuterAngle: typeof n.pannerAttr.coneOuterAngle < "u" ? n.pannerAttr.coneOuterAngle : t._coneOuterAngle,
              coneOuterGain: typeof n.pannerAttr.coneOuterGain < "u" ? n.pannerAttr.coneOuterGain : t._coneOuterGain,
              distanceModel: typeof n.pannerAttr.distanceModel < "u" ? n.pannerAttr.distanceModel : t._distanceModel,
              maxDistance: typeof n.pannerAttr.maxDistance < "u" ? n.pannerAttr.maxDistance : t._maxDistance,
              refDistance: typeof n.pannerAttr.refDistance < "u" ? n.pannerAttr.refDistance : t._refDistance,
              rolloffFactor: typeof n.pannerAttr.rolloffFactor < "u" ? n.pannerAttr.rolloffFactor : t._rolloffFactor,
              panningModel: typeof n.pannerAttr.panningModel < "u" ? n.pannerAttr.panningModel : t._panningModel
            });
          else
            return c = t._soundById(parseInt(r[0], 10)), c ? c._pannerAttr : t._pannerAttr;
        else r.length === 2 && (n = r[0], l = parseInt(r[1], 10));
        for (var h = t._getSoundIds(l), m = 0; m < h.length; m++)
          if (c = t._soundById(h[m]), c) {
            var v = c._pannerAttr;
            v = {
              coneInnerAngle: typeof n.coneInnerAngle < "u" ? n.coneInnerAngle : v.coneInnerAngle,
              coneOuterAngle: typeof n.coneOuterAngle < "u" ? n.coneOuterAngle : v.coneOuterAngle,
              coneOuterGain: typeof n.coneOuterGain < "u" ? n.coneOuterGain : v.coneOuterGain,
              distanceModel: typeof n.distanceModel < "u" ? n.distanceModel : v.distanceModel,
              maxDistance: typeof n.maxDistance < "u" ? n.maxDistance : v.maxDistance,
              refDistance: typeof n.refDistance < "u" ? n.refDistance : v.refDistance,
              rolloffFactor: typeof n.rolloffFactor < "u" ? n.rolloffFactor : v.rolloffFactor,
              panningModel: typeof n.panningModel < "u" ? n.panningModel : v.panningModel
            };
            var w = c._panner;
            w || (c._pos || (c._pos = t._pos || [0, 0, -0.5]), e(c, "spatial"), w = c._panner), w.coneInnerAngle = v.coneInnerAngle, w.coneOuterAngle = v.coneOuterAngle, w.coneOuterGain = v.coneOuterGain, w.distanceModel = v.distanceModel, w.maxDistance = v.maxDistance, w.refDistance = v.refDistance, w.rolloffFactor = v.rolloffFactor, w.panningModel = v.panningModel;
          }
        return t;
      }, Sound.prototype.init = /* @__PURE__ */ (function(t) {
        return function() {
          var r = this, n = r._parent;
          r._orientation = n._orientation, r._stereo = n._stereo, r._pos = n._pos, r._pannerAttr = n._pannerAttr, t.call(this), r._stereo ? n.stereo(r._stereo) : r._pos && n.pos(r._pos[0], r._pos[1], r._pos[2], r._id);
        };
      })(Sound.prototype.init), Sound.prototype.reset = /* @__PURE__ */ (function(t) {
        return function() {
          var r = this, n = r._parent;
          return r._orientation = n._orientation, r._stereo = n._stereo, r._pos = n._pos, r._pannerAttr = n._pannerAttr, r._stereo ? n.stereo(r._stereo) : r._pos ? n.pos(r._pos[0], r._pos[1], r._pos[2], r._id) : r._panner && (r._panner.disconnect(0), r._panner = void 0, n._refreshBuffer(r)), t.call(this);
        };
      })(Sound.prototype.reset);
      var e = function(t, r) {
        r = r || "spatial", r === "spatial" ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, typeof t._panner.positionX < "u" ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), typeof t._panner.orientationX < "u" ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0);
      };
    })();
  })(X0)), X0;
}
var Fa = Ha();
function e1(a) {
  const e = new Fa.Howl({
    src: [a],
    html5: !0
  });
  return {
    play() {
      e.play();
    },
    pause() {
      e.pause();
    },
    seek(t) {
      e.seek(t);
    },
    now() {
      const t = e.seek();
      return typeof t == "number" ? t : 0;
    }
  };
}
let W0 = null;
const l0 = {
  setDraw(a) {
    W0 = a;
  },
  start(a) {
    function e() {
      a(), requestAnimationFrame(e);
    }
    requestAnimationFrame(e);
  },
  draw(a) {
    W0 && W0(a);
  }
};
class Pa {
  constructor() {
    this._start = null, this._offset = 0, this._playing = !1;
  }
  play() {
    this._playing || (this._playing = !0, this._start = performance.now());
  }
  pause() {
    this._playing && (this._offset += performance.now() - this._start, this._playing = !1);
  }
  seek(e) {
    this._offset = e * 1e3, this._playing && (this._start = performance.now());
  }
  now() {
    return this._playing ? (this._offset + (performance.now() - this._start)) / 1e3 : this._offset / 1e3;
  }
}
function t1() {
  const a = new Pa();
  return {
    play() {
      a.play();
    },
    pause() {
      a.pause();
    },
    seek(e) {
      a.seek(e);
    },
    now() {
      return a.now();
    }
  };
}
class oe {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, r) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new oe(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class de {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new de(t, oe.range(this, e));
  }
}
class B {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var r = "KaTeX parse error: " + e, n, l, c = t && t.loc;
    if (c && c.start <= c.end) {
      var h = c.lexer.input;
      n = c.start, l = c.end, n === h.length ? r += " at end of input: " : r += " at position " + (n + 1) + ": ";
      var m = h.slice(n, l).replace(/[^]/g, "$&̲"), v;
      n > 15 ? v = "…" + h.slice(n - 15, n) : v = h.slice(0, n);
      var w;
      l + 15 < h.length ? w = h.slice(l, l + 15) + "…" : w = h.slice(l), r += v + m + w;
    }
    var i = new Error(r);
    return i.name = "ParseError", i.__proto__ = B.prototype, i.position = n, n != null && l != null && (i.length = l - n), i.rawMessage = e, i;
  }
}
B.prototype.__proto__ = Error.prototype;
var Ga = function(e, t) {
  return e === void 0 ? t : e;
}, Va = /([A-Z])/g, $a = function(e) {
  return e.replace(Va, "-$1").toLowerCase();
}, Xa = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Wa = /[&><"']/g;
function Ua(a) {
  return String(a).replace(Wa, (e) => Xa[e]);
}
var Sr = function a(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? a(e.body[0]) : e : e.type === "font" ? a(e.body) : e;
}, Ya = function(e) {
  var t = Sr(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, ja = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Za = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, $ = {
  deflt: Ga,
  escape: Ua,
  hyphenate: $a,
  getBaseElem: Sr,
  isCharacterBox: Ya,
  protocolFromUrl: Za
}, M0 = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (a) => "#" + a
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (a, e) => (e.push(a), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (a) => Math.max(0, a),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (a) => Math.max(0, a),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (a) => Math.max(0, a),
    cli: "-e, --max-expand <n>",
    cliProcessor: (a) => a === "Infinity" ? 1 / 0 : parseInt(a)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function Ja(a) {
  if (a.default)
    return a.default;
  var e = a.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class gt {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in M0)
      if (M0.hasOwnProperty(t)) {
        var r = M0[t];
        this[t] = e[t] !== void 0 ? r.processor ? r.processor(e[t]) : e[t] : Ja(r);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, r) {
    var n = this.strict;
    if (typeof n == "function" && (n = n(e, t, r)), !(!n || n === "ignore")) {
      if (n === !0 || n === "error")
        throw new B("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), r);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, r) {
    var n = this.strict;
    if (typeof n == "function")
      try {
        n = n(e, t, r);
      } catch {
        n = "error";
      }
    return !n || n === "ignore" ? !1 : n === !0 || n === "error" ? !0 : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = $.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!r;
  }
}
class Re {
  constructor(e, t, r) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return xe[Ka[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return xe[Qa[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return xe[en[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return xe[tn[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return xe[rn[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return xe[an[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var bt = 0, B0 = 1, e0 = 2, Be = 3, u0 = 4, ve = 5, t0 = 6, ie = 7, xe = [new Re(bt, 0, !1), new Re(B0, 0, !0), new Re(e0, 1, !1), new Re(Be, 1, !0), new Re(u0, 2, !1), new Re(ve, 2, !0), new Re(t0, 3, !1), new Re(ie, 3, !0)], Ka = [u0, ve, u0, ve, t0, ie, t0, ie], Qa = [ve, ve, ve, ve, ie, ie, ie, ie], en = [e0, Be, u0, ve, t0, ie, t0, ie], tn = [Be, Be, ve, ve, ie, ie, ie, ie], rn = [B0, B0, Be, Be, ve, ve, ie, ie], an = [bt, B0, e0, Be, e0, Be, e0, Be], E = {
  DISPLAY: xe[bt],
  TEXT: xe[e0],
  SCRIPT: xe[u0],
  SCRIPTSCRIPT: xe[t0]
}, ot = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function nn(a) {
  for (var e = 0; e < ot.length; e++)
    for (var t = ot[e], r = 0; r < t.blocks.length; r++) {
      var n = t.blocks[r];
      if (a >= n[0] && a <= n[1])
        return t.name;
    }
  return null;
}
var z0 = [];
ot.forEach((a) => a.blocks.forEach((e) => z0.push(...e)));
function kr(a) {
  for (var e = 0; e < z0.length; e += 2)
    if (a >= z0[e] && a <= z0[e + 1])
      return !0;
  return !1;
}
var Qe = 80, ln = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, sn = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, on = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, un = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, cn = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, hn = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, dn = function(e, t, r) {
  var n = r - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, mn = function(e, t, r) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = ln(t, Qe);
      break;
    case "sqrtSize1":
      n = sn(t, Qe);
      break;
    case "sqrtSize2":
      n = on(t, Qe);
      break;
    case "sqrtSize3":
      n = un(t, Qe);
      break;
    case "sqrtSize4":
      n = cn(t, Qe);
      break;
    case "sqrtTall":
      n = dn(t, Qe, r);
  }
  return n;
}, fn = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Pt = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, pn = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class h0 {
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var Se = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, b0 = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, Gt = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function vn(a, e) {
  Se[a] = e;
}
function yt(a, e, t) {
  if (!Se[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var r = a.charCodeAt(0), n = Se[e][r];
  if (!n && a[0] in Gt && (r = Gt[a[0]].charCodeAt(0), n = Se[e][r]), !n && t === "text" && kr(r) && (n = Se[e][77]), n)
    return {
      depth: n[0],
      height: n[1],
      italic: n[2],
      skew: n[3],
      width: n[4]
    };
}
var U0 = {};
function gn(a) {
  var e;
  if (a >= 5 ? e = 0 : a >= 3 ? e = 1 : e = 2, !U0[e]) {
    var t = U0[e] = {
      cssEmPerMu: b0.quad[e] / 18
    };
    for (var r in b0)
      b0.hasOwnProperty(r) && (t[r] = b0[r][e]);
  }
  return U0[e];
}
var bn = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], Vt = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], $t = function(e, t) {
  return t.size < 2 ? e : bn[e - 1][t.size - 1];
};
class ze {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || ze.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Vt[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var r in e)
      e.hasOwnProperty(r) && (t[r] = e[r]);
    return new ze(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: $t(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Vt[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = $t(ze.BASESIZE, e);
    return this.size === t && this.textSize === ze.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== ze.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + ze.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = gn(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
ze.BASESIZE = 6;
var ut = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, yn = {
  ex: !0,
  em: !0,
  mu: !0
}, _r = function(e) {
  return typeof e != "string" && (e = e.unit), e in ut || e in yn || e === "ex";
}, Z = function(e, t) {
  var r;
  if (e.unit in ut)
    r = ut[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    r = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = t.havingStyle(t.style.text()) : n = t, e.unit === "ex")
      r = n.fontMetrics().xHeight;
    else if (e.unit === "em")
      r = n.fontMetrics().quad;
    else
      throw new B("Invalid unit: '" + e.unit + "'");
    n !== t && (r *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * r, t.maxSize);
}, D = function(e) {
  return +e.toFixed(4) + "em";
}, Pe = function(e) {
  return e.filter((t) => t).join(" ");
}, Ar = function(e, t, r) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, Tr = function(e) {
  var t = document.createElement(e);
  t.className = Pe(this.classes);
  for (var r in this.style)
    this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
  for (var n in this.attributes)
    this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
  for (var l = 0; l < this.children.length; l++)
    t.appendChild(this.children[l].toNode());
  return t;
}, wn = /[\s"'>/=\x00-\x1f]/, Mr = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + $.escape(Pe(this.classes)) + '"');
  var r = "";
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (r += $.hyphenate(n) + ":" + this.style[n] + ";");
  r && (t += ' style="' + $.escape(r) + '"');
  for (var l in this.attributes)
    if (this.attributes.hasOwnProperty(l)) {
      if (wn.test(l))
        throw new B("Invalid attribute name '" + l + "'");
      t += " " + l + '="' + $.escape(this.attributes[l]) + '"';
    }
  t += ">";
  for (var c = 0; c < this.children.length; c++)
    t += this.children[c].toMarkup();
  return t += "</" + e + ">", t;
};
class d0 {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Ar.call(this, e, r, n), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Tr.call(this, "span");
  }
  toMarkup() {
    return Mr.call(this, "span");
  }
}
class wt {
  constructor(e, t, r, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Ar.call(this, t, n), this.children = r || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Tr.call(this, "a");
  }
  toMarkup() {
    return Mr.call(this, "a");
  }
}
class xn {
  constructor(e, t, r) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + $.escape(this.src) + '"' + (' alt="' + $.escape(this.alt) + '"'), t = "";
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t += $.hyphenate(r) + ":" + this.style[r] + ";");
    return t && (e += ' style="' + $.escape(t) + '"'), e += "'/>", e;
  }
}
var Sn = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class ge {
  constructor(e, t, r, n, l, c, h, m) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = l || 0, this.width = c || 0, this.classes = h || [], this.style = m || {}, this.maxFontSize = 0;
    var v = nn(this.text.charCodeAt(0));
    v && this.classes.push(v + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Sn[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = D(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Pe(this.classes));
    for (var r in this.style)
      this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += $.escape(Pe(this.classes)), t += '"');
    var r = "";
    this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (r += $.hyphenate(n) + ":" + this.style[n] + ";");
    r && (e = !0, t += ' style="' + $.escape(r) + '"');
    var l = $.escape(this.text);
    return e ? (t += ">", t += l, t += "</span>", t) : l;
  }
}
class Ce {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    for (var n = 0; n < this.children.length; n++)
      t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + $.escape(this.attributes[t]) + '"');
    e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</svg>", e;
  }
}
class Ge {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Pt[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + $.escape(this.alternate) + '"/>' : '<path d="' + $.escape(Pt[this.pathName]) + '"/>';
  }
}
class ct {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && t.setAttribute(r, this.attributes[r]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + $.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Xt(a) {
  if (a instanceof ge)
    return a;
  throw new Error("Expected symbolNode but got " + String(a) + ".");
}
function kn(a) {
  if (a instanceof d0)
    return a;
  throw new Error("Expected span<HtmlDomNode> but got " + String(a) + ".");
}
var _n = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, An = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, U = {
  math: {},
  text: {}
};
function s(a, e, t, r, n, l) {
  U[a][n] = {
    font: e,
    group: t,
    replace: r
  }, l && r && (U[a][r] = U[a][n]);
}
var o = "math", T = "text", d = "main", b = "ams", Y = "accent-token", q = "bin", le = "close", r0 = "inner", O = "mathord", te = "op-token", me = "open", N0 = "punct", y = "rel", Ne = "spacing", k = "textord";
s(o, d, y, "≡", "\\equiv", !0);
s(o, d, y, "≺", "\\prec", !0);
s(o, d, y, "≻", "\\succ", !0);
s(o, d, y, "∼", "\\sim", !0);
s(o, d, y, "⊥", "\\perp");
s(o, d, y, "⪯", "\\preceq", !0);
s(o, d, y, "⪰", "\\succeq", !0);
s(o, d, y, "≃", "\\simeq", !0);
s(o, d, y, "∣", "\\mid", !0);
s(o, d, y, "≪", "\\ll", !0);
s(o, d, y, "≫", "\\gg", !0);
s(o, d, y, "≍", "\\asymp", !0);
s(o, d, y, "∥", "\\parallel");
s(o, d, y, "⋈", "\\bowtie", !0);
s(o, d, y, "⌣", "\\smile", !0);
s(o, d, y, "⊑", "\\sqsubseteq", !0);
s(o, d, y, "⊒", "\\sqsupseteq", !0);
s(o, d, y, "≐", "\\doteq", !0);
s(o, d, y, "⌢", "\\frown", !0);
s(o, d, y, "∋", "\\ni", !0);
s(o, d, y, "∝", "\\propto", !0);
s(o, d, y, "⊢", "\\vdash", !0);
s(o, d, y, "⊣", "\\dashv", !0);
s(o, d, y, "∋", "\\owns");
s(o, d, N0, ".", "\\ldotp");
s(o, d, N0, "⋅", "\\cdotp");
s(o, d, k, "#", "\\#");
s(T, d, k, "#", "\\#");
s(o, d, k, "&", "\\&");
s(T, d, k, "&", "\\&");
s(o, d, k, "ℵ", "\\aleph", !0);
s(o, d, k, "∀", "\\forall", !0);
s(o, d, k, "ℏ", "\\hbar", !0);
s(o, d, k, "∃", "\\exists", !0);
s(o, d, k, "∇", "\\nabla", !0);
s(o, d, k, "♭", "\\flat", !0);
s(o, d, k, "ℓ", "\\ell", !0);
s(o, d, k, "♮", "\\natural", !0);
s(o, d, k, "♣", "\\clubsuit", !0);
s(o, d, k, "℘", "\\wp", !0);
s(o, d, k, "♯", "\\sharp", !0);
s(o, d, k, "♢", "\\diamondsuit", !0);
s(o, d, k, "ℜ", "\\Re", !0);
s(o, d, k, "♡", "\\heartsuit", !0);
s(o, d, k, "ℑ", "\\Im", !0);
s(o, d, k, "♠", "\\spadesuit", !0);
s(o, d, k, "§", "\\S", !0);
s(T, d, k, "§", "\\S");
s(o, d, k, "¶", "\\P", !0);
s(T, d, k, "¶", "\\P");
s(o, d, k, "†", "\\dag");
s(T, d, k, "†", "\\dag");
s(T, d, k, "†", "\\textdagger");
s(o, d, k, "‡", "\\ddag");
s(T, d, k, "‡", "\\ddag");
s(T, d, k, "‡", "\\textdaggerdbl");
s(o, d, le, "⎱", "\\rmoustache", !0);
s(o, d, me, "⎰", "\\lmoustache", !0);
s(o, d, le, "⟯", "\\rgroup", !0);
s(o, d, me, "⟮", "\\lgroup", !0);
s(o, d, q, "∓", "\\mp", !0);
s(o, d, q, "⊖", "\\ominus", !0);
s(o, d, q, "⊎", "\\uplus", !0);
s(o, d, q, "⊓", "\\sqcap", !0);
s(o, d, q, "∗", "\\ast");
s(o, d, q, "⊔", "\\sqcup", !0);
s(o, d, q, "◯", "\\bigcirc", !0);
s(o, d, q, "∙", "\\bullet", !0);
s(o, d, q, "‡", "\\ddagger");
s(o, d, q, "≀", "\\wr", !0);
s(o, d, q, "⨿", "\\amalg");
s(o, d, q, "&", "\\And");
s(o, d, y, "⟵", "\\longleftarrow", !0);
s(o, d, y, "⇐", "\\Leftarrow", !0);
s(o, d, y, "⟸", "\\Longleftarrow", !0);
s(o, d, y, "⟶", "\\longrightarrow", !0);
s(o, d, y, "⇒", "\\Rightarrow", !0);
s(o, d, y, "⟹", "\\Longrightarrow", !0);
s(o, d, y, "↔", "\\leftrightarrow", !0);
s(o, d, y, "⟷", "\\longleftrightarrow", !0);
s(o, d, y, "⇔", "\\Leftrightarrow", !0);
s(o, d, y, "⟺", "\\Longleftrightarrow", !0);
s(o, d, y, "↦", "\\mapsto", !0);
s(o, d, y, "⟼", "\\longmapsto", !0);
s(o, d, y, "↗", "\\nearrow", !0);
s(o, d, y, "↩", "\\hookleftarrow", !0);
s(o, d, y, "↪", "\\hookrightarrow", !0);
s(o, d, y, "↘", "\\searrow", !0);
s(o, d, y, "↼", "\\leftharpoonup", !0);
s(o, d, y, "⇀", "\\rightharpoonup", !0);
s(o, d, y, "↙", "\\swarrow", !0);
s(o, d, y, "↽", "\\leftharpoondown", !0);
s(o, d, y, "⇁", "\\rightharpoondown", !0);
s(o, d, y, "↖", "\\nwarrow", !0);
s(o, d, y, "⇌", "\\rightleftharpoons", !0);
s(o, b, y, "≮", "\\nless", !0);
s(o, b, y, "", "\\@nleqslant");
s(o, b, y, "", "\\@nleqq");
s(o, b, y, "⪇", "\\lneq", !0);
s(o, b, y, "≨", "\\lneqq", !0);
s(o, b, y, "", "\\@lvertneqq");
s(o, b, y, "⋦", "\\lnsim", !0);
s(o, b, y, "⪉", "\\lnapprox", !0);
s(o, b, y, "⊀", "\\nprec", !0);
s(o, b, y, "⋠", "\\npreceq", !0);
s(o, b, y, "⋨", "\\precnsim", !0);
s(o, b, y, "⪹", "\\precnapprox", !0);
s(o, b, y, "≁", "\\nsim", !0);
s(o, b, y, "", "\\@nshortmid");
s(o, b, y, "∤", "\\nmid", !0);
s(o, b, y, "⊬", "\\nvdash", !0);
s(o, b, y, "⊭", "\\nvDash", !0);
s(o, b, y, "⋪", "\\ntriangleleft");
s(o, b, y, "⋬", "\\ntrianglelefteq", !0);
s(o, b, y, "⊊", "\\subsetneq", !0);
s(o, b, y, "", "\\@varsubsetneq");
s(o, b, y, "⫋", "\\subsetneqq", !0);
s(o, b, y, "", "\\@varsubsetneqq");
s(o, b, y, "≯", "\\ngtr", !0);
s(o, b, y, "", "\\@ngeqslant");
s(o, b, y, "", "\\@ngeqq");
s(o, b, y, "⪈", "\\gneq", !0);
s(o, b, y, "≩", "\\gneqq", !0);
s(o, b, y, "", "\\@gvertneqq");
s(o, b, y, "⋧", "\\gnsim", !0);
s(o, b, y, "⪊", "\\gnapprox", !0);
s(o, b, y, "⊁", "\\nsucc", !0);
s(o, b, y, "⋡", "\\nsucceq", !0);
s(o, b, y, "⋩", "\\succnsim", !0);
s(o, b, y, "⪺", "\\succnapprox", !0);
s(o, b, y, "≆", "\\ncong", !0);
s(o, b, y, "", "\\@nshortparallel");
s(o, b, y, "∦", "\\nparallel", !0);
s(o, b, y, "⊯", "\\nVDash", !0);
s(o, b, y, "⋫", "\\ntriangleright");
s(o, b, y, "⋭", "\\ntrianglerighteq", !0);
s(o, b, y, "", "\\@nsupseteqq");
s(o, b, y, "⊋", "\\supsetneq", !0);
s(o, b, y, "", "\\@varsupsetneq");
s(o, b, y, "⫌", "\\supsetneqq", !0);
s(o, b, y, "", "\\@varsupsetneqq");
s(o, b, y, "⊮", "\\nVdash", !0);
s(o, b, y, "⪵", "\\precneqq", !0);
s(o, b, y, "⪶", "\\succneqq", !0);
s(o, b, y, "", "\\@nsubseteqq");
s(o, b, q, "⊴", "\\unlhd");
s(o, b, q, "⊵", "\\unrhd");
s(o, b, y, "↚", "\\nleftarrow", !0);
s(o, b, y, "↛", "\\nrightarrow", !0);
s(o, b, y, "⇍", "\\nLeftarrow", !0);
s(o, b, y, "⇏", "\\nRightarrow", !0);
s(o, b, y, "↮", "\\nleftrightarrow", !0);
s(o, b, y, "⇎", "\\nLeftrightarrow", !0);
s(o, b, y, "△", "\\vartriangle");
s(o, b, k, "ℏ", "\\hslash");
s(o, b, k, "▽", "\\triangledown");
s(o, b, k, "◊", "\\lozenge");
s(o, b, k, "Ⓢ", "\\circledS");
s(o, b, k, "®", "\\circledR");
s(T, b, k, "®", "\\circledR");
s(o, b, k, "∡", "\\measuredangle", !0);
s(o, b, k, "∄", "\\nexists");
s(o, b, k, "℧", "\\mho");
s(o, b, k, "Ⅎ", "\\Finv", !0);
s(o, b, k, "⅁", "\\Game", !0);
s(o, b, k, "‵", "\\backprime");
s(o, b, k, "▲", "\\blacktriangle");
s(o, b, k, "▼", "\\blacktriangledown");
s(o, b, k, "■", "\\blacksquare");
s(o, b, k, "⧫", "\\blacklozenge");
s(o, b, k, "★", "\\bigstar");
s(o, b, k, "∢", "\\sphericalangle", !0);
s(o, b, k, "∁", "\\complement", !0);
s(o, b, k, "ð", "\\eth", !0);
s(T, d, k, "ð", "ð");
s(o, b, k, "╱", "\\diagup");
s(o, b, k, "╲", "\\diagdown");
s(o, b, k, "□", "\\square");
s(o, b, k, "□", "\\Box");
s(o, b, k, "◊", "\\Diamond");
s(o, b, k, "¥", "\\yen", !0);
s(T, b, k, "¥", "\\yen", !0);
s(o, b, k, "✓", "\\checkmark", !0);
s(T, b, k, "✓", "\\checkmark");
s(o, b, k, "ℶ", "\\beth", !0);
s(o, b, k, "ℸ", "\\daleth", !0);
s(o, b, k, "ℷ", "\\gimel", !0);
s(o, b, k, "ϝ", "\\digamma", !0);
s(o, b, k, "ϰ", "\\varkappa");
s(o, b, me, "┌", "\\@ulcorner", !0);
s(o, b, le, "┐", "\\@urcorner", !0);
s(o, b, me, "└", "\\@llcorner", !0);
s(o, b, le, "┘", "\\@lrcorner", !0);
s(o, b, y, "≦", "\\leqq", !0);
s(o, b, y, "⩽", "\\leqslant", !0);
s(o, b, y, "⪕", "\\eqslantless", !0);
s(o, b, y, "≲", "\\lesssim", !0);
s(o, b, y, "⪅", "\\lessapprox", !0);
s(o, b, y, "≊", "\\approxeq", !0);
s(o, b, q, "⋖", "\\lessdot");
s(o, b, y, "⋘", "\\lll", !0);
s(o, b, y, "≶", "\\lessgtr", !0);
s(o, b, y, "⋚", "\\lesseqgtr", !0);
s(o, b, y, "⪋", "\\lesseqqgtr", !0);
s(o, b, y, "≑", "\\doteqdot");
s(o, b, y, "≓", "\\risingdotseq", !0);
s(o, b, y, "≒", "\\fallingdotseq", !0);
s(o, b, y, "∽", "\\backsim", !0);
s(o, b, y, "⋍", "\\backsimeq", !0);
s(o, b, y, "⫅", "\\subseteqq", !0);
s(o, b, y, "⋐", "\\Subset", !0);
s(o, b, y, "⊏", "\\sqsubset", !0);
s(o, b, y, "≼", "\\preccurlyeq", !0);
s(o, b, y, "⋞", "\\curlyeqprec", !0);
s(o, b, y, "≾", "\\precsim", !0);
s(o, b, y, "⪷", "\\precapprox", !0);
s(o, b, y, "⊲", "\\vartriangleleft");
s(o, b, y, "⊴", "\\trianglelefteq");
s(o, b, y, "⊨", "\\vDash", !0);
s(o, b, y, "⊪", "\\Vvdash", !0);
s(o, b, y, "⌣", "\\smallsmile");
s(o, b, y, "⌢", "\\smallfrown");
s(o, b, y, "≏", "\\bumpeq", !0);
s(o, b, y, "≎", "\\Bumpeq", !0);
s(o, b, y, "≧", "\\geqq", !0);
s(o, b, y, "⩾", "\\geqslant", !0);
s(o, b, y, "⪖", "\\eqslantgtr", !0);
s(o, b, y, "≳", "\\gtrsim", !0);
s(o, b, y, "⪆", "\\gtrapprox", !0);
s(o, b, q, "⋗", "\\gtrdot");
s(o, b, y, "⋙", "\\ggg", !0);
s(o, b, y, "≷", "\\gtrless", !0);
s(o, b, y, "⋛", "\\gtreqless", !0);
s(o, b, y, "⪌", "\\gtreqqless", !0);
s(o, b, y, "≖", "\\eqcirc", !0);
s(o, b, y, "≗", "\\circeq", !0);
s(o, b, y, "≜", "\\triangleq", !0);
s(o, b, y, "∼", "\\thicksim");
s(o, b, y, "≈", "\\thickapprox");
s(o, b, y, "⫆", "\\supseteqq", !0);
s(o, b, y, "⋑", "\\Supset", !0);
s(o, b, y, "⊐", "\\sqsupset", !0);
s(o, b, y, "≽", "\\succcurlyeq", !0);
s(o, b, y, "⋟", "\\curlyeqsucc", !0);
s(o, b, y, "≿", "\\succsim", !0);
s(o, b, y, "⪸", "\\succapprox", !0);
s(o, b, y, "⊳", "\\vartriangleright");
s(o, b, y, "⊵", "\\trianglerighteq");
s(o, b, y, "⊩", "\\Vdash", !0);
s(o, b, y, "∣", "\\shortmid");
s(o, b, y, "∥", "\\shortparallel");
s(o, b, y, "≬", "\\between", !0);
s(o, b, y, "⋔", "\\pitchfork", !0);
s(o, b, y, "∝", "\\varpropto");
s(o, b, y, "◀", "\\blacktriangleleft");
s(o, b, y, "∴", "\\therefore", !0);
s(o, b, y, "∍", "\\backepsilon");
s(o, b, y, "▶", "\\blacktriangleright");
s(o, b, y, "∵", "\\because", !0);
s(o, b, y, "⋘", "\\llless");
s(o, b, y, "⋙", "\\gggtr");
s(o, b, q, "⊲", "\\lhd");
s(o, b, q, "⊳", "\\rhd");
s(o, b, y, "≂", "\\eqsim", !0);
s(o, d, y, "⋈", "\\Join");
s(o, b, y, "≑", "\\Doteq", !0);
s(o, b, q, "∔", "\\dotplus", !0);
s(o, b, q, "∖", "\\smallsetminus");
s(o, b, q, "⋒", "\\Cap", !0);
s(o, b, q, "⋓", "\\Cup", !0);
s(o, b, q, "⩞", "\\doublebarwedge", !0);
s(o, b, q, "⊟", "\\boxminus", !0);
s(o, b, q, "⊞", "\\boxplus", !0);
s(o, b, q, "⋇", "\\divideontimes", !0);
s(o, b, q, "⋉", "\\ltimes", !0);
s(o, b, q, "⋊", "\\rtimes", !0);
s(o, b, q, "⋋", "\\leftthreetimes", !0);
s(o, b, q, "⋌", "\\rightthreetimes", !0);
s(o, b, q, "⋏", "\\curlywedge", !0);
s(o, b, q, "⋎", "\\curlyvee", !0);
s(o, b, q, "⊝", "\\circleddash", !0);
s(o, b, q, "⊛", "\\circledast", !0);
s(o, b, q, "⋅", "\\centerdot");
s(o, b, q, "⊺", "\\intercal", !0);
s(o, b, q, "⋒", "\\doublecap");
s(o, b, q, "⋓", "\\doublecup");
s(o, b, q, "⊠", "\\boxtimes", !0);
s(o, b, y, "⇢", "\\dashrightarrow", !0);
s(o, b, y, "⇠", "\\dashleftarrow", !0);
s(o, b, y, "⇇", "\\leftleftarrows", !0);
s(o, b, y, "⇆", "\\leftrightarrows", !0);
s(o, b, y, "⇚", "\\Lleftarrow", !0);
s(o, b, y, "↞", "\\twoheadleftarrow", !0);
s(o, b, y, "↢", "\\leftarrowtail", !0);
s(o, b, y, "↫", "\\looparrowleft", !0);
s(o, b, y, "⇋", "\\leftrightharpoons", !0);
s(o, b, y, "↶", "\\curvearrowleft", !0);
s(o, b, y, "↺", "\\circlearrowleft", !0);
s(o, b, y, "↰", "\\Lsh", !0);
s(o, b, y, "⇈", "\\upuparrows", !0);
s(o, b, y, "↿", "\\upharpoonleft", !0);
s(o, b, y, "⇃", "\\downharpoonleft", !0);
s(o, d, y, "⊶", "\\origof", !0);
s(o, d, y, "⊷", "\\imageof", !0);
s(o, b, y, "⊸", "\\multimap", !0);
s(o, b, y, "↭", "\\leftrightsquigarrow", !0);
s(o, b, y, "⇉", "\\rightrightarrows", !0);
s(o, b, y, "⇄", "\\rightleftarrows", !0);
s(o, b, y, "↠", "\\twoheadrightarrow", !0);
s(o, b, y, "↣", "\\rightarrowtail", !0);
s(o, b, y, "↬", "\\looparrowright", !0);
s(o, b, y, "↷", "\\curvearrowright", !0);
s(o, b, y, "↻", "\\circlearrowright", !0);
s(o, b, y, "↱", "\\Rsh", !0);
s(o, b, y, "⇊", "\\downdownarrows", !0);
s(o, b, y, "↾", "\\upharpoonright", !0);
s(o, b, y, "⇂", "\\downharpoonright", !0);
s(o, b, y, "⇝", "\\rightsquigarrow", !0);
s(o, b, y, "⇝", "\\leadsto");
s(o, b, y, "⇛", "\\Rrightarrow", !0);
s(o, b, y, "↾", "\\restriction");
s(o, d, k, "‘", "`");
s(o, d, k, "$", "\\$");
s(T, d, k, "$", "\\$");
s(T, d, k, "$", "\\textdollar");
s(o, d, k, "%", "\\%");
s(T, d, k, "%", "\\%");
s(o, d, k, "_", "\\_");
s(T, d, k, "_", "\\_");
s(T, d, k, "_", "\\textunderscore");
s(o, d, k, "∠", "\\angle", !0);
s(o, d, k, "∞", "\\infty", !0);
s(o, d, k, "′", "\\prime");
s(o, d, k, "△", "\\triangle");
s(o, d, k, "Γ", "\\Gamma", !0);
s(o, d, k, "Δ", "\\Delta", !0);
s(o, d, k, "Θ", "\\Theta", !0);
s(o, d, k, "Λ", "\\Lambda", !0);
s(o, d, k, "Ξ", "\\Xi", !0);
s(o, d, k, "Π", "\\Pi", !0);
s(o, d, k, "Σ", "\\Sigma", !0);
s(o, d, k, "Υ", "\\Upsilon", !0);
s(o, d, k, "Φ", "\\Phi", !0);
s(o, d, k, "Ψ", "\\Psi", !0);
s(o, d, k, "Ω", "\\Omega", !0);
s(o, d, k, "A", "Α");
s(o, d, k, "B", "Β");
s(o, d, k, "E", "Ε");
s(o, d, k, "Z", "Ζ");
s(o, d, k, "H", "Η");
s(o, d, k, "I", "Ι");
s(o, d, k, "K", "Κ");
s(o, d, k, "M", "Μ");
s(o, d, k, "N", "Ν");
s(o, d, k, "O", "Ο");
s(o, d, k, "P", "Ρ");
s(o, d, k, "T", "Τ");
s(o, d, k, "X", "Χ");
s(o, d, k, "¬", "\\neg", !0);
s(o, d, k, "¬", "\\lnot");
s(o, d, k, "⊤", "\\top");
s(o, d, k, "⊥", "\\bot");
s(o, d, k, "∅", "\\emptyset");
s(o, b, k, "∅", "\\varnothing");
s(o, d, O, "α", "\\alpha", !0);
s(o, d, O, "β", "\\beta", !0);
s(o, d, O, "γ", "\\gamma", !0);
s(o, d, O, "δ", "\\delta", !0);
s(o, d, O, "ϵ", "\\epsilon", !0);
s(o, d, O, "ζ", "\\zeta", !0);
s(o, d, O, "η", "\\eta", !0);
s(o, d, O, "θ", "\\theta", !0);
s(o, d, O, "ι", "\\iota", !0);
s(o, d, O, "κ", "\\kappa", !0);
s(o, d, O, "λ", "\\lambda", !0);
s(o, d, O, "μ", "\\mu", !0);
s(o, d, O, "ν", "\\nu", !0);
s(o, d, O, "ξ", "\\xi", !0);
s(o, d, O, "ο", "\\omicron", !0);
s(o, d, O, "π", "\\pi", !0);
s(o, d, O, "ρ", "\\rho", !0);
s(o, d, O, "σ", "\\sigma", !0);
s(o, d, O, "τ", "\\tau", !0);
s(o, d, O, "υ", "\\upsilon", !0);
s(o, d, O, "ϕ", "\\phi", !0);
s(o, d, O, "χ", "\\chi", !0);
s(o, d, O, "ψ", "\\psi", !0);
s(o, d, O, "ω", "\\omega", !0);
s(o, d, O, "ε", "\\varepsilon", !0);
s(o, d, O, "ϑ", "\\vartheta", !0);
s(o, d, O, "ϖ", "\\varpi", !0);
s(o, d, O, "ϱ", "\\varrho", !0);
s(o, d, O, "ς", "\\varsigma", !0);
s(o, d, O, "φ", "\\varphi", !0);
s(o, d, q, "∗", "*", !0);
s(o, d, q, "+", "+");
s(o, d, q, "−", "-", !0);
s(o, d, q, "⋅", "\\cdot", !0);
s(o, d, q, "∘", "\\circ", !0);
s(o, d, q, "÷", "\\div", !0);
s(o, d, q, "±", "\\pm", !0);
s(o, d, q, "×", "\\times", !0);
s(o, d, q, "∩", "\\cap", !0);
s(o, d, q, "∪", "\\cup", !0);
s(o, d, q, "∖", "\\setminus", !0);
s(o, d, q, "∧", "\\land");
s(o, d, q, "∨", "\\lor");
s(o, d, q, "∧", "\\wedge", !0);
s(o, d, q, "∨", "\\vee", !0);
s(o, d, k, "√", "\\surd");
s(o, d, me, "⟨", "\\langle", !0);
s(o, d, me, "∣", "\\lvert");
s(o, d, me, "∥", "\\lVert");
s(o, d, le, "?", "?");
s(o, d, le, "!", "!");
s(o, d, le, "⟩", "\\rangle", !0);
s(o, d, le, "∣", "\\rvert");
s(o, d, le, "∥", "\\rVert");
s(o, d, y, "=", "=");
s(o, d, y, ":", ":");
s(o, d, y, "≈", "\\approx", !0);
s(o, d, y, "≅", "\\cong", !0);
s(o, d, y, "≥", "\\ge");
s(o, d, y, "≥", "\\geq", !0);
s(o, d, y, "←", "\\gets");
s(o, d, y, ">", "\\gt", !0);
s(o, d, y, "∈", "\\in", !0);
s(o, d, y, "", "\\@not");
s(o, d, y, "⊂", "\\subset", !0);
s(o, d, y, "⊃", "\\supset", !0);
s(o, d, y, "⊆", "\\subseteq", !0);
s(o, d, y, "⊇", "\\supseteq", !0);
s(o, b, y, "⊈", "\\nsubseteq", !0);
s(o, b, y, "⊉", "\\nsupseteq", !0);
s(o, d, y, "⊨", "\\models");
s(o, d, y, "←", "\\leftarrow", !0);
s(o, d, y, "≤", "\\le");
s(o, d, y, "≤", "\\leq", !0);
s(o, d, y, "<", "\\lt", !0);
s(o, d, y, "→", "\\rightarrow", !0);
s(o, d, y, "→", "\\to");
s(o, b, y, "≱", "\\ngeq", !0);
s(o, b, y, "≰", "\\nleq", !0);
s(o, d, Ne, " ", "\\ ");
s(o, d, Ne, " ", "\\space");
s(o, d, Ne, " ", "\\nobreakspace");
s(T, d, Ne, " ", "\\ ");
s(T, d, Ne, " ", " ");
s(T, d, Ne, " ", "\\space");
s(T, d, Ne, " ", "\\nobreakspace");
s(o, d, Ne, null, "\\nobreak");
s(o, d, Ne, null, "\\allowbreak");
s(o, d, N0, ",", ",");
s(o, d, N0, ";", ";");
s(o, b, q, "⊼", "\\barwedge", !0);
s(o, b, q, "⊻", "\\veebar", !0);
s(o, d, q, "⊙", "\\odot", !0);
s(o, d, q, "⊕", "\\oplus", !0);
s(o, d, q, "⊗", "\\otimes", !0);
s(o, d, k, "∂", "\\partial", !0);
s(o, d, q, "⊘", "\\oslash", !0);
s(o, b, q, "⊚", "\\circledcirc", !0);
s(o, b, q, "⊡", "\\boxdot", !0);
s(o, d, q, "△", "\\bigtriangleup");
s(o, d, q, "▽", "\\bigtriangledown");
s(o, d, q, "†", "\\dagger");
s(o, d, q, "⋄", "\\diamond");
s(o, d, q, "⋆", "\\star");
s(o, d, q, "◃", "\\triangleleft");
s(o, d, q, "▹", "\\triangleright");
s(o, d, me, "{", "\\{");
s(T, d, k, "{", "\\{");
s(T, d, k, "{", "\\textbraceleft");
s(o, d, le, "}", "\\}");
s(T, d, k, "}", "\\}");
s(T, d, k, "}", "\\textbraceright");
s(o, d, me, "{", "\\lbrace");
s(o, d, le, "}", "\\rbrace");
s(o, d, me, "[", "\\lbrack", !0);
s(T, d, k, "[", "\\lbrack", !0);
s(o, d, le, "]", "\\rbrack", !0);
s(T, d, k, "]", "\\rbrack", !0);
s(o, d, me, "(", "\\lparen", !0);
s(o, d, le, ")", "\\rparen", !0);
s(T, d, k, "<", "\\textless", !0);
s(T, d, k, ">", "\\textgreater", !0);
s(o, d, me, "⌊", "\\lfloor", !0);
s(o, d, le, "⌋", "\\rfloor", !0);
s(o, d, me, "⌈", "\\lceil", !0);
s(o, d, le, "⌉", "\\rceil", !0);
s(o, d, k, "\\", "\\backslash");
s(o, d, k, "∣", "|");
s(o, d, k, "∣", "\\vert");
s(T, d, k, "|", "\\textbar", !0);
s(o, d, k, "∥", "\\|");
s(o, d, k, "∥", "\\Vert");
s(T, d, k, "∥", "\\textbardbl");
s(T, d, k, "~", "\\textasciitilde");
s(T, d, k, "\\", "\\textbackslash");
s(T, d, k, "^", "\\textasciicircum");
s(o, d, y, "↑", "\\uparrow", !0);
s(o, d, y, "⇑", "\\Uparrow", !0);
s(o, d, y, "↓", "\\downarrow", !0);
s(o, d, y, "⇓", "\\Downarrow", !0);
s(o, d, y, "↕", "\\updownarrow", !0);
s(o, d, y, "⇕", "\\Updownarrow", !0);
s(o, d, te, "∐", "\\coprod");
s(o, d, te, "⋁", "\\bigvee");
s(o, d, te, "⋀", "\\bigwedge");
s(o, d, te, "⨄", "\\biguplus");
s(o, d, te, "⋂", "\\bigcap");
s(o, d, te, "⋃", "\\bigcup");
s(o, d, te, "∫", "\\int");
s(o, d, te, "∫", "\\intop");
s(o, d, te, "∬", "\\iint");
s(o, d, te, "∭", "\\iiint");
s(o, d, te, "∏", "\\prod");
s(o, d, te, "∑", "\\sum");
s(o, d, te, "⨂", "\\bigotimes");
s(o, d, te, "⨁", "\\bigoplus");
s(o, d, te, "⨀", "\\bigodot");
s(o, d, te, "∮", "\\oint");
s(o, d, te, "∯", "\\oiint");
s(o, d, te, "∰", "\\oiiint");
s(o, d, te, "⨆", "\\bigsqcup");
s(o, d, te, "∫", "\\smallint");
s(T, d, r0, "…", "\\textellipsis");
s(o, d, r0, "…", "\\mathellipsis");
s(T, d, r0, "…", "\\ldots", !0);
s(o, d, r0, "…", "\\ldots", !0);
s(o, d, r0, "⋯", "\\@cdots", !0);
s(o, d, r0, "⋱", "\\ddots", !0);
s(o, d, k, "⋮", "\\varvdots");
s(T, d, k, "⋮", "\\varvdots");
s(o, d, Y, "ˊ", "\\acute");
s(o, d, Y, "ˋ", "\\grave");
s(o, d, Y, "¨", "\\ddot");
s(o, d, Y, "~", "\\tilde");
s(o, d, Y, "ˉ", "\\bar");
s(o, d, Y, "˘", "\\breve");
s(o, d, Y, "ˇ", "\\check");
s(o, d, Y, "^", "\\hat");
s(o, d, Y, "⃗", "\\vec");
s(o, d, Y, "˙", "\\dot");
s(o, d, Y, "˚", "\\mathring");
s(o, d, O, "", "\\@imath");
s(o, d, O, "", "\\@jmath");
s(o, d, k, "ı", "ı");
s(o, d, k, "ȷ", "ȷ");
s(T, d, k, "ı", "\\i", !0);
s(T, d, k, "ȷ", "\\j", !0);
s(T, d, k, "ß", "\\ss", !0);
s(T, d, k, "æ", "\\ae", !0);
s(T, d, k, "œ", "\\oe", !0);
s(T, d, k, "ø", "\\o", !0);
s(T, d, k, "Æ", "\\AE", !0);
s(T, d, k, "Œ", "\\OE", !0);
s(T, d, k, "Ø", "\\O", !0);
s(T, d, Y, "ˊ", "\\'");
s(T, d, Y, "ˋ", "\\`");
s(T, d, Y, "ˆ", "\\^");
s(T, d, Y, "˜", "\\~");
s(T, d, Y, "ˉ", "\\=");
s(T, d, Y, "˘", "\\u");
s(T, d, Y, "˙", "\\.");
s(T, d, Y, "¸", "\\c");
s(T, d, Y, "˚", "\\r");
s(T, d, Y, "ˇ", "\\v");
s(T, d, Y, "¨", '\\"');
s(T, d, Y, "˝", "\\H");
s(T, d, Y, "◯", "\\textcircled");
var zr = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
s(T, d, k, "–", "--", !0);
s(T, d, k, "–", "\\textendash");
s(T, d, k, "—", "---", !0);
s(T, d, k, "—", "\\textemdash");
s(T, d, k, "‘", "`", !0);
s(T, d, k, "‘", "\\textquoteleft");
s(T, d, k, "’", "'", !0);
s(T, d, k, "’", "\\textquoteright");
s(T, d, k, "“", "``", !0);
s(T, d, k, "“", "\\textquotedblleft");
s(T, d, k, "”", "''", !0);
s(T, d, k, "”", "\\textquotedblright");
s(o, d, k, "°", "\\degree", !0);
s(T, d, k, "°", "\\degree");
s(T, d, k, "°", "\\textdegree", !0);
s(o, d, k, "£", "\\pounds");
s(o, d, k, "£", "\\mathsterling", !0);
s(T, d, k, "£", "\\pounds");
s(T, d, k, "£", "\\textsterling", !0);
s(o, b, k, "✠", "\\maltese");
s(T, b, k, "✠", "\\maltese");
var Wt = '0123456789/@."';
for (var Y0 = 0; Y0 < Wt.length; Y0++) {
  var Ut = Wt.charAt(Y0);
  s(o, d, k, Ut, Ut);
}
var Yt = '0123456789!@*()-=+";:?/.,';
for (var j0 = 0; j0 < Yt.length; j0++) {
  var jt = Yt.charAt(j0);
  s(T, d, k, jt, jt);
}
var D0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Z0 = 0; Z0 < D0.length; Z0++) {
  var y0 = D0.charAt(Z0);
  s(o, d, O, y0, y0), s(T, d, k, y0, y0);
}
s(o, b, k, "C", "ℂ");
s(T, b, k, "C", "ℂ");
s(o, b, k, "H", "ℍ");
s(T, b, k, "H", "ℍ");
s(o, b, k, "N", "ℕ");
s(T, b, k, "N", "ℕ");
s(o, b, k, "P", "ℙ");
s(T, b, k, "P", "ℙ");
s(o, b, k, "Q", "ℚ");
s(T, b, k, "Q", "ℚ");
s(o, b, k, "R", "ℝ");
s(T, b, k, "R", "ℝ");
s(o, b, k, "Z", "ℤ");
s(T, b, k, "Z", "ℤ");
s(o, d, O, "h", "ℎ");
s(T, d, O, "h", "ℎ");
var R = "";
for (var ne = 0; ne < D0.length; ne++) {
  var J = D0.charAt(ne);
  R = String.fromCharCode(55349, 56320 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56372 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56424 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56580 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56684 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56736 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56788 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56840 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56944 + ne), s(o, d, O, J, R), s(T, d, k, J, R), ne < 26 && (R = String.fromCharCode(55349, 56632 + ne), s(o, d, O, J, R), s(T, d, k, J, R), R = String.fromCharCode(55349, 56476 + ne), s(o, d, O, J, R), s(T, d, k, J, R));
}
R = "𝕜";
s(o, d, O, "k", R);
s(T, d, k, "k", R);
for (var Xe = 0; Xe < 10; Xe++) {
  var He = Xe.toString();
  R = String.fromCharCode(55349, 57294 + Xe), s(o, d, O, He, R), s(T, d, k, He, R), R = String.fromCharCode(55349, 57314 + Xe), s(o, d, O, He, R), s(T, d, k, He, R), R = String.fromCharCode(55349, 57324 + Xe), s(o, d, O, He, R), s(T, d, k, He, R), R = String.fromCharCode(55349, 57334 + Xe), s(o, d, O, He, R), s(T, d, k, He, R);
}
var ht = "ÐÞþ";
for (var J0 = 0; J0 < ht.length; J0++) {
  var w0 = ht.charAt(J0);
  s(o, d, O, w0, w0), s(T, d, k, w0, w0);
}
var x0 = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], Zt = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], Tn = function(e, t) {
  var r = e.charCodeAt(0), n = e.charCodeAt(1), l = (r - 55296) * 1024 + (n - 56320) + 65536, c = t === "math" ? 0 : 1;
  if (119808 <= l && l < 120484) {
    var h = Math.floor((l - 119808) / 26);
    return [x0[h][2], x0[h][c]];
  } else if (120782 <= l && l <= 120831) {
    var m = Math.floor((l - 120782) / 10);
    return [Zt[m][2], Zt[m][c]];
  } else {
    if (l === 120485 || l === 120486)
      return [x0[0][2], x0[0][c]];
    if (120486 < l && l < 120782)
      return ["", ""];
    throw new B("Unsupported character: " + e);
  }
}, O0 = function(e, t, r) {
  return U[r][e] && U[r][e].replace && (e = U[r][e].replace), {
    value: e,
    metrics: yt(e, t, r)
  };
}, ye = function(e, t, r, n, l) {
  var c = O0(e, t, r), h = c.metrics;
  e = c.value;
  var m;
  if (h) {
    var v = h.italic;
    (r === "text" || n && n.font === "mathit") && (v = 0), m = new ge(e, h.height, h.depth, v, h.skew, h.width, l);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + r + "'")), m = new ge(e, 0, 0, 0, 0, 0, l);
  if (n) {
    m.maxFontSize = n.sizeMultiplier, n.style.isTight() && m.classes.push("mtight");
    var w = n.getColor();
    w && (m.style.color = w);
  }
  return m;
}, Mn = function(e, t, r, n) {
  return n === void 0 && (n = []), r.font === "boldsymbol" && O0(e, "Main-Bold", t).metrics ? ye(e, "Main-Bold", t, r, n.concat(["mathbf"])) : e === "\\" || U[t][e].font === "main" ? ye(e, "Main-Regular", t, r, n) : ye(e, "AMS-Regular", t, r, n.concat(["amsrm"]));
}, zn = function(e, t, r, n, l) {
  return l !== "textord" && O0(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Bn = function(e, t, r) {
  var n = e.mode, l = e.text, c = ["mord"], h = n === "math" || n === "text" && t.font, m = h ? t.font : t.fontFamily, v = "", w = "";
  if (l.charCodeAt(0) === 55349 && ([v, w] = Tn(l, n)), v.length > 0)
    return ye(l, v, n, t, c.concat(w));
  if (m) {
    var i, u;
    if (m === "boldsymbol") {
      var f = zn(l, n, t, c, r);
      i = f.fontName, u = [f.fontClass];
    } else h ? (i = Cr[m].fontName, u = [m]) : (i = S0(m, t.fontWeight, t.fontShape), u = [m, t.fontWeight, t.fontShape]);
    if (O0(l, i, n).metrics)
      return ye(l, i, n, t, c.concat(u));
    if (zr.hasOwnProperty(l) && i.slice(0, 10) === "Typewriter") {
      for (var g = [], S = 0; S < l.length; S++)
        g.push(ye(l[S], i, n, t, c.concat(u)));
      return Dr(g);
    }
  }
  if (r === "mathord")
    return ye(l, "Math-Italic", n, t, c.concat(["mathnormal"]));
  if (r === "textord") {
    var _ = U[n][l] && U[n][l].font;
    if (_ === "ams") {
      var x = S0("amsrm", t.fontWeight, t.fontShape);
      return ye(l, x, n, t, c.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (_ === "main" || !_) {
      var M = S0("textrm", t.fontWeight, t.fontShape);
      return ye(l, M, n, t, c.concat(t.fontWeight, t.fontShape));
    } else {
      var C = S0(_, t.fontWeight, t.fontShape);
      return ye(l, C, n, t, c.concat(C, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + r + " in makeOrd");
}, Dn = (a, e) => {
  if (Pe(a.classes) !== Pe(e.classes) || a.skew !== e.skew || a.maxFontSize !== e.maxFontSize)
    return !1;
  if (a.classes.length === 1) {
    var t = a.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var r in a.style)
    if (a.style.hasOwnProperty(r) && a.style[r] !== e.style[r])
      return !1;
  for (var n in e.style)
    if (e.style.hasOwnProperty(n) && a.style[n] !== e.style[n])
      return !1;
  return !0;
}, Cn = (a) => {
  for (var e = 0; e < a.length - 1; e++) {
    var t = a[e], r = a[e + 1];
    t instanceof ge && r instanceof ge && Dn(t, r) && (t.text += r.text, t.height = Math.max(t.height, r.height), t.depth = Math.max(t.depth, r.depth), t.italic = r.italic, a.splice(e + 1, 1), e--);
  }
  return a;
}, xt = function(e) {
  for (var t = 0, r = 0, n = 0, l = 0; l < e.children.length; l++) {
    var c = e.children[l];
    c.height > t && (t = c.height), c.depth > r && (r = c.depth), c.maxFontSize > n && (n = c.maxFontSize);
  }
  e.height = t, e.depth = r, e.maxFontSize = n;
}, se = function(e, t, r, n) {
  var l = new d0(e, t, r, n);
  return xt(l), l;
}, Br = (a, e, t, r) => new d0(a, e, t, r), In = function(e, t, r) {
  var n = se([e], [], t);
  return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = D(n.height), n.maxFontSize = 1, n;
}, qn = function(e, t, r, n) {
  var l = new wt(e, t, r, n);
  return xt(l), l;
}, Dr = function(e) {
  var t = new h0(e);
  return xt(t), t;
}, Nn = function(e, t) {
  return e instanceof h0 ? se([], [e], t) : e;
}, On = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, l = n, c = 1; c < t.length; c++) {
      var h = -t[c].shift - l - t[c].elem.depth, m = h - (t[c - 1].elem.height + t[c - 1].elem.depth);
      l = l + h, r.push({
        type: "kern",
        size: m
      }), r.push(t[c]);
    }
    return {
      children: r,
      depth: n
    };
  }
  var v;
  if (e.positionType === "top") {
    for (var w = e.positionData, i = 0; i < e.children.length; i++) {
      var u = e.children[i];
      w -= u.type === "kern" ? u.size : u.elem.height + u.elem.depth;
    }
    v = w;
  } else if (e.positionType === "bottom")
    v = -e.positionData;
  else {
    var f = e.children[0];
    if (f.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      v = -f.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      v = -f.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: v
  };
}, En = function(e, t) {
  for (var {
    children: r,
    depth: n
  } = On(e), l = 0, c = 0; c < r.length; c++) {
    var h = r[c];
    if (h.type === "elem") {
      var m = h.elem;
      l = Math.max(l, m.maxFontSize, m.height);
    }
  }
  l += 2;
  var v = se(["pstrut"], []);
  v.style.height = D(l);
  for (var w = [], i = n, u = n, f = n, g = 0; g < r.length; g++) {
    var S = r[g];
    if (S.type === "kern")
      f += S.size;
    else {
      var _ = S.elem, x = S.wrapperClasses || [], M = S.wrapperStyle || {}, C = se(x, [v, _], void 0, M);
      C.style.top = D(-l - f - _.depth), S.marginLeft && (C.style.marginLeft = S.marginLeft), S.marginRight && (C.style.marginRight = S.marginRight), w.push(C), f += _.height + _.depth;
    }
    i = Math.min(i, f), u = Math.max(u, f);
  }
  var L = se(["vlist"], w);
  L.style.height = D(u);
  var H;
  if (i < 0) {
    var P = se([], []), G = se(["vlist"], [P]);
    G.style.height = D(-i);
    var X = se(["vlist-s"], [new ge("​")]);
    H = [se(["vlist-r"], [L, X]), se(["vlist-r"], [G])];
  } else
    H = [se(["vlist-r"], [L])];
  var N = se(["vlist-t"], H);
  return H.length === 2 && N.classes.push("vlist-t2"), N.height = u, N.depth = -i, N;
}, Ln = (a, e) => {
  var t = se(["mspace"], [], e), r = Z(a, e);
  return t.style.marginRight = D(r), t;
}, S0 = function(e, t, r) {
  var n = "";
  switch (e) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = e;
  }
  var l;
  return t === "textbf" && r === "textit" ? l = "BoldItalic" : t === "textbf" ? l = "Bold" : t === "textit" ? l = "Italic" : l = "Regular", n + "-" + l;
}, Cr = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Ir = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Rn = function(e, t) {
  var [r, n, l] = Ir[e], c = new Ge(r), h = new Ce([c], {
    width: D(n),
    height: D(l),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + D(n),
    viewBox: "0 0 " + 1e3 * n + " " + 1e3 * l,
    preserveAspectRatio: "xMinYMin"
  }), m = Br(["overlay"], [h], t);
  return m.height = l, m.style.height = D(l), m.style.width = D(n), m;
}, A = {
  fontMap: Cr,
  makeSymbol: ye,
  mathsym: Mn,
  makeSpan: se,
  makeSvgSpan: Br,
  makeLineSpan: In,
  makeAnchor: qn,
  makeFragment: Dr,
  wrapFragment: Nn,
  makeVList: En,
  makeOrd: Bn,
  makeGlue: Ln,
  staticSvg: Rn,
  svgData: Ir,
  tryCombineChars: Cn
}, j = {
  number: 3,
  unit: "mu"
}, We = {
  number: 4,
  unit: "mu"
}, Me = {
  number: 5,
  unit: "mu"
}, Hn = {
  mord: {
    mop: j,
    mbin: We,
    mrel: Me,
    minner: j
  },
  mop: {
    mord: j,
    mop: j,
    mrel: Me,
    minner: j
  },
  mbin: {
    mord: We,
    mop: We,
    mopen: We,
    minner: We
  },
  mrel: {
    mord: Me,
    mop: Me,
    mopen: Me,
    minner: Me
  },
  mopen: {},
  mclose: {
    mop: j,
    mbin: We,
    mrel: Me,
    minner: j
  },
  mpunct: {
    mord: j,
    mop: j,
    mrel: Me,
    mopen: j,
    mclose: j,
    mpunct: j,
    minner: j
  },
  minner: {
    mord: j,
    mop: j,
    mbin: We,
    mrel: Me,
    mopen: j,
    mpunct: j,
    minner: j
  }
}, Fn = {
  mord: {
    mop: j
  },
  mop: {
    mord: j,
    mop: j
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: j
  },
  mpunct: {},
  minner: {
    mop: j
  }
}, qr = {}, C0 = {}, I0 = {};
function I(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: l,
    mathmlBuilder: c
  } = a, h = {
    type: e,
    numArgs: r.numArgs,
    argTypes: r.argTypes,
    allowedInArgument: !!r.allowedInArgument,
    allowedInText: !!r.allowedInText,
    allowedInMath: r.allowedInMath === void 0 ? !0 : r.allowedInMath,
    numOptionalArgs: r.numOptionalArgs || 0,
    infix: !!r.infix,
    primitive: !!r.primitive,
    handler: n
  }, m = 0; m < t.length; ++m)
    qr[t[m]] = h;
  e && (l && (C0[e] = l), c && (I0[e] = c));
}
function Ue(a) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: r
  } = a;
  I({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: r
  });
}
var q0 = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, ee = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Ie = A.makeSpan, Pn = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Gn = ["rightmost", "mrel", "mclose", "mpunct"], Vn = {
  display: E.DISPLAY,
  text: E.TEXT,
  script: E.SCRIPT,
  scriptscript: E.SCRIPTSCRIPT
}, $n = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, re = function(e, t, r, n) {
  n === void 0 && (n = [null, null]);
  for (var l = [], c = 0; c < e.length; c++) {
    var h = V(e[c], t);
    if (h instanceof h0) {
      var m = h.children;
      l.push(...m);
    } else
      l.push(h);
  }
  if (A.tryCombineChars(l), !r)
    return l;
  var v = t;
  if (e.length === 1) {
    var w = e[0];
    w.type === "sizing" ? v = t.havingSize(w.size) : w.type === "styling" && (v = t.havingStyle(Vn[w.style]));
  }
  var i = Ie([n[0] || "leftmost"], [], t), u = Ie([n[1] || "rightmost"], [], t), f = r === "root";
  return Jt(l, (g, S) => {
    var _ = S.classes[0], x = g.classes[0];
    _ === "mbin" && Gn.includes(x) ? S.classes[0] = "mord" : x === "mbin" && Pn.includes(_) && (g.classes[0] = "mord");
  }, {
    node: i
  }, u, f), Jt(l, (g, S) => {
    var _ = dt(S), x = dt(g), M = _ && x ? g.hasClass("mtight") ? Fn[_][x] : Hn[_][x] : null;
    if (M)
      return A.makeGlue(M, v);
  }, {
    node: i
  }, u, f), l;
}, Jt = function a(e, t, r, n, l) {
  n && e.push(n);
  for (var c = 0; c < e.length; c++) {
    var h = e[c], m = Nr(h);
    if (m) {
      a(m.children, t, r, null, l);
      continue;
    }
    var v = !h.hasClass("mspace");
    if (v) {
      var w = t(h, r.node);
      w && (r.insertAfter ? r.insertAfter(w) : (e.unshift(w), c++));
    }
    v ? r.node = h : l && h.hasClass("newline") && (r.node = Ie(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((i) => (u) => {
      e.splice(i + 1, 0, u), c++;
    })(c);
  }
  n && e.pop();
}, Nr = function(e) {
  return e instanceof h0 || e instanceof wt || e instanceof d0 && e.hasClass("enclosing") ? e : null;
}, Xn = function a(e, t) {
  var r = Nr(e);
  if (r) {
    var n = r.children;
    if (n.length) {
      if (t === "right")
        return a(n[n.length - 1], "right");
      if (t === "left")
        return a(n[0], "left");
    }
  }
  return e;
}, dt = function(e, t) {
  return e ? (t && (e = Xn(e, t)), $n[e.classes[0]] || null) : null;
}, c0 = function(e, t) {
  var r = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Ie(t.concat(r));
}, V = function(e, t, r) {
  if (!e)
    return Ie();
  if (C0[e.type]) {
    var n = C0[e.type](e, t);
    if (r && t.size !== r.size) {
      n = Ie(t.sizingClasses(r), [n], t);
      var l = t.sizeMultiplier / r.sizeMultiplier;
      n.height *= l, n.depth *= l;
    }
    return n;
  } else
    throw new B("Got group of unknown type: '" + e.type + "'");
};
function k0(a, e) {
  var t = Ie(["base"], a, e), r = Ie(["strut"]);
  return r.style.height = D(t.height + t.depth), t.depth && (r.style.verticalAlign = D(-t.depth)), t.children.unshift(r), t;
}
function mt(a, e) {
  var t = null;
  a.length === 1 && a[0].type === "tag" && (t = a[0].tag, a = a[0].body);
  var r = re(a, e, "root"), n;
  r.length === 2 && r[1].hasClass("tag") && (n = r.pop());
  for (var l = [], c = [], h = 0; h < r.length; h++)
    if (c.push(r[h]), r[h].hasClass("mbin") || r[h].hasClass("mrel") || r[h].hasClass("allowbreak")) {
      for (var m = !1; h < r.length - 1 && r[h + 1].hasClass("mspace") && !r[h + 1].hasClass("newline"); )
        h++, c.push(r[h]), r[h].hasClass("nobreak") && (m = !0);
      m || (l.push(k0(c, e)), c = []);
    } else r[h].hasClass("newline") && (c.pop(), c.length > 0 && (l.push(k0(c, e)), c = []), l.push(r[h]));
  c.length > 0 && l.push(k0(c, e));
  var v;
  t ? (v = k0(re(t, e, !0)), v.classes = ["tag"], l.push(v)) : n && l.push(n);
  var w = Ie(["katex-html"], l);
  if (w.setAttribute("aria-hidden", "true"), v) {
    var i = v.children[0];
    i.style.height = D(w.height + w.depth), w.depth && (i.style.verticalAlign = D(-w.depth));
  }
  return w;
}
function Or(a) {
  return new h0(a);
}
class he {
  constructor(e, t, r) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = Pe(this.classes));
    for (var r = 0; r < this.children.length; r++)
      if (this.children[r] instanceof ke && this.children[r + 1] instanceof ke) {
        for (var n = this.children[r].toText() + this.children[++r].toText(); this.children[r + 1] instanceof ke; )
          n += this.children[++r].toText();
        e.appendChild(new ke(n).toNode());
      } else
        e.appendChild(this.children[r].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += $.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + $.escape(Pe(this.classes)) + '"'), e += ">";
    for (var r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class ke {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return $.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Wn {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", D(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + D(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var z = {
  MathNode: he,
  TextNode: ke,
  SpaceNode: Wn,
  newDocumentFragment: Or
}, be = function(e, t, r) {
  return U[t][e] && U[t][e].replace && e.charCodeAt(0) !== 55349 && !(zr.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = U[t][e].replace), new z.TextNode(e);
}, St = function(e) {
  return e.length === 1 ? e[0] : new z.MathNode("mrow", e);
}, kt = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var r = t.font;
  if (!r || r === "mathnormal")
    return null;
  var n = e.mode;
  if (r === "mathit")
    return "italic";
  if (r === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (r === "mathbf")
    return "bold";
  if (r === "mathbb")
    return "double-struck";
  if (r === "mathsfit")
    return "sans-serif-italic";
  if (r === "mathfrak")
    return "fraktur";
  if (r === "mathscr" || r === "mathcal")
    return "script";
  if (r === "mathsf")
    return "sans-serif";
  if (r === "mathtt")
    return "monospace";
  var l = e.text;
  if (["\\imath", "\\jmath"].includes(l))
    return null;
  U[n][l] && U[n][l].replace && (l = U[n][l].replace);
  var c = A.fontMap[r].fontName;
  return yt(l, c, n) ? A.fontMap[r].variant : null;
};
function K0(a) {
  if (!a)
    return !1;
  if (a.type === "mi" && a.children.length === 1) {
    var e = a.children[0];
    return e instanceof ke && e.text === ".";
  } else if (a.type === "mo" && a.children.length === 1 && a.getAttribute("separator") === "true" && a.getAttribute("lspace") === "0em" && a.getAttribute("rspace") === "0em") {
    var t = a.children[0];
    return t instanceof ke && t.text === ",";
  } else
    return !1;
}
var ue = function(e, t, r) {
  if (e.length === 1) {
    var n = W(e[0], t);
    return r && n instanceof he && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var l = [], c, h = 0; h < e.length; h++) {
    var m = W(e[h], t);
    if (m instanceof he && c instanceof he) {
      if (m.type === "mtext" && c.type === "mtext" && m.getAttribute("mathvariant") === c.getAttribute("mathvariant")) {
        c.children.push(...m.children);
        continue;
      } else if (m.type === "mn" && c.type === "mn") {
        c.children.push(...m.children);
        continue;
      } else if (K0(m) && c.type === "mn") {
        c.children.push(...m.children);
        continue;
      } else if (m.type === "mn" && K0(c))
        m.children = [...c.children, ...m.children], l.pop();
      else if ((m.type === "msup" || m.type === "msub") && m.children.length >= 1 && (c.type === "mn" || K0(c))) {
        var v = m.children[0];
        v instanceof he && v.type === "mn" && (v.children = [...c.children, ...v.children], l.pop());
      } else if (c.type === "mi" && c.children.length === 1) {
        var w = c.children[0];
        if (w instanceof ke && w.text === "̸" && (m.type === "mo" || m.type === "mi" || m.type === "mn")) {
          var i = m.children[0];
          i instanceof ke && i.text.length > 0 && (i.text = i.text.slice(0, 1) + "̸" + i.text.slice(1), l.pop());
        }
      }
    }
    l.push(m), c = m;
  }
  return l;
}, Ve = function(e, t, r) {
  return St(ue(e, t, r));
}, W = function(e, t) {
  if (!e)
    return new z.MathNode("mrow");
  if (I0[e.type]) {
    var r = I0[e.type](e, t);
    return r;
  } else
    throw new B("Got group of unknown type: '" + e.type + "'");
};
function Kt(a, e, t, r, n) {
  var l = ue(a, t), c;
  l.length === 1 && l[0] instanceof he && ["mrow", "mtable"].includes(l[0].type) ? c = l[0] : c = new z.MathNode("mrow", l);
  var h = new z.MathNode("annotation", [new z.TextNode(e)]);
  h.setAttribute("encoding", "application/x-tex");
  var m = new z.MathNode("semantics", [c, h]), v = new z.MathNode("math", [m]);
  v.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && v.setAttribute("display", "block");
  var w = n ? "katex" : "katex-mathml";
  return A.makeSpan([w], [v]);
}
var Er = function(e) {
  return new ze({
    style: e.displayMode ? E.DISPLAY : E.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Lr = function(e, t) {
  if (t.displayMode) {
    var r = ["katex-display"];
    t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = A.makeSpan(r, [e]);
  }
  return e;
}, Un = function(e, t, r) {
  var n = Er(r), l;
  if (r.output === "mathml")
    return Kt(e, t, n, r.displayMode, !0);
  if (r.output === "html") {
    var c = mt(e, n);
    l = A.makeSpan(["katex"], [c]);
  } else {
    var h = Kt(e, t, n, r.displayMode, !1), m = mt(e, n);
    l = A.makeSpan(["katex"], [h, m]);
  }
  return Lr(l, r);
}, Yn = function(e, t, r) {
  var n = Er(r), l = mt(e, n), c = A.makeSpan(["katex"], [l]);
  return Lr(c, r);
}, jn = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, Zn = function(e) {
  var t = new z.MathNode("mo", [new z.TextNode(jn[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Jn = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Kn = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Qn = function(e, t) {
  function r() {
    var h = 4e5, m = e.label.slice(1);
    if (["widehat", "widecheck", "widetilde", "utilde"].includes(m)) {
      var v = e, w = Kn(v.base), i, u, f;
      if (w > 5)
        m === "widehat" || m === "widecheck" ? (i = 420, h = 2364, f = 0.42, u = m + "4") : (i = 312, h = 2340, f = 0.34, u = "tilde4");
      else {
        var g = [1, 1, 2, 2, 3, 3][w];
        m === "widehat" || m === "widecheck" ? (h = [0, 1062, 2364, 2364, 2364][g], i = [0, 239, 300, 360, 420][g], f = [0, 0.24, 0.3, 0.3, 0.36, 0.42][g], u = m + g) : (h = [0, 600, 1033, 2339, 2340][g], i = [0, 260, 286, 306, 312][g], f = [0, 0.26, 0.286, 0.3, 0.306, 0.34][g], u = "tilde" + g);
      }
      var S = new Ge(u), _ = new Ce([S], {
        width: "100%",
        height: D(f),
        viewBox: "0 0 " + h + " " + i,
        preserveAspectRatio: "none"
      });
      return {
        span: A.makeSvgSpan([], [_], t),
        minWidth: 0,
        height: f
      };
    } else {
      var x = [], M = Jn[m], [C, L, H] = M, P = H / 1e3, G = C.length, X, N;
      if (G === 1) {
        var fe = M[3];
        X = ["hide-tail"], N = [fe];
      } else if (G === 2)
        X = ["halfarrow-left", "halfarrow-right"], N = ["xMinYMin", "xMaxYMin"];
      else if (G === 3)
        X = ["brace-left", "brace-center", "brace-right"], N = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + G + " children.");
      for (var ae = 0; ae < G; ae++) {
        var K = new Ge(C[ae]), we = new Ce([K], {
          width: "400em",
          height: D(P),
          viewBox: "0 0 " + h + " " + H,
          preserveAspectRatio: N[ae] + " slice"
        }), Q = A.makeSvgSpan([X[ae]], [we], t);
        if (G === 1)
          return {
            span: Q,
            minWidth: L,
            height: P
          };
        Q.style.height = D(P), x.push(Q);
      }
      return {
        span: A.makeSpan(["stretchy"], x, t),
        minWidth: L,
        height: P
      };
    }
  }
  var {
    span: n,
    minWidth: l,
    height: c
  } = r();
  return n.height = c, n.style.height = D(c), l > 0 && (n.style.minWidth = D(l)), n;
}, ei = function(e, t, r, n, l) {
  var c, h = e.height + e.depth + r + n;
  if (/fbox|color|angl/.test(t)) {
    if (c = A.makeSpan(["stretchy", t], [], l), t === "fbox") {
      var m = l.color && l.getColor();
      m && (c.style.borderColor = m);
    }
  } else {
    var v = [];
    /^[bx]cancel$/.test(t) && v.push(new ct({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && v.push(new ct({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var w = new Ce(v, {
      width: "100%",
      height: D(h)
    });
    c = A.makeSvgSpan([], [w], l);
  }
  return c.height = h, c.style.height = D(h), c;
}, qe = {
  encloseSpan: ei,
  mathMLnode: Zn,
  svgSpan: Qn
};
function F(a, e) {
  if (!a || a.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (a ? "node of type " + a.type : String(a)));
  return a;
}
function _t(a) {
  var e = E0(a);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (a ? "node of type " + a.type : String(a)));
  return e;
}
function E0(a) {
  return a && (a.type === "atom" || An.hasOwnProperty(a.type)) ? a : null;
}
var At = (a, e) => {
  var t, r, n;
  a && a.type === "supsub" ? (r = F(a.base, "accent"), t = r.base, a.base = t, n = kn(V(a, e)), a.base = r) : (r = F(a, "accent"), t = r.base);
  var l = V(t, e.havingCrampedStyle()), c = r.isShifty && $.isCharacterBox(t), h = 0;
  if (c) {
    var m = $.getBaseElem(t), v = V(m, e.havingCrampedStyle());
    h = Xt(v).skew;
  }
  var w = r.label === "\\c", i = w ? l.height + l.depth : Math.min(l.height, e.fontMetrics().xHeight), u;
  if (r.isStretchy)
    u = qe.svgSpan(r, e), u = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: l
      }, {
        type: "elem",
        elem: u,
        wrapperClasses: ["svg-align"],
        wrapperStyle: h > 0 ? {
          width: "calc(100% - " + D(2 * h) + ")",
          marginLeft: D(2 * h)
        } : void 0
      }]
    }, e);
  else {
    var f, g;
    r.label === "\\vec" ? (f = A.staticSvg("vec", e), g = A.svgData.vec[1]) : (f = A.makeOrd({
      mode: r.mode,
      text: r.label
    }, e, "textord"), f = Xt(f), f.italic = 0, g = f.width, w && (i += f.depth)), u = A.makeSpan(["accent-body"], [f]);
    var S = r.label === "\\textcircled";
    S && (u.classes.push("accent-full"), i = l.height);
    var _ = h;
    S || (_ -= g / 2), u.style.left = D(_), r.label === "\\textcircled" && (u.style.top = ".2em"), u = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: l
      }, {
        type: "kern",
        size: -i
      }, {
        type: "elem",
        elem: u
      }]
    }, e);
  }
  var x = A.makeSpan(["mord", "accent"], [u], e);
  return n ? (n.children[0] = x, n.height = Math.max(x.height, n.height), n.classes[0] = "mord", n) : x;
}, Rr = (a, e) => {
  var t = a.isStretchy ? qe.mathMLnode(a.label) : new z.MathNode("mo", [be(a.label, a.mode)]), r = new z.MathNode("mover", [W(a.base, e), t]);
  return r.setAttribute("accent", "true"), r;
}, ti = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((a) => "\\" + a).join("|"));
I({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var t = q0(e[0]), r = !ti.test(a.funcName), n = !r || a.funcName === "\\widehat" || a.funcName === "\\widetilde" || a.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: a.parser.mode,
      label: a.funcName,
      isStretchy: r,
      isShifty: n,
      base: t
    };
  },
  htmlBuilder: At,
  mathmlBuilder: Rr
});
I({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = e[0], r = a.parser.mode;
    return r === "math" && (a.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + a.funcName + " works only in text mode"), r = "text"), {
      type: "accent",
      mode: r,
      label: a.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: At,
  mathmlBuilder: Rr
});
I({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: r,
      base: n
    };
  },
  htmlBuilder: (a, e) => {
    var t = V(a.base, e), r = qe.svgSpan(a, e), n = a.label === "\\utilde" ? 0.12 : 0, l = A.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return A.makeSpan(["mord", "accentunder"], [l], e);
  },
  mathmlBuilder: (a, e) => {
    var t = qe.mathMLnode(a.label), r = new z.MathNode("munder", [W(a.base, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
var _0 = (a) => {
  var e = new z.MathNode("mpadded", a ? [a] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
I({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a;
    return {
      type: "xArrow",
      mode: r.mode,
      label: n,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(a, e) {
    var t = e.style, r = e.havingStyle(t.sup()), n = A.wrapFragment(V(a.body, r, e), e), l = a.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(l + "-arrow-pad");
    var c;
    a.below && (r = e.havingStyle(t.sub()), c = A.wrapFragment(V(a.below, r, e), e), c.classes.push(l + "-arrow-pad"));
    var h = qe.svgSpan(a, e), m = -e.fontMetrics().axisHeight + 0.5 * h.height, v = -e.fontMetrics().axisHeight - 0.5 * h.height - 0.111;
    (n.depth > 0.25 || a.label === "\\xleftequilibrium") && (v -= n.depth);
    var w;
    if (c) {
      var i = -e.fontMetrics().axisHeight + c.height + 0.5 * h.height + 0.111;
      w = A.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: v
        }, {
          type: "elem",
          elem: h,
          shift: m
        }, {
          type: "elem",
          elem: c,
          shift: i
        }]
      }, e);
    } else
      w = A.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: v
        }, {
          type: "elem",
          elem: h,
          shift: m
        }]
      }, e);
    return w.children[0].children[0].children[1].classes.push("svg-align"), A.makeSpan(["mrel", "x-arrow"], [w], e);
  },
  mathmlBuilder(a, e) {
    var t = qe.mathMLnode(a.label);
    t.setAttribute("minsize", a.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var r;
    if (a.body) {
      var n = _0(W(a.body, e));
      if (a.below) {
        var l = _0(W(a.below, e));
        r = new z.MathNode("munderover", [t, l, n]);
      } else
        r = new z.MathNode("mover", [t, n]);
    } else if (a.below) {
      var c = _0(W(a.below, e));
      r = new z.MathNode("munder", [t, c]);
    } else
      r = _0(), r = new z.MathNode("mover", [t, r]);
    return r;
  }
});
var ri = A.makeSpan;
function Hr(a, e) {
  var t = re(a.body, e, !0);
  return ri([a.mclass], t, e);
}
function Fr(a, e) {
  var t, r = ue(a.body, e);
  return a.mclass === "minner" ? t = new z.MathNode("mpadded", r) : a.mclass === "mord" ? a.isCharacterBox ? (t = r[0], t.type = "mi") : t = new z.MathNode("mi", r) : (a.isCharacterBox ? (t = r[0], t.type = "mo") : t = new z.MathNode("mo", r), a.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : a.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : a.mclass === "mopen" || a.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : a.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
I({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + r.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: ee(n),
      isCharacterBox: $.isCharacterBox(n)
    };
  },
  htmlBuilder: Hr,
  mathmlBuilder: Fr
});
var L0 = (a) => {
  var e = a.type === "ordgroup" && a.body.length ? a.body[0] : a;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
I({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: L0(e[0]),
      body: ee(e[1]),
      isCharacterBox: $.isCharacterBox(e[1])
    };
  }
});
I({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[1], l = e[0], c;
    r !== "\\stackrel" ? c = L0(n) : c = "mrel";
    var h = {
      type: "op",
      mode: n.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: r !== "\\stackrel",
      body: ee(n)
    }, m = {
      type: "supsub",
      mode: l.mode,
      base: h,
      sup: r === "\\underset" ? null : l,
      sub: r === "\\underset" ? l : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: c,
      body: [m],
      isCharacterBox: $.isCharacterBox(m)
    };
  },
  htmlBuilder: Hr,
  mathmlBuilder: Fr
});
I({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: L0(e[0]),
      body: ee(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e, !0), r = A.makeSpan([a.mclass], t, e);
    return r.style.textShadow = "0.02em 0.01em 0.04px", r;
  },
  mathmlBuilder(a, e) {
    var t = ue(a.body, e), r = new z.MathNode("mstyle", t);
    return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
  }
});
var ai = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Qt = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), er = (a) => a.type === "textord" && a.text === "@", ni = (a, e) => (a.type === "mathord" || a.type === "atom") && a.text === e;
function ii(a, e, t) {
  var r = ai[a];
  switch (r) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(r, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []), l = {
        type: "atom",
        text: r,
        mode: "math",
        family: "rel"
      }, c = t.callFunction("\\Big", [l], []), h = t.callFunction("\\\\cdright", [e[1]], []), m = {
        type: "ordgroup",
        mode: "math",
        body: [n, c, h]
      };
      return t.callFunction("\\\\cdparent", [m], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var v = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [v], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function li(a) {
  var e = [];
  for (a.gullet.beginGroup(), a.gullet.macros.set("\\cr", "\\\\\\relax"), a.gullet.beginGroup(); ; ) {
    e.push(a.parseExpression(!1, "\\\\")), a.gullet.endGroup(), a.gullet.beginGroup();
    var t = a.fetch().text;
    if (t === "&" || t === "\\\\")
      a.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new B("Expected \\\\ or \\cr or \\end", a.nextToken);
  }
  for (var r = [], n = [r], l = 0; l < e.length; l++) {
    for (var c = e[l], h = Qt(), m = 0; m < c.length; m++)
      if (!er(c[m]))
        h.body.push(c[m]);
      else {
        r.push(h), m += 1;
        var v = _t(c[m]).text, w = new Array(2);
        if (w[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, w[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(v) > -1)) if ("<>AV".indexOf(v) > -1)
          for (var i = 0; i < 2; i++) {
            for (var u = !0, f = m + 1; f < c.length; f++) {
              if (ni(c[f], v)) {
                u = !1, m = f;
                break;
              }
              if (er(c[f]))
                throw new B("Missing a " + v + " character to complete a CD arrow.", c[f]);
              w[i].body.push(c[f]);
            }
            if (u)
              throw new B("Missing a " + v + " character to complete a CD arrow.", c[m]);
          }
        else
          throw new B('Expected one of "<>AV=|." after @', c[m]);
        var g = ii(v, w, a), S = {
          type: "styling",
          body: [g],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        r.push(S), h = Qt();
      }
    l % 2 === 0 ? r.push(h) : r.shift(), r = [], n.push(r);
  }
  a.gullet.endGroup(), a.gullet.endGroup();
  var _ = new Array(n[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: _,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(n.length + 1).fill([])
  };
}
I({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: r.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = e.havingStyle(e.style.sup()), r = A.wrapFragment(V(a.label, t, e), e);
    return r.classes.push("cd-label-" + a.side), r.style.bottom = D(0.8 - r.depth), r.height = 0, r.depth = 0, r;
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mrow", [W(a.label, e)]);
    return t = new z.MathNode("mpadded", [t]), t.setAttribute("width", "0"), a.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new z.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
I({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = A.wrapFragment(V(a.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(a, e) {
    return new z.MathNode("mrow", [W(a.fragment, e)]);
  }
});
I({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    for (var {
      parser: t
    } = a, r = F(e[0], "ordgroup"), n = r.body, l = "", c = 0; c < n.length; c++) {
      var h = F(n[c], "textord");
      l += h.text;
    }
    var m = parseInt(l), v;
    if (isNaN(m))
      throw new B("\\@char has non-numeric argument " + l);
    if (m < 0 || m >= 1114111)
      throw new B("\\@char with invalid code point " + l);
    return m <= 65535 ? v = String.fromCharCode(m) : (m -= 65536, v = String.fromCharCode((m >> 10) + 55296, (m & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: v
    };
  }
});
var Pr = (a, e) => {
  var t = re(a.body, e.withColor(a.color), !1);
  return A.makeFragment(t);
}, Gr = (a, e) => {
  var t = ue(a.body, e.withColor(a.color)), r = new z.MathNode("mstyle", t);
  return r.setAttribute("mathcolor", a.color), r;
};
I({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = F(e[0], "color-token").color, n = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: r,
      body: ee(n)
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Gr
});
I({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(a, e) {
    var {
      parser: t,
      breakOnTokenText: r
    } = a, n = F(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", n);
    var l = t.parseExpression(!0, r);
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: l
    };
  },
  htmlBuilder: Pr,
  mathmlBuilder: Gr
});
I({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = r.gullet.future().text === "[" ? r.parseSizeGroup(!0) : null, l = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: r.mode,
      newLine: l,
      size: n && F(n, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(a, e) {
    var t = A.makeSpan(["mspace"], [], e);
    return a.newLine && (t.classes.push("newline"), a.size && (t.style.marginTop = D(Z(a.size, e)))), t;
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mspace");
    return a.newLine && (t.setAttribute("linebreak", "newline"), a.size && t.setAttribute("height", D(Z(a.size, e)))), t;
  }
});
var ft = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Vr = (a) => {
  var e = a.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new B("Expected a control sequence", a);
  return e;
}, si = (a) => {
  var e = a.gullet.popToken();
  return e.text === "=" && (e = a.gullet.popToken(), e.text === " " && (e = a.gullet.popToken())), e;
}, $r = (a, e, t, r) => {
  var n = a.gullet.macros.get(t.text);
  n == null && (t.noexpand = !0, n = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !a.gullet.isExpandable(t.text)
  }), a.gullet.macros.set(e, n, r);
};
I({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    e.consumeSpaces();
    var r = e.fetch();
    if (ft[r.text])
      return (t === "\\global" || t === "\\\\globallong") && (r.text = ft[r.text]), F(e.parseFunction(), "internal");
    throw new B("Invalid token after macro prefix", r);
  }
});
I({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = e.gullet.popToken(), n = r.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(n))
      throw new B("Expected a control sequence", r);
    for (var l = 0, c, h = [[]]; e.gullet.future().text !== "{"; )
      if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          c = e.gullet.future(), h[l].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text))
          throw new B('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== l + 1)
          throw new B('Argument number "' + r.text + '" out of order');
        l++, h.push([]);
      } else {
        if (r.text === "EOF")
          throw new B("Expected a macro definition");
        h[l].push(r.text);
      }
    var {
      tokens: m
    } = e.gullet.consumeArg();
    return c && m.unshift(c), (t === "\\edef" || t === "\\xdef") && (m = e.gullet.expandTokens(m), m.reverse()), e.gullet.macros.set(n, {
      tokens: m,
      numArgs: l,
      delimiters: h
    }, t === ft[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
I({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = Vr(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = si(e);
    return $r(e, r, n, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
I({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = Vr(e.gullet.popToken()), n = e.gullet.popToken(), l = e.gullet.popToken();
    return $r(e, r, l, t === "\\\\globalfuture"), e.gullet.pushToken(l), e.gullet.pushToken(n), {
      type: "internal",
      mode: e.mode
    };
  }
});
var s0 = function(e, t, r) {
  var n = U.math[e] && U.math[e].replace, l = yt(n || e, t, r);
  if (!l)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return l;
}, Tt = function(e, t, r, n) {
  var l = r.havingBaseStyle(t), c = A.makeSpan(n.concat(l.sizingClasses(r)), [e], r), h = l.sizeMultiplier / r.sizeMultiplier;
  return c.height *= h, c.depth *= h, c.maxFontSize = l.sizeMultiplier, c;
}, Xr = function(e, t, r) {
  var n = t.havingBaseStyle(r), l = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = D(l), e.height -= l, e.depth += l;
}, oi = function(e, t, r, n, l, c) {
  var h = A.makeSymbol(e, "Main-Regular", l, n), m = Tt(h, t, n, c);
  return r && Xr(m, n, t), m;
}, ui = function(e, t, r, n) {
  return A.makeSymbol(e, "Size" + t + "-Regular", r, n);
}, Wr = function(e, t, r, n, l, c) {
  var h = ui(e, t, l, n), m = Tt(A.makeSpan(["delimsizing", "size" + t], [h], n), E.TEXT, n, c);
  return r && Xr(m, n, E.TEXT), m;
}, Q0 = function(e, t, r) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var l = A.makeSpan(["delimsizinginner", n], [A.makeSpan([], [A.makeSymbol(e, t, r)])]);
  return {
    type: "elem",
    elem: l
  };
}, et = function(e, t, r) {
  var n = Se["Size4-Regular"][e.charCodeAt(0)] ? Se["Size4-Regular"][e.charCodeAt(0)][4] : Se["Size1-Regular"][e.charCodeAt(0)][4], l = new Ge("inner", fn(e, Math.round(1e3 * t))), c = new Ce([l], {
    width: D(n),
    height: D(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + D(n),
    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), h = A.makeSvgSpan([], [c], r);
  return h.height = t, h.style.height = D(t), h.style.width = D(n), {
    type: "elem",
    elem: h
  };
}, pt = 8e-3, A0 = {
  type: "kern",
  size: -1 * pt
}, ci = ["|", "\\lvert", "\\rvert", "\\vert"], hi = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Ur = function(e, t, r, n, l, c) {
  var h, m, v, w, i = "", u = 0;
  h = v = w = e, m = null;
  var f = "Size1-Regular";
  e === "\\uparrow" ? v = w = "⏐" : e === "\\Uparrow" ? v = w = "‖" : e === "\\downarrow" ? h = v = "⏐" : e === "\\Downarrow" ? h = v = "‖" : e === "\\updownarrow" ? (h = "\\uparrow", v = "⏐", w = "\\downarrow") : e === "\\Updownarrow" ? (h = "\\Uparrow", v = "‖", w = "\\Downarrow") : ci.includes(e) ? (v = "∣", i = "vert", u = 333) : hi.includes(e) ? (v = "∥", i = "doublevert", u = 556) : e === "[" || e === "\\lbrack" ? (h = "⎡", v = "⎢", w = "⎣", f = "Size4-Regular", i = "lbrack", u = 667) : e === "]" || e === "\\rbrack" ? (h = "⎤", v = "⎥", w = "⎦", f = "Size4-Regular", i = "rbrack", u = 667) : e === "\\lfloor" || e === "⌊" ? (v = h = "⎢", w = "⎣", f = "Size4-Regular", i = "lfloor", u = 667) : e === "\\lceil" || e === "⌈" ? (h = "⎡", v = w = "⎢", f = "Size4-Regular", i = "lceil", u = 667) : e === "\\rfloor" || e === "⌋" ? (v = h = "⎥", w = "⎦", f = "Size4-Regular", i = "rfloor", u = 667) : e === "\\rceil" || e === "⌉" ? (h = "⎤", v = w = "⎥", f = "Size4-Regular", i = "rceil", u = 667) : e === "(" || e === "\\lparen" ? (h = "⎛", v = "⎜", w = "⎝", f = "Size4-Regular", i = "lparen", u = 875) : e === ")" || e === "\\rparen" ? (h = "⎞", v = "⎟", w = "⎠", f = "Size4-Regular", i = "rparen", u = 875) : e === "\\{" || e === "\\lbrace" ? (h = "⎧", m = "⎨", w = "⎩", v = "⎪", f = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (h = "⎫", m = "⎬", w = "⎭", v = "⎪", f = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (h = "⎧", w = "⎩", v = "⎪", f = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (h = "⎫", w = "⎭", v = "⎪", f = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (h = "⎧", w = "⎭", v = "⎪", f = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (h = "⎫", w = "⎩", v = "⎪", f = "Size4-Regular");
  var g = s0(h, f, l), S = g.height + g.depth, _ = s0(v, f, l), x = _.height + _.depth, M = s0(w, f, l), C = M.height + M.depth, L = 0, H = 1;
  if (m !== null) {
    var P = s0(m, f, l);
    L = P.height + P.depth, H = 2;
  }
  var G = S + C + L, X = Math.max(0, Math.ceil((t - G) / (H * x))), N = G + X * H * x, fe = n.fontMetrics().axisHeight;
  r && (fe *= n.sizeMultiplier);
  var ae = N / 2 - fe, K = [];
  if (i.length > 0) {
    var we = N - S - C, Q = Math.round(N * 1e3), ce = pn(i, Math.round(we * 1e3)), Oe = new Ge(i, ce), Ye = (u / 1e3).toFixed(3) + "em", je = (Q / 1e3).toFixed(3) + "em", P0 = new Ce([Oe], {
      width: Ye,
      height: je,
      viewBox: "0 0 " + u + " " + Q
    }), Ee = A.makeSvgSpan([], [P0], n);
    Ee.height = Q / 1e3, Ee.style.width = Ye, Ee.style.height = je, K.push({
      type: "elem",
      elem: Ee
    });
  } else {
    if (K.push(Q0(w, f, l)), K.push(A0), m === null) {
      var Le = N - S - C + 2 * pt;
      K.push(et(v, Le, n));
    } else {
      var pe = (N - S - C - L) / 2 + 2 * pt;
      K.push(et(v, pe, n)), K.push(A0), K.push(Q0(m, f, l)), K.push(A0), K.push(et(v, pe, n));
    }
    K.push(A0), K.push(Q0(h, f, l));
  }
  var n0 = n.havingBaseStyle(E.TEXT), G0 = A.makeVList({
    positionType: "bottom",
    positionData: ae,
    children: K
  }, n0);
  return Tt(A.makeSpan(["delimsizing", "mult"], [G0], n0), E.TEXT, n, c);
}, tt = 80, rt = 0.08, at = function(e, t, r, n, l) {
  var c = mn(e, n, r), h = new Ge(e, c), m = new Ce([h], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: D(t),
    viewBox: "0 0 400000 " + r,
    preserveAspectRatio: "xMinYMin slice"
  });
  return A.makeSvgSpan(["hide-tail"], [m], l);
}, di = function(e, t) {
  var r = t.havingBaseSizing(), n = Jr("\\surd", e * r.sizeMultiplier, Zr, r), l = r.sizeMultiplier, c = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), h, m = 0, v = 0, w = 0, i;
  return n.type === "small" ? (w = 1e3 + 1e3 * c + tt, e < 1 ? l = 1 : e < 1.4 && (l = 0.7), m = (1 + c + rt) / l, v = (1 + c) / l, h = at("sqrtMain", m, w, c, t), h.style.minWidth = "0.853em", i = 0.833 / l) : n.type === "large" ? (w = (1e3 + tt) * o0[n.size], v = (o0[n.size] + c) / l, m = (o0[n.size] + c + rt) / l, h = at("sqrtSize" + n.size, m, w, c, t), h.style.minWidth = "1.02em", i = 1 / l) : (m = e + c + rt, v = e + c, w = Math.floor(1e3 * e + c) + tt, h = at("sqrtTall", m, w, c, t), h.style.minWidth = "0.742em", i = 1.056), h.height = v, h.style.height = D(m), {
    span: h,
    advanceWidth: i,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + c) * l
  };
}, Yr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], mi = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], jr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], o0 = [0, 1.2, 1.8, 2.4, 3], fi = function(e, t, r, n, l) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Yr.includes(e) || jr.includes(e))
    return Wr(e, t, !1, r, n, l);
  if (mi.includes(e))
    return Ur(e, o0[t], !1, r, n, l);
  throw new B("Illegal delimiter: '" + e + "'");
}, pi = [{
  type: "small",
  style: E.SCRIPTSCRIPT
}, {
  type: "small",
  style: E.SCRIPT
}, {
  type: "small",
  style: E.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], vi = [{
  type: "small",
  style: E.SCRIPTSCRIPT
}, {
  type: "small",
  style: E.SCRIPT
}, {
  type: "small",
  style: E.TEXT
}, {
  type: "stack"
}], Zr = [{
  type: "small",
  style: E.SCRIPTSCRIPT
}, {
  type: "small",
  style: E.SCRIPT
}, {
  type: "small",
  style: E.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], gi = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Jr = function(e, t, r, n) {
  for (var l = Math.min(2, 3 - n.style.size), c = l; c < r.length && r[c].type !== "stack"; c++) {
    var h = s0(e, gi(r[c]), "math"), m = h.height + h.depth;
    if (r[c].type === "small") {
      var v = n.havingBaseStyle(r[c].style);
      m *= v.sizeMultiplier;
    }
    if (m > t)
      return r[c];
  }
  return r[r.length - 1];
}, Kr = function(e, t, r, n, l, c) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var h;
  jr.includes(e) ? h = pi : Yr.includes(e) ? h = Zr : h = vi;
  var m = Jr(e, t, h, n);
  return m.type === "small" ? oi(e, m.style, r, n, l, c) : m.type === "large" ? Wr(e, m.size, r, n, l, c) : Ur(e, t, r, n, l, c);
}, bi = function(e, t, r, n, l, c) {
  var h = n.fontMetrics().axisHeight * n.sizeMultiplier, m = 901, v = 5 / n.fontMetrics().ptPerEm, w = Math.max(t - h, r + h), i = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    w / 500 * m,
    2 * w - v
  );
  return Kr(e, i, !0, n, l, c);
}, De = {
  sqrtImage: di,
  sizedDelim: fi,
  sizeToMaxHeight: o0,
  customSizedDelim: Kr,
  leftRightDelim: bi
}, tr = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, yi = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function R0(a, e) {
  var t = E0(a);
  if (t && yi.includes(t.text))
    return t;
  throw t ? new B("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", a) : new B("Invalid delimiter type '" + a.type + "'", a);
}
I({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (a, e) => {
    var t = R0(e[0], a);
    return {
      type: "delimsizing",
      mode: a.parser.mode,
      size: tr[a.funcName].size,
      mclass: tr[a.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => a.delim === "." ? A.makeSpan([a.mclass]) : De.sizedDelim(a.delim, a.size, e, a.mode, [a.mclass]),
  mathmlBuilder: (a) => {
    var e = [];
    a.delim !== "." && e.push(be(a.delim, a.mode));
    var t = new z.MathNode("mo", e);
    a.mclass === "mopen" || a.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var r = D(De.sizeToMaxHeight[a.size]);
    return t.setAttribute("minsize", r), t.setAttribute("maxsize", r), t;
  }
});
function rr(a) {
  if (!a.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
I({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = a.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new B("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: a.parser.mode,
      delim: R0(e[0], a).text,
      color: t
      // undefined if not set via \color
    };
  }
});
I({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = R0(e[0], a), r = a.parser;
    ++r.leftrightDepth;
    var n = r.parseExpression(!1);
    --r.leftrightDepth, r.expect("\\right", !1);
    var l = F(r.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: r.mode,
      body: n,
      left: t.text,
      right: l.delim,
      rightColor: l.color
    };
  },
  htmlBuilder: (a, e) => {
    rr(a);
    for (var t = re(a.body, e, !0, ["mopen", "mclose"]), r = 0, n = 0, l = !1, c = 0; c < t.length; c++)
      t[c].isMiddle ? l = !0 : (r = Math.max(t[c].height, r), n = Math.max(t[c].depth, n));
    r *= e.sizeMultiplier, n *= e.sizeMultiplier;
    var h;
    if (a.left === "." ? h = c0(e, ["mopen"]) : h = De.leftRightDelim(a.left, r, n, e, a.mode, ["mopen"]), t.unshift(h), l)
      for (var m = 1; m < t.length; m++) {
        var v = t[m], w = v.isMiddle;
        w && (t[m] = De.leftRightDelim(w.delim, r, n, w.options, a.mode, []));
      }
    var i;
    if (a.right === ".")
      i = c0(e, ["mclose"]);
    else {
      var u = a.rightColor ? e.withColor(a.rightColor) : e;
      i = De.leftRightDelim(a.right, r, n, u, a.mode, ["mclose"]);
    }
    return t.push(i), A.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (a, e) => {
    rr(a);
    var t = ue(a.body, e);
    if (a.left !== ".") {
      var r = new z.MathNode("mo", [be(a.left, a.mode)]);
      r.setAttribute("fence", "true"), t.unshift(r);
    }
    if (a.right !== ".") {
      var n = new z.MathNode("mo", [be(a.right, a.mode)]);
      n.setAttribute("fence", "true"), a.rightColor && n.setAttribute("mathcolor", a.rightColor), t.push(n);
    }
    return St(t);
  }
});
I({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var t = R0(e[0], a);
    if (!a.parser.leftrightDepth)
      throw new B("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: a.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    if (a.delim === ".")
      t = c0(e, []);
    else {
      t = De.sizedDelim(a.delim, 1, e, a.mode, []);
      var r = {
        delim: a.delim,
        options: e
      };
      t.isMiddle = r;
    }
    return t;
  },
  mathmlBuilder: (a, e) => {
    var t = a.delim === "\\vert" || a.delim === "|" ? be("|", "text") : be(a.delim, a.mode), r = new z.MathNode("mo", [t]);
    return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
  }
});
var Mt = (a, e) => {
  var t = A.wrapFragment(V(a.body, e), e), r = a.label.slice(1), n = e.sizeMultiplier, l, c = 0, h = $.isCharacterBox(a.body);
  if (r === "sout")
    l = A.makeSpan(["stretchy", "sout"]), l.height = e.fontMetrics().defaultRuleThickness / n, c = -0.5 * e.fontMetrics().xHeight;
  else if (r === "phase") {
    var m = Z({
      number: 0.6,
      unit: "pt"
    }, e), v = Z({
      number: 0.35,
      unit: "ex"
    }, e), w = e.havingBaseSizing();
    n = n / w.sizeMultiplier;
    var i = t.height + t.depth + m + v;
    t.style.paddingLeft = D(i / 2 + m);
    var u = Math.floor(1e3 * i * n), f = hn(u), g = new Ce([new Ge("phase", f)], {
      width: "400em",
      height: D(u / 1e3),
      viewBox: "0 0 400000 " + u,
      preserveAspectRatio: "xMinYMin slice"
    });
    l = A.makeSvgSpan(["hide-tail"], [g], e), l.style.height = D(i), c = t.depth + m + v;
  } else {
    /cancel/.test(r) ? h || t.classes.push("cancel-pad") : r === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var S = 0, _ = 0, x = 0;
    /box/.test(r) ? (x = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), S = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : x), _ = S) : r === "angl" ? (x = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), S = 4 * x, _ = Math.max(0, 0.25 - t.depth)) : (S = h ? 0.2 : 0, _ = S), l = qe.encloseSpan(t, r, S, _, e), /fbox|boxed|fcolorbox/.test(r) ? (l.style.borderStyle = "solid", l.style.borderWidth = D(x)) : r === "angl" && x !== 0.049 && (l.style.borderTopWidth = D(x), l.style.borderRightWidth = D(x)), c = t.depth + _, a.backgroundColor && (l.style.backgroundColor = a.backgroundColor, a.borderColor && (l.style.borderColor = a.borderColor));
  }
  var M;
  if (a.backgroundColor)
    M = A.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: l,
          shift: c
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var C = /cancel|phase/.test(r) ? ["svg-align"] : [];
    M = A.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: l,
          shift: c,
          wrapperClasses: C
        }
      ]
    }, e);
  }
  return /cancel/.test(r) && (M.height = t.height, M.depth = t.depth), /cancel/.test(r) && !h ? A.makeSpan(["mord", "cancel-lap"], [M], e) : A.makeSpan(["mord"], [M], e);
}, zt = (a, e) => {
  var t = 0, r = new z.MathNode(a.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [W(a.body, e)]);
  switch (a.label) {
    case "\\cancel":
      r.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      r.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      r.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      r.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      r.setAttribute("notation", "box");
      break;
    case "\\angl":
      r.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * t + "pt"), r.setAttribute("height", "+" + 2 * t + "pt"), r.setAttribute("lspace", t + "pt"), r.setAttribute("voffset", t + "pt"), a.label === "\\fcolorbox") {
        var n = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        r.setAttribute("style", "border: " + n + "em solid " + String(a.borderColor));
      }
      break;
    case "\\xcancel":
      r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return a.backgroundColor && r.setAttribute("mathbackground", a.backgroundColor), r;
};
I({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a, l = F(e[0], "color-token").color, c = e[1];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: l,
      body: c
    };
  },
  htmlBuilder: Mt,
  mathmlBuilder: zt
});
I({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(a, e, t) {
    var {
      parser: r,
      funcName: n
    } = a, l = F(e[0], "color-token").color, c = F(e[1], "color-token").color, h = e[2];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      backgroundColor: c,
      borderColor: l,
      body: h
    };
  },
  htmlBuilder: Mt,
  mathmlBuilder: zt
});
I({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
I({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: r,
      body: n
    };
  },
  htmlBuilder: Mt,
  mathmlBuilder: zt
});
I({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Qr = {};
function _e(a) {
  for (var {
    type: e,
    names: t,
    props: r,
    handler: n,
    htmlBuilder: l,
    mathmlBuilder: c
  } = a, h = {
    type: e,
    numArgs: r.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: n
  }, m = 0; m < t.length; ++m)
    Qr[t[m]] = h;
  l && (C0[e] = l), c && (I0[e] = c);
}
var ea = {};
function p(a, e) {
  ea[a] = e;
}
function ar(a) {
  var e = [];
  a.consumeSpaces();
  var t = a.fetch().text;
  for (t === "\\relax" && (a.consume(), a.consumeSpaces(), t = a.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    a.consume(), e.push(t === "\\hdashline"), a.consumeSpaces(), t = a.fetch().text;
  return e;
}
var H0 = (a) => {
  var e = a.parser.settings;
  if (!e.displayMode)
    throw new B("{" + a.envName + "} can be used only in display mode.");
};
function Bt(a) {
  if (a.indexOf("ed") === -1)
    return a.indexOf("*") === -1;
}
function $e(a, e, t) {
  var {
    hskipBeforeAndAfter: r,
    addJot: n,
    cols: l,
    arraystretch: c,
    colSeparationType: h,
    autoTag: m,
    singleRow: v,
    emptySingleRow: w,
    maxNumCols: i,
    leqno: u
  } = e;
  if (a.gullet.beginGroup(), v || a.gullet.macros.set("\\cr", "\\\\\\relax"), !c) {
    var f = a.gullet.expandMacroAsText("\\arraystretch");
    if (f == null)
      c = 1;
    else if (c = parseFloat(f), !c || c < 0)
      throw new B("Invalid \\arraystretch: " + f);
  }
  a.gullet.beginGroup();
  var g = [], S = [g], _ = [], x = [], M = m != null ? [] : void 0;
  function C() {
    m && a.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function L() {
    M && (a.gullet.macros.get("\\df@tag") ? (M.push(a.subparse([new de("\\df@tag")])), a.gullet.macros.set("\\df@tag", void 0, !0)) : M.push(!!m && a.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (C(), x.push(ar(a)); ; ) {
    var H = a.parseExpression(!1, v ? "\\end" : "\\\\");
    a.gullet.endGroup(), a.gullet.beginGroup(), H = {
      type: "ordgroup",
      mode: a.mode,
      body: H
    }, t && (H = {
      type: "styling",
      mode: a.mode,
      style: t,
      body: [H]
    }), g.push(H);
    var P = a.fetch().text;
    if (P === "&") {
      if (i && g.length === i) {
        if (v || h)
          throw new B("Too many tab characters: &", a.nextToken);
        a.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      a.consume();
    } else if (P === "\\end") {
      L(), g.length === 1 && H.type === "styling" && H.body[0].body.length === 0 && (S.length > 1 || !w) && S.pop(), x.length < S.length + 1 && x.push([]);
      break;
    } else if (P === "\\\\") {
      a.consume();
      var G = void 0;
      a.gullet.future().text !== " " && (G = a.parseSizeGroup(!0)), _.push(G ? G.value : null), L(), x.push(ar(a)), g = [], S.push(g), C();
    } else
      throw new B("Expected & or \\\\ or \\cr or \\end", a.nextToken);
  }
  return a.gullet.endGroup(), a.gullet.endGroup(), {
    type: "array",
    mode: a.mode,
    addJot: n,
    arraystretch: c,
    body: S,
    cols: l,
    rowGaps: _,
    hskipBeforeAndAfter: r,
    hLinesBeforeRow: x,
    colSeparationType: h,
    tags: M,
    leqno: u
  };
}
function Dt(a) {
  return a.slice(0, 1) === "d" ? "display" : "text";
}
var Ae = function(e, t) {
  var r, n, l = e.body.length, c = e.hLinesBeforeRow, h = 0, m = new Array(l), v = [], w = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), i = 1 / t.fontMetrics().ptPerEm, u = 5 * i;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var f = t.havingStyle(E.SCRIPT).sizeMultiplier;
    u = 0.2778 * (f / t.sizeMultiplier);
  }
  var g = e.colSeparationType === "CD" ? Z({
    number: 3,
    unit: "ex"
  }, t) : 12 * i, S = 3 * i, _ = e.arraystretch * g, x = 0.7 * _, M = 0.3 * _, C = 0;
  function L(v0) {
    for (var g0 = 0; g0 < v0.length; ++g0)
      g0 > 0 && (C += 0.25), v.push({
        pos: C,
        isDashed: v0[g0]
      });
  }
  for (L(c[0]), r = 0; r < e.body.length; ++r) {
    var H = e.body[r], P = x, G = M;
    h < H.length && (h = H.length);
    var X = new Array(H.length);
    for (n = 0; n < H.length; ++n) {
      var N = V(H[n], t);
      G < N.depth && (G = N.depth), P < N.height && (P = N.height), X[n] = N;
    }
    var fe = e.rowGaps[r], ae = 0;
    fe && (ae = Z(fe, t), ae > 0 && (ae += M, G < ae && (G = ae), ae = 0)), e.addJot && (G += S), X.height = P, X.depth = G, C += P, X.pos = C, C += G + ae, m[r] = X, L(c[r + 1]);
  }
  var K = C / 2 + t.fontMetrics().axisHeight, we = e.cols || [], Q = [], ce, Oe, Ye = [];
  if (e.tags && e.tags.some((v0) => v0))
    for (r = 0; r < l; ++r) {
      var je = m[r], P0 = je.pos - K, Ee = e.tags[r], Le = void 0;
      Ee === !0 ? Le = A.makeSpan(["eqn-num"], [], t) : Ee === !1 ? Le = A.makeSpan([], [], t) : Le = A.makeSpan([], re(Ee, t, !0), t), Le.depth = je.depth, Le.height = je.height, Ye.push({
        type: "elem",
        elem: Le,
        shift: P0
      });
    }
  for (
    n = 0, Oe = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    n < h || Oe < we.length;
    ++n, ++Oe
  ) {
    for (var pe = we[Oe] || {}, n0 = !0; pe.type === "separator"; ) {
      if (n0 || (ce = A.makeSpan(["arraycolsep"], []), ce.style.width = D(t.fontMetrics().doubleRuleSep), Q.push(ce)), pe.separator === "|" || pe.separator === ":") {
        var G0 = pe.separator === "|" ? "solid" : "dashed", Ze = A.makeSpan(["vertical-separator"], [], t);
        Ze.style.height = D(C), Ze.style.borderRightWidth = D(w), Ze.style.borderRightStyle = G0, Ze.style.margin = "0 " + D(-w / 2);
        var Lt = C - K;
        Lt && (Ze.style.verticalAlign = D(-Lt)), Q.push(Ze);
      } else
        throw new B("Invalid separator type: " + pe.separator);
      Oe++, pe = we[Oe] || {}, n0 = !1;
    }
    if (!(n >= h)) {
      var Je = void 0;
      (n > 0 || e.hskipBeforeAndAfter) && (Je = $.deflt(pe.pregap, u), Je !== 0 && (ce = A.makeSpan(["arraycolsep"], []), ce.style.width = D(Je), Q.push(ce)));
      var Ke = [];
      for (r = 0; r < l; ++r) {
        var f0 = m[r], p0 = f0[n];
        if (p0) {
          var ga = f0.pos - K;
          p0.depth = f0.depth, p0.height = f0.height, Ke.push({
            type: "elem",
            elem: p0,
            shift: ga
          });
        }
      }
      Ke = A.makeVList({
        positionType: "individualShift",
        children: Ke
      }, t), Ke = A.makeSpan(["col-align-" + (pe.align || "c")], [Ke]), Q.push(Ke), (n < h - 1 || e.hskipBeforeAndAfter) && (Je = $.deflt(pe.postgap, u), Je !== 0 && (ce = A.makeSpan(["arraycolsep"], []), ce.style.width = D(Je), Q.push(ce)));
    }
  }
  if (m = A.makeSpan(["mtable"], Q), v.length > 0) {
    for (var ba = A.makeLineSpan("hline", t, w), ya = A.makeLineSpan("hdashline", t, w), V0 = [{
      type: "elem",
      elem: m,
      shift: 0
    }]; v.length > 0; ) {
      var Rt = v.pop(), Ht = Rt.pos - K;
      Rt.isDashed ? V0.push({
        type: "elem",
        elem: ya,
        shift: Ht
      }) : V0.push({
        type: "elem",
        elem: ba,
        shift: Ht
      });
    }
    m = A.makeVList({
      positionType: "individualShift",
      children: V0
    }, t);
  }
  if (Ye.length === 0)
    return A.makeSpan(["mord"], [m], t);
  var $0 = A.makeVList({
    positionType: "individualShift",
    children: Ye
  }, t);
  return $0 = A.makeSpan(["tag"], [$0], t), A.makeFragment([m, $0]);
}, wi = {
  c: "center ",
  l: "left ",
  r: "right "
}, Te = function(e, t) {
  for (var r = [], n = new z.MathNode("mtd", [], ["mtr-glue"]), l = new z.MathNode("mtd", [], ["mml-eqn-num"]), c = 0; c < e.body.length; c++) {
    for (var h = e.body[c], m = [], v = 0; v < h.length; v++)
      m.push(new z.MathNode("mtd", [W(h[v], t)]));
    e.tags && e.tags[c] && (m.unshift(n), m.push(n), e.leqno ? m.unshift(l) : m.push(l)), r.push(new z.MathNode("mtr", m));
  }
  var w = new z.MathNode("mtable", r), i = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  w.setAttribute("rowspacing", D(i));
  var u = "", f = "";
  if (e.cols && e.cols.length > 0) {
    var g = e.cols, S = "", _ = !1, x = 0, M = g.length;
    g[0].type === "separator" && (u += "top ", x = 1), g[g.length - 1].type === "separator" && (u += "bottom ", M -= 1);
    for (var C = x; C < M; C++)
      g[C].type === "align" ? (f += wi[g[C].align], _ && (S += "none "), _ = !0) : g[C].type === "separator" && _ && (S += g[C].separator === "|" ? "solid " : "dashed ", _ = !1);
    w.setAttribute("columnalign", f.trim()), /[sd]/.test(S) && w.setAttribute("columnlines", S.trim());
  }
  if (e.colSeparationType === "align") {
    for (var L = e.cols || [], H = "", P = 1; P < L.length; P++)
      H += P % 2 ? "0em " : "1em ";
    w.setAttribute("columnspacing", H.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? w.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? w.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? w.setAttribute("columnspacing", "0.5em") : w.setAttribute("columnspacing", "1em");
  var G = "", X = e.hLinesBeforeRow;
  u += X[0].length > 0 ? "left " : "", u += X[X.length - 1].length > 0 ? "right " : "";
  for (var N = 1; N < X.length - 1; N++)
    G += X[N].length === 0 ? "none " : X[N][0] ? "dashed " : "solid ";
  return /[sd]/.test(G) && w.setAttribute("rowlines", G.trim()), u !== "" && (w = new z.MathNode("menclose", [w]), w.setAttribute("notation", u.trim())), e.arraystretch && e.arraystretch < 1 && (w = new z.MathNode("mstyle", [w]), w.setAttribute("scriptlevel", "1")), w;
}, ta = function(e, t) {
  e.envName.indexOf("ed") === -1 && H0(e);
  var r = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", l = e.envName === "split", c = $e(e.parser, {
    cols: r,
    addJot: !0,
    autoTag: l ? void 0 : Bt(e.envName),
    emptySingleRow: !0,
    colSeparationType: n,
    maxNumCols: l ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), h, m = 0, v = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var w = "", i = 0; i < t[0].body.length; i++) {
      var u = F(t[0].body[i], "textord");
      w += u.text;
    }
    h = Number(w), m = h * 2;
  }
  var f = !m;
  c.body.forEach(function(x) {
    for (var M = 1; M < x.length; M += 2) {
      var C = F(x[M], "styling"), L = F(C.body[0], "ordgroup");
      L.body.unshift(v);
    }
    if (f)
      m < x.length && (m = x.length);
    else {
      var H = x.length / 2;
      if (h < H)
        throw new B("Too many math in a row: " + ("expected " + h + ", but got " + H), x[0]);
    }
  });
  for (var g = 0; g < m; ++g) {
    var S = "r", _ = 0;
    g % 2 === 1 ? S = "l" : g > 0 && f && (_ = 1), r[g] = {
      type: "align",
      align: S,
      pregap: _,
      postgap: 0
    };
  }
  return c.colSeparationType = f ? "align" : "alignat", c;
};
_e({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = E0(e[0]), r = t ? [e[0]] : F(e[0], "ordgroup").body, n = r.map(function(c) {
      var h = _t(c), m = h.text;
      if ("lcr".indexOf(m) !== -1)
        return {
          type: "align",
          align: m
        };
      if (m === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (m === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new B("Unknown column alignment: " + m, c);
    }), l = {
      cols: n,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: n.length
    };
    return $e(a.parser, l, Dt(a.envName));
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[a.envName.replace("*", "")], t = "c", r = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (a.envName.charAt(a.envName.length - 1) === "*") {
      var n = a.parser;
      if (n.consumeSpaces(), n.fetch().text === "[") {
        if (n.consume(), n.consumeSpaces(), t = n.fetch().text, "lcr".indexOf(t) === -1)
          throw new B("Expected l or c or r", n.nextToken);
        n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), r.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var l = $e(a.parser, r, Dt(a.envName)), c = Math.max(0, ...l.body.map((h) => h.length));
    return l.cols = new Array(c).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: a.mode,
      body: [l],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : l;
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 0.5
    }, t = $e(a.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var t = E0(e[0]), r = t ? [e[0]] : F(e[0], "ordgroup").body, n = r.map(function(c) {
      var h = _t(c), m = h.text;
      if ("lc".indexOf(m) !== -1)
        return {
          type: "align",
          align: m
        };
      throw new B("Unknown column alignment: " + m, c);
    });
    if (n.length > 1)
      throw new B("{subarray} can contain only one column");
    var l = {
      cols: n,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (l = $e(a.parser, l, "script"), l.body.length > 0 && l.body[0].length > 1)
      throw new B("{subarray} can contain only one column");
    return l;
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = $e(a.parser, e, Dt(a.envName));
    return {
      type: "leftright",
      mode: a.mode,
      body: [t],
      left: a.envName.indexOf("r") > -1 ? "." : "\\{",
      right: a.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: ta,
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    ["gather", "gather*"].includes(a.envName) && H0(a);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Bt(a.envName),
      emptySingleRow: !0,
      leqno: a.parser.settings.leqno
    };
    return $e(a.parser, e, "display");
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: ta,
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(a) {
    H0(a);
    var e = {
      autoTag: Bt(a.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: a.parser.settings.leqno
    };
    return $e(a.parser, e, "display");
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
_e({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(a) {
    return H0(a), li(a.parser);
  },
  htmlBuilder: Ae,
  mathmlBuilder: Te
});
p("\\nonumber", "\\gdef\\@eqnsw{0}");
p("\\notag", "\\nonumber");
I({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(a, e) {
    throw new B(a.funcName + " valid only within array environment");
  }
});
var nr = Qr;
I({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    if (n.type !== "ordgroup")
      throw new B("Invalid environment name", n);
    for (var l = "", c = 0; c < n.body.length; ++c)
      l += F(n.body[c], "textord").text;
    if (r === "\\begin") {
      if (!nr.hasOwnProperty(l))
        throw new B("No such environment: " + l, n);
      var h = nr[l], {
        args: m,
        optArgs: v
      } = t.parseArguments("\\begin{" + l + "}", h), w = {
        mode: t.mode,
        envName: l,
        parser: t
      }, i = h.handler(w, m, v);
      t.expect("\\end", !1);
      var u = t.nextToken, f = F(t.parseFunction(), "environment");
      if (f.name !== l)
        throw new B("Mismatch: \\begin{" + l + "} matched by \\end{" + f.name + "}", u);
      return i;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: l,
      nameGroup: n
    };
  }
});
var ra = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return V(a.body, r);
}, aa = (a, e) => {
  var t = a.font, r = e.withFont(t);
  return W(a.body, r);
}, ir = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
I({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = q0(e[0]), l = r;
    return l in ir && (l = ir[l]), {
      type: "font",
      mode: t.mode,
      font: l.slice(1),
      body: n
    };
  },
  htmlBuilder: ra,
  mathmlBuilder: aa
});
I({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0], n = $.isCharacterBox(r);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: L0(r),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: r
      }],
      isCharacterBox: n
    };
  }
});
I({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r,
      breakOnTokenText: n
    } = a, {
      mode: l
    } = t, c = t.parseExpression(!0, n), h = "math" + r.slice(1);
    return {
      type: "font",
      mode: l,
      font: h,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: c
      }
    };
  },
  htmlBuilder: ra,
  mathmlBuilder: aa
});
var na = (a, e) => {
  var t = e;
  return a === "display" ? t = t.id >= E.SCRIPT.id ? t.text() : E.DISPLAY : a === "text" && t.size === E.DISPLAY.size ? t = E.TEXT : a === "script" ? t = E.SCRIPT : a === "scriptscript" && (t = E.SCRIPTSCRIPT), t;
}, Ct = (a, e) => {
  var t = na(a.size, e.style), r = t.fracNum(), n = t.fracDen(), l;
  l = e.havingStyle(r);
  var c = V(a.numer, l, e);
  if (a.continued) {
    var h = 8.5 / e.fontMetrics().ptPerEm, m = 3.5 / e.fontMetrics().ptPerEm;
    c.height = c.height < h ? h : c.height, c.depth = c.depth < m ? m : c.depth;
  }
  l = e.havingStyle(n);
  var v = V(a.denom, l, e), w, i, u;
  a.hasBarLine ? (a.barSize ? (i = Z(a.barSize, e), w = A.makeLineSpan("frac-line", e, i)) : w = A.makeLineSpan("frac-line", e), i = w.height, u = w.height) : (w = null, i = 0, u = e.fontMetrics().defaultRuleThickness);
  var f, g, S;
  t.size === E.DISPLAY.size || a.size === "display" ? (f = e.fontMetrics().num1, i > 0 ? g = 3 * u : g = 7 * u, S = e.fontMetrics().denom1) : (i > 0 ? (f = e.fontMetrics().num2, g = u) : (f = e.fontMetrics().num3, g = 3 * u), S = e.fontMetrics().denom2);
  var _;
  if (w) {
    var M = e.fontMetrics().axisHeight;
    f - c.depth - (M + 0.5 * i) < g && (f += g - (f - c.depth - (M + 0.5 * i))), M - 0.5 * i - (v.height - S) < g && (S += g - (M - 0.5 * i - (v.height - S)));
    var C = -(M - 0.5 * i);
    _ = A.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: v,
        shift: S
      }, {
        type: "elem",
        elem: w,
        shift: C
      }, {
        type: "elem",
        elem: c,
        shift: -f
      }]
    }, e);
  } else {
    var x = f - c.depth - (v.height - S);
    x < g && (f += 0.5 * (g - x), S += 0.5 * (g - x)), _ = A.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: v,
        shift: S
      }, {
        type: "elem",
        elem: c,
        shift: -f
      }]
    }, e);
  }
  l = e.havingStyle(t), _.height *= l.sizeMultiplier / e.sizeMultiplier, _.depth *= l.sizeMultiplier / e.sizeMultiplier;
  var L;
  t.size === E.DISPLAY.size ? L = e.fontMetrics().delim1 : t.size === E.SCRIPTSCRIPT.size ? L = e.havingStyle(E.SCRIPT).fontMetrics().delim2 : L = e.fontMetrics().delim2;
  var H, P;
  return a.leftDelim == null ? H = c0(e, ["mopen"]) : H = De.customSizedDelim(a.leftDelim, L, !0, e.havingStyle(t), a.mode, ["mopen"]), a.continued ? P = A.makeSpan([]) : a.rightDelim == null ? P = c0(e, ["mclose"]) : P = De.customSizedDelim(a.rightDelim, L, !0, e.havingStyle(t), a.mode, ["mclose"]), A.makeSpan(["mord"].concat(l.sizingClasses(e)), [H, A.makeSpan(["mfrac"], [_]), P], e);
}, It = (a, e) => {
  var t = new z.MathNode("mfrac", [W(a.numer, e), W(a.denom, e)]);
  if (!a.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (a.barSize) {
    var r = Z(a.barSize, e);
    t.setAttribute("linethickness", D(r));
  }
  var n = na(a.size, e.style);
  if (n.size !== e.style.size) {
    t = new z.MathNode("mstyle", [t]);
    var l = n.size === E.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", l), t.setAttribute("scriptlevel", "0");
  }
  if (a.leftDelim != null || a.rightDelim != null) {
    var c = [];
    if (a.leftDelim != null) {
      var h = new z.MathNode("mo", [new z.TextNode(a.leftDelim.replace("\\", ""))]);
      h.setAttribute("fence", "true"), c.push(h);
    }
    if (c.push(t), a.rightDelim != null) {
      var m = new z.MathNode("mo", [new z.TextNode(a.rightDelim.replace("\\", ""))]);
      m.setAttribute("fence", "true"), c.push(m);
    }
    return St(c);
  }
  return t;
};
I({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], l = e[1], c, h = null, m = null, v = "auto";
    switch (r) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        c = !0;
        break;
      case "\\\\atopfrac":
        c = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        c = !1, h = "(", m = ")";
        break;
      case "\\\\bracefrac":
        c = !1, h = "\\{", m = "\\}";
        break;
      case "\\\\brackfrac":
        c = !1, h = "[", m = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (r) {
      case "\\dfrac":
      case "\\dbinom":
        v = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        v = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: n,
      denom: l,
      hasBarLine: c,
      leftDelim: h,
      rightDelim: m,
      size: v,
      barSize: null
    };
  },
  htmlBuilder: Ct,
  mathmlBuilder: It
});
I({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], l = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: n,
      denom: l,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
I({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t,
      token: r
    } = a, n;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: n,
      token: r
    };
  }
});
var lr = ["display", "text", "script", "scriptscript"], sr = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
I({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = e[4], n = e[5], l = q0(e[0]), c = l.type === "atom" && l.family === "open" ? sr(l.text) : null, h = q0(e[1]), m = h.type === "atom" && h.family === "close" ? sr(h.text) : null, v = F(e[2], "size"), w, i = null;
    v.isBlank ? w = !0 : (i = v.value, w = i.number > 0);
    var u = "auto", f = e[3];
    if (f.type === "ordgroup") {
      if (f.body.length > 0) {
        var g = F(f.body[0], "textord");
        u = lr[Number(g.text)];
      }
    } else
      f = F(f, "textord"), u = lr[Number(f.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: r,
      denom: n,
      continued: !1,
      hasBarLine: w,
      barSize: i,
      leftDelim: c,
      rightDelim: m,
      size: u
    };
  },
  htmlBuilder: Ct,
  mathmlBuilder: It
});
I({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r,
      token: n
    } = a;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: F(e[0], "size").value,
      token: n
    };
  }
});
I({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0], l = ja(F(e[1], "infix").size), c = e[2], h = l.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: c,
      continued: !1,
      hasBarLine: h,
      barSize: l,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: Ct,
  mathmlBuilder: It
});
var ia = (a, e) => {
  var t = e.style, r, n;
  a.type === "supsub" ? (r = a.sup ? V(a.sup, e.havingStyle(t.sup()), e) : V(a.sub, e.havingStyle(t.sub()), e), n = F(a.base, "horizBrace")) : n = F(a, "horizBrace");
  var l = V(n.base, e.havingBaseStyle(E.DISPLAY)), c = qe.svgSpan(n, e), h;
  if (n.isOver ? (h = A.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: c
    }]
  }, e), h.children[0].children[0].children[1].classes.push("svg-align")) : (h = A.makeVList({
    positionType: "bottom",
    positionData: l.depth + 0.1 + c.height,
    children: [{
      type: "elem",
      elem: c
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), h.children[0].children[0].children[0].classes.push("svg-align")), r) {
    var m = A.makeSpan(["mord", n.isOver ? "mover" : "munder"], [h], e);
    n.isOver ? h = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: m
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: r
      }]
    }, e) : h = A.makeVList({
      positionType: "bottom",
      positionData: m.depth + 0.2 + r.height + r.depth,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: m
      }]
    }, e);
  }
  return A.makeSpan(["mord", n.isOver ? "mover" : "munder"], [h], e);
}, xi = (a, e) => {
  var t = qe.mathMLnode(a.label);
  return new z.MathNode(a.isOver ? "mover" : "munder", [W(a.base, e), t]);
};
I({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: r,
      isOver: /^\\over/.test(r),
      base: e[0]
    };
  },
  htmlBuilder: ia,
  mathmlBuilder: xi
});
I({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[1], n = F(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: n
    }) ? {
      type: "href",
      mode: t.mode,
      href: n,
      body: ee(r)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (a, e) => {
    var t = re(a.body, e, !1);
    return A.makeAnchor(a.href, [], t, e);
  },
  mathmlBuilder: (a, e) => {
    var t = Ve(a.body, e);
    return t instanceof he || (t = new he("mrow", [t])), t.setAttribute("href", a.href), t;
  }
});
I({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = F(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: r
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var n = [], l = 0; l < r.length; l++) {
      var c = r[l];
      c === "~" && (c = "\\textasciitilde"), n.push({
        type: "textord",
        mode: "text",
        text: c
      });
    }
    var h = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: t.mode,
      href: r,
      body: ee(h)
    };
  }
});
I({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "hbox",
      mode: t.mode,
      body: ee(e[0])
    };
  },
  htmlBuilder(a, e) {
    var t = re(a.body, e, !1);
    return A.makeFragment(t);
  },
  mathmlBuilder(a, e) {
    return new z.MathNode("mrow", ue(a.body, e));
  }
});
I({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r,
      token: n
    } = a, l = F(e[0], "raw").string, c = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var h, m = {};
    switch (r) {
      case "\\htmlClass":
        m.class = l, h = {
          command: "\\htmlClass",
          class: l
        };
        break;
      case "\\htmlId":
        m.id = l, h = {
          command: "\\htmlId",
          id: l
        };
        break;
      case "\\htmlStyle":
        m.style = l, h = {
          command: "\\htmlStyle",
          style: l
        };
        break;
      case "\\htmlData": {
        for (var v = l.split(","), w = 0; w < v.length; w++) {
          var i = v[w], u = i.indexOf("=");
          if (u < 0)
            throw new B("\\htmlData key/value '" + i + "' missing equals sign");
          var f = i.slice(0, u), g = i.slice(u + 1);
          m["data-" + f.trim()] = g;
        }
        h = {
          command: "\\htmlData",
          attributes: m
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(h) ? {
      type: "html",
      mode: t.mode,
      attributes: m,
      body: ee(c)
    } : t.formatUnsupportedCmd(r);
  },
  htmlBuilder: (a, e) => {
    var t = re(a.body, e, !1), r = ["enclosing"];
    a.attributes.class && r.push(...a.attributes.class.trim().split(/\s+/));
    var n = A.makeSpan(r, t, e);
    for (var l in a.attributes)
      l !== "class" && a.attributes.hasOwnProperty(l) && n.setAttribute(l, a.attributes[l]);
    return n;
  },
  mathmlBuilder: (a, e) => Ve(a.body, e)
});
I({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: ee(e[0]),
      mathml: ee(e[1])
    };
  },
  htmlBuilder: (a, e) => {
    var t = re(a.html, e, !1);
    return A.makeFragment(t);
  },
  mathmlBuilder: (a, e) => Ve(a.mathml, e)
});
var nt = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new B("Invalid size: '" + e + "' in \\includegraphics");
  var r = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!_r(r))
    throw new B("Invalid unit: '" + r.unit + "' in \\includegraphics.");
  return r;
};
I({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (a, e, t) => {
    var {
      parser: r
    } = a, n = {
      number: 0,
      unit: "em"
    }, l = {
      number: 0.9,
      unit: "em"
    }, c = {
      number: 0,
      unit: "em"
    }, h = "";
    if (t[0])
      for (var m = F(t[0], "raw").string, v = m.split(","), w = 0; w < v.length; w++) {
        var i = v[w].split("=");
        if (i.length === 2) {
          var u = i[1].trim();
          switch (i[0].trim()) {
            case "alt":
              h = u;
              break;
            case "width":
              n = nt(u);
              break;
            case "height":
              l = nt(u);
              break;
            case "totalheight":
              c = nt(u);
              break;
            default:
              throw new B("Invalid key: '" + i[0] + "' in \\includegraphics.");
          }
        }
      }
    var f = F(e[0], "url").url;
    return h === "" && (h = f, h = h.replace(/^.*[\\/]/, ""), h = h.substring(0, h.lastIndexOf("."))), r.settings.isTrusted({
      command: "\\includegraphics",
      url: f
    }) ? {
      type: "includegraphics",
      mode: r.mode,
      alt: h,
      width: n,
      height: l,
      totalheight: c,
      src: f
    } : r.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (a, e) => {
    var t = Z(a.height, e), r = 0;
    a.totalheight.number > 0 && (r = Z(a.totalheight, e) - t);
    var n = 0;
    a.width.number > 0 && (n = Z(a.width, e));
    var l = {
      height: D(t + r)
    };
    n > 0 && (l.width = D(n)), r > 0 && (l.verticalAlign = D(-r));
    var c = new xn(a.src, a.alt, l);
    return c.height = t, c.depth = r, c;
  },
  mathmlBuilder: (a, e) => {
    var t = new z.MathNode("mglyph", []);
    t.setAttribute("alt", a.alt);
    var r = Z(a.height, e), n = 0;
    if (a.totalheight.number > 0 && (n = Z(a.totalheight, e) - r, t.setAttribute("valign", D(-n))), t.setAttribute("height", D(r + n)), a.width.number > 0) {
      var l = Z(a.width, e);
      t.setAttribute("width", D(l));
    }
    return t.setAttribute("src", a.src), t;
  }
});
I({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = F(e[0], "size");
    if (t.settings.strict) {
      var l = r[1] === "m", c = n.value.unit === "mu";
      l ? (c || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : c && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: n.value
    };
  },
  htmlBuilder(a, e) {
    return A.makeGlue(a.dimension, e);
  },
  mathmlBuilder(a, e) {
    var t = Z(a.dimension, e);
    return new z.SpaceNode(t);
  }
});
I({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: r.slice(5),
      body: n
    };
  },
  htmlBuilder: (a, e) => {
    var t;
    a.alignment === "clap" ? (t = A.makeSpan([], [V(a.body, e)]), t = A.makeSpan(["inner"], [t], e)) : t = A.makeSpan(["inner"], [V(a.body, e)]);
    var r = A.makeSpan(["fix"], []), n = A.makeSpan([a.alignment], [t, r], e), l = A.makeSpan(["strut"]);
    return l.style.height = D(n.height + n.depth), n.depth && (l.style.verticalAlign = D(-n.depth)), n.children.unshift(l), n = A.makeSpan(["thinbox"], [n], e), A.makeSpan(["mord", "vbox"], [n], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new z.MathNode("mpadded", [W(a.body, e)]);
    if (a.alignment !== "rlap") {
      var r = a.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", r + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
I({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    var {
      funcName: t,
      parser: r
    } = a, n = r.mode;
    r.switchMode("math");
    var l = t === "\\(" ? "\\)" : "$", c = r.parseExpression(!1, l);
    return r.expect(l), r.switchMode(n), {
      type: "styling",
      mode: r.mode,
      style: "text",
      body: c
    };
  }
});
I({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(a, e) {
    throw new B("Mismatched " + a.funcName);
  }
});
var or = (a, e) => {
  switch (e.style.size) {
    case E.DISPLAY.size:
      return a.display;
    case E.TEXT.size:
      return a.text;
    case E.SCRIPT.size:
      return a.script;
    case E.SCRIPTSCRIPT.size:
      return a.scriptscript;
    default:
      return a.text;
  }
};
I({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: ee(e[0]),
      text: ee(e[1]),
      script: ee(e[2]),
      scriptscript: ee(e[3])
    };
  },
  htmlBuilder: (a, e) => {
    var t = or(a, e), r = re(t, e, !1);
    return A.makeFragment(r);
  },
  mathmlBuilder: (a, e) => {
    var t = or(a, e);
    return Ve(t, e);
  }
});
var la = (a, e, t, r, n, l, c) => {
  a = A.makeSpan([], [a]);
  var h = t && $.isCharacterBox(t), m, v;
  if (e) {
    var w = V(e, r.havingStyle(n.sup()), r);
    v = {
      elem: w,
      kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - w.depth)
    };
  }
  if (t) {
    var i = V(t, r.havingStyle(n.sub()), r);
    m = {
      elem: i,
      kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - i.height)
    };
  }
  var u;
  if (v && m) {
    var f = r.fontMetrics().bigOpSpacing5 + m.elem.height + m.elem.depth + m.kern + a.depth + c;
    u = A.makeVList({
      positionType: "bottom",
      positionData: f,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: m.elem,
        marginLeft: D(-l)
      }, {
        type: "kern",
        size: m.kern
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: v.kern
      }, {
        type: "elem",
        elem: v.elem,
        marginLeft: D(l)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else if (m) {
    var g = a.height - c;
    u = A.makeVList({
      positionType: "top",
      positionData: g,
      children: [{
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: m.elem,
        marginLeft: D(-l)
      }, {
        type: "kern",
        size: m.kern
      }, {
        type: "elem",
        elem: a
      }]
    }, r);
  } else if (v) {
    var S = a.depth + c;
    u = A.makeVList({
      positionType: "bottom",
      positionData: S,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: v.kern
      }, {
        type: "elem",
        elem: v.elem,
        marginLeft: D(l)
      }, {
        type: "kern",
        size: r.fontMetrics().bigOpSpacing5
      }]
    }, r);
  } else
    return a;
  var _ = [u];
  if (m && l !== 0 && !h) {
    var x = A.makeSpan(["mspace"], [], r);
    x.style.marginRight = D(l), _.unshift(x);
  }
  return A.makeSpan(["mop", "op-limits"], _, r);
}, sa = ["\\smallint"], a0 = (a, e) => {
  var t, r, n = !1, l;
  a.type === "supsub" ? (t = a.sup, r = a.sub, l = F(a.base, "op"), n = !0) : l = F(a, "op");
  var c = e.style, h = !1;
  c.size === E.DISPLAY.size && l.symbol && !sa.includes(l.name) && (h = !0);
  var m;
  if (l.symbol) {
    var v = h ? "Size2-Regular" : "Size1-Regular", w = "";
    if ((l.name === "\\oiint" || l.name === "\\oiiint") && (w = l.name.slice(1), l.name = w === "oiint" ? "\\iint" : "\\iiint"), m = A.makeSymbol(l.name, v, "math", e, ["mop", "op-symbol", h ? "large-op" : "small-op"]), w.length > 0) {
      var i = m.italic, u = A.staticSvg(w + "Size" + (h ? "2" : "1"), e);
      m = A.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: m,
          shift: 0
        }, {
          type: "elem",
          elem: u,
          shift: h ? 0.08 : 0
        }]
      }, e), l.name = "\\" + w, m.classes.unshift("mop"), m.italic = i;
    }
  } else if (l.body) {
    var f = re(l.body, e, !0);
    f.length === 1 && f[0] instanceof ge ? (m = f[0], m.classes[0] = "mop") : m = A.makeSpan(["mop"], f, e);
  } else {
    for (var g = [], S = 1; S < l.name.length; S++)
      g.push(A.mathsym(l.name[S], l.mode, e));
    m = A.makeSpan(["mop"], g, e);
  }
  var _ = 0, x = 0;
  return (m instanceof ge || l.name === "\\oiint" || l.name === "\\oiiint") && !l.suppressBaseShift && (_ = (m.height - m.depth) / 2 - e.fontMetrics().axisHeight, x = m.italic), n ? la(m, t, r, e, c, x, _) : (_ && (m.style.position = "relative", m.style.top = D(_)), m);
}, m0 = (a, e) => {
  var t;
  if (a.symbol)
    t = new he("mo", [be(a.name, a.mode)]), sa.includes(a.name) && t.setAttribute("largeop", "false");
  else if (a.body)
    t = new he("mo", ue(a.body, e));
  else {
    t = new he("mi", [new ke(a.name.slice(1))]);
    var r = new he("mo", [be("⁡", "text")]);
    a.parentIsSupSub ? t = new he("mrow", [t, r]) : t = Or([t, r]);
  }
  return t;
}, Si = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
I({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = r;
    return n.length === 1 && (n = Si[n]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: a0,
  mathmlBuilder: m0
});
I({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: ee(r)
    };
  },
  htmlBuilder: a0,
  mathmlBuilder: m0
});
var ki = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
I({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: a0,
  mathmlBuilder: m0
});
I({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: a0,
  mathmlBuilder: m0
});
I({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0,
    allowedInArgument: !0
  },
  handler(a) {
    var {
      parser: e,
      funcName: t
    } = a, r = t;
    return r.length === 1 && (r = ki[r]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: r
    };
  },
  htmlBuilder: a0,
  mathmlBuilder: m0
});
var oa = (a, e) => {
  var t, r, n = !1, l;
  a.type === "supsub" ? (t = a.sup, r = a.sub, l = F(a.base, "operatorname"), n = !0) : l = F(a, "operatorname");
  var c;
  if (l.body.length > 0) {
    for (var h = l.body.map((i) => {
      var u = i.text;
      return typeof u == "string" ? {
        type: "textord",
        mode: i.mode,
        text: u
      } : i;
    }), m = re(h, e.withFont("mathrm"), !0), v = 0; v < m.length; v++) {
      var w = m[v];
      w instanceof ge && (w.text = w.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    c = A.makeSpan(["mop"], m, e);
  } else
    c = A.makeSpan(["mop"], [], e);
  return n ? la(c, t, r, e, e.style, 0, 0) : c;
}, _i = (a, e) => {
  for (var t = ue(a.body, e.withFont("mathrm")), r = !0, n = 0; n < t.length; n++) {
    var l = t[n];
    if (!(l instanceof z.SpaceNode)) if (l instanceof z.MathNode)
      switch (l.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var c = l.children[0];
          l.children.length === 1 && c instanceof z.TextNode ? c.text = c.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = !1;
          break;
        }
        default:
          r = !1;
      }
    else
      r = !1;
  }
  if (r) {
    var h = t.map((w) => w.toText()).join("");
    t = [new z.TextNode(h)];
  }
  var m = new z.MathNode("mi", t);
  m.setAttribute("mathvariant", "normal");
  var v = new z.MathNode("mo", [be("⁡", "text")]);
  return a.parentIsSupSub ? new z.MathNode("mrow", [m, v]) : z.newDocumentFragment([m, v]);
};
I({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (a, e) => {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: ee(n),
      alwaysHandleSupSub: r === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: oa,
  mathmlBuilder: _i
});
p("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Ue({
  type: "ordgroup",
  htmlBuilder(a, e) {
    return a.semisimple ? A.makeFragment(re(a.body, e, !1)) : A.makeSpan(["mord"], re(a.body, e, !0), e);
  },
  mathmlBuilder(a, e) {
    return Ve(a.body, e, !0);
  }
});
I({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder(a, e) {
    var t = V(a.body, e.havingCrampedStyle()), r = A.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, l = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: n
      }]
    }, e);
    return A.makeSpan(["mord", "overline"], [l], e);
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mo", [new z.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new z.MathNode("mover", [W(a.body, e), t]);
    return r.setAttribute("accent", "true"), r;
  }
});
I({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: ee(r)
    };
  },
  htmlBuilder: (a, e) => {
    var t = re(a.body, e.withPhantom(), !1);
    return A.makeFragment(t);
  },
  mathmlBuilder: (a, e) => {
    var t = ue(a.body, e);
    return new z.MathNode("mphantom", t);
  }
});
I({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = A.makeSpan([], [V(a.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0, t.children[r].depth = 0;
    return t = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), A.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ue(ee(a.body), e), r = new z.MathNode("mphantom", t), n = new z.MathNode("mpadded", [r]);
    return n.setAttribute("height", "0px"), n.setAttribute("depth", "0px"), n;
  }
});
I({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      parser: t
    } = a, r = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: r
    };
  },
  htmlBuilder: (a, e) => {
    var t = A.makeSpan(["inner"], [V(a.body, e.withPhantom())]), r = A.makeSpan(["fix"], []);
    return A.makeSpan(["mord", "rlap"], [t, r], e);
  },
  mathmlBuilder: (a, e) => {
    var t = ue(ee(a.body), e), r = new z.MathNode("mphantom", t), n = new z.MathNode("mpadded", [r]);
    return n.setAttribute("width", "0px"), n;
  }
});
I({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a, r = F(e[0], "size").value, n = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: r,
      body: n
    };
  },
  htmlBuilder(a, e) {
    var t = V(a.body, e), r = Z(a.dy, e);
    return A.makeVList({
      positionType: "shift",
      positionData: -r,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mpadded", [W(a.body, e)]), r = a.dy.number + a.dy.unit;
    return t.setAttribute("voffset", r), t;
  }
});
I({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInArgument: !0
  },
  handler(a) {
    var {
      parser: e
    } = a;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
I({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"]
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = t[0], l = F(e[0], "size"), c = F(e[1], "size");
    return {
      type: "rule",
      mode: r.mode,
      shift: n && F(n, "size").value,
      width: l.value,
      height: c.value
    };
  },
  htmlBuilder(a, e) {
    var t = A.makeSpan(["mord", "rule"], [], e), r = Z(a.width, e), n = Z(a.height, e), l = a.shift ? Z(a.shift, e) : 0;
    return t.style.borderRightWidth = D(r), t.style.borderTopWidth = D(n), t.style.bottom = D(l), t.width = r, t.height = n + l, t.depth = -l, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(a, e) {
    var t = Z(a.width, e), r = Z(a.height, e), n = a.shift ? Z(a.shift, e) : 0, l = e.color && e.getColor() || "black", c = new z.MathNode("mspace");
    c.setAttribute("mathbackground", l), c.setAttribute("width", D(t)), c.setAttribute("height", D(r));
    var h = new z.MathNode("mpadded", [c]);
    return n >= 0 ? h.setAttribute("height", D(n)) : (h.setAttribute("height", D(n)), h.setAttribute("depth", D(-n))), h.setAttribute("voffset", D(n)), h;
  }
});
function ua(a, e, t) {
  for (var r = re(a, e, !1), n = e.sizeMultiplier / t.sizeMultiplier, l = 0; l < r.length; l++) {
    var c = r[l].classes.indexOf("sizing");
    c < 0 ? Array.prototype.push.apply(r[l].classes, e.sizingClasses(t)) : r[l].classes[c + 1] === "reset-size" + e.size && (r[l].classes[c + 1] = "reset-size" + t.size), r[l].height *= n, r[l].depth *= n;
  }
  return A.makeFragment(r);
}
var ur = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Ai = (a, e) => {
  var t = e.havingSize(a.size);
  return ua(a.body, t, e);
};
I({
  type: "sizing",
  names: ur,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (a, e) => {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: n
    } = a, l = n.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: n.mode,
      // Figure out what size to use based on the list of functions above
      size: ur.indexOf(r) + 1,
      body: l
    };
  },
  htmlBuilder: Ai,
  mathmlBuilder: (a, e) => {
    var t = e.havingSize(a.size), r = ue(a.body, t), n = new z.MathNode("mstyle", r);
    return n.setAttribute("mathsize", D(t.sizeMultiplier)), n;
  }
});
I({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (a, e, t) => {
    var {
      parser: r
    } = a, n = !1, l = !1, c = t[0] && F(t[0], "ordgroup");
    if (c)
      for (var h = "", m = 0; m < c.body.length; ++m) {
        var v = c.body[m];
        if (h = v.text, h === "t")
          n = !0;
        else if (h === "b")
          l = !0;
        else {
          n = !1, l = !1;
          break;
        }
      }
    else
      n = !0, l = !0;
    var w = e[0];
    return {
      type: "smash",
      mode: r.mode,
      body: w,
      smashHeight: n,
      smashDepth: l
    };
  },
  htmlBuilder: (a, e) => {
    var t = A.makeSpan([], [V(a.body, e)]);
    if (!a.smashHeight && !a.smashDepth)
      return t;
    if (a.smashHeight && (t.height = 0, t.children))
      for (var r = 0; r < t.children.length; r++)
        t.children[r].height = 0;
    if (a.smashDepth && (t.depth = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].depth = 0;
    var l = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return A.makeSpan(["mord"], [l], e);
  },
  mathmlBuilder: (a, e) => {
    var t = new z.MathNode("mpadded", [W(a.body, e)]);
    return a.smashHeight && t.setAttribute("height", "0px"), a.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
I({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(a, e, t) {
    var {
      parser: r
    } = a, n = t[0], l = e[0];
    return {
      type: "sqrt",
      mode: r.mode,
      body: l,
      index: n
    };
  },
  htmlBuilder(a, e) {
    var t = V(a.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = A.wrapFragment(t, e);
    var r = e.fontMetrics(), n = r.defaultRuleThickness, l = n;
    e.style.id < E.TEXT.id && (l = e.fontMetrics().xHeight);
    var c = n + l / 4, h = t.height + t.depth + c + n, {
      span: m,
      ruleWidth: v,
      advanceWidth: w
    } = De.sqrtImage(h, e), i = m.height - v;
    i > t.height + t.depth + c && (c = (c + i - t.height - t.depth) / 2);
    var u = m.height - t.height - c - v;
    t.style.paddingLeft = D(w);
    var f = A.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + u)
      }, {
        type: "elem",
        elem: m
      }, {
        type: "kern",
        size: v
      }]
    }, e);
    if (a.index) {
      var g = e.havingStyle(E.SCRIPTSCRIPT), S = V(a.index, g, e), _ = 0.6 * (f.height - f.depth), x = A.makeVList({
        positionType: "shift",
        positionData: -_,
        children: [{
          type: "elem",
          elem: S
        }]
      }, e), M = A.makeSpan(["root"], [x]);
      return A.makeSpan(["mord", "sqrt"], [M, f], e);
    } else
      return A.makeSpan(["mord", "sqrt"], [f], e);
  },
  mathmlBuilder(a, e) {
    var {
      body: t,
      index: r
    } = a;
    return r ? new z.MathNode("mroot", [W(t, e), W(r, e)]) : new z.MathNode("msqrt", [W(t, e)]);
  }
});
var cr = {
  display: E.DISPLAY,
  text: E.TEXT,
  script: E.SCRIPT,
  scriptscript: E.SCRIPTSCRIPT
};
I({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(a, e) {
    var {
      breakOnTokenText: t,
      funcName: r,
      parser: n
    } = a, l = n.parseExpression(!0, t), c = r.slice(1, r.length - 5);
    return {
      type: "styling",
      mode: n.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: c,
      body: l
    };
  },
  htmlBuilder(a, e) {
    var t = cr[a.style], r = e.havingStyle(t).withFont("");
    return ua(a.body, r, e);
  },
  mathmlBuilder(a, e) {
    var t = cr[a.style], r = e.havingStyle(t), n = ue(a.body, r), l = new z.MathNode("mstyle", n), c = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, h = c[a.style];
    return l.setAttribute("scriptlevel", h[0]), l.setAttribute("displaystyle", h[1]), l;
  }
});
var Ti = function(e, t) {
  var r = e.base;
  if (r)
    if (r.type === "op") {
      var n = r.limits && (t.style.size === E.DISPLAY.size || r.alwaysHandleSupSub);
      return n ? a0 : null;
    } else if (r.type === "operatorname") {
      var l = r.alwaysHandleSupSub && (t.style.size === E.DISPLAY.size || r.limits);
      return l ? oa : null;
    } else {
      if (r.type === "accent")
        return $.isCharacterBox(r.base) ? At : null;
      if (r.type === "horizBrace") {
        var c = !e.sub;
        return c === r.isOver ? ia : null;
      } else
        return null;
    }
  else return null;
};
Ue({
  type: "supsub",
  htmlBuilder(a, e) {
    var t = Ti(a, e);
    if (t)
      return t(a, e);
    var {
      base: r,
      sup: n,
      sub: l
    } = a, c = V(r, e), h, m, v = e.fontMetrics(), w = 0, i = 0, u = r && $.isCharacterBox(r);
    if (n) {
      var f = e.havingStyle(e.style.sup());
      h = V(n, f, e), u || (w = c.height - f.fontMetrics().supDrop * f.sizeMultiplier / e.sizeMultiplier);
    }
    if (l) {
      var g = e.havingStyle(e.style.sub());
      m = V(l, g, e), u || (i = c.depth + g.fontMetrics().subDrop * g.sizeMultiplier / e.sizeMultiplier);
    }
    var S;
    e.style === E.DISPLAY ? S = v.sup1 : e.style.cramped ? S = v.sup3 : S = v.sup2;
    var _ = e.sizeMultiplier, x = D(0.5 / v.ptPerEm / _), M = null;
    if (m) {
      var C = a.base && a.base.type === "op" && a.base.name && (a.base.name === "\\oiint" || a.base.name === "\\oiiint");
      (c instanceof ge || C) && (M = D(-c.italic));
    }
    var L;
    if (h && m) {
      w = Math.max(w, S, h.depth + 0.25 * v.xHeight), i = Math.max(i, v.sub2);
      var H = v.defaultRuleThickness, P = 4 * H;
      if (w - h.depth - (m.height - i) < P) {
        i = P - (w - h.depth) + m.height;
        var G = 0.8 * v.xHeight - (w - h.depth);
        G > 0 && (w += G, i -= G);
      }
      var X = [{
        type: "elem",
        elem: m,
        shift: i,
        marginRight: x,
        marginLeft: M
      }, {
        type: "elem",
        elem: h,
        shift: -w,
        marginRight: x
      }];
      L = A.makeVList({
        positionType: "individualShift",
        children: X
      }, e);
    } else if (m) {
      i = Math.max(i, v.sub1, m.height - 0.8 * v.xHeight);
      var N = [{
        type: "elem",
        elem: m,
        marginLeft: M,
        marginRight: x
      }];
      L = A.makeVList({
        positionType: "shift",
        positionData: i,
        children: N
      }, e);
    } else if (h)
      w = Math.max(w, S, h.depth + 0.25 * v.xHeight), L = A.makeVList({
        positionType: "shift",
        positionData: -w,
        children: [{
          type: "elem",
          elem: h,
          marginRight: x
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var fe = dt(c, "right") || "mord";
    return A.makeSpan([fe], [c, A.makeSpan(["msupsub"], [L])], e);
  },
  mathmlBuilder(a, e) {
    var t = !1, r, n;
    a.base && a.base.type === "horizBrace" && (n = !!a.sup, n === a.base.isOver && (t = !0, r = a.base.isOver)), a.base && (a.base.type === "op" || a.base.type === "operatorname") && (a.base.parentIsSupSub = !0);
    var l = [W(a.base, e)];
    a.sub && l.push(W(a.sub, e)), a.sup && l.push(W(a.sup, e));
    var c;
    if (t)
      c = r ? "mover" : "munder";
    else if (a.sub)
      if (a.sup) {
        var v = a.base;
        v && v.type === "op" && v.limits && e.style === E.DISPLAY || v && v.type === "operatorname" && v.alwaysHandleSupSub && (e.style === E.DISPLAY || v.limits) ? c = "munderover" : c = "msubsup";
      } else {
        var m = a.base;
        m && m.type === "op" && m.limits && (e.style === E.DISPLAY || m.alwaysHandleSupSub) || m && m.type === "operatorname" && m.alwaysHandleSupSub && (m.limits || e.style === E.DISPLAY) ? c = "munder" : c = "msub";
      }
    else {
      var h = a.base;
      h && h.type === "op" && h.limits && (e.style === E.DISPLAY || h.alwaysHandleSupSub) || h && h.type === "operatorname" && h.alwaysHandleSupSub && (h.limits || e.style === E.DISPLAY) ? c = "mover" : c = "msup";
    }
    return new z.MathNode(c, l);
  }
});
Ue({
  type: "atom",
  htmlBuilder(a, e) {
    return A.mathsym(a.text, a.mode, e, ["m" + a.family]);
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mo", [be(a.text, a.mode)]);
    if (a.family === "bin") {
      var r = kt(a, e);
      r === "bold-italic" && t.setAttribute("mathvariant", r);
    } else a.family === "punct" ? t.setAttribute("separator", "true") : (a.family === "open" || a.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var ca = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Ue({
  type: "mathord",
  htmlBuilder(a, e) {
    return A.makeOrd(a, e, "mathord");
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mi", [be(a.text, a.mode, e)]), r = kt(a, e) || "italic";
    return r !== ca[t.type] && t.setAttribute("mathvariant", r), t;
  }
});
Ue({
  type: "textord",
  htmlBuilder(a, e) {
    return A.makeOrd(a, e, "textord");
  },
  mathmlBuilder(a, e) {
    var t = be(a.text, a.mode, e), r = kt(a, e) || "normal", n;
    return a.mode === "text" ? n = new z.MathNode("mtext", [t]) : /[0-9]/.test(a.text) ? n = new z.MathNode("mn", [t]) : a.text === "\\prime" ? n = new z.MathNode("mo", [t]) : n = new z.MathNode("mi", [t]), r !== ca[n.type] && n.setAttribute("mathvariant", r), n;
  }
});
var it = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, lt = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
Ue({
  type: "spacing",
  htmlBuilder(a, e) {
    if (lt.hasOwnProperty(a.text)) {
      var t = lt[a.text].className || "";
      if (a.mode === "text") {
        var r = A.makeOrd(a, e, "textord");
        return r.classes.push(t), r;
      } else
        return A.makeSpan(["mspace", t], [A.mathsym(a.text, a.mode, e)], e);
    } else {
      if (it.hasOwnProperty(a.text))
        return A.makeSpan(["mspace", it[a.text]], [], e);
      throw new B('Unknown type of space "' + a.text + '"');
    }
  },
  mathmlBuilder(a, e) {
    var t;
    if (lt.hasOwnProperty(a.text))
      t = new z.MathNode("mtext", [new z.TextNode(" ")]);
    else {
      if (it.hasOwnProperty(a.text))
        return new z.MathNode("mspace");
      throw new B('Unknown type of space "' + a.text + '"');
    }
    return t;
  }
});
var hr = () => {
  var a = new z.MathNode("mtd", []);
  return a.setAttribute("width", "50%"), a;
};
Ue({
  type: "tag",
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mtable", [new z.MathNode("mtr", [hr(), new z.MathNode("mtd", [Ve(a.body, e)]), hr(), new z.MathNode("mtd", [Ve(a.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var dr = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, mr = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Mi = {
  "\\textit": "textit",
  "\\textup": "textup"
}, fr = (a, e) => {
  var t = a.font;
  if (t) {
    if (dr[t])
      return e.withTextFontFamily(dr[t]);
    if (mr[t])
      return e.withTextFontWeight(mr[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Mi[t]);
};
I({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t,
      funcName: r
    } = a, n = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: ee(n),
      font: r
    };
  },
  htmlBuilder(a, e) {
    var t = fr(a, e), r = re(a.body, t, !0);
    return A.makeSpan(["mord", "text"], r, t);
  },
  mathmlBuilder(a, e) {
    var t = fr(a, e);
    return Ve(a.body, t);
  }
});
I({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = V(a.body, e), r = A.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, l = A.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return A.makeSpan(["mord", "underline"], [l], e);
  },
  mathmlBuilder(a, e) {
    var t = new z.MathNode("mo", [new z.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var r = new z.MathNode("munder", [W(a.body, e), t]);
    return r.setAttribute("accentunder", "true"), r;
  }
});
I({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(a, e) {
    var {
      parser: t
    } = a;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(a, e) {
    var t = V(a.body, e), r = e.fontMetrics().axisHeight, n = 0.5 * (t.height - r - (t.depth + r));
    return A.makeVList({
      positionType: "shift",
      positionData: n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(a, e) {
    return new z.MathNode("mpadded", [W(a.body, e)], ["vcenter"]);
  }
});
I({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(a, e, t) {
    throw new B("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(a, e) {
    for (var t = pr(a), r = [], n = e.havingStyle(e.style.text()), l = 0; l < t.length; l++) {
      var c = t[l];
      c === "~" && (c = "\\textasciitilde"), r.push(A.makeSymbol(c, "Typewriter-Regular", a.mode, n, ["mord", "texttt"]));
    }
    return A.makeSpan(["mord", "text"].concat(n.sizingClasses(e)), A.tryCombineChars(r), n);
  },
  mathmlBuilder(a, e) {
    var t = new z.TextNode(pr(a)), r = new z.MathNode("mtext", [t]);
    return r.setAttribute("mathvariant", "monospace"), r;
  }
});
var pr = (a) => a.body.replace(/ /g, a.star ? "␣" : " "), Fe = qr, ha = `[ \r
	]`, zi = "\\\\[a-zA-Z@]+", Bi = "\\\\[^\uD800-\uDFFF]", Di = "(" + zi + ")" + ha + "*", Ci = `\\\\(
|[ \r	]+
?)[ \r	]*`, vt = "[̀-ͯ]", Ii = new RegExp(vt + "+$"), qi = "(" + ha + "+)|" + // whitespace
(Ci + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(vt + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(vt + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Di) + // \macroName + spaces
("|" + Bi + ")");
class vr {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(qi, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new de("EOF", new oe(this, t, t));
    var r = this.tokenRegex.exec(e);
    if (r === null || r.index !== t)
      throw new B("Unexpected character: '" + e[t] + "'", new de(e[t], new oe(this, t, t + 1)));
    var n = r[6] || r[3] || (r[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var l = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return l === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = l + 1, this.lex();
    }
    return new de(n, new oe(this, t, this.tokenRegex.lastIndex));
  }
}
class Ni {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new B("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, r) {
    if (r === void 0 && (r = !1), r) {
      for (var n = 0; n < this.undefStack.length; n++)
        delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var l = this.undefStack[this.undefStack.length - 1];
      l && !l.hasOwnProperty(e) && (l[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var Oi = ea;
p("\\noexpand", function(a) {
  var e = a.popToken();
  return a.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
p("\\expandafter", function(a) {
  var e = a.popToken();
  return a.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
p("\\@firstoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
p("\\@secondoftwo", function(a) {
  var e = a.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
p("\\@ifnextchar", function(a) {
  var e = a.consumeArgs(3);
  a.consumeSpaces();
  var t = a.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
p("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
p("\\TextOrMath", function(a) {
  var e = a.consumeArgs(2);
  return a.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var gr = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
p("\\char", function(a) {
  var e = a.popToken(), t, r = "";
  if (e.text === "'")
    t = 8, e = a.popToken();
  else if (e.text === '"')
    t = 16, e = a.popToken();
  else if (e.text === "`")
    if (e = a.popToken(), e.text[0] === "\\")
      r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new B("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (r = gr[e.text], r == null || r >= t)
      throw new B("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = gr[a.future().text]) != null && n < t; )
      r *= t, r += n, a.popToken();
  }
  return "\\@char{" + r + "}";
});
var qt = (a, e, t, r) => {
  var n = a.consumeArg().tokens;
  if (n.length !== 1)
    throw new B("\\newcommand's first argument must be a macro name");
  var l = n[0].text, c = a.isDefined(l);
  if (c && !e)
    throw new B("\\newcommand{" + l + "} attempting to redefine " + (l + "; use \\renewcommand"));
  if (!c && !t)
    throw new B("\\renewcommand{" + l + "} when command " + l + " does not yet exist; use \\newcommand");
  var h = 0;
  if (n = a.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var m = "", v = a.expandNextToken(); v.text !== "]" && v.text !== "EOF"; )
      m += v.text, v = a.expandNextToken();
    if (!m.match(/^\s*[0-9]+\s*$/))
      throw new B("Invalid number of arguments: " + m);
    h = parseInt(m), n = a.consumeArg().tokens;
  }
  return c && r || a.macros.set(l, {
    tokens: n,
    numArgs: h
  }), "";
};
p("\\newcommand", (a) => qt(a, !1, !0, !1));
p("\\renewcommand", (a) => qt(a, !0, !1, !1));
p("\\providecommand", (a) => qt(a, !0, !0, !0));
p("\\message", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
p("\\errmessage", (a) => {
  var e = a.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
p("\\show", (a) => {
  var e = a.popToken(), t = e.text;
  return console.log(e, a.macros.get(t), Fe[t], U.math[t], U.text[t]), "";
});
p("\\bgroup", "{");
p("\\egroup", "}");
p("~", "\\nobreakspace");
p("\\lq", "`");
p("\\rq", "'");
p("\\aa", "\\r a");
p("\\AA", "\\r A");
p("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
p("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
p("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
p("ℬ", "\\mathscr{B}");
p("ℰ", "\\mathscr{E}");
p("ℱ", "\\mathscr{F}");
p("ℋ", "\\mathscr{H}");
p("ℐ", "\\mathscr{I}");
p("ℒ", "\\mathscr{L}");
p("ℳ", "\\mathscr{M}");
p("ℛ", "\\mathscr{R}");
p("ℭ", "\\mathfrak{C}");
p("ℌ", "\\mathfrak{H}");
p("ℨ", "\\mathfrak{Z}");
p("\\Bbbk", "\\Bbb{k}");
p("·", "\\cdotp");
p("\\llap", "\\mathllap{\\textrm{#1}}");
p("\\rlap", "\\mathrlap{\\textrm{#1}}");
p("\\clap", "\\mathclap{\\textrm{#1}}");
p("\\mathstrut", "\\vphantom{(}");
p("\\underbar", "\\underline{\\text{#1}}");
p("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
p("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
p("\\ne", "\\neq");
p("≠", "\\neq");
p("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
p("∉", "\\notin");
p("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
p("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
p("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
p("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
p("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
p("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
p("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
p("⟂", "\\perp");
p("‼", "\\mathclose{!\\mkern-0.8mu!}");
p("∌", "\\notni");
p("⌜", "\\ulcorner");
p("⌝", "\\urcorner");
p("⌞", "\\llcorner");
p("⌟", "\\lrcorner");
p("©", "\\copyright");
p("®", "\\textregistered");
p("️", "\\textregistered");
p("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
p("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
p("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
p("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
p("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
p("⋮", "\\vdots");
p("\\varGamma", "\\mathit{\\Gamma}");
p("\\varDelta", "\\mathit{\\Delta}");
p("\\varTheta", "\\mathit{\\Theta}");
p("\\varLambda", "\\mathit{\\Lambda}");
p("\\varXi", "\\mathit{\\Xi}");
p("\\varPi", "\\mathit{\\Pi}");
p("\\varSigma", "\\mathit{\\Sigma}");
p("\\varUpsilon", "\\mathit{\\Upsilon}");
p("\\varPhi", "\\mathit{\\Phi}");
p("\\varPsi", "\\mathit{\\Psi}");
p("\\varOmega", "\\mathit{\\Omega}");
p("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
p("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
p("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
p("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
p("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
p("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
p("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
p("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var br = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
p("\\dots", function(a) {
  var e = "\\dotso", t = a.expandAfterFuture().text;
  return t in br ? e = br[t] : (t.slice(0, 4) === "\\not" || t in U.math && ["bin", "rel"].includes(U.math[t].group)) && (e = "\\dotsb"), e;
});
var Nt = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
p("\\dotso", function(a) {
  var e = a.future().text;
  return e in Nt ? "\\ldots\\," : "\\ldots";
});
p("\\dotsc", function(a) {
  var e = a.future().text;
  return e in Nt && e !== "," ? "\\ldots\\," : "\\ldots";
});
p("\\cdots", function(a) {
  var e = a.future().text;
  return e in Nt ? "\\@cdots\\," : "\\@cdots";
});
p("\\dotsb", "\\cdots");
p("\\dotsm", "\\cdots");
p("\\dotsi", "\\!\\cdots");
p("\\dotsx", "\\ldots\\,");
p("\\DOTSI", "\\relax");
p("\\DOTSB", "\\relax");
p("\\DOTSX", "\\relax");
p("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
p("\\,", "\\tmspace+{3mu}{.1667em}");
p("\\thinspace", "\\,");
p("\\>", "\\mskip{4mu}");
p("\\:", "\\tmspace+{4mu}{.2222em}");
p("\\medspace", "\\:");
p("\\;", "\\tmspace+{5mu}{.2777em}");
p("\\thickspace", "\\;");
p("\\!", "\\tmspace-{3mu}{.1667em}");
p("\\negthinspace", "\\!");
p("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
p("\\negthickspace", "\\tmspace-{5mu}{.277em}");
p("\\enspace", "\\kern.5em ");
p("\\enskip", "\\hskip.5em\\relax");
p("\\quad", "\\hskip1em\\relax");
p("\\qquad", "\\hskip2em\\relax");
p("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
p("\\tag@paren", "\\tag@literal{({#1})}");
p("\\tag@literal", (a) => {
  if (a.macros.get("\\df@tag"))
    throw new B("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
p("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
p("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
p("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
p("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
p("\\newline", "\\\\\\relax");
p("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var da = D(Se["Main-Regular"][84][1] - 0.7 * Se["Main-Regular"][65][1]);
p("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + da + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
p("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + da + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
p("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
p("\\@hspace", "\\hskip #1\\relax");
p("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
p("\\ordinarycolon", ":");
p("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
p("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
p("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
p("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
p("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
p("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
p("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
p("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
p("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
p("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
p("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
p("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
p("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
p("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
p("∷", "\\dblcolon");
p("∹", "\\eqcolon");
p("≔", "\\coloneqq");
p("≕", "\\eqqcolon");
p("⩴", "\\Coloneqq");
p("\\ratio", "\\vcentcolon");
p("\\coloncolon", "\\dblcolon");
p("\\colonequals", "\\coloneqq");
p("\\coloncolonequals", "\\Coloneqq");
p("\\equalscolon", "\\eqqcolon");
p("\\equalscoloncolon", "\\Eqqcolon");
p("\\colonminus", "\\coloneq");
p("\\coloncolonminus", "\\Coloneq");
p("\\minuscolon", "\\eqcolon");
p("\\minuscoloncolon", "\\Eqcolon");
p("\\coloncolonapprox", "\\Colonapprox");
p("\\coloncolonsim", "\\Colonsim");
p("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
p("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
p("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
p("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
p("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
p("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
p("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
p("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
p("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
p("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
p("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
p("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
p("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
p("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
p("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
p("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
p("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
p("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
p("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
p("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
p("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
p("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
p("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
p("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
p("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
p("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
p("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
p("\\imath", "\\html@mathml{\\@imath}{ı}");
p("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
p("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
p("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
p("⟦", "\\llbracket");
p("⟧", "\\rrbracket");
p("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
p("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
p("⦃", "\\lBrace");
p("⦄", "\\rBrace");
p("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
p("⦵", "\\minuso");
p("\\darr", "\\downarrow");
p("\\dArr", "\\Downarrow");
p("\\Darr", "\\Downarrow");
p("\\lang", "\\langle");
p("\\rang", "\\rangle");
p("\\uarr", "\\uparrow");
p("\\uArr", "\\Uparrow");
p("\\Uarr", "\\Uparrow");
p("\\N", "\\mathbb{N}");
p("\\R", "\\mathbb{R}");
p("\\Z", "\\mathbb{Z}");
p("\\alef", "\\aleph");
p("\\alefsym", "\\aleph");
p("\\Alpha", "\\mathrm{A}");
p("\\Beta", "\\mathrm{B}");
p("\\bull", "\\bullet");
p("\\Chi", "\\mathrm{X}");
p("\\clubs", "\\clubsuit");
p("\\cnums", "\\mathbb{C}");
p("\\Complex", "\\mathbb{C}");
p("\\Dagger", "\\ddagger");
p("\\diamonds", "\\diamondsuit");
p("\\empty", "\\emptyset");
p("\\Epsilon", "\\mathrm{E}");
p("\\Eta", "\\mathrm{H}");
p("\\exist", "\\exists");
p("\\harr", "\\leftrightarrow");
p("\\hArr", "\\Leftrightarrow");
p("\\Harr", "\\Leftrightarrow");
p("\\hearts", "\\heartsuit");
p("\\image", "\\Im");
p("\\infin", "\\infty");
p("\\Iota", "\\mathrm{I}");
p("\\isin", "\\in");
p("\\Kappa", "\\mathrm{K}");
p("\\larr", "\\leftarrow");
p("\\lArr", "\\Leftarrow");
p("\\Larr", "\\Leftarrow");
p("\\lrarr", "\\leftrightarrow");
p("\\lrArr", "\\Leftrightarrow");
p("\\Lrarr", "\\Leftrightarrow");
p("\\Mu", "\\mathrm{M}");
p("\\natnums", "\\mathbb{N}");
p("\\Nu", "\\mathrm{N}");
p("\\Omicron", "\\mathrm{O}");
p("\\plusmn", "\\pm");
p("\\rarr", "\\rightarrow");
p("\\rArr", "\\Rightarrow");
p("\\Rarr", "\\Rightarrow");
p("\\real", "\\Re");
p("\\reals", "\\mathbb{R}");
p("\\Reals", "\\mathbb{R}");
p("\\Rho", "\\mathrm{P}");
p("\\sdot", "\\cdot");
p("\\sect", "\\S");
p("\\spades", "\\spadesuit");
p("\\sub", "\\subset");
p("\\sube", "\\subseteq");
p("\\supe", "\\supseteq");
p("\\Tau", "\\mathrm{T}");
p("\\thetasym", "\\vartheta");
p("\\weierp", "\\wp");
p("\\Zeta", "\\mathrm{Z}");
p("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
p("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
p("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
p("\\bra", "\\mathinner{\\langle{#1}|}");
p("\\ket", "\\mathinner{|{#1}\\rangle}");
p("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
p("\\Bra", "\\left\\langle#1\\right|");
p("\\Ket", "\\left|#1\\right\\rangle");
var ma = (a) => (e) => {
  var t = e.consumeArg().tokens, r = e.consumeArg().tokens, n = e.consumeArg().tokens, l = e.consumeArg().tokens, c = e.macros.get("|"), h = e.macros.get("\\|");
  e.macros.beginGroup();
  var m = (i) => (u) => {
    a && (u.macros.set("|", c), n.length && u.macros.set("\\|", h));
    var f = i;
    if (!i && n.length) {
      var g = u.future();
      g.text === "|" && (u.popToken(), f = !0);
    }
    return {
      tokens: f ? n : r,
      numArgs: 0
    };
  };
  e.macros.set("|", m(!1)), n.length && e.macros.set("\\|", m(!0));
  var v = e.consumeArg().tokens, w = e.expandTokens([
    ...l,
    ...v,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: w.reverse(),
    numArgs: 0
  };
};
p("\\bra@ket", ma(!1));
p("\\bra@set", ma(!0));
p("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
p("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
p("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
p("\\angln", "{\\angl n}");
p("\\blue", "\\textcolor{##6495ed}{#1}");
p("\\orange", "\\textcolor{##ffa500}{#1}");
p("\\pink", "\\textcolor{##ff00af}{#1}");
p("\\red", "\\textcolor{##df0030}{#1}");
p("\\green", "\\textcolor{##28ae7b}{#1}");
p("\\gray", "\\textcolor{gray}{#1}");
p("\\purple", "\\textcolor{##9d38bd}{#1}");
p("\\blueA", "\\textcolor{##ccfaff}{#1}");
p("\\blueB", "\\textcolor{##80f6ff}{#1}");
p("\\blueC", "\\textcolor{##63d9ea}{#1}");
p("\\blueD", "\\textcolor{##11accd}{#1}");
p("\\blueE", "\\textcolor{##0c7f99}{#1}");
p("\\tealA", "\\textcolor{##94fff5}{#1}");
p("\\tealB", "\\textcolor{##26edd5}{#1}");
p("\\tealC", "\\textcolor{##01d1c1}{#1}");
p("\\tealD", "\\textcolor{##01a995}{#1}");
p("\\tealE", "\\textcolor{##208170}{#1}");
p("\\greenA", "\\textcolor{##b6ffb0}{#1}");
p("\\greenB", "\\textcolor{##8af281}{#1}");
p("\\greenC", "\\textcolor{##74cf70}{#1}");
p("\\greenD", "\\textcolor{##1fab54}{#1}");
p("\\greenE", "\\textcolor{##0d923f}{#1}");
p("\\goldA", "\\textcolor{##ffd0a9}{#1}");
p("\\goldB", "\\textcolor{##ffbb71}{#1}");
p("\\goldC", "\\textcolor{##ff9c39}{#1}");
p("\\goldD", "\\textcolor{##e07d10}{#1}");
p("\\goldE", "\\textcolor{##a75a05}{#1}");
p("\\redA", "\\textcolor{##fca9a9}{#1}");
p("\\redB", "\\textcolor{##ff8482}{#1}");
p("\\redC", "\\textcolor{##f9685d}{#1}");
p("\\redD", "\\textcolor{##e84d39}{#1}");
p("\\redE", "\\textcolor{##bc2612}{#1}");
p("\\maroonA", "\\textcolor{##ffbde0}{#1}");
p("\\maroonB", "\\textcolor{##ff92c6}{#1}");
p("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
p("\\maroonD", "\\textcolor{##ca337c}{#1}");
p("\\maroonE", "\\textcolor{##9e034e}{#1}");
p("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
p("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
p("\\purpleC", "\\textcolor{##aa87ff}{#1}");
p("\\purpleD", "\\textcolor{##7854ab}{#1}");
p("\\purpleE", "\\textcolor{##543b78}{#1}");
p("\\mintA", "\\textcolor{##f5f9e8}{#1}");
p("\\mintB", "\\textcolor{##edf2df}{#1}");
p("\\mintC", "\\textcolor{##e0e5cc}{#1}");
p("\\grayA", "\\textcolor{##f6f7f7}{#1}");
p("\\grayB", "\\textcolor{##f0f1f2}{#1}");
p("\\grayC", "\\textcolor{##e3e5e6}{#1}");
p("\\grayD", "\\textcolor{##d6d8da}{#1}");
p("\\grayE", "\\textcolor{##babec2}{#1}");
p("\\grayF", "\\textcolor{##888d93}{#1}");
p("\\grayG", "\\textcolor{##626569}{#1}");
p("\\grayH", "\\textcolor{##3b3e40}{#1}");
p("\\grayI", "\\textcolor{##21242c}{#1}");
p("\\kaBlue", "\\textcolor{##314453}{#1}");
p("\\kaGreen", "\\textcolor{##71B307}{#1}");
var fa = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class Ei {
  constructor(e, t, r) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Ni(Oi, t.macros), this.mode = r, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new vr(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, r, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: n,
        end: r
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: n,
        start: t,
        end: r
      } = this.consumeArg());
    return this.pushToken(new de("EOF", r.loc)), this.pushTokens(n), new de("", oe.range(t, r));
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], r = e && e.length > 0;
    r || this.consumeSpaces();
    var n = this.future(), l, c = 0, h = 0;
    do {
      if (l = this.popToken(), t.push(l), l.text === "{")
        ++c;
      else if (l.text === "}") {
        if (--c, c === -1)
          throw new B("Extra }", l);
      } else if (l.text === "EOF")
        throw new B("Unexpected end of input in a macro argument, expected '" + (e && r ? e[h] : "}") + "'", l);
      if (e && r)
        if ((c === 0 || c === 1 && e[h] === "{") && l.text === e[h]) {
          if (++h, h === e.length) {
            t.splice(-h, h);
            break;
          }
        } else
          h = 0;
    } while (c !== 0 || r);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: n,
      end: l
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new B("The length of delimiters doesn't match the number of args!");
      for (var r = t[0], n = 0; n < r.length; n++) {
        var l = this.popToken();
        if (r[n] !== l.text)
          throw new B("Use of the macro doesn't match its definition", l);
      }
    }
    for (var c = [], h = 0; h < e; h++)
      c.push(this.consumeArg(t && t[h + 1]).tokens);
    return c;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new B("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), r = t.text, n = t.noexpand ? null : this._getExpansion(r);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && r[0] === "\\" && !this.isDefined(r))
        throw new B("Undefined control sequence: " + r);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var l = n.tokens, c = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      l = l.slice();
      for (var h = l.length - 1; h >= 0; --h) {
        var m = l[h];
        if (m.text === "#") {
          if (h === 0)
            throw new B("Incomplete placeholder at end of macro body", m);
          if (m = l[--h], m.text === "#")
            l.splice(h + 1, 1);
          else if (/^[1-9]$/.test(m.text))
            l.splice(h, 2, ...c[+m.text - 1]);
          else
            throw new B("Not a valid argument number", m);
        }
      }
    }
    return this.pushTokens(l), l.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new de(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], r = this.stack.length;
    for (this.pushTokens(e); this.stack.length > r; )
      if (this.expandOnce(!0) === !1) {
        var n = this.stack.pop();
        n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(n);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((r) => r.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var r = this.lexer.catcodes[e];
      if (r != null && r !== 13)
        return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var l = 0;
      if (n.indexOf("#") !== -1)
        for (var c = n.replace(/##/g, ""); c.indexOf("#" + (l + 1)) !== -1; )
          ++l;
      for (var h = new vr(n, this.settings), m = [], v = h.lex(); v.text !== "EOF"; )
        m.push(v), v = h.lex();
      m.reverse();
      var w = {
        tokens: m,
        numArgs: l
      };
      return w;
    }
    return n;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || Fe.hasOwnProperty(e) || U.math.hasOwnProperty(e) || U.text.hasOwnProperty(e) || fa.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Fe.hasOwnProperty(e) && !Fe[e].primitive;
  }
}
var yr = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, T0 = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), st = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, wr = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class F0 {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Ei(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new B("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new de("}")), this.gullet.pushTokens(e);
    var r = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, r;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence than infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var r = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (F0.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && Fe[n.text] && Fe[n.text].infix)
        break;
      var l = this.parseAtom(t);
      if (l) {
        if (l.type === "internal")
          continue;
      } else break;
      r.push(l);
    }
    return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, r, n = 0; n < e.length; n++)
      if (e[n].type === "infix") {
        if (t !== -1)
          throw new B("only one infix operator per group", e[n].token);
        t = n, r = e[n].replaceWith;
      }
    if (t !== -1 && r) {
      var l, c, h = e.slice(0, t), m = e.slice(t + 1);
      h.length === 1 && h[0].type === "ordgroup" ? l = h[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: h
      }, m.length === 1 && m[0].type === "ordgroup" ? c = m[0] : c = {
        type: "ordgroup",
        mode: this.mode,
        body: m
      };
      var v;
      return r === "\\\\abovefrac" ? v = this.callFunction(r, [l, e[t], c], []) : v = this.callFunction(r, [l, c], []), [v];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), r = t.text;
    this.consume(), this.consumeSpaces();
    var n;
    do {
      var l;
      n = this.parseGroup(e);
    } while (((l = n) == null ? void 0 : l.type) === "internal");
    if (!n)
      throw new B("Expected group after '" + r + "'", t);
    return n;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], r = 0; r < e.length; r++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
    var n = {
      type: "text",
      mode: this.mode,
      body: t
    }, l = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [n]
    };
    return l;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (t?.type === "internal" || this.mode === "text")
      return t;
    for (var r, n; ; ) {
      this.consumeSpaces();
      var l = this.fetch();
      if (l.text === "\\limits" || l.text === "\\nolimits") {
        if (t && t.type === "op") {
          var c = l.text === "\\limits";
          t.limits = c, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = l.text === "\\limits");
        else
          throw new B("Limit controls must follow a math operator", l);
        this.consume();
      } else if (l.text === "^") {
        if (r)
          throw new B("Double superscript", l);
        r = this.handleSupSubscript("superscript");
      } else if (l.text === "_") {
        if (n)
          throw new B("Double subscript", l);
        n = this.handleSupSubscript("subscript");
      } else if (l.text === "'") {
        if (r)
          throw new B("Double superscript", l);
        var h = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, m = [h];
        for (this.consume(); this.fetch().text === "'"; )
          m.push(h), this.consume();
        this.fetch().text === "^" && m.push(this.handleSupSubscript("superscript")), r = {
          type: "ordgroup",
          mode: this.mode,
          body: m
        };
      } else if (T0[l.text]) {
        var v = yr.test(l.text), w = [];
        for (w.push(new de(T0[l.text])), this.consume(); ; ) {
          var i = this.fetch().text;
          if (!T0[i] || yr.test(i) !== v)
            break;
          w.unshift(new de(T0[i])), this.consume();
        }
        var u = this.subparse(w);
        v ? n = {
          type: "ordgroup",
          mode: "math",
          body: u
        } : r = {
          type: "ordgroup",
          mode: "math",
          body: u
        };
      } else
        break;
    }
    return r || n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: r,
      sub: n
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var r = this.fetch(), n = r.text, l = Fe[n];
    if (!l)
      return null;
    if (this.consume(), t && t !== "atom" && !l.allowedInArgument)
      throw new B("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), r);
    if (this.mode === "text" && !l.allowedInText)
      throw new B("Can't use function '" + n + "' in text mode", r);
    if (this.mode === "math" && l.allowedInMath === !1)
      throw new B("Can't use function '" + n + "' in math mode", r);
    var {
      args: c,
      optArgs: h
    } = this.parseArguments(n, l);
    return this.callFunction(n, c, h, r, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, r, n, l) {
    var c = {
      funcName: e,
      parser: this,
      token: n,
      breakOnTokenText: l
    }, h = Fe[e];
    if (h && h.handler)
      return h.handler(c, t, r);
    throw new B("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var r = t.numArgs + t.numOptionalArgs;
    if (r === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var n = [], l = [], c = 0; c < r; c++) {
      var h = t.argTypes && t.argTypes[c], m = c < t.numOptionalArgs;
      (t.primitive && h == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && c === 1 && l[0] == null) && (h = "primitive");
      var v = this.parseGroupOfType("argument to '" + e + "'", h, m);
      if (m)
        l.push(v);
      else if (v != null)
        n.push(v);
      else
        throw new B("Null argument, please report this as a bug");
    }
    return {
      args: n,
      optArgs: l
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, r) {
    switch (t) {
      case "color":
        return this.parseColorGroup(r);
      case "size":
        return this.parseSizeGroup(r);
      case "url":
        return this.parseUrlGroup(r);
      case "math":
      case "text":
        return this.parseArgumentGroup(r, t);
      case "hbox": {
        var n = this.parseArgumentGroup(r, "text");
        return n != null ? {
          type: "styling",
          mode: n.mode,
          body: [n],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var l = this.parseStringGroup("raw", r);
        return l != null ? {
          type: "raw",
          mode: "text",
          string: l.text
        } : null;
      }
      case "primitive": {
        if (r)
          throw new B("A primitive argument cannot be optional");
        var c = this.parseGroup(e);
        if (c == null)
          throw new B("Expected group as " + e, this.fetch());
        return c;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(r);
      default:
        throw new B("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var r = this.gullet.scanArgument(t);
    if (r == null)
      return null;
    for (var n = "", l; (l = this.fetch()).text !== "EOF"; )
      n += l.text, this.consume();
    return this.consume(), r.text = n, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var r = this.fetch(), n = r, l = "", c; (c = this.fetch()).text !== "EOF" && e.test(l + c.text); )
      n = c, l += n.text, this.consume();
    if (l === "")
      throw new B("Invalid " + t + ": '" + r.text + "'", r);
    return r.range(n, l);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var r = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!r)
      throw new B("Invalid color: '" + t.text + "'", t);
    var n = r[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {
      type: "color-token",
      mode: this.mode,
      color: n
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, r = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", r = !0);
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n)
      throw new B("Invalid size: '" + t.text + "'", t);
    var l = {
      number: +(n[1] + n[2]),
      // sign + magnitude, cast to number
      unit: n[3]
    };
    if (!_r(l))
      throw new B("Invalid unit: '" + l.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: l,
      isBlank: r
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: r
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var l = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var c = {
      type: "ordgroup",
      mode: this.mode,
      loc: r.loc,
      body: l
    };
    return t && this.switchMode(n), c;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var r = this.fetch(), n = r.text, l;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var c = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var h = this.parseExpression(!1, c), m = this.fetch();
      this.expect(c), this.gullet.endGroup(), l = {
        type: "ordgroup",
        mode: this.mode,
        loc: oe.range(r, m),
        body: h,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: n === "\\begingroup" || void 0
      };
    } else if (l = this.parseFunction(t, e) || this.parseSymbol(), l == null && n[0] === "\\" && !fa.hasOwnProperty(n)) {
      if (this.settings.throwOnError)
        throw new B("Undefined control sequence: " + n, r);
      l = this.formatUnsupportedCmd(n), this.consume();
    }
    return l;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, r = 0; r < t; ++r) {
      var n = e[r], l = n.text;
      l === "-" && e[r + 1].text === "-" && (r + 1 < t && e[r + 2].text === "-" ? (e.splice(r, 3, {
        type: "textord",
        mode: "text",
        loc: oe.range(n, e[r + 2]),
        text: "---"
      }), t -= 2) : (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: oe.range(n, e[r + 1]),
        text: "--"
      }), t -= 1)), (l === "'" || l === "`") && e[r + 1].text === l && (e.splice(r, 2, {
        type: "textord",
        mode: "text",
        loc: oe.range(n, e[r + 1]),
        text: l + l
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var r = t.slice(5), n = r.charAt(0) === "*";
      if (n && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1))
        throw new B(`\\verb assertion failed --
                    please report what input caused this bug`);
      return r = r.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: r,
        star: n
      };
    }
    wr.hasOwnProperty(t[0]) && !U[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = wr[t[0]] + t.slice(1));
    var l = Ii.exec(t);
    l && (t = t.substring(0, l.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var c;
    if (U[this.mode][t]) {
      this.settings.strict && this.mode === "math" && ht.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var h = U[this.mode][t].group, m = oe.range(e), v;
      if (_n.hasOwnProperty(h)) {
        var w = h;
        v = {
          type: "atom",
          mode: this.mode,
          family: w,
          loc: m,
          text: t
        };
      } else
        v = {
          type: h,
          mode: this.mode,
          loc: m,
          text: t
        };
      c = v;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (kr(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), c = {
        type: "textord",
        mode: "text",
        loc: oe.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), l)
      for (var i = 0; i < l[0].length; i++) {
        var u = l[0][i];
        if (!st[u])
          throw new B("Unknown accent ' " + u + "'", e);
        var f = st[u][this.mode] || st[u].text;
        if (!f)
          throw new B("Accent " + u + " unsupported in " + this.mode + " mode", e);
        c = {
          type: "accent",
          mode: this.mode,
          loc: oe.range(e),
          label: f,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: c
        };
      }
    return c;
  }
}
F0.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var Ot = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var r = new F0(e, t);
  delete r.gullet.macros.current["\\df@tag"];
  var n = r.parse();
  if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new B("\\tag works only in display equations");
    n = [{
      type: "tag",
      mode: "text",
      body: n,
      tag: r.subparse([new de("\\df@tag")])
    }];
  }
  return n;
}, pa = function(e, t, r) {
  t.textContent = "";
  var n = Et(e, r).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), pa = function() {
  throw new B("KaTeX doesn't work in quirks mode.");
});
var Li = function(e, t) {
  var r = Et(e, t).toMarkup();
  return r;
}, Ri = function(e, t) {
  var r = new gt(t);
  return Ot(e, r);
}, va = function(e, t, r) {
  if (r.throwOnError || !(e instanceof B))
    throw e;
  var n = A.makeSpan(["katex-error"], [new ge(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + r.errorColor), n;
}, Et = function(e, t) {
  var r = new gt(t);
  try {
    var n = Ot(e, r);
    return Un(n, e, r);
  } catch (l) {
    return va(l, e, r);
  }
}, Hi = function(e, t) {
  var r = new gt(t);
  try {
    var n = Ot(e, r);
    return Yn(n, e, r);
  } catch (l) {
    return va(l, e, r);
  }
}, Fi = "0.16.28", Pi = {
  Span: d0,
  Anchor: wt,
  SymbolNode: ge,
  SvgNode: Ce,
  PathNode: Ge,
  LineNode: ct
}, xr = {
  /**
   * Current KaTeX version
   */
  version: Fi,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: pa,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: Li,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: B,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: M0,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: Ri,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Et,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: Hi,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: vn,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: s,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: I,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: p,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: Pi
}, Gi = function(e, t, r) {
  for (var n = r, l = 0, c = e.length; n < t.length; ) {
    var h = t[n];
    if (l <= 0 && t.slice(n, n + c) === e)
      return n;
    h === "\\" ? n++ : h === "{" ? l++ : h === "}" && l--, n++;
  }
  return -1;
}, Vi = function(e) {
  return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}, $i = /^\\begin{/, Xi = function(e, t) {
  for (var r, n = [], l = new RegExp("(" + t.map((v) => Vi(v.left)).join("|") + ")"); r = e.search(l), r !== -1; ) {
    r > 0 && (n.push({
      type: "text",
      data: e.slice(0, r)
    }), e = e.slice(r));
    var c = t.findIndex((v) => e.startsWith(v.left));
    if (r = Gi(t[c].right, e, t[c].left.length), r === -1)
      break;
    var h = e.slice(0, r + t[c].right.length), m = $i.test(h) ? h : e.slice(t[c].left.length, r);
    n.push({
      type: "math",
      data: m,
      rawData: h,
      display: t[c].display
    }), e = e.slice(r + t[c].right.length);
  }
  return e !== "" && n.push({
    type: "text",
    data: e
  }), n;
}, Wi = function(e, t) {
  var r = Xi(e, t.delimiters);
  if (r.length === 1 && r[0].type === "text")
    return null;
  for (var n = document.createDocumentFragment(), l = 0; l < r.length; l++)
    if (r[l].type === "text")
      n.appendChild(document.createTextNode(r[l].data));
    else {
      var c = document.createElement("span"), h = r[l].data;
      t.displayMode = r[l].display;
      try {
        t.preProcess && (h = t.preProcess(h)), xr.render(h, c, t);
      } catch (m) {
        if (!(m instanceof xr.ParseError))
          throw m;
        t.errorCallback("KaTeX auto-render: Failed to parse `" + r[l].data + "` with ", m), n.appendChild(document.createTextNode(r[l].rawData));
        continue;
      }
      n.appendChild(c);
    }
  return n;
}, Ui = function a(e, t) {
  for (var r = 0; r < e.childNodes.length; r++) {
    var n = e.childNodes[r];
    if (n.nodeType === 3) {
      for (var l = n.textContent, c = n.nextSibling, h = 0; c && c.nodeType === Node.TEXT_NODE; )
        l += c.textContent, c = c.nextSibling, h++;
      var m = Wi(l, t);
      if (m) {
        for (var v = 0; v < h; v++)
          n.nextSibling.remove();
        r += m.childNodes.length - 1, e.replaceChild(m, n);
      } else
        r += h;
    } else n.nodeType === 1 && (function() {
      var w = " " + n.className + " ", i = t.ignoredTags.indexOf(n.nodeName.toLowerCase()) === -1 && t.ignoredClasses.every((u) => w.indexOf(" " + u + " ") === -1);
      i && a(n, t);
    })();
  }
}, Yi = function(e, t) {
  if (!e)
    throw new Error("No element provided to render");
  var r = {};
  for (var n in t)
    t.hasOwnProperty(n) && (r[n] = t[n]);
  r.delimiters = r.delimiters || [
    {
      left: "$$",
      right: "$$",
      display: !0
    },
    {
      left: "\\(",
      right: "\\)",
      display: !1
    },
    // LaTeX uses $…$, but it ruins the display of normal `$` in text:
    // {left: "$", right: "$", display: false},
    // $ must come after $$
    // Render AMS environments even if outside $$…$$ delimiters.
    {
      left: "\\begin{equation}",
      right: "\\end{equation}",
      display: !0
    },
    {
      left: "\\begin{align}",
      right: "\\end{align}",
      display: !0
    },
    {
      left: "\\begin{alignat}",
      right: "\\end{alignat}",
      display: !0
    },
    {
      left: "\\begin{gather}",
      right: "\\end{gather}",
      display: !0
    },
    {
      left: "\\begin{CD}",
      right: "\\end{CD}",
      display: !0
    },
    {
      left: "\\[",
      right: "\\]",
      display: !0
    }
  ], r.ignoredTags = r.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], r.ignoredClasses = r.ignoredClasses || [], r.errorCallback = r.errorCallback || console.error, r.macros = r.macros || {}, Ui(e, r);
};
function ji(a) {
  a && Yi(a, {
    delimiters: [
      { left: "$$", right: "$$", display: !0 },
      { left: "$", right: "$", display: !1 }
    ],
    throwOnError: !1
  });
}
function r1({
  player: a,
  timer: e,
  duration: t,
  ui: r
}) {
  const {
    playBtn: n,
    pauseBtn: l,
    stopBtn: c,
    scrub: h,
    timeEl: m
  } = r;
  h.max = t;
  const v = {
    currentTime: 0
  };
  function w() {
    const i = v.currentTime;
    a.renderAt(i), ji(document.querySelector("#app")), m.textContent = `${i.toFixed(1)}s`, h.value = i;
  }
  l0.setDraw(w), l0.start(() => {
    const i = e.now();
    if (i >= t) {
      e.pause(), v.currentTime = t, l0.draw();
      return;
    }
    v.currentTime = i, l0.draw();
  }), n.onclick = () => {
    e.play();
  }, l.onclick = () => {
    e.pause();
  }, c.onclick = () => {
    e.pause(), e.seek(0), v.currentTime = 0, l0.draw();
  }, h.oninput = (i) => {
    e.seek(+i.target.value), e.pause();
  };
}
export {
  e1 as createAudioTimer,
  t1 as createSilentTimer,
  Zi as createTaleemPlayer,
  Qi as getDeckEndTime,
  Ji as resolveAssetPaths,
  Ki as resolveBackground,
  r1 as startLoop
};
