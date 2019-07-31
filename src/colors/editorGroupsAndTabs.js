const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": "#30373A",
  "editorGroup.dropBackground": "#30373A",
  "editorGroupHeader.noTabsBackground": "#30373A",
  "editorGroupHeader.tabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBorder": "#30373A",
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": "#30373A",
  "tab.activeBackground": theme.background,
  "tab.activeForeground": theme.foreground,
  "tab.border": "#30373A",
  "tab.inactiveBackground": theme.backgroundDark,
  "tab.inactiveForeground": theme.foregroundDark,
  "tab.unfocusedActiveForeground": theme.foreground,
  "tab.unfocusedInactiveForeground": theme.foregroundDark,
  "tab.hoverBackground": theme.background,
  "tab.unfocusedHoverBackground": theme.background,
  "tab.activeModifiedBorder": "#6699cc",
  "tab.inactiveModifiedBorder": "#5986B3",
  "tab.unfocusedActiveModifiedBorder": "#6699cc",
  "tab.unfocusedInactiveModifiedBorder": "#5986B3"
  // "tab.activeBorderTop": "#",
  // "tab.unfocusedActiveBorderTop": "#",
  // "tab.hoverBorder": "#30373A",
  // "tab.unfocusedHoverBorder": "#30373A",
  // "editor.selectionHighlightBorder": "#f00",
  // "editor.wordHighlightBorder": "#f00",
  // "editor.wordHighlightStrongBorder": "#f00",
  // "editor.findMatchBorder": theme.foregroundDark,
  // "editor.findMatchHighlightBorder": "#f09",
  // "editor.findRangeHighlightBorder": "#f00",
  // "editor.rangeHighlightBorder": "#f00",
};
