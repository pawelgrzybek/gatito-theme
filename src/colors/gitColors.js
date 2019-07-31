const theme = require("../theme");

// Git Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors

module.exports = {
  "gitDecoration.modifiedResourceForeground": theme.blue,
  "gitDecoration.deletedResourceForeground": theme.red,
  "gitDecoration.untrackedResourceForeground": theme.green,
  "gitDecoration.ignoredResourceForeground": theme.foregroundDark,
  "gitDecoration.conflictingResourceForeground": theme.red
};
