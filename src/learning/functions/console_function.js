function logText() {
  console.log("Ahoj světe JS!");
}

logText();
logText();
logText();
logText();

function logTextParam(text) {
  // více parametrů: (text, time)
  console.log("Tredgate školení, předaný parametr: " + text);
}

logTextParam("První");
logTextParam("JS je super");
logTextParam("Umím vytvářet a používat funkce!"); // více parametrů logTextParam("text", "10:52");
