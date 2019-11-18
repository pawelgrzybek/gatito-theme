const theme = require("../theme");

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors

module.exports = {
  "editor.background": theme.background,
  "editor.foreground": theme.foreground,
  "editorLineNumber.foreground": theme.foregroundDark,
  "editorLineNumber.activeForeground": theme.foregroundDark,
  "editorCursor.foreground": theme.foreground,
  "editor.selectionBackground": theme.foregroundAlpha50,
  "editor.selectionHighlightBackground": theme.foregroundAlpha25,
  "editor.inactiveSelectionBackground": theme.foregroundAlpha50,
  "editor.wordHighlightBackground": theme.transparent,
  "editor.wordHighlightStrongBackground": theme.transparent,
  "editor.findMatchBackground": theme.foregroundAlpha50,
  "editor.findMatchHighlightBackground": theme.foregroundAlpha25,
  "editor.findRangeHighlightBackground": theme.foregroundAlpha25,
  "editor.hoverHighlightBackground": theme.foregroundAlpha50,
  "editor.lineHighlightBackground": theme.backgroundLight,
  "editor.lineHighlightBorder": theme.transparent,
  "editorLink.activeForeground": theme.blue,
  "editor.rangeHighlightBackground": theme.foregroundAlpha50,
  "editorWhitespace.foreground": theme.foregroundDark,
  "editorIndentGuide.background": theme.backgroundLight,
  "editorIndentGuide.activeBackground": theme.foregroundDark,
  "editorRuler.foreground": theme.backgroundLight,
  "editorCodeLens.foreground": theme.foregroundDark,
  "editorBracketMatch.background": theme.foregroundAlpha50,
  "editorBracketMatch.border": theme.transparent,
  "editorOverviewRuler.border": theme.backgroundLight,

  "editorOverviewRuler.findMatchForeground": theme.foregroundAlpha25,
  "editorOverviewRuler.rangeHighlightForeground": theme.yellow,
  "editorOverviewRuler.selectionHighlightForeground": "#f00",
  "editorOverviewRuler.wordHighlightForeground": "#f00",
  "editorOverviewRuler.wordHighlightStrongForeground": "#f00",
  "editorOverviewRuler.modifiedForeground": theme.blue,
  "editorOverviewRuler.addedForeground": theme.green,
  "editorOverviewRuler.deletedForeground": theme.red,
  "editorOverviewRuler.errorForeground": theme.red,
  "editorOverviewRuler.warningForeground": theme.yellow,
  "editorOverviewRuler.infoForeground": theme.blue,

  "editorError.foreground": theme.red,
  "editorError.border": theme.background,
  "editorWarning.foreground": theme.yellow,
  "editorWarning.border": theme.background,
  "editorGutter.background": theme.background,
  "editorGutter.modifiedBackground": theme.blue,
  "editorGutter.addedBackground": theme.green,
  "editorGutter.deletedBackground": theme.red
};
