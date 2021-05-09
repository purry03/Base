var path = require("path");
var openedFiles = [];
var currentFile = "";

function getRandomID() {
  return Math.floor(Math.random() * 10000).toString();
}

function addToSidebar(filePath) {
  fs.readFile(filePath, function (err, content) {
    openedFiles.push({
      filePath: filePath,
      randomID: getRandomID(),
      originalContent: content,
      content: content,
      updated: false,
    });
    updateSidebar();
  });
}

function updateSidebar() {
  $(".sidebar-container").html("");
  openedFiles.forEach((openedFile) => {
    var randomID = getRandomID();
    $(".sidebar-container").html(
      $(".sidebar-container").html() +
        '<div class="sidebar-text" id="' +
        openedFile.randomID +
        '">' +
        path.basename(openedFile.filePath) +
        "</div>"
    );
  });
}

function updateContent(content) {
  let idToUpdate;
  let unsavedChanges = false;
  openedFiles.forEach((openedFile) => {
    if (openedFile.filePath == currentFile) {
      openedFile.content = content;
      idToUpdate = openedFile.randomID;
      if (openedFile.originalContent != openedFile.content) {
        openedFile.updated = true;
        unsavedChanges = true;
      }
    }
  });
  console.log(unsavedChanges);
  if (unsavedChanges) {
    $("#" + idToUpdate).addClass("sidebar-text-unsaved");
  } else {
    $("#" + idToUpdate).removeClass("sidebar-text-unsaved");
  }
}

$(document).on("click", ".sidebar-text", function () {
  $(".sidebar-text").removeClass("sidebar-text-active");
  $(this).addClass("sidebar-text-active");
  var idToOpen = $(this).attr("id").toString();
  openedFiles.forEach((openedFile) => {
    if (openedFile.randomID == idToOpen) {
      currentFile = openedFile.filePath;
      loadFile(openedFile.content);
    }
  });
});
