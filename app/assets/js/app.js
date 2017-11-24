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
    data = JSON.parse(data);
    drawFinal(data);
    drawTopic6(data);
    drawTopic5(data);
    drawTopic4(data);
    drawTopic3(data);
    drawTopic2(data);
    drawTopic1(data);
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
      $('.t1-title-part1').fadeOut('slow')
      $('#go-topic1-part2').fadeOut('slow')
      $('#vizualisation1').fadeOut('slow')
      $('#percent').fadeOut('slow')
      setTimeout(() => {
        $('.t1-title-part2').fadeIn('slow')
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
    $('#go-topic3').on('click', () => {
      $('.topic2').fadeOut('slow')
      setTimeout(() => {
        $('.topic3').fadeIn('slow')
      }, 1000)
    })
    $('#go-topic4').on('click', () => {
      $('.topic3').fadeOut('slow')
      setTimeout(() => {
        $('.topic4').fadeIn('slow')
      }, 1000)
    })
    $('#go-topic4-part2').on('click', () => {
      $('.t4-title-part1').fadeOut('slow')
      $('#go-topic4-part2').fadeOut('slow')
      $('#vizualisation5').fadeOut('slow')
      $('#percent-t4').fadeOut('slow')
      $('.left').fadeOut('slow')
      $('.right').fadeOut('slow')
      setTimeout(() => {
        $('.t4-title-part2').fadeIn('slow')
        $('#go-topic5').fadeIn('slow')
        $('#vizualisation6').fadeIn('slow')
        $('#text-t4').fadeIn('slow')
        $('.data-legend').fadeIn('slow')
      }, 1000)
    })
    $('#go-topic5').on('click', () => {
      $('.topic4').fadeOut('slow')
      setTimeout(() => {
        $('.topic5').fadeIn('slow')
      }, 1000)
    })
    $('#go-topic6').on('click', () => {
      $('.topic5').fadeOut('slow')
      setTimeout(() => {
        $('.topic6').fadeIn('slow')
      }, 1000)
    })
    $('#go-final').on('click', () => {
      $('.topic6').fadeOut('slow')
      setTimeout(() => {
        $('.final').fadeIn('slow')
      }, 1000)
    })

  }

class Trait {
  constructor (coeff, color, name, topic) {
    this.coeff = coeff
    this.color = color
    this.name = name
    this.topic = topic
  }
  getElement() {
    var trait = document.createElement('div')
    trait.setAttribute('class', 'trait '+this.name)
    trait.setAttribute('style', 'background:'+this.color+'; width:'+this.coeff+'px')
    if (this.topic == "topic5") {
      document.getElementById("vizualisation7").appendChild(trait);
    }
  }
}
/* BAR CLASS */
class Bar {
  constructor (percent, color1, color2, name, topic) {
    this.percent = percent
    this.color1 = color1
    this.color2 = color2
    this.name = name
    this.topic = topic
  }
  getElement() {
    var content = document.createElement('div')
    var bar = document.createElement('div')
    var span = document.createElement('span')
    var result = document.createElement('p')
    content.setAttribute('class', 'parent '+this.name)
    bar.setAttribute('class', 'bar')
    bar.setAttribute('style', 'width:'+this.percent+'%; background: linear-gradient(to bottom, '+this.color1+' 0%,  '+this.color2+' 100%)')
    if (this.topic == "topic3") {
      document.getElementById("vizualisation4").appendChild(content).appendChild(bar);
      document.getElementById("vizualisation4").appendChild(content).appendChild(span);
      document.getElementById("vizualisation4").appendChild(content).appendChild(result);
    }
  }
}
/* PROGRESS CLASS */
class Progress {
  constructor (percent, color1, color2, name, topic) {
    this.percent = percent
    this.color1 = color1
    this.color2 = color2
    this.name = name
    this.topic = topic
  }
  getElement() {
    var bar = document.createElement('div')
    bar.setAttribute('class', 'bar '+this.name)
    bar.setAttribute('style', 'background:linear-gradient(226.24deg,'+this.color1+' 0%,'+this.color2+' 100%)')
    var progress_bar = document.createElement('div')
    progress_bar.setAttribute('class', 'progress')
    progress_bar.setAttribute('style', 'width:'+this.percent+'%')
    if (this.topic == "topic2") {
      document.getElementById("vizualisation3").appendChild(bar).appendChild(progress_bar);
    }
    if (this.topic == "topic6") {
      document.getElementById("vizualisation8").appendChild(bar).appendChild(progress_bar);
    }
  }
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
    span.setAttribute('class', 'hover '+this.name)
    if (this.topic == "topic1part1") {
      document.getElementById("vizualisation1").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic1part2") {
      document.getElementById("vizualisation2").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic4part1") {
      document.getElementById("vizualisation5").appendChild(span).appendChild(object);
    }
    else if (this.topic == "topic4part2") {
      document.getElementById("vizualisation6").appendChild(span).appendChild(object);
    }
    else if (this.topic == "final") {
      document.getElementById("vizualisation9").appendChild(span).appendChild(object);
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

      if(data.questions[0].responses[j].name == 'Tous les jours') {

        var c1 = new Circle(coeff, '#45F4CA', '#6446F2', 't1-p1-c1', 'topic1part1')
        c1.getElement()
        var p1 = percent + '%'
        var r1 = res_text

        $('.t1-p1-c1')
        .mouseenter(() => {
          $('#percent-t1').text(p1);
          $('#result-t1').text(r1);
          $('.t1-p1-c1').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#percent-t1').text('');
          $('#result-t1').text('');
          $('.t1-p1-c1').find('object').css('box-shadow', 'none')
        });

      } else if (data.questions[0].responses[j].name == 'Souvent') {

        var c2 = new Circle(coeff, '#66BEFF', '#FF4A69', 't1-p1-c2', 'topic1part1')
        c2.getElement()
        var p2 = percent + '%'
        var r2 = res_text
        $('.t1-p1-c2')
        .mouseenter(() => {
          $('#percent-t1').text(p2);
          $('#result-t1').text(r2);
          $('.t1-p1-c2').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#percent-t1').text('');
          $('#result-t1').text('');
          $('.t1-p1-c2').find('object').css('box-shadow', 'none')
        });

      } else if (data.questions[0].responses[j].name == 'De temps en temps') {

        var c3 = new Circle(coeff, '#FFE650', '#FF4A69', 't1-p1-c3', 'topic1part1')
        c3.getElement()
        var p3 = percent + '%'
        var r3 = res_text
        $('.t1-p1-c3')
        .mouseenter(() => {
          $('#percent-t1').text(p3);
          $('#result-t1').text(r3);
          $('.t1-p1-c3').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#percent-t1').text('');
          $('#result-t1').text('');
          $('.t1-p1-c3').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r4);
          $('#text-t1').text(rp1);
          $('.t1-p2-c1').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c1').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r5);
          $('#text-t1').text(rp2);
          $('.t1-p2-c2').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c2').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r6);
          $('#text-t1').text(rp3);
          $('.t1-p2-c3').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c3').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r10);
          $('#text-t1').text(rp4);
          $('.t1-p2-c7').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c7').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r11);
          $('#text-t1').text(rp5);
          $('.t1-p2-c8').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c8').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r12);
          $('#text-t1').text(rp6);
          $('.t1-p2-c9').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c9').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r7);
          $('#text-t1').text(rp7);
          $('.t1-p2-c4').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c4').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r8);
          $('#text-t1').text(rp8);
          $('.t1-p2-c5').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c5').find('object').css('box-shadow', 'none')
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
          $('#result-t1').text(r9);
          $('#text-t1').text(rp9);
          $('.t1-p2-c6').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
        })
        .mouseleave(() => {
          $('#result-t1').text('');
          $('#text-t1').text('');
          $('.t1-p2-c6').find('object').css('box-shadow', 'none')
        });
      }
    }
  }
}

function drawTopic2(data) {

  let res3Length = data.questions[2].responses.length;

  for (var i = 0; i < res3Length; i++) {
    var percent = data.questions[2].responses[i].percent
    var res = data.questions[2].responses[i].result

    if (data.questions[2].responses[i].name == 'Le plus possible') {
      var b1 = new Progress(percent, '#45F4CA', '#45F4CA', 't2-b1', 'topic2')
      b1.getElement()
      var p1 = percent + '%'
      var r1 = res
      $('.t2-b1')
      .mouseenter(() => {
        console.log(r1);
        $('#percent-t2').text(p1);
        $('#result-t2').text(r1);
        $('.t2-b1').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t2').text('');
        $('#result-t2').text('');
        $('.t2-b1').css('box-shadow', 'none')
      });
    }
    else if (data.questions[2].responses[i].name == 'Plus que maintenant') {
      var b2 = new Progress(percent, '#45F4CA', '#6446F2', 't2-b2', 'topic2')
      b2.getElement()
      var p2 = percent + '%'
      var r2 = res
      $('.t2-b2')
      .mouseenter(() => {
        $('#percent-t2').text(p2);
        $('#result-t2').text(r2);
        $('.t2-b2').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t2').text('');
        $('#result-t2').text('');
        $('.t2-b2').css('box-shadow', 'none')
      });
    }
    else if (data.questions[2].responses[i].name == 'Ni plus ni moins') {
      var b3 = new Progress(percent, '#6446F2', '#6446F2', 't2-b3', 'topic2')
      b3.getElement()
      var p3 = percent + '%'
      var r3 = res
      $('.t2-b3')
      .mouseenter(() => {
        $('#percent-t2').text(p3);
        $('#result-t2').text(r3);
        $('.t2-b3').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t2').text('');
        $('#result-t2').text('');
        $('.t2-b3').css('box-shadow', 'none')
      });
    }
    else if (data.questions[2].responses[i].name == 'Moins') {
      var b4 = new Progress(percent, '#FF4A69', '#6446F2', 't2-b4', 'topic2')
      b4.getElement()
      var p4 = percent + '%'
      var r4 = res
      $('.t2-b4')
      .mouseenter(() => {
        $('#percent-t2').text(p4);
        $('#result-t2').text(r4);
        $('.t2-b4').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t2').text('');
        $('#result-t2').text('');
        $('.t2-b4').css('box-shadow', 'none')
      });
    }
    else if (data.questions[2].responses[i].name == 'Jamais') {
      var b5 = new Progress(percent, '#FF4A69', '#FF4A69', 't2-b5', 'topic2')
      b5.getElement()
      var p5 = percent + '%'
      var r5 = res
      $('.t2-b5')
      .mouseenter(() => {
        $('#percent-t2').text(p5);
        $('#result-t2').text(r5);
        $('.t2-b5').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t2').text('');
        $('#result-t2').text('');
        $('.t2-b5').css('box-shadow', 'none')
      });
    }
  }

}

function drawTopic3(data) {

  let res4Length = data.questions[3].responses.length;

  for (var i = 0; i < res4Length; i++) {
    var percent = data.questions[3].responses[i].percent * 1
    var res = data.questions[3].responses[i].result

    if (data.questions[3].responses[i].name == 'Dans une start-up') {
      var b1 = new Bar(percent, '#45F4CA', '#45F4CA', 't3-b1', 'topic3')
      b1.getElement()
      var p1 = percent + '%'
      var r1 = res
      $('.t3-b1>span').text(p1);
      $('.t3-b1>p').text(r1);
    }
    else if (data.questions[3].responses[i].name == 'J’aurai ma propre boîte') {
      var b2 = new Bar(percent, '#66BEFF', '#66BEFF', 't3-b2', 'topic3')
      b2.getElement()
      var p2 = percent + '%'
      var r2 = res
      $('.t3-b2>span').text(p2);
      $('.t3-b2>p').text(r2);
    }
    else if (data.questions[3].responses[i].name == 'Dans une agence') {
      var b3 = new Bar(percent, '#6446F2', '#6446F2', 't3-b3', 'topic3')
      b3.getElement()
      var p3 = percent + '%'
      var r3 = res
      $('.t3-b3>span').text(p3);
      $('.t3-b3>p').text(r3);
    }
    else if (data.questions[3].responses[i].name == 'J’aurai tout plaqué pour faire le tour du monde') {
      var b4 = new Bar(percent, '#FF4A69', '#FF4A69', 't3-b4', 'topic3')
      b4.getElement()
      var p4 = percent + '%'
      var r4 = res
      $('.t3-b4>span').text(p4);
      $('.t3-b4>p').text(r4);
    }
    else if (data.questions[3].responses[i].name == 'En freelance') {
      var b5 = new Bar(percent, '#FF9750', '#FF9750', 't3-b5', 'topic3')
      b5.getElement()
      var p5 = percent + '%'
      var r5 = res
      $('.t3-b5>span').text(p5);
      $('.t3-b5>p').text(r5);
    }
    else if (data.questions[3].responses[i].name == 'La vie me dira') {
      var b6 = new Bar(percent, '#FFE650', '#FFE650', 't3-b6', 'topic3')
      b6.getElement()
      var p6 = percent + '%'
      var r6 = res
      $('.t3-b6>span').text(p6);
      $('.t3-b6>p').text(r6);
    }
  }

}

function drawTopic4(data) {
  let res5Length = data.questions[4].responses.length;

  for (var i = 0; i < res5Length; i++) {

    var people = data.questions[4].responses[i].people
    var coeff = people * 10
    var percent = data.questions[4].responses[i].percent
    var res_text = data.questions[4].responses[i].result

    let aspectLength = data.questions[4].responses[i].aspect.length

    if (data.questions[4].responses[i].name == 'Pas du tout') {
      var c1 = new Circle(coeff, '#45F4CA', '#66BEFF', 't4-p1-c1', 'topic4part1')
      c1.getElement()
      var p1 = percent + '%'
      var r1 = res_text
      $('.t4-p1-c1')
      .mouseenter(() => {
        $('#percent-t4').text(p1);
        $('#result-t4').text(r1);
        $('.t4-p1-c1').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t4').text('');
        $('#result-t4').text('');
        $('.t4-p1-c1').find('object').css('box-shadow', 'none')
      });

      for (var j = 0; j < aspectLength; j++) {

        var percent2 = data.questions[4].responses[i].aspect[j].percent
        var coeff2 = percent2
        var res_text2 = data.questions[4].responses[i].aspect[j].result

        if (data.questions[4].responses[i].aspect[j].name == 'familial') {
          var p2_c1 = new Circle(coeff2, '#45F4CA', '#66BEFF', 't4-p2-c1', 'topic4part2')
          p2_c1.getElement()

          var p2_p1 = percent2 + '%'
          var p2_r1 = res_text2
          $('.t4-p2-c1')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p1);
            $('#result-t4').text(p2_r1);
            $('.t4-p2-c1').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c1').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'professionnel') {
          var p2_c2 = new Circle(coeff2, '#45F4CA', '#66BEFF', 't4-p2-c2', 'topic4part2')
          p2_c2.getElement()

          var p2_p2 = percent2 + '%'
          var p2_r2 = res_text2
          $('.t4-p2-c2')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p2);
            $('#result-t4').text(p2_r2);
            $('.t4-p2-c2').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c2').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'materiel') {
          var p2_c3 = new Circle(coeff2, '#45F4CA', '#66BEFF', 't4-p2-c3', 'topic4part2')
          p2_c3.getElement()

          var p2_p3 = percent2 + '%'
          var p2_r3 = res_text2
          $('.t4-p2-c3')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p3);
            $('#result-t4').text(p2_r3);
            $('.t4-p2-c3').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c3').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'epanouissement') {
          var p2_c4 = new Circle(coeff2, '#45F4CA', '#66BEFF', 't4-p2-c4', 'topic4part2')
          p2_c4.getElement()

          var p2_p4 = percent2 + '%'
          var p2_r4 = res_text2
          $('.t4-p2-c4')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p4);
            $('#result-t4').text(p2_r4);
            $('.t4-p2-c4').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c4').find('object').css('box-shadow', 'none')
          });
        }
      }

    }
    else if (data.questions[4].responses[i].name == 'Il restera du chemin à faire') {
      var c2 = new Circle(coeff, '#FF4A69', '#6A32A5', 't4-p1-c2', 'topic4part1')
      c2.getElement()
      var p2 = percent + '%'
      var r2 = res_text
      $('.t4-p1-c2')
      .mouseenter(() => {
        $('#percent-t4').text(p2);
        $('#result-t4').text(r2);
        $('.t4-p1-c2').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t4').text('');
        $('#result-t4').text('');
        $('.t4-p1-c2').find('object').css('box-shadow', 'none')
      });

      for (var j = 0; j < aspectLength; j++) {

        var percent2 = data.questions[4].responses[i].aspect[j].percent
        var coeff2 = percent2
        var res_text2 = data.questions[4].responses[i].aspect[j].result

        if (data.questions[4].responses[i].aspect[j].name == 'familial') {
          var p2_c5 = new Circle(coeff2, '#FF4A69', '#6A32A5', 't4-p2-c5', 'topic4part2')
          p2_c5.getElement()

          var p2_p5 = percent2 + '%'
          var p2_r5 = res_text2
          $('.t4-p2-c5')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p5);
            $('#result-t4').text(p2_r5);
            $('.t4-p2-c5').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c5').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'professionnel') {
          var p2_c6 = new Circle(coeff2, '#FF4A69', '#6A32A5', 't4-p2-c6', 'topic4part2')
          p2_c6.getElement()

          var p2_p6 = percent2 + '%'
          var p2_r6 = res_text2
          $('.t4-p2-c6')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p6);
            $('#result-t4').text(p2_r6);
            $('.t4-p2-c6').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c6').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'materiel') {
          var p2_c7 = new Circle(coeff2, '#FF4A69', '#6A32A5', 't4-p2-c7', 'topic4part2')
          p2_c7.getElement()

          var p2_p7 = percent2 + '%'
          var p2_r7 = res_text2
          $('.t4-p2-c7')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p7);
            $('#result-t4').text(p2_r7);
            $('.t4-p2-c7').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c7').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'epanouissement') {
          var p2_c8 = new Circle(coeff2, '#FF4A69', '#6A32A5', 't4-p2-c8', 'topic4part2')
          p2_c8.getElement()

          var p2_p8 = percent2 + '%'
          var p2_r8 = res_text2
          $('.t4-p2-c8')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p8);
            $('#result-t4').text(p2_r8);
            $('.t4-p2-c8').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c8').find('object').css('box-shadow', 'none')
          });
        }
      }

    }
    else if (data.questions[4].responses[i].name == 'J’aurai quasiment fait tout ce dont je rêve aujourd’hui') {
      var c3 = new Circle(coeff, '#FFE650', '#FF4A69', 't4-p1-c3', 'topic4part1')
      c3.getElement()
      var p3 = percent + '%'
      var r3 = res_text
      $('.t4-p1-c3')
      .mouseenter(() => {
        $('#percent-t4').text(p3);
        $('#result-t4').text(r3);
        $('.t4-p1-c3').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t4').text('');
        $('#result-t4').text('');
        $('.t4-p1-c3').find('object').css('box-shadow', 'none')
      });

      for (var j = 0; j < aspectLength; j++) {

        var percent2 = data.questions[4].responses[i].aspect[j].percent
        var coeff2 = percent2
        var res_text2 = data.questions[4].responses[i].aspect[j].result

        if (data.questions[4].responses[i].aspect[j].name == 'familial') {
          var p2_c9 = new Circle(coeff2, '#FFE650', '#FF4A69', 't4-p2-c9', 'topic4part2')
          p2_c9.getElement()

          var p2_p9 = percent2 + '%'
          var p2_r9 = res_text2
          $('.t4-p2-c9')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p9);
            $('#result-t4').text(p2_r9);
            $('.t4-p2-c9').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c9').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'professionnel') {
          var p2_c10 = new Circle(coeff2, '#FFE650', '#FF4A69', 't4-p2-c10', 'topic4part2')
          p2_c10.getElement()

          var p2_p10 = percent2 + '%'
          var p2_r10 = res_text2
          $('.t4-p2-c10')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p10);
            $('#result-t4').text(p2_r10);
            $('.t4-p2-c10').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c10').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'materiel') {
          var p2_c11 = new Circle(coeff2, '#FFE650', '#FF4A69', 't4-p2-c11', 'topic4part2')
          p2_c11.getElement()

          var p2_p11 = percent2 + '%'
          var p2_r11 = res_text2
          $('.t4-p2-c11')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p11);
            $('#result-t4').text(p2_r11);
            $('.t4-p2-c11').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c11').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'epanouissement') {
          var p2_c12 = new Circle(coeff2, '#FFE650', '#FF4A69', 't4-p2-c12', 'topic4part2')
          p2_c12.getElement()

          var p2_p12 = percent2 + '%'
          var p2_r12 = res_text2
          $('.t4-p2-c12')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p12);
            $('#result-t4').text(p2_r12);
            $('.t4-p2-c12').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c12').find('object').css('box-shadow', 'none')
          });
        }
      }

    }
    else if (data.questions[4].responses[i].name == 'Absolument') {
      var c4 = new Circle(coeff, '#6A32A5', '#66BEFF', 't4-p1-c4', 'topic4part1')
      c4.getElement()
      var p4 = percent + '%'
      var r4 = res_text
      $('.t4-p1-c4')
      .mouseenter(() => {
        $('#percent-t4').text(p4);
        $('#result-t4').text(r4);
        $('.t4-p1-c4').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
      })
      .mouseleave(() => {
        $('#percent-t4').text('');
        $('#result-t4').text('');
        $('.t4-p1-c4').find('object').css('box-shadow', 'none')
      });

      for (var j = 0; j < aspectLength; j++) {

        var percent2 = data.questions[4].responses[i].aspect[j].percent
        var coeff2 = percent2
        var res_text2 = data.questions[4].responses[i].aspect[j].result

        if (data.questions[4].responses[i].aspect[j].name == 'familial') {
          var p2_c13 = new Circle(coeff2, '#6A32A5', '#66BEFF', 't4-p2-c13', 'topic4part2')
          p2_c13.getElement()

          var p2_p13 = percent2 + '%'
          var p2_r13 = res_text2
          $('.t4-p2-c13')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p13);
            $('#result-t4').text(p2_r13);
            $('.t4-p2-c13').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c13').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'professionnel') {
          var p2_c14 = new Circle(coeff2, '#6A32A5', '#66BEFF', 't4-p2-c14', 'topic4part2')
          p2_c14.getElement()

          var p2_p14 = percent2 + '%'
          var p2_r14 = res_text2
          $('.t4-p2-c14')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p14);
            $('#result-t4').text(p2_r14);
            $('.t4-p2-c14').find('object').css('box-shadow', '1px 1px 30px 0px #ffffff')
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
            $('.t4-p2-c14').find('object').css('box-shadow', 'none')
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'materiel') {
          var p2_c15 = new Circle(coeff2, '#6A32A5', '#66BEFF', 't4-p2-c15', 'topic4part2')
          p2_c15.getElement()

          var p2_p15 = percent2 + '%'
          var p2_r15 = res_text2
          $('.t4-p2-c15')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p15);
            $('#result-t4').text(p2_r15);
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
          });
        }
        else if (data.questions[4].responses[i].aspect[j].name == 'epanouissement') {
          var p2_c16 = new Circle(coeff2, '#6A32A5', '#66BEFF', 't4-p2-c16', 'topic4part2')
          p2_c16.getElement()

          var p2_p16 = percent2 + '%'
          var p2_r16 = res_text2
          $('.t4-p2-c16')
          .mouseenter(() => {
            $('#percent-t4').text(p2_p16);
            $('#result-t4').text(p2_r16);
          })
          .mouseleave(() => {
            $('#percent-t4').text('');
            $('#result-t4').text('');
          });
        }
      }

    }

  }


}

function drawTopic5(data) {
  let res6Length = data.questions[6].responses.length;

  for (var i = 0; i < res6Length; i++) {

    var people = data.questions[6].responses[i].people
    var coeff = people * 25
    var percent = data.questions[6].responses[i].percent
    var res_text = data.questions[6].responses[i].result

    if (data.questions[6].responses[i].name == "A l'étranger") {
      for (var l = 0; l < people; l++) {
        var t3 = new Trait(coeff,'#FF9750', 't5-t1', 'topic5')
        t3.getElement()
        var p1 = percent + '%'
        $('.t5-t1')
        .mouseenter(() => {
          $('.t5-t1').css('height', '5px');
          $('.p-t5-t1').text(p1)
        })
        .mouseleave(() => {
          $('.t5-t1').css('height', '2px');
          $('.p-t5-t1').text('')
        })
      }
    }
    else if (data.questions[6].responses[i].name == "Dans le même coin") {
      for (var j = 0; j < people; j++) {
        var t1 = new Trait(coeff,'#FF4A69', 't5-t2', 'topic5')
        t1.getElement()
        var p2 = percent + '%'
        $('.t5-t2')
        .mouseenter(() => {
          $('.t5-t2').css('height', '5px');
          $('.p-t5-t2').text(p2)
        })
        .mouseleave(() => {
          $('.t5-t2').css('height', '2px');
          $('.p-t5-t2').text('')
        })
      }
    }
    else if (data.questions[6].responses[i].name == "Dans le même pays") {
      for (var k = 0; k < people; k++) {
        var t2 = new Trait(coeff,'#FFE650', 't5-t3', 'topic5')
        t2.getElement()
        var p3 = percent + '%'
        $('.p-t5-t3').text(p3)
        $('.t5-t3')
        .mouseenter(() => {
          $('.t5-t3').css('height', '5px');
          $('.p-t5-t3').text(p3)
        })
        .mouseleave(() => {
          $('.t5-t3').css('height', '2px');
          $('.p-t5-t3').text('')
        })
      }
    }
    else if (data.questions[6].responses[i].name == "À l’autre bout de la terre") {
      for (var l = 0; l < people; l++) {
        var t4 = new Trait(coeff,'#45F4CA', 't5-t4', 'topic5')
        t4.getElement()
        var p4 = percent + '%'

        $('.t5-t4')
        .mouseenter(() => {
          $('.t5-t4').css('height', '5px');
          $('.p-t5-t4').text(p4)
        })
        .mouseleave(() => {
          $('.t5-t4').css('height', '2px');
          $('.p-t5-t4').text('')
        })
      }
    }

  }
}

function drawTopic6(data) {
  let res7Length = data.questions[7].responses.length;

  for (var i = 0; i < res7Length; i++) {

    var percent = data.questions[7].responses[i].percent
    var res_text = data.questions[7].responses[i].result

    if (data.questions[7].responses[i].name == "Oui") {
      var b1 = new Progress(percent, '#66BEFF', '#FF4A69', 't6-b1', 'topic6')
      b1.getElement()
      var p1 = percent + '%'
      var r1 = res_text
      $('.t6-b1')
      .mouseenter(() => {
        $('#percent-t6').text(p1);
        $('#result-t6').text(r1);
        $('.t6-b1').css('border', '3px solid #FFF')
      })
      .mouseleave(() => {
        $('#percent-t6').text('');
        $('#result-t6').text('');
        $('.t6-b1').css('border', 'none')
      });
    }
    else if (data.questions[7].responses[i].name == "Ni meilleure ni pire") {
      var b2 = new Progress(percent, '#FF4A69', '#FF4A69', 't6-b2', 'topic6')
      b2.getElement()
      var p2 = percent + '%'
      var r2 = res_text
      $('.t6-b2')
      .mouseenter(() => {
        $('#percent-t6').text(p2);
        $('#result-t6').text(r2);
        $('.t6-b2').css('border', '3px solid #FFF')
      })
      .mouseleave(() => {
        $('#percent-t6').text('');
        $('#result-t6').text('');
        $('.t6-b2').css('border', 'none')
      });
    }
    else if (data.questions[7].responses[i].name == "Non") {
      var b3 = new Progress(percent, '#FFE650', '#FF4A69', 't6-b3', 'topic6')
      b3.getElement()
      var p3 = percent + '%'
      var r3 = res_text
      $('.t6-b3')
      .mouseenter(() => {
        $('#percent-t6').text(p3);
        $('#result-t6').text(r3);
        $('.t6-b3').css('border', '3px solid #FFF')
      })
      .mouseleave(() => {
        $('#percent-t6').text('');
        $('#result-t6').text('');
        $('.t6-b3').css('border', 'none')
      });
    }

  }
}

function drawFinal(data) {

  var final_length = data.conclusion.length

  for (var i = 0; i < final_length; i++) {

    var percent = data.conclusion[i].percent
    var res = data.conclusion[i].result
    var coeff = percent * 3

    if (data.conclusion[i].name == 'optimist') {
      var c1 = new Circle(coeff, '#66BEFF', '#45F4CA', 'f1', 'final')
      c1.getElement()
      var p1 = percent + '%'
      var r1 = res
      $('.final-p1').text(p1);
      $('.final-r1').text(r1);
    }
    else if (data.conclusion[i].name == 'pessimist') {
      var c2 = new Circle(coeff, '#FF4A69', '#FFE650', 'f2', 'final')
      c2.getElement()
      var p2 = percent + '%'
      var r2 = res
      $('.final-p2').text(p2);
      $('.final-r2').text(r2);
    }

  }

}

eventListener()

})
