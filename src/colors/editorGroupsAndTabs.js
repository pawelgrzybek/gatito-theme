const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": theme.backgroundLight,
  "editorGroup.dropBackground": theme.backgroundLight,
  "editorGroupHeader.noTabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBorder": theme.backgroundLight,
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": "#f00",
  "tab.activeBackground": theme.background,
  "tab.unfocusedActiveBackground": "#f00",
  "tab.activeForeground": theme.foreground,
  "tab.border": theme.backgroundLight,
  "tab.activeBorder": theme.background,
  "tab.unfocusedActiveBorder": "#f00",
  "tab.activeBorderTop": theme.transparent,
  "tab.unfocusedActiveBorderTop": "#f00",
  "tab.inactiveBackground": theme.backgroundDark,
  "tab.inactiveForeground": theme.foregroundDark,
  "tab.unfocusedActiveForeground": theme.foreground,
  "tab.unfocusedInactiveForeground": theme.foregroundDark,
  "tab.hoverBackground": theme.background,
  "tab.unfocusedHoverBackground": theme.background,
  "tab.hoverBorder": "#f00",
  "tab.unfocusedHoverBorder": "#f00",
  "tab.activeModifiedBorder": "#f00",
  "tab.inactiveModifiedBorder": "#f00",
  "tab.unfocusedActiveModifiedBorder": "#f00",
  "tab.unfocusedInactiveModifiedBorder": "#f00",
  "editorPane.background": "#f00"
};
