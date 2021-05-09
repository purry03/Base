var clicked = false;
var mouse_is_inside = false;

$(".title-bar-control").hover(
  function () {
    mouse_is_inside = true;
  },
  function () {
    mouse_is_inside = false;
  }
);

$(document).on("click", function () {
  if (!mouse_is_inside) {
    collapseAllDropdowns();
    clicked = false;
  }
});

$(document).on("click", ".title-bar-control", function (e) {
  clicked = true;
  collapseAllDropdowns();
  $(this).find(".title-bar-dropdown").css("visibility", "visible");
});

$(document).on("mouseover", ".title-bar-control", function (e) {
  if (clicked) {
    collapseAllDropdowns();
    $(this).find(".title-bar-dropdown").css("visibility", "visible");
  }
});

function collapseAllDropdowns() {
  $(".title-bar-control-heading-active").removeClass(
    ".title-bar-control-heading-active"
  );
  $(".title-bar-control")
    .find(".title-bar-dropdown")
    .css("visibility", "hidden");
}
