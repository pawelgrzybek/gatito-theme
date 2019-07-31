const fs = require("fs");
const colors = require("./colors");
const tokenColors = require("./tokenColors");

const theme = {
  name: "Gatito Theme",
  colors: {
    ...colors.baseColors,
    ...colors.buttonControl,
    ...colors.dropdownControl,
    ...colors.inputControl,
    ...colors.scrollBarControl,
    ...colors.badge,
    ...colors.progressBar,
    ...colors.listsAndTrees,
    ...colors.activityBar,
    ...colors.sideBar,
    ...colors.editorGroupsAndTabs,
    ...colors.editorColors,
    ...colors.diffEditorColors,
    ...colors.editorWidgetColors,
    ...colors.peakViewColors,
    ...colors.mergeConflicts,
    ...colors.panelColors,
    ...colors.statusBarColors,
    ...colors.titleBarColors,
    ...colors.notificationDialogColors,
    ...colors.extensions,
    ...colors.quickPicker,
    ...colors.integratedTerminalColors,
    ...colors.welcomePage,
    ...colors.gitColors,
    ...colors.settingsEditor,
    ...colors.breadcrumbs,
    ...colors.snippets
  },
  tokenColors
};

fs.writeFile("dist/gatito-theme.json", JSON.stringify(theme), error => {
  const log = error
    ? {
        method: "error",
        message: error
      }
    : {
        method: "log",
        message: "Theme created :-)"
      };

  console[log.method](log.message);
});
