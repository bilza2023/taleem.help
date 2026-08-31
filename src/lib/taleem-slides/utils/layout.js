// layout.js
export function getBaseFont(width, height){

    let font =
        width >= 1400 ? 40 :
        width >= 1100 ? 30 :
        width >= 800  ? 24 :
        width >= 500  ? 18 : 14;

    if (height < 700) font *= 0.9;
    if (height < 500) font *= 0.8;
    if (height < 400) font *= 0.7;

    return Math.round(font);
}