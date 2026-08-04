
// src/editor/js/editorRegistry.js

import TitleAndSubtitleEditor from "../components/TitleAndSubtitleEditor.svelte";
import TitleAndParaEditor from ../components/TitleAndParaEditor.sveltee";
import BulletListEditor from../components/BulletListEditor.sveltete";
import TwoColumnTextEditor fro../components/TwoColumnTextEditor.sveltelte";
import ImageSlideEditor fr../components/ImageSlideEditor.svelteelte";
import EqEditor f../components/EqEditor.sveltevelte";
import FillImageEditor ../components/FillImageEditor.sveltesvelte";
import ImageWithTitleEditor../components/ImageWithTitleEditor.svelte.svelte";
import ImageWithCaptionEdito../components/ImageWithCaptionEditor.svelter.svelte";
import ImageLeftBulletsRightEdit../components/ImageLeftBulletsRightEditor.svelteor.svelte";
import ImageRightBulletsLeftEdi../components/ImageRightBulletsLeftEditor.sveltetor.svelte";
import BarChartEd../components/BarChartEditor.svelteitor.svelte";
import ProgressbarE../components/ProgressbarEditor.svelteditor.svelte";
import KeyIdeas../components/KeyIdeasEditor.svelteEditor.svelte";
import Quot../components/QuoteEditor.svelteeEditor.svelte";
import Tab../components/TableEditor.svelteleEditor.svelte";

// placeholders for now (until you build them)
import Pl../components/PlaceholderEditor.sveltederEditor.svelte";

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