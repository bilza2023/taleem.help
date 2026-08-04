
// src/editor/js/editorRegistry.js

import TitleAndSubtitleEditor from "../../editor2/components/TitleAndSubtitleEditor.svelte";
import TitleAndParaEditor from "../../editor2/components/TitleAndParaEditor.svelte";
import BulletListEditor from "../../editor2/components/BulletListEditor.svelte";
import TwoColumnTextEditor from "../../editor2/components/TwoColumnTextEditor.svelte";
import ImageSlideEditor from "../../editor2/components/ImageSlideEditor.svelte";
import EqEditor from "../../editor2/components/EqEditor.svelte";
import FillImageEditor from "../../editor2/components/FillImageEditor.svelte";
import ImageWithTitleEditor from "../../editor2/components/ImageWithTitleEditor.svelte";
import ImageWithCaptionEditor from "../../editor2/components/ImageWithCaptionEditor.svelte";
import ImageLeftBulletsRightEditor from "../../editor2/components/ImageLeftBulletsRightEditor.svelte";
import ImageRightBulletsLeftEditor from "../../editor2/components/ImageRightBulletsLeftEditor.svelte";
import BarChartEditor from "../../editor2/components/BarChartEditor.svelte";
import ProgressbarEditor from "../../editor2/components/ProgressbarEditor.svelte";
import KeyIdeasEditor from "../../editor2/components/KeyIdeasEditor.svelte";
import QuoteEditor from "../../editor2/components/QuoteEditor.svelte";
import TableEditor from "../../editor2/components/TableEditor.svelte";

// placeholders for now (until you build them)
import Placeholder from "../../editor2/components/PlaceholderEditor.svelte";

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