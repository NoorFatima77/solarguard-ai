// Paste the live demo (gradio.live) link between the quotes when the app is running.
var DEMO_URL = "https://00bfa1d050d047b65c.gradio.live";
(function () {
  var links = document.querySelectorAll('[data-demo]');
  for (var i = 0; i < links.length; i++) {
    if (DEMO_URL) { links[i].href = DEMO_URL; links[i].target = "_blank"; links[i].rel = "noopener"; }
  }
  if (DEMO_URL) {
    document.getElementById('demo-btn').style.display = 'inline-block';
    document.getElementById('demo-note').textContent = "Upload a photo of a solar panel, or use your live camera, and get its condition and a suggested action.";
    var box = document.querySelector('#demo .wrap');
    var frame = document.createElement('iframe');
    frame.src = DEMO_URL;
    frame.title = "SolarGuard AI live demo";
    frame.allow = "camera";
    frame.style.cssText = "width:100%;height:720px;border:0;border-radius:18px;margin-top:28px;background:#fff";
    box.appendChild(frame);
  }
})();
