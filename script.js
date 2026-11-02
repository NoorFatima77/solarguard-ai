// Paste the live demo (gradio.live) link between the quotes when the app is running.
var DEMO_URL = "var DEMO_URL = "https://xxxxxxxx.gradio.live";";
(function () {
  var links = document.querySelectorAll('[data-demo]');
  for (var i = 0; i < links.length; i++) {
    if (DEMO_URL) { links[i].href = DEMO_URL; links[i].target = "_blank"; links[i].rel = "noopener"; }
  }
  if (DEMO_URL) {
    document.getElementById('demo-btn').style.display = 'inline-block';
    document.getElementById('demo-note').textContent = "Upload a photo of a solar panel and get its condition and a suggested action.";
  }
})();
