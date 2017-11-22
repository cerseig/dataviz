var color1, color2

$(document).ready(function() {

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

  function eventListener() {
    /* CTA HOME  START */
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

    $('#go-topic1-part2').on('click', () => {
      $('.title-part1').fadeOut('slow')
      $('#go-topic1-part2').fadeOut('slow')
      setTimeout(() => {
        $('.title-part2').fadeIn('slow')
        $('#go-topic2').fadeIn('slow')
      }, 1000)

    })

  }

  /* CIRCLES CLASS */
class Circle {
  constructor (coeff, color1, color2, name) {
    this.coeff = coeff
    this.color1 = color1
    this.color2 = color2
    this.name = name
  }
  getElement() {
    var object = document.createElement('object');
    object.setAttribute('data', './assets/js/circle_gradient.svg');
    object.setAttribute('type', 'image/svg+xml');
    object.setAttribute('width', this.coeff)
    object.setAttribute('class', this.name)
    document.getElementById("vizualisation").appendChild(object);
    object.addEventListener('load', () => {
      var obj = object.contentDocument;
      var stop_1 = obj.querySelector('stop:first-child');
      var stop_2 = obj.querySelector('stop:last-child');
      stop_1.setAttribute('stop-color', this.color1);
      stop_2.setAttribute('stop-color', this.color2)
    })
  }
}

function drawTopic1(data) {

  // Question 1 -> Topic 1
  let res1Length = data.questions[0].responses.length;

  for (var j = 0; j < res1Length; j++) {

      var people = data.questions[0].responses[j].people
      var coeff = people * 10
      var percent = data.questions[0].responses[j].percent
      var res_text = data.questions[0].responses[j].result

      if(data.questions[0].responses[j].name == 'Tous les jours') {

        var circle1 = new Circle(coeff, '#45F4CA', '#6446F2', 't1-p1-c1')
        circle1.getElement()
        var p = percent + '%'
        var r = res_text
        $('.t1-p1-c1').mouseover(function() {
          console.log('test hover');
          // $('#percent').text(p);
          // $('#result').text(r);
        });

      } else if (data.questions[0].responses[j].name == 'Souvent') {

        var circle2 = new Circle(coeff, '#66BEFF', '#FF4A69', 't1-p1-c2')
        circle2.getElement()
        $('.t1-p1-c2').mouseover(function() {
          console.log('test hover');
          // $('#percent').text(p);
          // $('#result').text(r);
        });

      } else if (data.questions[0].responses[j].name == 'De temps en temps') {

        var circle3 = new Circle(coeff, '#FFE650', '#FF4A69', 't1-p1-c3')
        circle3.getElement()
        $('.t1-p1-c3').mouseenter(function() {
          console.log('test hover');
          $('#percent').text(p);
          // $('#result').text(r);
        });
      }
    }

  // Question 2 -> Topic 2
  let res2Length = data.questions[1].responses.length;

  for (var i = 0; i < res2Length; i++) {

    var people = data.questions[1].responses[i].people
    var coeff = people * 10
    var percent = data.questions[1].responses[i].percent
    var res_text = data.questions[1].responses[i].result
  }

}

eventListener()
})
