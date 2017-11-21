/**
 * Loader de page
 */
$.pageLoader = function() {

  var $loader = $('.loading');
  var $chargementInfos = $('#count');
  var dureeMs = 1000;

  function animateStep(now, fx) {
    $chargementInfos.text(parseInt(now)+'%');
  }

  function chargementEnCours() {
    var pourcentage = 0;
    if($elements.length) {
      pourcentage = parseInt((elementsCharges / $elements.length) * 100);
    }
  }

  function chargementTermine() {
    var pourcentage = 100;

    // Affichage du pourcentage
    $chargementInfos
      .stop() // stop les anciennes animations
      .animate({pourcentage:pourcentage}, {
        duration: (dureeMs / 2),
        step: animateStep
      })
      // Disparition du chargement et affichage de la page
      .css({opacity: 1})
      .animate({opacity: 0}, function() {
        // La page est prete
        $loader.css({display:'none'});
      });
  }

  $(window).load(function() {
    chargementTermine();
  });
};

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

/* CTA START */
$('#start').on('click', () => {
  setTimeout(function() {
    $('.circle7').addClass('animate')
    setTimeout(function() {
      $('.circle7').fadeOut('slow')
    }, 500)
  }, 0)
  setTimeout(function() {
    $('.circle9').addClass('animate')
    setTimeout(function() {
      $('.circle9').fadeOut('slow')
    }, 500)
  }, 200)
  setTimeout(function() {
    $('.circle11').addClass('animate')
    setTimeout(function() {
      $('.circle11').fadeOut('slow')
    }, 500)
  }, 400)
  setTimeout(function() {
    $('.circle6').addClass('animate')
    setTimeout(function() {
      $('.circle6').fadeOut('slow')
    }, 500)
  }, 600)
  setTimeout(function() {
    $('.circle5').addClass('animate')
    setTimeout(function() {
      $('.circle5').fadeOut('slow')
    }, 500)
  }, 800)
  setTimeout(function() {
    $('.circle4').addClass('animate')
    setTimeout(function() {
      $('.circle4').fadeOut('slow')
    }, 500)
  }, 1000)
  setTimeout(function() {
    $('.circle1').addClass('animate')
    setTimeout(function() {
      $('.circle1').fadeOut('slow')
    }, 500)
  }, 1200)
  setTimeout(function() {
    $('.circle8').addClass('animate')
    setTimeout(function() {
      $('.circle8').fadeOut('slow')
    }, 500)
  }, 1400)
  setTimeout(function() {
    $('.circle2').addClass('animate')
    setTimeout(function() {
      $('.circle2').fadeOut('slow')
    }, 500)
  }, 1600)
  setTimeout(function() {
    $('.circle10').addClass('animate')
    setTimeout(function() {
      $('.circle10').fadeOut('slow')
    }, 500)
  }, 1800)
  setTimeout(function() {
    $('.circle3').addClass('animate')
    setTimeout(function() {
      $('.circle3').fadeOut('slow')
      $('.content-home').fadeOut('slow')
      setTimeout(function() {
        $('.home').fadeOut('slow')
        $('.topic1').fadeIn('slow')
      }, 1000)
    }, 500)
  }, 2000)
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
