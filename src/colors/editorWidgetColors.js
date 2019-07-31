const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.background": theme.backgroundDark,
  "editorWidget.border": "#30373A",
  "editorSuggestWidget.background": theme.backgroundDark,
  "editorSuggestWidget.border": "#30373A",
  "editorSuggestWidget.foreground": theme.foreground,
  // "editorSuggestWidget.highlightForeground": "#FF0000",
  "editorSuggestWidget.selectedBackground": "#30373A",
  "editorHoverWidget.background": theme.backgroundDark,
  "editorHoverWidget.border": "#30373A",
  "debugExceptionWidget.background": theme.backgroundDark,
  "debugExceptionWidget.border": "#30373A",
  "editorMarkerNavigation.background": theme.backgroundDark,
  "editorMarkerNavigationError.background": theme.red,
  "editorMarkerNavigationWarning.background": theme.yellow
};
