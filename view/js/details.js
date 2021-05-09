$("#editor").scroll(function () {
  var currY = $(this).scrollTop();
  var height = $(this).height();
  var scrollHeight = $(this).prop("scrollHeight");
  var scrollPercent = (currY / (scrollHeight - height)) * 100;
  setScrollPercent(scrollPercent);
});

function setScrollPercent(scrollPercent) {
  scrollPercent = Math.ceil(scrollPercent / 10) * 10;
  $(".current-scroll-percent").html(scrollPercent + "%");
  let barsToUpdate = Math.round(scrollPercent / 10);
  $(".percent-bar").each(function () {
    if (barsToUpdate > 0) {
      $(this).addClass("percent-bar-active");
      barsToUpdate = barsToUpdate - 1;
    } else {
      $(this).removeClass("percent-bar-active");
    }
  });
}
