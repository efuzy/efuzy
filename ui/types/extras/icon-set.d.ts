import { StringDictionary } from "../ts-helpers";

type EfuzyIconSetType = "positive" | "negative" | "info" | "warning";
type EfuzyIconSetArrow = "up" | "right" | "down" | "left" | "dropdown";
type EfuzyIconSetChevron = "left" | "right";
type EfuzyIconSetColorPicker = "spectrum" | "tune" | "palette";
type EfuzyIconSetPullToRefresh = "icon";
type EfuzyIconSetCarousel = "left" | "right" | "navigationIcon" | "thumbnails";
type EfuzyIconSetChip = "remove" | "selected";
type EfuzyIconSetDatetime = "arrowLeft" | "arrowRight" | "now" | "today";
type EfuzyIconSetEditor =
  | "bold"
  | "italic"
  | "strikethrough"
  | "underline"
  | "unorderedList"
  | "orderedList"
  | "subscript"
  | "superscript"
  | "hyperlink"
  | "toggleFullscreen"
  | "quote"
  | "left"
  | "center"
  | "right"
  | "justify"
  | "print"
  | "outdent"
  | "indent"
  | "removeFormat"
  | "formatting"
  | "fontSize"
  | "align"
  | "hr"
  | "undo"
  | "redo"
  | "heading"
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "code"
  | "size"
  | "size1"
  | "size2"
  | "size3"
  | "size4"
  | "size5"
  | "size6"
  | "size7"
  | "font"
  | "viewSource";
type EfuzyIconSetExpansionItem = "icon" | "denseIcon";
type EfuzyIconSetFab = "icon" | "activeIcon";
type EfuzyIconSetField = "clear" | "error";
type EfuzyIconSetPagination = "first" | "prev" | "next" | "last";
type EfuzyIconSetRating = "icon";
type EfuzyIconSetStepper = "done" | "active" | "error";
type EfuzyIconSetTabs = "left" | "right" | "up" | "down";
type EfuzyIconSetTable = "arrowUp" | "warning" | "prevPage" | "nextPage";
type EfuzyIconSetTree = "icon";
type EfuzyIconSetUploader =
  | "done"
  | "clear"
  | "add"
  | "upload"
  | "removeQueue"
  | "removeUploaded";

export interface EfuzyIconSet {
  name: string;
  type: StringDictionary<EfuzyIconSetType>;
  arrow: StringDictionary<EfuzyIconSetArrow>;
  chevron: StringDictionary<EfuzyIconSetChevron>;
  colorPicker: StringDictionary<EfuzyIconSetColorPicker>;
  pullToRefresh: StringDictionary<EfuzyIconSetPullToRefresh>;
  carousel: StringDictionary<EfuzyIconSetCarousel>;
  chip: StringDictionary<EfuzyIconSetChip>;
  datetime: StringDictionary<EfuzyIconSetDatetime>;
  editor: StringDictionary<EfuzyIconSetEditor>;
  expansionItem: StringDictionary<EfuzyIconSetExpansionItem>;
  fab: StringDictionary<EfuzyIconSetFab>;
  field: StringDictionary<EfuzyIconSetField>;
  pagination: StringDictionary<EfuzyIconSetPagination>;
  rating: StringDictionary<EfuzyIconSetRating>;
  stepper: StringDictionary<EfuzyIconSetStepper>;
  tabs: StringDictionary<EfuzyIconSetTabs>;
  table: StringDictionary<EfuzyIconSetTable>;
  tree: StringDictionary<EfuzyIconSetTree>;
  uploader: StringDictionary<EfuzyIconSetUploader>;
}

export type EfuzyIconSets =
  | "material-icons"
  | "material-icons-outlined"
  | "material-icons-round"
  | "material-icons-sharp"
  | "mdi-v4"
  | "mdi-v3"
  | "fontawesome-v5"
  | "ionicons-v4"
  | "eva-icons"
  | "themify";
