// /src/compiler/templates/index.js

import { compileBulletList } from "./compileBulletList.js";

import { compileSkeletonSlide } from "./compileSkeletonSlide.js";

import { compileFocusList } from "./compileFocusList.js";

import { compileEq } from "./compileEq.js";

import { compileTable } from "./compileTable.js";

import { compileBarChart } from "./compileBarChart.js";

import { compileProgressbar } from "./compileProgressbar.js";

import { compileTitleAndSubtitle } from "./compileTitleAndSubtitle.js";

import { compileTitleAndPara } from "./compileTitleAndPara.js";

import { compileTwoColumnText } from "./compileTwoColumnText.js";

import { compileImageSlide } from "./compileImageSlide.js";

import { compileImageWithTitle } from "./compileImageWithTitle.js";

import { compileImageWithCaption } from "./compileImageWithCaption.js";

import { compileImageLeftBulletsRight } from "./compileImageLeftBulletsRight.js";

import { compileImageRightBulletsLeft } from "./compileImageRightBulletsLeft.js";

import { compileQuoteSlide } from "./compileQuoteSlide.js";

import { compileKeyIdeasSlide } from "./compileKeyIdeasSlide.js";

import { compileFillImage } from "./compileFillImage.js";

import { compileImageStrip } from "./compileImageStrip.js";

import { compileImageGrid } from "./compileImageGrid.js";

import { compileTextGrid } from "./compileTextGrid.js";

export const templates = {
  titleAndSubtitle:
    compileTitleAndSubtitle,

  titleAndPara:
    compileTitleAndPara,

  bulletList:
    compileBulletList,

  twoColumnText:
    compileTwoColumnText,

  imageSlide:
    compileImageSlide,

  imageWithTitle:
    compileImageWithTitle,

  imageWithCaption:
    compileImageWithCaption,

  imageLeftBulletsRight:
    compileImageLeftBulletsRight,

  imageRightBulletsLeft:
    compileImageRightBulletsLeft,

  table:
    compileTable,

  barChart:
    compileBarChart,

  progressbar:
    compileProgressbar,

  quoteSlide:
    compileQuoteSlide,

  keyIdeasSlide:
    compileKeyIdeasSlide,

  focusList:
    compileFocusList,

  eq:
    compileEq,

  fillImage:
    compileFillImage,

  imageStrip:
    compileImageStrip,

  imageGrid:
    compileImageGrid,

  textGrid:
    compileTextGrid,

  skeleton:
    compileSkeletonSlide
};