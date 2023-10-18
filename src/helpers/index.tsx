function formatString(text: String) {
  var tempText = text.toLowerCase();
  if (tempText.split(" ").length === 1) {
    tempText = tempText.charAt(0).toUpperCase() + tempText.slice(1);
  } else {
    tempText = tempText.split(" ").reduce((s, c) => s.charAt(0).toUpperCase() + s.slice(1) + " " + (c.charAt(0).toUpperCase() + c.slice(1)));
  }
  return tempText;
}

export { formatString };
