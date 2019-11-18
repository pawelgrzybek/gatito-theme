const theme = require("../theme");

// Base Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors

module.exports = {
  focusBorder: theme.backgroundLight,
  foreground: theme.foreground,
  "widget.shadow": theme.transparent,
  "selection.background": theme.yellow,
  descriptionForeground: theme.foregroundDark,
  errorForeground: theme.red
  // TODO: he have no fucking clue how it works
  // "icon.foreground": theme.foregroundDark
};
