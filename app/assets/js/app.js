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
    drawTopic2(data)
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
      $('#vizualisation1').fadeOut('slow')
      $('#percent').fadeOut('slow')
      setTimeout(() => {
        $('.title-part2').fadeIn('slow')
        $('#go-topic2').fadeIn('slow')
        $('.top').fadeIn('slow')
        $('.bottom').fadeIn('slow')
        $('#vizualisation2').fadeIn('slow')
        $('#text').fadeIn('slow')
      }, 1000)
    })
    $('#go-topic2').on('click', () => {
      $('.topic1').fadeOut('slow')
      setTimeout(() => {
        $('.topic2').fadeIn('slow')
      }, 1000)
    })

  }

  /* CIRCLES CLASS */
class Circle {
  constructor (coeff, color1, color2, name, topic, top, left) {
    this.coeff = coeff
    this.color1 = color1
    this.color2 = color2
    this.name = name
    this.topic = topic
    this.top = top
    this.left = left
  }
  getElement() {
    var span = document.createElement('span');
    var object = document.createElement('object');
    object.setAttribute('data', './assets/js/circle_gradient.svg');
    object.setAttribute('type', 'image/svg+xml');
    object.setAttribute('width', this.coeff)
    span.setAttribute('class', this.name)
    if (this.topic == "topic1part1") {
      document.getElementById("vizualisation1").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic1part2") {
      document.getElementById("vizualisation2").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic2") {
      document.getElementById("vizualisation3").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic3") {
      document.getElementById("vizualisation4").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic4") {
      document.getElementById("vizualisation5").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic5") {
      document.getElementById("vizualisation6").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic6") {
      document.getElementById("vizualisation7").appendChild(span).appendChild(object);
    }
    else if (this.topic == "final") {
      document.getElementById("vizualisation8").appendChild(span).appendChild(object);
    }
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

      var p = percent + '%'
      var r = res_text

      if(data.questions[0].responses[j].name == 'Tous les jours') {

        var c1 = new Circle(coeff, '#45F4CA', '#6446F2', 't1-p1-c1', 'topic1part1')
        c1.getElement()
        var p1 = percent + '%'
        var r1 = res_text

        $('.t1-p1-c1')
        .mouseenter(() => {
          $('#percent').text(p1);
          $('#result').text(r1);
        })
        .mouseleave(() => {
          $('#percent').text('');
          $('#result').text('');
        });

      } else if (data.questions[0].responses[j].name == 'Souvent') {

        var c2 = new Circle(coeff, '#66BEFF', '#FF4A69', 't1-p1-c2', 'topic1part1')
        c2.getElement()
        var p2 = percent + '%'
        var r2 = res_text
        $('.t1-p1-c2')
        .mouseenter(() => {
          $('#percent').text(p2);
          $('#result').text(r2);
        })
        .mouseleave(() => {
          $('#percent').text('');
          $('#result').text('');
        });

      } else if (data.questions[0].responses[j].name == 'De temps en temps') {

        var c3 = new Circle(coeff, '#FFE650', '#FF4A69', 't1-p1-c3', 'topic1part1')
        c3.getElement()
        var p3 = percent + '%'
        var r3 = res_text
        $('.t1-p1-c3')
        .mouseenter(() => {
          $('#percent').text(p3);
          $('#result').text(r3);
        })
        .mouseleave(() => {
          $('#percent').text('');
          $('#result').text('');
        });
      }
    }

  // Question 2 -> Topic 2
  let res2Length = data.questions[0].responses.length;

  for (var i = 0; i < res2Length; i++) {

    var afraid_res2length = data.questions[0].responses[i].afraid.length;

    for (var j = 0; j < afraid_res2length; j++) {

      var people = data.questions[0].responses[i].afraid[j].people;
      var coeff = people * 10;
      var res_text = data.questions[0].responses[i].afraid[j].result;
      var res_persons = data.questions[0].responses[i].afraid[j].text;

      if (data.questions[0].responses[i].name == 'Tous les jours' && data.questions[0].responses[i].afraid[j].name == 'Oui') {
        var c4 = new Circle(coeff, '#45F4CA', '#6446F2', 't1-p2-c1', 'topic1part2')
        c4.getElement()
        var r4 = res_text
        var rp1 = res_persons
        $('.t1-p2-c1').css('position', 'absolute').css('top', '90px').css('right', '90px')
        $('.t1-p2-c1')
        .mouseenter(() => {
          $('#result').text(r4);
          $('#text').text(rp1);
          $('.t1-p2-c1').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c1').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'Tous les jours' && data.questions[0].responses[i].afraid[j].name == 'Un peu') {
        var c5 = new Circle(coeff, '#45F4CA', '#6446F2', 't1-p2-c2', 'topic1part2')
        c5.getElement()
        var r5 = res_text
        var rp2 = res_persons
        $('.t1-p2-c2').css('position', 'absolute').css('top', '230px').css('right', '70px')
        $('.t1-p2-c2')
        .mouseenter(() => {
          $('#result').text(r5);
          $('#text').text(rp2);
          $('.t1-p2-c2').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c2').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'Tous les jours' && data.questions[0].responses[i].afraid[j].name == 'Non') {
        var c6 = new Circle(coeff, '#45F4CA', '#6446F2', 't1-p2-c3', 'topic1part2')
        c6.getElement()
        var r6 = res_text
        var rp3 = res_persons
        $('.t1-p2-c3').css('position', 'absolute').css('bottom', '75px').css('right', '90px')
        $('.t1-p2-c3')
        .mouseenter(() => {
          $('#result').text(r6);
          $('#text').text(rp3);
          $('.t1-p2-c3').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c3').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'Souvent' && data.questions[0].responses[i].afraid[j].name == 'Oui') {
        var c10 = new Circle(coeff, '#66BEFF', '#FF4A69', 't1-p2-c7', 'topic1part2')
        c10.getElement()
        var r10 = res_text
        var rp4 = res_persons
        $('.t1-p2-c7').css('position', 'absolute').css('top', '80px').css('right', '225px')
        $('.t1-p2-c7')
        .mouseenter(() => {
          $('#result').text(r10);
          $('#text').text(rp4);
          $('.t1-p2-c7').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c7').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'Souvent' && data.questions[0].responses[i].afraid[j].name == 'Un peu') {
        var c11 = new Circle(coeff, '#66BEFF', '#FF4A69', 't1-p2-c8', 'topic1part2')
        c11.getElement()
        var r11 = res_text
        var rp5 = res_persons
        $('.t1-p2-c8').css('position', 'absolute').css('top', '200px').css('right', '185px')
        $('.t1-p2-c8')
        .mouseenter(() => {
          $('#result').text(r11);
          $('#text').text(rp5);
          $('.t1-p2-c8').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c8').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'Souvent' && data.questions[0].responses[i].afraid[j].name == 'Non') {
        var c12 = new Circle(coeff, '#66BEFF', '#FF4A69', 't1-p2-c9', 'topic1part2')
        c12.getElement()
        var r12 = res_text
        var rp6 = res_persons
        $('.t1-p2-c9').css('position', 'absolute').css('bottom', '75px').css('right', '230px')
        $('.t1-p2-c9')
        .mouseenter(() => {
          $('#result').text(r12);
          $('#text').text(rp6);
          $('.t1-p2-c9').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c9').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'De temps en temps' && data.questions[0].responses[i].afraid[j].name == 'Oui') {
        var c7 = new Circle(coeff, '#FFE650', '#FF4A69', 't1-p2-c4', 'topic1part2')
        c7.getElement()
        var r7 = res_text
        var rp7 = res_persons
        $('.t1-p2-c4').css('position', 'absolute').css('top', '90px').css('left', '90px')
        $('.t1-p2-c4')
        .mouseenter(() => {
          $('#result').text(r7);
          $('#text').text(rp7);
          $('.t1-p2-c4').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c4').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'De temps en temps' && data.questions[0].responses[i].afraid[j].name == 'Un peu') {
        var c8 = new Circle(coeff, '#FFE650', '#FF4A69', 't1-p2-c5', 'topic1part2')
        c8.getElement()
        var r8 = res_text
        var rp8 = res_persons
        $('.t1-p2-c5').css('position', 'absolute').css('top', '240px').css('left', '80px')
        $('.t1-p2-c5')
        .mouseenter(() => {
          $('#result').text(r8);
          $('#text').text(rp8);
          $('.t1-p2-c5').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c5').find('object').css('border', 'none')
        });
      }
      else if (data.questions[0].responses[i].name == 'De temps en temps' && data.questions[0].responses[i].afraid[j].name == 'Non') {
        var c9 = new Circle(coeff, '#FFE650', '#FF4A69', 't1-p2-c6', 'topic1part2')
        c9.getElement()
        var r9 = res_text
        var rp9 = res_persons
        $('.t1-p2-c6').css('position', 'absolute').css('bottom', '50px').css('left', '66px')
        $('.t1-p2-c6')
        .mouseenter(() => {
          $('#result').text(r9);
          $('#text').text(rp9);
          $('.t1-p2-c6').find('object').css('border', '3px solid #FFF')
        })
        .mouseleave(() => {
          $('#result').text('');
          $('#text').text('');
          $('.t1-p2-c6').find('object').css('border', 'none')
        });
      }
    }
  }
}

function drawTopic2(data) {

}

eventListener()

})
