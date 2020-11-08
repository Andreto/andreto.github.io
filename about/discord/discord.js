function displayTooltip() {
  var tooltip = document.getElementById("toltipSpan");
  tooltip.innerHTML = "Copy to clipboard";
}

function copyUserTag() {
  var copyText = document.getElementById("copy-input");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("toltipSpan");
  tooltip.innerHTML = "Copied!";
  document.querySelector(".tooltip .tooltiptext").backgroundColor = "#43B581";
}
