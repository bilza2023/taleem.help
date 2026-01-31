var yn = Object.defineProperty;
var xn = (r, e, t) => e in r ? yn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var ye = (r, e, t) => xn(r, typeof e != "symbol" ? e + "" : e, t);
function q() {
}
function wn(r, e) {
  for (const t in e) r[t] = e[t];
  return (
    /** @type {T & S} */
    r
  );
}
function Ra(r) {
  return r();
}
function Tr() {
  return /* @__PURE__ */ Object.create(null);
}
function F0(r) {
  r.forEach(Ra);
}
function La(r) {
  return typeof r == "function";
}
function Q(r, e) {
  return r != r ? e == e : r !== e || r && typeof r == "object" || typeof r == "function";
}
let Y0;
function Ie(r, e) {
  return r === e ? !0 : (Y0 || (Y0 = document.createElement("a")), Y0.href = e, r === Y0.href);
}
function kn(r) {
  return Object.keys(r).length === 0;
}
function Oa(r, e, t, a) {
  if (r) {
    const i = Ha(r, e, t, a);
    return r[0](i);
  }
}
function Ha(r, e, t, a) {
  return r[1] && a ? wn(t.ctx.slice(), r[1](a(e))) : t.ctx;
}
function Fa(r, e, t, a) {
  if (r[2] && a) {
    const i = r[2](a(t));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const n = [], l = Math.max(e.dirty.length, i.length);
      for (let s = 0; s < l; s += 1)
        n[s] = e.dirty[s] | i[s];
      return n;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Pa(r, e, t, a, i, n) {
  if (i) {
    const l = Ha(e, t, a, n);
    r.p(l, i);
  }
}
function ja(r) {
  if (r.ctx.length > 32) {
    const e = [], t = r.ctx.length / 32;
    for (let a = 0; a < t; a++)
      e[a] = -1;
    return e;
  }
  return -1;
}
function $(r, e) {
  r.appendChild(e);
}
function ie(r, e, t) {
  const a = Sn(r);
  if (!a.getElementById(e)) {
    const i = z("style");
    i.id = e, i.textContent = t, zn(a, i);
  }
}
function Sn(r) {
  if (!r) return document;
  const e = r.getRootNode ? r.getRootNode() : r.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : r.ownerDocument;
}
function zn(r, e) {
  return $(
    /** @type {Document} */
    r.head || r,
    e
  ), e.sheet;
}
function R(r, e, t) {
  r.insertBefore(e, t || null);
}
function I(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Re(r, e) {
  for (let t = 0; t < r.length; t += 1)
    r[t] && r[t].d(e);
}
function z(r) {
  return document.createElement(r);
}
function q0(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function pe(r) {
  return document.createTextNode(r);
}
function K() {
  return pe(" ");
}
function Jt() {
  return pe("");
}
function k(r, e, t) {
  t == null ? r.removeAttribute(e) : r.getAttribute(e) !== t && r.setAttribute(e, t);
}
function Mn(r) {
  return Array.from(r.childNodes);
}
function ke(r, e) {
  e = "" + e, r.data !== e && (r.data = /** @type {string} */
  e);
}
function h0(r, e, t, a) {
  t == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, "");
}
function Z0(r, e, t) {
  r.classList.toggle(e, !!t);
}
class Tn {
  constructor(e = !1) {
    /**
     * @private
     * @default false
     */
    ye(this, "is_svg", !1);
    /** parent for creating node */
    ye(this, "e");
    /** html tag nodes */
    ye(this, "n");
    /** target */
    ye(this, "t");
    /** anchor */
    ye(this, "a");
    this.is_svg = e, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.h(e);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(e, t, a = null) {
    this.e || (this.is_svg ? this.e = q0(
      /** @type {keyof SVGElementTagNameMap} */
      t.nodeName
    ) : this.e = z(
      /** @type {keyof HTMLElementTagNameMap} */
      t.nodeType === 11 ? "TEMPLATE" : t.nodeName
    ), this.t = t.tagName !== "TEMPLATE" ? t : (
      /** @type {HTMLTemplateElement} */
      t.content
    ), this.c(e)), this.i(a);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(e) {
    for (let t = 0; t < this.n.length; t += 1)
      R(this.t, this.n[t], e);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(I);
  }
}
function An(r) {
  const e = {};
  return r.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
function Ar(r, e) {
  return new r(e);
}
let I0;
function N0(r) {
  I0 = r;
}
function Qt() {
  if (!I0) throw new Error("Function called outside component initialization");
  return I0;
}
function Ga(r) {
  Qt().$$.on_mount.push(r);
}
function $n(r) {
  Qt().$$.after_update.push(r);
}
function Va(r) {
  Qt().$$.on_destroy.push(r);
}
const S0 = [], R0 = [];
let z0 = [];
const $r = [], Bn = /* @__PURE__ */ Promise.resolve();
let Ft = !1;
function Cn() {
  Ft || (Ft = !0, Bn.then(V));
}
function Pt(r) {
  z0.push(r);
}
const Mt = /* @__PURE__ */ new Set();
let w0 = 0;
function V() {
  if (w0 !== 0)
    return;
  const r = I0;
  do {
    try {
      for (; w0 < S0.length; ) {
        const e = S0[w0];
        w0++, N0(e), qn(e.$$);
      }
    } catch (e) {
      throw S0.length = 0, w0 = 0, e;
    }
    for (N0(null), S0.length = 0, w0 = 0; R0.length; ) R0.pop()();
    for (let e = 0; e < z0.length; e += 1) {
      const t = z0[e];
      Mt.has(t) || (Mt.add(t), t());
    }
    z0.length = 0;
  } while (S0.length);
  for (; $r.length; )
    $r.pop()();
  Ft = !1, Mt.clear(), N0(r);
}
function qn(r) {
  if (r.fragment !== null) {
    r.update(), F0(r.before_update);
    const e = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, e), r.after_update.forEach(Pt);
  }
}
function Dn(r) {
  const e = [], t = [];
  z0.forEach((a) => r.indexOf(a) === -1 ? e.push(a) : t.push(a)), t.forEach((a) => a()), z0 = e;
}
const lt = /* @__PURE__ */ new Set();
let m0;
function A0() {
  m0 = {
    r: 0,
    c: [],
    p: m0
    // parent group
  };
}
function $0() {
  m0.r || F0(m0.c), m0 = m0.p;
}
function he(r, e) {
  r && r.i && (lt.delete(r), r.i(e));
}
function ve(r, e, t, a) {
  if (r && r.o) {
    if (lt.has(r)) return;
    lt.add(r), m0.c.push(() => {
      lt.delete(r), a && (t && r.d(1), a());
    }), r.o(e);
  } else a && a();
}
function ce(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
function d0(r) {
  r && r.c();
}
function a0(r, e, t) {
  const { fragment: a, after_update: i } = r.$$;
  a && a.m(e, t), Pt(() => {
    const n = r.$$.on_mount.map(Ra).filter(La);
    r.$$.on_destroy ? r.$$.on_destroy.push(...n) : F0(n), r.$$.on_mount = [];
  }), i.forEach(Pt);
}
function i0(r, e) {
  const t = r.$$;
  t.fragment !== null && (Dn(t.after_update), F0(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function Nn(r, e) {
  r.$$.dirty[0] === -1 && (S0.push(r), Cn(), r.$$.dirty.fill(0)), r.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(r, e, t, a, i, n, l = null, s = [-1]) {
  const u = I0;
  N0(r);
  const m = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: q,
    not_equal: i,
    bound: Tr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Tr(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(m.root);
  let d = !1;
  if (m.ctx = t ? t(r, e.props || {}, (p, y, ...w) => {
    const M = w.length ? w[0] : y;
    return m.ctx && i(m.ctx[p], m.ctx[p] = M) && (!m.skip_bound && m.bound[p] && m.bound[p](M), d && Nn(r, p)), y;
  }) : [], m.update(), d = !0, F0(m.before_update), m.fragment = a ? a(m.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = Mn(e.target);
      m.fragment && m.fragment.l(p), p.forEach(I);
    } else
      m.fragment && m.fragment.c();
    e.intro && he(r.$$.fragment), a0(r, e.target, e.anchor), V();
  }
  N0(u);
}
let Ua;
typeof HTMLElement == "function" && (Ua = class extends HTMLElement {
  constructor(e, t, a) {
    super();
    /** The Svelte component constructor */
    ye(this, "$$ctor");
    /** Slots */
    ye(this, "$$s");
    /** The Svelte component instance */
    ye(this, "$$c");
    /** Whether or not the custom element is connected */
    ye(this, "$$cn", !1);
    /** Component props data */
    ye(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ye(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ye(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ye(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ye(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, a && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, a) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const i = this.$$c.$on(e, t);
      this.$$l_u.set(t, i);
    }
    super.addEventListener(e, t, a);
  }
  removeEventListener(e, t, a) {
    if (super.removeEventListener(e, t, a), this.$$c) {
      const i = this.$$l_u.get(t);
      i && (i(), this.$$l_u.delete(t));
    }
    if (this.$$l[e]) {
      const i = this.$$l[e].indexOf(t);
      i >= 0 && this.$$l[e].splice(i, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(l) {
        return () => {
          let s;
          return {
            c: function() {
              s = z("slot"), l !== "default" && k(s, "name", l);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(d, p) {
              R(d, s, p);
            },
            d: function(d) {
              d && I(s);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const a = {}, i = An(this);
      for (const l of this.$$s)
        l in i && (a[l] = [t(l)]);
      for (const l of this.attributes) {
        const s = this.$$g_p(l.name);
        s in this.$$d || (this.$$d[s] = st(s, l.value, this.$$p_d, "toProp"));
      }
      for (const l in this.$$p_d)
        !(l in this.$$d) && this[l] !== void 0 && (this.$$d[l] = this[l], delete this[l]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: a,
          $$scope: {
            ctx: []
          }
        }
      });
      const n = () => {
        this.$$r = !0;
        for (const l in this.$$p_d)
          if (this.$$d[l] = this.$$c.$$.ctx[this.$$c.$$.props[l]], this.$$p_d[l].reflect) {
            const s = st(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, s);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(n), n();
      for (const l in this.$$l)
        for (const s of this.$$l[l]) {
          const u = this.$$c.$on(l, s);
          this.$$l_u.set(s, u);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, a) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = st(e, a, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function st(r, e, t, a) {
  var n;
  const i = (n = t[r]) == null ? void 0 : n.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !a || !t[r])
    return e;
  if (a === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function te(r, e, t, a, i, n) {
  let l = class extends Ua {
    constructor() {
      super(r, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((s) => {
    Object.defineProperty(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var m;
        u = st(s, u, e), this.$$d[s] = u, (m = this.$$c) == null || m.$set({ [s]: u });
      }
    });
  }), a.forEach((s) => {
    Object.defineProperty(l.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), r.element = /** @type {any} */
  l, l;
}
class re {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ye(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ye(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    i0(this, 1), this.$destroy = q;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!La(t))
      return q;
    const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return a.push(t), () => {
      const i = a.indexOf(t);
      i !== -1 && a.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !kn(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const _n = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(_n);
function En(r) {
  ie(r, "svelte-1096xqm", ".quote-slide.svelte-1096xqm{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;text-align:center;padding:40px}.heading.svelte-1096xqm{font-size:68px;margin-bottom:0.8rem}.author-text.svelte-1096xqm{font-size:28px;opacity:0.85;margin-top:1.6rem}@media(max-width: 480px){.heading.svelte-1096xqm{font-size:32px}.author-text.svelte-1096xqm{font-size:18px}}@media(min-width: 481px) and (max-width: 767px){.heading.svelte-1096xqm{font-size:40px}.author-text.svelte-1096xqm{font-size:20px}}@media(min-width: 768px) and (max-width: 1024px){.heading.svelte-1096xqm{font-size:52px}.author-text.svelte-1096xqm{font-size:24px}}@media(min-width: 1025px) and (max-width: 1440px){.heading.svelte-1096xqm{font-size:60px}.author-text.svelte-1096xqm{font-size:26px}}@media(min-width: 1441px){.heading.svelte-1096xqm{font-size:120px}.author-text.svelte-1096xqm{font-size:35px}}");
}
function Br(r, e, t) {
  const a = r.slice();
  return a[3] = e[t], a;
}
function Cr(r) {
  let e;
  return {
    c() {
      e = z("h1"), e.textContent = `${/*line*/
      r[3].content}`, k(e, "class", "heading svelte-1096xqm");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    d(t) {
      t && I(e);
    }
  };
}
function In(r) {
  let e, t, a, i = ce(
    /*quoteLines*/
    r[0]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = Cr(Br(r, i, l));
  return {
    c() {
      e = z("div");
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      t = K(), a = z("p"), a.textContent = `${/*author*/
      r[1]}`, k(a, "class", "text-primary author-text svelte-1096xqm"), k(e, "class", "quote-slide svelte-1096xqm");
    },
    m(l, s) {
      R(l, e, s);
      for (let u = 0; u < n.length; u += 1)
        n[u] && n[u].m(e, null);
      $(e, t), $(e, a);
    },
    p(l, [s]) {
      if (s & /*quoteLines*/
      1) {
        i = ce(
          /*quoteLines*/
          l[0]
        );
        let u;
        for (u = 0; u < i.length; u += 1) {
          const m = Br(l, i, u);
          n[u] ? n[u].p(m, s) : (n[u] = Cr(m), n[u].c(), n[u].m(e, t));
        }
        for (; u < n.length; u += 1)
          n[u].d(1);
        n.length = i.length;
      }
    },
    i: q,
    o: q,
    d(l) {
      l && I(e), Re(n, l);
    }
  };
}
function Rn(r, e, t) {
  var l;
  let { data: a } = e;
  const i = a.filter((s) => s.name === "quoteLine"), n = ((l = a.find((s) => s.name === "author")) == null ? void 0 : l.content) ?? "";
  return r.$$set = (s) => {
    "data" in s && t(2, a = s.data);
  }, [i, n, a];
}
class Wa extends re {
  constructor(e) {
    super(), ee(this, e, Rn, In, Q, { data: 2 }, En);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(Wa, { data: {} }, [], [], !0);
function Ln(r) {
  ie(r, "svelte-118o6os", ".card-grid.svelte-118o6os{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;width:100%;height:100%;box-sizing:border-box}.card.svelte-118o6os{display:flex;flex-direction:column;justify-content:center;align-items:center;border:3px solid currentColor;border-radius:16px;box-sizing:border-box;width:100%;height:100%;padding:20px;text-align:center}.icon.svelte-118o6os{font-size:clamp(40px, 10vw, 80px);margin-bottom:12px}.label.svelte-118o6os{font-size:clamp(18px, 3vw, 28px);font-weight:bold;line-height:1.2}@media(max-width: 600px){.card.svelte-118o6os{padding:2px}}");
}
function qr(r, e, t) {
  const a = r.slice();
  return a[3] = e[t], a;
}
function Dr(r) {
  let e;
  return {
    c() {
      e = z("div"), e.textContent = `${/*card*/
      r[3].icon}`, k(e, "class", "icon svelte-118o6os");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    d(t) {
      t && I(e);
    }
  };
}
function Nr(r) {
  let e, t, a, i, n = (
    /*card*/
    r[3].showAt <= /*currentTime*/
    r[0] && Dr(r)
  );
  return {
    c() {
      e = z("div"), n && n.c(), t = K(), a = z("div"), a.textContent = `${/*card*/
      r[3].label}`, i = K(), k(a, "class", "label svelte-118o6os"), k(e, "class", "card svelte-118o6os");
    },
    m(l, s) {
      R(l, e, s), n && n.m(e, null), $(e, t), $(e, a), $(e, i);
    },
    p(l, s) {
      /*card*/
      l[3].showAt <= /*currentTime*/
      l[0] ? n ? n.p(l, s) : (n = Dr(l), n.c(), n.m(e, t)) : n && (n.d(1), n = null);
    },
    d(l) {
      l && I(e), n && n.d();
    }
  };
}
function On(r) {
  let e, t = ce(
    /*cards*/
    r[1]
  ), a = [];
  for (let i = 0; i < t.length; i += 1)
    a[i] = Nr(qr(r, t, i));
  return {
    c() {
      e = z("div");
      for (let i = 0; i < a.length; i += 1)
        a[i].c();
      k(e, "class", "card-grid text-primary svelte-118o6os");
    },
    m(i, n) {
      R(i, e, n);
      for (let l = 0; l < a.length; l += 1)
        a[l] && a[l].m(e, null);
    },
    p(i, [n]) {
      if (n & /*cards, currentTime*/
      3) {
        t = ce(
          /*cards*/
          i[1]
        );
        let l;
        for (l = 0; l < t.length; l += 1) {
          const s = qr(i, t, l);
          a[l] ? a[l].p(s, n) : (a[l] = Nr(s), a[l].c(), a[l].m(e, null));
        }
        for (; l < a.length; l += 1)
          a[l].d(1);
        a.length = t.length;
      }
    },
    i: q,
    o: q,
    d(i) {
      i && I(e), Re(a, i);
    }
  };
}
function Hn(r, e, t) {
  let { data: a } = e, { currentTime: i } = e;
  const n = a.filter((l) => l.name === "card");
  return r.$$set = (l) => {
    "data" in l && t(2, a = l.data), "currentTime" in l && t(0, i = l.currentTime);
  }, [i, n, a];
}
class Xa extends re {
  constructor(e) {
    super(), ee(this, e, Hn, On, Q, { data: 2, currentTime: 0 }, Ln);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[0];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(Xa, { data: {}, currentTime: {} }, [], [], !0);
function Fn(r) {
  ie(r, "svelte-1rlf2bs", ".title-slide.svelte-1rlf2bs{display:flex;justify-content:center;align-items:center;height:100%;text-align:center;padding:40px;box-sizing:border-box}.main-title.svelte-1rlf2bs{font-weight:bold;line-height:1.2;text-wrap:balance;font-size:72px;text-shadow:8px 8px 22px var(--shadowColor)}@media(max-width: 480px){.main-title.svelte-1rlf2bs{font-size:36px}}@media(min-width: 481px) and (max-width: 767px){.main-title.svelte-1rlf2bs{font-size:48px}}@media(min-width: 768px) and (max-width: 1024px){.main-title.svelte-1rlf2bs{font-size:60px}}@media(min-width: 1025px) and (max-width: 1440px){.main-title.svelte-1rlf2bs{font-size:72px}}@media(min-width: 1441px){.main-title.svelte-1rlf2bs{font-size:100px}}");
}
function Pn(r) {
  let e, t;
  return {
    c() {
      e = z("div"), t = z("h1"), t.textContent = `${/*title*/
      r[0]}`, k(t, "class", "main-title svelte-1rlf2bs"), k(e, "class", "title-slide svelte-1rlf2bs");
    },
    m(a, i) {
      R(a, e, i), $(e, t);
    },
    p: q,
    i: q,
    o: q,
    d(a) {
      a && I(e);
    }
  };
}
function jn(r, e, t) {
  var n;
  let { data: a } = e;
  const i = ((n = a.find((l) => l.name === "title")) == null ? void 0 : n.content) ?? "";
  return r.$$set = (l) => {
    "data" in l && t(1, a = l.data);
  }, [i, a];
}
class Ya extends re {
  constructor(e) {
    super(), ee(this, e, jn, Pn, Q, { data: 1 }, Fn);
  }
  get data() {
    return this.$$.ctx[1];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(Ya, { data: {} }, [], [], !0);
function Gn(r) {
  ie(r, "svelte-1x2yghd", ".image-slide.svelte-1x2yghd{display:flex;align-items:center;justify-content:center;height:100%;width:100%;padding:2rem;box-sizing:border-box;overflow:hidden;min-height:0}.fullImage.svelte-1x2yghd{display:block;margin:auto;max-width:100%;max-height:90%;width:auto;height:auto;-o-object-fit:contain;object-fit:contain}");
}
function Vn(r) {
  let e, t, a;
  return {
    c() {
      e = z("div"), t = z("img"), k(t, "class", "fullImage svelte-1x2yghd"), Ie(t.src, a = /*imageSrc*/
      r[0]) || k(t, "src", a), k(t, "alt", "Slide Image"), k(e, "class", "image-slide svelte-1x2yghd");
    },
    m(i, n) {
      R(i, e, n), $(e, t);
    },
    p: q,
    i: q,
    o: q,
    d(i) {
      i && I(e);
    }
  };
}
function Un(r, e, t) {
  var n;
  let { data: a } = e;
  const i = ((n = a.find((l) => l.name === "image")) == null ? void 0 : n.content) ?? "";
  return r.$$set = (l) => {
    "data" in l && t(1, a = l.data);
  }, [i, a];
}
class Za extends re {
  constructor(e) {
    super(), ee(this, e, Un, Vn, Q, { data: 1 }, Gn);
  }
  get data() {
    return this.$$.ctx[1];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(Za, { data: {} }, [], [], !0);
function Wn(r) {
  ie(r, "svelte-1xhv49l", ".slide-container.svelte-1xhv49l.svelte-1xhv49l{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:clamp(1rem, 3vw, 2rem);height:100%;width:100%;padding:clamp(1rem, 3vw, 2rem);box-sizing:border-box}.image-left.svelte-1xhv49l.svelte-1xhv49l{flex:0 0 40%;max-width:40%;max-height:80%;display:flex;align-items:center;justify-content:center}.image-left.svelte-1xhv49l img.svelte-1xhv49l{width:100%;height:auto;-o-object-fit:contain;object-fit:contain}.bullets-right.svelte-1xhv49l.svelte-1xhv49l{flex:1 1 0;min-width:0;font-size:clamp(1.2rem, 4vw, 2.5rem);font-weight:bold;line-height:1.5}.bullets-right.svelte-1xhv49l ul.svelte-1xhv49l{margin:0;padding-left:1em}.bullets-right.svelte-1xhv49l li.svelte-1xhv49l{margin-bottom:0.5em}");
}
function _r(r, e, t) {
  const a = r.slice();
  return a[4] = e[t], a;
}
function Er(r) {
  let e, t, a;
  return {
    c() {
      e = z("div"), t = z("img"), Ie(t.src, a = /*imageItem*/
      r[1].content) || k(t, "src", a), k(t, "alt", "Slide image"), k(t, "class", "svelte-1xhv49l"), k(e, "class", "image-left svelte-1xhv49l");
    },
    m(i, n) {
      R(i, e, n), $(e, t);
    },
    p(i, n) {
      n & /*imageItem*/
      2 && !Ie(t.src, a = /*imageItem*/
      i[1].content) && k(t, "src", a);
    },
    d(i) {
      i && I(e);
    }
  };
}
function Ir(r) {
  let e, t = (
    /*bullet*/
    r[4] + ""
  ), a;
  return {
    c() {
      e = z("li"), a = pe(t), k(e, "class", "svelte-1xhv49l");
    },
    m(i, n) {
      R(i, e, n), $(e, a);
    },
    p(i, n) {
      n & /*bullets*/
      1 && t !== (t = /*bullet*/
      i[4] + "") && ke(a, t);
    },
    d(i) {
      i && I(e);
    }
  };
}
function Xn(r) {
  let e, t, a, i, n = (
    /*imageItem*/
    r[1] && Er(r)
  ), l = ce(
    /*bullets*/
    r[0]
  ), s = [];
  for (let u = 0; u < l.length; u += 1)
    s[u] = Ir(_r(r, l, u));
  return {
    c() {
      e = z("div"), n && n.c(), t = K(), a = z("div"), i = z("ul");
      for (let u = 0; u < s.length; u += 1)
        s[u].c();
      k(i, "class", "svelte-1xhv49l"), k(a, "class", "bullets-right svelte-1xhv49l"), k(e, "class", "slide-container svelte-1xhv49l");
    },
    m(u, m) {
      R(u, e, m), n && n.m(e, null), $(e, t), $(e, a), $(a, i);
      for (let d = 0; d < s.length; d += 1)
        s[d] && s[d].m(i, null);
    },
    p(u, [m]) {
      if (/*imageItem*/
      u[1] ? n ? n.p(u, m) : (n = Er(u), n.c(), n.m(e, t)) : n && (n.d(1), n = null), m & /*bullets*/
      1) {
        l = ce(
          /*bullets*/
          u[0]
        );
        let d;
        for (d = 0; d < l.length; d += 1) {
          const p = _r(u, l, d);
          s[d] ? s[d].p(p, m) : (s[d] = Ir(p), s[d].c(), s[d].m(i, null));
        }
        for (; d < s.length; d += 1)
          s[d].d(1);
        s.length = l.length;
      }
    },
    i: q,
    o: q,
    d(u) {
      u && I(e), n && n.d(), Re(s, u);
    }
  };
}
function Yn(r, e, t) {
  let a, i, { data: n } = e, { currentTime: l } = e;
  return r.$$set = (s) => {
    "data" in s && t(2, n = s.data), "currentTime" in s && t(3, l = s.currentTime);
  }, r.$$.update = () => {
    r.$$.dirty & /*data, currentTime*/
    12 && t(1, a = n.find((s) => s.name === "image" && s.showAt <= l)), r.$$.dirty & /*data, currentTime*/
    12 && t(0, i = n.filter((s) => s.name === "bullet" && s.showAt <= l).sort((s, u) => s.showAt - u.showAt).map((s) => s.content));
  }, [i, a, n, l];
}
class Ka extends re {
  constructor(e) {
    super(), ee(this, e, Yn, Xn, Q, { data: 2, currentTime: 3 }, Wn);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[3];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(Ka, { data: {}, currentTime: {} }, [], [], !0);
function Zn(r) {
  ie(r, "svelte-ttaj9z", ".slide-container.svelte-ttaj9z.svelte-ttaj9z{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;gap:clamp(1rem, 3vw, 2rem);height:100%;width:100%;padding:clamp(1rem, 3vw, 2rem);box-sizing:border-box}.bullets-left.svelte-ttaj9z.svelte-ttaj9z{flex:1 1 0;min-width:0;display:flex;font-weight:bold;align-items:center;justify-content:center;font-size:clamp(1.2rem, 4vw, 2.5rem);line-height:1.5}.bullets-left.svelte-ttaj9z ul.svelte-ttaj9z{margin:0;padding-left:1.25em}.bullets-left.svelte-ttaj9z li.svelte-ttaj9z{margin-bottom:0.5em}.image-right.svelte-ttaj9z.svelte-ttaj9z{flex:0 0 40%;max-width:40%;max-height:80%;display:flex;align-items:center;justify-content:center}.image-right.svelte-ttaj9z img.svelte-ttaj9z{width:100%;height:auto;-o-object-fit:contain;object-fit:contain;border-radius:12px}");
}
function Rr(r, e, t) {
  const a = r.slice();
  return a[4] = e[t], a;
}
function Lr(r) {
  let e, t = (
    /*bullet*/
    r[4] + ""
  ), a;
  return {
    c() {
      e = z("li"), a = pe(t), k(e, "class", "svelte-ttaj9z");
    },
    m(i, n) {
      R(i, e, n), $(e, a);
    },
    p(i, n) {
      n & /*bullets*/
      1 && t !== (t = /*bullet*/
      i[4] + "") && ke(a, t);
    },
    d(i) {
      i && I(e);
    }
  };
}
function Or(r) {
  let e, t, a;
  return {
    c() {
      e = z("div"), t = z("img"), Ie(t.src, a = /*imageItem*/
      r[1].content) || k(t, "src", a), k(t, "alt", "Slide image"), k(t, "class", "svelte-ttaj9z"), k(e, "class", "image-right svelte-ttaj9z");
    },
    m(i, n) {
      R(i, e, n), $(e, t);
    },
    p(i, n) {
      n & /*imageItem*/
      2 && !Ie(t.src, a = /*imageItem*/
      i[1].content) && k(t, "src", a);
    },
    d(i) {
      i && I(e);
    }
  };
}
function Kn(r) {
  let e, t, a, i, n = ce(
    /*bullets*/
    r[0]
  ), l = [];
  for (let u = 0; u < n.length; u += 1)
    l[u] = Lr(Rr(r, n, u));
  let s = (
    /*imageItem*/
    r[1] && Or(r)
  );
  return {
    c() {
      e = z("div"), t = z("div"), a = z("ul");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      i = K(), s && s.c(), k(a, "class", "svelte-ttaj9z"), k(t, "class", "bullets-left svelte-ttaj9z"), k(e, "class", "slide-container svelte-ttaj9z");
    },
    m(u, m) {
      R(u, e, m), $(e, t), $(t, a);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(a, null);
      $(e, i), s && s.m(e, null);
    },
    p(u, [m]) {
      if (m & /*bullets*/
      1) {
        n = ce(
          /*bullets*/
          u[0]
        );
        let d;
        for (d = 0; d < n.length; d += 1) {
          const p = Rr(u, n, d);
          l[d] ? l[d].p(p, m) : (l[d] = Lr(p), l[d].c(), l[d].m(a, null));
        }
        for (; d < l.length; d += 1)
          l[d].d(1);
        l.length = n.length;
      }
      /*imageItem*/
      u[1] ? s ? s.p(u, m) : (s = Or(u), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    i: q,
    o: q,
    d(u) {
      u && I(e), Re(l, u), s && s.d();
    }
  };
}
function Jn(r, e, t) {
  let a, i, { data: n } = e, { currentTime: l } = e;
  return r.$$set = (s) => {
    "data" in s && t(2, n = s.data), "currentTime" in s && t(3, l = s.currentTime);
  }, r.$$.update = () => {
    r.$$.dirty & /*data, currentTime*/
    12 && t(1, a = n.find((s) => s.name === "image" && s.showAt <= l)), r.$$.dirty & /*data, currentTime*/
    12 && t(0, i = n.filter((s) => s.name === "bullet" && s.showAt <= l).sort((s, u) => s.showAt - u.showAt).map((s) => s.content));
  }, [i, a, n, l];
}
class Ja extends re {
  constructor(e) {
    super(), ee(this, e, Jn, Kn, Q, { data: 2, currentTime: 3 }, Zn);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[3];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(Ja, { data: {}, currentTime: {} }, [], [], !0);
function Qn(r) {
  ie(r, "svelte-1czlb8y", ".image-slide.svelte-1czlb8y{position:relative;width:100%;height:100%;display:flex;justify-content:center;align-items:center}.full-image.svelte-1czlb8y{max-width:90vw;max-height:80vh;-o-object-fit:contain;object-fit:contain;border-radius:12px;box-shadow:0 0 30px rgba(0, 0, 0, 0.2)}.text-overlay.caption.svelte-1czlb8y{position:absolute;bottom:5%;left:50%;transform:translateX(-50%);font-size:2.5rem;color:white;text-shadow:1px 1px 4px black}");
}
function e1(r) {
  let e, t, a, i, n;
  return {
    c() {
      e = z("div"), t = z("img"), i = K(), n = z("div"), n.textContent = `${/*caption*/
      r[1]}`, k(t, "class", "full-image svelte-1czlb8y"), Ie(t.src, a = /*imageSrc*/
      r[0]) || k(t, "src", a), k(t, "alt", "Slide Image"), k(n, "class", "text-overlay caption svelte-1czlb8y"), k(e, "class", "image-slide svelte-1czlb8y");
    },
    m(l, s) {
      R(l, e, s), $(e, t), $(e, i), $(e, n);
    },
    p: q,
    i: q,
    o: q,
    d(l) {
      l && I(e);
    }
  };
}
function t1(r, e, t) {
  var l, s;
  let { data: a } = e;
  const i = ((l = a.find((u) => u.name === "image")) == null ? void 0 : l.content) ?? "", n = ((s = a.find((u) => u.name === "caption")) == null ? void 0 : s.content) ?? "";
  return r.$$set = (u) => {
    "data" in u && t(2, a = u.data);
  }, [i, n, a];
}
class Qa extends re {
  constructor(e) {
    super(), ee(this, e, t1, e1, Q, { data: 2 }, Qn);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(Qa, { data: {} }, [], [], !0);
function r1(r) {
  ie(r, "svelte-ahwrpi", ".slide-container.svelte-ahwrpi.svelte-ahwrpi{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;padding:20px;box-sizing:border-box;gap:20px}.title-zone.svelte-ahwrpi.svelte-ahwrpi{text-align:center}.slide-title.svelte-ahwrpi.svelte-ahwrpi{margin:0;font-size:clamp(1.5rem, 6vw, 4rem);line-height:1.2}.image-zone.svelte-ahwrpi.svelte-ahwrpi{display:flex;justify-content:center;align-items:center;max-width:70%;max-height:60%}.image-zone.svelte-ahwrpi img.svelte-ahwrpi{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}@media(max-width: 768px){.slide-title.svelte-ahwrpi.svelte-ahwrpi{font-size:clamp(1.2rem, 8vw, 2rem)}.image-zone.svelte-ahwrpi.svelte-ahwrpi{max-width:90%;max-height:70%}}");
}
function a1(r) {
  let e, t, a, i, n, l, s;
  return {
    c() {
      e = z("div"), t = z("div"), a = z("h1"), a.textContent = `${/*title*/
      r[1]}`, i = K(), n = z("div"), l = z("img"), k(a, "class", "slide-title svelte-ahwrpi"), k(t, "class", "title-zone svelte-ahwrpi"), Ie(l.src, s = /*imageSrc*/
      r[0]) || k(l, "src", s), k(l, "alt", "Slide Image"), k(l, "class", "svelte-ahwrpi"), k(n, "class", "image-zone svelte-ahwrpi"), k(e, "class", "slide-container svelte-ahwrpi");
    },
    m(u, m) {
      R(u, e, m), $(e, t), $(t, a), $(e, i), $(e, n), $(n, l);
    },
    p: q,
    i: q,
    o: q,
    d(u) {
      u && I(e);
    }
  };
}
function i1(r, e, t) {
  var l, s;
  let { data: a } = e;
  const i = ((l = a.find((u) => u.name === "image")) == null ? void 0 : l.content) ?? "", n = ((s = a.find((u) => u.name === "title")) == null ? void 0 : s.content) ?? "";
  return r.$$set = (u) => {
    "data" in u && t(2, a = u.data);
  }, [i, n, a];
}
class ei extends re {
  constructor(e) {
    super(), ee(this, e, i1, a1, Q, { data: 2 }, r1);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(ei, { data: {} }, [], [], !0);
function n1(r) {
  ie(r, "svelte-1btlhxz", ".table-slide.svelte-1btlhxz{display:flex;justify-content:center;align-items:center;height:100vh;padding:2rem;box-sizing:border-box}table.svelte-1btlhxz{width:90%;border-collapse:collapse;font-size:2rem;box-shadow:0 0 10px rgba(0, 0, 0, 0.15)}th.svelte-1btlhxz,td.svelte-1btlhxz{padding:1rem 1.5rem;text-align:left;border:1px solid #ccc}th.svelte-1btlhxz{background-color:#f0f0f0;font-weight:600}@media(max-width: 768px){table.svelte-1btlhxz{font-size:1.4rem}}");
}
function Hr(r, e, t) {
  const a = r.slice();
  return a[3] = e[t], a;
}
function Fr(r, e, t) {
  const a = r.slice();
  return a[6] = e[t], a;
}
function Pr(r, e, t) {
  const a = r.slice();
  return a[9] = e[t], a;
}
function jr(r) {
  let e;
  return {
    c() {
      e = z("th"), e.textContent = `${/*header*/
      r[9]}`, k(e, "class", "svelte-1btlhxz");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    d(t) {
      t && I(e);
    }
  };
}
function Gr(r) {
  let e;
  return {
    c() {
      e = z("td"), e.textContent = `${/*cell*/
      r[6]}`, k(e, "class", "svelte-1btlhxz");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    d(t) {
      t && I(e);
    }
  };
}
function Vr(r) {
  let e, t, a = ce(
    /*row*/
    r[3]
  ), i = [];
  for (let n = 0; n < a.length; n += 1)
    i[n] = Gr(Fr(r, a, n));
  return {
    c() {
      e = z("tr");
      for (let n = 0; n < i.length; n += 1)
        i[n].c();
      t = K();
    },
    m(n, l) {
      R(n, e, l);
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(e, null);
      $(e, t);
    },
    p(n, l) {
      if (l & /*rows*/
      2) {
        a = ce(
          /*row*/
          n[3]
        );
        let s;
        for (s = 0; s < a.length; s += 1) {
          const u = Fr(n, a, s);
          i[s] ? i[s].p(u, l) : (i[s] = Gr(u), i[s].c(), i[s].m(e, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = a.length;
      }
    },
    d(n) {
      n && I(e), Re(i, n);
    }
  };
}
function l1(r) {
  let e, t, a, i, n, l, s = ce(
    /*headers*/
    r[0]
  ), u = [];
  for (let p = 0; p < s.length; p += 1)
    u[p] = jr(Pr(r, s, p));
  let m = ce(
    /*rows*/
    r[1]
  ), d = [];
  for (let p = 0; p < m.length; p += 1)
    d[p] = Vr(Hr(r, m, p));
  return {
    c() {
      e = z("div"), t = z("table"), a = z("thead"), i = z("tr");
      for (let p = 0; p < u.length; p += 1)
        u[p].c();
      n = K(), l = z("tbody");
      for (let p = 0; p < d.length; p += 1)
        d[p].c();
      k(t, "class", "svelte-1btlhxz"), k(e, "class", "table-slide svelte-1btlhxz");
    },
    m(p, y) {
      R(p, e, y), $(e, t), $(t, a), $(a, i);
      for (let w = 0; w < u.length; w += 1)
        u[w] && u[w].m(i, null);
      $(t, n), $(t, l);
      for (let w = 0; w < d.length; w += 1)
        d[w] && d[w].m(l, null);
    },
    p(p, [y]) {
      if (y & /*headers*/
      1) {
        s = ce(
          /*headers*/
          p[0]
        );
        let w;
        for (w = 0; w < s.length; w += 1) {
          const M = Pr(p, s, w);
          u[w] ? u[w].p(M, y) : (u[w] = jr(M), u[w].c(), u[w].m(i, null));
        }
        for (; w < u.length; w += 1)
          u[w].d(1);
        u.length = s.length;
      }
      if (y & /*rows*/
      2) {
        m = ce(
          /*rows*/
          p[1]
        );
        let w;
        for (w = 0; w < m.length; w += 1) {
          const M = Hr(p, m, w);
          d[w] ? d[w].p(M, y) : (d[w] = Vr(M), d[w].c(), d[w].m(l, null));
        }
        for (; w < d.length; w += 1)
          d[w].d(1);
        d.length = m.length;
      }
    },
    i: q,
    o: q,
    d(p) {
      p && I(e), Re(u, p), Re(d, p);
    }
  };
}
function s1(r, e, t) {
  var l, s;
  let { data: a } = e;
  const i = ((l = a.find((u) => u.name === "headers")) == null ? void 0 : l.content) ?? [], n = ((s = a.find((u) => u.name === "rows")) == null ? void 0 : s.content) ?? [];
  return r.$$set = (u) => {
    "data" in u && t(2, a = u.data);
  }, [i, n, a];
}
class ti extends re {
  constructor(e) {
    super(), ee(this, e, s1, l1, Q, { data: 2 }, n1);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(ti, { data: {} }, [], [], !0);
function o1(r) {
  ie(r, "svelte-x6jlyi", ".stat-slide.svelte-x6jlyi{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;width:100vw;text-align:center;gap:1rem}.stat-number.svelte-x6jlyi{font-size:10rem;font-weight:800;color:#333}.stat-label.svelte-x6jlyi{font-size:3rem;font-weight:500;color:#555}");
}
function u1(r) {
  let e, t, a, i;
  return {
    c() {
      e = z("div"), t = z("div"), t.textContent = `${/*number*/
      r[0]}`, a = K(), i = z("div"), i.textContent = `${/*label*/
      r[1]}`, k(t, "class", "stat-number svelte-x6jlyi"), k(i, "class", "stat-label svelte-x6jlyi"), k(e, "class", "stat-slide svelte-x6jlyi");
    },
    m(n, l) {
      R(n, e, l), $(e, t), $(e, a), $(e, i);
    },
    p: q,
    i: q,
    o: q,
    d(n) {
      n && I(e);
    }
  };
}
function c1(r, e, t) {
  var l, s;
  let { data: a } = e;
  const i = ((l = a.find((u) => u.name === "number")) == null ? void 0 : l.content) ?? "", n = ((s = a.find((u) => u.name === "label")) == null ? void 0 : s.content) ?? "";
  return r.$$set = (u) => {
    "data" in u && t(2, a = u.data);
  }, [i, n, a];
}
class ri extends re {
  constructor(e) {
    super(), ee(this, e, c1, u1, Q, { data: 2 }, o1);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(ri, { data: {} }, [], [], !0);
function h1(r) {
  ie(r, "svelte-1oq83yb", ".slide-container.svelte-1oq83yb{display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:60px;box-sizing:border-box}.bar-container.svelte-1oq83yb{display:flex;flex-direction:column;align-items:center;width:60px;height:100%;justify-content:flex-end}.chart-area.svelte-1oq83yb{display:flex;align-items:flex-end;gap:100px;height:80%;width:100%;justify-content:center}.bar.svelte-1oq83yb{width:100%;transition:height 0.3s ease-in-out}.label.svelte-1oq83yb{margin-top:12px;font-size:1.5rem;color:black;text-align:center}@media(max-width: 768px){.label.svelte-1oq83yb{font-size:1rem}.bar-container.svelte-1oq83yb{width:40px}}");
}
function Ur(r, e, t) {
  const a = r.slice();
  return a[3] = e[t], a;
}
function Wr(r) {
  let e, t, a, i, n = (
    /*bar*/
    r[3].label + ""
  ), l, s;
  return {
    c() {
      e = z("div"), t = z("div"), a = K(), i = z("div"), l = pe(n), s = K(), k(t, "class", "bar svelte-1oq83yb"), h0(
        t,
        "height",
        /*bar*/
        r[3].value + "%"
      ), h0(
        t,
        "background-color",
        /*bar*/
        r[3].color || "#3498db"
      ), k(i, "class", "label svelte-1oq83yb"), k(e, "class", "bar-container svelte-1oq83yb");
    },
    m(u, m) {
      R(u, e, m), $(e, t), $(e, a), $(e, i), $(i, l), $(e, s);
    },
    p(u, m) {
      m & /*bars*/
      1 && h0(
        t,
        "height",
        /*bar*/
        u[3].value + "%"
      ), m & /*bars*/
      1 && h0(
        t,
        "background-color",
        /*bar*/
        u[3].color || "#3498db"
      ), m & /*bars*/
      1 && n !== (n = /*bar*/
      u[3].label + "") && ke(l, n);
    },
    d(u) {
      u && I(e);
    }
  };
}
function m1(r) {
  let e, t, a = ce(
    /*bars*/
    r[0]
  ), i = [];
  for (let n = 0; n < a.length; n += 1)
    i[n] = Wr(Ur(r, a, n));
  return {
    c() {
      e = z("div"), t = z("div");
      for (let n = 0; n < i.length; n += 1)
        i[n].c();
      k(t, "class", "chart-area svelte-1oq83yb"), k(e, "class", "slide-container svelte-1oq83yb");
    },
    m(n, l) {
      R(n, e, l), $(e, t);
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(t, null);
    },
    p(n, [l]) {
      if (l & /*bars*/
      1) {
        a = ce(
          /*bars*/
          n[0]
        );
        let s;
        for (s = 0; s < a.length; s += 1) {
          const u = Ur(n, a, s);
          i[s] ? i[s].p(u, l) : (i[s] = Wr(u), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = a.length;
      }
    },
    i: q,
    o: q,
    d(n) {
      n && I(e), Re(i, n);
    }
  };
}
function d1(r, e, t) {
  let { data: a } = e, { currentTime: i } = e, n = [];
  return r.$$set = (l) => {
    "data" in l && t(1, a = l.data), "currentTime" in l && t(2, i = l.currentTime);
  }, r.$$.update = () => {
    r.$$.dirty & /*data, currentTime*/
    6 && t(0, n = a.filter((l) => l.name === "bar" && l.showAt <= i).sort((l, s) => l.showAt - s.showAt));
  }, [n, a, i];
}
class ai extends re {
  constructor(e) {
    super(), ee(this, e, d1, m1, Q, { data: 1, currentTime: 2 }, h1);
  }
  get data() {
    return this.$$.ctx[1];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[2];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(ai, { data: {}, currentTime: {} }, [], [], !0);
function f1(r) {
  ie(r, "svelte-i78l9p", ".slide-outer.svelte-i78l9p{display:flex;align-items:center;justify-content:center;height:100vh;width:100%;overflow:hidden}.slide-scaler.svelte-i78l9p{width:100%;max-width:1000px;margin:0 auto}");
}
function p1(r) {
  let e, t, a;
  const i = (
    /*#slots*/
    r[1].default
  ), n = Oa(
    i,
    r,
    /*$$scope*/
    r[0],
    null
  );
  return {
    c() {
      e = z("div"), t = z("div"), n && n.c(), k(t, "class", "slide-scaler svelte-i78l9p"), h0(t, "transform", "scale(var(--scale))"), h0(t, "transform-origin", "top center"), k(e, "class", "slide-outer svelte-i78l9p");
    },
    m(l, s) {
      R(l, e, s), $(e, t), n && n.m(t, null), a = !0;
    },
    p(l, [s]) {
      n && n.p && (!a || s & /*$$scope*/
      1) && Pa(
        n,
        i,
        l,
        /*$$scope*/
        l[0],
        a ? Fa(
          i,
          /*$$scope*/
          l[0],
          s,
          null
        ) : ja(
          /*$$scope*/
          l[0]
        ),
        null
      );
    },
    i(l) {
      a || (he(n, l), a = !0);
    },
    o(l) {
      ve(n, l), a = !1;
    },
    d(l) {
      l && I(e), n && n.d(l);
    }
  };
}
function v1(r, e, t) {
  let { $$slots: a = {}, $$scope: i } = e, n;
  return Ga(() => {
    n = () => {
      const l = Math.min(1, window.innerWidth / 1e3);
      document.documentElement.style.setProperty("--scale", l);
    }, n(), window.addEventListener("resize", n);
  }), Va(() => {
    window.removeEventListener("resize", n);
  }), r.$$set = (l) => {
    "$$scope" in l && t(0, i = l.$$scope);
  }, [i, a];
}
class ii extends re {
  constructor(e) {
    super(), ee(this, e, v1, p1, Q, {}, f1);
  }
}
te(ii, {}, ["default"], [], !0);
function g1(r) {
  ie(r, "svelte-1hcy68h", ".container.svelte-1hcy68h{display:flex;align-items:center;justify-content:center;height:100%}.two-col-slide.svelte-1hcy68h{display:flex;flex-direction:column;text-align:center;gap:clamp(1rem, 4vh, 3rem);padding:clamp(1rem, 4vw, 4rem);height:100%;box-sizing:border-box}.slide-title.svelte-1hcy68h{font-size:clamp(2rem, 6vw, 4rem);text-align:center;font-weight:700;margin:0}.columns.svelte-1hcy68h{display:flex;gap:clamp(1rem, 4vw, 4rem);flex:1}.column.svelte-1hcy68h{flex:1;min-width:0;font-size:clamp(1rem, 4vw, 2.5rem);white-space:pre-line;line-height:1.6}");
}
function Xr(r) {
  let e, t;
  return {
    c() {
      e = z("h1"), t = pe(
        /*title*/
        r[2]
      ), k(e, "class", "slide-title svelte-1hcy68h");
    },
    m(a, i) {
      R(a, e, i), $(e, t);
    },
    p(a, i) {
      i & /*title*/
      4 && ke(
        t,
        /*title*/
        a[2]
      );
    },
    d(a) {
      a && I(e);
    }
  };
}
function b1(r) {
  let e, t, a, i, n, l, s, u, m, d = (
    /*title*/
    r[2] && Xr(r)
  );
  return {
    c() {
      e = z("div"), t = z("div"), d && d.c(), a = K(), i = z("div"), n = z("div"), l = pe(
        /*left*/
        r[1]
      ), s = K(), u = z("div"), m = pe(
        /*right*/
        r[0]
      ), k(n, "class", "column svelte-1hcy68h"), k(u, "class", "column svelte-1hcy68h"), k(i, "class", "columns svelte-1hcy68h"), k(t, "class", "two-col-slide svelte-1hcy68h"), k(e, "class", "container svelte-1hcy68h");
    },
    m(p, y) {
      R(p, e, y), $(e, t), d && d.m(t, null), $(t, a), $(t, i), $(i, n), $(n, l), $(i, s), $(i, u), $(u, m);
    },
    p(p, y) {
      /*title*/
      p[2] ? d ? d.p(p, y) : (d = Xr(p), d.c(), d.m(t, a)) : d && (d.d(1), d = null), y & /*left*/
      2 && ke(
        l,
        /*left*/
        p[1]
      ), y & /*right*/
      1 && ke(
        m,
        /*right*/
        p[0]
      );
    },
    d(p) {
      p && I(e), d && d.d();
    }
  };
}
function y1(r) {
  let e, t;
  return e = new ii({
    props: {
      $$slots: { default: [b1] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      d0(e.$$.fragment);
    },
    m(a, i) {
      a0(e, a, i), t = !0;
    },
    p(a, [i]) {
      const n = {};
      i & /*$$scope, right, left, title*/
      39 && (n.$$scope = { dirty: i, ctx: a }), e.$set(n);
    },
    i(a) {
      t || (he(e.$$.fragment, a), t = !0);
    },
    o(a) {
      ve(e.$$.fragment, a), t = !1;
    },
    d(a) {
      i0(e, a);
    }
  };
}
function x1(r, e, t) {
  let a, i, n, { data: l } = e, { currentTime: s = 0 } = e;
  return r.$$set = (u) => {
    "data" in u && t(3, l = u.data), "currentTime" in u && t(4, s = u.currentTime);
  }, r.$$.update = () => {
    var u, m, d;
    r.$$.dirty & /*data, currentTime*/
    24 && t(2, a = ((u = l.find((p) => p.name === "title" && p.showAt <= s)) == null ? void 0 : u.content) ?? ""), r.$$.dirty & /*data, currentTime*/
    24 && t(1, i = ((m = l.find((p) => p.name === "left" && p.showAt <= s)) == null ? void 0 : m.content) ?? ""), r.$$.dirty & /*data, currentTime*/
    24 && t(0, n = ((d = l.find((p) => p.name === "right" && p.showAt <= s)) == null ? void 0 : d.content) ?? "");
  }, [n, i, a, l, s];
}
class ni extends re {
  constructor(e) {
    super(), ee(this, e, x1, y1, Q, { data: 3, currentTime: 4 }, g1);
  }
  get data() {
    return this.$$.ctx[3];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[4];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(ni, { data: {}, currentTime: {} }, [], [], !0);
function w1(r) {
  ie(r, "svelte-180u8c1", ".donut-slide.svelte-180u8c1{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;gap:2rem}svg.svelte-180u8c1{transform:rotate(-90deg)}.track.svelte-180u8c1{fill:none;stroke:#eee;stroke-width:20}.fill.svelte-180u8c1{fill:none;stroke-width:20;stroke-linecap:round;transition:stroke-dashoffset 1s ease}.center-text.svelte-180u8c1{fill:#333;font-size:2.5rem;font-weight:bold;transform:rotate(90deg)}.donut-label.svelte-180u8c1{font-size:2.5rem;font-weight:500}");
}
function k1(r) {
  let e, t, a, i, n, l, s, u, m;
  return {
    c() {
      e = z("div"), t = q0("svg"), a = q0("circle"), i = q0("circle"), n = q0("text"), l = pe(
        /*percent*/
        r[0]
      ), s = pe("%"), u = K(), m = z("div"), m.textContent = `${/*label*/
      r[1]}`, k(a, "class", "track svelte-180u8c1"), k(a, "cx", "100"), k(a, "cy", "100"), k(a, "r", "80"), k(i, "class", "fill svelte-180u8c1"), k(i, "cx", "100"), k(i, "cy", "100"), k(i, "r", "80"), k(
        i,
        "stroke",
        /*color*/
        r[2]
      ), k(
        i,
        "stroke-dasharray",
        /*circumference*/
        r[3]
      ), k(
        i,
        "stroke-dashoffset",
        /*offset*/
        r[4]
      ), k(n, "x", "100"), k(n, "y", "110"), k(n, "text-anchor", "middle"), k(n, "class", "center-text svelte-180u8c1"), k(t, "width", "200"), k(t, "height", "200"), k(t, "viewBox", "0 0 200 200"), k(t, "class", "svelte-180u8c1"), k(m, "class", "donut-label svelte-180u8c1"), k(e, "class", "donut-slide svelte-180u8c1");
    },
    m(d, p) {
      R(d, e, p), $(e, t), $(t, a), $(t, i), $(t, n), $(n, l), $(n, s), $(e, u), $(e, m);
    },
    p: q,
    i: q,
    o: q,
    d(d) {
      d && I(e);
    }
  };
}
function S1(r, e, t) {
  var m, d, p;
  let { data: a } = e;
  const i = parseInt(((m = a.find((y) => y.name === "percent")) == null ? void 0 : m.content) ?? 0), n = ((d = a.find((y) => y.name === "label")) == null ? void 0 : d.content) ?? "", l = ((p = a.find((y) => y.name === "color")) == null ? void 0 : p.content) ?? "#4CAF50", s = 2 * Math.PI * 80, u = s * (1 - i / 100);
  return r.$$set = (y) => {
    "data" in y && t(5, a = y.data);
  }, [i, n, l, s, u, a];
}
class li extends re {
  constructor(e) {
    super(), ee(this, e, S1, k1, Q, { data: 5 }, w1);
  }
  get data() {
    return this.$$.ctx[5];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(li, { data: {} }, [], [], !0);
function z1(r) {
  ie(r, "svelte-d2p9h1", ".slide-container.svelte-d2p9h1{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;width:100%;padding:40px;box-sizing:border-box;text-align:center;gap:20px}.slide-title.svelte-d2p9h1{font-size:6rem;margin:0}.slide-subtitle.svelte-d2p9h1{font-size:3rem;margin:0;opacity:0.8}@media(max-width: 768px){.slide-title.svelte-d2p9h1{font-size:3rem}.slide-subtitle.svelte-d2p9h1{font-size:1.25rem}}");
}
function Yr(r) {
  let e, t;
  return {
    c() {
      e = z("h1"), t = pe(
        /*title*/
        r[1]
      ), k(e, "class", "slide-title svelte-d2p9h1");
    },
    m(a, i) {
      R(a, e, i), $(e, t);
    },
    p(a, i) {
      i & /*title*/
      2 && ke(
        t,
        /*title*/
        a[1]
      );
    },
    d(a) {
      a && I(e);
    }
  };
}
function Zr(r) {
  let e, t;
  return {
    c() {
      e = z("p"), t = pe(
        /*subtitle*/
        r[0]
      ), k(e, "class", "slide-subtitle svelte-d2p9h1");
    },
    m(a, i) {
      R(a, e, i), $(e, t);
    },
    p(a, i) {
      i & /*subtitle*/
      1 && ke(
        t,
        /*subtitle*/
        a[0]
      );
    },
    d(a) {
      a && I(e);
    }
  };
}
function M1(r) {
  let e, t, a = (
    /*title*/
    r[1] && Yr(r)
  ), i = (
    /*subtitle*/
    r[0] && Zr(r)
  );
  return {
    c() {
      e = z("div"), a && a.c(), t = K(), i && i.c(), k(e, "class", "slide-container svelte-d2p9h1");
    },
    m(n, l) {
      R(n, e, l), a && a.m(e, null), $(e, t), i && i.m(e, null);
    },
    p(n, [l]) {
      /*title*/
      n[1] ? a ? a.p(n, l) : (a = Yr(n), a.c(), a.m(e, t)) : a && (a.d(1), a = null), /*subtitle*/
      n[0] ? i ? i.p(n, l) : (i = Zr(n), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i: q,
    o: q,
    d(n) {
      n && I(e), a && a.d(), i && i.d();
    }
  };
}
function T1(r, e, t) {
  let a, i, { data: n } = e, { currentTime: l } = e;
  return r.$$set = (s) => {
    "data" in s && t(2, n = s.data), "currentTime" in s && t(3, l = s.currentTime);
  }, r.$$.update = () => {
    var s, u;
    r.$$.dirty & /*data, currentTime*/
    12 && t(1, a = ((s = n.find((m) => m.name === "title" && m.showAt <= l)) == null ? void 0 : s.content) ?? ""), r.$$.dirty & /*data, currentTime*/
    12 && t(0, i = ((u = n.find((m) => m.name === "subtitle" && m.showAt <= l)) == null ? void 0 : u.content) ?? "");
  }, [i, a, n, l];
}
class si extends re {
  constructor(e) {
    super(), ee(this, e, T1, M1, Q, { data: 2, currentTime: 3 }, z1);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[3];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(si, { data: {}, currentTime: {} }, [], [], !0);
function A1(r) {
  ie(r, "svelte-iy1azi", ".wrapper.svelte-iy1azi{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;text-align:center;padding:0 2rem}.title.svelte-iy1azi{font-size:3rem;font-weight:700;margin:0 0 1rem 0;line-height:1.2}.paragraph.svelte-iy1azi{font-size:1.9rem;line-height:1.5;font-family:Helvetica , Arial , sans-serif;max-width:1000px;margin:0 auto;text-align:justify;text-justify:inter-word}");
}
function $1(r) {
  let e;
  return {
    c() {
      e = z("h1"), e.textContent = `${/*titleItem*/
      r[0].content}`, k(e, "class", "title svelte-iy1azi");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    d(t) {
      t && I(e);
    }
  };
}
function B1(r) {
  let e;
  return {
    c() {
      e = z("p"), e.textContent = `${/*paragraphItem*/
      r[1].content}`, k(e, "class", "paragraph svelte-iy1azi");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    d(t) {
      t && I(e);
    }
  };
}
function C1(r) {
  let e, t, a = (
    /*titleItem*/
    r[0] && $1(r)
  ), i = (
    /*paragraphItem*/
    r[1] && B1(r)
  );
  return {
    c() {
      e = z("div"), a && a.c(), t = K(), i && i.c(), k(e, "class", "wrapper svelte-iy1azi");
    },
    m(n, l) {
      R(n, e, l), a && a.m(e, null), $(e, t), i && i.m(e, null);
    },
    p(n, [l]) {
      /*titleItem*/
      n[0] && a.p(n, l), /*paragraphItem*/
      n[1] && i.p(n, l);
    },
    i: q,
    o: q,
    d(n) {
      n && I(e), a && a.d(), i && i.d();
    }
  };
}
function q1(r, e, t) {
  let { data: a = [] } = e;
  const i = a.find((l) => l.name === "title"), n = a.find((l) => l.name === "paragraph");
  return r.$$set = (l) => {
    "data" in l && t(2, a = l.data);
  }, [i, n, a];
}
class oi extends re {
  constructor(e) {
    super(), ee(this, e, q1, C1, Q, { data: 2 }, A1);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(oi, { data: {} }, [], [], !0);
function D1(r) {
  ie(r, "svelte-1aozvv6", ".slide-container.svelte-1aozvv6{display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:40px;box-sizing:border-box}.bullet-list.svelte-1aozvv6{list-style-type:disc;padding-left:1.5rem;font-size:5rem}.bullet-item.svelte-1aozvv6{margin-bottom:0.8rem}@media(max-width: 768px){.bullet-list.svelte-1aozvv6{font-size:2rem}}");
}
function Kr(r, e, t) {
  const a = r.slice();
  return a[3] = e[t], a;
}
function Jr(r) {
  let e, t = (
    /*bullet*/
    r[3] + ""
  ), a;
  return {
    c() {
      e = z("li"), a = pe(t), k(e, "class", "bullet-item svelte-1aozvv6");
    },
    m(i, n) {
      R(i, e, n), $(e, a);
    },
    p(i, n) {
      n & /*visibleBullets*/
      1 && t !== (t = /*bullet*/
      i[3] + "") && ke(a, t);
    },
    d(i) {
      i && I(e);
    }
  };
}
function N1(r) {
  let e, t, a = ce(
    /*visibleBullets*/
    r[0]
  ), i = [];
  for (let n = 0; n < a.length; n += 1)
    i[n] = Jr(Kr(r, a, n));
  return {
    c() {
      e = z("div"), t = z("ul");
      for (let n = 0; n < i.length; n += 1)
        i[n].c();
      k(t, "class", "bullet-list svelte-1aozvv6"), k(e, "class", "slide-container svelte-1aozvv6");
    },
    m(n, l) {
      R(n, e, l), $(e, t);
      for (let s = 0; s < i.length; s += 1)
        i[s] && i[s].m(t, null);
    },
    p(n, [l]) {
      if (l & /*visibleBullets*/
      1) {
        a = ce(
          /*visibleBullets*/
          n[0]
        );
        let s;
        for (s = 0; s < a.length; s += 1) {
          const u = Kr(n, a, s);
          i[s] ? i[s].p(u, l) : (i[s] = Jr(u), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = a.length;
      }
    },
    i: q,
    o: q,
    d(n) {
      n && I(e), Re(i, n);
    }
  };
}
function _1(r, e, t) {
  let a, { data: i } = e, { currentTime: n } = e;
  return r.$$set = (l) => {
    "data" in l && t(1, i = l.data), "currentTime" in l && t(2, n = l.currentTime);
  }, r.$$.update = () => {
    r.$$.dirty & /*data, currentTime*/
    6 && t(0, a = i.filter((l) => l.name === "bullet" && l.showAt <= n).sort((l, s) => l.showAt - s.showAt).map((l) => l.content));
  }, [a, i, n];
}
class ui extends re {
  constructor(e) {
    super(), ee(this, e, _1, N1, Q, { data: 1, currentTime: 2 }, D1);
  }
  get data() {
    return this.$$.ctx[1];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[2];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(ui, { data: {}, currentTime: {} }, [], [], !0);
function E1(r) {
  ie(r, "svelte-hzv82f", ".slide-container.svelte-hzv82f{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;gap:20px;padding:40px;box-sizing:border-box;text-align:center}.big-number.svelte-hzv82f{font-size:6rem;font-weight:bold}.label-text.svelte-hzv82f{font-size:1.5rem;opacity:0.8}@media(max-width: 768px){.big-number.svelte-hzv82f{font-size:3rem}.label-text.svelte-hzv82f{font-size:1rem}}");
}
function I1(r) {
  let e, t, a, i;
  return {
    c() {
      e = z("div"), t = z("div"), t.textContent = `${/*number*/
      r[0]}`, a = K(), i = z("div"), i.textContent = `${/*label*/
      r[1]}`, k(t, "class", "big-number svelte-hzv82f"), k(i, "class", "label-text svelte-hzv82f"), k(e, "class", "slide-container svelte-hzv82f");
    },
    m(n, l) {
      R(n, e, l), $(e, t), $(e, a), $(e, i);
    },
    p: q,
    i: q,
    o: q,
    d(n) {
      n && I(e);
    }
  };
}
function R1(r, e, t) {
  var l, s;
  let { data: a } = e;
  const i = ((l = a.find((u) => u.name === "number")) == null ? void 0 : l.content) ?? "", n = ((s = a.find((u) => u.name === "label")) == null ? void 0 : s.content) ?? "";
  return r.$$set = (u) => {
    "data" in u && t(2, a = u.data);
  }, [i, n, a];
}
class ci extends re {
  constructor(e) {
    super(), ee(this, e, R1, I1, Q, { data: 2 }, E1);
  }
  get data() {
    return this.$$.ctx[2];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(ci, { data: {} }, [], [], !0);
function L1(r) {
  ie(r, "svelte-1sisncx", ".slide.svelte-1sisncx.svelte-1sisncx{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;text-align:center;padding:clamp(1rem, 5vw, 2rem);height:100vh;box-sizing:border-box}.title.svelte-1sisncx.svelte-1sisncx{font-size:clamp(2rem, 6vw, 3rem);margin:clamp(0.25rem, 1.5vw, 0.75rem) 0;line-height:1.1}.subtitle.svelte-1sisncx.svelte-1sisncx{font-size:clamp(1.25rem, 4vw, 1.5rem);margin-bottom:clamp(0.5rem, 2vw, 1rem);opacity:0.8}.image-container.svelte-1sisncx.svelte-1sisncx{flex:1;display:flex;justify-content:center;align-items:center;width:100%}.image-container.svelte-1sisncx img.svelte-1sisncx{width:clamp(40%, 70vw, 70%);height:auto;-o-object-fit:contain;object-fit:contain}");
}
function O1(r) {
  let e, t, a, i, n, l, s, u;
  return {
    c() {
      e = z("div"), t = z("h1"), t.textContent = `${/*title*/
      r[0]}`, a = K(), i = z("p"), i.textContent = `— ${/*subtitle*/
      r[1]}`, n = K(), l = z("div"), s = z("img"), k(t, "class", "title svelte-1sisncx"), k(i, "class", "subtitle svelte-1sisncx"), Ie(s.src, u = /*imageSrc*/
      r[2]) || k(s, "src", u), k(
        s,
        "alt",
        /*subtitle*/
        r[1]
      ), k(s, "class", "svelte-1sisncx"), k(l, "class", "image-container svelte-1sisncx"), k(e, "class", "slide svelte-1sisncx");
    },
    m(m, d) {
      R(m, e, d), $(e, t), $(e, a), $(e, i), $(e, n), $(e, l), $(l, s);
    },
    p: q,
    i: q,
    o: q,
    d(m) {
      m && I(e);
    }
  };
}
function H1(r, e, t) {
  var s, u, m;
  let { data: a } = e;
  const i = ((s = a.find((d) => d.name === "quoteLine")) == null ? void 0 : s.content) ?? "", n = ((u = a.find((d) => d.name === "author")) == null ? void 0 : u.content) ?? "", l = ((m = a.find((d) => d.name === "image")) == null ? void 0 : m.content) ?? "";
  return r.$$set = (d) => {
    "data" in d && t(3, a = d.data);
  }, [i, n, l, a];
}
class hi extends re {
  constructor(e) {
    super(), ee(this, e, H1, O1, Q, { data: 3 }, L1);
  }
  get data() {
    return this.$$.ctx[3];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(hi, { data: {} }, [], [], !0);
function F1(r) {
  ie(r, "svelte-zu687n", ".slide-container.svelte-zu687n{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;text-align:center;gap:12px;padding:40px;box-sizing:border-box}.headline.svelte-zu687n{font-size:5.6rem;margin:0 0 10px 0}.contact-line.svelte-zu687n{font-size:3.5rem;margin:0}@media(max-width: 768px){.headline.svelte-zu687n{font-size:3.6rem}.contact-line.svelte-zu687n{font-size:2rem}}");
}
function P1(r) {
  let e, t, a, i, n, l;
  return {
    c() {
      e = z("div"), t = z("h1"), t.textContent = `${/*headline*/
      r[0]}`, a = K(), i = z("p"), i.textContent = `Email: ${/*email*/
      r[1]}`, n = K(), l = z("p"), l.textContent = `Phone: ${/*phone*/
      r[2]}`, k(t, "class", "headline svelte-zu687n"), k(i, "class", "contact-line svelte-zu687n"), k(l, "class", "contact-line svelte-zu687n"), k(e, "class", "slide-container svelte-zu687n");
    },
    m(s, u) {
      R(s, e, u), $(e, t), $(e, a), $(e, i), $(e, n), $(e, l);
    },
    p: q,
    i: q,
    o: q,
    d(s) {
      s && I(e);
    }
  };
}
function j1(r, e, t) {
  var s, u, m;
  let { data: a } = e;
  const i = ((s = a.find((d) => d.name === "headline")) == null ? void 0 : s.content) ?? "", n = ((u = a.find((d) => d.name === "email")) == null ? void 0 : u.content) ?? "", l = ((m = a.find((d) => d.name === "phone")) == null ? void 0 : m.content) ?? "";
  return r.$$set = (d) => {
    "data" in d && t(3, a = d.data);
  }, [i, n, l, a];
}
class mi extends re {
  constructor(e) {
    super(), ee(this, e, j1, P1, Q, { data: 3 }, F1);
  }
  get data() {
    return this.$$.ctx[3];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(mi, { data: {} }, [], [], !0);
function G1(r) {
  ie(r, "svelte-1ubxe27", ".full-image-slide.svelte-1ubxe27{height:100%;width:100%;padding:1rem;box-sizing:border-box}.full-image.svelte-1ubxe27{width:100%;height:100%;-o-object-fit:contain;object-fit:contain;display:block}");
}
function V1(r) {
  let e, t, a;
  return {
    c() {
      e = z("div"), t = z("img"), k(t, "class", "full-image svelte-1ubxe27"), Ie(t.src, a = /*imageSrc*/
      r[0]) || k(t, "src", a), k(t, "alt", "Slide Image"), k(e, "class", "full-image-slide svelte-1ubxe27");
    },
    m(i, n) {
      R(i, e, n), $(e, t);
    },
    p: q,
    i: q,
    o: q,
    d(i) {
      i && I(e);
    }
  };
}
function U1(r, e, t) {
  var n;
  let { data: a } = e;
  const i = ((n = a.find((l) => l.name === "image")) == null ? void 0 : n.content) ?? "";
  return r.$$set = (l) => {
    "data" in l && t(1, a = l.data);
  }, [i, a];
}
class di extends re {
  constructor(e) {
    super(), ee(this, e, U1, V1, Q, { data: 1 }, G1);
  }
  get data() {
    return this.$$.ctx[1];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
}
te(di, { data: {} }, [], [], !0);
class Te {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, a) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = a;
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Te(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class qe {
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
    return new qe(t, Te.range(this, e));
  }
}
class A {
  // Error position based on passed-in Token or ParseNode.
  constructor(e, t) {
    this.position = void 0;
    var a = "KaTeX parse error: " + e, i, n = t && t.loc;
    if (n && n.start <= n.end) {
      var l = n.lexer.input;
      i = n.start;
      var s = n.end;
      i === l.length ? a += " at end of input: " : a += " at position " + (i + 1) + ": ";
      var u = l.slice(i, s).replace(/[^]/g, "$&̲"), m;
      i > 15 ? m = "…" + l.slice(i - 15, i) : m = l.slice(0, i);
      var d;
      s + 15 < l.length ? d = l.slice(s, s + 15) + "…" : d = l.slice(s), a += m + u + d;
    }
    var p = new Error(a);
    return p.name = "ParseError", p.__proto__ = A.prototype, p.position = i, p;
  }
}
A.prototype.__proto__ = Error.prototype;
var W1 = function(e, t) {
  return e.indexOf(t) !== -1;
}, X1 = function(e, t) {
  return e === void 0 ? t : e;
}, Y1 = /([A-Z])/g, Z1 = function(e) {
  return e.replace(Y1, "-$1").toLowerCase();
}, K1 = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, J1 = /[&><"']/g;
function Q1(r) {
  return String(r).replace(J1, (e) => K1[e]);
}
var fi = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, el = function(e) {
  var t = fi(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, tl = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, rl = function(e) {
  var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
  return t != null ? t[1] : "_relative";
}, P = {
  contains: W1,
  deflt: X1,
  escape: Q1,
  hyphenate: Z1,
  getBaseElem: fi,
  isCharacterBox: el,
  protocolFromUrl: rl
}, ot = {
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
    cliProcessor: (r) => "#" + r
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (r, e) => (e.push(r), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (r) => Math.max(0, r),
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
    processor: (r) => Math.max(0, r),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (r) => Math.max(0, r),
    cli: "-e, --max-expand <n>",
    cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function al(r) {
  if (r.default)
    return r.default;
  var e = r.type, t = Array.isArray(e) ? e[0] : e;
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
class er {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in ot)
      if (ot.hasOwnProperty(t)) {
        var a = ot[t];
        this[t] = e[t] !== void 0 ? a.processor ? a.processor(e[t]) : e[t] : al(a);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, a) {
    var i = this.strict;
    if (typeof i == "function" && (i = i(e, t, a)), !(!i || i === "ignore")) {
      if (i === !0 || i === "error")
        throw new A("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), a);
      i === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + t + " [" + e + "]"));
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
  useStrictBehavior(e, t, a) {
    var i = this.strict;
    if (typeof i == "function")
      try {
        i = i(e, t, a);
      } catch {
        i = "error";
      }
    return !i || i === "ignore" ? !1 : i === !0 || i === "error" ? !0 : i === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + t + " [" + e + "]")), !1);
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
    e.url && !e.protocol && (e.protocol = P.protocolFromUrl(e.url));
    var t = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!t;
  }
}
class e0 {
  constructor(e, t, a) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = a;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Le[il[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Le[nl[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Le[ll[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Le[sl[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Le[ol[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Le[ul[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var tr = 0, ct = 1, M0 = 2, Xe = 3, L0 = 4, De = 5, T0 = 6, we = 7, Le = [new e0(tr, 0, !1), new e0(ct, 0, !0), new e0(M0, 1, !1), new e0(Xe, 1, !0), new e0(L0, 2, !1), new e0(De, 2, !0), new e0(T0, 3, !1), new e0(we, 3, !0)], il = [L0, De, L0, De, T0, we, T0, we], nl = [De, De, De, De, we, we, we, we], ll = [M0, Xe, L0, De, T0, we, T0, we], sl = [Xe, Xe, De, De, we, we, we, we], ol = [ct, ct, Xe, Xe, De, De, we, we], ul = [tr, ct, M0, Xe, M0, Xe, M0, Xe], O = {
  DISPLAY: Le[tr],
  TEXT: Le[M0],
  SCRIPT: Le[L0],
  SCRIPTSCRIPT: Le[T0]
}, jt = [{
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
function cl(r) {
  for (var e = 0; e < jt.length; e++)
    for (var t = jt[e], a = 0; a < t.blocks.length; a++) {
      var i = t.blocks[a];
      if (r >= i[0] && r <= i[1])
        return t.name;
    }
  return null;
}
var ut = [];
jt.forEach((r) => r.blocks.forEach((e) => ut.push(...e)));
function pi(r) {
  for (var e = 0; e < ut.length; e += 2)
    if (r >= ut[e] && r <= ut[e + 1])
      return !0;
  return !1;
}
var k0 = 80, hl = function(e, t) {
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
}, ml = function(e, t) {
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
}, dl = function(e, t) {
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
}, fl = function(e, t) {
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
}, pl = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, vl = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, gl = function(e, t, a) {
  var i = a - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, bl = function(e, t, a) {
  t = 1e3 * t;
  var i = "";
  switch (e) {
    case "sqrtMain":
      i = hl(t, k0);
      break;
    case "sqrtSize1":
      i = ml(t, k0);
      break;
    case "sqrtSize2":
      i = dl(t, k0);
      break;
    case "sqrtSize3":
      i = fl(t, k0);
      break;
    case "sqrtSize4":
      i = pl(t, k0);
      break;
    case "sqrtTall":
      i = gl(t, k0, a);
  }
  return i;
}, yl = function(e, t) {
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
}, Qr = {
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
  // baraboveleftarrow is mostly from from glyph U+2190 in font KaTeX Main
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
};
class P0 {
  // HtmlDomNode
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return P.contains(this.classes, e);
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
var Oe = {
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
}, K0 = {
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
  // This value is also used in katex.less; if you change it make sure the
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
}, ea = {
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
function xl(r, e) {
  Oe[r] = e;
}
function rr(r, e, t) {
  if (!Oe[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var a = r.charCodeAt(0), i = Oe[e][a];
  if (!i && r[0] in ea && (a = ea[r[0]].charCodeAt(0), i = Oe[e][a]), !i && t === "text" && pi(a) && (i = Oe[e][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var Tt = {};
function wl(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Tt[e]) {
    var t = Tt[e] = {
      cssEmPerMu: K0.quad[e] / 18
    };
    for (var a in K0)
      K0.hasOwnProperty(a) && (t[a] = K0[a][e]);
  }
  return Tt[e];
}
var kl = [
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
], ta = [
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
], ra = function(e, t) {
  return t.size < 2 ? e : kl[e - 1][t.size - 1];
};
class We {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || We.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = ta[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    for (var a in e)
      e.hasOwnProperty(a) && (t[a] = e[a]);
    return new We(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: ra(this.textSize, e)
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
      sizeMultiplier: ta[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = ra(We.BASESIZE, e);
    return this.size === t && this.textSize === We.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== We.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + We.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = wl(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
We.BASESIZE = 6;
var Gt = {
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
}, Sl = {
  ex: !0,
  em: !0,
  mu: !0
}, vi = function(e) {
  return typeof e != "string" && (e = e.unit), e in Gt || e in Sl || e === "ex";
}, ue = function(e, t) {
  var a;
  if (e.unit in Gt)
    a = Gt[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    a = t.fontMetrics().cssEmPerMu;
  else {
    var i;
    if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
      a = i.fontMetrics().xHeight;
    else if (e.unit === "em")
      a = i.fontMetrics().quad;
    else
      throw new A("Invalid unit: '" + e.unit + "'");
    i !== t && (a *= i.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * a, t.maxSize);
}, C = function(e) {
  return +e.toFixed(4) + "em";
}, n0 = function(e) {
  return e.filter((t) => t).join(" ");
}, gi = function(e, t, a) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var i = t.getColor();
    i && (this.style.color = i);
  }
}, bi = function(e) {
  var t = document.createElement(e);
  t.className = n0(this.classes);
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (t.style[a] = this.style[a]);
  for (var i in this.attributes)
    this.attributes.hasOwnProperty(i) && t.setAttribute(i, this.attributes[i]);
  for (var n = 0; n < this.children.length; n++)
    t.appendChild(this.children[n].toNode());
  return t;
}, yi = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + P.escape(n0(this.classes)) + '"');
  var a = "";
  for (var i in this.style)
    this.style.hasOwnProperty(i) && (a += P.hyphenate(i) + ":" + this.style[i] + ";");
  a && (t += ' style="' + P.escape(a) + '"');
  for (var n in this.attributes)
    this.attributes.hasOwnProperty(n) && (t += " " + n + '="' + P.escape(this.attributes[n]) + '"');
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class j0 {
  constructor(e, t, a, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, gi.call(this, e, a, i), this.children = t || [];
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
    return P.contains(this.classes, e);
  }
  toNode() {
    return bi.call(this, "span");
  }
  toMarkup() {
    return yi.call(this, "span");
  }
}
class ar {
  constructor(e, t, a, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, gi.call(this, t, i), this.children = a || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return P.contains(this.classes, e);
  }
  toNode() {
    return bi.call(this, "a");
  }
  toMarkup() {
    return yi.call(this, "a");
  }
}
class zl {
  constructor(e, t, a) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = a;
  }
  hasClass(e) {
    return P.contains(this.classes, e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ", t = "";
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (t += P.hyphenate(a) + ":" + this.style[a] + ";");
    return t && (e += ' style="' + P.escape(t) + '"'), e += "'/>", e;
  }
}
var Ml = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Ne {
  constructor(e, t, a, i, n, l, s, u) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = a || 0, this.italic = i || 0, this.skew = n || 0, this.width = l || 0, this.classes = s || [], this.style = u || {}, this.maxFontSize = 0;
    var m = cl(this.text.charCodeAt(0));
    m && this.classes.push(m + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Ml[this.text]);
  }
  hasClass(e) {
    return P.contains(this.classes, e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = C(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = n0(this.classes));
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (t = t || document.createElement("span"), t.style[a] = this.style[a]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += P.escape(n0(this.classes)), t += '"');
    var a = "";
    this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
    for (var i in this.style)
      this.style.hasOwnProperty(i) && (a += P.hyphenate(i) + ":" + this.style[i] + ";");
    a && (e = !0, t += ' style="' + P.escape(a) + '"');
    var n = P.escape(this.text);
    return e ? (t += ">", t += n, t += "</span>", t) : n;
  }
}
class l0 {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var a in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
    for (var i = 0; i < this.children.length; i++)
      t.appendChild(this.children[i].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
    e += ">";
    for (var a = 0; a < this.children.length; a++)
      e += this.children[a].toMarkup();
    return e += "</svg>", e;
  }
}
class f0 {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Qr[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + Qr[this.pathName] + "'/>";
  }
}
class Vt {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var a in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
    return e += "/>", e;
  }
}
function aa(r) {
  if (r instanceof Ne)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Tl(r) {
  if (r instanceof j0)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var Al = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, $l = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, ae = {
  math: {},
  text: {}
};
function o(r, e, t, a, i, n) {
  ae[r][i] = {
    font: e,
    group: t,
    replace: a
  }, n && a && (ae[r][a] = ae[r][i]);
}
var c = "math", S = "text", h = "main", v = "ams", se = "accent-token", _ = "bin", Se = "close", B0 = "inner", H = "mathord", fe = "op-token", Ae = "open", pt = "punct", g = "rel", Je = "spacing", b = "textord";
o(c, h, g, "≡", "\\equiv", !0);
o(c, h, g, "≺", "\\prec", !0);
o(c, h, g, "≻", "\\succ", !0);
o(c, h, g, "∼", "\\sim", !0);
o(c, h, g, "⊥", "\\perp");
o(c, h, g, "⪯", "\\preceq", !0);
o(c, h, g, "⪰", "\\succeq", !0);
o(c, h, g, "≃", "\\simeq", !0);
o(c, h, g, "∣", "\\mid", !0);
o(c, h, g, "≪", "\\ll", !0);
o(c, h, g, "≫", "\\gg", !0);
o(c, h, g, "≍", "\\asymp", !0);
o(c, h, g, "∥", "\\parallel");
o(c, h, g, "⋈", "\\bowtie", !0);
o(c, h, g, "⌣", "\\smile", !0);
o(c, h, g, "⊑", "\\sqsubseteq", !0);
o(c, h, g, "⊒", "\\sqsupseteq", !0);
o(c, h, g, "≐", "\\doteq", !0);
o(c, h, g, "⌢", "\\frown", !0);
o(c, h, g, "∋", "\\ni", !0);
o(c, h, g, "∝", "\\propto", !0);
o(c, h, g, "⊢", "\\vdash", !0);
o(c, h, g, "⊣", "\\dashv", !0);
o(c, h, g, "∋", "\\owns");
o(c, h, pt, ".", "\\ldotp");
o(c, h, pt, "⋅", "\\cdotp");
o(c, h, b, "#", "\\#");
o(S, h, b, "#", "\\#");
o(c, h, b, "&", "\\&");
o(S, h, b, "&", "\\&");
o(c, h, b, "ℵ", "\\aleph", !0);
o(c, h, b, "∀", "\\forall", !0);
o(c, h, b, "ℏ", "\\hbar", !0);
o(c, h, b, "∃", "\\exists", !0);
o(c, h, b, "∇", "\\nabla", !0);
o(c, h, b, "♭", "\\flat", !0);
o(c, h, b, "ℓ", "\\ell", !0);
o(c, h, b, "♮", "\\natural", !0);
o(c, h, b, "♣", "\\clubsuit", !0);
o(c, h, b, "℘", "\\wp", !0);
o(c, h, b, "♯", "\\sharp", !0);
o(c, h, b, "♢", "\\diamondsuit", !0);
o(c, h, b, "ℜ", "\\Re", !0);
o(c, h, b, "♡", "\\heartsuit", !0);
o(c, h, b, "ℑ", "\\Im", !0);
o(c, h, b, "♠", "\\spadesuit", !0);
o(c, h, b, "§", "\\S", !0);
o(S, h, b, "§", "\\S");
o(c, h, b, "¶", "\\P", !0);
o(S, h, b, "¶", "\\P");
o(c, h, b, "†", "\\dag");
o(S, h, b, "†", "\\dag");
o(S, h, b, "†", "\\textdagger");
o(c, h, b, "‡", "\\ddag");
o(S, h, b, "‡", "\\ddag");
o(S, h, b, "‡", "\\textdaggerdbl");
o(c, h, Se, "⎱", "\\rmoustache", !0);
o(c, h, Ae, "⎰", "\\lmoustache", !0);
o(c, h, Se, "⟯", "\\rgroup", !0);
o(c, h, Ae, "⟮", "\\lgroup", !0);
o(c, h, _, "∓", "\\mp", !0);
o(c, h, _, "⊖", "\\ominus", !0);
o(c, h, _, "⊎", "\\uplus", !0);
o(c, h, _, "⊓", "\\sqcap", !0);
o(c, h, _, "∗", "\\ast");
o(c, h, _, "⊔", "\\sqcup", !0);
o(c, h, _, "◯", "\\bigcirc", !0);
o(c, h, _, "∙", "\\bullet", !0);
o(c, h, _, "‡", "\\ddagger");
o(c, h, _, "≀", "\\wr", !0);
o(c, h, _, "⨿", "\\amalg");
o(c, h, _, "&", "\\And");
o(c, h, g, "⟵", "\\longleftarrow", !0);
o(c, h, g, "⇐", "\\Leftarrow", !0);
o(c, h, g, "⟸", "\\Longleftarrow", !0);
o(c, h, g, "⟶", "\\longrightarrow", !0);
o(c, h, g, "⇒", "\\Rightarrow", !0);
o(c, h, g, "⟹", "\\Longrightarrow", !0);
o(c, h, g, "↔", "\\leftrightarrow", !0);
o(c, h, g, "⟷", "\\longleftrightarrow", !0);
o(c, h, g, "⇔", "\\Leftrightarrow", !0);
o(c, h, g, "⟺", "\\Longleftrightarrow", !0);
o(c, h, g, "↦", "\\mapsto", !0);
o(c, h, g, "⟼", "\\longmapsto", !0);
o(c, h, g, "↗", "\\nearrow", !0);
o(c, h, g, "↩", "\\hookleftarrow", !0);
o(c, h, g, "↪", "\\hookrightarrow", !0);
o(c, h, g, "↘", "\\searrow", !0);
o(c, h, g, "↼", "\\leftharpoonup", !0);
o(c, h, g, "⇀", "\\rightharpoonup", !0);
o(c, h, g, "↙", "\\swarrow", !0);
o(c, h, g, "↽", "\\leftharpoondown", !0);
o(c, h, g, "⇁", "\\rightharpoondown", !0);
o(c, h, g, "↖", "\\nwarrow", !0);
o(c, h, g, "⇌", "\\rightleftharpoons", !0);
o(c, v, g, "≮", "\\nless", !0);
o(c, v, g, "", "\\@nleqslant");
o(c, v, g, "", "\\@nleqq");
o(c, v, g, "⪇", "\\lneq", !0);
o(c, v, g, "≨", "\\lneqq", !0);
o(c, v, g, "", "\\@lvertneqq");
o(c, v, g, "⋦", "\\lnsim", !0);
o(c, v, g, "⪉", "\\lnapprox", !0);
o(c, v, g, "⊀", "\\nprec", !0);
o(c, v, g, "⋠", "\\npreceq", !0);
o(c, v, g, "⋨", "\\precnsim", !0);
o(c, v, g, "⪹", "\\precnapprox", !0);
o(c, v, g, "≁", "\\nsim", !0);
o(c, v, g, "", "\\@nshortmid");
o(c, v, g, "∤", "\\nmid", !0);
o(c, v, g, "⊬", "\\nvdash", !0);
o(c, v, g, "⊭", "\\nvDash", !0);
o(c, v, g, "⋪", "\\ntriangleleft");
o(c, v, g, "⋬", "\\ntrianglelefteq", !0);
o(c, v, g, "⊊", "\\subsetneq", !0);
o(c, v, g, "", "\\@varsubsetneq");
o(c, v, g, "⫋", "\\subsetneqq", !0);
o(c, v, g, "", "\\@varsubsetneqq");
o(c, v, g, "≯", "\\ngtr", !0);
o(c, v, g, "", "\\@ngeqslant");
o(c, v, g, "", "\\@ngeqq");
o(c, v, g, "⪈", "\\gneq", !0);
o(c, v, g, "≩", "\\gneqq", !0);
o(c, v, g, "", "\\@gvertneqq");
o(c, v, g, "⋧", "\\gnsim", !0);
o(c, v, g, "⪊", "\\gnapprox", !0);
o(c, v, g, "⊁", "\\nsucc", !0);
o(c, v, g, "⋡", "\\nsucceq", !0);
o(c, v, g, "⋩", "\\succnsim", !0);
o(c, v, g, "⪺", "\\succnapprox", !0);
o(c, v, g, "≆", "\\ncong", !0);
o(c, v, g, "", "\\@nshortparallel");
o(c, v, g, "∦", "\\nparallel", !0);
o(c, v, g, "⊯", "\\nVDash", !0);
o(c, v, g, "⋫", "\\ntriangleright");
o(c, v, g, "⋭", "\\ntrianglerighteq", !0);
o(c, v, g, "", "\\@nsupseteqq");
o(c, v, g, "⊋", "\\supsetneq", !0);
o(c, v, g, "", "\\@varsupsetneq");
o(c, v, g, "⫌", "\\supsetneqq", !0);
o(c, v, g, "", "\\@varsupsetneqq");
o(c, v, g, "⊮", "\\nVdash", !0);
o(c, v, g, "⪵", "\\precneqq", !0);
o(c, v, g, "⪶", "\\succneqq", !0);
o(c, v, g, "", "\\@nsubseteqq");
o(c, v, _, "⊴", "\\unlhd");
o(c, v, _, "⊵", "\\unrhd");
o(c, v, g, "↚", "\\nleftarrow", !0);
o(c, v, g, "↛", "\\nrightarrow", !0);
o(c, v, g, "⇍", "\\nLeftarrow", !0);
o(c, v, g, "⇏", "\\nRightarrow", !0);
o(c, v, g, "↮", "\\nleftrightarrow", !0);
o(c, v, g, "⇎", "\\nLeftrightarrow", !0);
o(c, v, g, "△", "\\vartriangle");
o(c, v, b, "ℏ", "\\hslash");
o(c, v, b, "▽", "\\triangledown");
o(c, v, b, "◊", "\\lozenge");
o(c, v, b, "Ⓢ", "\\circledS");
o(c, v, b, "®", "\\circledR");
o(S, v, b, "®", "\\circledR");
o(c, v, b, "∡", "\\measuredangle", !0);
o(c, v, b, "∄", "\\nexists");
o(c, v, b, "℧", "\\mho");
o(c, v, b, "Ⅎ", "\\Finv", !0);
o(c, v, b, "⅁", "\\Game", !0);
o(c, v, b, "‵", "\\backprime");
o(c, v, b, "▲", "\\blacktriangle");
o(c, v, b, "▼", "\\blacktriangledown");
o(c, v, b, "■", "\\blacksquare");
o(c, v, b, "⧫", "\\blacklozenge");
o(c, v, b, "★", "\\bigstar");
o(c, v, b, "∢", "\\sphericalangle", !0);
o(c, v, b, "∁", "\\complement", !0);
o(c, v, b, "ð", "\\eth", !0);
o(S, h, b, "ð", "ð");
o(c, v, b, "╱", "\\diagup");
o(c, v, b, "╲", "\\diagdown");
o(c, v, b, "□", "\\square");
o(c, v, b, "□", "\\Box");
o(c, v, b, "◊", "\\Diamond");
o(c, v, b, "¥", "\\yen", !0);
o(S, v, b, "¥", "\\yen", !0);
o(c, v, b, "✓", "\\checkmark", !0);
o(S, v, b, "✓", "\\checkmark");
o(c, v, b, "ℶ", "\\beth", !0);
o(c, v, b, "ℸ", "\\daleth", !0);
o(c, v, b, "ℷ", "\\gimel", !0);
o(c, v, b, "ϝ", "\\digamma", !0);
o(c, v, b, "ϰ", "\\varkappa");
o(c, v, Ae, "┌", "\\@ulcorner", !0);
o(c, v, Se, "┐", "\\@urcorner", !0);
o(c, v, Ae, "└", "\\@llcorner", !0);
o(c, v, Se, "┘", "\\@lrcorner", !0);
o(c, v, g, "≦", "\\leqq", !0);
o(c, v, g, "⩽", "\\leqslant", !0);
o(c, v, g, "⪕", "\\eqslantless", !0);
o(c, v, g, "≲", "\\lesssim", !0);
o(c, v, g, "⪅", "\\lessapprox", !0);
o(c, v, g, "≊", "\\approxeq", !0);
o(c, v, _, "⋖", "\\lessdot");
o(c, v, g, "⋘", "\\lll", !0);
o(c, v, g, "≶", "\\lessgtr", !0);
o(c, v, g, "⋚", "\\lesseqgtr", !0);
o(c, v, g, "⪋", "\\lesseqqgtr", !0);
o(c, v, g, "≑", "\\doteqdot");
o(c, v, g, "≓", "\\risingdotseq", !0);
o(c, v, g, "≒", "\\fallingdotseq", !0);
o(c, v, g, "∽", "\\backsim", !0);
o(c, v, g, "⋍", "\\backsimeq", !0);
o(c, v, g, "⫅", "\\subseteqq", !0);
o(c, v, g, "⋐", "\\Subset", !0);
o(c, v, g, "⊏", "\\sqsubset", !0);
o(c, v, g, "≼", "\\preccurlyeq", !0);
o(c, v, g, "⋞", "\\curlyeqprec", !0);
o(c, v, g, "≾", "\\precsim", !0);
o(c, v, g, "⪷", "\\precapprox", !0);
o(c, v, g, "⊲", "\\vartriangleleft");
o(c, v, g, "⊴", "\\trianglelefteq");
o(c, v, g, "⊨", "\\vDash", !0);
o(c, v, g, "⊪", "\\Vvdash", !0);
o(c, v, g, "⌣", "\\smallsmile");
o(c, v, g, "⌢", "\\smallfrown");
o(c, v, g, "≏", "\\bumpeq", !0);
o(c, v, g, "≎", "\\Bumpeq", !0);
o(c, v, g, "≧", "\\geqq", !0);
o(c, v, g, "⩾", "\\geqslant", !0);
o(c, v, g, "⪖", "\\eqslantgtr", !0);
o(c, v, g, "≳", "\\gtrsim", !0);
o(c, v, g, "⪆", "\\gtrapprox", !0);
o(c, v, _, "⋗", "\\gtrdot");
o(c, v, g, "⋙", "\\ggg", !0);
o(c, v, g, "≷", "\\gtrless", !0);
o(c, v, g, "⋛", "\\gtreqless", !0);
o(c, v, g, "⪌", "\\gtreqqless", !0);
o(c, v, g, "≖", "\\eqcirc", !0);
o(c, v, g, "≗", "\\circeq", !0);
o(c, v, g, "≜", "\\triangleq", !0);
o(c, v, g, "∼", "\\thicksim");
o(c, v, g, "≈", "\\thickapprox");
o(c, v, g, "⫆", "\\supseteqq", !0);
o(c, v, g, "⋑", "\\Supset", !0);
o(c, v, g, "⊐", "\\sqsupset", !0);
o(c, v, g, "≽", "\\succcurlyeq", !0);
o(c, v, g, "⋟", "\\curlyeqsucc", !0);
o(c, v, g, "≿", "\\succsim", !0);
o(c, v, g, "⪸", "\\succapprox", !0);
o(c, v, g, "⊳", "\\vartriangleright");
o(c, v, g, "⊵", "\\trianglerighteq");
o(c, v, g, "⊩", "\\Vdash", !0);
o(c, v, g, "∣", "\\shortmid");
o(c, v, g, "∥", "\\shortparallel");
o(c, v, g, "≬", "\\between", !0);
o(c, v, g, "⋔", "\\pitchfork", !0);
o(c, v, g, "∝", "\\varpropto");
o(c, v, g, "◀", "\\blacktriangleleft");
o(c, v, g, "∴", "\\therefore", !0);
o(c, v, g, "∍", "\\backepsilon");
o(c, v, g, "▶", "\\blacktriangleright");
o(c, v, g, "∵", "\\because", !0);
o(c, v, g, "⋘", "\\llless");
o(c, v, g, "⋙", "\\gggtr");
o(c, v, _, "⊲", "\\lhd");
o(c, v, _, "⊳", "\\rhd");
o(c, v, g, "≂", "\\eqsim", !0);
o(c, h, g, "⋈", "\\Join");
o(c, v, g, "≑", "\\Doteq", !0);
o(c, v, _, "∔", "\\dotplus", !0);
o(c, v, _, "∖", "\\smallsetminus");
o(c, v, _, "⋒", "\\Cap", !0);
o(c, v, _, "⋓", "\\Cup", !0);
o(c, v, _, "⩞", "\\doublebarwedge", !0);
o(c, v, _, "⊟", "\\boxminus", !0);
o(c, v, _, "⊞", "\\boxplus", !0);
o(c, v, _, "⋇", "\\divideontimes", !0);
o(c, v, _, "⋉", "\\ltimes", !0);
o(c, v, _, "⋊", "\\rtimes", !0);
o(c, v, _, "⋋", "\\leftthreetimes", !0);
o(c, v, _, "⋌", "\\rightthreetimes", !0);
o(c, v, _, "⋏", "\\curlywedge", !0);
o(c, v, _, "⋎", "\\curlyvee", !0);
o(c, v, _, "⊝", "\\circleddash", !0);
o(c, v, _, "⊛", "\\circledast", !0);
o(c, v, _, "⋅", "\\centerdot");
o(c, v, _, "⊺", "\\intercal", !0);
o(c, v, _, "⋒", "\\doublecap");
o(c, v, _, "⋓", "\\doublecup");
o(c, v, _, "⊠", "\\boxtimes", !0);
o(c, v, g, "⇢", "\\dashrightarrow", !0);
o(c, v, g, "⇠", "\\dashleftarrow", !0);
o(c, v, g, "⇇", "\\leftleftarrows", !0);
o(c, v, g, "⇆", "\\leftrightarrows", !0);
o(c, v, g, "⇚", "\\Lleftarrow", !0);
o(c, v, g, "↞", "\\twoheadleftarrow", !0);
o(c, v, g, "↢", "\\leftarrowtail", !0);
o(c, v, g, "↫", "\\looparrowleft", !0);
o(c, v, g, "⇋", "\\leftrightharpoons", !0);
o(c, v, g, "↶", "\\curvearrowleft", !0);
o(c, v, g, "↺", "\\circlearrowleft", !0);
o(c, v, g, "↰", "\\Lsh", !0);
o(c, v, g, "⇈", "\\upuparrows", !0);
o(c, v, g, "↿", "\\upharpoonleft", !0);
o(c, v, g, "⇃", "\\downharpoonleft", !0);
o(c, h, g, "⊶", "\\origof", !0);
o(c, h, g, "⊷", "\\imageof", !0);
o(c, v, g, "⊸", "\\multimap", !0);
o(c, v, g, "↭", "\\leftrightsquigarrow", !0);
o(c, v, g, "⇉", "\\rightrightarrows", !0);
o(c, v, g, "⇄", "\\rightleftarrows", !0);
o(c, v, g, "↠", "\\twoheadrightarrow", !0);
o(c, v, g, "↣", "\\rightarrowtail", !0);
o(c, v, g, "↬", "\\looparrowright", !0);
o(c, v, g, "↷", "\\curvearrowright", !0);
o(c, v, g, "↻", "\\circlearrowright", !0);
o(c, v, g, "↱", "\\Rsh", !0);
o(c, v, g, "⇊", "\\downdownarrows", !0);
o(c, v, g, "↾", "\\upharpoonright", !0);
o(c, v, g, "⇂", "\\downharpoonright", !0);
o(c, v, g, "⇝", "\\rightsquigarrow", !0);
o(c, v, g, "⇝", "\\leadsto");
o(c, v, g, "⇛", "\\Rrightarrow", !0);
o(c, v, g, "↾", "\\restriction");
o(c, h, b, "‘", "`");
o(c, h, b, "$", "\\$");
o(S, h, b, "$", "\\$");
o(S, h, b, "$", "\\textdollar");
o(c, h, b, "%", "\\%");
o(S, h, b, "%", "\\%");
o(c, h, b, "_", "\\_");
o(S, h, b, "_", "\\_");
o(S, h, b, "_", "\\textunderscore");
o(c, h, b, "∠", "\\angle", !0);
o(c, h, b, "∞", "\\infty", !0);
o(c, h, b, "′", "\\prime");
o(c, h, b, "△", "\\triangle");
o(c, h, b, "Γ", "\\Gamma", !0);
o(c, h, b, "Δ", "\\Delta", !0);
o(c, h, b, "Θ", "\\Theta", !0);
o(c, h, b, "Λ", "\\Lambda", !0);
o(c, h, b, "Ξ", "\\Xi", !0);
o(c, h, b, "Π", "\\Pi", !0);
o(c, h, b, "Σ", "\\Sigma", !0);
o(c, h, b, "Υ", "\\Upsilon", !0);
o(c, h, b, "Φ", "\\Phi", !0);
o(c, h, b, "Ψ", "\\Psi", !0);
o(c, h, b, "Ω", "\\Omega", !0);
o(c, h, b, "A", "Α");
o(c, h, b, "B", "Β");
o(c, h, b, "E", "Ε");
o(c, h, b, "Z", "Ζ");
o(c, h, b, "H", "Η");
o(c, h, b, "I", "Ι");
o(c, h, b, "K", "Κ");
o(c, h, b, "M", "Μ");
o(c, h, b, "N", "Ν");
o(c, h, b, "O", "Ο");
o(c, h, b, "P", "Ρ");
o(c, h, b, "T", "Τ");
o(c, h, b, "X", "Χ");
o(c, h, b, "¬", "\\neg", !0);
o(c, h, b, "¬", "\\lnot");
o(c, h, b, "⊤", "\\top");
o(c, h, b, "⊥", "\\bot");
o(c, h, b, "∅", "\\emptyset");
o(c, v, b, "∅", "\\varnothing");
o(c, h, H, "α", "\\alpha", !0);
o(c, h, H, "β", "\\beta", !0);
o(c, h, H, "γ", "\\gamma", !0);
o(c, h, H, "δ", "\\delta", !0);
o(c, h, H, "ϵ", "\\epsilon", !0);
o(c, h, H, "ζ", "\\zeta", !0);
o(c, h, H, "η", "\\eta", !0);
o(c, h, H, "θ", "\\theta", !0);
o(c, h, H, "ι", "\\iota", !0);
o(c, h, H, "κ", "\\kappa", !0);
o(c, h, H, "λ", "\\lambda", !0);
o(c, h, H, "μ", "\\mu", !0);
o(c, h, H, "ν", "\\nu", !0);
o(c, h, H, "ξ", "\\xi", !0);
o(c, h, H, "ο", "\\omicron", !0);
o(c, h, H, "π", "\\pi", !0);
o(c, h, H, "ρ", "\\rho", !0);
o(c, h, H, "σ", "\\sigma", !0);
o(c, h, H, "τ", "\\tau", !0);
o(c, h, H, "υ", "\\upsilon", !0);
o(c, h, H, "ϕ", "\\phi", !0);
o(c, h, H, "χ", "\\chi", !0);
o(c, h, H, "ψ", "\\psi", !0);
o(c, h, H, "ω", "\\omega", !0);
o(c, h, H, "ε", "\\varepsilon", !0);
o(c, h, H, "ϑ", "\\vartheta", !0);
o(c, h, H, "ϖ", "\\varpi", !0);
o(c, h, H, "ϱ", "\\varrho", !0);
o(c, h, H, "ς", "\\varsigma", !0);
o(c, h, H, "φ", "\\varphi", !0);
o(c, h, _, "∗", "*", !0);
o(c, h, _, "+", "+");
o(c, h, _, "−", "-", !0);
o(c, h, _, "⋅", "\\cdot", !0);
o(c, h, _, "∘", "\\circ", !0);
o(c, h, _, "÷", "\\div", !0);
o(c, h, _, "±", "\\pm", !0);
o(c, h, _, "×", "\\times", !0);
o(c, h, _, "∩", "\\cap", !0);
o(c, h, _, "∪", "\\cup", !0);
o(c, h, _, "∖", "\\setminus", !0);
o(c, h, _, "∧", "\\land");
o(c, h, _, "∨", "\\lor");
o(c, h, _, "∧", "\\wedge", !0);
o(c, h, _, "∨", "\\vee", !0);
o(c, h, b, "√", "\\surd");
o(c, h, Ae, "⟨", "\\langle", !0);
o(c, h, Ae, "∣", "\\lvert");
o(c, h, Ae, "∥", "\\lVert");
o(c, h, Se, "?", "?");
o(c, h, Se, "!", "!");
o(c, h, Se, "⟩", "\\rangle", !0);
o(c, h, Se, "∣", "\\rvert");
o(c, h, Se, "∥", "\\rVert");
o(c, h, g, "=", "=");
o(c, h, g, ":", ":");
o(c, h, g, "≈", "\\approx", !0);
o(c, h, g, "≅", "\\cong", !0);
o(c, h, g, "≥", "\\ge");
o(c, h, g, "≥", "\\geq", !0);
o(c, h, g, "←", "\\gets");
o(c, h, g, ">", "\\gt", !0);
o(c, h, g, "∈", "\\in", !0);
o(c, h, g, "", "\\@not");
o(c, h, g, "⊂", "\\subset", !0);
o(c, h, g, "⊃", "\\supset", !0);
o(c, h, g, "⊆", "\\subseteq", !0);
o(c, h, g, "⊇", "\\supseteq", !0);
o(c, v, g, "⊈", "\\nsubseteq", !0);
o(c, v, g, "⊉", "\\nsupseteq", !0);
o(c, h, g, "⊨", "\\models");
o(c, h, g, "←", "\\leftarrow", !0);
o(c, h, g, "≤", "\\le");
o(c, h, g, "≤", "\\leq", !0);
o(c, h, g, "<", "\\lt", !0);
o(c, h, g, "→", "\\rightarrow", !0);
o(c, h, g, "→", "\\to");
o(c, v, g, "≱", "\\ngeq", !0);
o(c, v, g, "≰", "\\nleq", !0);
o(c, h, Je, " ", "\\ ");
o(c, h, Je, " ", "\\space");
o(c, h, Je, " ", "\\nobreakspace");
o(S, h, Je, " ", "\\ ");
o(S, h, Je, " ", " ");
o(S, h, Je, " ", "\\space");
o(S, h, Je, " ", "\\nobreakspace");
o(c, h, Je, null, "\\nobreak");
o(c, h, Je, null, "\\allowbreak");
o(c, h, pt, ",", ",");
o(c, h, pt, ";", ";");
o(c, v, _, "⊼", "\\barwedge", !0);
o(c, v, _, "⊻", "\\veebar", !0);
o(c, h, _, "⊙", "\\odot", !0);
o(c, h, _, "⊕", "\\oplus", !0);
o(c, h, _, "⊗", "\\otimes", !0);
o(c, h, b, "∂", "\\partial", !0);
o(c, h, _, "⊘", "\\oslash", !0);
o(c, v, _, "⊚", "\\circledcirc", !0);
o(c, v, _, "⊡", "\\boxdot", !0);
o(c, h, _, "△", "\\bigtriangleup");
o(c, h, _, "▽", "\\bigtriangledown");
o(c, h, _, "†", "\\dagger");
o(c, h, _, "⋄", "\\diamond");
o(c, h, _, "⋆", "\\star");
o(c, h, _, "◃", "\\triangleleft");
o(c, h, _, "▹", "\\triangleright");
o(c, h, Ae, "{", "\\{");
o(S, h, b, "{", "\\{");
o(S, h, b, "{", "\\textbraceleft");
o(c, h, Se, "}", "\\}");
o(S, h, b, "}", "\\}");
o(S, h, b, "}", "\\textbraceright");
o(c, h, Ae, "{", "\\lbrace");
o(c, h, Se, "}", "\\rbrace");
o(c, h, Ae, "[", "\\lbrack", !0);
o(S, h, b, "[", "\\lbrack", !0);
o(c, h, Se, "]", "\\rbrack", !0);
o(S, h, b, "]", "\\rbrack", !0);
o(c, h, Ae, "(", "\\lparen", !0);
o(c, h, Se, ")", "\\rparen", !0);
o(S, h, b, "<", "\\textless", !0);
o(S, h, b, ">", "\\textgreater", !0);
o(c, h, Ae, "⌊", "\\lfloor", !0);
o(c, h, Se, "⌋", "\\rfloor", !0);
o(c, h, Ae, "⌈", "\\lceil", !0);
o(c, h, Se, "⌉", "\\rceil", !0);
o(c, h, b, "\\", "\\backslash");
o(c, h, b, "∣", "|");
o(c, h, b, "∣", "\\vert");
o(S, h, b, "|", "\\textbar", !0);
o(c, h, b, "∥", "\\|");
o(c, h, b, "∥", "\\Vert");
o(S, h, b, "∥", "\\textbardbl");
o(S, h, b, "~", "\\textasciitilde");
o(S, h, b, "\\", "\\textbackslash");
o(S, h, b, "^", "\\textasciicircum");
o(c, h, g, "↑", "\\uparrow", !0);
o(c, h, g, "⇑", "\\Uparrow", !0);
o(c, h, g, "↓", "\\downarrow", !0);
o(c, h, g, "⇓", "\\Downarrow", !0);
o(c, h, g, "↕", "\\updownarrow", !0);
o(c, h, g, "⇕", "\\Updownarrow", !0);
o(c, h, fe, "∐", "\\coprod");
o(c, h, fe, "⋁", "\\bigvee");
o(c, h, fe, "⋀", "\\bigwedge");
o(c, h, fe, "⨄", "\\biguplus");
o(c, h, fe, "⋂", "\\bigcap");
o(c, h, fe, "⋃", "\\bigcup");
o(c, h, fe, "∫", "\\int");
o(c, h, fe, "∫", "\\intop");
o(c, h, fe, "∬", "\\iint");
o(c, h, fe, "∭", "\\iiint");
o(c, h, fe, "∏", "\\prod");
o(c, h, fe, "∑", "\\sum");
o(c, h, fe, "⨂", "\\bigotimes");
o(c, h, fe, "⨁", "\\bigoplus");
o(c, h, fe, "⨀", "\\bigodot");
o(c, h, fe, "∮", "\\oint");
o(c, h, fe, "∯", "\\oiint");
o(c, h, fe, "∰", "\\oiiint");
o(c, h, fe, "⨆", "\\bigsqcup");
o(c, h, fe, "∫", "\\smallint");
o(S, h, B0, "…", "\\textellipsis");
o(c, h, B0, "…", "\\mathellipsis");
o(S, h, B0, "…", "\\ldots", !0);
o(c, h, B0, "…", "\\ldots", !0);
o(c, h, B0, "⋯", "\\@cdots", !0);
o(c, h, B0, "⋱", "\\ddots", !0);
o(c, h, b, "⋮", "\\varvdots");
o(c, h, se, "ˊ", "\\acute");
o(c, h, se, "ˋ", "\\grave");
o(c, h, se, "¨", "\\ddot");
o(c, h, se, "~", "\\tilde");
o(c, h, se, "ˉ", "\\bar");
o(c, h, se, "˘", "\\breve");
o(c, h, se, "ˇ", "\\check");
o(c, h, se, "^", "\\hat");
o(c, h, se, "⃗", "\\vec");
o(c, h, se, "˙", "\\dot");
o(c, h, se, "˚", "\\mathring");
o(c, h, H, "", "\\@imath");
o(c, h, H, "", "\\@jmath");
o(c, h, b, "ı", "ı");
o(c, h, b, "ȷ", "ȷ");
o(S, h, b, "ı", "\\i", !0);
o(S, h, b, "ȷ", "\\j", !0);
o(S, h, b, "ß", "\\ss", !0);
o(S, h, b, "æ", "\\ae", !0);
o(S, h, b, "œ", "\\oe", !0);
o(S, h, b, "ø", "\\o", !0);
o(S, h, b, "Æ", "\\AE", !0);
o(S, h, b, "Œ", "\\OE", !0);
o(S, h, b, "Ø", "\\O", !0);
o(S, h, se, "ˊ", "\\'");
o(S, h, se, "ˋ", "\\`");
o(S, h, se, "ˆ", "\\^");
o(S, h, se, "˜", "\\~");
o(S, h, se, "ˉ", "\\=");
o(S, h, se, "˘", "\\u");
o(S, h, se, "˙", "\\.");
o(S, h, se, "¸", "\\c");
o(S, h, se, "˚", "\\r");
o(S, h, se, "ˇ", "\\v");
o(S, h, se, "¨", '\\"');
o(S, h, se, "˝", "\\H");
o(S, h, se, "◯", "\\textcircled");
var xi = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
o(S, h, b, "–", "--", !0);
o(S, h, b, "–", "\\textendash");
o(S, h, b, "—", "---", !0);
o(S, h, b, "—", "\\textemdash");
o(S, h, b, "‘", "`", !0);
o(S, h, b, "‘", "\\textquoteleft");
o(S, h, b, "’", "'", !0);
o(S, h, b, "’", "\\textquoteright");
o(S, h, b, "“", "``", !0);
o(S, h, b, "“", "\\textquotedblleft");
o(S, h, b, "”", "''", !0);
o(S, h, b, "”", "\\textquotedblright");
o(c, h, b, "°", "\\degree", !0);
o(S, h, b, "°", "\\degree");
o(S, h, b, "°", "\\textdegree", !0);
o(c, h, b, "£", "\\pounds");
o(c, h, b, "£", "\\mathsterling", !0);
o(S, h, b, "£", "\\pounds");
o(S, h, b, "£", "\\textsterling", !0);
o(c, v, b, "✠", "\\maltese");
o(S, v, b, "✠", "\\maltese");
var ia = '0123456789/@."';
for (var At = 0; At < ia.length; At++) {
  var na = ia.charAt(At);
  o(c, h, b, na, na);
}
var la = '0123456789!@*()-=+";:?/.,';
for (var $t = 0; $t < la.length; $t++) {
  var sa = la.charAt($t);
  o(S, h, b, sa, sa);
}
var ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Bt = 0; Bt < ht.length; Bt++) {
  var J0 = ht.charAt(Bt);
  o(c, h, H, J0, J0), o(S, h, b, J0, J0);
}
o(c, v, b, "C", "ℂ");
o(S, v, b, "C", "ℂ");
o(c, v, b, "H", "ℍ");
o(S, v, b, "H", "ℍ");
o(c, v, b, "N", "ℕ");
o(S, v, b, "N", "ℕ");
o(c, v, b, "P", "ℙ");
o(S, v, b, "P", "ℙ");
o(c, v, b, "Q", "ℚ");
o(S, v, b, "Q", "ℚ");
o(c, v, b, "R", "ℝ");
o(S, v, b, "R", "ℝ");
o(c, v, b, "Z", "ℤ");
o(S, v, b, "Z", "ℤ");
o(c, h, H, "h", "ℎ");
o(S, h, H, "h", "ℎ");
var j = "";
for (var ze = 0; ze < ht.length; ze++) {
  var me = ht.charAt(ze);
  j = String.fromCharCode(55349, 56320 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56372 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56424 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56580 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56736 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56788 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56840 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56944 + ze), o(c, h, H, me, j), o(S, h, b, me, j), ze < 26 && (j = String.fromCharCode(55349, 56632 + ze), o(c, h, H, me, j), o(S, h, b, me, j), j = String.fromCharCode(55349, 56476 + ze), o(c, h, H, me, j), o(S, h, b, me, j));
}
j = "𝕜";
o(c, h, H, "k", j);
o(S, h, b, "k", j);
for (var u0 = 0; u0 < 10; u0++) {
  var t0 = u0.toString();
  j = String.fromCharCode(55349, 57294 + u0), o(c, h, H, t0, j), o(S, h, b, t0, j), j = String.fromCharCode(55349, 57314 + u0), o(c, h, H, t0, j), o(S, h, b, t0, j), j = String.fromCharCode(55349, 57324 + u0), o(c, h, H, t0, j), o(S, h, b, t0, j), j = String.fromCharCode(55349, 57334 + u0), o(c, h, H, t0, j), o(S, h, b, t0, j);
}
var Ut = "ÐÞþ";
for (var Ct = 0; Ct < Ut.length; Ct++) {
  var Q0 = Ut.charAt(Ct);
  o(c, h, H, Q0, Q0), o(S, h, b, Q0, Q0);
}
var et = [
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
  ["", "", ""],
  // A-Z bold Fraktur No font metrics
  ["", "", ""],
  // a-z bold Fraktur.   No font.
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
], oa = [
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
], Bl = function(e, t) {
  var a = e.charCodeAt(0), i = e.charCodeAt(1), n = (a - 55296) * 1024 + (i - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= n && n < 120484) {
    var s = Math.floor((n - 119808) / 26);
    return [et[s][2], et[s][l]];
  } else if (120782 <= n && n <= 120831) {
    var u = Math.floor((n - 120782) / 10);
    return [oa[u][2], oa[u][l]];
  } else {
    if (n === 120485 || n === 120486)
      return [et[0][2], et[0][l]];
    if (120486 < n && n < 120782)
      return ["", ""];
    throw new A("Unsupported character: " + e);
  }
}, vt = function(e, t, a) {
  return ae[a][e] && ae[a][e].replace && (e = ae[a][e].replace), {
    value: e,
    metrics: rr(e, t, a)
  };
}, Ee = function(e, t, a, i, n) {
  var l = vt(e, t, a), s = l.metrics;
  e = l.value;
  var u;
  if (s) {
    var m = s.italic;
    (a === "text" || i && i.font === "mathit") && (m = 0), u = new Ne(e, s.height, s.depth, m, s.skew, s.width, n);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")), u = new Ne(e, 0, 0, 0, 0, 0, n);
  if (i) {
    u.maxFontSize = i.sizeMultiplier, i.style.isTight() && u.classes.push("mtight");
    var d = i.getColor();
    d && (u.style.color = d);
  }
  return u;
}, Cl = function(e, t, a, i) {
  return i === void 0 && (i = []), a.font === "boldsymbol" && vt(e, "Main-Bold", t).metrics ? Ee(e, "Main-Bold", t, a, i.concat(["mathbf"])) : e === "\\" || ae[t][e].font === "main" ? Ee(e, "Main-Regular", t, a, i) : Ee(e, "AMS-Regular", t, a, i.concat(["amsrm"]));
}, ql = function(e, t, a, i, n) {
  return n !== "textord" && vt(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Dl = function(e, t, a) {
  var i = e.mode, n = e.text, l = ["mord"], s = i === "math" || i === "text" && t.font, u = s ? t.font : t.fontFamily;
  if (n.charCodeAt(0) === 55349) {
    var [m, d] = Bl(n, i);
    return Ee(n, m, i, t, l.concat(d));
  } else if (u) {
    var p, y;
    if (u === "boldsymbol") {
      var w = ql(n, i, t, l, a);
      p = w.fontName, y = [w.fontClass];
    } else s ? (p = Si[u].fontName, y = [u]) : (p = tt(u, t.fontWeight, t.fontShape), y = [u, t.fontWeight, t.fontShape]);
    if (vt(n, p, i).metrics)
      return Ee(n, p, i, t, l.concat(y));
    if (xi.hasOwnProperty(n) && p.substr(0, 10) === "Typewriter") {
      for (var M = [], B = 0; B < n.length; B++)
        M.push(Ee(n[B], p, i, t, l.concat(y)));
      return ki(M);
    }
  }
  if (a === "mathord")
    return Ee(n, "Math-Italic", i, t, l.concat(["mathnormal"]));
  if (a === "textord") {
    var N = ae[i][n] && ae[i][n].font;
    if (N === "ams") {
      var E = tt("amsrm", t.fontWeight, t.fontShape);
      return Ee(n, E, i, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (N === "main" || !N) {
      var F = tt("textrm", t.fontWeight, t.fontShape);
      return Ee(n, F, i, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var L = tt(N, t.fontWeight, t.fontShape);
      return Ee(n, L, i, t, l.concat(L, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + a + " in makeOrd");
}, Nl = (r, e) => {
  if (n0(r.classes) !== n0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var a in r.style)
    if (r.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
      return !1;
  for (var i in e.style)
    if (e.style.hasOwnProperty(i) && r.style[i] !== e.style[i])
      return !1;
  return !0;
}, _l = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], a = r[e + 1];
    t instanceof Ne && a instanceof Ne && Nl(t, a) && (t.text += a.text, t.height = Math.max(t.height, a.height), t.depth = Math.max(t.depth, a.depth), t.italic = a.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, ir = function(e) {
  for (var t = 0, a = 0, i = 0, n = 0; n < e.children.length; n++) {
    var l = e.children[n];
    l.height > t && (t = l.height), l.depth > a && (a = l.depth), l.maxFontSize > i && (i = l.maxFontSize);
  }
  e.height = t, e.depth = a, e.maxFontSize = i;
}, Me = function(e, t, a, i) {
  var n = new j0(e, t, a, i);
  return ir(n), n;
}, wi = (r, e, t, a) => new j0(r, e, t, a), El = function(e, t, a) {
  var i = Me([e], [], t);
  return i.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = C(i.height), i.maxFontSize = 1, i;
}, Il = function(e, t, a, i) {
  var n = new ar(e, t, a, i);
  return ir(n), n;
}, ki = function(e) {
  var t = new P0(e);
  return ir(t), t;
}, Rl = function(e, t) {
  return e instanceof P0 ? Me([], [e], t) : e;
}, Ll = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, a = [t[0]], i = -t[0].shift - t[0].elem.depth, n = i, l = 1; l < t.length; l++) {
      var s = -t[l].shift - n - t[l].elem.depth, u = s - (t[l - 1].elem.height + t[l - 1].elem.depth);
      n = n + s, a.push({
        type: "kern",
        size: u
      }), a.push(t[l]);
    }
    return {
      children: a,
      depth: i
    };
  }
  var m;
  if (e.positionType === "top") {
    for (var d = e.positionData, p = 0; p < e.children.length; p++) {
      var y = e.children[p];
      d -= y.type === "kern" ? y.size : y.elem.height + y.elem.depth;
    }
    m = d;
  } else if (e.positionType === "bottom")
    m = -e.positionData;
  else {
    var w = e.children[0];
    if (w.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      m = -w.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      m = -w.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: m
  };
}, Ol = function(e, t) {
  for (var {
    children: a,
    depth: i
  } = Ll(e), n = 0, l = 0; l < a.length; l++) {
    var s = a[l];
    if (s.type === "elem") {
      var u = s.elem;
      n = Math.max(n, u.maxFontSize, u.height);
    }
  }
  n += 2;
  var m = Me(["pstrut"], []);
  m.style.height = C(n);
  for (var d = [], p = i, y = i, w = i, M = 0; M < a.length; M++) {
    var B = a[M];
    if (B.type === "kern")
      w += B.size;
    else {
      var N = B.elem, E = B.wrapperClasses || [], F = B.wrapperStyle || {}, L = Me(E, [m, N], void 0, F);
      L.style.top = C(-n - w - N.depth), B.marginLeft && (L.style.marginLeft = B.marginLeft), B.marginRight && (L.style.marginRight = B.marginRight), d.push(L), w += N.height + N.depth;
    }
    p = Math.min(p, w), y = Math.max(y, w);
  }
  var Y = Me(["vlist"], d);
  Y.style.height = C(y);
  var U;
  if (p < 0) {
    var Z = Me([], []), W = Me(["vlist"], [Z]);
    W.style.height = C(-p);
    var ne = Me(["vlist-s"], [new Ne("​")]);
    U = [Me(["vlist-r"], [Y, ne]), Me(["vlist-r"], [W])];
  } else
    U = [Me(["vlist-r"], [Y])];
  var le = Me(["vlist-t"], U);
  return U.length === 2 && le.classes.push("vlist-t2"), le.height = y, le.depth = -p, le;
}, Hl = (r, e) => {
  var t = Me(["mspace"], [], e), a = ue(r, e);
  return t.style.marginRight = C(a), t;
}, tt = function(e, t, a) {
  var i = "";
  switch (e) {
    case "amsrm":
      i = "AMS";
      break;
    case "textrm":
      i = "Main";
      break;
    case "textsf":
      i = "SansSerif";
      break;
    case "texttt":
      i = "Typewriter";
      break;
    default:
      i = e;
  }
  var n;
  return t === "textbf" && a === "textit" ? n = "BoldItalic" : t === "textbf" ? n = "Bold" : t === "textit" ? n = "Italic" : n = "Regular", i + "-" + n;
}, Si = {
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
}, zi = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Fl = function(e, t) {
  var [a, i, n] = zi[e], l = new f0(a), s = new l0([l], {
    width: C(i),
    height: C(n),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + C(i),
    viewBox: "0 0 " + 1e3 * i + " " + 1e3 * n,
    preserveAspectRatio: "xMinYMin"
  }), u = wi(["overlay"], [s], t);
  return u.height = n, u.style.height = C(n), u.style.width = C(i), u;
}, x = {
  fontMap: Si,
  makeSymbol: Ee,
  mathsym: Cl,
  makeSpan: Me,
  makeSvgSpan: wi,
  makeLineSpan: El,
  makeAnchor: Il,
  makeFragment: ki,
  wrapFragment: Rl,
  makeVList: Ol,
  makeOrd: Dl,
  makeGlue: Hl,
  staticSvg: Fl,
  svgData: zi,
  tryCombineChars: _l
}, oe = {
  number: 3,
  unit: "mu"
}, c0 = {
  number: 4,
  unit: "mu"
}, Ue = {
  number: 5,
  unit: "mu"
}, Pl = {
  mord: {
    mop: oe,
    mbin: c0,
    mrel: Ue,
    minner: oe
  },
  mop: {
    mord: oe,
    mop: oe,
    mrel: Ue,
    minner: oe
  },
  mbin: {
    mord: c0,
    mop: c0,
    mopen: c0,
    minner: c0
  },
  mrel: {
    mord: Ue,
    mop: Ue,
    mopen: Ue,
    minner: Ue
  },
  mopen: {},
  mclose: {
    mop: oe,
    mbin: c0,
    mrel: Ue,
    minner: oe
  },
  mpunct: {
    mord: oe,
    mop: oe,
    mrel: Ue,
    mopen: oe,
    mclose: oe,
    mpunct: oe,
    minner: oe
  },
  minner: {
    mord: oe,
    mop: oe,
    mbin: c0,
    mrel: Ue,
    mopen: oe,
    mpunct: oe,
    minner: oe
  }
}, jl = {
  mord: {
    mop: oe
  },
  mop: {
    mord: oe,
    mop: oe
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: oe
  },
  mpunct: {},
  minner: {
    mop: oe
  }
}, Mi = {}, mt = {}, dt = {};
function D(r) {
  for (var {
    type: e,
    names: t,
    props: a,
    handler: i,
    htmlBuilder: n,
    mathmlBuilder: l
  } = r, s = {
    type: e,
    numArgs: a.numArgs,
    argTypes: a.argTypes,
    allowedInArgument: !!a.allowedInArgument,
    allowedInText: !!a.allowedInText,
    allowedInMath: a.allowedInMath === void 0 ? !0 : a.allowedInMath,
    numOptionalArgs: a.numOptionalArgs || 0,
    infix: !!a.infix,
    primitive: !!a.primitive,
    handler: i
  }, u = 0; u < t.length; ++u)
    Mi[t[u]] = s;
  e && (n && (mt[e] = n), l && (dt[e] = l));
}
function p0(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: a
  } = r;
  D({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: a
  });
}
var ft = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, de = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Ze = x.makeSpan, Gl = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Vl = ["rightmost", "mrel", "mclose", "mpunct"], Ul = {
  display: O.DISPLAY,
  text: O.TEXT,
  script: O.SCRIPT,
  scriptscript: O.SCRIPTSCRIPT
}, Wl = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, be = function(e, t, a, i) {
  i === void 0 && (i = [null, null]);
  for (var n = [], l = 0; l < e.length; l++) {
    var s = X(e[l], t);
    if (s instanceof P0) {
      var u = s.children;
      n.push(...u);
    } else
      n.push(s);
  }
  if (x.tryCombineChars(n), !a)
    return n;
  var m = t;
  if (e.length === 1) {
    var d = e[0];
    d.type === "sizing" ? m = t.havingSize(d.size) : d.type === "styling" && (m = t.havingStyle(Ul[d.style]));
  }
  var p = Ze([i[0] || "leftmost"], [], t), y = Ze([i[1] || "rightmost"], [], t), w = a === "root";
  return ua(n, (M, B) => {
    var N = B.classes[0], E = M.classes[0];
    N === "mbin" && P.contains(Vl, E) ? B.classes[0] = "mord" : E === "mbin" && P.contains(Gl, N) && (M.classes[0] = "mord");
  }, {
    node: p
  }, y, w), ua(n, (M, B) => {
    var N = Wt(B), E = Wt(M), F = N && E ? M.hasClass("mtight") ? jl[N][E] : Pl[N][E] : null;
    if (F)
      return x.makeGlue(F, m);
  }, {
    node: p
  }, y, w), n;
}, ua = function r(e, t, a, i, n) {
  i && e.push(i);
  for (var l = 0; l < e.length; l++) {
    var s = e[l], u = Ti(s);
    if (u) {
      r(u.children, t, a, null, n);
      continue;
    }
    var m = !s.hasClass("mspace");
    if (m) {
      var d = t(s, a.node);
      d && (a.insertAfter ? a.insertAfter(d) : (e.unshift(d), l++));
    }
    m ? a.node = s : n && s.hasClass("newline") && (a.node = Ze(["leftmost"])), a.insertAfter = /* @__PURE__ */ ((p) => (y) => {
      e.splice(p + 1, 0, y), l++;
    })(l);
  }
  i && e.pop();
}, Ti = function(e) {
  return e instanceof P0 || e instanceof ar || e instanceof j0 && e.hasClass("enclosing") ? e : null;
}, Xl = function r(e, t) {
  var a = Ti(e);
  if (a) {
    var i = a.children;
    if (i.length) {
      if (t === "right")
        return r(i[i.length - 1], "right");
      if (t === "left")
        return r(i[0], "left");
    }
  }
  return e;
}, Wt = function(e, t) {
  return e ? (t && (e = Xl(e, t)), Wl[e.classes[0]] || null) : null;
}, O0 = function(e, t) {
  var a = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Ze(t.concat(a));
}, X = function(e, t, a) {
  if (!e)
    return Ze();
  if (mt[e.type]) {
    var i = mt[e.type](e, t);
    if (a && t.size !== a.size) {
      i = Ze(t.sizingClasses(a), [i], t);
      var n = t.sizeMultiplier / a.sizeMultiplier;
      i.height *= n, i.depth *= n;
    }
    return i;
  } else
    throw new A("Got group of unknown type: '" + e.type + "'");
};
function rt(r, e) {
  var t = Ze(["base"], r, e), a = Ze(["strut"]);
  return a.style.height = C(t.height + t.depth), t.depth && (a.style.verticalAlign = C(-t.depth)), t.children.unshift(a), t;
}
function Xt(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var a = be(r, e, "root"), i;
  a.length === 2 && a[1].hasClass("tag") && (i = a.pop());
  for (var n = [], l = [], s = 0; s < a.length; s++)
    if (l.push(a[s]), a[s].hasClass("mbin") || a[s].hasClass("mrel") || a[s].hasClass("allowbreak")) {
      for (var u = !1; s < a.length - 1 && a[s + 1].hasClass("mspace") && !a[s + 1].hasClass("newline"); )
        s++, l.push(a[s]), a[s].hasClass("nobreak") && (u = !0);
      u || (n.push(rt(l, e)), l = []);
    } else a[s].hasClass("newline") && (l.pop(), l.length > 0 && (n.push(rt(l, e)), l = []), n.push(a[s]));
  l.length > 0 && n.push(rt(l, e));
  var m;
  t ? (m = rt(be(t, e, !0)), m.classes = ["tag"], n.push(m)) : i && n.push(i);
  var d = Ze(["katex-html"], n);
  if (d.setAttribute("aria-hidden", "true"), m) {
    var p = m.children[0];
    p.style.height = C(d.height + d.depth), d.depth && (p.style.verticalAlign = C(-d.depth));
  }
  return d;
}
function Ai(r) {
  return new P0(r);
}
class Ce {
  constructor(e, t, a) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = a || [];
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
    this.classes.length > 0 && (e.className = n0(this.classes));
    for (var a = 0; a < this.children.length; a++)
      e.appendChild(this.children[a].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += P.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + P.escape(n0(this.classes)) + '"'), e += ">";
    for (var a = 0; a < this.children.length; a++)
      e += this.children[a].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class _0 {
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
    return P.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text iteself).
   */
  toText() {
    return this.text;
  }
}
class Yl {
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
    return e.setAttribute("width", C(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + C(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var T = {
  MathNode: Ce,
  TextNode: _0,
  SpaceNode: Yl,
  newDocumentFragment: Ai
}, _e = function(e, t, a) {
  return ae[t][e] && ae[t][e].replace && e.charCodeAt(0) !== 55349 && !(xi.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.substr(4, 2) === "tt" || a.font && a.font.substr(4, 2) === "tt")) && (e = ae[t][e].replace), new T.TextNode(e);
}, nr = function(e) {
  return e.length === 1 ? e[0] : new T.MathNode("mrow", e);
}, lr = function(e, t) {
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
  var a = t.font;
  if (!a || a === "mathnormal")
    return null;
  var i = e.mode;
  if (a === "mathit")
    return "italic";
  if (a === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (a === "mathbf")
    return "bold";
  if (a === "mathbb")
    return "double-struck";
  if (a === "mathfrak")
    return "fraktur";
  if (a === "mathscr" || a === "mathcal")
    return "script";
  if (a === "mathsf")
    return "sans-serif";
  if (a === "mathtt")
    return "monospace";
  var n = e.text;
  if (P.contains(["\\imath", "\\jmath"], n))
    return null;
  ae[i][n] && ae[i][n].replace && (n = ae[i][n].replace);
  var l = x.fontMap[a].fontName;
  return rr(n, l, i) ? x.fontMap[a].variant : null;
}, $e = function(e, t, a) {
  if (e.length === 1) {
    var i = J(e[0], t);
    return a && i instanceof Ce && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
  }
  for (var n = [], l, s = 0; s < e.length; s++) {
    var u = J(e[s], t);
    if (u instanceof Ce && l instanceof Ce) {
      if (u.type === "mtext" && l.type === "mtext" && u.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...u.children);
        continue;
      } else if (u.type === "mn" && l.type === "mn") {
        l.children.push(...u.children);
        continue;
      } else if (u.type === "mi" && u.children.length === 1 && l.type === "mn") {
        var m = u.children[0];
        if (m instanceof _0 && m.text === ".") {
          l.children.push(...u.children);
          continue;
        }
      } else if (l.type === "mi" && l.children.length === 1) {
        var d = l.children[0];
        if (d instanceof _0 && d.text === "̸" && (u.type === "mo" || u.type === "mi" || u.type === "mn")) {
          var p = u.children[0];
          p instanceof _0 && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), n.pop());
        }
      }
    }
    n.push(u), l = u;
  }
  return n;
}, s0 = function(e, t, a) {
  return nr($e(e, t, a));
}, J = function(e, t) {
  if (!e)
    return new T.MathNode("mrow");
  if (dt[e.type]) {
    var a = dt[e.type](e, t);
    return a;
  } else
    throw new A("Got group of unknown type: '" + e.type + "'");
};
function ca(r, e, t, a, i) {
  var n = $e(r, t), l;
  n.length === 1 && n[0] instanceof Ce && P.contains(["mrow", "mtable"], n[0].type) ? l = n[0] : l = new T.MathNode("mrow", n);
  var s = new T.MathNode("annotation", [new T.TextNode(e)]);
  s.setAttribute("encoding", "application/x-tex");
  var u = new T.MathNode("semantics", [l, s]), m = new T.MathNode("math", [u]);
  m.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && m.setAttribute("display", "block");
  var d = i ? "katex" : "katex-mathml";
  return x.makeSpan([d], [m]);
}
var $i = function(e) {
  return new We({
    style: e.displayMode ? O.DISPLAY : O.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Bi = function(e, t) {
  if (t.displayMode) {
    var a = ["katex-display"];
    t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), e = x.makeSpan(a, [e]);
  }
  return e;
}, Zl = function(e, t, a) {
  var i = $i(a), n;
  if (a.output === "mathml")
    return ca(e, t, i, a.displayMode, !0);
  if (a.output === "html") {
    var l = Xt(e, i);
    n = x.makeSpan(["katex"], [l]);
  } else {
    var s = ca(e, t, i, a.displayMode, !1), u = Xt(e, i);
    n = x.makeSpan(["katex"], [s, u]);
  }
  return Bi(n, a);
}, Kl = function(e, t, a) {
  var i = $i(a), n = Xt(e, i), l = x.makeSpan(["katex"], [n]);
  return Bi(l, a);
}, Jl = {
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
}, Ql = function(e) {
  var t = new T.MathNode("mo", [new T.TextNode(Jl[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, es = {
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
}, ts = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, rs = function(e, t) {
  function a() {
    var s = 4e5, u = e.label.substr(1);
    if (P.contains(["widehat", "widecheck", "widetilde", "utilde"], u)) {
      var m = e, d = ts(m.base), p, y, w;
      if (d > 5)
        u === "widehat" || u === "widecheck" ? (p = 420, s = 2364, w = 0.42, y = u + "4") : (p = 312, s = 2340, w = 0.34, y = "tilde4");
      else {
        var M = [1, 1, 2, 2, 3, 3][d];
        u === "widehat" || u === "widecheck" ? (s = [0, 1062, 2364, 2364, 2364][M], p = [0, 239, 300, 360, 420][M], w = [0, 0.24, 0.3, 0.3, 0.36, 0.42][M], y = u + M) : (s = [0, 600, 1033, 2339, 2340][M], p = [0, 260, 286, 306, 312][M], w = [0, 0.26, 0.286, 0.3, 0.306, 0.34][M], y = "tilde" + M);
      }
      var B = new f0(y), N = new l0([B], {
        width: "100%",
        height: C(w),
        viewBox: "0 0 " + s + " " + p,
        preserveAspectRatio: "none"
      });
      return {
        span: x.makeSvgSpan([], [N], t),
        minWidth: 0,
        height: w
      };
    } else {
      var E = [], F = es[u], [L, Y, U] = F, Z = U / 1e3, W = L.length, ne, le;
      if (W === 1) {
        var ge = F[3];
        ne = ["hide-tail"], le = [ge];
      } else if (W === 2)
        ne = ["halfarrow-left", "halfarrow-right"], le = ["xMinYMin", "xMaxYMin"];
      else if (W === 3)
        ne = ["brace-left", "brace-center", "brace-right"], le = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + W + " children.");
      for (var xe = 0; xe < W; xe++) {
        var je = new f0(L[xe]), Qe = new l0([je], {
          width: "400em",
          height: C(Z),
          viewBox: "0 0 " + s + " " + U,
          preserveAspectRatio: le[xe] + " slice"
        }), Be = x.makeSvgSpan([ne[xe]], [Qe], t);
        if (W === 1)
          return {
            span: Be,
            minWidth: Y,
            height: Z
          };
        Be.style.height = C(Z), E.push(Be);
      }
      return {
        span: x.makeSpan(["stretchy"], E, t),
        minWidth: Y,
        height: Z
      };
    }
  }
  var {
    span: i,
    minWidth: n,
    height: l
  } = a();
  return i.height = l, i.style.height = C(l), n > 0 && (i.style.minWidth = C(n)), i;
}, as = function(e, t, a, i, n) {
  var l, s = e.height + e.depth + a + i;
  if (/fbox|color|angl/.test(t)) {
    if (l = x.makeSpan(["stretchy", t], [], n), t === "fbox") {
      var u = n.color && n.getColor();
      u && (l.style.borderColor = u);
    }
  } else {
    var m = [];
    /^[bx]cancel$/.test(t) && m.push(new Vt({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && m.push(new Vt({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var d = new l0(m, {
      width: "100%",
      height: C(s)
    });
    l = x.makeSvgSpan([], [d], n);
  }
  return l.height = s, l.style.height = C(s), l;
}, Ke = {
  encloseSpan: as,
  mathMLnode: Ql,
  svgSpan: rs
};
function G(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function sr(r) {
  var e = gt(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function gt(r) {
  return r && (r.type === "atom" || $l.hasOwnProperty(r.type)) ? r : null;
}
var or = (r, e) => {
  var t, a, i;
  r && r.type === "supsub" ? (a = G(r.base, "accent"), t = a.base, r.base = t, i = Tl(X(r, e)), r.base = a) : (a = G(r, "accent"), t = a.base);
  var n = X(t, e.havingCrampedStyle()), l = a.isShifty && P.isCharacterBox(t), s = 0;
  if (l) {
    var u = P.getBaseElem(t), m = X(u, e.havingCrampedStyle());
    s = aa(m).skew;
  }
  var d = a.label === "\\c", p = d ? n.height + n.depth : Math.min(n.height, e.fontMetrics().xHeight), y;
  if (a.isStretchy)
    y = Ke.svgSpan(a, e), y = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "elem",
        elem: y,
        wrapperClasses: ["svg-align"],
        wrapperStyle: s > 0 ? {
          width: "calc(100% - " + C(2 * s) + ")",
          marginLeft: C(2 * s)
        } : void 0
      }]
    }, e);
  else {
    var w, M;
    a.label === "\\vec" ? (w = x.staticSvg("vec", e), M = x.svgData.vec[1]) : (w = x.makeOrd({
      mode: a.mode,
      text: a.label
    }, e, "textord"), w = aa(w), w.italic = 0, M = w.width, d && (p += w.depth)), y = x.makeSpan(["accent-body"], [w]);
    var B = a.label === "\\textcircled";
    B && (y.classes.push("accent-full"), p = n.height);
    var N = s;
    B || (N -= M / 2), y.style.left = C(N), a.label === "\\textcircled" && (y.style.top = ".2em"), y = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: -p
      }, {
        type: "elem",
        elem: y
      }]
    }, e);
  }
  var E = x.makeSpan(["mord", "accent"], [y], e);
  return i ? (i.children[0] = E, i.height = Math.max(E.height, i.height), i.classes[0] = "mord", i) : E;
}, Ci = (r, e) => {
  var t = r.isStretchy ? Ke.mathMLnode(r.label) : new T.MathNode("mo", [_e(r.label, r.mode)]), a = new T.MathNode("mover", [J(r.base, e), t]);
  return a.setAttribute("accent", "true"), a;
}, is = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
D({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = ft(e[0]), a = !is.test(r.funcName), i = !a || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: a,
      isShifty: i,
      base: t
    };
  },
  htmlBuilder: or,
  mathmlBuilder: Ci
});
D({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = e[0], a = r.parser.mode;
    return a === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), a = "text"), {
      type: "accent",
      mode: a,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: or,
  mathmlBuilder: Ci
});
D({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: a,
      base: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = X(r.base, e), a = Ke.svgSpan(r, e), i = r.label === "\\utilde" ? 0.12 : 0, n = x.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: a,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return x.makeSpan(["mord", "accentunder"], [n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Ke.mathMLnode(r.label), a = new T.MathNode("munder", [J(r.base, e), t]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
var at = (r) => {
  var e = new T.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
D({
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
  handler(r, e, t) {
    var {
      parser: a,
      funcName: i
    } = r;
    return {
      type: "xArrow",
      mode: a.mode,
      label: i,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unamibiguously determined from the passed-in `type` above.
  htmlBuilder(r, e) {
    var t = e.style, a = e.havingStyle(t.sup()), i = x.wrapFragment(X(r.body, a, e), e), n = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(n + "-arrow-pad");
    var l;
    r.below && (a = e.havingStyle(t.sub()), l = x.wrapFragment(X(r.below, a, e), e), l.classes.push(n + "-arrow-pad"));
    var s = Ke.svgSpan(r, e), u = -e.fontMetrics().axisHeight + 0.5 * s.height, m = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
    (i.depth > 0.25 || r.label === "\\xleftequilibrium") && (m -= i.depth);
    var d;
    if (l) {
      var p = -e.fontMetrics().axisHeight + l.height + 0.5 * s.height + 0.111;
      d = x.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: m
        }, {
          type: "elem",
          elem: s,
          shift: u
        }, {
          type: "elem",
          elem: l,
          shift: p
        }]
      }, e);
    } else
      d = x.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: m
        }, {
          type: "elem",
          elem: s,
          shift: u
        }]
      }, e);
    return d.children[0].children[0].children[1].classes.push("svg-align"), x.makeSpan(["mrel", "x-arrow"], [d], e);
  },
  mathmlBuilder(r, e) {
    var t = Ke.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var a;
    if (r.body) {
      var i = at(J(r.body, e));
      if (r.below) {
        var n = at(J(r.below, e));
        a = new T.MathNode("munderover", [t, n, i]);
      } else
        a = new T.MathNode("mover", [t, i]);
    } else if (r.below) {
      var l = at(J(r.below, e));
      a = new T.MathNode("munder", [t, l]);
    } else
      a = at(), a = new T.MathNode("mover", [t, a]);
    return a;
  }
});
var ns = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, ha = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), ma = (r) => r.type === "textord" && r.text === "@", ls = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function ss(r, e, t) {
  var a = ns[r];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var i = t.callFunction("\\\\cdleft", [e[0]], []), n = {
        type: "atom",
        text: a,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [n], []), s = t.callFunction("\\\\cdright", [e[1]], []), u = {
        type: "ordgroup",
        mode: "math",
        body: [i, l, s]
      };
      return t.callFunction("\\\\cdparent", [u], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var m = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [m], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function os(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new A("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var a = [], i = [a], n = 0; n < e.length; n++) {
    for (var l = e[n], s = ha(), u = 0; u < l.length; u++)
      if (!ma(l[u]))
        s.body.push(l[u]);
      else {
        a.push(s), u += 1;
        var m = sr(l[u]).text, d = new Array(2);
        if (d[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, d[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(m) > -1)) if ("<>AV".indexOf(m) > -1)
          for (var p = 0; p < 2; p++) {
            for (var y = !0, w = u + 1; w < l.length; w++) {
              if (ls(l[w], m)) {
                y = !1, u = w;
                break;
              }
              if (ma(l[w]))
                throw new A("Missing a " + m + " character to complete a CD arrow.", l[w]);
              d[p].body.push(l[w]);
            }
            if (y)
              throw new A("Missing a " + m + " character to complete a CD arrow.", l[u]);
          }
        else
          throw new A('Expected one of "<>AV=|." after @', l[u]);
        var M = ss(m, d, r), B = {
          type: "styling",
          body: [M],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        a.push(B), s = ha();
      }
    n % 2 === 0 ? a.push(s) : a.shift(), a = [], i.push(a);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var N = new Array(i[0].length).fill({
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
    body: i,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: N,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(i.length + 1).fill([])
  };
}
D({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: a.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), a = x.wrapFragment(X(r.label, t, e), e);
    return a.classes.push("cd-label-" + r.side), a.style.bottom = C(0.8 - a.depth), a.height = 0, a.depth = 0, a;
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mrow", [J(r.label, e)]);
    return t = new T.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new T.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
D({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = x.wrapFragment(X(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new T.MathNode("mrow", [J(r.fragment, e)]);
  }
});
D({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, a = G(e[0], "ordgroup"), i = a.body, n = "", l = 0; l < i.length; l++) {
      var s = G(i[l], "textord");
      n += s.text;
    }
    var u = parseInt(n), m;
    if (isNaN(u))
      throw new A("\\@char has non-numeric argument " + n);
    if (u < 0 || u >= 1114111)
      throw new A("\\@char with invalid code point " + n);
    return u <= 65535 ? m = String.fromCharCode(u) : (u -= 65536, m = String.fromCharCode((u >> 10) + 55296, (u & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: m
    };
  }
});
var qi = (r, e) => {
  var t = be(r.body, e.withColor(r.color), !1);
  return x.makeFragment(t);
}, Di = (r, e) => {
  var t = $e(r.body, e.withColor(r.color)), a = new T.MathNode("mstyle", t);
  return a.setAttribute("mathcolor", r.color), a;
};
D({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = G(e[0], "color-token").color, i = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: de(i)
    };
  },
  htmlBuilder: qi,
  mathmlBuilder: Di
});
D({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: a
    } = r, i = G(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", i);
    var n = t.parseExpression(!0, a);
    return {
      type: "color",
      mode: t.mode,
      color: i,
      body: n
    };
  },
  htmlBuilder: qi,
  mathmlBuilder: Di
});
D({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 1,
    argTypes: ["size"],
    allowedInText: !0
  },
  handler(r, e, t) {
    var {
      parser: a
    } = r, i = t[0], n = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: a.mode,
      newLine: n,
      size: i && G(i, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = x.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = C(ue(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", C(ue(r.size, e)))), t;
  }
});
var Yt = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Ni = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new A("Expected a control sequence", r);
  return e;
}, us = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, _i = (r, e, t, a) => {
  var i = r.gullet.macros.get(t.text);
  i == null && (t.noexpand = !0, i = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, i, a);
};
D({
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
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var a = e.fetch();
    if (Yt[a.text])
      return (t === "\\global" || t === "\\\\globallong") && (a.text = Yt[a.text]), G(e.parseFunction(), "internal");
    throw new A("Invalid token after macro prefix", a);
  }
});
D({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = e.gullet.popToken(), i = a.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(i))
      throw new A("Expected a control sequence", a);
    for (var n = 0, l, s = [[]]; e.gullet.future().text !== "{"; )
      if (a = e.gullet.popToken(), a.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), s[n].push("{");
          break;
        }
        if (a = e.gullet.popToken(), !/^[1-9]$/.test(a.text))
          throw new A('Invalid argument number "' + a.text + '"');
        if (parseInt(a.text) !== n + 1)
          throw new A('Argument number "' + a.text + '" out of order');
        n++, s.push([]);
      } else {
        if (a.text === "EOF")
          throw new A("Expected a macro definition");
        s[n].push(a.text);
      }
    var {
      tokens: u
    } = e.gullet.consumeArg();
    return l && u.unshift(l), (t === "\\edef" || t === "\\xdef") && (u = e.gullet.expandTokens(u), u.reverse()), e.gullet.macros.set(i, {
      tokens: u,
      numArgs: n,
      delimiters: s
    }, t === Yt[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
D({
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
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = Ni(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var i = us(e);
    return _i(e, a, i, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
D({
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
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = Ni(e.gullet.popToken()), i = e.gullet.popToken(), n = e.gullet.popToken();
    return _i(e, a, n, t === "\\\\globalfuture"), e.gullet.pushToken(n), e.gullet.pushToken(i), {
      type: "internal",
      mode: e.mode
    };
  }
});
var D0 = function(e, t, a) {
  var i = ae.math[e] && ae.math[e].replace, n = rr(i || e, t, a);
  if (!n)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return n;
}, ur = function(e, t, a, i) {
  var n = a.havingBaseStyle(t), l = x.makeSpan(i.concat(n.sizingClasses(a)), [e], a), s = n.sizeMultiplier / a.sizeMultiplier;
  return l.height *= s, l.depth *= s, l.maxFontSize = n.sizeMultiplier, l;
}, Ei = function(e, t, a) {
  var i = t.havingBaseStyle(a), n = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = C(n), e.height -= n, e.depth += n;
}, cs = function(e, t, a, i, n, l) {
  var s = x.makeSymbol(e, "Main-Regular", n, i), u = ur(s, t, i, l);
  return a && Ei(u, i, t), u;
}, hs = function(e, t, a, i) {
  return x.makeSymbol(e, "Size" + t + "-Regular", a, i);
}, Ii = function(e, t, a, i, n, l) {
  var s = hs(e, t, n, i), u = ur(x.makeSpan(["delimsizing", "size" + t], [s], i), O.TEXT, i, l);
  return a && Ei(u, i, O.TEXT), u;
}, qt = function(e, t, a) {
  var i;
  t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
  var n = x.makeSpan(["delimsizinginner", i], [x.makeSpan([], [x.makeSymbol(e, t, a)])]);
  return {
    type: "elem",
    elem: n
  };
}, Dt = function(e, t, a) {
  var i = Oe["Size4-Regular"][e.charCodeAt(0)] ? Oe["Size4-Regular"][e.charCodeAt(0)][4] : Oe["Size1-Regular"][e.charCodeAt(0)][4], n = new f0("inner", yl(e, Math.round(1e3 * t))), l = new l0([n], {
    width: C(i),
    height: C(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + C(i),
    viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), s = x.makeSvgSpan([], [l], a);
  return s.height = t, s.style.height = C(t), s.style.width = C(i), {
    type: "elem",
    elem: s
  };
}, Zt = 8e-3, it = {
  type: "kern",
  size: -1 * Zt
}, ms = ["|", "\\lvert", "\\rvert", "\\vert"], ds = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Ri = function(e, t, a, i, n, l) {
  var s, u, m, d;
  s = m = d = e, u = null;
  var p = "Size1-Regular";
  e === "\\uparrow" ? m = d = "⏐" : e === "\\Uparrow" ? m = d = "‖" : e === "\\downarrow" ? s = m = "⏐" : e === "\\Downarrow" ? s = m = "‖" : e === "\\updownarrow" ? (s = "\\uparrow", m = "⏐", d = "\\downarrow") : e === "\\Updownarrow" ? (s = "\\Uparrow", m = "‖", d = "\\Downarrow") : P.contains(ms, e) ? m = "∣" : P.contains(ds, e) ? m = "∥" : e === "[" || e === "\\lbrack" ? (s = "⎡", m = "⎢", d = "⎣", p = "Size4-Regular") : e === "]" || e === "\\rbrack" ? (s = "⎤", m = "⎥", d = "⎦", p = "Size4-Regular") : e === "\\lfloor" || e === "⌊" ? (m = s = "⎢", d = "⎣", p = "Size4-Regular") : e === "\\lceil" || e === "⌈" ? (s = "⎡", m = d = "⎢", p = "Size4-Regular") : e === "\\rfloor" || e === "⌋" ? (m = s = "⎥", d = "⎦", p = "Size4-Regular") : e === "\\rceil" || e === "⌉" ? (s = "⎤", m = d = "⎥", p = "Size4-Regular") : e === "(" || e === "\\lparen" ? (s = "⎛", m = "⎜", d = "⎝", p = "Size4-Regular") : e === ")" || e === "\\rparen" ? (s = "⎞", m = "⎟", d = "⎠", p = "Size4-Regular") : e === "\\{" || e === "\\lbrace" ? (s = "⎧", u = "⎨", d = "⎩", m = "⎪", p = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (s = "⎫", u = "⎬", d = "⎭", m = "⎪", p = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (s = "⎧", d = "⎩", m = "⎪", p = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (s = "⎫", d = "⎭", m = "⎪", p = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (s = "⎧", d = "⎭", m = "⎪", p = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (s = "⎫", d = "⎩", m = "⎪", p = "Size4-Regular");
  var y = D0(s, p, n), w = y.height + y.depth, M = D0(m, p, n), B = M.height + M.depth, N = D0(d, p, n), E = N.height + N.depth, F = 0, L = 1;
  if (u !== null) {
    var Y = D0(u, p, n);
    F = Y.height + Y.depth, L = 2;
  }
  var U = w + E + F, Z = Math.max(0, Math.ceil((t - U) / (L * B))), W = U + Z * L * B, ne = i.fontMetrics().axisHeight;
  a && (ne *= i.sizeMultiplier);
  var le = W / 2 - ne, ge = [];
  if (ge.push(qt(d, p, n)), ge.push(it), u === null) {
    var xe = W - w - E + 2 * Zt;
    ge.push(Dt(m, xe, i));
  } else {
    var je = (W - w - E - F) / 2 + 2 * Zt;
    ge.push(Dt(m, je, i)), ge.push(it), ge.push(qt(u, p, n)), ge.push(it), ge.push(Dt(m, je, i));
  }
  ge.push(it), ge.push(qt(s, p, n));
  var Qe = i.havingBaseStyle(O.TEXT), Be = x.makeVList({
    positionType: "bottom",
    positionData: le,
    children: ge
  }, Qe);
  return ur(x.makeSpan(["delimsizing", "mult"], [Be], Qe), O.TEXT, i, l);
}, Nt = 80, _t = 0.08, Et = function(e, t, a, i, n) {
  var l = bl(e, i, a), s = new f0(e, l), u = new l0([s], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: C(t),
    viewBox: "0 0 400000 " + a,
    preserveAspectRatio: "xMinYMin slice"
  });
  return x.makeSvgSpan(["hide-tail"], [u], n);
}, fs = function(e, t) {
  var a = t.havingBaseSizing(), i = Fi("\\surd", e * a.sizeMultiplier, Hi, a), n = a.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), s, u = 0, m = 0, d = 0, p;
  return i.type === "small" ? (d = 1e3 + 1e3 * l + Nt, e < 1 ? n = 1 : e < 1.4 && (n = 0.7), u = (1 + l + _t) / n, m = (1 + l) / n, s = Et("sqrtMain", u, d, l, t), s.style.minWidth = "0.853em", p = 0.833 / n) : i.type === "large" ? (d = (1e3 + Nt) * E0[i.size], m = (E0[i.size] + l) / n, u = (E0[i.size] + l + _t) / n, s = Et("sqrtSize" + i.size, u, d, l, t), s.style.minWidth = "1.02em", p = 1 / n) : (u = e + l + _t, m = e + l, d = Math.floor(1e3 * e + l) + Nt, s = Et("sqrtTall", u, d, l, t), s.style.minWidth = "0.742em", p = 1.056), s.height = m, s.style.height = C(u), {
    span: s,
    advanceWidth: p,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * n
  };
}, Li = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], ps = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Oi = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], E0 = [0, 1.2, 1.8, 2.4, 3], vs = function(e, t, a, i, n) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), P.contains(Li, e) || P.contains(Oi, e))
    return Ii(e, t, !1, a, i, n);
  if (P.contains(ps, e))
    return Ri(e, E0[t], !1, a, i, n);
  throw new A("Illegal delimiter: '" + e + "'");
}, gs = [{
  type: "small",
  style: O.SCRIPTSCRIPT
}, {
  type: "small",
  style: O.SCRIPT
}, {
  type: "small",
  style: O.TEXT
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
}], bs = [{
  type: "small",
  style: O.SCRIPTSCRIPT
}, {
  type: "small",
  style: O.SCRIPT
}, {
  type: "small",
  style: O.TEXT
}, {
  type: "stack"
}], Hi = [{
  type: "small",
  style: O.SCRIPTSCRIPT
}, {
  type: "small",
  style: O.SCRIPT
}, {
  type: "small",
  style: O.TEXT
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
}], ys = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, Fi = function(e, t, a, i) {
  for (var n = Math.min(2, 3 - i.style.size), l = n; l < a.length && a[l].type !== "stack"; l++) {
    var s = D0(e, ys(a[l]), "math"), u = s.height + s.depth;
    if (a[l].type === "small") {
      var m = i.havingBaseStyle(a[l].style);
      u *= m.sizeMultiplier;
    }
    if (u > t)
      return a[l];
  }
  return a[a.length - 1];
}, Pi = function(e, t, a, i, n, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var s;
  P.contains(Oi, e) ? s = gs : P.contains(Li, e) ? s = Hi : s = bs;
  var u = Fi(e, t, s, i);
  return u.type === "small" ? cs(e, u.style, a, i, n, l) : u.type === "large" ? Ii(e, u.size, a, i, n, l) : Ri(e, t, a, i, n, l);
}, xs = function(e, t, a, i, n, l) {
  var s = i.fontMetrics().axisHeight * i.sizeMultiplier, u = 901, m = 5 / i.fontMetrics().ptPerEm, d = Math.max(t - s, a + s), p = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    d / 500 * u,
    2 * d - m
  );
  return Pi(e, p, !0, i, n, l);
}, Ye = {
  sqrtImage: fs,
  sizedDelim: vs,
  sizeToMaxHeight: E0,
  customSizedDelim: Pi,
  leftRightDelim: xs
}, da = {
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
}, ws = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function bt(r, e) {
  var t = gt(r);
  if (t && P.contains(ws, t.text))
    return t;
  throw t ? new A("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new A("Invalid delimiter type '" + r.type + "'", r);
}
D({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = bt(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: da[r.funcName].size,
      mclass: da[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? x.makeSpan([r.mclass]) : Ye.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(_e(r.delim, r.mode));
    var t = new T.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var a = C(Ye.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t;
  }
});
function fa(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
D({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new A("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: bt(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
D({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = bt(e[0], r), a = r.parser;
    ++a.leftrightDepth;
    var i = a.parseExpression(!1);
    --a.leftrightDepth, a.expect("\\right", !1);
    var n = G(a.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: a.mode,
      body: i,
      left: t.text,
      right: n.delim,
      rightColor: n.color
    };
  },
  htmlBuilder: (r, e) => {
    fa(r);
    for (var t = be(r.body, e, !0, ["mopen", "mclose"]), a = 0, i = 0, n = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? n = !0 : (a = Math.max(t[l].height, a), i = Math.max(t[l].depth, i));
    a *= e.sizeMultiplier, i *= e.sizeMultiplier;
    var s;
    if (r.left === "." ? s = O0(e, ["mopen"]) : s = Ye.leftRightDelim(r.left, a, i, e, r.mode, ["mopen"]), t.unshift(s), n)
      for (var u = 1; u < t.length; u++) {
        var m = t[u], d = m.isMiddle;
        d && (t[u] = Ye.leftRightDelim(d.delim, a, i, d.options, r.mode, []));
      }
    var p;
    if (r.right === ".")
      p = O0(e, ["mclose"]);
    else {
      var y = r.rightColor ? e.withColor(r.rightColor) : e;
      p = Ye.leftRightDelim(r.right, a, i, y, r.mode, ["mclose"]);
    }
    return t.push(p), x.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    fa(r);
    var t = $e(r.body, e);
    if (r.left !== ".") {
      var a = new T.MathNode("mo", [_e(r.left, r.mode)]);
      a.setAttribute("fence", "true"), t.unshift(a);
    }
    if (r.right !== ".") {
      var i = new T.MathNode("mo", [_e(r.right, r.mode)]);
      i.setAttribute("fence", "true"), r.rightColor && i.setAttribute("mathcolor", r.rightColor), t.push(i);
    }
    return nr(t);
  }
});
D({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = bt(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new A("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = O0(e, []);
    else {
      t = Ye.sizedDelim(r.delim, 1, e, r.mode, []);
      var a = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = a;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? _e("|", "text") : _e(r.delim, r.mode), a = new T.MathNode("mo", [t]);
    return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
  }
});
var cr = (r, e) => {
  var t = x.wrapFragment(X(r.body, e), e), a = r.label.substr(1), i = e.sizeMultiplier, n, l = 0, s = P.isCharacterBox(r.body);
  if (a === "sout")
    n = x.makeSpan(["stretchy", "sout"]), n.height = e.fontMetrics().defaultRuleThickness / i, l = -0.5 * e.fontMetrics().xHeight;
  else if (a === "phase") {
    var u = ue({
      number: 0.6,
      unit: "pt"
    }, e), m = ue({
      number: 0.35,
      unit: "ex"
    }, e), d = e.havingBaseSizing();
    i = i / d.sizeMultiplier;
    var p = t.height + t.depth + u + m;
    t.style.paddingLeft = C(p / 2 + u);
    var y = Math.floor(1e3 * p * i), w = vl(y), M = new l0([new f0("phase", w)], {
      width: "400em",
      height: C(y / 1e3),
      viewBox: "0 0 400000 " + y,
      preserveAspectRatio: "xMinYMin slice"
    });
    n = x.makeSvgSpan(["hide-tail"], [M], e), n.style.height = C(p), l = t.depth + u + m;
  } else {
    /cancel/.test(a) ? s || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var B = 0, N = 0, E = 0;
    /box/.test(a) ? (E = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), B = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : E), N = B) : a === "angl" ? (E = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), B = 4 * E, N = Math.max(0, 0.25 - t.depth)) : (B = s ? 0.2 : 0, N = B), n = Ke.encloseSpan(t, a, B, N, e), /fbox|boxed|fcolorbox/.test(a) ? (n.style.borderStyle = "solid", n.style.borderWidth = C(E)) : a === "angl" && E !== 0.049 && (n.style.borderTopWidth = C(E), n.style.borderRightWidth = C(E)), l = t.depth + N, r.backgroundColor && (n.style.backgroundColor = r.backgroundColor, r.borderColor && (n.style.borderColor = r.borderColor));
  }
  var F;
  if (r.backgroundColor)
    F = x.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: n,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var L = /cancel|phase/.test(a) ? ["svg-align"] : [];
    F = x.makeVList({
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
          elem: n,
          shift: l,
          wrapperClasses: L
        }
      ]
    }, e);
  }
  return /cancel/.test(a) && (F.height = t.height, F.depth = t.depth), /cancel/.test(a) && !s ? x.makeSpan(["mord", "cancel-lap"], [F], e) : x.makeSpan(["mord"], [F], e);
}, hr = (r, e) => {
  var t = 0, a = new T.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [J(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      a.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      a.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      a.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      a.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      a.setAttribute("notation", "box");
      break;
    case "\\angl":
      a.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * t + "pt"), a.setAttribute("height", "+" + 2 * t + "pt"), a.setAttribute("lspace", t + "pt"), a.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var i = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        a.setAttribute("style", "border: " + i + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor), a;
};
D({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: a,
      funcName: i
    } = r, n = G(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: a.mode,
      label: i,
      backgroundColor: n,
      body: l
    };
  },
  htmlBuilder: cr,
  mathmlBuilder: hr
});
D({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: a,
      funcName: i
    } = r, n = G(e[0], "color-token").color, l = G(e[1], "color-token").color, s = e[2];
    return {
      type: "enclose",
      mode: a.mode,
      label: i,
      backgroundColor: l,
      borderColor: n,
      body: s
    };
  },
  htmlBuilder: cr,
  mathmlBuilder: hr
});
D({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
D({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: a,
      body: i
    };
  },
  htmlBuilder: cr,
  mathmlBuilder: hr
});
D({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var ji = {};
function He(r) {
  for (var {
    type: e,
    names: t,
    props: a,
    handler: i,
    htmlBuilder: n,
    mathmlBuilder: l
  } = r, s = {
    type: e,
    numArgs: a.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: i
  }, u = 0; u < t.length; ++u)
    ji[t[u]] = s;
  n && (mt[e] = n), l && (dt[e] = l);
}
var Gi = {};
function f(r, e) {
  Gi[r] = e;
}
function pa(r) {
  var e = [];
  r.consumeSpaces();
  for (var t = r.fetch().text; t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var yt = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new A("{" + r.envName + "} can be used only in display mode.");
};
function mr(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function o0(r, e, t) {
  var {
    hskipBeforeAndAfter: a,
    addJot: i,
    cols: n,
    arraystretch: l,
    colSeparationType: s,
    autoTag: u,
    singleRow: m,
    emptySingleRow: d,
    maxNumCols: p,
    leqno: y
  } = e;
  if (r.gullet.beginGroup(), m || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var w = r.gullet.expandMacroAsText("\\arraystretch");
    if (w == null)
      l = 1;
    else if (l = parseFloat(w), !l || l < 0)
      throw new A("Invalid \\arraystretch: " + w);
  }
  r.gullet.beginGroup();
  var M = [], B = [M], N = [], E = [], F = u != null ? [] : void 0;
  function L() {
    u && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function Y() {
    F && (r.gullet.macros.get("\\df@tag") ? (F.push(r.subparse([new qe("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : F.push(!!u && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (L(), E.push(pa(r)); ; ) {
    var U = r.parseExpression(!1, m ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), U = {
      type: "ordgroup",
      mode: r.mode,
      body: U
    }, t && (U = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [U]
    }), M.push(U);
    var Z = r.fetch().text;
    if (Z === "&") {
      if (p && M.length === p) {
        if (m || s)
          throw new A("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (Z === "\\end") {
      Y(), M.length === 1 && U.type === "styling" && U.body[0].body.length === 0 && (B.length > 1 || !d) && B.pop(), E.length < B.length + 1 && E.push([]);
      break;
    } else if (Z === "\\\\") {
      r.consume();
      var W = void 0;
      r.gullet.future().text !== " " && (W = r.parseSizeGroup(!0)), N.push(W ? W.value : null), Y(), E.push(pa(r)), M = [], B.push(M), L();
    } else
      throw new A("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: i,
    arraystretch: l,
    body: B,
    cols: n,
    rowGaps: N,
    hskipBeforeAndAfter: a,
    hLinesBeforeRow: E,
    colSeparationType: s,
    tags: F,
    leqno: y
  };
}
function dr(r) {
  return r.substr(0, 1) === "d" ? "display" : "text";
}
var Fe = function(e, t) {
  var a, i, n = e.body.length, l = e.hLinesBeforeRow, s = 0, u = new Array(n), m = [], d = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), p = 1 / t.fontMetrics().ptPerEm, y = 5 * p;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var w = t.havingStyle(O.SCRIPT).sizeMultiplier;
    y = 0.2778 * (w / t.sizeMultiplier);
  }
  var M = e.colSeparationType === "CD" ? ue({
    number: 3,
    unit: "ex"
  }, t) : 12 * p, B = 3 * p, N = e.arraystretch * M, E = 0.7 * N, F = 0.3 * N, L = 0;
  function Y(W0) {
    for (var X0 = 0; X0 < W0.length; ++X0)
      X0 > 0 && (L += 0.25), m.push({
        pos: L,
        isDashed: W0[X0]
      });
  }
  for (Y(l[0]), a = 0; a < e.body.length; ++a) {
    var U = e.body[a], Z = E, W = F;
    s < U.length && (s = U.length);
    var ne = new Array(U.length);
    for (i = 0; i < U.length; ++i) {
      var le = X(U[i], t);
      W < le.depth && (W = le.depth), Z < le.height && (Z = le.height), ne[i] = le;
    }
    var ge = e.rowGaps[a], xe = 0;
    ge && (xe = ue(ge, t), xe > 0 && (xe += F, W < xe && (W = xe), xe = 0)), e.addJot && (W += B), ne.height = Z, ne.depth = W, L += Z, ne.pos = L, L += W + xe, u[a] = ne, Y(l[a + 1]);
  }
  var je = L / 2 + t.fontMetrics().axisHeight, Qe = e.cols || [], Be = [], Ge, v0, xt = [];
  if (e.tags && e.tags.some((W0) => W0))
    for (a = 0; a < n; ++a) {
      var wt = u[a], fn = wt.pos - je, kt = e.tags[a], g0 = void 0;
      kt === !0 ? g0 = x.makeSpan(["eqn-num"], [], t) : kt === !1 ? g0 = x.makeSpan([], [], t) : g0 = x.makeSpan([], be(kt, t, !0), t), g0.depth = wt.depth, g0.height = wt.height, xt.push({
        type: "elem",
        elem: g0,
        shift: fn
      });
    }
  for (
    i = 0, v0 = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    i < s || v0 < Qe.length;
    ++i, ++v0
  ) {
    for (var Ve = Qe[v0] || {}, kr = !0; Ve.type === "separator"; ) {
      if (kr || (Ge = x.makeSpan(["arraycolsep"], []), Ge.style.width = C(t.fontMetrics().doubleRuleSep), Be.push(Ge)), Ve.separator === "|" || Ve.separator === ":") {
        var pn = Ve.separator === "|" ? "solid" : "dashed", b0 = x.makeSpan(["vertical-separator"], [], t);
        b0.style.height = C(L), b0.style.borderRightWidth = C(d), b0.style.borderRightStyle = pn, b0.style.margin = "0 " + C(-d / 2);
        var Sr = L - je;
        Sr && (b0.style.verticalAlign = C(-Sr)), Be.push(b0);
      } else
        throw new A("Invalid separator type: " + Ve.separator);
      v0++, Ve = Qe[v0] || {}, kr = !1;
    }
    if (!(i >= s)) {
      var y0 = void 0;
      (i > 0 || e.hskipBeforeAndAfter) && (y0 = P.deflt(Ve.pregap, y), y0 !== 0 && (Ge = x.makeSpan(["arraycolsep"], []), Ge.style.width = C(y0), Be.push(Ge)));
      var x0 = [];
      for (a = 0; a < n; ++a) {
        var V0 = u[a], U0 = V0[i];
        if (U0) {
          var vn = V0.pos - je;
          U0.depth = V0.depth, U0.height = V0.height, x0.push({
            type: "elem",
            elem: U0,
            shift: vn
          });
        }
      }
      x0 = x.makeVList({
        positionType: "individualShift",
        children: x0
      }, t), x0 = x.makeSpan(["col-align-" + (Ve.align || "c")], [x0]), Be.push(x0), (i < s - 1 || e.hskipBeforeAndAfter) && (y0 = P.deflt(Ve.postgap, y), y0 !== 0 && (Ge = x.makeSpan(["arraycolsep"], []), Ge.style.width = C(y0), Be.push(Ge)));
    }
  }
  if (u = x.makeSpan(["mtable"], Be), m.length > 0) {
    for (var gn = x.makeLineSpan("hline", t, d), bn = x.makeLineSpan("hdashline", t, d), St = [{
      type: "elem",
      elem: u,
      shift: 0
    }]; m.length > 0; ) {
      var zr = m.pop(), Mr = zr.pos - je;
      zr.isDashed ? St.push({
        type: "elem",
        elem: bn,
        shift: Mr
      }) : St.push({
        type: "elem",
        elem: gn,
        shift: Mr
      });
    }
    u = x.makeVList({
      positionType: "individualShift",
      children: St
    }, t);
  }
  if (xt.length === 0)
    return x.makeSpan(["mord"], [u], t);
  var zt = x.makeVList({
    positionType: "individualShift",
    children: xt
  }, t);
  return zt = x.makeSpan(["tag"], [zt], t), x.makeFragment([u, zt]);
}, ks = {
  c: "center ",
  l: "left ",
  r: "right "
}, Pe = function(e, t) {
  for (var a = [], i = new T.MathNode("mtd", [], ["mtr-glue"]), n = new T.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var s = e.body[l], u = [], m = 0; m < s.length; m++)
      u.push(new T.MathNode("mtd", [J(s[m], t)]));
    e.tags && e.tags[l] && (u.unshift(i), u.push(i), e.leqno ? u.unshift(n) : u.push(n)), a.push(new T.MathNode("mtr", u));
  }
  var d = new T.MathNode("mtable", a), p = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  d.setAttribute("rowspacing", C(p));
  var y = "", w = "";
  if (e.cols && e.cols.length > 0) {
    var M = e.cols, B = "", N = !1, E = 0, F = M.length;
    M[0].type === "separator" && (y += "top ", E = 1), M[M.length - 1].type === "separator" && (y += "bottom ", F -= 1);
    for (var L = E; L < F; L++)
      M[L].type === "align" ? (w += ks[M[L].align], N && (B += "none "), N = !0) : M[L].type === "separator" && N && (B += M[L].separator === "|" ? "solid " : "dashed ", N = !1);
    d.setAttribute("columnalign", w.trim()), /[sd]/.test(B) && d.setAttribute("columnlines", B.trim());
  }
  if (e.colSeparationType === "align") {
    for (var Y = e.cols || [], U = "", Z = 1; Z < Y.length; Z++)
      U += Z % 2 ? "0em " : "1em ";
    d.setAttribute("columnspacing", U.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? d.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? d.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? d.setAttribute("columnspacing", "0.5em") : d.setAttribute("columnspacing", "1em");
  var W = "", ne = e.hLinesBeforeRow;
  y += ne[0].length > 0 ? "left " : "", y += ne[ne.length - 1].length > 0 ? "right " : "";
  for (var le = 1; le < ne.length - 1; le++)
    W += ne[le].length === 0 ? "none " : ne[le][0] ? "dashed " : "solid ";
  return /[sd]/.test(W) && d.setAttribute("rowlines", W.trim()), y !== "" && (d = new T.MathNode("menclose", [d]), d.setAttribute("notation", y.trim())), e.arraystretch && e.arraystretch < 1 && (d = new T.MathNode("mstyle", [d]), d.setAttribute("scriptlevel", "1")), d;
}, Vi = function(e, t) {
  e.envName.indexOf("ed") === -1 && yt(e);
  var a = [], i = e.envName.indexOf("at") > -1 ? "alignat" : "align", n = e.envName === "split", l = o0(e.parser, {
    cols: a,
    addJot: !0,
    autoTag: n ? void 0 : mr(e.envName),
    emptySingleRow: !0,
    colSeparationType: i,
    maxNumCols: n ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s, u = 0, m = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var d = "", p = 0; p < t[0].body.length; p++) {
      var y = G(t[0].body[p], "textord");
      d += y.text;
    }
    s = Number(d), u = s * 2;
  }
  var w = !u;
  l.body.forEach(function(E) {
    for (var F = 1; F < E.length; F += 2) {
      var L = G(E[F], "styling"), Y = G(L.body[0], "ordgroup");
      Y.body.unshift(m);
    }
    if (w)
      u < E.length && (u = E.length);
    else {
      var U = E.length / 2;
      if (s < U)
        throw new A("Too many math in a row: " + ("expected " + s + ", but got " + U), E[0]);
    }
  });
  for (var M = 0; M < u; ++M) {
    var B = "r", N = 0;
    M % 2 === 1 ? B = "l" : M > 0 && w && (N = 1), a[M] = {
      type: "align",
      align: B,
      pregap: N,
      postgap: 0
    };
  }
  return l.colSeparationType = w ? "align" : "alignat", l;
};
He({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = gt(e[0]), a = t ? [e[0]] : G(e[0], "ordgroup").body, i = a.map(function(l) {
      var s = sr(l), u = s.text;
      if ("lcr".indexOf(u) !== -1)
        return {
          type: "align",
          align: u
        };
      if (u === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (u === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new A("Unknown column alignment: " + u, l);
    }), n = {
      cols: i,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return o0(r.parser, n, dr(r.envName));
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", a = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var i = r.parser;
      if (i.consumeSpaces(), i.fetch().text === "[") {
        if (i.consume(), i.consumeSpaces(), t = i.fetch().text, "lcr".indexOf(t) === -1)
          throw new A("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), a.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var n = o0(r.parser, a, dr(r.envName)), l = Math.max(0, ...n.body.map((s) => s.length));
    return n.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [n],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : n;
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = o0(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = gt(e[0]), a = t ? [e[0]] : G(e[0], "ordgroup").body, i = a.map(function(l) {
      var s = sr(l), u = s.text;
      if ("lc".indexOf(u) !== -1)
        return {
          type: "align",
          align: u
        };
      throw new A("Unknown column alignment: " + u, l);
    });
    if (i.length > 1)
      throw new A("{subarray} can contain only one column");
    var n = {
      cols: i,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (n = o0(r.parser, n, "script"), n.body.length > 0 && n.body[0].length > 1)
      throw new A("{subarray} can contain only one column");
    return n;
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
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
    }, t = o0(r.parser, e, dr(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Vi,
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    P.contains(["gather", "gather*"], r.envName) && yt(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: mr(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return o0(r.parser, e, "display");
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Vi,
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    yt(r);
    var e = {
      autoTag: mr(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return o0(r.parser, e, "display");
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
He({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return yt(r), os(r.parser);
  },
  htmlBuilder: Fe,
  mathmlBuilder: Pe
});
f("\\nonumber", "\\gdef\\@eqnsw{0}");
f("\\notag", "\\nonumber");
D({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new A(r.funcName + " valid only within array environment");
  }
});
var va = ji;
D({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    if (i.type !== "ordgroup")
      throw new A("Invalid environment name", i);
    for (var n = "", l = 0; l < i.body.length; ++l)
      n += G(i.body[l], "textord").text;
    if (a === "\\begin") {
      if (!va.hasOwnProperty(n))
        throw new A("No such environment: " + n, i);
      var s = va[n], {
        args: u,
        optArgs: m
      } = t.parseArguments("\\begin{" + n + "}", s), d = {
        mode: t.mode,
        envName: n,
        parser: t
      }, p = s.handler(d, u, m);
      t.expect("\\end", !1);
      var y = t.nextToken, w = G(t.parseFunction(), "environment");
      if (w.name !== n)
        throw new A("Mismatch: \\begin{" + n + "} matched by \\end{" + w.name + "}", y);
      return p;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: n,
      nameGroup: i
    };
  }
});
var Ss = x.makeSpan;
function Ui(r, e) {
  var t = be(r.body, e, !0);
  return Ss([r.mclass], t, e);
}
function Wi(r, e) {
  var t, a = $e(r.body, e);
  return r.mclass === "minner" ? t = new T.MathNode("mpadded", a) : r.mclass === "mord" ? r.isCharacterBox ? (t = a[0], t.type = "mi") : t = new T.MathNode("mi", a) : (r.isCharacterBox ? (t = a[0], t.type = "mo") : t = new T.MathNode("mo", a), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
D({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + a.substr(5),
      // TODO(kevinb): don't prefix with 'm'
      body: de(i),
      isCharacterBox: P.isCharacterBox(i)
    };
  },
  htmlBuilder: Ui,
  mathmlBuilder: Wi
});
var fr = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
D({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: fr(e[0]),
      body: de(e[1]),
      isCharacterBox: P.isCharacterBox(e[1])
    };
  }
});
D({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, i = e[1], n = e[0], l;
    a !== "\\stackrel" ? l = fr(i) : l = "mrel";
    var s = {
      type: "op",
      mode: i.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: a !== "\\stackrel",
      body: de(i)
    }, u = {
      type: "supsub",
      mode: n.mode,
      base: s,
      sup: a === "\\underset" ? null : n,
      sub: a === "\\underset" ? n : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [u],
      isCharacterBox: P.isCharacterBox(u)
    };
  },
  htmlBuilder: Ui,
  mathmlBuilder: Wi
});
var Xi = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return X(r.body, a);
}, Yi = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return J(r.body, a);
}, ga = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
D({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
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
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = ft(e[0]), n = a;
    return n in ga && (n = ga[n]), {
      type: "font",
      mode: t.mode,
      font: n.slice(1),
      body: i
    };
  },
  htmlBuilder: Xi,
  mathmlBuilder: Yi
});
D({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0], i = P.isCharacterBox(a);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: fr(a),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: a
      }],
      isCharacterBox: i
    };
  }
});
D({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a,
      breakOnTokenText: i
    } = r, {
      mode: n
    } = t, l = t.parseExpression(!0, i), s = "math" + a.slice(1);
    return {
      type: "font",
      mode: n,
      font: s,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: Xi,
  mathmlBuilder: Yi
});
var Zi = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= O.SCRIPT.id ? t.text() : O.DISPLAY : r === "text" && t.size === O.DISPLAY.size ? t = O.TEXT : r === "script" ? t = O.SCRIPT : r === "scriptscript" && (t = O.SCRIPTSCRIPT), t;
}, pr = (r, e) => {
  var t = Zi(r.size, e.style), a = t.fracNum(), i = t.fracDen(), n;
  n = e.havingStyle(a);
  var l = X(r.numer, n, e);
  if (r.continued) {
    var s = 8.5 / e.fontMetrics().ptPerEm, u = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < s ? s : l.height, l.depth = l.depth < u ? u : l.depth;
  }
  n = e.havingStyle(i);
  var m = X(r.denom, n, e), d, p, y;
  r.hasBarLine ? (r.barSize ? (p = ue(r.barSize, e), d = x.makeLineSpan("frac-line", e, p)) : d = x.makeLineSpan("frac-line", e), p = d.height, y = d.height) : (d = null, p = 0, y = e.fontMetrics().defaultRuleThickness);
  var w, M, B;
  t.size === O.DISPLAY.size || r.size === "display" ? (w = e.fontMetrics().num1, p > 0 ? M = 3 * y : M = 7 * y, B = e.fontMetrics().denom1) : (p > 0 ? (w = e.fontMetrics().num2, M = y) : (w = e.fontMetrics().num3, M = 3 * y), B = e.fontMetrics().denom2);
  var N;
  if (d) {
    var F = e.fontMetrics().axisHeight;
    w - l.depth - (F + 0.5 * p) < M && (w += M - (w - l.depth - (F + 0.5 * p))), F - 0.5 * p - (m.height - B) < M && (B += M - (F - 0.5 * p - (m.height - B)));
    var L = -(F - 0.5 * p);
    N = x.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: m,
        shift: B
      }, {
        type: "elem",
        elem: d,
        shift: L
      }, {
        type: "elem",
        elem: l,
        shift: -w
      }]
    }, e);
  } else {
    var E = w - l.depth - (m.height - B);
    E < M && (w += 0.5 * (M - E), B += 0.5 * (M - E)), N = x.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: m,
        shift: B
      }, {
        type: "elem",
        elem: l,
        shift: -w
      }]
    }, e);
  }
  n = e.havingStyle(t), N.height *= n.sizeMultiplier / e.sizeMultiplier, N.depth *= n.sizeMultiplier / e.sizeMultiplier;
  var Y;
  t.size === O.DISPLAY.size ? Y = e.fontMetrics().delim1 : t.size === O.SCRIPTSCRIPT.size ? Y = e.havingStyle(O.SCRIPT).fontMetrics().delim2 : Y = e.fontMetrics().delim2;
  var U, Z;
  return r.leftDelim == null ? U = O0(e, ["mopen"]) : U = Ye.customSizedDelim(r.leftDelim, Y, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? Z = x.makeSpan([]) : r.rightDelim == null ? Z = O0(e, ["mclose"]) : Z = Ye.customSizedDelim(r.rightDelim, Y, !0, e.havingStyle(t), r.mode, ["mclose"]), x.makeSpan(["mord"].concat(n.sizingClasses(e)), [U, x.makeSpan(["mfrac"], [N]), Z], e);
}, vr = (r, e) => {
  var t = new T.MathNode("mfrac", [J(r.numer, e), J(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var a = ue(r.barSize, e);
    t.setAttribute("linethickness", C(a));
  }
  var i = Zi(r.size, e.style);
  if (i.size !== e.style.size) {
    t = new T.MathNode("mstyle", [t]);
    var n = i.size === O.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", n), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var l = [];
    if (r.leftDelim != null) {
      var s = new T.MathNode("mo", [new T.TextNode(r.leftDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), l.push(s);
    }
    if (l.push(t), r.rightDelim != null) {
      var u = new T.MathNode("mo", [new T.TextNode(r.rightDelim.replace("\\", ""))]);
      u.setAttribute("fence", "true"), l.push(u);
    }
    return nr(l);
  }
  return t;
};
D({
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
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0], n = e[1], l, s = null, u = null, m = "auto";
    switch (a) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, s = "(", u = ")";
        break;
      case "\\\\bracefrac":
        l = !1, s = "\\{", u = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, s = "[", u = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (a) {
      case "\\dfrac":
      case "\\dbinom":
        m = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        m = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: i,
      denom: n,
      hasBarLine: l,
      leftDelim: s,
      rightDelim: u,
      size: m,
      barSize: null
    };
  },
  htmlBuilder: pr,
  mathmlBuilder: vr
});
D({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0], n = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: i,
      denom: n,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
D({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: a
    } = r, i;
    switch (t) {
      case "\\over":
        i = "\\frac";
        break;
      case "\\choose":
        i = "\\binom";
        break;
      case "\\atop":
        i = "\\\\atopfrac";
        break;
      case "\\brace":
        i = "\\\\bracefrac";
        break;
      case "\\brack":
        i = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: i,
      token: a
    };
  }
});
var ba = ["display", "text", "script", "scriptscript"], ya = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
D({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = e[4], i = e[5], n = ft(e[0]), l = n.type === "atom" && n.family === "open" ? ya(n.text) : null, s = ft(e[1]), u = s.type === "atom" && s.family === "close" ? ya(s.text) : null, m = G(e[2], "size"), d, p = null;
    m.isBlank ? d = !0 : (p = m.value, d = p.number > 0);
    var y = "auto", w = e[3];
    if (w.type === "ordgroup") {
      if (w.body.length > 0) {
        var M = G(w.body[0], "textord");
        y = ba[Number(M.text)];
      }
    } else
      w = G(w, "textord"), y = ba[Number(w.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: i,
      continued: !1,
      hasBarLine: d,
      barSize: p,
      leftDelim: l,
      rightDelim: u,
      size: y
    };
  },
  htmlBuilder: pr,
  mathmlBuilder: vr
});
D({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a,
      token: i
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: G(e[0], "size").value,
      token: i
    };
  }
});
D({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0], n = tl(G(e[1], "infix").size), l = e[2], s = n.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: i,
      denom: l,
      continued: !1,
      hasBarLine: s,
      barSize: n,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: pr,
  mathmlBuilder: vr
});
var Ki = (r, e) => {
  var t = e.style, a, i;
  r.type === "supsub" ? (a = r.sup ? X(r.sup, e.havingStyle(t.sup()), e) : X(r.sub, e.havingStyle(t.sub()), e), i = G(r.base, "horizBrace")) : i = G(r, "horizBrace");
  var n = X(i.base, e.havingBaseStyle(O.DISPLAY)), l = Ke.svgSpan(i, e), s;
  if (i.isOver ? (s = x.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: n
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), s.children[0].children[0].children[1].classes.push("svg-align")) : (s = x.makeVList({
    positionType: "bottom",
    positionData: n.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: n
    }]
  }, e), s.children[0].children[0].children[0].classes.push("svg-align")), a) {
    var u = x.makeSpan(["mord", i.isOver ? "mover" : "munder"], [s], e);
    i.isOver ? s = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: u
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: a
      }]
    }, e) : s = x.makeVList({
      positionType: "bottom",
      positionData: u.depth + 0.2 + a.height + a.depth,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: u
      }]
    }, e);
  }
  return x.makeSpan(["mord", i.isOver ? "mover" : "munder"], [s], e);
}, zs = (r, e) => {
  var t = Ke.mathMLnode(r.label);
  return new T.MathNode(r.isOver ? "mover" : "munder", [J(r.base, e), t]);
};
D({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: a,
      isOver: /^\\over/.test(a),
      base: e[0]
    };
  },
  htmlBuilder: Ki,
  mathmlBuilder: zs
});
D({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[1], i = G(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: i
    }) ? {
      type: "href",
      mode: t.mode,
      href: i,
      body: de(a)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = be(r.body, e, !1);
    return x.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = s0(r.body, e);
    return t instanceof Ce || (t = new Ce("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
D({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = G(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: a
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var i = [], n = 0; n < a.length; n++) {
      var l = a[n];
      l === "~" && (l = "\\textasciitilde"), i.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var s = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: i
    };
    return {
      type: "href",
      mode: t.mode,
      href: a,
      body: de(s)
    };
  }
});
D({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: de(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = be(r.body, e, !1);
    return x.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new T.MathNode("mrow", $e(r.body, e));
  }
});
D({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a,
      token: i
    } = r, n = G(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var s, u = {};
    switch (a) {
      case "\\htmlClass":
        u.class = n, s = {
          command: "\\htmlClass",
          class: n
        };
        break;
      case "\\htmlId":
        u.id = n, s = {
          command: "\\htmlId",
          id: n
        };
        break;
      case "\\htmlStyle":
        u.style = n, s = {
          command: "\\htmlStyle",
          style: n
        };
        break;
      case "\\htmlData": {
        for (var m = n.split(","), d = 0; d < m.length; d++) {
          var p = m[d].split("=");
          if (p.length !== 2)
            throw new A("Error parsing key-value for \\htmlData");
          u["data-" + p[0].trim()] = p[1].trim();
        }
        s = {
          command: "\\htmlData",
          attributes: u
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(s) ? {
      type: "html",
      mode: t.mode,
      attributes: u,
      body: de(l)
    } : t.formatUnsupportedCmd(a);
  },
  htmlBuilder: (r, e) => {
    var t = be(r.body, e, !1), a = ["enclosing"];
    r.attributes.class && a.push(...r.attributes.class.trim().split(/\s+/));
    var i = x.makeSpan(a, t, e);
    for (var n in r.attributes)
      n !== "class" && r.attributes.hasOwnProperty(n) && i.setAttribute(n, r.attributes[n]);
    return i;
  },
  mathmlBuilder: (r, e) => s0(r.body, e)
});
D({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: de(e[0]),
      mathml: de(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = be(r.html, e, !1);
    return x.makeFragment(t);
  },
  mathmlBuilder: (r, e) => s0(r.mathml, e)
});
var It = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new A("Invalid size: '" + e + "' in \\includegraphics");
  var a = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!vi(a))
    throw new A("Invalid unit: '" + a.unit + "' in \\includegraphics.");
  return a;
};
D({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r, e, t) => {
    var {
      parser: a
    } = r, i = {
      number: 0,
      unit: "em"
    }, n = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, s = "";
    if (t[0])
      for (var u = G(t[0], "raw").string, m = u.split(","), d = 0; d < m.length; d++) {
        var p = m[d].split("=");
        if (p.length === 2) {
          var y = p[1].trim();
          switch (p[0].trim()) {
            case "alt":
              s = y;
              break;
            case "width":
              i = It(y);
              break;
            case "height":
              n = It(y);
              break;
            case "totalheight":
              l = It(y);
              break;
            default:
              throw new A("Invalid key: '" + p[0] + "' in \\includegraphics.");
          }
        }
      }
    var w = G(e[0], "url").url;
    return s === "" && (s = w, s = s.replace(/^.*[\\/]/, ""), s = s.substring(0, s.lastIndexOf("."))), a.settings.isTrusted({
      command: "\\includegraphics",
      url: w
    }) ? {
      type: "includegraphics",
      mode: a.mode,
      alt: s,
      width: i,
      height: n,
      totalheight: l,
      src: w
    } : a.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = ue(r.height, e), a = 0;
    r.totalheight.number > 0 && (a = ue(r.totalheight, e) - t);
    var i = 0;
    r.width.number > 0 && (i = ue(r.width, e));
    var n = {
      height: C(t + a)
    };
    i > 0 && (n.width = C(i)), a > 0 && (n.verticalAlign = C(-a));
    var l = new zl(r.src, r.alt, n);
    return l.height = t, l.depth = a, l;
  },
  mathmlBuilder: (r, e) => {
    var t = new T.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var a = ue(r.height, e), i = 0;
    if (r.totalheight.number > 0 && (i = ue(r.totalheight, e) - a, t.setAttribute("valign", C(-i))), t.setAttribute("height", C(a + i)), r.width.number > 0) {
      var n = ue(r.width, e);
      t.setAttribute("width", C(n));
    }
    return t.setAttribute("src", r.src), t;
  }
});
D({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, i = G(e[0], "size");
    if (t.settings.strict) {
      var n = a[1] === "m", l = i.value.unit === "mu";
      n ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + i.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: i.value
    };
  },
  htmlBuilder(r, e) {
    return x.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = ue(r.dimension, e);
    return new T.SpaceNode(t);
  }
});
D({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: a.slice(5),
      body: i
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = x.makeSpan([], [X(r.body, e)]), t = x.makeSpan(["inner"], [t], e)) : t = x.makeSpan(["inner"], [X(r.body, e)]);
    var a = x.makeSpan(["fix"], []), i = x.makeSpan([r.alignment], [t, a], e), n = x.makeSpan(["strut"]);
    return n.style.height = C(i.height + i.depth), i.depth && (n.style.verticalAlign = C(-i.depth)), i.children.unshift(n), i = x.makeSpan(["thinbox"], [i], e), x.makeSpan(["mord", "vbox"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new T.MathNode("mpadded", [J(r.body, e)]);
    if (r.alignment !== "rlap") {
      var a = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", a + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
D({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    var {
      funcName: t,
      parser: a
    } = r, i = a.mode;
    a.switchMode("math");
    var n = t === "\\(" ? "\\)" : "$", l = a.parseExpression(!1, n);
    return a.expect(n), a.switchMode(i), {
      type: "styling",
      mode: a.mode,
      style: "text",
      body: l
    };
  }
});
D({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new A("Mismatched " + r.funcName);
  }
});
var xa = (r, e) => {
  switch (e.style.size) {
    case O.DISPLAY.size:
      return r.display;
    case O.TEXT.size:
      return r.text;
    case O.SCRIPT.size:
      return r.script;
    case O.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
D({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: de(e[0]),
      text: de(e[1]),
      script: de(e[2]),
      scriptscript: de(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = xa(r, e), a = be(t, e, !1);
    return x.makeFragment(a);
  },
  mathmlBuilder: (r, e) => {
    var t = xa(r, e);
    return s0(t, e);
  }
});
var Ji = (r, e, t, a, i, n, l) => {
  r = x.makeSpan([], [r]);
  var s = t && P.isCharacterBox(t), u, m;
  if (e) {
    var d = X(e, a.havingStyle(i.sup()), a);
    m = {
      elem: d,
      kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - d.depth)
    };
  }
  if (t) {
    var p = X(t, a.havingStyle(i.sub()), a);
    u = {
      elem: p,
      kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - p.height)
    };
  }
  var y;
  if (m && u) {
    var w = a.fontMetrics().bigOpSpacing5 + u.elem.height + u.elem.depth + u.kern + r.depth + l;
    y = x.makeVList({
      positionType: "bottom",
      positionData: w,
      children: [{
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: C(-n)
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: m.kern
      }, {
        type: "elem",
        elem: m.elem,
        marginLeft: C(n)
      }, {
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }]
    }, a);
  } else if (u) {
    var M = r.height - l;
    y = x.makeVList({
      positionType: "top",
      positionData: M,
      children: [{
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: u.elem,
        marginLeft: C(-n)
      }, {
        type: "kern",
        size: u.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, a);
  } else if (m) {
    var B = r.depth + l;
    y = x.makeVList({
      positionType: "bottom",
      positionData: B,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: m.kern
      }, {
        type: "elem",
        elem: m.elem,
        marginLeft: C(n)
      }, {
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }]
    }, a);
  } else
    return r;
  var N = [y];
  if (u && n !== 0 && !s) {
    var E = x.makeSpan(["mspace"], [], a);
    E.style.marginRight = C(n), N.unshift(E);
  }
  return x.makeSpan(["mop", "op-limits"], N, a);
}, Qi = ["\\smallint"], C0 = (r, e) => {
  var t, a, i = !1, n;
  r.type === "supsub" ? (t = r.sup, a = r.sub, n = G(r.base, "op"), i = !0) : n = G(r, "op");
  var l = e.style, s = !1;
  l.size === O.DISPLAY.size && n.symbol && !P.contains(Qi, n.name) && (s = !0);
  var u;
  if (n.symbol) {
    var m = s ? "Size2-Regular" : "Size1-Regular", d = "";
    if ((n.name === "\\oiint" || n.name === "\\oiiint") && (d = n.name.substr(1), n.name = d === "oiint" ? "\\iint" : "\\iiint"), u = x.makeSymbol(n.name, m, "math", e, ["mop", "op-symbol", s ? "large-op" : "small-op"]), d.length > 0) {
      var p = u.italic, y = x.staticSvg(d + "Size" + (s ? "2" : "1"), e);
      u = x.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: u,
          shift: 0
        }, {
          type: "elem",
          elem: y,
          shift: s ? 0.08 : 0
        }]
      }, e), n.name = "\\" + d, u.classes.unshift("mop"), u.italic = p;
    }
  } else if (n.body) {
    var w = be(n.body, e, !0);
    w.length === 1 && w[0] instanceof Ne ? (u = w[0], u.classes[0] = "mop") : u = x.makeSpan(["mop"], w, e);
  } else {
    for (var M = [], B = 1; B < n.name.length; B++)
      M.push(x.mathsym(n.name[B], n.mode, e));
    u = x.makeSpan(["mop"], M, e);
  }
  var N = 0, E = 0;
  return (u instanceof Ne || n.name === "\\oiint" || n.name === "\\oiiint") && !n.suppressBaseShift && (N = (u.height - u.depth) / 2 - e.fontMetrics().axisHeight, E = u.italic), i ? Ji(u, t, a, e, l, E, N) : (N && (u.style.position = "relative", u.style.top = C(N)), u);
}, G0 = (r, e) => {
  var t;
  if (r.symbol)
    t = new Ce("mo", [_e(r.name, r.mode)]), P.contains(Qi, r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new Ce("mo", $e(r.body, e));
  else {
    t = new Ce("mi", [new _0(r.name.slice(1))]);
    var a = new Ce("mo", [_e("⁡", "text")]);
    r.parentIsSupSub ? t = new Ce("mrow", [t, a]) : t = Ai([t, a]);
  }
  return t;
}, Ms = {
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
D({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = a;
    return i.length === 1 && (i = Ms[i]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: C0,
  mathmlBuilder: G0
});
D({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: de(a)
    };
  },
  htmlBuilder: C0,
  mathmlBuilder: G0
});
var Ts = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
D({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: C0,
  mathmlBuilder: G0
});
D({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: C0,
  mathmlBuilder: G0
});
D({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = t;
    return a.length === 1 && (a = Ts[a]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: C0,
  mathmlBuilder: G0
});
var en = (r, e) => {
  var t, a, i = !1, n;
  r.type === "supsub" ? (t = r.sup, a = r.sub, n = G(r.base, "operatorname"), i = !0) : n = G(r, "operatorname");
  var l;
  if (n.body.length > 0) {
    for (var s = n.body.map((p) => {
      var y = p.text;
      return typeof y == "string" ? {
        type: "textord",
        mode: p.mode,
        text: y
      } : p;
    }), u = be(s, e.withFont("mathrm"), !0), m = 0; m < u.length; m++) {
      var d = u[m];
      d instanceof Ne && (d.text = d.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = x.makeSpan(["mop"], u, e);
  } else
    l = x.makeSpan(["mop"], [], e);
  return i ? Ji(l, t, a, e, e.style, 0, 0) : l;
}, As = (r, e) => {
  for (var t = $e(r.body, e.withFont("mathrm")), a = !0, i = 0; i < t.length; i++) {
    var n = t[i];
    if (!(n instanceof T.SpaceNode)) if (n instanceof T.MathNode)
      switch (n.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = n.children[0];
          n.children.length === 1 && l instanceof T.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = !1;
          break;
        }
        default:
          a = !1;
      }
    else
      a = !1;
  }
  if (a) {
    var s = t.map((d) => d.toText()).join("");
    t = [new T.TextNode(s)];
  }
  var u = new T.MathNode("mi", t);
  u.setAttribute("mathvariant", "normal");
  var m = new T.MathNode("mo", [_e("⁡", "text")]);
  return r.parentIsSupSub ? new T.MathNode("mrow", [u, m]) : T.newDocumentFragment([u, m]);
};
D({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: de(i),
      alwaysHandleSupSub: a === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: en,
  mathmlBuilder: As
});
f("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
p0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? x.makeFragment(be(r.body, e, !1)) : x.makeSpan(["mord"], be(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return s0(r.body, e, !0);
  }
});
D({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = X(r.body, e.havingCrampedStyle()), a = x.makeLineSpan("overline-line", e), i = e.fontMetrics().defaultRuleThickness, n = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: i
      }]
    }, e);
    return x.makeSpan(["mord", "overline"], [n], e);
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mo", [new T.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var a = new T.MathNode("mover", [J(r.body, e), t]);
    return a.setAttribute("accent", "true"), a;
  }
});
D({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: de(a)
    };
  },
  htmlBuilder: (r, e) => {
    var t = be(r.body, e.withPhantom(), !1);
    return x.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = $e(r.body, e);
    return new T.MathNode("mphantom", t);
  }
});
D({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = x.makeSpan([], [X(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var a = 0; a < t.children.length; a++)
        t.children[a].height = 0, t.children[a].depth = 0;
    return t = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), x.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = $e(de(r.body), e), a = new T.MathNode("mphantom", t), i = new T.MathNode("mpadded", [a]);
    return i.setAttribute("height", "0px"), i.setAttribute("depth", "0px"), i;
  }
});
D({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = x.makeSpan(["inner"], [X(r.body, e.withPhantom())]), a = x.makeSpan(["fix"], []);
    return x.makeSpan(["mord", "rlap"], [t, a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = $e(de(r.body), e), a = new T.MathNode("mphantom", t), i = new T.MathNode("mpadded", [a]);
    return i.setAttribute("width", "0px"), i;
  }
});
D({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = G(e[0], "size").value, i = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: a,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = X(r.body, e), a = ue(r.dy, e);
    return x.makeVList({
      positionType: "shift",
      positionData: -a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mpadded", [J(r.body, e)]), a = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", a), t;
  }
});
D({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
D({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    argTypes: ["size", "size", "size"]
  },
  handler(r, e, t) {
    var {
      parser: a
    } = r, i = t[0], n = G(e[0], "size"), l = G(e[1], "size");
    return {
      type: "rule",
      mode: a.mode,
      shift: i && G(i, "size").value,
      width: n.value,
      height: l.value
    };
  },
  htmlBuilder(r, e) {
    var t = x.makeSpan(["mord", "rule"], [], e), a = ue(r.width, e), i = ue(r.height, e), n = r.shift ? ue(r.shift, e) : 0;
    return t.style.borderRightWidth = C(a), t.style.borderTopWidth = C(i), t.style.bottom = C(n), t.width = a, t.height = i + n, t.depth = -n, t.maxFontSize = i * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = ue(r.width, e), a = ue(r.height, e), i = r.shift ? ue(r.shift, e) : 0, n = e.color && e.getColor() || "black", l = new T.MathNode("mspace");
    l.setAttribute("mathbackground", n), l.setAttribute("width", C(t)), l.setAttribute("height", C(a));
    var s = new T.MathNode("mpadded", [l]);
    return i >= 0 ? s.setAttribute("height", C(i)) : (s.setAttribute("height", C(i)), s.setAttribute("depth", C(-i))), s.setAttribute("voffset", C(i)), s;
  }
});
function tn(r, e, t) {
  for (var a = be(r, e, !1), i = e.sizeMultiplier / t.sizeMultiplier, n = 0; n < a.length; n++) {
    var l = a[n].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(a[n].classes, e.sizingClasses(t)) : a[n].classes[l + 1] === "reset-size" + e.size && (a[n].classes[l + 1] = "reset-size" + t.size), a[n].height *= i, a[n].depth *= i;
  }
  return x.makeFragment(a);
}
var wa = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], $s = (r, e) => {
  var t = e.havingSize(r.size);
  return tn(r.body, t, e);
};
D({
  type: "sizing",
  names: wa,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: a,
      parser: i
    } = r, n = i.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: i.mode,
      // Figure out what size to use based on the list of functions above
      size: wa.indexOf(a) + 1,
      body: n
    };
  },
  htmlBuilder: $s,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), a = $e(r.body, t), i = new T.MathNode("mstyle", a);
    return i.setAttribute("mathsize", C(t.sizeMultiplier)), i;
  }
});
D({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r, e, t) => {
    var {
      parser: a
    } = r, i = !1, n = !1, l = t[0] && G(t[0], "ordgroup");
    if (l)
      for (var s = "", u = 0; u < l.body.length; ++u) {
        var m = l.body[u];
        if (s = m.text, s === "t")
          i = !0;
        else if (s === "b")
          n = !0;
        else {
          i = !1, n = !1;
          break;
        }
      }
    else
      i = !0, n = !0;
    var d = e[0];
    return {
      type: "smash",
      mode: a.mode,
      body: d,
      smashHeight: i,
      smashDepth: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = x.makeSpan([], [X(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var i = 0; i < t.children.length; i++)
        t.children[i].depth = 0;
    var n = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return x.makeSpan(["mord"], [n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new T.MathNode("mpadded", [J(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
D({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: a
    } = r, i = t[0], n = e[0];
    return {
      type: "sqrt",
      mode: a.mode,
      body: n,
      index: i
    };
  },
  htmlBuilder(r, e) {
    var t = X(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = x.wrapFragment(t, e);
    var a = e.fontMetrics(), i = a.defaultRuleThickness, n = i;
    e.style.id < O.TEXT.id && (n = e.fontMetrics().xHeight);
    var l = i + n / 4, s = t.height + t.depth + l + i, {
      span: u,
      ruleWidth: m,
      advanceWidth: d
    } = Ye.sqrtImage(s, e), p = u.height - m;
    p > t.height + t.depth + l && (l = (l + p - t.height - t.depth) / 2);
    var y = u.height - t.height - l - m;
    t.style.paddingLeft = C(d);
    var w = x.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + y)
      }, {
        type: "elem",
        elem: u
      }, {
        type: "kern",
        size: m
      }]
    }, e);
    if (r.index) {
      var M = e.havingStyle(O.SCRIPTSCRIPT), B = X(r.index, M, e), N = 0.6 * (w.height - w.depth), E = x.makeVList({
        positionType: "shift",
        positionData: -N,
        children: [{
          type: "elem",
          elem: B
        }]
      }, e), F = x.makeSpan(["root"], [E]);
      return x.makeSpan(["mord", "sqrt"], [F, w], e);
    } else
      return x.makeSpan(["mord", "sqrt"], [w], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: a
    } = r;
    return a ? new T.MathNode("mroot", [J(t, e), J(a, e)]) : new T.MathNode("msqrt", [J(t, e)]);
  }
});
var ka = {
  display: O.DISPLAY,
  text: O.TEXT,
  script: O.SCRIPT,
  scriptscript: O.SCRIPTSCRIPT
};
D({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: a,
      parser: i
    } = r, n = i.parseExpression(!0, t), l = a.slice(1, a.length - 5);
    return {
      type: "styling",
      mode: i.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = ka[r.style], a = e.havingStyle(t).withFont("");
    return tn(r.body, a, e);
  },
  mathmlBuilder(r, e) {
    var t = ka[r.style], a = e.havingStyle(t), i = $e(r.body, a), n = new T.MathNode("mstyle", i), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, s = l[r.style];
    return n.setAttribute("scriptlevel", s[0]), n.setAttribute("displaystyle", s[1]), n;
  }
});
var Bs = function(e, t) {
  var a = e.base;
  if (a)
    if (a.type === "op") {
      var i = a.limits && (t.style.size === O.DISPLAY.size || a.alwaysHandleSupSub);
      return i ? C0 : null;
    } else if (a.type === "operatorname") {
      var n = a.alwaysHandleSupSub && (t.style.size === O.DISPLAY.size || a.limits);
      return n ? en : null;
    } else {
      if (a.type === "accent")
        return P.isCharacterBox(a.base) ? or : null;
      if (a.type === "horizBrace") {
        var l = !e.sub;
        return l === a.isOver ? Ki : null;
      } else
        return null;
    }
  else return null;
};
p0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = Bs(r, e);
    if (t)
      return t(r, e);
    var {
      base: a,
      sup: i,
      sub: n
    } = r, l = X(a, e), s, u, m = e.fontMetrics(), d = 0, p = 0, y = a && P.isCharacterBox(a);
    if (i) {
      var w = e.havingStyle(e.style.sup());
      s = X(i, w, e), y || (d = l.height - w.fontMetrics().supDrop * w.sizeMultiplier / e.sizeMultiplier);
    }
    if (n) {
      var M = e.havingStyle(e.style.sub());
      u = X(n, M, e), y || (p = l.depth + M.fontMetrics().subDrop * M.sizeMultiplier / e.sizeMultiplier);
    }
    var B;
    e.style === O.DISPLAY ? B = m.sup1 : e.style.cramped ? B = m.sup3 : B = m.sup2;
    var N = e.sizeMultiplier, E = C(0.5 / m.ptPerEm / N), F = null;
    if (u) {
      var L = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof Ne || L) && (F = C(-l.italic));
    }
    var Y;
    if (s && u) {
      d = Math.max(d, B, s.depth + 0.25 * m.xHeight), p = Math.max(p, m.sub2);
      var U = m.defaultRuleThickness, Z = 4 * U;
      if (d - s.depth - (u.height - p) < Z) {
        p = Z - (d - s.depth) + u.height;
        var W = 0.8 * m.xHeight - (d - s.depth);
        W > 0 && (d += W, p -= W);
      }
      var ne = [{
        type: "elem",
        elem: u,
        shift: p,
        marginRight: E,
        marginLeft: F
      }, {
        type: "elem",
        elem: s,
        shift: -d,
        marginRight: E
      }];
      Y = x.makeVList({
        positionType: "individualShift",
        children: ne
      }, e);
    } else if (u) {
      p = Math.max(p, m.sub1, u.height - 0.8 * m.xHeight);
      var le = [{
        type: "elem",
        elem: u,
        marginLeft: F,
        marginRight: E
      }];
      Y = x.makeVList({
        positionType: "shift",
        positionData: p,
        children: le
      }, e);
    } else if (s)
      d = Math.max(d, B, s.depth + 0.25 * m.xHeight), Y = x.makeVList({
        positionType: "shift",
        positionData: -d,
        children: [{
          type: "elem",
          elem: s,
          marginRight: E
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var ge = Wt(l, "right") || "mord";
    return x.makeSpan([ge], [l, x.makeSpan(["msupsub"], [Y])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, a, i;
    r.base && r.base.type === "horizBrace" && (i = !!r.sup, i === r.base.isOver && (t = !0, a = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var n = [J(r.base, e)];
    r.sub && n.push(J(r.sub, e)), r.sup && n.push(J(r.sup, e));
    var l;
    if (t)
      l = a ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var m = r.base;
        m && m.type === "op" && m.limits && e.style === O.DISPLAY || m && m.type === "operatorname" && m.alwaysHandleSupSub && (e.style === O.DISPLAY || m.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var u = r.base;
        u && u.type === "op" && u.limits && (e.style === O.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === O.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var s = r.base;
      s && s.type === "op" && s.limits && (e.style === O.DISPLAY || s.alwaysHandleSupSub) || s && s.type === "operatorname" && s.alwaysHandleSupSub && (s.limits || e.style === O.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new T.MathNode(l, n);
  }
});
p0({
  type: "atom",
  htmlBuilder(r, e) {
    return x.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mo", [_e(r.text, r.mode)]);
    if (r.family === "bin") {
      var a = lr(r, e);
      a === "bold-italic" && t.setAttribute("mathvariant", a);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var rn = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
p0({
  type: "mathord",
  htmlBuilder(r, e) {
    return x.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mi", [_e(r.text, r.mode, e)]), a = lr(r, e) || "italic";
    return a !== rn[t.type] && t.setAttribute("mathvariant", a), t;
  }
});
p0({
  type: "textord",
  htmlBuilder(r, e) {
    return x.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = _e(r.text, r.mode, e), a = lr(r, e) || "normal", i;
    return r.mode === "text" ? i = new T.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? i = new T.MathNode("mn", [t]) : r.text === "\\prime" ? i = new T.MathNode("mo", [t]) : i = new T.MathNode("mi", [t]), a !== rn[i.type] && i.setAttribute("mathvariant", a), i;
  }
});
var Rt = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Lt = {
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
p0({
  type: "spacing",
  htmlBuilder(r, e) {
    if (Lt.hasOwnProperty(r.text)) {
      var t = Lt[r.text].className || "";
      if (r.mode === "text") {
        var a = x.makeOrd(r, e, "textord");
        return a.classes.push(t), a;
      } else
        return x.makeSpan(["mspace", t], [x.mathsym(r.text, r.mode, e)], e);
    } else {
      if (Rt.hasOwnProperty(r.text))
        return x.makeSpan(["mspace", Rt[r.text]], [], e);
      throw new A('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (Lt.hasOwnProperty(r.text))
      t = new T.MathNode("mtext", [new T.TextNode(" ")]);
    else {
      if (Rt.hasOwnProperty(r.text))
        return new T.MathNode("mspace");
      throw new A('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Sa = () => {
  var r = new T.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
p0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mtable", [new T.MathNode("mtr", [Sa(), new T.MathNode("mtd", [s0(r.body, e)]), Sa(), new T.MathNode("mtd", [s0(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var za = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, Ma = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Cs = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Ta = (r, e) => {
  var t = r.font;
  return t ? za[t] ? e.withTextFontFamily(za[t]) : Ma[t] ? e.withTextFontWeight(Ma[t]) : e.withTextFontShape(Cs[t]) : e;
};
D({
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
    "\\textup"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, i = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: de(i),
      font: a
    };
  },
  htmlBuilder(r, e) {
    var t = Ta(r, e), a = be(r.body, t, !0);
    return x.makeSpan(["mord", "text"], a, t);
  },
  mathmlBuilder(r, e) {
    var t = Ta(r, e);
    return s0(r.body, t);
  }
});
D({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = X(r.body, e), a = x.makeLineSpan("underline-line", e), i = e.fontMetrics().defaultRuleThickness, n = x.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return x.makeSpan(["mord", "underline"], [n], e);
  },
  mathmlBuilder(r, e) {
    var t = new T.MathNode("mo", [new T.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var a = new T.MathNode("munder", [J(r.body, e), t]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
D({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = X(r.body, e), a = e.fontMetrics().axisHeight, i = 0.5 * (t.height - a - (t.depth + a));
    return x.makeVList({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new T.MathNode("mpadded", [J(r.body, e)], ["vcenter"]);
  }
});
D({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new A("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = Aa(r), a = [], i = e.havingStyle(e.style.text()), n = 0; n < t.length; n++) {
      var l = t[n];
      l === "~" && (l = "\\textasciitilde"), a.push(x.makeSymbol(l, "Typewriter-Regular", r.mode, i, ["mord", "texttt"]));
    }
    return x.makeSpan(["mord", "text"].concat(i.sizingClasses(e)), x.tryCombineChars(a), i);
  },
  mathmlBuilder(r, e) {
    var t = new T.TextNode(Aa(r)), a = new T.MathNode("mtext", [t]);
    return a.setAttribute("mathvariant", "monospace"), a;
  }
});
var Aa = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), r0 = Mi, an = `[ \r
	]`, qs = "\\\\[a-zA-Z@]+", Ds = "\\\\[^\uD800-\uDFFF]", Ns = "(" + qs + ")" + an + "*", _s = `\\\\(
|[ \r	]+
?)[ \r	]*`, Kt = "[̀-ͯ]", Es = new RegExp(Kt + "+$"), Is = "(" + an + "+)|" + // whitespace
(_s + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Kt + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Kt + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Ns) + // \macroName + spaces
("|" + Ds + ")");
class $a {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(Is, "g"), this.catcodes = {
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
      return new qe("EOF", new Te(this, t, t));
    var a = this.tokenRegex.exec(e);
    if (a === null || a.index !== t)
      throw new A("Unexpected character: '" + e[t] + "'", new qe(e[t], new Te(this, t, t + 1)));
    var i = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[i] === 14) {
      var n = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return n === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = n + 1, this.lex();
    }
    return new qe(i, new Te(this, t, this.tokenRegex.lastIndex));
  }
}
class Rs {
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
      throw new A("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
  set(e, t, a) {
    if (a === void 0 && (a = !1), a) {
      for (var i = 0; i < this.undefStack.length; i++)
        delete this.undefStack[i][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var n = this.undefStack[this.undefStack.length - 1];
      n && !n.hasOwnProperty(e) && (n[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var Ls = Gi;
f("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
f("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
f("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
f("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
f("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
f("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
f("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var Ba = {
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
f("\\char", function(r) {
  var e = r.popToken(), t, a = "";
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      a = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new A("\\char` missing argument");
      a = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (a = Ba[e.text], a == null || a >= t)
      throw new A("Invalid base-" + t + " digit " + e.text);
    for (var i; (i = Ba[r.future().text]) != null && i < t; )
      a *= t, a += i, r.popToken();
  }
  return "\\@char{" + a + "}";
});
var gr = (r, e, t) => {
  var a = r.consumeArg().tokens;
  if (a.length !== 1)
    throw new A("\\newcommand's first argument must be a macro name");
  var i = a[0].text, n = r.isDefined(i);
  if (n && !e)
    throw new A("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!n && !t)
    throw new A("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var l = 0;
  if (a = r.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var s = "", u = r.expandNextToken(); u.text !== "]" && u.text !== "EOF"; )
      s += u.text, u = r.expandNextToken();
    if (!s.match(/^\s*[0-9]+\s*$/))
      throw new A("Invalid number of arguments: " + s);
    l = parseInt(s), a = r.consumeArg().tokens;
  }
  return r.macros.set(i, {
    tokens: a,
    numArgs: l
  }), "";
};
f("\\newcommand", (r) => gr(r, !1, !0));
f("\\renewcommand", (r) => gr(r, !0, !1));
f("\\providecommand", (r) => gr(r, !0, !0));
f("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
f("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
f("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), r0[t], ae.math[t], ae.text[t]), "";
});
f("\\bgroup", "{");
f("\\egroup", "}");
f("~", "\\nobreakspace");
f("\\lq", "`");
f("\\rq", "'");
f("\\aa", "\\r a");
f("\\AA", "\\r A");
f("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
f("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
f("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
f("ℬ", "\\mathscr{B}");
f("ℰ", "\\mathscr{E}");
f("ℱ", "\\mathscr{F}");
f("ℋ", "\\mathscr{H}");
f("ℐ", "\\mathscr{I}");
f("ℒ", "\\mathscr{L}");
f("ℳ", "\\mathscr{M}");
f("ℛ", "\\mathscr{R}");
f("ℭ", "\\mathfrak{C}");
f("ℌ", "\\mathfrak{H}");
f("ℨ", "\\mathfrak{Z}");
f("\\Bbbk", "\\Bbb{k}");
f("·", "\\cdotp");
f("\\llap", "\\mathllap{\\textrm{#1}}");
f("\\rlap", "\\mathrlap{\\textrm{#1}}");
f("\\clap", "\\mathclap{\\textrm{#1}}");
f("\\mathstrut", "\\vphantom{(}");
f("\\underbar", "\\underline{\\text{#1}}");
f("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
f("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
f("\\ne", "\\neq");
f("≠", "\\neq");
f("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
f("∉", "\\notin");
f("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
f("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
f("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
f("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
f("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
f("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
f("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
f("⟂", "\\perp");
f("‼", "\\mathclose{!\\mkern-0.8mu!}");
f("∌", "\\notni");
f("⌜", "\\ulcorner");
f("⌝", "\\urcorner");
f("⌞", "\\llcorner");
f("⌟", "\\lrcorner");
f("©", "\\copyright");
f("®", "\\textregistered");
f("️", "\\textregistered");
f("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
f("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
f("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
f("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
f("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}");
f("⋮", "\\vdots");
f("\\varGamma", "\\mathit{\\Gamma}");
f("\\varDelta", "\\mathit{\\Delta}");
f("\\varTheta", "\\mathit{\\Theta}");
f("\\varLambda", "\\mathit{\\Lambda}");
f("\\varXi", "\\mathit{\\Xi}");
f("\\varPi", "\\mathit{\\Pi}");
f("\\varSigma", "\\mathit{\\Sigma}");
f("\\varUpsilon", "\\mathit{\\Upsilon}");
f("\\varPhi", "\\mathit{\\Phi}");
f("\\varPsi", "\\mathit{\\Psi}");
f("\\varOmega", "\\mathit{\\Omega}");
f("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
f("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
f("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
f("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
f("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
f("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
var Ca = {
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
f("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in Ca ? e = Ca[t] : (t.substr(0, 4) === "\\not" || t in ae.math && P.contains(["bin", "rel"], ae.math[t].group)) && (e = "\\dotsb"), e;
});
var br = {
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
f("\\dotso", function(r) {
  var e = r.future().text;
  return e in br ? "\\ldots\\," : "\\ldots";
});
f("\\dotsc", function(r) {
  var e = r.future().text;
  return e in br && e !== "," ? "\\ldots\\," : "\\ldots";
});
f("\\cdots", function(r) {
  var e = r.future().text;
  return e in br ? "\\@cdots\\," : "\\@cdots";
});
f("\\dotsb", "\\cdots");
f("\\dotsm", "\\cdots");
f("\\dotsi", "\\!\\cdots");
f("\\dotsx", "\\ldots\\,");
f("\\DOTSI", "\\relax");
f("\\DOTSB", "\\relax");
f("\\DOTSX", "\\relax");
f("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
f("\\,", "\\tmspace+{3mu}{.1667em}");
f("\\thinspace", "\\,");
f("\\>", "\\mskip{4mu}");
f("\\:", "\\tmspace+{4mu}{.2222em}");
f("\\medspace", "\\:");
f("\\;", "\\tmspace+{5mu}{.2777em}");
f("\\thickspace", "\\;");
f("\\!", "\\tmspace-{3mu}{.1667em}");
f("\\negthinspace", "\\!");
f("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
f("\\negthickspace", "\\tmspace-{5mu}{.277em}");
f("\\enspace", "\\kern.5em ");
f("\\enskip", "\\hskip.5em\\relax");
f("\\quad", "\\hskip1em\\relax");
f("\\qquad", "\\hskip2em\\relax");
f("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
f("\\tag@paren", "\\tag@literal{({#1})}");
f("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new A("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
f("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
f("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
f("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
f("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
f("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}");
f("\\newline", "\\\\\\relax");
f("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var nn = C(Oe["Main-Regular"][84][1] - 0.7 * Oe["Main-Regular"][65][1]);
f("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + nn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
f("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + nn + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
f("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
f("\\@hspace", "\\hskip #1\\relax");
f("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
f("\\ordinarycolon", ":");
f("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
f("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
f("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
f("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
f("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
f("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
f("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
f("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
f("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
f("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
f("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
f("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
f("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
f("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
f("∷", "\\dblcolon");
f("∹", "\\eqcolon");
f("≔", "\\coloneqq");
f("≕", "\\eqqcolon");
f("⩴", "\\Coloneqq");
f("\\ratio", "\\vcentcolon");
f("\\coloncolon", "\\dblcolon");
f("\\colonequals", "\\coloneqq");
f("\\coloncolonequals", "\\Coloneqq");
f("\\equalscolon", "\\eqqcolon");
f("\\equalscoloncolon", "\\Eqqcolon");
f("\\colonminus", "\\coloneq");
f("\\coloncolonminus", "\\Coloneq");
f("\\minuscolon", "\\eqcolon");
f("\\minuscoloncolon", "\\Eqcolon");
f("\\coloncolonapprox", "\\Colonapprox");
f("\\coloncolonsim", "\\Colonsim");
f("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
f("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
f("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
f("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
f("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
f("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
f("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
f("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
f("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
f("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
f("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
f("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
f("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
f("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
f("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
f("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
f("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
f("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
f("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
f("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
f("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
f("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
f("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
f("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
f("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
f("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
f("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
f("\\imath", "\\html@mathml{\\@imath}{ı}");
f("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
f("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
f("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
f("⟦", "\\llbracket");
f("⟧", "\\rrbracket");
f("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
f("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
f("⦃", "\\lBrace");
f("⦄", "\\rBrace");
f("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
f("⦵", "\\minuso");
f("\\darr", "\\downarrow");
f("\\dArr", "\\Downarrow");
f("\\Darr", "\\Downarrow");
f("\\lang", "\\langle");
f("\\rang", "\\rangle");
f("\\uarr", "\\uparrow");
f("\\uArr", "\\Uparrow");
f("\\Uarr", "\\Uparrow");
f("\\N", "\\mathbb{N}");
f("\\R", "\\mathbb{R}");
f("\\Z", "\\mathbb{Z}");
f("\\alef", "\\aleph");
f("\\alefsym", "\\aleph");
f("\\Alpha", "\\mathrm{A}");
f("\\Beta", "\\mathrm{B}");
f("\\bull", "\\bullet");
f("\\Chi", "\\mathrm{X}");
f("\\clubs", "\\clubsuit");
f("\\cnums", "\\mathbb{C}");
f("\\Complex", "\\mathbb{C}");
f("\\Dagger", "\\ddagger");
f("\\diamonds", "\\diamondsuit");
f("\\empty", "\\emptyset");
f("\\Epsilon", "\\mathrm{E}");
f("\\Eta", "\\mathrm{H}");
f("\\exist", "\\exists");
f("\\harr", "\\leftrightarrow");
f("\\hArr", "\\Leftrightarrow");
f("\\Harr", "\\Leftrightarrow");
f("\\hearts", "\\heartsuit");
f("\\image", "\\Im");
f("\\infin", "\\infty");
f("\\Iota", "\\mathrm{I}");
f("\\isin", "\\in");
f("\\Kappa", "\\mathrm{K}");
f("\\larr", "\\leftarrow");
f("\\lArr", "\\Leftarrow");
f("\\Larr", "\\Leftarrow");
f("\\lrarr", "\\leftrightarrow");
f("\\lrArr", "\\Leftrightarrow");
f("\\Lrarr", "\\Leftrightarrow");
f("\\Mu", "\\mathrm{M}");
f("\\natnums", "\\mathbb{N}");
f("\\Nu", "\\mathrm{N}");
f("\\Omicron", "\\mathrm{O}");
f("\\plusmn", "\\pm");
f("\\rarr", "\\rightarrow");
f("\\rArr", "\\Rightarrow");
f("\\Rarr", "\\Rightarrow");
f("\\real", "\\Re");
f("\\reals", "\\mathbb{R}");
f("\\Reals", "\\mathbb{R}");
f("\\Rho", "\\mathrm{P}");
f("\\sdot", "\\cdot");
f("\\sect", "\\S");
f("\\spades", "\\spadesuit");
f("\\sub", "\\subset");
f("\\sube", "\\subseteq");
f("\\supe", "\\supseteq");
f("\\Tau", "\\mathrm{T}");
f("\\thetasym", "\\vartheta");
f("\\weierp", "\\wp");
f("\\Zeta", "\\mathrm{Z}");
f("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
f("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
f("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
f("\\bra", "\\mathinner{\\langle{#1}|}");
f("\\ket", "\\mathinner{|{#1}\\rangle}");
f("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
f("\\Bra", "\\left\\langle#1\\right|");
f("\\Ket", "\\left|#1\\right\\rangle");
var ln = (r) => (e) => {
  var t = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, n = e.consumeArg().tokens, l = e.macros.get("|"), s = e.macros.get("\\|");
  e.macros.beginGroup();
  var u = (p) => (y) => {
    r && (y.macros.set("|", l), i.length && y.macros.set("\\|", s));
    var w = p;
    if (!p && i.length) {
      var M = y.future();
      M.text === "|" && (y.popToken(), w = !0);
    }
    return {
      tokens: w ? i : a,
      numArgs: 0
    };
  };
  e.macros.set("|", u(!1)), i.length && e.macros.set("\\|", u(!0));
  var m = e.consumeArg().tokens, d = e.expandTokens([
    ...n,
    ...m,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: d.reverse(),
    numArgs: 0
  };
};
f("\\bra@ket", ln(!1));
f("\\bra@set", ln(!0));
f("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
f("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
f("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
f("\\angln", "{\\angl n}");
f("\\blue", "\\textcolor{##6495ed}{#1}");
f("\\orange", "\\textcolor{##ffa500}{#1}");
f("\\pink", "\\textcolor{##ff00af}{#1}");
f("\\red", "\\textcolor{##df0030}{#1}");
f("\\green", "\\textcolor{##28ae7b}{#1}");
f("\\gray", "\\textcolor{gray}{#1}");
f("\\purple", "\\textcolor{##9d38bd}{#1}");
f("\\blueA", "\\textcolor{##ccfaff}{#1}");
f("\\blueB", "\\textcolor{##80f6ff}{#1}");
f("\\blueC", "\\textcolor{##63d9ea}{#1}");
f("\\blueD", "\\textcolor{##11accd}{#1}");
f("\\blueE", "\\textcolor{##0c7f99}{#1}");
f("\\tealA", "\\textcolor{##94fff5}{#1}");
f("\\tealB", "\\textcolor{##26edd5}{#1}");
f("\\tealC", "\\textcolor{##01d1c1}{#1}");
f("\\tealD", "\\textcolor{##01a995}{#1}");
f("\\tealE", "\\textcolor{##208170}{#1}");
f("\\greenA", "\\textcolor{##b6ffb0}{#1}");
f("\\greenB", "\\textcolor{##8af281}{#1}");
f("\\greenC", "\\textcolor{##74cf70}{#1}");
f("\\greenD", "\\textcolor{##1fab54}{#1}");
f("\\greenE", "\\textcolor{##0d923f}{#1}");
f("\\goldA", "\\textcolor{##ffd0a9}{#1}");
f("\\goldB", "\\textcolor{##ffbb71}{#1}");
f("\\goldC", "\\textcolor{##ff9c39}{#1}");
f("\\goldD", "\\textcolor{##e07d10}{#1}");
f("\\goldE", "\\textcolor{##a75a05}{#1}");
f("\\redA", "\\textcolor{##fca9a9}{#1}");
f("\\redB", "\\textcolor{##ff8482}{#1}");
f("\\redC", "\\textcolor{##f9685d}{#1}");
f("\\redD", "\\textcolor{##e84d39}{#1}");
f("\\redE", "\\textcolor{##bc2612}{#1}");
f("\\maroonA", "\\textcolor{##ffbde0}{#1}");
f("\\maroonB", "\\textcolor{##ff92c6}{#1}");
f("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
f("\\maroonD", "\\textcolor{##ca337c}{#1}");
f("\\maroonE", "\\textcolor{##9e034e}{#1}");
f("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
f("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
f("\\purpleC", "\\textcolor{##aa87ff}{#1}");
f("\\purpleD", "\\textcolor{##7854ab}{#1}");
f("\\purpleE", "\\textcolor{##543b78}{#1}");
f("\\mintA", "\\textcolor{##f5f9e8}{#1}");
f("\\mintB", "\\textcolor{##edf2df}{#1}");
f("\\mintC", "\\textcolor{##e0e5cc}{#1}");
f("\\grayA", "\\textcolor{##f6f7f7}{#1}");
f("\\grayB", "\\textcolor{##f0f1f2}{#1}");
f("\\grayC", "\\textcolor{##e3e5e6}{#1}");
f("\\grayD", "\\textcolor{##d6d8da}{#1}");
f("\\grayE", "\\textcolor{##babec2}{#1}");
f("\\grayF", "\\textcolor{##888d93}{#1}");
f("\\grayG", "\\textcolor{##626569}{#1}");
f("\\grayH", "\\textcolor{##3b3e40}{#1}");
f("\\grayI", "\\textcolor{##21242c}{#1}");
f("\\kaBlue", "\\textcolor{##314453}{#1}");
f("\\kaGreen", "\\textcolor{##71B307}{#1}");
var sn = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class Os {
  constructor(e, t, a) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Rs(Ls, t.macros), this.mode = a, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new $a(e, this.settings);
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
    var t, a, i;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: i,
        end: a
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: i,
        start: t,
        end: a
      } = this.consumeArg());
    return this.pushToken(new qe("EOF", a.loc)), this.pushTokens(i), t.range(a, "");
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
    var t = [], a = e && e.length > 0;
    a || this.consumeSpaces();
    var i = this.future(), n, l = 0, s = 0;
    do {
      if (n = this.popToken(), t.push(n), n.text === "{")
        ++l;
      else if (n.text === "}") {
        if (--l, l === -1)
          throw new A("Extra }", n);
      } else if (n.text === "EOF")
        throw new A("Unexpected end of input in a macro argument, expected '" + (e && a ? e[s] : "}") + "'", n);
      if (e && a)
        if ((l === 0 || l === 1 && e[s] === "{") && n.text === e[s]) {
          if (++s, s === e.length) {
            t.splice(-s, s);
            break;
          }
        } else
          s = 0;
    } while (l !== 0 || a);
    return i.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: i,
      end: n
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new A("The length of delimiters doesn't match the number of args!");
      for (var a = t[0], i = 0; i < a.length; i++) {
        var n = this.popToken();
        if (a[i] !== n.text)
          throw new A("Use of the macro doesn't match its definition", n);
      }
    }
    for (var l = [], s = 0; s < e; s++)
      l.push(this.consumeArg(t && t[s + 1]).tokens);
    return l;
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order and will be returned as an array,
   * also in reverse order.
   *
   * If not, the next token will be returned without removing it
   * from the stack.  This case can be detected by a `Token` return value
   * instead of an `Array` return value.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty.
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), a = t.text, i = t.noexpand ? null : this._getExpansion(a);
    if (i == null || e && i.unexpandable) {
      if (e && i == null && a[0] === "\\" && !this.isDefined(a))
        throw new A("Undefined control sequence: " + a);
      return this.pushToken(t), t;
    }
    if (this.expansionCount++, this.expansionCount > this.settings.maxExpand)
      throw new A("Too many expansions: infinite loop or need to increase maxExpand setting");
    var n = i.tokens, l = this.consumeArgs(i.numArgs, i.delimiters);
    if (i.numArgs) {
      n = n.slice();
      for (var s = n.length - 1; s >= 0; --s) {
        var u = n[s];
        if (u.text === "#") {
          if (s === 0)
            throw new A("Incomplete placeholder at end of macro body", u);
          if (u = n[--s], u.text === "#")
            n.splice(s + 1, 1);
          else if (/^[1-9]$/.test(u.text))
            n.splice(s, 2, ...l[+u.text - 1]);
          else
            throw new A("Not a valid argument number", u);
        }
      }
    }
    return this.pushTokens(n), n;
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
    for (; ; ) {
      var e = this.expandOnce();
      if (e instanceof qe)
        return e.treatAsRelax && (e.text = "\\relax"), this.stack.pop();
    }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new qe(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a; ) {
      var i = this.expandOnce(!0);
      i instanceof qe && (i.treatAsRelax && (i.noexpand = !1, i.treatAsRelax = !1), t.push(this.stack.pop()));
    }
    return t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((a) => a.text).join("");
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
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13)
        return;
    }
    var i = typeof t == "function" ? t(this) : t;
    if (typeof i == "string") {
      var n = 0;
      if (i.indexOf("#") !== -1)
        for (var l = i.replace(/##/g, ""); l.indexOf("#" + (n + 1)) !== -1; )
          ++n;
      for (var s = new $a(i, this.settings), u = [], m = s.lex(); m.text !== "EOF"; )
        u.push(m), m = s.lex();
      u.reverse();
      var d = {
        tokens: u,
        numArgs: n
      };
      return d;
    }
    return i;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || r0.hasOwnProperty(e) || ae.math.hasOwnProperty(e) || ae.text.hasOwnProperty(e) || sn.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : r0.hasOwnProperty(e) && !r0[e].primitive;
  }
}
var qa = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, nt = Object.freeze({
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
}), Ot = {
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
}, Da = {
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
class H0 {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Os(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new A("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
    this.consume(), this.gullet.pushToken(new qe("}")), this.gullet.pushTokens(e);
    var a = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, a;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precendence han infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var a = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var i = this.fetch();
      if (H0.endOfExpression.indexOf(i.text) !== -1 || t && i.text === t || e && r0[i.text] && r0[i.text].infix)
        break;
      var n = this.parseAtom(t);
      if (n) {
        if (n.type === "internal")
          continue;
      } else break;
      a.push(n);
    }
    return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, a, i = 0; i < e.length; i++)
      if (e[i].type === "infix") {
        if (t !== -1)
          throw new A("only one infix operator per group", e[i].token);
        t = i, a = e[i].replaceWith;
      }
    if (t !== -1 && a) {
      var n, l, s = e.slice(0, t), u = e.slice(t + 1);
      s.length === 1 && s[0].type === "ordgroup" ? n = s[0] : n = {
        type: "ordgroup",
        mode: this.mode,
        body: s
      }, u.length === 1 && u[0].type === "ordgroup" ? l = u[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: u
      };
      var m;
      return a === "\\\\abovefrac" ? m = this.callFunction(a, [n, e[t], l], []) : m = this.callFunction(a, [n, l], []), [m];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), a = t.text;
    this.consume(), this.consumeSpaces();
    var i = this.parseGroup(e);
    if (!i)
      throw new A("Expected group after '" + a + "'", t);
    return i;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], a = 0; a < e.length; a++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[a]
      });
    var i = {
      type: "text",
      mode: this.mode,
      body: t
    }, n = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [i]
    };
    return n;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (this.mode === "text")
      return t;
    for (var a, i; ; ) {
      this.consumeSpaces();
      var n = this.fetch();
      if (n.text === "\\limits" || n.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = n.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = n.text === "\\limits");
        else
          throw new A("Limit controls must follow a math operator", n);
        this.consume();
      } else if (n.text === "^") {
        if (a)
          throw new A("Double superscript", n);
        a = this.handleSupSubscript("superscript");
      } else if (n.text === "_") {
        if (i)
          throw new A("Double subscript", n);
        i = this.handleSupSubscript("subscript");
      } else if (n.text === "'") {
        if (a)
          throw new A("Double superscript", n);
        var s = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, u = [s];
        for (this.consume(); this.fetch().text === "'"; )
          u.push(s), this.consume();
        this.fetch().text === "^" && u.push(this.handleSupSubscript("superscript")), a = {
          type: "ordgroup",
          mode: this.mode,
          body: u
        };
      } else if (nt[n.text]) {
        var m = nt[n.text], d = qa.test(n.text);
        for (this.consume(); ; ) {
          var p = this.fetch().text;
          if (!nt[p] || qa.test(p) !== d)
            break;
          this.consume(), m += nt[p];
        }
        var y = new H0(m, this.settings).parse();
        d ? i = {
          type: "ordgroup",
          mode: "math",
          body: y
        } : a = {
          type: "ordgroup",
          mode: "math",
          body: y
        };
      } else
        break;
    }
    return a || i ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: a,
      sub: i
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var a = this.fetch(), i = a.text, n = r0[i];
    if (!n)
      return null;
    if (this.consume(), t && t !== "atom" && !n.allowedInArgument)
      throw new A("Got function '" + i + "' with no arguments" + (t ? " as " + t : ""), a);
    if (this.mode === "text" && !n.allowedInText)
      throw new A("Can't use function '" + i + "' in text mode", a);
    if (this.mode === "math" && n.allowedInMath === !1)
      throw new A("Can't use function '" + i + "' in math mode", a);
    var {
      args: l,
      optArgs: s
    } = this.parseArguments(i, n);
    return this.callFunction(i, l, s, a, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, a, i, n) {
    var l = {
      funcName: e,
      parser: this,
      token: i,
      breakOnTokenText: n
    }, s = r0[e];
    if (s && s.handler)
      return s.handler(l, t, a);
    throw new A("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var a = t.numArgs + t.numOptionalArgs;
    if (a === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var i = [], n = [], l = 0; l < a; l++) {
      var s = t.argTypes && t.argTypes[l], u = l < t.numOptionalArgs;
      (t.primitive && s == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && n[0] == null) && (s = "primitive");
      var m = this.parseGroupOfType("argument to '" + e + "'", s, u);
      if (u)
        n.push(m);
      else if (m != null)
        i.push(m);
      else
        throw new A("Null argument, please report this as a bug");
    }
    return {
      args: i,
      optArgs: n
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, a) {
    switch (t) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, t);
      case "hbox": {
        var i = this.parseArgumentGroup(a, "text");
        return i != null ? {
          type: "styling",
          mode: i.mode,
          body: [i],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var n = this.parseStringGroup("raw", a);
        return n != null ? {
          type: "raw",
          mode: "text",
          string: n.text
        } : null;
      }
      case "primitive": {
        if (a)
          throw new A("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new A("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new A("Unknown group type as " + e, this.fetch());
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
    var a = this.gullet.scanArgument(t);
    if (a == null)
      return null;
    for (var i = "", n; (n = this.fetch()).text !== "EOF"; )
      i += n.text, this.consume();
    return this.consume(), a.text = i, a;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var a = this.fetch(), i = a, n = "", l; (l = this.fetch()).text !== "EOF" && e.test(n + l.text); )
      i = l, n += i.text, this.consume();
    if (n === "")
      throw new A("Invalid " + t + ": '" + a.text + "'", a);
    return a.range(i, n);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var a = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!a)
      throw new A("Invalid color: '" + t.text + "'", t);
    var i = a[0];
    return /^[0-9a-f]{6}$/i.test(i) && (i = "#" + i), {
      type: "color-token",
      mode: this.mode,
      color: i
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, a = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", a = !0);
    var i = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!i)
      throw new A("Invalid size: '" + t.text + "'", t);
    var n = {
      number: +(i[1] + i[2]),
      // sign + magnitude, cast to number
      unit: i[3]
    };
    if (!vi(n))
      throw new A("Invalid unit: '" + n.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: n,
      isBlank: a
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
    var a = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: a
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var a = this.gullet.scanArgument(e);
    if (a == null)
      return null;
    var i = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var n = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: a.loc,
      body: n
    };
    return t && this.switchMode(i), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var a = this.fetch(), i = a.text, n;
    if (i === "{" || i === "\\begingroup") {
      this.consume();
      var l = i === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var s = this.parseExpression(!1, l), u = this.fetch();
      this.expect(l), this.gullet.endGroup(), n = {
        type: "ordgroup",
        mode: this.mode,
        loc: Te.range(a, u),
        body: s,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: i === "\\begingroup" || void 0
      };
    } else if (n = this.parseFunction(t, e) || this.parseSymbol(), n == null && i[0] === "\\" && !sn.hasOwnProperty(i)) {
      if (this.settings.throwOnError)
        throw new A("Undefined control sequence: " + i, a);
      n = this.formatUnsupportedCmd(i), this.consume();
    }
    return n;
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
    for (var t = e.length - 1, a = 0; a < t; ++a) {
      var i = e[a], n = i.text;
      n === "-" && e[a + 1].text === "-" && (a + 1 < t && e[a + 2].text === "-" ? (e.splice(a, 3, {
        type: "textord",
        mode: "text",
        loc: Te.range(i, e[a + 2]),
        text: "---"
      }), t -= 2) : (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: Te.range(i, e[a + 1]),
        text: "--"
      }), t -= 1)), (n === "'" || n === "`") && e[a + 1].text === n && (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: Te.range(i, e[a + 1]),
        text: n + n
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
      var a = t.slice(5), i = a.charAt(0) === "*";
      if (i && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
        throw new A(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = a.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: a,
        star: i
      };
    }
    Da.hasOwnProperty(t[0]) && !ae[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Da[t[0]] + t.substr(1));
    var n = Es.exec(t);
    n && (t = t.substring(0, n.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (ae[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Ut.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var s = ae[this.mode][t].group, u = Te.range(e), m;
      if (Al.hasOwnProperty(s)) {
        var d = s;
        m = {
          type: "atom",
          mode: this.mode,
          family: d,
          loc: u,
          text: t
        };
      } else
        m = {
          type: s,
          mode: this.mode,
          loc: u,
          text: t
        };
      l = m;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (pi(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: Te.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), n)
      for (var p = 0; p < n[0].length; p++) {
        var y = n[0][p];
        if (!Ot[y])
          throw new A("Unknown accent ' " + y + "'", e);
        var w = Ot[y][this.mode] || Ot[y].text;
        if (!w)
          throw new A("Accent " + y + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: Te.range(e),
          label: w,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
H0.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var yr = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var a = new H0(e, t);
  delete a.gullet.macros.current["\\df@tag"];
  var i = a.parse();
  if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new A("\\tag works only in display equations");
    i = [{
      type: "tag",
      mode: "text",
      body: i,
      tag: a.subparse([new qe("\\df@tag")])
    }];
  }
  return i;
}, on = function(e, t, a) {
  t.textContent = "";
  var i = xr(e, a).toNode();
  t.appendChild(i);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), on = function() {
  throw new A("KaTeX doesn't work in quirks mode.");
});
var Hs = function(e, t) {
  var a = xr(e, t).toMarkup();
  return a;
}, Fs = function(e, t) {
  var a = new er(t);
  return yr(e, a);
}, un = function(e, t, a) {
  if (a.throwOnError || !(e instanceof A))
    throw e;
  var i = x.makeSpan(["katex-error"], [new Ne(t)]);
  return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + a.errorColor), i;
}, xr = function(e, t) {
  var a = new er(t);
  try {
    var i = yr(e, a);
    return Zl(i, e, a);
  } catch (n) {
    return un(n, e, a);
  }
}, Ps = function(e, t) {
  var a = new er(t);
  try {
    var i = yr(e, a);
    return Kl(i, e, a);
  } catch (n) {
    return un(n, e, a);
  }
}, js = {
  /**
   * Current KaTeX version
   */
  version: "0.15.6",
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: on,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: Hs,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: A,
  /**
   * The shema of Settings
   */
  SETTINGS_SCHEMA: ot,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: Fs,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: xr,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: Ps,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: xl,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: o,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: f,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: {
    Span: j0,
    Anchor: ar,
    SymbolNode: Ne,
    SvgNode: l0,
    PathNode: f0,
    LineNode: Vt
  }
};
function Gs(r) {
  let e, t, a, i;
  const n = (
    /*#slots*/
    r[4].default
  ), l = Oa(
    n,
    r,
    /*$$scope*/
    r[3],
    null
  );
  return {
    c() {
      e = z("span"), l && l.c(), t = K(), a = z("span"), h0(e, "display", "none");
    },
    m(s, u) {
      R(s, e, u), l && l.m(e, null), r[5](e), R(s, t, u), R(s, a, u), r[6](a), i = !0;
    },
    p(s, [u]) {
      l && l.p && (!i || u & /*$$scope*/
      8) && Pa(
        l,
        n,
        s,
        /*$$scope*/
        s[3],
        i ? Fa(
          n,
          /*$$scope*/
          s[3],
          u,
          null
        ) : ja(
          /*$$scope*/
          s[3]
        ),
        null
      );
    },
    i(s) {
      i || (he(l, s), i = !0);
    },
    o(s) {
      ve(l, s), i = !1;
    },
    d(s) {
      s && (I(e), I(t), I(a)), l && l.d(s), r[5](null), r[6](null);
    }
  };
}
function Vs(r, e, t) {
  let { $$slots: a = {}, $$scope: i } = e, { displayMode: n = !1 } = e, l, s;
  $n(async () => {
    js.render(s.textContent, l, { displayMode: n });
  });
  function u(d) {
    R0[d ? "unshift" : "push"](() => {
      s = d, t(1, s);
    });
  }
  function m(d) {
    R0[d ? "unshift" : "push"](() => {
      l = d, t(0, l);
    });
  }
  return r.$$set = (d) => {
    "displayMode" in d && t(2, n = d.displayMode), "$$scope" in d && t(3, i = d.$$scope);
  }, [l, s, n, i, a, u, m];
}
class wr extends re {
  constructor(e) {
    super(), ee(this, e, Vs, Gs, Q, { displayMode: 2 });
  }
  get displayMode() {
    return this.$$.ctx[2];
  }
  set displayMode(e) {
    this.$$set({ displayMode: e }), V();
  }
}
te(wr, { displayMode: { type: "Boolean" } }, ["default"], [], !0);
function Us(r) {
  ie(r, "svelte-1pls5no", ".eq-heading.svelte-1pls5no{display:block;margin:0 0 0.5rem 0;padding:0.5rem 1rem;text-align:center;font-size:1.5rem;font-weight:600;color:#333;background-color:#f5ebe0;border-left:4px solid #d18b5a;border-radius:0.25rem;text-transform:uppercase;letter-spacing:0.05em}.eq-lines.svelte-1pls5no{display:flex;flex-direction:column;gap:1rem}.eq-line.svelte-1pls5no{padding:0.75rem;border-radius:0.5rem;border:1px solid #ddd;background-color:white;transition:background-color 0.3s ease, opacity 0.3s ease}.eq-line.active.svelte-1pls5no{background-color:#9dec96;border-left:4px solid #444;font-size:1.75rem;opacity:1}.eq-line.inactive.svelte-1pls5no{opacity:0.6;font-size:1.25rem}");
}
function Na(r, e, t) {
  const a = r.slice();
  return a[5] = e[t], a;
}
function Ws(r) {
  let e, t = (
    /*line*/
    r[5].content + ""
  ), a;
  return {
    c() {
      e = new Tn(!1), a = Jt(), e.a = a;
    },
    m(i, n) {
      e.m(t, i, n), R(i, a, n);
    },
    p(i, n) {
      n & /*visibleBlocks*/
      1 && t !== (t = /*line*/
      i[5].content + "") && e.p(t);
    },
    i: q,
    o: q,
    d(i) {
      i && (I(a), e.d());
    }
  };
}
function Xs(r) {
  let e, t = (
    /*line*/
    r[5].content + ""
  ), a;
  return {
    c() {
      e = z("span"), a = pe(t), k(e, "class", "eq-heading svelte-1pls5no");
    },
    m(i, n) {
      R(i, e, n), $(e, a);
    },
    p(i, n) {
      n & /*visibleBlocks*/
      1 && t !== (t = /*line*/
      i[5].content + "") && ke(a, t);
    },
    i: q,
    o: q,
    d(i) {
      i && I(e);
    }
  };
}
function Ys(r) {
  let e = (
    /*line*/
    r[5].content + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(a, i) {
      R(a, t, i);
    },
    p(a, i) {
      i & /*visibleBlocks*/
      1 && e !== (e = /*line*/
      a[5].content + "") && ke(t, e);
    },
    i: q,
    o: q,
    d(a) {
      a && I(t);
    }
  };
}
function Zs(r) {
  let e, t;
  return e = new wr({
    props: {
      displayMode: !0,
      $$slots: { default: [Ks] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      d0(e.$$.fragment);
    },
    m(a, i) {
      a0(e, a, i), t = !0;
    },
    p(a, i) {
      const n = {};
      i & /*$$scope, visibleBlocks*/
      257 && (n.$$scope = { dirty: i, ctx: a }), e.$set(n);
    },
    i(a) {
      t || (he(e.$$.fragment, a), t = !0);
    },
    o(a) {
      ve(e.$$.fragment, a), t = !1;
    },
    d(a) {
      i0(e, a);
    }
  };
}
function Ks(r) {
  let e = (
    /*line*/
    r[5].content + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(a, i) {
      R(a, t, i);
    },
    p(a, i) {
      i & /*visibleBlocks*/
      1 && e !== (e = /*line*/
      a[5].content + "") && ke(t, e);
    },
    d(a) {
      a && I(t);
    }
  };
}
function _a(r) {
  let e, t, a, i, n;
  const l = [Zs, Ys, Xs, Ws], s = [];
  function u(m, d) {
    return (
      /*line*/
      m[5].type === "math" ? 0 : (
        /*line*/
        m[5].type === "text" ? 1 : (
          /*line*/
          m[5].type === "heading" ? 2 : 3
        )
      )
    );
  }
  return t = u(r), a = s[t] = l[t](r), {
    c() {
      e = z("div"), a.c(), i = K(), k(e, "class", "eq-line svelte-1pls5no"), Z0(
        e,
        "active",
        /*line*/
        r[5] === /*activeLine*/
        r[1]
      ), Z0(
        e,
        "inactive",
        /*line*/
        r[5] !== /*activeLine*/
        r[1]
      );
    },
    m(m, d) {
      R(m, e, d), s[t].m(e, null), $(e, i), n = !0;
    },
    p(m, d) {
      let p = t;
      t = u(m), t === p ? s[t].p(m, d) : (A0(), ve(s[p], 1, 1, () => {
        s[p] = null;
      }), $0(), a = s[t], a ? a.p(m, d) : (a = s[t] = l[t](m), a.c()), he(a, 1), a.m(e, i)), (!n || d & /*visibleBlocks, activeLine*/
      3) && Z0(
        e,
        "active",
        /*line*/
        m[5] === /*activeLine*/
        m[1]
      ), (!n || d & /*visibleBlocks, activeLine*/
      3) && Z0(
        e,
        "inactive",
        /*line*/
        m[5] !== /*activeLine*/
        m[1]
      );
    },
    i(m) {
      n || (he(a), n = !0);
    },
    o(m) {
      ve(a), n = !1;
    },
    d(m) {
      m && I(e), s[t].d();
    }
  };
}
function Js(r) {
  let e, t, a = ce(
    /*visibleBlocks*/
    r[0]
  ), i = [];
  for (let l = 0; l < a.length; l += 1)
    i[l] = _a(Na(r, a, l));
  const n = (l) => ve(i[l], 1, 1, () => {
    i[l] = null;
  });
  return {
    c() {
      e = z("div");
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      k(e, "class", "eq-lines svelte-1pls5no");
    },
    m(l, s) {
      R(l, e, s);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(e, null);
      t = !0;
    },
    p(l, [s]) {
      if (s & /*visibleBlocks, activeLine*/
      3) {
        a = ce(
          /*visibleBlocks*/
          l[0]
        );
        let u;
        for (u = 0; u < a.length; u += 1) {
          const m = Na(l, a, u);
          i[u] ? (i[u].p(m, s), he(i[u], 1)) : (i[u] = _a(m), i[u].c(), he(i[u], 1), i[u].m(e, null));
        }
        for (A0(), u = a.length; u < i.length; u += 1)
          n(u);
        $0();
      }
    },
    i(l) {
      if (!t) {
        for (let s = 0; s < a.length; s += 1)
          he(i[s]);
        t = !0;
      }
    },
    o(l) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        ve(i[s]);
      t = !1;
    },
    d(l) {
      l && I(e), Re(i, l);
    }
  };
}
const Qs = 2;
function e4(r, e, t) {
  let a, i, n, { lines: l = [] } = e, { currentTime: s } = e;
  return r.$$set = (u) => {
    "lines" in u && t(2, l = u.lines), "currentTime" in u && t(3, s = u.currentTime);
  }, r.$$.update = () => {
    r.$$.dirty & /*lines, currentTime*/
    12 && t(4, a = l.findIndex((u, m) => u.showAt <= s && (m === l.length - 1 || l[m + 1].showAt > s))), r.$$.dirty & /*lines, activeIndex*/
    20 && t(1, i = l[a]), r.$$.dirty & /*lines, activeIndex*/
    20 && t(0, n = l.slice(Math.max(0, a - Qs)));
  }, [n, i, l, s, a];
}
class cn extends re {
  constructor(e) {
    super(), ee(this, e, e4, Js, Q, { lines: 2, currentTime: 3 }, Us);
  }
  get lines() {
    return this.$$.ctx[2];
  }
  set lines(e) {
    this.$$set({ lines: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[3];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(cn, { lines: {}, currentTime: {} }, [], [], !0);
function t4(r) {
  ie(r, "svelte-20ziul", ".eq-sidebar.svelte-20ziul.svelte-20ziul{display:flex;flex-direction:column;gap:0.5rem}.sp-item.svelte-20ziul.svelte-20ziul{padding:0.5rem;font-size:2rem;border-radius:0.25rem;background-color:#1f2937;color:white}.sp-item.image.svelte-20ziul.svelte-20ziul{padding:0;background:none}.sp-item.image.svelte-20ziul img.svelte-20ziul{max-width:100%;height:auto;display:block;opacity:1;border-radius:0.25rem}.sp-item.title.svelte-20ziul.svelte-20ziul{text-align:center;background-color:cornsilk;color:rgb(14, 32, 234);font-size:1.5rem}.sp-item.text.svelte-20ziul.svelte-20ziul{text-align:center;font-size:1.5rem}");
}
function Ea(r, e, t) {
  const a = r.slice();
  return a[1] = e[t], a;
}
function r4(r) {
  let e, t = (
    /*item*/
    r[1].content + ""
  ), a;
  return {
    c() {
      e = z("div"), a = pe(t), k(e, "class", "sp-item text svelte-20ziul");
    },
    m(i, n) {
      R(i, e, n), $(e, a);
    },
    p(i, n) {
      n & /*spItems*/
      1 && t !== (t = /*item*/
      i[1].content + "") && ke(a, t);
    },
    i: q,
    o: q,
    d(i) {
      i && I(e);
    }
  };
}
function a4(r) {
  let e, t, a, i;
  return {
    c() {
      e = z("div"), t = z("img"), i = K(), Ie(t.src, a = /*item*/
      r[1].content) || k(t, "src", a), k(t, "alt", ""), k(t, "class", "svelte-20ziul"), k(e, "class", "sp-item image svelte-20ziul");
    },
    m(n, l) {
      R(n, e, l), $(e, t), $(e, i);
    },
    p(n, l) {
      l & /*spItems*/
      1 && !Ie(t.src, a = /*item*/
      n[1].content) && k(t, "src", a);
    },
    i: q,
    o: q,
    d(n) {
      n && I(e);
    }
  };
}
function i4(r) {
  let e, t = (
    /*item*/
    r[1].content + ""
  ), a;
  return {
    c() {
      e = z("div"), a = pe(t), k(e, "class", "sp-item title svelte-20ziul");
    },
    m(i, n) {
      R(i, e, n), $(e, a);
    },
    p(i, n) {
      n & /*spItems*/
      1 && t !== (t = /*item*/
      i[1].content + "") && ke(a, t);
    },
    i: q,
    o: q,
    d(i) {
      i && I(e);
    }
  };
}
function n4(r) {
  let e, t, a, i;
  return t = new wr({
    props: {
      displayMode: !0,
      $$slots: { default: [l4] },
      $$scope: { ctx: r }
    }
  }), {
    c() {
      e = z("div"), d0(t.$$.fragment), a = K(), k(e, "class", "sp-item math svelte-20ziul");
    },
    m(n, l) {
      R(n, e, l), a0(t, e, null), $(e, a), i = !0;
    },
    p(n, l) {
      const s = {};
      l & /*$$scope, spItems*/
      17 && (s.$$scope = { dirty: l, ctx: n }), t.$set(s);
    },
    i(n) {
      i || (he(t.$$.fragment, n), i = !0);
    },
    o(n) {
      ve(t.$$.fragment, n), i = !1;
    },
    d(n) {
      n && I(e), i0(t);
    }
  };
}
function l4(r) {
  let e = (
    /*item*/
    r[1].content + ""
  ), t;
  return {
    c() {
      t = pe(e);
    },
    m(a, i) {
      R(a, t, i);
    },
    p(a, i) {
      i & /*spItems*/
      1 && e !== (e = /*item*/
      a[1].content + "") && ke(t, e);
    },
    d(a) {
      a && I(t);
    }
  };
}
function Ia(r) {
  let e, t, a, i;
  const n = [n4, i4, a4, r4], l = [];
  function s(u, m) {
    return (
      /*item*/
      u[1].type === "spMath" ? 0 : (
        /*item*/
        u[1].type === "spHeading" ? 1 : (
          /*item*/
          u[1].type === "spImage" ? 2 : 3
        )
      )
    );
  }
  return e = s(r), t = l[e] = n[e](r), {
    c() {
      t.c(), a = Jt();
    },
    m(u, m) {
      l[e].m(u, m), R(u, a, m), i = !0;
    },
    p(u, m) {
      let d = e;
      e = s(u), e === d ? l[e].p(u, m) : (A0(), ve(l[d], 1, 1, () => {
        l[d] = null;
      }), $0(), t = l[e], t ? t.p(u, m) : (t = l[e] = n[e](u), t.c()), he(t, 1), t.m(a.parentNode, a));
    },
    i(u) {
      i || (he(t), i = !0);
    },
    o(u) {
      ve(t), i = !1;
    },
    d(u) {
      u && I(a), l[e].d(u);
    }
  };
}
function s4(r) {
  let e, t, a = ce(
    /*spItems*/
    r[0]
  ), i = [];
  for (let l = 0; l < a.length; l += 1)
    i[l] = Ia(Ea(r, a, l));
  const n = (l) => ve(i[l], 1, 1, () => {
    i[l] = null;
  });
  return {
    c() {
      e = z("div");
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      k(e, "class", "eq-sidebar svelte-20ziul");
    },
    m(l, s) {
      R(l, e, s);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(e, null);
      t = !0;
    },
    p(l, [s]) {
      if (s & /*spItems*/
      1) {
        a = ce(
          /*spItems*/
          l[0]
        );
        let u;
        for (u = 0; u < a.length; u += 1) {
          const m = Ea(l, a, u);
          i[u] ? (i[u].p(m, s), he(i[u], 1)) : (i[u] = Ia(m), i[u].c(), he(i[u], 1), i[u].m(e, null));
        }
        for (A0(), u = a.length; u < i.length; u += 1)
          n(u);
        $0();
      }
    },
    i(l) {
      if (!t) {
        for (let s = 0; s < a.length; s += 1)
          he(i[s]);
        t = !0;
      }
    },
    o(l) {
      i = i.filter(Boolean);
      for (let s = 0; s < i.length; s += 1)
        ve(i[s]);
      t = !1;
    },
    d(l) {
      l && I(e), Re(i, l);
    }
  };
}
function o4(r, e, t) {
  let { spItems: a = [] } = e;
  return r.$$set = (i) => {
    "spItems" in i && t(0, a = i.spItems);
  }, [a];
}
class hn extends re {
  constructor(e) {
    super(), ee(this, e, o4, s4, Q, { spItems: 0 }, t4);
  }
  get spItems() {
    return this.$$.ctx[0];
  }
  set spItems(e) {
    this.$$set({ spItems: e }), V();
  }
}
te(hn, { spItems: {} }, [], [], !0);
function u4(r) {
  ie(r, "svelte-4jxrw4", ".eq-container.svelte-4jxrw4{display:flex;width:100%;height:100%;background-color:rgb(148, 144, 165)}.eq-left.svelte-4jxrw4{width:70%;padding:1rem;overflow-y:auto}.eq-right.svelte-4jxrw4{width:30%;padding:1rem;overflow-y:auto;border-left:1px solid #e5e7eb;background-color:#1f2937;color:white}");
}
function c4(r) {
  let e, t, a, i, n, l, s, u, m;
  return n = new cn({
    props: {
      lines: (
        /*lines*/
        r[1]
      ),
      currentTime: (
        /*currentTime*/
        r[0]
      )
    }
  }), u = new hn({
    props: { spItems: (
      /*visibleSpItems*/
      r[2]
    ) }
  }), {
    c() {
      e = z("link"), t = K(), a = z("div"), i = z("div"), d0(n.$$.fragment), l = K(), s = z("div"), d0(u.$$.fragment), k(e, "rel", "stylesheet"), k(e, "href", "/css/katex.min.css"), k(i, "class", "eq-left svelte-4jxrw4"), k(s, "class", "eq-right svelte-4jxrw4"), k(a, "class", "eq-container svelte-4jxrw4");
    },
    m(d, p) {
      R(d, e, p), R(d, t, p), R(d, a, p), $(a, i), a0(n, i, null), $(a, l), $(a, s), a0(u, s, null), m = !0;
    },
    p(d, [p]) {
      const y = {};
      p & /*lines*/
      2 && (y.lines = /*lines*/
      d[1]), p & /*currentTime*/
      1 && (y.currentTime = /*currentTime*/
      d[0]), n.$set(y);
      const w = {};
      p & /*visibleSpItems*/
      4 && (w.spItems = /*visibleSpItems*/
      d[2]), u.$set(w);
    },
    i(d) {
      m || (he(n.$$.fragment, d), he(u.$$.fragment, d), m = !0);
    },
    o(d) {
      ve(n.$$.fragment, d), ve(u.$$.fragment, d), m = !1;
    },
    d(d) {
      d && (I(e), I(t), I(a)), i0(n), i0(u);
    }
  };
}
function h4(r, e, t) {
  let a, i, n, { data: l = [] } = e, { currentTime: s = 0 } = e;
  return r.$$set = (u) => {
    "data" in u && t(3, l = u.data), "currentTime" in u && t(0, s = u.currentTime);
  }, r.$$.update = () => {
    var u;
    r.$$.dirty & /*data*/
    8 && t(1, a = l.filter((m) => m.name === "line")), r.$$.dirty & /*lines, currentTime*/
    3 && t(4, i = a.findLast((m) => m.showAt <= s)), r.$$.dirty & /*activeLine, lines*/
    18 && t(2, n = (i == null ? void 0 : i.spItems) ?? ((u = a[0]) == null ? void 0 : u.spItems) ?? []);
  }, [s, a, n, l, i];
}
class mn extends re {
  constructor(e) {
    super(), ee(this, e, h4, c4, Q, { data: 3, currentTime: 0 }, u4);
  }
  get data() {
    return this.$$.ctx[3];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[0];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(mn, { data: {}, currentTime: {} }, [], [], !0);
function m4(r) {
  ie(r, "svelte-e6g8gj", ".svg-wrapper.svelte-e6g8gj{width:100%;height:100%}@keyframes svelte-e6g8gj-blink{0%,100%{opacity:1}50%{opacity:0.15}}.blink{animation:svelte-e6g8gj-blink 1s linear infinite}svg g#overlay .arrow{stroke:red;fill:none;stroke-width:2;stroke-linecap:round}svg g#overlay .circle{stroke:red;fill:none;stroke-width:2}svg g#overlay .dot{fill:red;stroke:red;stroke-width:0}");
}
function d4(r) {
  let e;
  return {
    c() {
      e = z("div"), k(e, "class", "svg-wrapper svelte-e6g8gj");
    },
    m(t, a) {
      R(t, e, a), r[4](e);
    },
    p: q,
    i: q,
    o: q,
    d(t) {
      t && I(e), r[4](null);
    }
  };
}
const f4 = 5;
function p4(r) {
  const e = "http://www.w3.org/2000/svg";
  let t = null;
  switch (r.type) {
    case "arrow": {
      t = document.createElementNS(e, "path"), t.setAttribute("d", "M0,0 L18,0 M10,-6 L18,0 L10,6"), t.classList.add("arrow", "blink");
      break;
    }
    case "circle": {
      t = document.createElementNS(e, "circle"), t.setAttribute("r", "12"), t.classList.add("circle", "blink");
      break;
    }
    case "dot": {
      t = document.createElementNS(e, "circle"), t.setAttribute("r", "4"), t.classList.add("dot", "blink");
      break;
    }
  }
  return t && t.setAttribute("transform", `translate(${r.x} ${r.y})`), t;
}
function v4(r, e, t) {
  let { data: a = [] } = e, { currentTime: i = 0 } = e;
  const n = a.find((y) => y.type === "image"), l = a.filter((y) => y.type !== "image");
  let s = null, u = null, m = null;
  const d = /* @__PURE__ */ new Map();
  Ga(async () => {
    if (!n || !s) return;
    const y = await (await fetch(n.content)).text();
    u = new DOMParser().parseFromString(y, "image/svg+xml").documentElement, u.setAttribute("width", "100%"), u.setAttribute("height", "100%"), t(3, m = document.createElementNS("http://www.w3.org/2000/svg", "g")), m.setAttribute("id", "overlay"), u.appendChild(m), s.appendChild(u);
  }), Va(() => {
    d.clear(), u && s && s.removeChild(u);
  });
  function p(y) {
    R0[y ? "unshift" : "push"](() => {
      s = y, t(0, s);
    });
  }
  return r.$$set = (y) => {
    "data" in y && t(1, a = y.data), "currentTime" in y && t(2, i = y.currentTime);
  }, r.$$.update = () => {
    if (r.$$.dirty & /*overlay, currentTime*/
    12 && m)
      for (const y of l) {
        const w = y.duration ?? f4, M = i >= y.showAt && i < y.showAt + w;
        if (M && !d.has(y)) {
          const B = p4(y);
          B && (m.appendChild(B), d.set(y, B));
        }
        !M && d.has(y) && (m.removeChild(d.get(y)), d.delete(y));
      }
  }, [s, a, i, m, p];
}
class dn extends re {
  constructor(e) {
    super(), ee(this, e, v4, d4, Q, { data: 1, currentTime: 2 }, m4);
  }
  get data() {
    return this.$$.ctx[1];
  }
  set data(e) {
    this.$$set({ data: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[2];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
}
te(dn, { data: {}, currentTime: {} }, [], [], !0);
const Ht = {
  titleAndPara: oi,
  fillImage: di,
  svgPointer: dn,
  eq: mn,
  quoteSlide: Wa,
  cornerWordsSlide: Xa,
  titleSlide: Ya,
  imageSlide: Za,
  imageLeftBulletsRight: Ka,
  imageRightBulletsLeft: Ja,
  imageWithCaption: Qa,
  imageWithTitle: ei,
  table: ti,
  statistic: ri,
  barChart: ai,
  twoColumnText: ni,
  donutChart: li,
  titleAndSubtitle: si,
  bulletList: ui,
  bigNumber: ci,
  quoteWithImage: hi,
  contactSlide: mi
};
function g4(r, e) {
  if (!Array.isArray(r) || r.length === 0)
    return { index: -1, slide: null, type: null };
  const t = (n) => Number.isFinite(n.start) ? n.start : Number.isFinite(n.startAt) ? n.startAt : 0;
  let a = 0;
  for (let n = 0; n < r.length && t(r[n]) <= e; n++)
    a = n;
  const i = r[a];
  return { index: a, slide: i, type: (i == null ? void 0 : i.type) ?? null };
}
function b4(r) {
  ie(r, "svelte-muat1a", "html, body{height:100%;margin:0}.stage.svelte-muat1a{position:relative;height:100dvh;display:grid;place-items:stretch;overflow:hidden;color:inherit}.fallback.svelte-muat1a{color:#aaa;font-size:14px}");
}
function y4(r) {
  let e;
  return {
    c() {
      e = z("div"), e.textContent = "No slide to render.", k(e, "class", "fallback svelte-muat1a");
    },
    m(t, a) {
      R(t, e, a);
    },
    p: q,
    i: q,
    o: q,
    d(t) {
      t && I(e);
    }
  };
}
function x4(r) {
  let e, t, a;
  var i = (
    /*SlideComp*/
    r[2]
  );
  function n(l, s) {
    return {
      props: {
        data: (
          /*slide*/
          l[1].data
        ),
        items: (
          /*slide*/
          l[1].data
        ),
        slide: (
          /*slide*/
          l[1]
        ),
        currentTime: (
          /*currentTime*/
          l[0]
        )
      }
    };
  }
  return i && (e = Ar(i, n(r))), {
    c() {
      e && d0(e.$$.fragment), t = Jt();
    },
    m(l, s) {
      e && a0(e, l, s), R(l, t, s), a = !0;
    },
    p(l, s) {
      if (s & /*SlideComp*/
      4 && i !== (i = /*SlideComp*/
      l[2])) {
        if (e) {
          A0();
          const u = e;
          ve(u.$$.fragment, 1, 0, () => {
            i0(u, 1);
          }), $0();
        }
        i ? (e = Ar(i, n(l)), d0(e.$$.fragment), he(e.$$.fragment, 1), a0(e, t.parentNode, t)) : e = null;
      } else if (i) {
        const u = {};
        s & /*slide*/
        2 && (u.data = /*slide*/
        l[1].data), s & /*slide*/
        2 && (u.items = /*slide*/
        l[1].data), s & /*slide*/
        2 && (u.slide = /*slide*/
        l[1]), s & /*currentTime*/
        1 && (u.currentTime = /*currentTime*/
        l[0]), e.$set(u);
      }
    },
    i(l) {
      a || (e && he(e.$$.fragment, l), a = !0);
    },
    o(l) {
      e && ve(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && I(t), e && i0(e, l);
    }
  };
}
function w4(r) {
  let e, t, a, i;
  const n = [x4, y4], l = [];
  function s(u, m) {
    return (
      /*SlideComp*/
      u[2] && /*slide*/
      u[1] ? 0 : 1
    );
  }
  return t = s(r), a = l[t] = n[t](r), {
    c() {
      e = z("div"), a.c(), k(e, "class", "stage svelte-muat1a"), k(
        e,
        "style",
        /*bgStyle*/
        r[3]
      );
    },
    m(u, m) {
      R(u, e, m), l[t].m(e, null), i = !0;
    },
    p(u, [m]) {
      let d = t;
      t = s(u), t === d ? l[t].p(u, m) : (A0(), ve(l[d], 1, 1, () => {
        l[d] = null;
      }), $0(), a = l[t], a ? a.p(u, m) : (a = l[t] = n[t](u), a.c()), he(a, 1), a.m(e, null)), (!i || m & /*bgStyle*/
      8) && k(
        e,
        "style",
        /*bgStyle*/
        u[3]
      );
    },
    i(u) {
      i || (he(a), i = !0);
    },
    o(u) {
      ve(a), i = !1;
    },
    d(u) {
      u && I(e), l[t].d();
    }
  };
}
function k4(r) {
  if (!r) return { r: 0, g: 0, b: 0 };
  let e = r.trim();
  if (e.startsWith("#") && (e = e.slice(1)), e.length === 3 && (e = e.split("").map((a) => a + a).join("")), e.length !== 6) return { r: 0, g: 0, b: 0 };
  const t = parseInt(e, 16);
  return {
    r: t >> 16 & 255,
    g: t >> 8 & 255,
    b: t & 255
  };
}
function S4(r, e, t) {
  let a, i, n, l, s, u, m, { deck: d = [] } = e, { currentTime: p = 0 } = e, { background: y = {
    backgroundColor: "#f2f2b5",
    backgroundImage: "/images/taleem.webp",
    backgroundImageOpacity: 0.1
  } } = e;
  function w(L) {
    return (Ht == null ? void 0 : Ht[L]) ?? null;
  }
  let M = 0, B = null, N = null, E = null;
  const F = (L) => Math.min(1, Math.max(0, L));
  return r.$$set = (L) => {
    "deck" in L && t(4, d = L.deck), "currentTime" in L && t(0, p = L.currentTime), "background" in L && t(5, y = L.background);
  }, r.$$.update = () => {
    r.$$.dirty & /*deck, currentTime*/
    17 && t(6, { index: M, slide: B, type: N } = g4(d, p), M, (t(1, B), t(4, d), t(0, p)), (t(7, N), t(4, d), t(0, p))), r.$$.dirty & /*slideType*/
    128 && t(2, E = w(N)), r.$$.dirty & /*currentTime, currentSlideIndex, slideType*/
    193 && console.log("TaleemSlides (pickSlideByTime) →", {
      t: p,
      currentSlideIndex: M,
      slideType: N
    }), r.$$.dirty & /*background*/
    32 && t(9, a = (y == null ? void 0 : y.backgroundColor) || "transparent"), r.$$.dirty & /*background*/
    32 && t(10, i = (y == null ? void 0 : y.backgroundImage) || ""), r.$$.dirty & /*background*/
    32 && t(13, n = F((y == null ? void 0 : y.backgroundImageOpacity) ?? 1)), r.$$.dirty & /*imgOpacity*/
    8192 && t(11, l = F(1 - n)), r.$$.dirty & /*bgColor*/
    512 && t(12, s = k4(a)), r.$$.dirty & /*imgUrl, rgb, overlayAlpha*/
    7168 && t(8, u = i ? `linear-gradient(rgba(${s.r}, ${s.g}, ${s.b}, ${l}), rgba(${s.r}, ${s.g}, ${s.b}, ${l})), url('${i}')` : "none"), r.$$.dirty & /*bgColor, bgImageValue*/
    768 && t(3, m = `
    background-color: ${a};
    background-image: ${u};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `);
  }, [
    p,
    B,
    E,
    m,
    d,
    y,
    M,
    N,
    u,
    a,
    i,
    l,
    s,
    n
  ];
}
class z4 extends re {
  constructor(e) {
    super(), ee(this, e, S4, w4, Q, { deck: 4, currentTime: 0, background: 5 }, b4);
  }
  get deck() {
    return this.$$.ctx[4];
  }
  set deck(e) {
    this.$$set({ deck: e }), V();
  }
  get currentTime() {
    return this.$$.ctx[0];
  }
  set currentTime(e) {
    this.$$set({ currentTime: e }), V();
  }
  get background() {
    return this.$$.ctx[5];
  }
  set background(e) {
    this.$$set({ background: e }), V();
  }
}
customElements.define("taleem-slides", te(z4, { deck: {}, currentTime: {}, background: {} }, [], [], !0));
//# sourceMappingURL=taleem-slides.js.map
