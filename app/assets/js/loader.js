
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
