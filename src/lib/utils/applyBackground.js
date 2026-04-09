export function applyBackground(el, background = {}) {
    if (background.backgroundColor) {
      el.style.backgroundColor = background.backgroundColor;
    }
  
    if (background.backgroundImage) {
      el.style.backgroundImage = `url("${background.backgroundImage}")`;
    }
  }