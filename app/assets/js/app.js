/* LOADER DISPLAY */
// window.onload = () => {
//     $('.loading').css('display', 'none')
// }

/* LOAD JSON FILE */
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

ajaxGet('./assets/data/data.json', (data) => {
  data = JSON.parse(data)
  drawTopic1(data)
})

  /* TOPIC 1: DRAW CIRCLES */
var canvas = document.getElementById('topic1')
var ctx = canvas.getContext('2d')

function drawTopic1(data) {
  let responsesLength = data.questions[0].responses.length;
    for (var j = 0; j < responsesLength; j++) {
      var radius = data.questions[0].responses[j].people
      ctx.beginPath();
      ctx.arc(100*(j+1), 100*(j+1), radius * 4, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.strokeStyle = '#003300';
      ctx.stroke();
    }
}
