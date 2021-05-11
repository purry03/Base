var isDark = true;

function switchTheme() {
  collapseAllDropdowns();
  if (isDark) {
    isDark = false;
    $(":root").css("--foreground", "#333");
    $(":root").css("--primary", "#ddd");
    $(":root").css("--title-bar", "#ccc");
    $(":root").css("--scroll-bar-bg", "#ccc");
    $(":root").css("--scroll-bar-thumb", "#333");
  } else {
    isDark = true;
    $(":root").css("--foreground", "#ddd");
    $(":root").css("--primary", "#202020");
    $(":root").css("--title-bar", "#1c1c1c");
    $(":root").css("--scroll-bar-bg", "#333");
    $(":root").css("--scroll-bar-thumb", "#ccc");
  }
}
