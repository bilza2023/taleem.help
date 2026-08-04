
// src/editor/js/editorRegistry.js

import TitleAndSubtitleEditor from "../components/TitleAndSubtitleEditor.svelte";
import TitleAndParaEditor from "../components/TitleAndParaEditor.svelte";
import BulletListEditor from "../components/BulletListEditor.svelte";
import TwoColumnTextEditor from "../components/TwoColumnTextEditor.svelte";
import ImageSlideEditor from "../components/ImageSlideEditor.svelte";
import EqEditor from "../components/EqEditor.svelte";
import FillImageEditor from "../components/FillImageEditor.svelte";
import ImageWithTitleEditor from "../components/ImageWithTitleEditor.svelte";
import ImageWithCaptionEditor from "../components/ImageWithCaptionEditor.svelte";
import ImageLeftBulletsRightEditor from "../components/ImageLeftBulletsRightEditor.svelte";
import ImageRightBulletsLeftEditor from "../components/ImageRightBulletsLeftEditor.svelte";
import BarChartEditor from "../components/BarChartEditor.svelte";
import ProgressbarEditor from "../components/ProgressbarEditor.svelte";
import KeyIdeasEditor from "../components/KeyIdeasEditor.svelte";
import QuoteEditor from "../components/QuoteEditor.svelte";
import TableEditor from "../components/TableEditor.svelte";

// placeholders for now (until you build them)
import Placeholder from "../components/PlaceholderEditor.svelte";

export const EditorRegistry = {
  titleAndSubtitle: TitleAndSubtitleEditor,
  titleAndPara: TitleAndParaEditor,
  bulletList: BulletListEditor,
  twoColumnText: TwoColumnTextEditor,

  imageSlide: ImageSlideEditor,
  fillImage: FillImageEditor,
  imageWithTitle: ImageWithTitleEditor,
  imageWithCaption: ImageWithCaptionEditor,
  imageLeftBulletsRight: ImageLeftBulletsRightEditor,
  imageRightBulletsLeft: ImageRightBulletsLeftEditor,

  table: TableEditor,
  barChart: BarChartEditor,
  progressbar: ProgressbarEditor,

  quoteSlide: QuoteEditor,
  keyIdeasSlide: KeyIdeasEditor,

  eq: EqEditor
};