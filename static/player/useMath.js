// static/player/useMath.js

window.useMath = function useMath(rootEl) {
    if (!rootEl) return;
    if (!window.renderMathInElement) return;
  
    window.renderMathInElement(rootEl, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  };
  