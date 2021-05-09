const electron = require("electron");
const remote = electron.remote;

remote.getCurrentWindow().on("resize", function () {
  if (remote.getCurrentWindow().isMaximized()) {
    $(".window-button-resize").attr("src", "img/resize.png");
  } else {
    $(".window-button-resize").attr("src", "img/maximize.png");
  }
});

function closeWindow() {
  var window = remote.getCurrentWindow();
  window.close();
}

function minimizeWindow() {
  remote.getCurrentWindow().minimize();
}

function toggleWindowSize() {
  if (remote.getCurrentWindow().isMaximized()) {
    remote.getCurrentWindow().unmaximize();
  } else {
    remote.getCurrentWindow().maximize();
  }
}
