
// layout.js
export function getBaseFont(width){
    return width >= 1400 ? 40 :
           width >= 1100 ? 30 :
           width >= 800  ? 24 :
           width >= 500  ? 18 : 14;
}