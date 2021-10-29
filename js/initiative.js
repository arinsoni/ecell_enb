    var cards, nCards, cover, openContent, openContentText, pageIsOpen = false,
      openContentImage, closeContent, windowWidth, windowHeight, currentCard;

    init();

    function init() {
      resize();
      selectElements();
      attachListeners();
    }

    function selectElements() {
      cards = document.getElementsByClassName('card'),
        nCards = cards.length,
        cover = document.getElementById('cover'),
        openContent = document.getElementById('open-content'),
        openContentText = document.getElementById('open-content-text'),
        openContentImage = document.getElementById('open-content-image');
      closeContent = document.getElementById('close-content');
    }


    function attachListeners() {
      for (var i = 0; i < nCards; i++) {
        if (window.CP.shouldStopExecution(0)) break;
        attachListenerToCard(i);
      } window.CP.exitedLoop(0);
      closeContent.addEventListener('click', onCloseClick);
      window.addEventListener('resize', resize);
    }

    function attachListenerToCard(i) {
      cards[i].addEventListener('click', function (e) {
        var card = getCardElement(e.target);
        onCardClick(card, i);
      });
    }

    function onCardClick(card, i) {
      currentCard = card;
      currentCard.className += ' clicked';
      setTimeout(function () { animateCoverUp(currentCard); }, 500);
      animateOtherCards(currentCard, true);
      openContent.className += ' open';

    }


    function animateCoverUp(card) {
      var cardPosition = card.getBoundingClientRect();
      var cardStyle = getComputedStyle(card);
      setCoverPosition(cardPosition);
      setCoverColor(cardStyle);
      scaleCoverToFillWindow(cardPosition);
      openContentText.innerHTML = '<h1>' + card.children[2].textContent + '</h1>' + '<p>' + card.children[3].textContent + '</p>';
      openContentImage.src = card.children[1].src;
      setTimeout(function () {
        window.scroll(0, 0);
        pageIsOpen = true;
      }, 300);
    }

    function animateCoverBack(card) {
      var cardPosition = card.getBoundingClientRect();
      setCoverPosition(cardPosition);
      scaleCoverToFillWindow(cardPosition);
      cover.style.transform = 'scaleX(' + 1 + ') scaleY(' + 1 + ') translate3d(' + 0 + 'px, ' + 0 + 'px, 0px)';
      setTimeout(function () {
        openContentText.innerHTML = '';
        openContentImage.src = '';
        cover.style.width = '0px';
        cover.style.height = '0px';
        pageIsOpen = false;
        currentCard.className = currentCard.className.replace(' clicked', '');
      }, 301);
    }

    function setCoverPosition(cardPosition) {
      cover.style.left = cardPosition.left + 'px';
      cover.style.top = cardPosition.top + 'px';
      cover.style.width = cardPosition.width + 'px';
      cover.style.height = cardPosition.height + 'px';
    }

    function setCoverColor(cardStyle) {
      cover.style.backgroundColor = cardStyle.backgroundColor;
    }

    function scaleCoverToFillWindow(cardPosition) {
      var scaleX = windowWidth / cardPosition.width;
      var scaleY = windowHeight / cardPosition.height;
      var offsetX = (windowWidth / 2 - cardPosition.width / 2 - cardPosition.left) / scaleX;
      var offsetY = (windowHeight / 2 - cardPosition.height / 2 - cardPosition.top) / scaleY;
      cover.style.transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ') translate3d(' + offsetX + 'px, ' + offsetY + 'px, 0px)';
    }

    function onCloseClick() {
      openContent.className = openContent.className.replace(' open', '');
      animateCoverBack(currentCard);
      animateOtherCards(currentCard, false);
    }

    function animateOtherCards(card, out) {
      var delay = 100;
      for (var i = 0; i < nCards; i++) {
        if (window.CP.shouldStopExecution(1)) break;
        if (cards[i] === card) continue;
        if (out) animateOutCard(cards[i], delay); else
          animateInCard(cards[i], delay);
        delay += 100;
      } window.CP.exitedLoop(1);
    }

    function animateOutCard(card, delay) {
      setTimeout(function () {
        card.className += ' out';
      }, delay);
    }

    function animateInCard(card, delay) {
      setTimeout(function () {
        card.className = card.className.replace(' out', '');
      }, delay);
    }

    function getCardElement(el) {
      if (el.className.indexOf('card ') > -1) return el; else
        return getCardElement(el.parentElement);
    }

    function resize() {
      if (pageIsOpen) {

        var cardPosition = currentCard.getBoundingClientRect();
        setCoverPosition(cardPosition);
        scaleCoverToFillWindow(cardPosition);
      }
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    }

    var paragraphText = '<p>Somebody once told me the world is gonna roll me. I ain\'t the sharpest tool in the shed. She was looking kind of dumb with her finger and her thumb in the shape of an "L" on her forehead. Well the years start coming and they don\'t stop coming. Fed to the rules and I hit the ground running. Didn\'t make sense not to live for fun. Your brain gets smart but your head gets dumb. So much to do, so much to see. So what\'s wrong with taking the back streets? You\'ll never know if you don\'t go. You\'ll never shine if you don\'t glow.</p><p>Hey now, you\'re an all-star, get your game on, go play. Hey now, you\'re a rock star, get the show on, get paid. And all that glitters is gold. Only shooting stars break the mold.</p><p>It\'s a cool place and they say it gets colder. You\'re bundled up now, wait till you get older. But the meteor men beg to differ. Judging by the hole in the satellite picture. The ice we skate is getting pretty thin. The water\'s getting warm so you might as well swim. My world\'s on fire, how about yours? That\'s the way I like it and I never get bored.</p>';

  