// src/lib/taleem-slides/templates/eq/js/eqLayout.js

export function getRowHeight(lineCount) {
    const maxRows = 10;
    const availableHeight = 560;

    const rows = Math.max(1, Math.min(lineCount, maxRows));
    const h = Math.floor(availableHeight / rows);

    return Math.max(44, Math.min(64, h));
}