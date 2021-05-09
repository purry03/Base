const dialog = require("electron").remote.dialog;
const fs = require("fs");

function openFile() {
  dialog
    .showOpenDialog({ properties: ["openFile", "multiSelections"] })
    .then((files) => {
      collapseAllDropdowns();
      files.filePaths.forEach((filePath) => {
        addToSidebar(filePath);
      });
    });
}

function saveFile() {
  fs.writeFile(currentFile, $(".editor").val(), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    collapseAllDropdowns();
  });
}
