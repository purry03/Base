$(document).ready(function () {
  GetLatestReleaseInfo();
});

function GetLatestReleaseInfo() {
  $.getJSON("https://api.github.com/repos/purry03/base/tags").done(function (
    json
  ) {
    var release = json[0];
    var downloadURL = release.zipball_url;
    $(".release-version").html(release.name);
  });
}
